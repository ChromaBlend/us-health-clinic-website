import React from 'react';
import { Membership } from '../components/Membership';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button, SectionHeading, SectionSub, Accordion } from '../components/UI';
import { Icons } from '../components/Icons';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/Animations';

const Subscribe = () => {

    const testimonials = [
        {
            quote: "I didn’t realize how foggy I felt until I saw my numbers. 3 months later, I’m clearer, sharper, and actually sleeping.",
            author: "Sarah J.",
            role: "Marketing Director",
            rating: 5
        },
        {
            quote: "This isn't just a lab test. It's a roadmap. The insights were specific, actionable, and weirdly accurate.",
            author: "Michael T.",
            role: "Architect",
            rating: 5
        },
        {
            quote: "Finally, healthcare that feels like it’s actually about *me*. The doctor took 45 minutes just to explain my thyroid markers.",
            author: "Elena R.",
            role: "Lawyer",
            rating: 5
        }
    ];

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

                    <StaggerContainer className="grid md:grid-cols-3 gap-12">
                        {[
                            { icon: Icons.Activity, title: "Precision Diagnostics", desc: "100+ biomarkers testing heart, hormones, metabolic function, and nutrients." },
                            { icon: Icons.User, title: "Physician Review", desc: "Detailed breakdown of your results by a functional medicine doctor." },
                            { icon: Icons.Zap, title: "Personalized Plan", desc: "Custom protocols for nutrition, supplements, and lifestyle." },
                            { icon: Icons.MessageCircle, title: "Ongoing Support", desc: "Direct messaging with your care team for adjustments and questions." }, // Replaced MessageSquare with MessageCircle or similar available icon
                            { icon: Icons.TrendingUp, title: "Progress Tracking", desc: "Monitor your biological age and key markers over time." },
                            { icon: Icons.ShieldCheck, title: "Member Perks", desc: "Exclusive discounts on supplements and additional testing." }
                        ].map((item, i) => (
                            <StaggerItem key={i} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                                <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mb-6">
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-serif font-medium text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* --- Pricing Section --- */}
            <Membership />

            {/* --- Testimonials --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeIn className="text-center mb-16">
                        <SectionHeading>Don't just take our word for it</SectionHeading>
                    </FadeIn>
                    <StaggerContainer className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <StaggerItem key={i} className="bg-cream p-8 rounded-3xl relative">
                                <div className="text-teal-700 mb-6">
                                    <Icons.Quote size={40} className="opacity-20" />
                                </div>
                                <p className="text-gray-700 text-lg mb-6 relative z-10 font-medium font-serif leading-relaxed">
                                    "{t.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold">
                                        {t.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{t.author}</div>
                                        <div className="text-sm text-gray-500">{t.role}</div>
                                    </div>
                                    <div className="ml-auto flex gap-0.5">
                                        {[...Array(t.rating)].map((_, r) => (
                                            <Icons.Star key={r} size={14} className="fill-teal-500 text-teal-500" />
                                        ))}
                                    </div>
                                </div>
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
                    <Button onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-teal-900 hover:bg-teal-50 text-lg px-10 py-4">
                        Get Started Now
                    </Button>
                </FadeIn>
            </section>
        </main>
    );
};

export default Subscribe;
