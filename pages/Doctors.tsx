import React from 'react';
import { Icons } from '../components/Icons';
import { Button } from '../components/UI';
import { FadeIn } from '../components/Animations';

const Hero = () => (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-cream">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-[1.1] mb-8 tracking-tight">
                        Practice <span className="italic text-teal-700 relative inline-block">
                            Medicine
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                        </span> <br /> Not Administration.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light max-w-2xl">
                        Join a network of forward-thinking physicians dedicated to root-cause resolution. We handle the operations; you handle the care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 mb-8">
                            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                            <span className="text-sm font-medium tracking-wide text-teal-800 uppercase">Hiring MDs, DOs, & NPs</span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 w-full">
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100">
                        <h3 className="text-2xl font-serif text-gray-900 mb-2">Join the Network</h3>
                        <p className="text-gray-500 mb-6 text-sm">Submit your interest and our Medical Director will reach out.</p>

                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-teal-500 transition-all outline-none" placeholder="First Name" />
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-teal-500 transition-all outline-none" placeholder="Last Name" />
                            </div>
                            <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-teal-500 transition-all outline-none" placeholder="Email Address" />
                            <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-teal-500 transition-all outline-none icon-chevron-down">
                                <option>Select Specialty</option>
                                <option>Internal Medicine</option>
                                <option>Family Medicine</option>
                                <option>Functional Medicine</option>
                                <option>Other</option>
                            </select>
                            <input type="url" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-teal-500 transition-all outline-none" placeholder="LinkedIn or CV URL" />
                            <textarea className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-teal-500 transition-all outline-none min-h-[100px]" placeholder="Why do you want to join?"></textarea>
                            <Button className="w-full !py-4 !text-lg !rounded-xl">Submit Application</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* Background Decor */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    </section>
);

const Features = () => (
    <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-start">
                {/* Sticky Left Header */}
                <div className="md:w-1/3 relative md:sticky md:top-32">
                    <span className="text-teal-700 font-bold tracking-widest text-sm uppercase mb-4 block">The Benefits</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                        Why doctors <br /> <span className="italic text-gray-400">choose us</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                        Build a practice on your terms with the support of a world-class infrastructure. We handle the operations; you handle the care.
                    </p>
                    <Button onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })} variant="secondary">
                        Apply Now
                    </Button>
                </div>

                {/* Right Grid */}
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Focus on Patients",
                            desc: "Zero insurance paperwork. No billing headaches. We manage the admin so you can dedicate 100% of your time to patient outcomes.",
                            icon: Icons.Heart
                        },
                        {
                            title: "Advanced Diagnostics",
                            desc: "Access to our proprietary 100+ biomarker panel, giving you the data you need to make precision decisions.",
                            icon: Icons.Activity
                        },
                        {
                            title: "Flexible Schedule",
                            desc: "Telehealth-first model allows you to work from anywhere. Set your own hours and maintain a true work-life balance.",
                            icon: Icons.Calendar
                        },
                        {
                            title: "Continuing Education",
                            desc: "Regular grand rounds with industry leaders in longevity and functional medicine. Stay at the cutting edge.",
                            icon: Icons.BookOpen
                        },
                        {
                            title: "Competitive Compensation",
                            desc: "Earn above-market rates with a transparent compensation structure. Performance bonuses for patient retention.",
                            icon: Icons.TrendingUp
                        },
                        {
                            title: "Custom Tech Stack",
                            desc: "Our provider portal is built by doctors, for doctors. Fast, intuitive, and designed to minimize screen time.",
                            icon: Icons.Smartphone
                        }
                    ].map((feature, i) => (
                        <div key={i} className="group p-8 rounded-[2rem] bg-gray-50 hover:bg-teal-50/50 transition-colors duration-500 border border-transparent hover:border-teal-100">
                            <div className="w-14 h-14 rounded-2xl bg-white text-teal-700 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-serif text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const ApplicationForm = () => (
    <section className="py-32 bg-cream" id="apply">
        <div className="max-w-3xl mx-auto px-6">
            <FadeIn className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-gray-100">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Join the Network</h2>
                    <p className="text-gray-500">Submit your interest and our Medical Director will reach out.</p>
                </div>

                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 ml-1">First Name</label>
                            <input type="text" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all outline-none" placeholder="Jane" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 ml-1">Last Name</label>
                            <input type="text" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all outline-none" placeholder="Doe" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
                        <input type="email" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all outline-none" placeholder="doctor@example.com" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Medical Specialty</label>
                        <select className="w-full px-6 py-4 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all outline-none">
                            <option>Internal Medicine</option>
                            <option>Family Medicine</option>
                            <option>Endocrinology</option>
                            <option>Functional Medicine</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">LinkedIn or CV URL</label>
                        <input type="url" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all outline-none" placeholder="https://linkedin.com/in/..." />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Why do you want to join?</label>
                        <textarea className="w-full px-6 py-4 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all outline-none min-h-[120px]" placeholder="Tell us about your philosophy..."></textarea>
                    </div>

                    <Button className="w-full !py-5 !text-lg !rounded-xl mt-4">Submit Application</Button>
                </form>
            </FadeIn>
        </div>
    </section>
);


const Doctors = () => {
    return (
        <main>
            <Hero />
            <Features />
            <ApplicationForm />
        </main>
    );
};

export default Doctors;
