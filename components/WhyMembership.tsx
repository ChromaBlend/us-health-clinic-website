import React from 'react';
import { Icons } from './Icons';
import { FadeIn } from './Animations';

export const WhyMembership = () => {
    const features = [
        "Doctor-led comprehensive care",
        "100+ biomarkers analyzed",
        "Personalized optimization plan",
        "Root-cause resolution",
        "Holistic lifestyle integration",
        "Ongoing support & coaching"
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="relative group">
                        {/* Main Card */}
                        <div className="relative z-10 border-2 border-teal-600/30 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row bg-white p-2">

                            {/* Left Side: Branding/Intro */}
                            <div className="w-full md:w-5/12 p-6 sm:p-8 md:p-16 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start bg-white relative gap-4">
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black leading-[1.1]">
                                    We're a <br />
                                    whole <br />
                                    different <br />
                                    breed
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-500 font-sans md:mt-6 text-right md:text-left max-w-[140px] sm:max-w-[180px] md:max-w-xs leading-normal">
                                    A proactive, data-driven approach to help you live healthier, longer.
                                </p>
                            </div>

                            {/* Right Side: Comparison Table */}
                            <div className="w-full md:w-7/12 bg-teal-50/30 rounded-[2rem] p-6 md:p-12 relative flex flex-col justify-center">
                                {/* Header Row */}
                                <div className="grid grid-cols-[1fr_auto_auto] gap-3 md:gap-12 mb-8 border-b border-teal-100/50 pb-6">
                                    <div className="px-2 md:px-4">
                                        {/* Spacer for feature name */}
                                    </div>
                                    <div className="px-1 text-center w-14 md:w-16">
                                        <span className="text-[10px] md:text-xs font-bold text-teal-800 uppercase tracking-widest block">
                                            USHC
                                        </span>
                                    </div>
                                    <div className="px-1 text-center w-14 md:w-16">
                                        <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest block">
                                            Others
                                        </span>
                                    </div>
                                </div>

                                {/* Feature Rows */}
                                <div className="space-y-6">
                                    {features.map((feature, i) => (
                                        <div key={i} className="grid grid-cols-[1fr_auto_auto] gap-3 md:gap-12 items-center group/item hover:bg-white/50 rounded-xl transition-colors duration-300">
                                            {/* Feature Name */}
                                            <div className="px-2 md:px-4 py-2">
                                                <span className="font-sans text-teal-900 font-medium text-sm md:text-lg">
                                                    {feature}
                                                </span>
                                            </div>

                                            {/* USHC Check */}
                                            <div className="px-2 py-2 flex justify-center w-16">
                                                <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white shadow-sm">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Others Empty Circle */}
                                            <div className="px-2 py-2 flex justify-center w-16">
                                                <div className="w-8 h-8 rounded-full border-2 border-gray-100 bg-white shadow-inner"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

