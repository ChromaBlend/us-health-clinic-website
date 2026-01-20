import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue, useMotionValueEvent } from 'framer-motion';
import { Button, SectionHeading, Accordion } from '../components/UI';
import { Icons } from '../components/Icons';
import { Link } from 'react-router-dom';

const TREATMENT_CATEGORIES = [
    {
        title: "Weight Loss + Metabolism",
        description: "Science-backed protocols to reset your metabolic baseline.",
        icon: <Icons.Activity />,
        items: ["GLP-1 (Semaglutide / Tirzepatide)", "Metabolic Reset", "LDN (Low Dose Naltrexone)"]
    },
    {
        title: "Hormone Optimization",
        description: "Restore balance to your body’s chemical messengers.",
        icon: <Icons.Zap />,
        items: ["TRT (Testosterone Replacement)", "BHRT (Bioidentical Hormones)", "Thyroid Optimization"]
    },
    {
        title: "Gut Health & Peptide Therapy",
        description: "Heal your gut and accelerate repair with advanced peptides.",
        icon: <Icons.ShieldCheck />,
        items: ["BPC-157", "Gut Repair Protocols", "Immune Support"]
    },
    {
        title: "Longevity & Cellular Health",
        description: "Advanced therapies to slow biological aging at the source.",
        icon: <Icons.Dna />,
        items: ["Rapamycin", "NAD+ Therapy", "Senolytics"]
    }
];

const FAQS = [
    { question: "Do I start treatment as soon as I join?", answer: "No. Treatments are unlocked only after your test results, so everything is based on real data — not symptoms or guesswork." },
    { question: "How do you choose the right treatment for me?", answer: "Doctors review your results and match you to the program your body actually needs: gut, metabolism, skin, or cellular health." },
    { question: "What if I don’t see my exact symptom listed?", answer: "That’s okay. Many issues start before symptoms appear. Testing helps uncover the root cause early." },
    { question: "Are these treatments safe?", answer: "Yes. All treatments are doctor-guided, data-backed, and clinically designed for long-term balance." },
    { question: "Can my treatment plan change over time?", answer: "Yes. Your body changes so your plan does too. That’s why ongoing testing and guidance matter." }
];

const Hero = () => (
    <section className="bg-cream py-32 md:py-48 px-6 text-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Personalized medicine, <br /> <span className="italic text-teal-700">powered by your data.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                We use your 100+ biomarkers to build a precision protocol just for you—from prescriptions to hormones to peptides.
            </p>
            <Link to="/subscribe">
                <Button className="px-8 py-4 text-lg rounded-full shadow-xl shadow-teal-900/10">
                    Find Your Protocol
                </Button>
            </Link>
        </div>
    </section>
);

