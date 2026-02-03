import React from 'react';
import { FadeIn } from './Animations';

export const WhyMembership = () => {
    // Shared row height for perfect alignment
    const ROW_HEIGHT = "h-20";

    const comparisonData = [
        {
            label: "Biomarkers tested",
            traditional: "10–20",
            ushc: "100+"
        },
        {
            label: "Detection Stage",
            traditional: "Reactive",
            ushc: "Early/preventive"
        },
        {
            label: "Assessment scope",
            traditional: "Fragmented",
            ushc: "Whole-body"
        },
        {
            label: "Treatment focus",
            traditional: "Symptoms",
            ushc: "Root cause"
        },
        {
            label: "Action plan",
            traditional: "General",
            ushc: "Personalized"
        },
        {
            label: "Progress tracking",
            traditional: "Visit-based",
            ushc: "Ongoing"
        }
    ];

    return (
        <section className="py-12 md:py-24 bg-white relative overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="text-center mb-10 md:mb-20 max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-6 tracking-tight font-serif">
                            Move Beyond Basic Bloodwork.
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                            Standard screenings focus on disease detection. We use precision diagnostics to uncover root causes and optimize your health before symptoms appear.
                        </p>
                    </div>

                    {/* MOBILE LAYOUT (Cards) - Visible only on small screens */}
                    <div className="block md:hidden space-y-4">
                        {comparisonData.map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                <div className="bg-gray-50/50 px-5 py-3 border-b border-gray-100">
                                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                        {item.label}
                                    </h3>
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-100">
                                    <div className="p-4 text-center">
                                        <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1">Traditional</div>
                                        <div className="text-lg font-medium text-gray-500">
                                            {item.traditional}
                                        </div>
                                    </div>
                                    <div className="p-4 text-center bg-teal-50/30">
                                        <div className="text-[10px] uppercase tracking-wider text-teal-600 font-bold mb-1">US Health Clinic</div>
                                        <div className="text-xl font-bold text-teal-800 font-serif">
                                            {item.ushc}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* DESKTOP LAYOUT (Side-by-side) - Visible only on medium+ screens */}
                    <div className="hidden md:flex flex-row items-center justify-center relative">

                        {/* Left Side: Traditional Care (White Card) */}
                        <div className="w-3/5 bg-white rounded-[2rem] border border-gray-100 shadow-lg relative z-0 mr-[-40px] pr-16 pb-12 pt-16">

                            {/* Header Row - Aligned with Grid */}
                            <div className="grid grid-cols-[1.2fr_1fr] gap-4 px-10 mb-8 items-end">
                                <div></div> {/* Empty for Label column */}
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-black leading-tight">Traditional Care</h3>
                                </div>
                            </div>

                            {/* Data Rows */}
                            <div className="space-y-0 px-10">
                                {comparisonData.map((item, i) => (
                                    <div key={i} className={`grid grid-cols-[1.2fr_1fr] gap-4 items-center ${ROW_HEIGHT} border-b border-gray-50 last:border-0`}>
                                        <div className="text-teal-700 font-medium text-xl text-left">
                                            {item.label}
                                        </div>
                                        <div className="text-gray-900 text-center text-xl">
                                            {item.traditional}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* Right Side: US Health Clinic (Teal Card - "Pop-out") */}
                        <div className="w-[420px] bg-[#0f766e] text-white rounded-[2rem] shadow-2xl relative z-10 p-8 pb-12 py-16 transform scale-105 origin-center">

                            {/* Logo / Header */}
                            <div className="flex flex-col items-center mb-10 h-[60px] justify-end">
                                <div className="text-center">
                                    <span className="block text-3xl font-bold leading-none font-serif">US</span>
                                    <span className="block text-3xl font-bold leading-none font-serif">Health</span>
                                    <span className="block text-[10px] tracking-[0.25em] font-light mt-1 text-teal-100 opacity-90 uppercase font-sans">Clinic</span>
                                </div>
                            </div>

                            {/* Values - Aligned with shared height */}
                            <div className="space-y-0 mt-6">
                                {comparisonData.map((item, i) => (
                                    <div key={i} className={`flex items-center justify-center ${ROW_HEIGHT} border-b border-teal-600/30 last:border-0`}>
                                        <div className="text-2xl font-medium text-center text-white font-serif">
                                            {item.ushc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
