import React, { useEffect, useRef } from 'react';
import { Button } from '../components/UI';
import { Icons } from '../components/Icons';
import { Link } from 'react-router-dom';

// --- Components ---

const Marquee = ({ text }: { text: string }) => (
    <div className="bg-teal-900 border-y border-teal-800 overflow-hidden py-4 relative z-20">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-teal-200/40 font-serif text-lg tracking-widest uppercase items-center">
            <span>{text}</span>
            <Icons.Star size={16} />
            <span>{text}</span>
            <Icons.Star size={16} />
            <span>{text}</span>
            <Icons.Star size={16} />
            <span>{text}</span>
            <Icons.Star size={16} />
            <span>{text}</span>
            <Icons.Star size={16} />
            <span>{text}</span>
            <Icons.Star size={16} />
        </div>
    </div>
);

// --- Components ---

const Metric = ({ value, label }: { value: string, label: string }) => (
    <div>
        <div className="text-4xl md:text-5xl font-light text-gray-900 mb-2">{value}</div>
        <div className="text-teal-600 text-sm tracking-wider uppercase">{label}</div>
    </div>
);

// --- Sections ---

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-cream text-gray-900 overflow-hidden flex flex-col justify-center pt-32 pb-20">
            {/* Background Decor from WhatWeTest */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-teal-100 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-16 items-start">

                    <div className="space-y-10 pt-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                            <span className="text-xs font-medium tracking-widest text-teal-800 uppercase">Selection Phase • Priority Markets Open</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-serif font-light leading-[0.85] tracking-tight">
                            Own the <br />
                            <span className="italic text-teal-600">Clinical</span> <br />
                            Advantage.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed font-light">
                            The era of generic wellness is over. Join the first clinical franchise that turns <span className="text-gray-900 font-medium italic">100+ biomarkers</span> into a high-retention, recurring revenue health system.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-6">
                            <Metric value="85%" label="Patient Retention" />
                            <Metric value="100+" label="Biomarkers Tracked" />
                            <Metric value="$5.6T" label="Market Opp" />
                        </div>

                        <div className="hidden lg:flex items-center gap-6 pt-8 border-t border-gray-200">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-cream bg-gray-200 overflow-hidden shadow-sm">
                                        <img src={`/images/team-${i}.png`} alt="Founder" onError={(e) => (e.currentTarget.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + i)} />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 max-w-[200px] leading-tight font-light">
                                <span className="text-teal-700 font-bold block mb-1">Doctor-Led Network</span>
                                Join 40+ medical & business pioneers in our 2026 expansion.
                            </p>
                        </div>
                    </div>

                    {/* Lead Qualification Form - Adjusted for light theme */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-b from-teal-500/10 to-transparent rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                        <div className="relative bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-teal-900/5">
                            <h3 className="text-2xl font-serif mb-2 text-gray-900">Request Prospectus</h3>
                            <p className="text-gray-500 text-sm mb-8">Qualify for our priority selection list.</p>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-4">
                                    <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-light" />
                                    <input type="email" placeholder="Work Email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-light" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <select className="px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all appearance-none cursor-pointer font-light">
                                            <option value="">Background</option>
                                            <option value="medical">Medical Pro</option>
                                            <option value="entrepreneur">Entrepreneur</option>
                                            <option value="investor">Investor</option>
                                        </select>
                                        <select className="px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all appearance-none cursor-pointer font-light">
                                            <option value="">Investment</option>
                                            <option value="250k">$250k - $500k</option>
                                            <option value="500k">$500k - $1M</option>
                                            <option value="1M">$1M+</option>
                                        </select>
                                    </div>
                                    <input type="text" placeholder="Target Market (City / State)" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all font-light" />
                                </div>
                                <Button className="w-full !bg-teal-600 hover:!bg-teal-700 !text-white !py-5 !text-lg !rounded-full font-bold flex items-center justify-center gap-2 group/btn shadow-lg shadow-teal-500/20">
                                    Apply for Selection <Icons.ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                                <p className="text-[10px] text-gray-400 text-center uppercase tracking-[0.1em] font-medium pt-2">
                                    Secure & Confidential Submission
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const BentoCard = ({ children, className = "", title, subtitle }: { children?: React.ReactNode, className?: string, title?: string, subtitle?: string }) => (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-colors duration-500 flex flex-col relative overflow-hidden h-full ${className}`}>
        {/* Content Slot - Padding handled per-card or via wrapper if needed */}
        {children}

        {(title || subtitle) && (
            <div className="relative z-20 px-8 pb-8 mt-auto">
                <div className="pt-4 border-t border-white/5">
                    {subtitle && <p className="text-teal-400 text-[10px] tracking-[0.2em] uppercase mb-1">{subtitle}</p>}
                    {title && <h3 className="text-xl md:text-2xl font-medium text-white font-serif leading-tight">{title}</h3>}
                </div>
            </div>
        )}
    </div>
);

const BentoGridSection = () => (
    <section className="bg-[#051111] py-32 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center">
                <h2 className="text-4xl md:text-7xl text-white font-serif mb-8 leading-tight">The Unfair <span className="italic text-teal-400">Advantage</span>.</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    Most franchises sell a brand. We sell an operating system for the future of human longevity.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[340px] gap-6">

                {/* Large Clinical Card */}
                <BentoCard className="md:col-span-8 group" title="The Biomarker Loop" subtitle="Proprietary Science">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[#0a2020] opacity-50"></div>
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579165466541-74e2beeac73e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-1000 grayscale"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#051111] via-[#051111]/20 to-transparent"></div>
                    </div>

                    <div className="relative z-10 p-8 flex flex-col justify-center h-full">
                        <p className="text-gray-300 max-w-lg mb-6 text-base md:text-xl font-light leading-relaxed">Our clinical engine tracks 100+ data points, using AI-driven protocols to automate prescription adjustments and patient outcomes.</p>
                        <div className="flex gap-3">
                            <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-[10px] text-teal-400 uppercase tracking-widest font-bold">Auto-Retention</span>
                            <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-[10px] text-teal-400 uppercase tracking-widest font-bold">Closed Loop Care</span>
                        </div>
                    </div>
                </BentoCard>

                {/* Stat Card: Wellness Economy */}
                <BentoCard className="md:col-span-4 bg-teal-900/10 border-teal-500/20" title="Longevity Boom" subtitle="Market Demand">
                    <div className="flex-1 flex flex-col justify-center items-center text-center p-8">
                        <div className="text-6xl md:text-8xl font-light text-white mb-2 leading-none">$5.6<span className="text-teal-400">T</span></div>
                        <p className="text-teal-400/60 text-xs tracking-widest uppercase font-bold">Global Wellness Economy</p>
                        <div className="mt-8 flex flex-col gap-2 w-full max-w-[240px]">
                            <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
                                <div className="h-full bg-teal-400 w-[75%] animate-pulse"></div>
                            </div>
                            <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Longevity sector growing 25% CAGR</p>
                        </div>
                    </div>
                </BentoCard>

                {/* Vertical Support Card */}
                <BentoCard className="md:col-span-4 bg-white/5" title="USHC Academy" subtitle="Operational Control">
                    <div className="flex-1 flex flex-col justify-center space-y-6 p-8">
                        {[
                            { t: "Clinical SOPs", d: "Turnkey protocols for MD/NP staff." },
                            { t: "Marketing Playbook", d: "Automated local lead generation." },
                            { t: "Compliance Suite", d: "Regulatory & legal desk included." }
                        ].map((s, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-6 h-6 rounded bg-teal-500/20 border border-teal-500/40 flex items-center justify-center shrink-0 mt-0.5">
                                    <Icons.Check size={14} className="text-teal-400" />
                                </div>
                                <div>
                                    <h5 className="text-white text-base font-bold leading-none mb-1">{s.t}</h5>
                                    <p className="text-gray-500 text-xs leading-tight font-light">{s.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </BentoCard>

                {/* Revenue Card */}
                <BentoCard className="md:col-span-4 bg-teal-900/10" title="Zero Insurance" subtitle="Financial Model">
                    <div className="flex-1 flex flex-col justify-center items-center p-8">
                        <div className="w-16 h-16 rounded-2xl bg-teal-400/10 flex items-center justify-center mb-6">
                            <Icons.Zap size={32} className="text-teal-400 animate-bounce-slow" />
                        </div>
                        <h4 className="text-white text-3xl md:text-4xl font-serif text-center mb-3">100% Cash Pay</h4>
                        <p className="text-gray-400 text-sm text-center max-w-[240px] font-light leading-relaxed">Eliminate medical billing headaches. Predictable recurring dues & high-margin formulations.</p>
                    </div>
                </BentoCard>

                {/* Design Card */}
                <BentoCard className="md:col-span-4 group overflow-hidden" title="Bespoke Design" subtitle="The Space">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[#051111]/40 z-10"></div>
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-1000"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#051111] via-transparent to-transparent z-20"></div>
                    </div>
                </BentoCard>

            </div>
        </div>
    </section>
);

const WhoItIsFor = () => (
    <section className="bg-[#051111] py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">

                {/* For Medical Professionals */}
                <div className="relative group p-12 rounded-[3rem] bg-gradient-to-br from-teal-900/20 to-transparent border border-white/5 hover:border-teal-500/20 transition-all duration-700">
                    <div className="absolute top-12 right-12 w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center text-[#051111] rotate-6 group-hover:rotate-12 transition-transform">
                        <Icons.User size={32} />
                    </div>
                    <h3 className="text-4xl font-serif text-white mb-6">For Medical <br /><span className="italic text-teal-400">Professionals</span></h3>
                    <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
                        Restore your love of medicine. Escape the insurance-dictated hamster wheel and lead a science-backed longevity clinic that puts outcomes first.
                    </p>
                    <ul className="space-y-6">
                        {[
                            { t: "Cash-Based Practice", d: "Zero medical billing or insurance haggling." },
                            { t: "Clinical Autonomy", d: "Spend 45+ minutes with every patient." },
                            { t: "Elite Peer Group", d: "Collaborate with world-class longevity experts." }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4">
                                <div className="mt-1 w-5 h-5 rounded-full bg-teal-400/10 border border-teal-400/40 flex items-center justify-center shrink-0">
                                    <Icons.Check size={12} className="text-teal-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">{item.t}</h4>
                                    <p className="text-gray-500 text-sm leading-tight font-light">{item.d}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* For Entrepreneurs */}
                <div className="relative group p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-teal-500/20 transition-all duration-700">
                    <div className="absolute top-12 right-12 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white -rotate-6 group-hover:rotate-0 transition-transform">
                        <Icons.Briefcase size={32} />
                    </div>
                    <h3 className="text-4xl font-serif text-white mb-6">For <br /><span className="italic text-gray-400">Entrepreneurs</span></h3>
                    <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
                        The ultimate portfolio diversifier. A turnkey, high-margin health system built for multi-unit scalability in the fastest-growing sector of healthcare.
                    </p>
                    <ul className="space-y-6">
                        {[
                            { t: "Predictable Retention", d: "Membership model ensures high LTV and cash flow." },
                            { t: "Semi-Absentee Ready", d: "Centralized HQ support for recruiting and SOPs." },
                            { t: "Asset Preservation", d: "Prime real estate selection & high-end build outs." }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4">
                                <div className="mt-1 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                                    <Icons.Check size={12} className="text-white/60" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">{item.t}</h4>
                                    <p className="text-gray-500 text-sm leading-tight font-light">{item.d}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    </section>
);

const SupportSection = () => (
    <section className="bg-white text-[#051111] py-32 px-6 rounded-t-[4rem] relative z-20">
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-20 items-center">

                <div>
                    <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-4 block">Risk Mitigation</span>
                    <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-[0.9]">We build <br />the <span className="italic text-teal-600">Foundation</span>.</h2>
                    <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed">
                        You're in business for yourself, but never by yourself. Our centralized support systems reduce the complexity of clinical operations.
                    </p>

                    <div className="space-y-4">
                        <Button className="!bg-[#051111] !text-white !px-10 !py-5 !rounded-full font-bold">Download Support Guide</Button>
                        <p className="text-sm text-gray-400 font-light italic ml-2">Includes 2026 Training Curriculum</p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                    {[
                        {
                            t: "Clinical Academy",
                            d: "Intensive training for your MDs, NPs, and nurses on longevity protocols & biomarker analysis.",
                            icon: <Icons.Dna className="text-teal-600" />
                        },
                        {
                            t: "Marketing Engine",
                            d: "Centralized PPC, SEO, and social kits that feed leads to your clinic from day one.",
                            icon: <Icons.Zap className="text-teal-600" />
                        },
                        {
                            t: "Regulatory Desk",
                            d: "Ongoing legal and clinical compliance support tailored to your specific state laws.",
                            icon: <Icons.ShieldCheck className="text-teal-600" />
                        },
                        {
                            t: "Operations Hub",
                            d: "Custom EMR integration and automated administrative tasks for a lean staff model.",
                            icon: <Icons.Maximize className="text-teal-600" />
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                            <div className="mb-6 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-3">{item.t}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed font-light">{item.d}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
);

const FAQSection = () => (
    <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-[#051111] mb-4">Common Questions</h2>
                <p className="text-gray-500 font-light italic">Everything you need to know about the USHC model.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {[
                    {
                        q: "Do I need a medical background?",
                        a: "No. While medical professionals are welcome, we have a 'Management Model' for entrepreneurs where we help you recruit and train your clinical leadership staff."
                    },
                    {
                        q: "How does site selection work?",
                        a: "Our real estate team uses proprietary heat-mapping of target demographics (affluence, health-spend) to identify and secure A+ locations in your market."
                    },
                    {
                        q: "What is the initial investment?",
                        a: "Total investment ranges from $250k - $600k depending on the market and build-out requirements. We offer in-house financing guidance for qualified candidates."
                    },
                    {
                        q: "How long until we open?",
                        a: "Our streamlined timeline targets 6-9 months from signing the franchise agreement to your grand opening ribon cutting."
                    },
                    {
                        q: "What is the USHC Academy?",
                        a: "A 4-week intensive program at our HQ for owners and clinical staff, covering biomarker analysis, longevity protocols, and our custom EMR systems."
                    },
                    {
                        q: "Can I own multiple units?",
                        a: "Yes. We prioritize multi-unit developers who want to own Entire metropolitan territories to maximize operational efficiency."
                    }
                ].map((item, i) => (
                    <div key={i} className="group cursor-default">
                        <h4 className="text-lg font-bold text-[#051111] mb-2 group-hover:text-teal-600 transition-colors">
                            {item.q}
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">
                            {item.a}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-20 p-12 rounded-[3rem] bg-gray-50 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h3 className="text-2xl font-serif text-[#051111] mb-2">Still have questions?</h3>
                    <p className="text-gray-500 font-light">Download our comprehensive 2026 Franchise Prospectus for a deep dive into the numbers.</p>
                </div>
                <Button variant="outline" className="!border-[#051111]/10 !text-[#051111] hover:!bg-[#051111]/5 !px-10 !py-4 !rounded-full font-bold flex items-center gap-2">
                    Download Prospectus <Icons.Download size={18} />
                </Button>
            </div>
        </div>
    </section>
);

const ComparisonSection = () => (
    <section className="bg-white text-gray-900 pb-32 pt-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto border-t border-gray-100 pt-32">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-serif mb-6">Not a Medspa. <br /><span className="text-teal-700 italic">A Health System.</span></h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">Most franchises sell a service. We sell an outcome. Here is how we differ from the noise.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
                <div className="space-y-12">
                    <h3 className="text-2xl font-bold border-b border-gray-200 pb-4">Traditional Medspa</h3>
                    <ul className="space-y-8 opacity-60">
                        <li className="flex gap-4">
                            <Icons.X className="text-red-400 shrink-0" />
                            <div>
                                <h4 className="font-bold">Transactional</h4>
                                <p className="text-sm">Client comes in for botox, leaves. No relationship.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <Icons.X className="text-red-400 shrink-0" />
                            <div>
                                <h4 className="font-bold">Generic Menu</h4>
                                <p className="text-sm">Same services as the clinic next door. Price wars.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <Icons.X className="text-red-400 shrink-0" />
                            <div>
                                <h4 className="font-bold">Guesswork</h4>
                                <p className="text-sm">Treating symptoms without knowing internal data.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="space-y-12 relative">
                    {/* Divider on desktop */}
                    <div className="hidden md:block absolute left-[-3rem] top-0 bottom-0 w-px bg-gray-100"></div>

                    <h3 className="text-2xl font-bold border-b border-teal-200 pb-4 text-teal-800">US Health Clinic</h3>
                    <ul className="space-y-8">
                        <li className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                                <Icons.Check size={14} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Relationship First</h4>
                                <p className="text-gray-600">Membership model builds a community, not a customer list.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                                <Icons.Check size={14} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Proprietary Protocols</h4>
                                <p className="text-gray-600">Exclusive formulations and peptide therapies you can't get elsewhere.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                                <Icons.Check size={14} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Deep Data</h4>
                                <p className="text-gray-600">We own the lab loop. Patient sees results in numbers, reinforcing value.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

const Timeline = () => (
    <section className="bg-gray-50 py-32 px-6 relative overflow-hidden">
        {/* Background Blueprint Grid (Subtle) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#051111 1px, transparent 1px), linear-gradient(90deg, #051111 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-24">
                <span className="text-teal-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">The Blueprint</span>
                <h2 className="text-4xl md:text-6xl font-serif text-[#051111]">Path to <span className="italic text-teal-600">Market Leader</span></h2>
            </div>

            <div className="relative">
                {/* Stylized Progress Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-gray-200 to-transparent -translate-x-1/2 hidden md:block"></div>

                {[
                    { title: "Application & Review", desc: "Submit your inquiry. Our team vets for clinical alignment, financial fit, and territory availability.", icon: <Icons.User /> },
                    { title: "Discovery Day", desc: "Fly to our HQ. Meet the medical team, see the deep-lab tech, and experience the clinic model.", icon: <Icons.MapPin /> },
                    { title: "Site Selection", desc: "Our real estate team uses AI-driven location data to help you find the perfect A+ market.", icon: <Icons.Globe /> },
                    { title: "Academy & Launch", desc: "Complete 4 weeks of USHC Academy training and launch with a pre-qualified waitlist.", icon: <Icons.Play /> }
                ].map((step, i) => (
                    <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 mb-20 relative ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                        {/* Text Side */}
                        <div className={`w-full md:w-1/2 ${i % 2 !== 0 ? 'md:pl-20 text-left' : 'md:pr-20 md:text-right'} text-center md:text-current group`}>
                            <h4 className="text-2xl font-serif text-[#051111] mb-3 group-hover:text-teal-600 transition-colors">{step.title}</h4>
                            <p className="text-gray-500 font-light leading-relaxed">{step.desc}</p>
                        </div>

                        {/* Icon Node */}
                        <div className="relative z-10 w-20 h-20 bg-white border-8 border-gray-50 shadow-xl rounded-[2rem] flex items-center justify-center text-teal-600 rotate-45 hover:rotate-0 transition-all duration-500">
                            <div className="-rotate-45 group-hover:rotate-0 transition-transform">
                                {React.cloneElement(step.icon as React.ReactElement<any>, { size: 28 })}
                            </div>
                        </div>

                        {/* Empty Side */}
                        <div className="w-full md:w-1/2"></div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const FooterCTA = () => (
    <section className="py-24 bg-teal-900 px-6 text-center relative overflow-hidden">
        {/* Subtle background pattern to match Footer depth */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-3xl mx-auto relative z-10">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl rotate-12 mx-auto mb-10 flex items-center justify-center text-white shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                <Icons.ArrowUpRight size={40} />
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">This is your moment.</h2>
            <p className="text-xl text-teal-100/70 mb-12 max-w-2xl mx-auto font-light">Territories are being awarded monthly. Secure your market before it's gone.</p>
            <form className="max-w-md mx-auto space-y-4">
                <input type="email" placeholder="Enter your email" className="w-full px-8 py-5 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-teal-400 backdrop-blur-md" />
                <Button className="w-full !bg-white hover:!bg-teal-50 !text-teal-900 !py-5 !text-lg !rounded-full font-bold shadow-xl">
                    Join Selection List
                </Button>
            </form>
        </div>
    </section>
);

const Franchise = () => {
    return (
        <main className="bg-[#051111] selection:bg-teal-500/30">
            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .animate-bounce-slow {
                    animation: bounce 3s infinite;
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                `}
            </style>
            <Hero />
            <Marquee text="Recurring Revenue • Doctor Led • Biomarker Based • High Retention • Cash-Pay Model • Elite Network •" />
            <BentoGridSection />
            <WhoItIsFor />
            <SupportSection />
            <ComparisonSection />
            <Timeline />
            <FAQSection />
            <FooterCTA />
        </main>
    );
};

export default Franchise;
