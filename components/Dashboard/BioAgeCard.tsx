import React from 'react';
import { Icons } from '../Icons';
import { motion } from 'framer-motion';

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const BioAgeCard = () => {
    // Convex data
    const profile = useQuery(api.dashboard.getHealthProfile);

    // Default/Fallback data
    const bioAge = profile?.biologicalAge ?? -8;
    const currentAge = profile?.biologicalAge ? 28 + profile.biologicalAge : 28; // Example calculation logic or hardcoded from DB
    const chronoAge = profile?.chronologicalAge ?? 36;

    const bars = profile?.bars || Array.from({ length: 20 }, (_, i) => i < 14 ? 1 : 0); // Mock-ish bars if missing

    return (
        <div className="bg-[#0D6B5E] text-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-between">
            {/* Abstract Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100" stroke="white" fill="transparent" strokeWidth="0.5" />
                    <path d="M0 80 C 30 20 60 20 100 80" stroke="white" fill="transparent" strokeWidth="0.5" />
                    <path d="M0 60 C 40 40 70 40 100 60" stroke="white" fill="transparent" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold mb-8">
                    Biological age
                </div>

                <div className="flex items-baseline gap-2 mb-8">
                    <h2 className="text-7xl md:text-8xl font-serif font-bold tracking-tight">
                        {bioAge}
                    </h2>
                    <span className="text-2xl font-serif text-white/80 italic">Years</span>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-10">
                    <div>
                        <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1.5">Biological age: 28</p>
                    </div>
                    <div>
                        <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1.5">Chronological age: 36</p>
                    </div>
                </div>
            </div>

            <div className="relative z-10 w-full mt-auto">
                <div className="flex items-end gap-1.5 h-12 w-full">
                    <div className="flex items-end gap-1.5 h-12 w-full">
                        {bars.map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: val ? '100%' : '60%' }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                className={`flex-1 rounded-full ${val ? 'bg-[#96E072]' : 'bg-white/20'}`}
                                style={{
                                    height: val ? '32px' : '24px',
                                    opacity: val ? 1 : 0.4
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
