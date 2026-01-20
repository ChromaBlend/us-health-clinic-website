# Convex Auth Setup Guide

A comprehensive guide to setting up Convex Auth with the Password provider for React applications.

---

## Prerequisites

- A Convex project (`npx convex init`)
- React application with `convex/react` configured
- `@convex-dev/auth` package installed

```bash
npm install @convex-dev/auth
```

---

## Step 1: Generate JWT Keys

Convex Auth requires RSA256 keys for signing and verifying JWTs.

### Generate Keys Script

Run this in your project directory:

```bash
node -e "
const { exportJWK, exportPKCS8, generateKeyPair } = require('jose');

(async () => {
  const keys = await generateKeyPair('RS256', { extractable: true });
  const privateKey = await exportPKCS8(keys.privateKey);
  const publicKey = await exportJWK(keys.publicKey);
  const jwks = JSON.stringify({ keys: [{ use: 'sig', ...publicKey }] });
  
  console.log('JWT_PRIVATE_KEY=\"' + privateKey.trimEnd().replace(/\\n/g, ' ') + '\"');
  console.log('');
  console.log('JWKS=' + jwks);
})();
"
```

### Set Environment Variables on Convex

```bash
# Set JWKS (public key)
npx convex env set JWKS '{"keys":[{"use":"sig","kty":"RSA","n":"...","e":"AQAB"}]}'

# Set JWT_PRIVATE_KEY (use -- to prevent dash interpretation)
npx convex env set JWT_PRIVATE_KEY -- "-----BEGIN PRIVATE KEY----- ... -----END PRIVATE KEY-----"

# Set SITE_URL for local development
npx convex env set SITE_URL http://localhost:3000
```

> [!IMPORTANT]
> Both `JWT_PRIVATE_KEY` and `JWKS` must be from the **same key pair**. If they don't match, token validation will fail.

---

## Step 2: Create `convex/auth.ts`

```ts
import { convexAuth } from "@convex-dev/auth/server";
import { Password } from "@convex-dev/auth/providers/Password";
import { DataModel } from "./_generated/dataModel";

const CustomPassword = Password<DataModel>({
    profile(params) {
        return {
            email: params.email as string,
            name: params.name as string,
        };
    },
});

export const { auth, signIn, signOut, store } = convexAuth({
    providers: [CustomPassword],
});
```

---

## Step 3: Create `convex/auth.config.ts`

```ts
export default {
    providers: [
        {
            domain: process.env.CONVEX_SITE_URL,
            applicationID: "convex",
        },
    ],
};
```

> [!WARNING]
> Use `CONVEX_SITE_URL` (automatically set by Convex), not `SITE_URL`.

---

## Step 4: Create `convex/http.ts` (CRITICAL!)

This is **often missed** and causes "No auth provider found" errors.

```ts
import { httpRouter } from "convex/server";
import { auth } from "./auth";

const http = httpRouter();

auth.addHttpRoutes(http);

export default http;
```

This sets up:
- `/.well-known/openid-configuration` (OpenID Connect discovery)
- `/.well-known/jwks.json` (JWT Web Key Set)
- `/api/auth/signin/*` (OAuth sign-in routes)
- `/api/auth/callback/*` (OAuth callback routes)

---

## Step 5: Set Up React Provider

### `index.tsx` / `main.tsx`

```tsx
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

root.render(
  <ConvexAuthProvider client={convex}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConvexAuthProvider>
);
```

---

## Step 6: Create Sign-In Page

```tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth } from "convex/react";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const { signIn } = useAuthActions();
    const { isAuthenticated, isLoading: isAuthLoading } = useConvexAuth();

    // Redirect when authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            await signIn("password", { email, password, flow: "signIn" });
            setIsLoading(false);
        } catch (err: any) {
            setError("Invalid email or password");
            setIsLoading(false);
        }
    };

    if (isAuthLoading) {
        return <div>Loading...</div>;
    }

    if (isAuthenticated) {
        return null; // useEffect will redirect
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
        </form>
    );
};
```

---

## Step 7: Protect Routes

### Using `useConvexAuth` Hook

```tsx
import { useConvexAuth } from "convex/react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/signin" replace />;
    }

    return children;
};
```

### In `App.tsx`

```tsx
<Route 
    path="/dashboard/*" 
    element={
        <ProtectedRoute>
            <DashboardLayout />
        </ProtectedRoute>
    } 
/>
```

---

## Checklist

| Step | File | Required |
|------|------|----------|
| 1 | Set `JWT_PRIVATE_KEY` env var | ✅ |
| 2 | Set `JWKS` env var | ✅ |
| 3 | Set `SITE_URL` env var | ✅ |
| 4 | Create `convex/auth.ts` | ✅ |
| 5 | Create `convex/auth.config.ts` | ✅ |
| 6 | Create `convex/http.ts` | ✅ |
| 7 | Wrap app with `ConvexAuthProvider` | ✅ |
| 8 | Use `useConvexAuth` for auth state | ✅ |

---

## Common Errors & Solutions

### "No auth provider found matching the given token"
- **Cause**: `convex/auth.config.ts` is missing or misconfigured
- **Fix**: Create the file with `CONVEX_SITE_URL`

### "Missing environment variable JWKS"
- **Cause**: `JWKS` env var not set on Convex backend
- **Fix**: Generate and set JWKS using the script above

### Sign-in succeeds but no redirect
- **Cause**: Not using reactive auth state
- **Fix**: Use `useConvexAuth()` hook with `useEffect` for navigation

### "500 Internal Server Error" on auth
- **Cause**: `convex/http.ts` is missing
- **Fix**: Create the file with `auth.addHttpRoutes(http)`

---

## Production Deployment

1. Update `SITE_URL` to your production URL:
   ```bash
   npx convex env set SITE_URL https://yourdomain.com --prod
   ```

2. Ensure all environment variables are set on the production deployment.

3. Test the complete auth flow on staging before going live.
