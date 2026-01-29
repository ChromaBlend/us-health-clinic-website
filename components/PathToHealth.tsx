import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FadeIn, ScaleIn } from './Animations';
import { SectionHeading } from './UI';

const steps = [
    {
        step: 1,
        title: "Test your whole body",
        desc: "Get a comprehensive blood draw at one of our 2,000+ partner labs or from the comfort of your own home.",
        image: "/images/how-it-works/step-1-test.png"
    },
    {
        step: 2,
        title: "An actionable plan",
        desc: "Easy to understand results and a clear health plan with tailored recommendations on diet, lifestyle changes & supplements.",
        image: "/images/how-it-works/ushc-dashboard.png"
    },
    {
        step: 3,
        title: "A connected ecosystem",
        desc: "You can book additional diagnostics, buy curated supplements with members-only discounts in your US Health Clinic dashboard.",
        image: "/images/how-it-works/step-3-ecosystem.png"
    }
];

export const PathToHealth = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-white relative overflow-hidden" id="treatment">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 md:mb-32 text-center max-w-2xl mx-auto">
                    <FadeIn>
                        <SectionHeading>Your Path to Health</SectionHeading>
                        <p className="mt-6 text-xl text-gray-500 font-light leading-relaxed">
                            A seamless journey to understanding and optimising your body, perfectly guided every step of the way.
                        </p>
                    </FadeIn>
                </div>

                <div className="relative">
                    {/* Central Line - Desktop */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 -translate-x-1/2 hidden md:block" />
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-1/2 top-0 bottom-0 w-px bg-teal-500 -translate-x-1/2 hidden md:block origin-top"
                    />

                    {/* Left Line - Mobile */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-100 md:hidden" />
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-8 top-0 bottom-0 w-px bg-teal-500 md:hidden origin-top"
                    />

                    <div className="space-y-24 md:space-y-0">
                        {steps.map((item, i) => (
                            <TimelineItem key={i} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

interface TimelineItemProps {
    item: {
        step: number;
        title: string;
        desc: string;
        image: string;
    };
    index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="relative md:grid md:grid-cols-2 md:gap-16 items-center">
            {/* Connector Dot */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-teal-500 rounded-full z-10 hidden md:block shadow-[0_0_0_8px_white]" />
            <div className="absolute left-8 -translate-x-1/2 w-4 h-4 bg-white border-2 border-teal-500 rounded-full z-10 md:hidden shadow-[0_0_0_8px_white]" />

            {/* Step Number Bubble - Mobile Only */}
            <div className="absolute left-8 -translate-x-1/2 -top-12 w-8 h-8 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center font-serif text-sm md:hidden">
                {item.step}
            </div>

            {/* Content Left (for even items on desktop) */}
            <div className={`pl-20 md:pl-0 ${isEven ? 'md:text-right md:pr-16' : 'md:col-start-2 md:pl-16'}`}>
                <FadeIn delay={0.2}>
                    <div className={`hidden md:flex items-center gap-4 mb-6 ${isEven ? 'justify-end' : 'justify-start'}`}>
                        <span className="w-8 h-8 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center font-serif text-sm">
                            {item.step}
                        </span>
                        <span className="text-sm font-medium tracking-widest uppercase text-teal-500">Step {item.step}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-teal-900 mb-4">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
                </FadeIn>
            </div>

            {/* Image (swaps side based on index) */}
            <div className={`mt-8 md:mt-0 pl-20 md:pl-0 ${isEven ? 'md:col-start-2 md:pl-16' : 'md:col-start-1 md:row-start-1 md:pr-16'}`}>
                <ScaleIn>
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 aspect-[4/3]">
                        <div className="absolute inset-0 bg-teal-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>
                </ScaleIn>
            </div>
        </div>
    );
};

