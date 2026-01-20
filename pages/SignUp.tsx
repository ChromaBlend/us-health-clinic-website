import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/UI';
import { Icons } from '../components/Icons';
import { useAuthActions } from "@convex-dev/auth/react";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { Navigate } from "react-router-dom";

const SignUp = () => {
    const { signIn } = useAuthActions();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            await signIn("password", { email, password, name, flow: "signUp" });
            navigate('/dashboard'); // Auto redirect on success? usually handled by auth state change but this is safe
        } catch (err: any) {
            setError(err.message || "Something went wrong. Please try again.");
            setIsLoading(false);
        }
    };

    return (
        <>
            <Authenticated>
                <Navigate to="/dashboard" replace />
            </Authenticated>
            <AuthLoading>
                <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-700"></div>
                </div>
            </AuthLoading>
            <Unauthenticated>
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
                            Create your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Start your journey to optimal health
                        </p>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[420px] relative z-10">
                        <div className="bg-white py-12 px-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] rounded-3xl border border-gray-100/50">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {error && (
                                    <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100">
                                        {error}
                                    </div>
                                )}

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 ml-1 mb-1.5">
                                        Full Name
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Icons.User className="h-5 w-5 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
                                        </div>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="appearance-none block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 text-gray-900 sm:text-sm bg-gray-50/30 focus:bg-white"
                                            placeholder="Sarah Johnson"
                                        />
                                    </div>
                                </div>

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
                                            autoComplete="new-password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="appearance-none block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 text-gray-900 sm:text-sm bg-gray-50/30 focus:bg-white"
                                            minLength={8}
                                        />
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
                                                Creating account...
                                            </span>
                                        ) : (
                                            'Create account'
                                        )}
                                    </Button>
                                </div>
                            </form>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="text-center text-sm text-gray-500">
                                    Already have an account?{' '}
                                    <Link to="/signin" className="font-medium text-teal-700 hover:text-teal-600 transition-colors">
                                        Sign in
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
            </Unauthenticated>
        </>
    );
};

export default SignUp;
