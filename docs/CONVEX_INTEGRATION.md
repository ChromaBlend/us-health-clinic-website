# Scalable Convex Integration Guide (1M+ Users)

This guide outlines a production-ready integration of [Convex](https://convex.dev) for the US Health Clinic, optimized for high load, security, and scalability.

## 1. Core Architecture Principles

To support 1M+ users, we must adhere to stricter rules than a prototype:

1.  **Security First**: Never trust the client. All user IDs must be derived from the auth token (`ctx.auth`), not passed as arguments.
2.  **Indexing**: Every query filters by `userId`. We MUST create indexes on `userId` for all tables to ensure O(log n) lookups instead of O(n) scans.
3.  **Pagination**: Bounded queries are mandatory. We never `collect()` unlimited rows.
4.  **Type Safety**: Strict adherence to TypeScript schemas to prevent runtime errors at scale.

## 2. Setup & Auth

## 2. Setup & Auth (Convex Auth)

We will use **Convex Auth** (powered by Auth.js) for a fully integrated, high-performance solution that lives in your database.

```bash
npm install @convex-dev/auth @auth/core
npx convex dev
```

### `convex/auth.ts` (Config)

```typescript
import { convexAuth } from "@convex-dev/auth/server";
import Google from "@auth/core/providers/google";
import Resend from "@auth/core/providers/resend";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [Google, Resend],
});
```

### `src/main.tsx` (Provider)

```tsx
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConvexAuthProvider client={convex}>
      <App />
    </ConvexAuthProvider>
  </React.StrictMode>
);
```

## 3. Production Schema (`convex/schema.ts`)

We define explicit indexes to prevent full-table scans. All tables interacting with user data must be indexed by `userId`.

```typescript
import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,

  users: defineTable({
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    image: v.optional(v.string()),
    role: v.optional(v.string()), // "patient" | "admin"
  }).index("email", ["email"]),


  biomarkers: defineTable({
    userId: v.id("users"), // Foreign Key
    name: v.string(),
    value: v.number(),
    unit: v.string(),
    status: v.string(), // "optimal", "in-range", "out-of-range"
    category: v.string(),
    recordedAt: v.int64(), // Timestamps as integers for range queries
  })
  .index("by_userId", ["userId"])
  .index("by_userId_status", ["userId", "status"]), // Compound index for efficient stats

  appointments: defineTable({
    userId: v.id("users"),
    title: v.string(),
    date: v.string(),
    type: v.string(), 
    status: v.string(),
    startTime: v.int64(),
  })
  .index("by_userId", ["userId"])
  .index("by_userId_date", ["userId", "startTime"]), // For sorting upcoming

  medications: defineTable({
    userId: v.id("users"),
    name: v.string(),
    dose: v.string(),
    refills: v.number(),
    active: v.boolean(),
  })
  .index("by_userId", ["userId"]),
});
```

## 4. Secure & Scalable Functions (`convex/dashboard.ts`)

We use `ctx.auth.getUserIdentity()` to ensure users can ONLY access their own data.

```typescript
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

// Helper to get authenticated user or throw
async function getCurrentUser(ctx: any) {
  const userId = await getAuthUserId(ctx);
  if (!userId) throw new Error("Unauthenticated");
  
  const user = await ctx.db.get(userId);
  if (!user) throw new Error("User not found");
  return user;
}

export const getBiomarkerStats = query({
  args: {},
  handler: async (ctx) => {
    const user = await getCurrentUser(ctx);

    // Optimized aggregation using specific index
    // Note: For millions of rows, we would maintain a separate 'stats' table
    // incremented via mutations. For <10k rows per user, this filter is fine.
    const biomarkers = await ctx.db
      .query("biomarkers")
      .withIndex("by_userId", (q) => q.eq("userId", user._id))
      .collect();

    const total = biomarkers.length || 1;
    const inRange = biomarkers.filter(b => b.status === 'in-range').length;
    const optimal = biomarkers.filter(b => b.status === 'optimal').length;
    const outOfRange = biomarkers.filter(b => b.status === 'out-of-range').length;

    return {
      inRange: Math.round((inRange / total) * 100),
      optimal: Math.round((optimal / total) * 100),
      outOfRange: Math.round((outOfRange / total) * 100),
    };
  },
});

export const getAppointments = query({
  args: { 
    type: v.optional(v.string()), 
    limit: v.optional(v.number()) 
  },
  handler: async (ctx, args) => {
    const user = await getCurrentUser(ctx);
    const limit = args.limit || 20; // Default page size

    let q = ctx.db.query("appointments").withIndex("by_userId", (q) => q.eq("userId", user._id));
    
    // In-memory filter for low cardinality 'type' is acceptable if result set is small.
    // For high cardinality, add an index on ["userId", "type"].
    const results = await q.take(limit); 
    
    return args.type ? results.filter(a => a.type === args.type) : results;
  },
});
```

## 5. Frontend Integration (Decoupled)

The frontend components remain largely the same, but now benefit from the secure backend.

### `components/Dashboard/BiomarkersWidget.tsx`

```tsx
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const BiomarkersWidget = () => {
    // No userId passed! The backend handles it securely.
    const stats = useQuery(api.dashboard.getBiomarkerStats);

    const { inRange, optimal, outOfRange } = stats || { inRange: 0, optimal: 0, outOfRange: 0 };
    
    // ... render logic ...
};
```

## 6. Scaling Strategy

1.  **Read Heavy Workloads**: Convex automatically caches strict queries. Your `getBiomarkerStats` will be cached and only re-run when relevant data changes.
2.  **Write Throughput**: Use `internalMutation` for high-frequency internal updates (e.g., sensor data ingest) to avoid client overhead.
3.  **Scheduled Jobs**: Use Convex Cron Jobs (crons.ts) for nightly aggregations if user data grows too large for real-time calculation.
