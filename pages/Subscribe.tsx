import React from 'react';
import { Membership } from '../components/Membership';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button, SectionHeading, SectionSub, Accordion } from '../components/UI';
import { Icons } from '../components/Icons';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/Animations';

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

            {/* --- Benefits Section --- */}
            <section id="benefits" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeIn className="text-center mb-20">
                        <SectionHeading>What you get</SectionHeading>
                        <SectionSub>A complete ecosystem for your health.</SectionSub>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

                        {/* 1. Precision Diagnostics (Hero - Large) */}
                        <StaggerItem className="md:col-span-2 md:row-span-2 group p-8 md:p-12 rounded-[2.5rem] bg-gray-50 hover:bg-teal-50/50 transition-colors duration-500 border border-transparent hover:border-teal-100 relative overflow-hidden flex flex-col justify-between">
                            {/* Decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 pointer-events-none group-hover:bg-teal-200/40"></div>

                            <div className="relative z-10 sm:max-w-md">
                                <div className="w-16 h-16 rounded-2xl bg-white text-teal-700 flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <Icons.Activity size={32} />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 leading-tight">Precision Diagnostics</h3>
                                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                    100+ biomarkers testing heart, hormones, metabolic function, and nutrients. We look deep where others just skim the surface.
                                </p>
                            </div>

                            <div className="mt-8 flex gap-3 overflow-hidden opacity-40">
                                {/* Visual fake graph lines - Darkened for light mode */}
                                <div className="h-16 w-2 bg-teal-200 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                                <div className="h-24 w-2 bg-teal-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                <div className="h-12 w-2 bg-teal-200 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                <div className="h-32 w-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                                <div className="h-20 w-2 bg-teal-300 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                            </div>
                        </StaggerItem>

                        {/* 2. Physician Review */}
                        <StaggerItem className="md:col-span-1 group p-8 rounded-[2.5rem] bg-gray-50 hover:bg-teal-50/50 transition-colors duration-500 border border-transparent hover:border-teal-100">
                            <div className="w-14 h-14 rounded-2xl bg-white text-teal-700 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icons.User size={28} />
                            </div>
                            <h3 className="text-xl font-serif text-gray-900 mb-3">Physician Review</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Detailed breakdown of your results by a functional medicine doctor.
                            </p>
                        </StaggerItem>

                        {/* 3. Personalized Plan */}
                        <StaggerItem className="md:col-span-1 group p-8 rounded-[2.5rem] bg-gray-50 hover:bg-teal-50/50 transition-colors duration-500 border border-transparent hover:border-teal-100">
                            <div className="w-14 h-14 rounded-2xl bg-white text-teal-700 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icons.Zap size={28} />
                            </div>
                            <h3 className="text-xl font-serif text-gray-900 mb-3">Personalized Plan</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Custom protocols for nutrition, supplements, and lifestyle.
                            </p>
                        </StaggerItem>

                        {/* 4. Ongoing Support - Wide */}
                        <StaggerItem className="md:col-span-2 lg:col-span-2 group p-8 rounded-[2.5rem] bg-gray-50 hover:bg-teal-50/50 transition-colors duration-500 border border-transparent hover:border-teal-100">
                            <div className="w-14 h-14 rounded-2xl bg-white text-teal-700 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icons.MessageCircle size={28} />
                            </div>
                            <h3 className="text-xl font-serif text-gray-900 mb-3">Ongoing Support</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Direct messaging with your care team for adjustments and questions.
                            </p>
                        </StaggerItem>

                        {/* 5. Progress Tracking */}
                        <StaggerItem className="md:col-span-1 lg:col-span-2 group p-8 rounded-[2.5rem] bg-gray-50 hover:bg-teal-50/50 transition-colors duration-500 border border-transparent hover:border-teal-100">
                            <div className="w-14 h-14 rounded-2xl bg-white text-teal-700 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icons.TrendingUp size={28} />
                            </div>
                            <h3 className="text-xl font-serif text-gray-900 mb-3">Progress Tracking</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Monitor your biological age and key markers over time.
                            </p>
                        </StaggerItem>

                        {/* 6. Member Perks */}
                        <StaggerItem className="md:col-span-1 lg:col-span-2 group p-8 rounded-[2.5rem] bg-gray-50 hover:bg-teal-50/50 transition-colors duration-500 border border-transparent hover:border-teal-100 flex flex-col justify-center">
                            <div className="flex flex-col md:flex-row items-center gap-6 justify-center text-center md:text-left">
                                <div className="w-16 h-16 shrink-0 rounded-2xl bg-white text-teal-700 flex items-center justify-center shadow-sm mb-0 group-hover:scale-110 transition-transform duration-300">
                                    <Icons.ShieldCheck size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif text-gray-900 mb-2">Member Perks</h3>
                                    <p className="text-gray-600 leading-relaxed max-w-md">
                                        Exclusive discounts on supplements, additional testing, and partner brands.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>

                    </StaggerContainer>
                </div>
            </section>

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
