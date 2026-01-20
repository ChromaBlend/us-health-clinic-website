
import React from 'react';
import { Button, SectionHeading, SectionSub } from '../components/UI';
import { Icons } from '../components/Icons';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations';
import { PathToHealth } from '../components/PathToHealth';
import { Membership } from '../components/Membership';
import { motion } from 'framer-motion';

const CommonBanner = () => {
    return (
        <section className="bg-cream py-32 md:py-48 px-6 text-center relative overflow-hidden">
            <FadeIn className="max-w-4xl mx-auto relative z-10" delay={0.2} force>
                <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
                    Finally, healthcare that <span className="italic text-teal-700">actually explains your body.</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                    No medical confusion. No guesswork. Just clarity in 3 steps, <span className="text-teal-700 font-medium">leading directly to your personalized plan.</span>
                </p>
                <Button to="/subscribe" className="!bg-teal-700 hover:!bg-teal-800 text-white px-8 py-4 text-lg rounded-full">Starts at $199</Button>
            </FadeIn>

            {/* Background Decor */}
            <FadeIn delay={0.4} direction="none" className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50 pointer-events-none"></FadeIn>
        </section>
    );
};



const GuidedReco = () => {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    // Force scroll to start on mount to prevent "starting from end" issues
    React.useLayoutEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = 0;
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -320 : 320;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const items = [
        { title: "Prescriptions & Medication", desc: "Hormones, peptides, metabolic meds (like GLP-1s) if your body needs them.", img: "/images/how-it-works/Prescriptions-&-Medication.png" },
        { title: "Supplements", desc: "Curated, high-quality recommendations based on your specific deficiencies.", img: "/images/how-it-works/suppliments.png" },
        { title: "Add-on Testing", desc: "Access to deeper testing if the markers suggest it.", img: "/images/how-it-works/addon-testing.png" },
        { title: "24/7 Care Chat", desc: "Always have access to your dedicated care team to answer questions.", img: "/images/how-it-works/24-7-chat.png" }
    ];

    return (
        <section className="py-24 bg-cream overflow-hidden">
            <FadeIn className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <span className="text-teal-700 font-bold tracking-widest text-xs uppercase mb-3 block">After your health plan</span>
                    <SectionHeading align="left" className="mb-0">We guide you to what you need</SectionHeading>
                </div>
            </FadeIn>

            {/* Mobile View: Vertical Stack */}
            <StaggerContainer className="flex flex-col gap-10 px-6 md:hidden">
                {items.map((item, i) => (
                    <StaggerItem key={i} className="w-full">
                        <div className="aspect-square rounded-2xl overflow-hidden mb-5 relative shadow-sm">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-2xl font-serif text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </StaggerItem>
                ))}
            </StaggerContainer>

            {/* Desktop View: Carousel */}
            <FadeIn direction="right" className="hidden md:block relative w-full" delay={0.2}>
                <style>{`
                    @media (min-width: 768px) {
                        .dynamic-carousel-start {
                            padding-left: max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem));
                            padding-right: 1.5rem; /* Allow bleed to right without balancing padding */
                        }
                    }
                `}</style>
                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto pb-16 snap-x scrollbar-hide dynamic-carousel-start"
                >
                    {items.map((item, i) => (
                        <div key={i} className="w-72 flex-shrink-0 snap-start transition-opacity duration-300">
                            <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative group shadow-md hover:shadow-xl transition-all duration-300">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                            </div>
                            <h3 className="text-xl font-serif text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                    {/* Extra spacer for end scrolling comfort */}
                    <div className="w-12 flex-shrink-0"></div>
                </div>
            </FadeIn>


        </section>
    );
};



const AgeingGraph = () => {
    // Coordinate system: 400x200
    // Y=100 is the "0" baseline
    // Y=20 is "+1" (Top)
    // Y=180 is "-1" (Bottom)

    return (
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl flex-1 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-500 min-h-[400px]">
            <div className="mb-4 relative z-10">
                <h3 className="text-6xl font-serif font-medium text-gray-900 mb-2">70<span className="text-3xl text-gray-400 ml-1">%</span></h3>
                <p className="text-gray-500 font-medium text-lg">Slow their speed of ageing</p>
            </div>

            <div className="relative flex-1 w-full mt-4 min-h-[250px]">
                {/* Labels - positioned absolutely relative to container for easier text handling, but matching SVG Y coords */}
                {/* SVG Y=20 -> ~10% from top */}
                <span className="absolute -left-2 top-[10%] -translate-y-1/2 text-sm font-bold text-gray-900">+1</span>
                {/* SVG Y=100 -> 50% */}
                <span className="absolute -left-2 top-[50%] -translate-y-1/2 text-sm font-bold text-gray-900">0</span>
                {/* SVG Y=180 -> ~90% */}
                <span className="absolute -left-2 top-[90%] -translate-y-1/2 text-sm font-bold text-gray-900">-1</span>

                <span className="absolute right-0 top-0 text-xs font-bold text-orange-500">Normal</span>
                <span className="absolute left-0 bottom-0 text-xs font-bold text-gray-400">Biological Age</span>

                <div className="absolute right-0 bottom-[10%] bg-teal-800 text-white text-[10px] font-bold px-3 py-1 rounded-full z-20 shadow-md">
                    With USHC
                </div>

                {/* Graph Area */}
                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="gradientNormal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#f97316" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="gradientOptimized" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#0f766e" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#0f766e" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Dashed Grid Lines matching labels */}
                    <line x1="0" y1="20" x2="400" y2="20" stroke="#f3f4f6" strokeWidth="2" strokeDasharray="6 6" />
                    <line x1="0" y1="100" x2="400" y2="100" stroke="#f3f4f6" strokeWidth="2" strokeDasharray="6 6" />
                    <line x1="0" y1="180" x2="400" y2="180" stroke="#f3f4f6" strokeWidth="2" strokeDasharray="6 6" />

                    {/* Normal Ageing Line (Top) */}
                    {/* Curve: Start (0,100) -> Control(150,100) -> End(400,20) */}
                    <motion.path
                        d="M0,100 C120,100 200,20 400,20"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />

                    {/* Dots for Normal Line - Calculated roughly based on curve */}
                    {/* Points visually aligned to the curve C120,100 200,20 400,20 */}
                    {[
                        { cx: 0, cy: 100 },
                        { cx: 100, cy: 85 },
                        { cx: 200, cy: 50 },
                        { cx: 300, cy: 25 },
                        { cx: 400, cy: 20 },
                    ].map((dot, i) => (
                        <motion.circle
                            key={`n-${i}`}
                            cx={dot.cx}
                            cy={dot.cy}
                            r="5"
                            fill="#f97316"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1 + (i * 0.1), duration: 0.3 }}
                        />
                    ))}


                    {/* Optimized Ageing Line (Bottom) */}
                    {/* Curve: Start (0,100) -> Control(150,100) -> End(400,180) */}
                    <motion.path
                        d="M0,100 C120,100 200,180 400,180"
                        fill="none"
                        stroke="#0f766e"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                    />
                    {/* Fill for Optimized - Using same curve instructions */}
                    <motion.path
                        d="M0,100 C120,100 200,180 400,180 V200 H0 Z"
                        fill="url(#gradientOptimized)"
                        stroke="none"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    />

                    {/* Dots for Optimized Line */}
                    {[
                        { cx: 0, cy: 100 },
                        { cx: 100, cy: 115 },
                        { cx: 200, cy: 150 },
                        { cx: 300, cy: 175 },
                        { cx: 400, cy: 180 },
                    ].map((dot, i) => (
                        <motion.circle
                            key={`o-${i}`}
                            cx={dot.cx}
                            cy={dot.cy}
                            r="5"
                            fill="#0f766e"
                            stroke="white"
                            strokeWidth="2"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.2 + (i * 0.1), duration: 0.3 }}
                        />
                    ))}

                </svg>
            </div>
        </div>
    );
};

