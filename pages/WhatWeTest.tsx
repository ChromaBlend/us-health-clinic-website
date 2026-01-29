import React from 'react';
import { Icons } from '../components/Icons';
import { SectionHeading, Button, Accordion } from '../components/UI';
import { panels } from '../data/panels';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-cream">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-[1.1] mb-8 tracking-tight">
                        What Is <span className="italic text-teal-700 relative inline-block">
                            Biomarker
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                        </span> Testing?
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light max-w-2xl">
                        It’s not about guesswork available to everyone. It’s about precise, objective data about
                        <span className="font-medium text-gray-900"> your biological processes</span>.
                    </p>
                    <p className="text-lg text-gray-500 mb-10 max-w-3xl leading-relaxed">
                        At US Health Clinic, biomarker testing is the foundation of everything we do. By measuring specific molecules in blood samples, we move beyond "one-size-fits-all" advice to a personalized, proactive approach that identifies disease risk before symptoms appear.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <Button>Start Your Analysis</Button>
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        </section>
    );
};

const WhyItMatters = () => {
    const reasons = [
        {
            title: "Early Detection",
            desc: "Catch silent conditions like cardiovascular issues, diabetes, and some cancers years before they become unmanageable.",
            icon: <Icons.Activity />
        },
        {
            title: "Optimize Your Baseline",
            desc: "Don't just be 'not sick'. Understand your individual baseline to optimize energy, metabolism, and longevity.",
            icon: <Icons.Zap />
        },
        {
            title: "Monitor Objectively",
            desc: "Stop guessing if your diet or supplements are working. See the data change in response to your lifestyle inputs.",
            icon: <Icons.Check />
        },
        {
            title: "Personalized Decisions",
            desc: "Move away from relying on average population data. Make health decisions based on your unique biological reality.",
            icon: <Icons.User />
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="md:w-1/3 relative md:sticky md:top-32">
                        <span className="text-teal-700 font-bold tracking-widest text-sm uppercase mb-4 block">The Value</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                            Why It <br /> <span className="italic text-gray-400">Matters</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            Waiting for symptoms is a reactive strategy. Biomarker testing empowers you to intervene when it matters most: early.
                        </p>
                        <Button variant="secondary">Join Membership</Button>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {reasons.map((item, i) => (
                            <div key={i} className="group p-8 rounded-[2rem] bg-gray-50 hover:bg-teal-50/50 transition-colors duration-500 border border-transparent hover:border-teal-100">
                                <div className="w-14 h-14 rounded-2xl bg-white text-teal-700 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                                </div>
                                <h3 className="text-2xl font-serif text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const BiomarkerList = () => {
    const [activeCategory, setActiveCategory] = React.useState<string | null>('heart');

    const categories = panels;

    const scrollToCategory = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Offset for sticky header if needed
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            // Don't set active category here, let the scroll spy handle it
            // or keep it for immediate feedback, but the observer will override effectively.
            // keeping it for immediate responsiveness is fine.
            setActiveCategory(id);
        }
    };

    React.useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveCategory(entry.target.id);
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Active when element is near top of viewport
            threshold: 0
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        categories.forEach((cat) => {
            const element = document.getElementById(cat.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [categories]);

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Biomarkers We Test At US Health Clinic</h2>

                    <div className="flex items-start gap-4 mb-4">
                        <span className="text-2xl font-bold text-gray-900">100+ labs per year</span>
                    </div>
                    <p className="text-gray-500 max-w-xl leading-relaxed">
                        The following 100+ biomarkers are included with your annual US Health Clinic membership.
                        Additional advanced & speciality biomarkers are also highlighted.<span className="text-red-400">*</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Sticky Sidebar */}
                    <div className="hidden md:block md:col-span-3 lg:col-span-3">
                        <div className="sticky top-32 space-y-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => scrollToCategory(cat.id)}
                                    className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 text-sm font-medium flex items-center gap-3 ${activeCategory === cat.id
                                        ? 'text-teal-700'
                                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className={`h-0.5 bg-teal-700 block transition-all duration-300 ${activeCategory === cat.id ? 'w-4 opacity-100 mr-[-8px]' : 'w-0 opacity-0 -mr-3'}`}></span>
                                    {cat.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="col-span-1 md:col-span-9 lg:col-span-8 space-y-20">
                        {categories.map((cat) => (
                            <div key={cat.id} id={cat.id} className="scroll-mt-32">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={cat.icon}
                                            alt={`${cat.title} icon`}
                                            className="w-10 h-10 object-contain shrink-0"
                                        />
                                        <h3 className="text-xl font-medium text-gray-900">{cat.title} Biomarkers</h3>
                                    </div>
                                    <Link to={`/panel/${cat.id}`} className="text-teal-700 hover:text-teal-900 text-sm font-medium flex items-center gap-1 group/link">
                                        View Detail Page
                                        <Icons.ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                <div className="border-t border-gray-100">
                                    {cat.biomarkers.map((item, j) => (
                                        <div key={j} className="group border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                                            <Accordion
                                                title={item.name}
                                                content={item.detail}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ClinicalValue = () => {
    const panels = [
        { title: "Metabolic & Diabetes Panel", price: "$450", status: "INCLUDED" },
        { title: "Comprehensive Hormone Panel", price: "$550", status: "INCLUDED" },
        { title: "Cardiovascular Lipid Panel", price: "$300", status: "INCLUDED" },
        { title: "Nutrient & Vitamin Check", price: "$250", status: "INCLUDED" },
        { title: "Liver & Inflammation Panel", price: "$400", status: "INCLUDED" },
        { title: "Vision Board Analysis", price: "$500", status: "COMING SOON", isComingSoon: true }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-teal-900 rounded-[3rem] p-8 md:p-16 text-center overflow-hidden relative">
                    {/* Background patterns */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-700/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                            $2,500+ of Clinical <br className="hidden md:block" />
                            <span className="italic text-teal-300">Testing. Included.</span>
                        </h2>
                        <p className="text-teal-100/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Your Annual Membership includes the full 100+ Biomarker Audit. <br />
                            No hidden lab fees. No insurance headaches. Just data.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {panels.map((panel, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between text-left group hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                                        <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                                            <Icons.Check className="text-teal-600" size={18} />
                                        </div>
                                        <span className="text-gray-900 font-medium leading-tight">{panel.title}</span>
                                    </div>
                                    <div className="text-right flex flex-col items-center md:items-end">
                                        <span className="text-gray-300 line-through text-sm mb-1">{panel.price}</span>
                                        <span className={`text-[10px] font-bold tracking-widest uppercase ${panel.isComingSoon ? 'text-orange-500' : 'text-gray-900'}`}>
                                            {panel.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQ = () => {
    const faqs = [
        {
            q: "Does USHC accept health insurance?",
            a: "Not at this time, but we're working on it. USHC may be eligible for reimbursement through your HSA/FSA. See FAQ below for details. We see USHC like a gym membership for those committed to prevention and performance. USHC is a bridge between wellness and healthcare. Health insurance traditionally focuses on reactive care whereas, at USHC, we believe it's never too early to start looking out for your long-term health."
        },
        {
            q: "Why can't I order these tests at a regular doctor?",
            a: "Standard clinical care is often constrained by insurance dictates and diagnostic codes. Most doctors can only order tests if you already have symptoms. USHC operates on a self-pay model that allows us to test over 100 biomarkers for proactive optimization, regardless of whether you have traditional symptoms."
        },
        {
            q: "How is this different than my annual physical?",
            a: "A standard physical typically looks at 5-10 generic markers to catch existing disease. Our Biomarker Audit looks at 100+ markers to build a high-resolution map of your performance, metabolism, and longevity potential, allowing for optimization before disease occurs."
        },
        {
            q: "Does USHC replace my primary care provider?",
            a: "No. USHC is a specialized performance clinic. We work alongside your primary care provider by giving you deeper data and insights. We recommend sharing your USHC reports with your regular doctor to provide them with a more complete picture of your health."
        },
        {
            q: "Does USHC accept HSA/FSA?",
            a: "Yes. In many cases, our services and lab tests are eligible for HSA/FSA reimbursement. We provide the necessary itemized receipts and documentation for you to submit to your provider."
        }
    ];

    return (
        <section className="py-24 bg-cream">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-900 mb-16">FAQs</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-3xl px-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <Accordion
                                title={faq.q}
                                content={faq.a}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTA = () => (
    <section className="py-32 bg-teal-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8 leading-tight">
                Knowledge is power. <br />
                <span className="italic text-teal-300">Action is health.</span>
            </h2>
            <p className="text-teal-100/80 text-xl mb-12 max-w-2xl mx-auto font-light">
                Secure your annual membership today and get the most comprehensive baseline of your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" className="bg-white text-teal-900 hover:bg-teal-50 border-none">Get Started</Button>
                <Button variant="outline" className="border-teal-500 text-teal-100 hover:bg-teal-800 hover:text-white hover:border-teal-400">View Sample Report</Button>
            </div>
        </div>
    </section>
);

const WhatWeTest = () => {
    return (
        <main>
            <Hero />
            <WhyItMatters />
            <ClinicalValue />
            <BiomarkerList />
            <FAQ />
            <CTA />
        </main>
    );
};

export default WhatWeTest;
