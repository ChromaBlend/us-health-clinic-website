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

const BentoCard = ({ children, className = "", title, subtitle }: { children?: React.ReactNode, className?: string, title?: string, subtitle?: string }) => (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-500 flex flex-col ${className}`}>
        {children}
        <div className="mt-auto pt-8">
            {subtitle && <p className="text-teal-400 text-sm tracking-wider uppercase mb-2">{subtitle}</p>}
            {title && <h3 className="text-2xl font-medium text-white font-serif">{title}</h3>}
        </div>
    </div>
);

const Metric = ({ value, label }: { value: string, label: string }) => (
    <div>
        <div className="text-4xl md:text-5xl font-light text-white mb-2">{value}</div>
        <div className="text-teal-400 text-sm tracking-wider uppercase">{label}</div>
    </div>
);

// --- Sections ---

const Hero = () => (
    <section className="relative min-h-screen bg-[#051111] text-white overflow-hidden flex flex-col justify-center pt-20">

        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-600/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span className="text-xs font-medium tracking-wide text-teal-100 uppercase">Selection Phase - Applications Open</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-serif font-light leading-[0.9]">
                    Own the <br />
                    <span className="italic text-teal-400">Science</span> of <br />
                    <span className="font-bold">Longevity.</span>
                    <span className="block text-xl font-sans font-light text-teal-500/60 mt-4 tracking-[0.2em] uppercase">Opening 2026</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light">
                    The world doesn't need another spa. It needs precision medicine. Join the only doctor-led, biomarker-based franchise network.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="!bg-teal-400 !text-[#051111] hover:!bg-teal-300 !px-10 !py-5 !text-lg !rounded-full font-bold">
                        Join selection list
                    </Button>
                    <Button variant="outline" className="!border-white/20 !text-white hover:!bg-white/10 !px-10 !py-5 !text-lg !rounded-full">
                        <span className="flex items-center gap-2">
                            Download Prospectus <Icons.Download size={18} />
                        </span>
                    </Button>
                </div>

            </div>

            {/* Visual People UI */}
            <div className="relative hidden lg:block perspective-1000">
                <div className="relative z-10 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700">
                    <img
                        src="/images/franchise-founders.png"
                        alt="US Health Clinic Founders"
                        className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                </div>

                {/* Floating "Card" behind */}
                <div className="absolute -inset-4 bg-teal-500/10 rounded-[2.5rem] blur-xl -z-10"></div>
            </div>
        </div>
    </section>
);

const BentoGridSection = () => (
    <section className="bg-[#051111] py-32 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="mb-20">
                <h2 className="text-4xl md:text-6xl text-white font-serif mb-6">The Unfair Advantage.</h2>
                <div className="w-24 h-1 bg-teal-500"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 grid-rows-[auto] gap-6">

                {/* Large Visual Card */}
                <BentoCard className="md:col-span-6 lg:col-span-8 min-h-[400px] relative group overflow-hidden" title="Data-Driven Care" subtitle="The Core">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385180-60fdd8f73121?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051111] via-transparent to-transparent"></div>
                    <div className="relative z-10 mb-4 h-full flex flex-col justify-end">
                        <p className="text-gray-300 max-w-md">We don't guess. We test. Our proprietary panel of 100+ biomarkers is the engine of your business, driving prescriptions, supplements, and retention.</p>
                    </div>
                </BentoCard>

                {/* Stat Card */}
                <BentoCard className="md:col-span-6 lg:col-span-4 bg-teal-900/20" title="Wellness Economy" subtitle="The Market">
                    <div className="flex items-center justify-center flex-1">
                        <div className="text-center">
                            <span className="text-6xl md:text-7xl font-light text-white overflow-hidden inline-block">$5.6<span className="text-teal-400">T</span></span>
                        </div>
                    </div>
                </BentoCard>

                {/* Vertical Card */}
                <BentoCard className="md:col-span-3 lg:col-span-3 min-h-[300px]" title="Recurring Revenue" subtitle="The Model">
                    <div className="flex-1 flex items-center justify-center">
                        <Icons.RefreshCw size={64} className="text-teal-500/50" />
                    </div>
                    <p className="text-gray-400 text-sm mt-4">Membership-based model ensures predictable cash flow.</p>
                </BentoCard>

                {/* Image Card */}
                <BentoCard className="md:col-span-3 lg:col-span-5 relative group overflow-hidden" title="Luxury Design" subtitle="The Space">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
                </BentoCard>

                {/* Text Card */}
                <BentoCard className="md:col-span-6 lg:col-span-4 bg-gray-800/20" title="Turnkey Ops" subtitle="The System">
                    <ul className="space-y-4 mt-4">
                        <li className="flex items-center gap-3 text-gray-400">
                            <Icons.Check className="text-teal-400" size={18} /> Staffing & Training
                        </li>
                        <li className="flex items-center gap-3 text-gray-400">
                            <Icons.Check className="text-teal-400" size={18} /> Supply Chain Direct
                        </li>
                        <li className="flex items-center gap-3 text-gray-400">
                            <Icons.Check className="text-teal-400" size={18} /> Marketing Playbook
                        </li>
                    </ul>
                </BentoCard>
            </div>
        </div>
    </section>
);

const ComparisonSection = () => (
    <section className="bg-white text-gray-900 py-32 px-6 rounded-t-[3rem] -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto">
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
    <section className="bg-gray-50 py-32 px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-center mb-20">Path to Launch</h2>

            <div className="relative">
                {/* Center Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block"></div>

                {[
                    { title: "Application & Review", desc: "Submit your inquiry. Our team vets for financial fit and territory availability.", icon: Icons.User },
                    { title: "Discovery Day", desc: "Fly to our HQ. Meet the doctors, see the tech, experience the clinic.", icon: Icons.MapPin },
                    { title: "Site Selection", desc: "Our real estate team helps you find the perfect A+ location.", icon: Icons.Globe },
                    { title: "Grand Opening", desc: "Launch with a waitlist of members ready to join.", icon: Icons.Play }
                ].map((step, i) => (
                    <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 mb-16 relative ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                        {/* Text Side */}
                        <div className={`w-full md:w-1/2 ${i % 2 !== 0 ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'} text-center md:text-current`}>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                            <p className="text-gray-600">{step.desc}</p>
                        </div>

                        {/* Icon Node */}
                        <div className="relative z-10 w-16 h-16 bg-white border-4 border-teal-50 shadow-lg rounded-full flex items-center justify-center text-teal-700">
                            <step.icon size={24} />
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
    <section className="py-24 bg-[#051111] px-6 text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-teal-500 rounded-2xl rotate-12 mx-auto mb-10 flex items-center justify-center text-[#051111] shadow-[0_0_50px_rgba(20,184,166,0.5)]">
                <Icons.ArrowUpRight size={40} />
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">This is your moment.</h2>
            <p className="text-xl text-gray-400 mb-12">Territories are being awarded monthly. Secure your market before it's gone.</p>
            <form className="max-w-md mx-auto space-y-4">
                <input type="email" placeholder="Enter your email" className="w-full px-8 py-5 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-teal-500 backdrop-blur-md" />
                <Button className="w-full !bg-teal-400 hover:!bg-teal-300 !text-[#051111] !py-5 !text-lg !rounded-full font-bold">
                    Join Selection List
                </Button>
            </form>
        </div>
    </section>
);

const Franchise = () => {
    // Add custom marquee animation style via a style tag or className if Tailwind config allows.
    // Assuming standard Tailwind for most, but `animate-marquee` might need definition.
    // I will include a style block for the specific keyframes since I can't touch index.css easily for just this one page without risk.
    return (
        <main className="bg-[#051111]">
            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                `}
            </style>
            <Hero />
            <Marquee text="Recurring Revenue • Doctor Led • Biomarker Based • High Retention •" />
            <BentoGridSection />
            <ComparisonSection />
            <Timeline />
            <FooterCTA />
        </main>
    );
};

export default Franchise;
