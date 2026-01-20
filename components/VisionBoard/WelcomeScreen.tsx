import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Quote, X } from 'lucide-react';
import { ScaleIn } from '../Animations';

interface WelcomeScreenProps {
    onComplete: (name: string) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onComplete(name);
        }
    };

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop with blur - using separate motion div to ensure it covers everything */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <div className="relative z-10 w-full max-w-5xl my-auto">
                <ScaleIn delay={0.1} className="w-full">
                    <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-gray-100/50">

                        {/* LEFT PANEL - Visual/Dark */}
                        <div className="w-full md:w-5/12 bg-teal-900 relative p-8 md:p-12 flex flex-col justify-between text-white overflow-hidden min-h-[300px] md:min-h-auto">
                            {/* Background Image/Overlay */}
                            <div className="absolute inset-0 opacity-40 mix-blend-overlay"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=1000&auto=format&fit=crop')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />
                            {/* Gradient Overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-900/40 to-teal-900/10" />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 text-teal-200 font-semibold tracking-wide uppercase text-sm">
                                    <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center">
                                        <Sparkles size={14} className="text-white" />
                                    </div>
                                    <span>US Health Clinic</span>
                                </div>
                            </div>

                            <div className="relative z-10 mt-auto pt-12">
                                <Quote size={40} className="text-teal-400 mb-6 opacity-80" />
                                <h2 className="font-serif text-2xl md:text-3xl leading-snug mb-8 text-white">
                                    "The only limit to our realization of tomorrow will be our doubts of today."
                                </h2>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-teal-200/20 backdrop-blur-md flex items-center justify-center border border-white/10 shrink-0">
                                        <span className="font-serif italic text-teal-100 text-lg">FD</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-white text-lg">Franklin D. Roosevelt</p>
                                        <p className="text-teal-300 text-sm uppercase tracking-wider font-medium">Visionary</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT PANEL - Form */}
                        <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center bg-white relative">
                            {/* Close Button */}
                            <button
                                onClick={() => onComplete('')}
                                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 bg-transparent hover:bg-gray-50 rounded-full transition-all"
                                aria-label="Skip onboarding"
                            >
                                <X size={24} />
                            </button>

                            <div className="max-w-md mx-auto w-full">
                                <div className="mb-8">
                                    <span className="text-teal-600 font-semibold tracking-wide uppercase text-xs mb-2 block">Get Started</span>
                                    <h1 className="font-serif text-4xl text-gray-900 mb-3 text-left">Welcome, Visionary.</h1>
                                    <p className="text-gray-500 text-lg text-left leading-relaxed">
                                        Let's set the stage for your future self.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 ml-1">What should we call you?</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter your name"
                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all placeholder:text-gray-400 text-lg bg-gray-50 hover:bg-white hover:border-gray-300"
                                            autoFocus
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="goal" className="block text-sm font-semibold text-gray-700 ml-1">Main 2026 Goal <span className="text-gray-400 font-normal">(Optional)</span></label>
                                        <input
                                            type="text"
                                            id="goal"
                                            value={goal}
                                            onChange={(e) => setGoal(e.target.value)}
                                            placeholder="e.g. Find inner peace"
                                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all placeholder:text-gray-400 text-lg bg-gray-50 hover:bg-white hover:border-gray-300"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-4 px-6 rounded-xl text-lg font-medium hover:bg-black transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-gray-900/10 group mt-4 transform"
                                    >
                                        Start Creating
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </ScaleIn>
            </div>
        </div>
    );
};
