import React from 'react';
import { Icons } from '../components/Icons';
import { Link } from 'react-router-dom';
import { Button, SectionHeading } from '../components/UI';

const NutritionSignalProgram = () => {
    return (
        <div className="font-sans text-[#111827] antialiased selection:bg-[#0D5D56] selection:text-white">
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

            {/* MARQUEE BANNER (Scarcity Trigger) */}
            <div className="bg-[#0D5D56] text-white text-center py-3 text-sm font-bold tracking-wide sticky top-0 z-50 shadow-md">
                🚨 LIMITED PILOT: FREE FOR FIRST 150 USERS
            </div>

            {/* HERO SECTION */}
            <header className="max-w-7xl mx-auto px-6 pt-4 pb-20 lg:pt-12 lg:pb-32">
                {/* Layout follows Z-Pattern on Desktop */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Hero Copy */}
                    <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
                        {/* Headline */}
                        <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1] text-[#111827] tracking-tight">
                            Your Body Is <br />
                            <span className="text-[#0D5D56]">Telling You</span> Something. <br />
                            Let’s Listen Together.
                        </h1>

                        {/* Increased contrast text */}
                        <p className="text-lg lg:text-xl text-gray-800 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Tune your metabolism. Hit your protein goals. Make food your medicine.
                            A free, dietitian-led pilot program designed to help you understand before you change.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            {/* CTA */}
                            <a href="#join-pilot">
                                <Button className="animate-[subtle-pulse_2s_infinite] !bg-[#0D5D56] hover:!bg-[#08423D] !text-white !px-8 !py-4 !rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                                    JOIN FREE PILOT
                                </Button>
                            </a>

                            {/* Trust Badge */}
                            <div className="flex items-center gap-2 text-sm font-bold text-gray-700 bg-white/80 backdrop-blur border border-teal-100 px-4 py-2 rounded-full shadow-sm">
                                <Icons.Star className="w-4 h-4 text-[#0D5D56] fill-current" />
                                Dietitian Developed
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="order-1 lg:order-2 relative">
                        {/* Decorative Blob Background */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[120%] h-[120%] bg-[#F0F7F6] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>

                        {/* Main Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition duration-500">
                            <img src="https://placehold.co/600x700/0D5D56/FFFFFF?text=Woman+Looking+Left+at+CTA" alt="Woman looking towards the text" className="w-full h-auto object-cover" />

                            {/* Sticker Overlay */}
                            <div className="absolute bottom-6 left-6 bg-[#111827] text-white p-4 rounded-2xl shadow-lg max-w-[200px] animate-[float_3s_ease-in-out_infinite]">
                                <p className="italic text-lg">"Food is information, not just fuel."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* PROBLEM SECTION 1: PROTEIN */}
            <section className="py-20 bg-[#F0F7F6] rounded-t-[3rem] lg:rounded-t-[5rem] relative z-10 -mt-10 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
                <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Text content */}
                    <div className="space-y-6 text-left">
                        <SectionHeading align="left" className="!mb-4">Are You Eating Enough Protein?</SectionHeading>
                        <p className="text-xl text-gray-800 leading-relaxed font-light">
                            You eat well. You move. But the fatigue doesn't lift. It’s not your fault—you just haven't had the full picture yet.
                        </p>
                        <div className="h-1 w-20 bg-[#0D5D56] rounded-full"></div>
                    </div>

                    {/* Right Side: Stats Card */}
                    <div className="bg-white border-2 border-[#0D5D56]/10 rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition duration-300">
                        <p className="text-2xl lg:text-3xl font-bold mb-4 text-[#111827]">
                            "Studies indicate that <span className="text-[#0D5D56] underline decoration-4 underline-offset-4">50% of Americans</span> do not consume enough protein."
                        </p>
                        <p className="text-gray-700 text-base font-medium">
                            Our program focuses on nourishing the body with the nutrients you need to optimize muscle mass, mobility, and immune function.
                        </p>
                    </div>
                </div>
            </section>

            {/* PROBLEM SECTION 2: FIBER */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Card */}
                    <div className="order-2 lg:order-1 bg-[#F0F7F6] border-2 border-[#0D5D56]/10 rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition duration-300">
                        <div className="mb-6 relative">
                            {/* Speech Bubble visual cue */}
                            <div className="bg-white p-4 rounded-xl rounded-bl-none shadow-sm border border-gray-100 inline-block">
                                <p className="text-xl italic text-gray-500 font-serif">
                                    “I’m having protein shakes every day — I’m sorted.”
                                </p>
                            </div>
                        </div>
                        <p className="text-2xl lg:text-3xl font-serif font-medium text-[#111827]">
                            We help you understand whether you’re actually meeting your daily <span className="text-[#0D5D56]">fiber needs</span>.
                        </p>
                    </div>

                    {/* Right Side: Text content */}
                    <div className="order-1 lg:order-2 space-y-6 text-left">
                        <h2 className="text-4xl lg:text-5xl font-serif font-medium text-[#111827] leading-tight">
                            Protein is important. <br />
                            <span className="text-[#0D5D56] italic">But nutrition doesn’t stop there.</span>
                        </h2>
                        <p className="text-xl text-gray-800 leading-relaxed">
                            While protein has been heavily marketed, fiber is often overlooked — even though it’s easy to get and essential for weight loss, digestion, and overall gut health.
                        </p>
                        <div className="h-1 w-20 bg-[#0D5D56] rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* PHILOSOPHY SECTION */}
            <section className="py-20 px-6 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#0D5D56] font-bold tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
                        <SectionHeading>Dietitian Developed, Evidence-Based</SectionHeading>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
                        {/* Icon 1: Fueling */}
                        <div className="space-y-4 group">
                            <div className="bg-teal-50 w-20 h-20 mx-auto rounded-2xl border border-teal-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                                <Icons.BatteryCharging className="w-8 h-8 text-[#0D5D56]" />
                            </div>
                            <h4 className="text-xl font-serif font-medium text-[#111827]">Fueling</h4>
                            <p className="text-sm text-gray-600">Instead of restricting.</p>
                        </div>

                        {/* Icon 2: Resilience */}
                        <div className="space-y-4 group">
                            <div className="bg-teal-50 w-20 h-20 mx-auto rounded-2xl border border-teal-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                                <Icons.ShieldCheck className="w-8 h-8 text-[#0D5D56]" />
                            </div>
                            <h4 className="text-xl font-serif font-medium text-[#111827]">Resilience</h4>
                            <p className="text-sm text-gray-600">Metabolic health & longevity.</p>
                        </div>

                        {/* Icon 3: Vital Sign */}
                        <div className="space-y-4 group">
                            <div className="bg-teal-50 w-20 h-20 mx-auto rounded-2xl border border-teal-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                                <Icons.Activity className="w-8 h-8 text-[#0D5D56]" />
                            </div>
                            <h4 className="text-xl font-serif font-medium text-[#111827]">Vital Sign</h4>
                            <p className="text-sm text-gray-600">Appetite is information, not the enemy.</p>
                        </div>

                        {/* Icon 4: Evidence-Based */}
                        <div className="space-y-4 group">
                            <div className="bg-teal-50 w-20 h-20 mx-auto rounded-2xl border border-teal-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                                <Icons.Microscope className="w-8 h-8 text-[#0D5D56]" />
                            </div>
                            <h4 className="text-xl font-serif font-medium text-[#111827]">Evidence-Based</h4>
                            <p className="text-sm text-gray-600">Dietitian developed.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-20 lg:py-32 px-6 bg-[#F0F7F6] rounded-[3rem] my-10 mx-4 lg:mx-10 shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0D5D56]/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="max-w-6xl mx-auto space-y-24 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <SectionHeading>Easy Tracking + <br /> Dietitian Coaching</SectionHeading>
                    </div>

                    {/* Step 1 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute inset-0 bg-[#0D5D56]/10 rounded-3xl transform rotate-3"></div>
                            <img src="https://placehold.co/500x500/0D5D56/FFFFFF?text=Snap+Photo+via+Text" alt="Phone texting food photo" className="relative rounded-3xl border-4 border-white shadow-xl w-full" />
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <span className="bg-white text-[#0D5D56] border border-[#0D5D56]/20 font-bold px-4 py-1 rounded-full text-sm shadow-sm">Step 01</span>
                            <h3 className="text-3xl font-serif font-medium text-[#111827]">Snap & Send</h3>
                            <p className="text-lg text-gray-800">
                                Forget complex apps. Simply snap photos of your food and send them via text message!
                            </p>
                            <div className="bg-white p-4 rounded-xl border border-[#0D5D56]/10 flex items-start gap-3 shadow-sm">
                                <Icons.Bot className="w-6 h-6 text-[#0D5D56] mt-1" />
                                <div>
                                    <p className="font-bold text-sm text-[#111827]">Powered by USHC Smart Analysis</p>
                                    <p className="text-xs text-gray-600">Our white-label AI analyzes nutrients instantly.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 order-1">
                            <span className="bg-white text-[#0D5D56] border border-[#0D5D56]/20 font-bold px-4 py-1 rounded-full text-sm shadow-sm">Step 02</span>
                            <h3 className="text-3xl font-serif font-medium text-[#111827]">Get Expert Feedback</h3>
                            <p className="text-lg text-gray-800">
                                You're not doing this alone. You will receive guidance, support, and feedback directly from our team.
                            </p>
                            <div className="flex items-center gap-4 pt-2">
                                <img src="https://placehold.co/60x60/0D5D56/FFFFFF?text=RD" alt="Melissa RD" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                                <div>
                                    <p className="font-bold text-[#111827]">Melissa Vasikauskas, RD</p>
                                    <p className="text-sm text-[#0D5D56]">Lead Registered Dietitian</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative order-2">
                            <div className="absolute inset-0 bg-[#111827]/5 rounded-3xl transform -rotate-3"></div>
                            <img src="https://placehold.co/500x500/0D5D56/FFFFFF?text=Dietitian+Feedback+UI" alt="Dietitian feedback message" className="relative rounded-3xl border-4 border-white shadow-xl w-full" />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute inset-0 bg-[#0D5D56]/10 rounded-3xl transform rotate-3"></div>
                            <img src="https://placehold.co/500x500/F0F7F6/0D5D56?text=Community+Call" alt="Group coaching call" className="relative rounded-3xl border-4 border-white shadow-xl w-full" />
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <span className="bg-white text-[#0D5D56] border border-[#0D5D56]/20 font-bold px-4 py-1 rounded-full text-sm shadow-sm">Step 03</span>
                            <h3 className="text-3xl font-serif font-medium text-[#111827]">Join the Community</h3>
                            <p className="text-lg text-gray-800">
                                By sending photos each day, you earn an invitation to our dietitian-led weekly group coaching calls. Connect with others on the same journey.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM SECTION */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-serif font-medium text-center mb-12 text-[#111827]">Guided by Experts</h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Melissa Card */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition text-center">
                        <img src="https://placehold.co/300x300/0D5D56/FFFFFF?text=Melissa+RD" alt="Melissa Vasikauskas" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-teal-50" />
                        <h3 className="text-2xl font-serif font-medium text-[#111827]">Melissa Vasikauskas, RD</h3>
                        <p className="text-[#0D5D56] font-bold text-sm uppercase tracking-wide mb-4">Co-Founder & Lead Dietitian</p>
                        <p className="text-gray-600">Leading the clinical strategy to ensure every insight is medically sound and evidence-based.</p>
                    </div>

                    {/* Bree Card */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition text-center">
                        <img src="https://placehold.co/300x300/111827/FFFFFF?text=Bree+MPH" alt="Bree Gorman" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-teal-50" />
                        <h3 className="text-2xl font-serif font-medium text-[#111827]">Bree Gorman, MPH</h3>
                        <p className="text-[#0D5D56] font-bold text-sm uppercase tracking-wide mb-4">Behavioral Strategy Lead</p>
                        <p className="text-gray-600">Expert in habit formation and behavioral health, helping you make changes that actually stick.</p>
                    </div>
                </div>

                {/* Partnership Note */}
                <p className="text-center text-gray-400 text-sm mt-12">
                    In partnership with Tune Health technology. Executive leadership: Kyle Henry, CEO.
                </p>
            </section>

            {/* PROGRAM DETAILS */}
            <section className="bg-[#0D5D56] py-20 px-6 rounded-[3rem] mx-4 lg:mx-10 text-white shadow-inner">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl lg:text-4xl font-serif font-medium">Program Details</h2>

                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                            <h4 className="font-serif font-medium text-lg mb-2 flex items-center gap-2">
                                <Icons.Zap className="w-5 h-5" /> Immediate Start
                            </h4>
                            <p className="text-white/90 text-sm">The program begins as soon as you receive your first text. No waiting periods.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                            <h4 className="font-serif font-medium text-lg mb-2 flex items-center gap-2">
                                <Icons.BarChart2 className="w-5 h-5" /> Days 1-3: Baseline
                            </h4>
                            <p className="text-white/90 text-sm">We provide limited feedback initially to establish your baseline habits without pressure.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                            <h4 className="font-serif font-medium text-lg mb-2 flex items-center gap-2">
                                <Icons.TrendingUp className="w-5 h-5" /> Day 4+: Enhanced
                            </h4>
                            <p className="text-white/90 text-sm">On the 4th day, we begin providing deep-dive protein and fiber feedback.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                            <h4 className="font-serif font-medium text-lg mb-2 flex items-center gap-2">
                                <Icons.Award className="w-5 h-5" /> Earn Your Spot
                            </h4>
                            <p className="text-white/90 text-sm">Consistent daily photos earn you an invitation to the exclusive dietitian-led weekly call.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FORM AREA */}
            <div id="join-pilot" className="pt-20 pb-10 px-6">
                <div className="max-w-lg mx-auto bg-white border-2 border-[#0D5D56]/20 rounded-[2rem] p-8 lg:p-12 shadow-2xl relative z-10 -mb-20">
                    <div className="text-center space-y-4 mb-8">
                        <h2 className="text-3xl font-serif font-medium text-[#111827]">Ready to Tune Your Metabolism?</h2>
                        <p className="text-gray-500">Join the free pilot. Spots are limited.</p>

                        {/* Scarcity Trigger */}
                        <div className="inline-block bg-teal-50 border border-teal-100 text-teal-800 px-4 py-1 rounded-full text-xs font-bold">
                            Only 14 spots left for this cohort
                        </div>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">First Name</label>
                            <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0D5D56] focus:ring-1 focus:ring-[#0D5D56] shadow-sm" placeholder="Jane" />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Phone Number*</label>
                            <input type="tel" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0D5D56] focus:ring-1 focus:ring-[#0D5D56] shadow-sm" placeholder="(555) 555-5555" required />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email Address</label>
                            <input type="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0D5D56] focus:ring-1 focus:ring-[#0D5D56] shadow-sm" placeholder="jane@example.com" />
                        </div>

                        {/* CTA Pulse */}
                        <Button type="button" className="w-full !bg-[#0D5D56] hover:!bg-[#08423D] !text-white !py-4 !text-lg !rounded-full shadow-lg mt-4 animate-[subtle-pulse_2s_infinite]">
                            JOIN FREE PILOT
                        </Button>

                        <p className="text-[10px] text-gray-400 text-center leading-tight mt-4">
                            By signing up, you agree to receive text messages from US Health Clinic. Reply STOP to opt out anytime. Your data is private and HIPAA-protected.
                        </p>
                    </form>
                </div>
            </div>

            {/* SPACING FOR FOOTER OVERLAP */}
            <div className="h-20"></div>

        </div>
    );
};

export default NutritionSignalProgram;
