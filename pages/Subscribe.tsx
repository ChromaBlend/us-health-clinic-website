import React from 'react';
import { Membership } from '../components/Membership';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button, SectionHeading, SectionSub, Accordion } from '../components/UI';
import { Icons } from '../components/Icons';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/Animations';

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
        <style>
            {`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 40s linear infinite;
            }
            `}
        </style>
    </div>
);

const BentoCard = ({ children, className = "", title, subtitle }: { children?: React.ReactNode, className?: string, title?: string, subtitle?: string }) => (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-colors duration-500 flex flex-col relative overflow-hidden h-full ${className}`}>
        {/* Content Slot */}
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

const Subscribe = () => {


    const faqs = [
        {
            q: "Who is this for?",
            a: "This program is for anyone who wants to stop guessing about their health. Whether you’re optimizing performance, extending longevity, or just want to feel better daily, our comprehensive panel gives you the data you need."
        },
        {
            q: "Do you accept insurance?",
            a: "We do not accept insurance for the membership fee. However, you can often use your HSA/FSA funds for the membership and lab testing. We can provide a Superbill for you to submit to your insurance for potential out-of-network reimbursement."
        },
        {
            q: "Can I cancel anytime?",
            a: "Yes. For monthly memberships, you can cancel before your next billing cycle. Annual memberships are committed for the year to cover the comprehensive initial testing and doctor review costs."
        },
        {
            q: "What if I’m already healthy?",
            a: "That's the best time to start. Establishing a baseline now helps you catch silent trends before they become problems. Plus, 'feeling fine' and 'optimized' are very different states."
        }
    ];

    return (
        <main className="bg-cream min-h-screen pt-20">
            {/* --- Hero Section --- */}
            <section className="relative overflow-hidden py-24 md:py-32 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <FadeIn delay={0.1} className="relative z-10" force>
                        <span className="text-teal-700 font-bold tracking-widest text-sm uppercase mb-4 block">Membership</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 leading-tight">
                            Invest in your <br />
                            <span className="italic text-teal-700">future self.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg font-light">
                            Join the healthcare revolution where data drives decisions, and your health is a project we manage together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}>
                                Choose your plan
                            </Button>
                            <Button variant="secondary" onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}>
                                See benefits
                            </Button>
                        </div>
                        <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-cream overflow-hidden">
                                        <img src={`https://randomuser.me/api/portraits/thumb/men/${i + 20}.jpg`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <span>Join 5,000+ members today</span>
                        </div>
                    </FadeIn>

                    <div className="relative">
                        <FadeIn delay={0.3} direction="none" className="absolute -top-20 -right-20 w-[140%] h-[140%] bg-teal-100/50 rounded-full blur-3xl -z-10 pointer-events-none"></FadeIn>
                        <ScaleIn delay={0.2}>
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square">
                                <img
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
                                    alt="Healthy Lifestyle"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 text-white max-w-xs">
                                    <div className="flex gap-1 mb-2">
                                        {[1, 2, 3, 4, 5].map(i => <Icons.Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                                    </div>
                                    <p className="italic font-light">"The single best investment I've made for my longevity."</p>
                                </div>
                            </div>
                        </ScaleIn>
                    </div>
                </div>
            </section>

            {/* --- Marquee --- */}
            <Marquee text="Proactive Care • Deep Diagnostics • Doctor Led • Biomarker Based • Unlimited Support • Personalized Plan •" />

            {/* --- What You Get (Bento Grid) --- */}
            <section id="benefits" className="bg-[#051111] py-32 px-6 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeIn className="mb-24 text-center">
                        <SectionHeading className="!text-white mb-6">The <span className="text-teal-400 italic">Ultimate</span> Health Stack.</SectionHeading>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Everything you need to optimize your biology, integrated into one seamless experience.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[420px] gap-6">

                        {/* 1. Precision Diagnostics (Large Card) */}
                        <BentoCard className="md:col-span-8 group" title="Precision Diagnostics" subtitle="The Foundation">
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-[#0a2020] opacity-50"></div>
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579165466541-74e2beeac73e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-1000 grayscale"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#051111] via-[#051111]/20 to-transparent"></div>
                            </div>

                            <div className="relative z-10 p-8 flex flex-col justify-center h-full">
                                <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 backdrop-blur-md">
                                    <Icons.Activity size={32} />
                                </div>
                                <p className="text-gray-300 max-w-lg mb-8 text-base md:text-xl font-light leading-relaxed">
                                    100+ biomarkers testing heart, hormones, metabolic function, and nutrients. Comprehensive data that drives every decision.
                                </p>
                                <div className="flex gap-3 flex-wrap">
                                    <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-[10px] text-teal-400 uppercase tracking-widest font-bold">Hormones</span>
                                    <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-[10px] text-teal-400 uppercase tracking-widest font-bold">Metabolic</span>
                                    <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-[10px] text-teal-400 uppercase tracking-widest font-bold">Nutrients</span>
                                </div>
                            </div>
                        </BentoCard>

                        {/* 2. Physician Review */}
                        <BentoCard className="md:col-span-4 bg-white/5" title="Doctor Review" subtitle="Clinical Expert">
                            <div className="flex-1 flex flex-col justify-center p-8">
                                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 mb-6">
                                    <Icons.User size={28} />
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed font-light mb-4">
                                    Detailed breakdown of your results by a functional medicine doctor. We explain the "why" behind your data.
                                </p>
                            </div>
                        </BentoCard>

                        {/* 3. Personalized Plan */}
                        <BentoCard className="md:col-span-4 bg-teal-900/10 border-teal-500/20" title="Your Roadmap" subtitle="Personalized Plan">
                            <div className="flex-1 flex flex-col justify-center items-center text-center p-8">
                                <Icons.Zap size={40} className="text-teal-400 mb-6 animate-pulse" />
                                <h4 className="text-white text-2xl font-serif mb-2">Custom Action</h4>
                                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Supplemental & Lifestyle Advisors</p>
                            </div>
                        </BentoCard>

                        {/* 4. Ongoing Support */}
                        <BentoCard className="md:col-span-4 bg-white/5" title="Direct Access" subtitle="Ongoing Support">
                            <div className="flex-1 flex flex-col justify-center p-8">
                                <div className="space-y-4">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
                                            <Icons.MessageCircle size={20} />
                                        </div>
                                        <div>
                                            <h5 className="text-white text-sm font-bold">Care Team Chat</h5>
                                            <p className="text-gray-500 text-xs">Unlimited messaging</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
                                            <Icons.Calendar size={20} />
                                        </div>
                                        <div>
                                            <h5 className="text-white text-sm font-bold">Regular Check-ins</h5>
                                            <p className="text-gray-500 text-xs">Stay on track</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </BentoCard>

                        {/* 5. Progress Tracking */}
                        <BentoCard className="md:col-span-4 group overflow-hidden" title="Track Progress" subtitle="Data Over Time">
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-[#051111]/60 z-10"></div>
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000 grayscale"></div>
                            </div>
                            <div className="relative z-20 flex-1 flex flex-col justify-center p-8">
                                <div className="flex items-end gap-2 h-24 mb-6 opacity-80">
                                    <div className="w-4 bg-teal-500/20 h-[40%] rounded-t-sm"></div>
                                    <div className="w-4 bg-teal-500/40 h-[60%] rounded-t-sm"></div>
                                    <div className="w-4 bg-teal-500/60 h-[50%] rounded-t-sm"></div>
                                    <div className="w-4 bg-teal-500/80 h-[80%] rounded-t-sm"></div>
                                    <div className="w-4 bg-teal-500 h-[70%] rounded-t-sm"></div>
                                </div>
                                <p className="text-gray-300 text-sm font-light">Watch your biological age reverse as you optimize.</p>
                            </div>
                        </BentoCard>

                    </div>
                </div>
            </section>

            {/* --- Transition Cap --- */}
            <div className="bg-white h-24 rounded-t-[4rem] relative z-20 -mt-24"></div>

            {/* --- Pricing Section --- */}
            <Membership />

            {/* --- Authenticity Section --- */}
            <section className="py-24 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeIn className="text-center mb-16">
                        <SectionHeading>Integrity over influence.</SectionHeading>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-4 font-light">
                            As a new company, we refuse to use manufactured social proof. We believe your health decisions should be based on science and transparency, not paid endorsements.
                        </p>
                    </FadeIn>
                    <StaggerContainer className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Icons.ShieldCheck className="w-8 h-8" />,
                                title: "Zero Fake Proof",
                                desc: "No paid actors. No cherry-picked reviews. We are launching with a clean slate and radical honesty."
                            },
                            {
                                icon: <Icons.Activity className="w-8 h-8" />,
                                title: "Biological Truth",
                                desc: "We focus on the 100+ biomarkers that matter. The only 'testimonial' we care about is your improved health data."
                            },
                            {
                                icon: <Icons.Zap className="w-8 h-8" />,
                                title: "Early Access",
                                desc: "Be among the first to experience a healthcare model designed for the future, not the status quo."
                            }
                        ].map((item, i) => (
                            <StaggerItem key={i} className="bg-cream p-10 rounded-[2.5rem] border border-transparent hover:border-teal-100 transition-all duration-500">
                                <div className="text-teal-700 mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-serif text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-700 font-light leading-relaxed">
                                    {item.desc}
                                </p>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* --- FAQ --- */}
            <section className="py-24 bg-cream">
                <div className="max-w-3xl mx-auto px-6">
                    <FadeIn className="mb-12 text-center">
                        <SectionHeading>Frequently Asked Questions</SectionHeading>
                    </FadeIn>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100">
                                    <Accordion title={faq.q} content={faq.a} />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Final CTA --- */}
            <section className="py-24 bg-teal-900 relative overflow-hidden text-center px-6">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
                <FadeIn className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Ready to take control?</h2>
                    <p className="text-teal-100 text-xl mb-12 max-w-2xl mx-auto">
                        Your personalized roadmap to health is just one click away. Join the community prioritizing longevity today.
                    </p>
                    <Button variant="secondary" onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-teal-900 hover:bg-teal-50 border-none text-lg px-10 py-4">
                        Get Started Now
                    </Button>
                </FadeIn>
            </section>
        </main>
    );
};

export default Subscribe;
