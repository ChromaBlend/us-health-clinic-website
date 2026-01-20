import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/UI';
import { Icons } from '../components/Icons';
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth, AuthLoading } from "convex/react";

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
            const result = await signIn("password", { email, password, flow: "signIn" });

            // If signingIn is true, the auth was successful
            // The Authenticated component will handle the redirect
            // If there's a redirect URL (OAuth flow), we would handle it here
            if (result?.redirect) {
                window.location.href = result.redirect.toString();
            }
            // For password auth, signingIn should be true on success
            // The component will re-render and Authenticated will redirect
            // Reset loading state in case the re-render doesn't happen immediately
            setIsLoading(false);
        } catch (err: any) {
            console.error(err);
            setError("Invalid email or password");
            setIsLoading(false);
        }
    };

    // Show loading state while auth is being checked
    if (isAuthLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-700"></div>
            </div>
        );
    }

    // If authenticated, useEffect will handle redirect, but we can also return null
    if (isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen bg-[#FDFBF7] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-teal-50/50 rounded-full blur-3xl opacity-60" />
                <div className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] bg-orange-50/50 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <Link to="/" className="flex justify-center mb-10 group">
                    <div className="w-10 h-10 bg-teal-700 text-white flex items-center justify-center rounded-tr-xl rounded-bl-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <span className="font-serif font-bold text-xl">U</span>
                    </div>
                </Link>
                <h2 className="mt-6 text-center text-4xl font-serif font-medium text-gray-900 tracking-tight">
                    Welcome back
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Sign in to access your health insights
                </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[420px] relative z-10">
                <div className="bg-white py-12 px-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] rounded-3xl border border-gray-100/50">
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100">
                                {error}
                            </div>
                        )}
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 ml-1 mb-1.5">
                                    Email address
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Icons.Mail className="h-5 w-5 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="appearance-none block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 text-gray-900 sm:text-sm bg-gray-50/30 focus:bg-white"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 ml-1 mb-1.5">
                                    Password
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Icons.Lock className="h-5 w-5 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="appearance-none block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 text-gray-900 sm:text-sm bg-gray-50/30 focus:bg-white"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded cursor-pointer"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-500 cursor-pointer select-none">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-teal-700 hover:text-teal-600 transition-colors">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full justify-center py-3.5 text-base shadow-teal-700/20 hover:shadow-teal-700/30"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Signing in...
                                    </span>
                                ) : (
                                    'Sign in'
                                )}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-center text-sm text-gray-500">
                            Don't have an account?{' '}
                            <Link to="/signup" className="font-medium text-teal-700 hover:text-teal-600 transition-colors">
                                Sign up for access
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link to="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2">
                        <Icons.ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