const TreatmentsGrid = () => (
    <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <SectionHeading>Targeted Therapies</SectionHeading>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">Based on your unique lab results, you may qualify for one or more of these clinical protocols.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {TREATMENT_CATEGORIES.map((cat, i) => (
                    <div key={i} className="bg-cream-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
                            {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 24 })}
                        </div>
                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{cat.title}</h3>
                        <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{cat.description}</p>

                        <ul className="space-y-3">
                            {cat.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                                    <Icons.Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const WhyThisMatters = () => (
    <section className="py-24 bg-cream-50 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-4">
                    <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 mb-2">
                        <Icons.Activity size={28} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900">Data First, Meds Second</h3>
                    <p className="text-gray-600 leading-relaxed">
                        We don’t guess. We test. Every prescription is based on your unique bloodwork, not just generic symptoms.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 mb-2">
                        <Icons.Zap size={28} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900">Lifestyle as Medicine</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Supplements are the spark; our lifestyle protocols are the fuel. We give you a sustainable plan that fits into your real life.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 mb-2">
                        <Icons.ShieldCheck size={28} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900">The Full Picture</h3>
                    <p className="text-gray-600 leading-relaxed">
                        We connect the dots between your sleep, your gut, and your hormones to fix the root cause, not just patch it.
                    </p>
                </div>
            </div>

            <div className="mt-16 text-center">
                <Link to="/subscribe">
                    <Button>Start Program</Button>
                </Link>
            </div>
        </div>
    </section>
);

const FaqSection = () => (
    <section className="py-24 bg-white px-6">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-16">Treatment FAQs</h2>
            <div className="space-y-4">
                {FAQS.map((faq, i) => (
                    <Accordion key={i} title={faq.question} content={faq.answer} />
                ))}
            </div>
        </div>
    </section>
);

const GUIDED_PATHS = [
    {
        id: 'clear-skin',
        label: 'Step 01',
        title: 'Clear Skin & Balance',
        hook: `You thought you left breakouts in your teenage years, but here you are dealing with painful, cyclical flare-ups that shatter your confidence. Adult breakouts are rarely just "dirt." They are a signal flare from your body indicating hormonal fluctuations or liver detoxification pathways that are backed up.`,
        approachTitle: "Our Clinical Approach",
        approach: `We stop fighting your skin and start supporting your system. We focus on hormonal harmony and detoxification. By clearing the internal pathways that eliminate toxins, we stop them from pushing out through your skin. Our plan calms the internal fire so the external redness fades away.`,
        outcome: 'Clear skin that reflects a balanced body.',
        cta: 'Start Protocol',
        image: "/images/treatments/clear_skin.png"
    },
    {
        id: 'metabolic-reset',
        label: 'Step 02',
        title: 'Metabolic Reset',
        hook: `You’re doing everything right—eating less, moving more—but the scale won't budge. You feel exhausted and hungry, and you blame your willpower. It is not your willpower. It is your biology. If your metabolic hormones are misfiring, your body is in 'storage mode.'`,
        approachTitle: "Our Clinical Approach",
        approach: `We stop the "starvation" cycle. We test your metabolic markers to understand why your body is holding onto weight. Our treatment combines precise nutrient therapy to curb cravings with lifestyle medication protocols that switch your body from "storing fat" to "burning energy."`,
        outcome: 'Sustainable weight loss without the struggle.',
        cta: 'Start Protocol',
        image: "/images/treatments/metabolic_reset.png"
    },
    {
        id: 'gut-health',
        label: 'Step 03',
        title: 'Gut Health & Bio',
        hook: `You eat "healthy," but still feel bloated, heavy, or uncomfortable after meals. You feel sluggish and your digestion feels unpredictable. Your gut is your second brain. When your microbiome is out of balance, it disrupts your mood, your energy, and your immunity.`,
        approachTitle: "Our Clinical Approach",
        approach: `We treat the root cause, not just the symptoms. We use advanced comprehensive stool testing to identify pathogens, parasites, and imbalances. We then repair the gut lining and rebalance your microbiome with targeted probiotics and nutritional protocols.`,
        outcome: 'Digestive peace and renewed energy.',
        cta: 'Start Protocol',
        image: "/images/treatments/gut_health.png"
    },
    {
        id: 'cellular-radiance',
        label: 'Step 04',
        title: 'Cellular Radiance',
        hook: `You look in the mirror and see tired skin, deepening lines, or a loss of that "bounce" you used to have. Topical creams only treat the top 10% of your skin. True aging happens at the cellular level. If your cells are inflamed, your skin structure collapses.`,
        approachTitle: "Our Clinical Approach",
        approach: `We provide the specific building blocks your body needs to repair tissue and hydrate from within, paired with lifestyle adjustments that protect your collagen bank. We target oxidative stress and collagen decline at the source.`,
        outcome: 'The kind of glow that makeup can\'t mimic.',
        cta: 'Start Protocol',
        image: "/images/treatments/cellular_radiance.png"
    }
];

// --- CONCEPT D: Vertical Split-Screen Timeline ---
// --- CONCEPT D: Vertical Split-Screen Timeline (Sticky Stack) ---
const GuidedPathTimeline = () => {
    return (
        <section className="bg-white relative py-24 md:py-32 overflow-hidden">

            <div className="text-center mb-24 px-6 relative z-10">
                <span className="text-sm font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-4 py-2 rounded-full">Explore Protocols</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-6 mb-4">Your Path to Wellness</h2>
                <p className="text-gray-500 max-w-lg mx-auto">A guided journey to reset your biology.</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Central Axis Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block"></div>

                <div className="space-y-0 relative z-10">
                    {GUIDED_PATHS.map((item, i) => (
                        <TimelineItem key={i} item={item} index={i} total={GUIDED_PATHS.length} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TimelineItem: React.FC<{ item: any, index: number, total: number }> = ({ item, index, total }) => {
    const isEven = index % 2 !== 0;
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    // Create a smooth scale and fade effect as the user scrolls past this item
    // The previous item should fade out and scale down slightly as the next one comes up
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const blur = useTransform(scrollYProgress, [0, 1], ["0px", "5px"]);

    return (
        <div ref={containerRef} className="sticky top-0 min-h-screen flex items-center justify-center py-12 md:py-24">
            <motion.div
                style={{
                    // Only apply scale/fade if it's NOT the last item (last item stays fully visible)
                    scale: index === total - 1 ? 1 : scale,
                    opacity: index === total - 1 ? 1 : opacity,
                    filter: index === total - 1 ? "blur(0px)" : `blur(${blur})`
                }}
                className={`w-full relative flex flex-col md:flex-row items-center gap-12 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''} bg-white`}
            >

                {/* Image Side */}
                <div className="w-full md:w-1/2 px-0 md:px-12 lg:px-16">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>

                        {/* Mobile Label Overlay - Optional, keeping for context on small screens */}
                        <div className="absolute top-4 left-4 md:hidden">
                            <span className="bg-white/90 backdrop-blur text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {item.label}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 px-0 md:px-12 lg:px-16 text-left">
                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                        {item.title}
                    </h3>

                    <p className="text-lg text-gray-600 leading-relaxed mb-8 border-l-4 border-teal-100 pl-4 italic">
                        {item.hook}
                    </p>

                    <div className="mb-8">
                        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
                            {item.approachTitle}
                        </span>
                        <p className="text-gray-600 text-base leading-relaxed">
                            {item.approach}
                        </p>
                    </div>

                    <div className="bg-teal-50/50 rounded-xl p-5 border border-teal-100 mb-8 flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                            <Icons.Check className="w-3 h-3 text-teal-700" />
                        </div>
                        <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Expected Outcome</span>
                            <p className="text-teal-900 font-medium">
                                {item.outcome}
                            </p>
                        </div>
                    </div>

                    <Link to="/subscribe">
                        <Button variant="ghost" className="bg-white !text-gray-900 hover:!bg-gray-50 border border-gray-200 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-medium">
                            {item.cta}
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};
const Treatment = () => {
    return (
        <main>
            <Hero />
            <GuidedPathTimeline />
            <TreatmentsGrid />
            <WhyThisMatters />
            <FaqSection />
        </main>
    );
};

export default Treatment;
