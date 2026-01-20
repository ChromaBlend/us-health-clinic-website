import React from 'react';
import { Icons } from '../Icons';

export const BenefitsSummary = () => {
    return (
        <div className="bg-[#0B4F46] rounded-[2.5rem] p-6 text-white relative overflow-hidden flex flex-col gap-6">
            <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF1A] backdrop-blur rounded-full border border-white/10">
                        <Icons.ShieldCheck className="w-3.5 h-3.5 text-white" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white">Wellness Plus</span>
                    </div>
                    <span className="text-white/40 text-[10px]">Renews Dec 2025</span>
                </div>

                <div className="space-y-6 mb-8">
                    <div>
                        <div className="flex justify-between text-xs mb-2">
                            <span className="text-white font-medium">Annual Panel</span>
                            <span className="text-[#4FD1C5]">1/1 Used</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-[#4FD1C5] h-1.5 rounded-full w-full shadow-[0_0_8px_rgba(79,209,197,0.6)]"></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between text-xs mb-2">
                            <span className="text-white font-medium">Doctor Consults</span>
                            <span className="text-[#4FD1C5]">2/4 Used</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-[#4FD1C5] h-1.5 rounded-full w-1/2 shadow-[0_0_8px_rgba(79,209,197,0.4)]"></div>
                        </div>
                    </div>
                </div>

                <button className="w-full py-3.5 bg-white text-[#0B4F46] rounded-2xl font-bold text-sm hover:bg-white/90 transition-all shadow-lg active:scale-[0.98]">
                    Manage Membership
                </button>
            </div>
        </div>
    );
};