const RiskFactors = () => {
    return (
        <div className="flex-1 flex flex-col gap-6 min-h-[400px]">
            {/* Item 1 */}
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl flex-1 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500">
                <div>
                    <h3 className="text-5xl font-serif font-medium text-gray-900 mb-2">63<span className="text-2xl text-gray-400 ml-1">%</span></h3>
                    <p className="text-gray-500 font-medium mb-4 text-lg">Helped prevent metabolic issues early</p>

                    {/* Custom Progress Bar */}
                    <div className="h-2 w-full bg-gray-100 rounded-full relative mt-8">
                        <motion.div
                            className="absolute left-0 top-0 h-full bg-teal-700 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "63%" }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                            {/* Triangle Indicator */}
                            <div className="absolute right-0 top-3 translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-teal-700 rotate-180"></div>
                        </motion.div>
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-6">
                    <div className="w-10 h-10 rounded-full bg-orange-100 overflow-hidden relative flex-shrink-0">
                        <img src="/images/how-it-works/diabetes.png" className="w-full h-full object-cover" alt="Metabolic" />
                    </div>
                    <span className="font-bold text-gray-900 text-lg">Metabolic Risk</span>
                </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl flex-1 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500">
                <div>
                    <h3 className="text-5xl font-serif font-medium text-gray-900 mb-2">44<span className="text-2xl text-gray-400 ml-1">%</span></h3>
                    <p className="text-gray-500 font-medium mb-4 text-lg">Helped support heart health early</p>

                    {/* Custom Progress Bar */}
                    <div className="h-2 w-full bg-gray-100 rounded-full relative mt-8">
                        <motion.div
                            className="absolute left-0 top-0 h-full bg-teal-700 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "44%" }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        >
                            {/* Triangle Indicator */}
                            <div className="absolute right-0 top-3 translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-teal-700 rotate-180"></div>
                        </motion.div>
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-6">
                    <div className="w-10 h-10 rounded-full bg-red-100 overflow-hidden relative flex-shrink-0">
                        <img src="/images/how-it-works/cardiovascular.png" className="w-full h-full object-cover" alt="Cardiovascular" />
                    </div>
                    <span className="font-bold text-gray-900 text-lg">Heart Health</span>
                </div>
            </div>
        </div>
    );
};

