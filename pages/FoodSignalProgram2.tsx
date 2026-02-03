import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Play, Camera, Activity, Users } from 'lucide-react';

// --- Colors & Theme ---
// Cream: #FDF8F0
// Dark: #1a0505
// Red: #D82828
// Lime: #D9FF66

const NavBar = () => (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 bg-[#FDF8F0] border-b-2 border-black/5">
        <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-widest uppercase opacity-80">
            <span className="text-lg">🇺🇸</span>
            <span>An Official Website of the United States Government</span>
        </div>
    </div>
);

// --- Section A: Hero ---
const HeroSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax: Text fades out and moves slightly up, Video moves up faster to cover it
    const yText = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
    const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    // Video card visual adjustments
    const scaleVideo = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

    return (
        <section ref={containerRef} className="relative min-h-[120vh] bg-[#FDF8F0] flex flex-col items-center pt-32 overflow-hidden">
            {/* Sticky/Fixed Title Container */}
            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="fixed top-32 left-0 right-0 z-0 flex flex-col items-center text-center px-4 pointer-events-none"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[14vw] md:text-[11rem] leading-[0.85] font-black tracking-tighter text-[#1a0505] uppercase"
                >
                    Real Food<br />
                    Starts Here
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-8 pointer-events-auto"
                >
                    <button className="bg-[#D9FF66] border-2 border-[#1a0505] text-[#1a0505] hover:bg-[#c2e650] px-10 py-5 rounded-full font-bold text-xl transition-all shadow-[4px_4px_0px_0px_#1a0505] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                        Get the Guidelines
                    </button>
                </motion.div>
            </motion.div>

            {/* Spacer to push video down initially */}
            <div className="h-[50vh] w-full"></div>

            {/* Video Card - Rising up */}
            <motion.div
                style={{ scale: scaleVideo }}
                className="relative z-10 w-[95%] max-w-[1400px] aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#1a0505] mt-20"
            >
                <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop"
                    alt="Fresh vegetables and real food"
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#FDF8F0]/20 backdrop-blur-md border border-[#FDF8F0]/50 p-6 rounded-full cursor-pointer hover:scale-110 transition-transform">
                        <Play fill="#FDF8F0" size={48} className="text-[#FDF8F0]" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

// --- Placeholders for Future Sections ---

// --- Section B: "America is Sick" Stats ---
const StatsSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Transform scroll progress to stats state
    // 0.00 - 0.33: 50% state
    // 0.33 - 0.66: 75% state
    // 0.66 - 1.00: 90% state
    // transitions happen at roughly 0.3 and 0.6

    const barWidth = useTransform(
        scrollYProgress,
        [0, 0.2, 0.33, 0.5, 0.66, 0.8, 1],
        ["0%", "50%", "50%", "75%", "75%", "90%", "90%"]
    );

    // Text switching logic using simple state or opacity transforms?
    // Using simple opacity transforms for smooth transitions
    const opacityOne = useTransform(scrollYProgress, [0, 0.15, 0.30], [0, 1, 0]);
    const opacityTwo = useTransform(scrollYProgress, [0.33, 0.48, 0.63], [0, 1, 0]);
    const opacityThree = useTransform(scrollYProgress, [0.66, 0.81, 1], [0, 1, 1]);

    const pointerEventsOne = useTransform(scrollYProgress, (v) => (v < 0.33 ? 'auto' : 'none'));
    const pointerEventsTwo = useTransform(scrollYProgress, (v) => (v >= 0.33 && v < 0.66 ? 'auto' : 'none'));
    const pointerEventsThree = useTransform(scrollYProgress, (v) => (v >= 0.66 ? 'auto' : 'none'));

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-[#1a0505]">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
                {/* Header Block at Top Left */}
                <div className="absolute top-8 left-4 md:top-20 md:left-20 z-20">
                    <span className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4 block">The State of Our Health</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tight">
                        America is sick.<br />
                        The data is clear.
                    </h2>
                </div>

                {/* Main Content Area */}
                <div className="relative w-full h-full flex items-center">

                    {/* The Growing Red Bar */}
                    <motion.div
                        style={{ width: barWidth }}
                        className="absolute right-0 top-0 bottom-0 bg-[#D82828] z-0 flex items-end justify-end p-10 overflow-hidden"
                    >
                        {/* Giant Percentages clipped inside the bar */}
                        <div className="relative h-full w-full">
                            {/* 50% */}
                            <motion.div style={{ opacity: opacityOne }} className="absolute bottom-10 right-10 text-[20vw] font-black text-[#1a0505] leading-none tracking-tighter">
                                50%
                            </motion.div>
                            {/* 75% */}
                            <motion.div style={{ opacity: opacityTwo }} className="absolute bottom-10 right-10 text-[20vw] font-black text-[#1a0505] leading-none tracking-tighter">
                                75%
                            </motion.div>
                            {/* 90% */}
                            <motion.div style={{ opacity: opacityThree }} className="absolute bottom-10 right-10 text-[20vw] font-black text-[#1a0505] leading-none tracking-tighter">
                                90%
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Overlay Container (Left Side) */}
                    <div className="container mx-auto px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 h-full items-center pointer-events-none z-10">
                        <div className="relative h-64 md:h-96 w-full mt-32 md:mt-0">

                            {/* Stat 1 */}
                            <motion.div
                                style={{ opacity: opacityOne, pointerEvents: pointerEventsOne }}
                                className="absolute inset-0 flex flex-col justify-center"
                            >
                                <div className="text-4xl md:text-8xl font-black text-white mb-2">50%</div>
                                <div className="text-xl md:text-3xl text-gray-400 font-medium mb-4">of Americans have</div>
                                <div className="text-3xl md:text-5xl font-bold text-[#D82828] bg-[#1a0505]/80 p-2 inline-block">
                                    prediabetes or <br />diabetes
                                </div>
                            </motion.div>

                            {/* Stat 2 */}
                            <motion.div
                                style={{ opacity: opacityTwo, pointerEvents: pointerEventsTwo }}
                                className="absolute inset-0 flex flex-col justify-center"
                            >
                                <div className="text-4xl md:text-8xl font-black text-white mb-2">75%</div>
                                <div className="text-xl md:text-3xl text-gray-400 font-medium mb-4">of adults report having</div>
                                <div className="text-3xl md:text-5xl font-bold text-[#D82828] bg-[#1a0505]/80 p-2 inline-block">
                                    at least one <br /><span className="text-white">chronic condition</span>
                                </div>
                            </motion.div>

                            {/* Stat 3 */}
                            <motion.div
                                style={{ opacity: opacityThree, pointerEvents: pointerEventsThree }}
                                className="absolute inset-0 flex flex-col justify-center"
                            >
                                <div className="text-4xl md:text-8xl font-black text-white mb-2">90%</div>
                                <div className="text-xl md:text-3xl text-gray-400 font-medium mb-4">of U.S. healthcare spending</div>
                                <div className="text-3xl md:text-5xl font-bold text-[#D82828] bg-[#1a0505]/80 p-2 inline-block">
                                    is for chronic <br /><span className="text-white">disease</span>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// --- Section C & D Merged: Crisis & Solution Scroll Section ---
const CrisisScrollSection = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- Timings (Refined for Clear Separation & Occlusion) ---
    // Total Height: 450vh
    // 0.00 - 0.25: Legacy Reading
    // 0.25 - 0.30: Legacy Exit (Opacity 0 + move way up)
    // 0.35 - 0.45: Solution Enter (Opacity 1 + cover background)
    // 0.55 - 0.60: Solution Exit
    // 0.65 - 0.70: Manifesto Enter (Opacity 1 + cover background)

    // --- Scene 1: Legacy Pyramid ---
    // Aggressive exit: Move -100vh to be sure it's gone
    const legacyY = useTransform(scrollYProgress, [0.25, 0.30], ["0vh", "-100vh"]);
    const legacyOpacity = useTransform(scrollYProgress, [0.25, 0.30], [1, 0]);
    const legacyScale = useTransform(scrollYProgress, [0.25, 0.30], [1, 0.9]);

    const sentence1 = "For decades we were misled by guidance that prioritized processed fillers over real nutrition.";
    const words1 = sentence1.split(" ");
    const startRead1 = 0.05;
    const endRead1 = 0.25;
    const step1 = (endRead1 - startRead1) / words1.length;

    // --- Scene 2: Solution Reveal ---
    // Enter with background occlusion
    const solutionOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.60], [0, 1, 1, 0]);
    const solutionBlur = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.60], [20, 0, 0, 20]);
    // Solution Y movement: enters from below
    const solutionY = useTransform(scrollYProgress, [0.35, 0.45], ["20vh", "0vh"]);

    const solLine1Opacity = useTransform(scrollYProgress, [0.55, 0.58], [1, 0]);
    const solLine1Blur = useTransform(scrollYProgress, [0.55, 0.58], [0, 20]);
    const solLine2Opacity = useTransform(scrollYProgress, [0.58, 0.60], [1, 0]);
    const solLine2Blur = useTransform(scrollYProgress, [0.58, 0.60], [0, 20]);

    // --- Scene 3: Manifesto ---
    // Enter with background occlusion
    const manifestoOpacity = useTransform(scrollYProgress, [0.65, 0.70], [0, 1]);
    const manifestoY = useTransform(scrollYProgress, [0.65, 0.70], ["20vh", "0vh"]);

    const sentence3 = "For the first time, we're calling out the dangers of highly processed foods and rebuilding a broken system from the ground up with gold-standard science and common sense.";
    const words3 = sentence3.split(" ");
    const startRead3 = 0.70;
    const endRead3 = 0.95;
    const step3 = (endRead3 - startRead3) / words3.length;


    return (
        <section ref={containerRef} className="relative h-[450vh] bg-[#1a0505]">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">

                {/* --- Scene 1: Legacy Content Wrapper (Layer 1, z-0) --- */}
                <motion.div
                    style={{ y: legacyY, opacity: legacyOpacity, scale: legacyScale }}
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
                >
                    {/* The Glitchy Card */}
                    <div className="bg-[#2a2a2a] p-12 rounded-[2rem] inline-block mb-12 relative overflow-hidden">
                        <div className="w-64 h-56 relative mx-auto opacity-60">
                            <div className="absolute inset-0 flex flex-col items-center justify-end">
                                <div className="w-full h-full border-l-transparent border-r-transparent border-b-[#888] border-l-[128px] border-r-[128px] border-b-[224px]"></div>
                            </div>
                            <div className="absolute top-[30%] left-[30%] right-[30%] h-1 bg-[#1a0505]"></div>
                            <div className="absolute top-[55%] left-[20%] right-[20%] h-1 bg-[#1a0505]"></div>
                            <div className="absolute top-[80%] left-[10%] right-[10%] h-1 bg-[#1a0505]"></div>
                            <div className="absolute -bottom-8 w-full text-center text-sm font-bold text-gray-400 font-mono tracking-widest">
                                ERROR: 1992_GUIDELINES
                            </div>
                        </div>
                    </div>

                    <p className="text-2xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto text-center flex flex-wrap justify-center gap-x-2 gap-y-1">
                        {words1.map((word, i) => {
                            const s = startRead1 + (i * step1);
                            const e = s + step1;
                            return (
                                <Word
                                    key={i}
                                    word={word}
                                    progress={scrollYProgress}
                                    range={[s, e]}
                                />
                            );
                        })}
                    </p>
                </motion.div>

                {/* --- Scene 2: Solution Reveal Wrapper (Layer 2, z-10) --- */}
                {/* OPAQUE BACKGROUND added to physically cover layer 1 */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10 bg-[#1a0505]"
                    style={{ opacity: solutionOpacity, y: solutionY }}
                >
                    <div className="relative">
                        <h2 className="text-7xl md:text-[10rem] font-bold text-white leading-none tracking-tighter">
                            <motion.span style={{ opacity: solLine1Opacity, filter: useTransform(solLine1Blur, v => `blur(${v}px)`) }} className="block">
                                We can solve
                            </motion.span>
                            <motion.span style={{ opacity: solLine2Opacity, filter: useTransform(solLine2Blur, v => `blur(${v}px)`) }} className="block text-[#D9FF66]">
                                this crisis.
                            </motion.span>
                        </h2>
                    </div>
                </motion.div>

                {/* --- Scene 3: Manifesto Wrapper (Layer 3, z-20) --- */}
                {/* OPAQUE BACKGROUND added to physically cover layer 2 */}
                <motion.div
                    style={{ opacity: manifestoOpacity, y: manifestoY }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4 md:px-20 z-20 bg-[#1a0505]"
                >
                    <p className="text-4xl md:text-6xl font-bold leading-[1.1] max-w-5xl mx-auto text-center flex flex-wrap justify-center gap-x-3 gap-y-1">
                        {words3.map((word, i) => {
                            const s = startRead3 + (i * step3);
                            const e = s + step3;
                            return (
                                <Word
                                    key={i}
                                    word={word}
                                    progress={scrollYProgress}
                                    range={[s, e]}
                                />
                            );
                        })}
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

// Start Helper for Word
const Word = ({ word, progress, range }: { word: string, progress: any, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.3, 1]);
    const color = useTransform(progress, range, ["#9ca3af", "#ffffff"]); // gray-400 to white

    // Highlight specific words if needed (like "processed fillers")
    const isHighlight = word.includes("processed") || word.includes("fillers");

    const targetColor = isHighlight ? "#D82828" : "#ffffff";
    const animatedColor = useTransform(progress, range, ["#52525b", targetColor]); // zinc-600 to target

    return (
        <motion.span style={{ color: animatedColor }} className={isHighlight && word.includes("fillers") ? "underline decoration-[#D82828] decoration-4 underline-offset-4" : ""}>
            {word}
        </motion.span>
    );
};
// End Helper for Word

// --- Section E: Food Signal Steps (Timeline Version) ---
const FoodSignalStepsSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- Interaction Timetable [0 - 1] ---
    // 0.00 - 0.15: Intro ("Introducing") Fades IN
    // 0.15 - 0.25: Intro Fades OUT
    // 0.25 - 0.35: Title ("Food Signal Program") Fades IN (Centered)
    // 0.35 - 0.50: Title Moves to Top (Translate Y Up)
    // 0.50 - 1.00: Cards Scroll In

    // 1. Intro
    const introOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0]);
    const introBlur = useTransform(scrollYProgress, [0, 0.15], [10, 0]);

    // 2. Title
    const titleOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
    const titleBlur = useTransform(scrollYProgress, [0.25, 0.35], [10, 0]);
    // Move to top: Starts centered (0vh), moves to -35vh (depends on screen, approx top)
    const titleY = useTransform(scrollYProgress, [0.35, 0.50], ["0vh", "-35vh"]);
    const titleScale = useTransform(scrollYProgress, [0.35, 0.50], [1, 0.5]); // Scale down for top placement

    return (
        <section ref={containerRef} className="relative min-h-[350vh] bg-[#FDF8F0]">

            {/* Sticky Interaction Viewport */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center z-20 pointer-events-none">

                {/* Intro Text Layer */}
                <motion.p
                    style={{ opacity: introOpacity, filter: useTransform(introBlur, v => `blur(${v}px)`) }}
                    className="absolute text-gray-400 text-3xl md:text-5xl font-bold tracking-tight uppercase"
                >
                    Introducing
                </motion.p>

                {/* Main Title Layer */}
                <motion.h2
                    style={{
                        opacity: titleOpacity,
                        filter: useTransform(titleBlur, v => `blur(${v}px)`),
                        y: titleY,
                        scale: titleScale
                    }}
                    className="absolute text-6xl md:text-[8rem] font-bold text-[#1a0505] leading-[0.9] tracking-tighter text-center"
                >
                    The Food Signal<br />Program
                </motion.h2>

            </div>

            {/* Scrolling Steps Container - Starts naturally below the 'sticky' area so it scrolls up INTO view */}
            {/* We push it down so it arrives only after the title has moved up (approx 50% scroll) */}
            <div className="relative z-30 w-full max-w-4xl mx-auto px-4 pb-40 flex flex-col gap-12 mt-[150vh]">

                {/* Absolute Timeline Line */}
                <div className="absolute left-[39px] md:left-[63px] top-12 bottom-40 w-1 bg-gray-200 z-0 hidden md:block"></div>

                <StepItem
                    number="1"
                    title="Snap & Send"
                    desc="Simply snap a photo of your meal and send it to your personal AI nutritionist."
                />
                <StepItem
                    number="2"
                    title="Get Expert Feedback"
                    desc="Receive instant, science-backed grades on your food's nutritional quality."
                />
                <StepItem
                    number="3"
                    title="Join the Community"
                    desc="Share your progress and compete with friends in a supportive environment."
                />
            </div>
        </section>
    );
};

// Helper for Steps (Timeline Style)
const StepItem = ({ number, title, desc }: { number: string, title: string, desc: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 relative"
        >
            {/* Number Circle */}
            <div className="flex-shrink-0 z-10 bg-[#FDF8F0] py-2 md:py-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1a0505] text-[#D9FF66] flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg">
                    {number}
                </div>
            </div>

            {/* Content Card */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-lg border-b-4 border-black/5 flex-grow group hover:shadow-2xl transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                    <span className="bg-[#D9FF66] text-[#1a0505] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Step {number}
                    </span>
                    <div className="p-3 bg-gray-50 rounded-full group-hover:bg-[#1a0505] group-hover:text-white transition-colors duration-300">
                        <Play size={20} className="fill-current" />
                    </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1a0505] mb-4 group-hover:text-[#D82828] transition-colors">{title}</h3>
                <p className="text-lg text-gray-500 font-medium leading-relaxed">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
};


// --- Section F: Expanded Steps Detail (Vertical Scroll Stack) ---
const ExpandedStepsSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const steps = [
        {
            title: "Snap & Send",
            desc: "No more tedious calorie counting. Just take a picture of your meal and send it. Our advanced AI instantly recognizes the ingredients and portion sizes, giving you credit for healthy choices without the hassle.",
            icon: <Camera size={64} className="text-[#D9FF66]" />,
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop"
        },
        {
            title: "Expert Analysis",
            desc: "Understand what you're eating. We break down the fiber, protein, and detailed macro-nutrient profile of every meal. You'll learn which foods spike your blood sugar and which ones keep you fueled for longer.",
            icon: <Activity size={64} className="text-[#D9FF66]" />,
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Community Power",
            desc: "You aren't doing this alone. Join a vibrant community of like-minded individuals. Share your high scores, discover new real-food recipes, and get motivation when you need it most. Health is better together.",
            icon: <Users size={64} className="text-[#D9FF66]" />,
            image: "https://images.unsplash.com/photo-1529156069896-85ce80699f1c?q=80&w=2574&auto=format&fit=crop"
        }
    ];

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-[#1a0505]">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                {/* Background Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <h2 className="text-[20vw] font-black text-white leading-none tracking-tighter text-center">
                        HOW IT<br />WORKS
                    </h2>
                </div>

                <div className="relative z-10 flex flex-col items-center">

                    {/* 1. Image Card Stack (Top) */}
                    {/* Container */}
                    <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] mb-12">
                        {steps.map((step, index) => {
                            const start = index * 0.33;
                            const end = start + 0.33;

                            // Animation Logic to mimic enter/exit with stack pop effect
                            // Enter: Come from bottom + Rotate
                            // Stay: Center + No Rotate
                            // Exit: Go to Top + Rotate

                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const y = useTransform(scrollYProgress,
                                [start, start + 0.05, end - 0.05, end],
                                [200, 0, 0, -200]
                            );
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const opacity = useTransform(scrollYProgress,
                                [start, start + 0.05, end - 0.05, end],
                                [0, 1, 1, 0]
                            );
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const scale = useTransform(scrollYProgress,
                                [start, start + 0.05, end - 0.05, end],
                                [0.8, 1, 1, 0.8]
                            );
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const rotate = useTransform(scrollYProgress,
                                [start, start + 0.05, end - 0.05, end],
                                [-10, 0, 0, 10]
                            );

                            return (
                                <motion.div
                                    key={index}
                                    style={{ y, opacity, scale, rotate }}
                                    className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white"
                                >
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Icon overlay */}
                                    <div className="absolute top-4 right-4 bg-[#1a0505] p-3 rounded-full text-[#D9FF66]">
                                        {step.icon}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* 2. Text Content (Bottom) */}
                    <div className="h-48 text-center text-white max-w-2xl px-4">
                        {steps.map((step, index) => {
                            const start = index * 0.33;
                            const end = start + 0.33;

                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const opacity = useTransform(scrollYProgress,
                                [start, start + 0.1, end - 0.1, end],
                                [0, 1, 1, 0]
                            );
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const y = useTransform(scrollYProgress,
                                [start, start + 0.1, end - 0.1, end],
                                [20, 0, 0, -20]
                            );

                            return (
                                <motion.div
                                    key={index}
                                    style={{ opacity, y }}
                                    className="absolute left-0 right-0 flex flex-col items-center"
                                >
                                    <h3 className="text-4xl md:text-5xl font-black mb-4 text-[#D9FF66]">{step.title}</h3>
                                    <p className="text-lg md:text-xl font-medium text-gray-300 leading-relaxed font-mono">
                                        {step.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>

            </div>

            {/* Scroll Indicators */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30 pointer-events-none mix-blend-difference">
                {steps.map((_, i) => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const isActive = useTransform(scrollYProgress, [i * 0.33, (i * 0.33) + 0.33], [0.3, 1]);
                    return (
                        <motion.div
                            key={i}
                            style={{ opacity: isActive }}
                            className="w-2 h-12 rounded-full bg-white transition-colors"
                        />
                    );
                })}
            </div>

            <footer className="absolute bottom-4 left-0 right-0 text-center text-white/10 text-[0.6rem] font-bold uppercase tracking-[0.5em] pointer-events-none">
                U.S. Department of Health & Human Services
            </footer>

        </section>
    );
};

export default function FoodSignalProgram2() {
    return (
        <main className="bg-[#FDF8F0] min-h-screen font-sans selection:bg-[#D9FF66] selection:text-[#1a0505]">
            <NavBar />
            <HeroSection />
            <StatsSection />
            <CrisisScrollSection />
            <FoodSignalStepsSection />
            <ExpandedStepsSection />
        </main>
    );
}