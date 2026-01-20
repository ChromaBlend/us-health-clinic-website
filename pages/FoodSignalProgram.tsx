import React from 'react';
import { Icons } from '../components/Icons';
import { Button, SectionHeading } from '../components/UI';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations';

const FoodSignalProgram = () => {
    return (
        <div className="font-sans text-gray-900 antialiased selection:bg-[#0D5D56] selection:text-white">
            <style>
                {`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes subtle-pulse {
                    0% { box-shadow: 0 0 0 0 rgba(13, 93, 86, 0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(13, 93, 86, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(13, 93, 86, 0); }
                }
                `}
            </style>

            {/* HERO SECTION */}
            <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#F0F7F6]">
                {/* Background Decor matching other pages */}
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                    {/* Hero Copy */}
                    <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
                        <FadeIn delay={0.1}>
                            <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1] text-gray-900 tracking-tight">
                                Your Body Is <br />
                                <span className="text-[#0D5D56] italic">Telling You</span> Something. <br />
                                Let’s Listen Together.
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
                                Tune your metabolism. Hit your protein goals. Make food your medicine.
                                A free, dietitian-led pilot program designed to help you understand before you change.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <a href="#join-pilot">
                                    <Button className="animate-[subtle-pulse_2s_infinite] !bg-[#0D5D56] hover:!bg-[#08423D] !text-white !px-8 !py-4 !rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 inline-block">
                                        Join Free Pilot
                                    </Button>
                                </a>

                                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur border border-[#0D5D56]/10 px-4 py-2 rounded-full shadow-sm">
                                    <Icons.Star className="w-4 h-4 text-[#0D5D56] fill-current" />
                                    Dietitian Developed
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Hero Image */}
                    <FadeIn delay={0.4} className="order-1 lg:order-2 relative">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition duration-700">
                            <img src="https://placehold.co/600x700/0D5D56/FFFFFF?text=Woman+Looking+Left+at+CTA" alt="Woman looking towards the text" className="w-full h-auto object-cover" />

                            {/* Sticker Overlay */}
                            <div className="absolute bottom-6 left-6 bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-[240px] animate-[float_3s_ease-in-out_infinite]">
                                <p className="italic text-lg font-serif">"Food is information, not just fuel."</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </header>

            {/* PROBLEM SECTION 1: PROTEIN */}
            <section className="py-32 bg-white relative z-10 -mt-10 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.03)]">
                <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    <FadeIn direction="right" className="space-y-6 text-left">
                        <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
                            Are You Eating Enough Protein?
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                            You eat well. You move. But the fatigue doesn't lift. It’s not your fault—you just haven't had the full picture yet.
                        </p>
                        <div className="h-1 w-20 bg-[#0D5D56] rounded-full"></div>
                    </FadeIn>

                    <FadeIn direction="left" className="bg-white border border-gray-100 rounded-[2rem] p-10 lg:p-14 shadow-xl hover:shadow-2xl transition duration-500">
                        <p className="text-2xl lg:text-3xl font-serif text-gray-900 mb-6 leading-relaxed">
                            "Studies indicate that <span className="text-[#0D5D56] italic underline decoration-2 underline-offset-4">50% of Americans</span> do not consume enough protein."
                        </p>
                        <p className="text-gray-500 text-base font-medium leading-relaxed">
                            Our program focuses on nourishing the body with the nutrients you need to optimize muscle mass, mobility, and immune function.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* PROBLEM SECTION 2: FIBER */}
            <section className="py-32 bg-[#F0F7F6]">
                <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    <FadeIn direction="right" className="order-2 lg:order-1 bg-white border border-gray-100 rounded-[2rem] p-10 lg:p-14 shadow-xl hover:shadow-2xl transition duration-500">
                        <div className="mb-8 relative">
                            <div className="bg-[#F0F7F6] p-6 rounded-2xl rounded-bl-none inline-block">
                                <p className="text-xl italic text-gray-600 font-serif">
                                    “I’m having protein shakes every day — I’m sorted.”
                                </p>
                            </div>
                        </div>
                        <p className="text-3xl font-serif text-gray-900 leading-tight">
                            We help you understand whether you’re actually meeting your daily <span className="text-[#0D5D56]">fiber needs</span>.
                        </p>
                    </FadeIn>

                    <FadeIn direction="left" className="order-1 lg:order-2 space-y-6 text-left">
                        <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
                            Protein is important. <br />
                            <span className="text-[#0D5D56] italic">But nutrition doesn’t stop there.</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                            While protein has been heavily marketed, fiber is often overlooked — even though it’s easy to get and essential for weight loss, digestion, and overall gut health.
                        </p>
                        <div className="h-1 w-20 bg-[#0D5D56] rounded-full"></div>
                    </FadeIn>
                </div>
            </section>

            {/* PHILOSOPHY SECTION */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <FadeIn className="text-center mb-20">
                        <span className="text-[#0D5D56] font-bold tracking-widest uppercase text-xs mb-4 block">Our Philosophy</span>
                        <SectionHeading>Dietitian Developed, Evidence-Based</SectionHeading>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
                        {[
                            { title: "Fueling", desc: "Instead of restricting.", icon: <Icons.BatteryCharging /> },
                            { title: "Resilience", desc: "Metabolic health & longevity.", icon: <Icons.ShieldCheck /> },
                            { title: "Vital Sign", desc: "Appetite is information.", icon: <Icons.Activity /> },
                            { title: "Evidence-Based", desc: "Dietitian developed.", icon: <Icons.Microscope /> }
                        ].map((item, i) => (
                            <StaggerItem key={i} className="space-y-6 group p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
                                <div className="bg-[#F0F7F6] w-20 h-20 mx-auto rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-[#0D5D56]">
                                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                                </div>
                                <div>
                                    <h4 className="text-xl font-serif text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-32 px-6 bg-[#F0F7F6] rounded-[3rem] my-10 mx-4 lg:mx-10 relative overflow-hidden">
                <div className="max-w-6xl mx-auto space-y-32 relative z-10">
                    <FadeIn className="text-center max-w-2xl mx-auto mb-20">
                        <SectionHeading>Easy Tracking + <br /> Dietitian Coaching</SectionHeading>
                    </FadeIn>

                    {/* Step 1 */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn direction="right" className="relative order-2 lg:order-1">
                            <div className="absolute inset-0 bg-[#0D5D56]/5 rounded-[2.5rem] transform rotate-3"></div>
                            <img src="https://placehold.co/500x500/0D5D56/FFFFFF?text=Snap+Photo+via+Text" alt="Phone texting food photo" className="relative rounded-[2.5rem] shadow-2xl w-full" />
                        </FadeIn>
                        <FadeIn direction="left" className="space-y-6 order-1 lg:order-2">
                            <span className="bg-white text-[#0D5D56] border border-[#0D5D56]/20 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-sm">Step 01</span>
                            <h3 className="text-4xl font-serif text-gray-900">Snap & Send</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Forget complex apps. Simply snap photos of your food and send them via text message!
                            </p>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-4 shadow-sm">
                                <div className="bg-teal-50 p-2 rounded-lg text-[#0D5D56]">
                                    <Icons.Bot className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-gray-900">Powered by Smart Analysis</p>
                                    <p className="text-xs text-gray-500 mt-1">Our white-label AI analyzes nutrients instantly.</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Step 2 */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn direction="right" className="space-y-6 order-1">
                            <span className="bg-white text-[#0D5D56] border border-[#0D5D56]/20 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-sm">Step 02</span>
                            <h3 className="text-4xl font-serif text-gray-900">Get Expert Feedback</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                You're not doing this alone. You will receive guidance, support, and feedback directly from our team.
                            </p>
                            <div className="flex items-center gap-4 pt-4">
                                <img src="https://placehold.co/60x60/0D5D56/FFFFFF?text=RD" alt="Melissa RD" className="w-14 h-14 rounded-full border-4 border-white shadow-md" />
                                <div>
                                    <p className="font-serif font-bold text-gray-900 text-lg">Melissa Vasikauskas, RD</p>
                                    <p className="text-sm text-[#0D5D56] font-medium">Lead Registered Dietitian</p>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn direction="left" className="relative order-2">
                            <div className="absolute inset-0 bg-gray-900/5 rounded-[2.5rem] transform -rotate-3"></div>
                            <img src="https://placehold.co/500x500/0D5D56/FFFFFF?text=Dietitian+Feedback+UI" alt="Dietitian feedback message" className="relative rounded-[2.5rem] shadow-2xl w-full" />
                        </FadeIn>
                    </div>

                    {/* Step 3 */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn direction="right" className="relative order-2 lg:order-1">
                            <div className="absolute inset-0 bg-[#0D5D56]/5 rounded-[2.5rem] transform rotate-3"></div>
                            <img src="https://placehold.co/500x500/F0F7F6/0D5D56?text=Community+Call" alt="Group coaching call" className="relative rounded-[2.5rem] shadow-2xl w-full" />
                        </FadeIn>
                        <FadeIn direction="left" className="space-y-6 order-1 lg:order-2">
                            <span className="bg-white text-[#0D5D56] border border-[#0D5D56]/20 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-sm">Step 03</span>
                            <h3 className="text-4xl font-serif text-gray-900">Join the Community</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                By sending photos each day, you earn an invitation to our dietitian-led weekly group coaching calls. Connect with others on the same journey.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* TEAM SECTION */}
            <section className="py-32 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Melissa Card */}
                    <FadeIn direction="up">
                        <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src="https://placehold.co/600x450/0D5D56/FFFFFF?text=Melissa+RD"
                                    alt="Melissa Vasikauskas"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8 md:p-10 space-y-4 text-left">
                                <h3 className="text-2xl font-bold text-gray-900 leading-tight">Melissa Vasikauskas, RD</h3>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Co-Founder & Lead Dietitian</p>
                                <p className="text-gray-600 leading-relaxed font-light text-[15px]">
                                    Leading the clinical strategy to ensure every insight is medically sound and evidence-based.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Bree Card */}
                    <FadeIn direction="up" delay={0.2}>
                        <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src="https://placehold.co/600x450/111827/FFFFFF?text=Bree+MPH"
                                    alt="Bree Gorman"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8 md:p-10 space-y-4 text-left">
                                <h3 className="text-2xl font-bold text-gray-900 leading-tight">Bree Gorman, MPH</h3>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Behavioral Strategy Lead</p>
                                <p className="text-gray-600 leading-relaxed font-light text-[15px]">
                                    Expert in habit formation and behavioral health, helping you make changes that actually stick.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="text-center mt-20">
                    <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em] leading-loose">
                        IN PARTNERSHIP WITH TUNE HEALTH TECHNOLOGY. EXECUTIVE LEADERSHIP: KYLE HENRY, CEO.
                    </p>
                </div>
            </section>

            {/* PROGRAM DETAILS */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        {/* Left Column - Sticky Info */}
                        <div className="md:w-1/3 relative md:sticky md:top-32">
                            <FadeIn>
                                <span className="text-[#0D5D56] font-bold tracking-widest text-sm uppercase mb-4 block">The Program</span>
                                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                                    Program <br /> <span className="italic text-gray-400">Details</span>
                                </h2>
                                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                                    The Food Signal pilot is designed to be low-friction yet high-insight.
                                    We help you establish a baseline before layering in dietitian-led optimizations.
                                </p>
                                <a href="#join-pilot">
                                    <Button className="!bg-[#0D5D56] hover:!bg-[#08423D] !text-white !rounded-full !px-8">
                                        Join Free Pilot
                                    </Button>
                                </a>
                            </FadeIn>
                        </div>

                        {/* Right Column - Program Steps/Details (Vertical Timeline) */}
                        <div className="md:w-2/3 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 z-0"></div>

                            <StaggerContainer className="space-y-12 relative z-10">
                                {[
                                    {
                                        badge: "Immediate Start",
                                        desc: "The program begins as soon as you receive your first text. No waiting periods.",
                                        icon: <Icons.Zap />,
                                        active: true
                                    },
                                    {
                                        badge: "Days 1-3: Baseline",
                                        desc: "We provide limited feedback initially to establish your baseline habits without pressure.",
                                        icon: <Icons.BarChart2 />,
                                        active: false
                                    },
                                    {
                                        badge: "Day 4+: Enhanced",
                                        desc: "On the 4th day, we begin providing deep-dive protein and fiber feedback.",
                                        icon: <Icons.TrendingUp />,
                                        active: false
                                    },
                                    {
                                        badge: "Earn Your Spot",
                                        desc: "Consistent daily photos earn you an invitation to the exclusive dietitian-led weekly call.",
                                        icon: <Icons.Award />,
                                        active: false
                                    }
                                ].map((item, i) => (
                                    <StaggerItem key={i} className="flex gap-8 group/item">
                                        {/* Timeline Dot/Number */}
                                        <div className="relative shrink-0">
                                            <div className={`w-12 h-12 rounded-full border-4 border-white flex items-center justify-center text-lg font-bold shadow-md transition-colors duration-500
                                                ${item.active ? 'bg-[#0D5D56] text-white' : 'bg-gray-200 text-gray-500'}`}>
                                                {i + 1}
                                            </div>
                                        </div>

                                        {/* Card content */}
                                        <div className="bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-transparent hover:bg-teal-50/50 hover:border-teal-100 transition-all duration-500 flex-1 relative -mt-4">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                                <div className="inline-block px-4 py-1.5 bg-white text-[#0D5D56] rounded-full text-sm font-bold shadow-sm">
                                                    {item.badge}
                                                </div>
                                                <div className="w-14 h-14 rounded-2xl bg-white text-[#0D5D56] flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                                                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                                                </div>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed text-xl font-light">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>
                </div>
            </section>

            {/* FORM AREA */}
            <div id="join-pilot" className="pt-32 pb-10 px-6">
                <FadeIn className="max-w-xl mx-auto bg-white border border-gray-100 rounded-[2.5rem] p-10 lg:p-14 shadow-2xl relative z-10 -mb-20">
                    <div className="text-center space-y-4 mb-10">
                        <h2 className="text-3xl font-serif text-gray-900">Ready to Tune Your Metabolism?</h2>
                        <p className="text-gray-500">Join the free pilot. Spots are limited.</p>

                        <div className="inline-block bg-teal-50 text-[#0D5D56] px-4 py-1.5 rounded-full text-xs font-bold animate-pulse">
                            🔥 Only 14 spots left for this cohort
                        </div>
                    </div>

                    <form className="space-y-5">
                        <div className="space-y-1">
                            <label className="block text-xs font-bold uppercase tracking-wide text-gray-400">First Name</label>
                            <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0D5D56] focus:ring-1 focus:ring-[#0D5D56] transition-all" placeholder="Jane" />
                        </div>

                        <div className="space-y-1">
                            <label className="block text-xs font-bold uppercase tracking-wide text-gray-400">Phone Number*</label>
                            <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0D5D56] focus:ring-1 focus:ring-[#0D5D56] transition-all" placeholder="(555) 555-5555" required />
                        </div>

                        <div className="space-y-1">
                            <label className="block text-xs font-bold uppercase tracking-wide text-gray-400">Email Address</label>
                            <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0D5D56] focus:ring-1 focus:ring-[#0D5D56] transition-all" placeholder="jane@example.com" />
                        </div>

                        <Button type="button" className="w-full !bg-[#0D5D56] hover:!bg-[#08423D] !text-white !py-4 !text-lg !rounded-full shadow-lg hover:shadow-xl mt-6">
                            Join Free Pilot
                        </Button>

                        <p className="text-[10px] text-gray-400 text-center leading-tight mt-6 px-4">
                            By signing up, you agree to receive text messages from US Health Clinic. Reply STOP to opt out anytime. Your data is private and HIPAA-protected.
                        </p>
                    </form>
                </FadeIn>
            </div>
            {/* SPACING FOR FOOTER OVERLAP */}
            <div className="h-40 bg-[#F0F7F6]/0"></div>
        </div>
    );
};

export default FoodSignalProgram;