const RealResult = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn className="text-center mb-16">
                    <SectionHeading>It starts with 100+ labs</SectionHeading>
                    <SectionSub>From heart health to hormone balance our comprehensive test panels detect early signs of over 1,000 conditions</SectionSub>
                </FadeIn>

                <div className="flex flex-col lg:flex-row justify-center gap-8 items-stretch max-w-5xl mx-auto">
                    <AgeingGraph />
                    <RiskFactors />
                </div>


            </div>
        </section>
    );
};




const FaqSection = () => (
    <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
            <FadeIn><SectionHeading>FAQs</SectionHeading></FadeIn>
            <StaggerContainer className="mt-12">
                {[
                    { q: "What happens after I join?", a: "Once you join, we help you schedule testing near you, doctors review your results, and we guide you on what it means for your health, all clear and actionable." },
                    { q: "When do I take the blood test?", a: "You can schedule your blood test at a time that works best for you at one of our 2,000+ partner labs nationwide." },
                    { q: "How do I see my results?", a: "Your results will be available securely online in your private dashboard, usually within 5 business days after your lab visit." },
                    { q: "Will someone help me understand what the results mean?", a: "Yes, a board-certified physician will review your results and provide a detailed explanation and personalized plan." }
                ].map((item, i) => (
                    <StaggerItem key={i} className="border-b border-gray-100 py-6">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">{item.q}</h4>
                        <p className="text-gray-500 font-light">{item.a}</p>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
    </section>
);

const HowItWorks = () => {
    return (
        <main>
            <CommonBanner />
            <PathToHealth />
            <GuidedReco />
            <RealResult />
            <Membership />
            <FaqSection />
        </main>
    );
};

export default HowItWorks;
