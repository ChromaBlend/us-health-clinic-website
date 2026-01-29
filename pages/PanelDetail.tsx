import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { panels } from '../data/panels';
import { Button, Accordion } from '../components/UI';
import { Icons } from '../components/Icons';

const PanelDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const scrollRef = useRef<HTMLDivElement>(null);
    const panel = panels.find(p => p.id === id);
    const similarPanels = panels.filter(p => p.id !== id);

    useEffect(() => {
        if (!panel) {
            navigate('/what-we-test');
        }
        window.scrollTo(0, 0);
    }, [id, panel, navigate]);

    if (!panel) return null;

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <main className="bg-white">
            {/* Breadcrumbs */}
            <div className="pt-24 pb-8 max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="cursor-pointer hover:text-teal-700" onClick={() => navigate('/what-we-test')}>All Biomarkers</span>
                    <Icons.ChevronRight size={14} />
                    <span className="text-gray-900 font-medium">{panel.title}</span>
                </div>
            </div>

            {/* Product Hero Section */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Left Column: Image */}
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                                <img
                                    src={panel.heroImage}
                                    alt={panel.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent opacity-60"></div>
                            </div>

                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
                                        {React.cloneElement(panel.icon as React.ReactElement<any>, { size: 20 })}
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Analysis For</div>
                                        <div className="text-sm font-semibold text-gray-900">Adults 25+</div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {[...panel.popularTests].slice(0, 2).map((test, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <Icons.Check size={14} className="text-teal-500" />
                                            {test}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Details */}
                        <div className="w-full lg:w-1/2 pt-4">
                            <div className="text-teal-700 font-bold tracking-widest text-sm uppercase mb-4">Speciality Panels</div>
                            <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-[1.1] mb-6 tracking-tight">
                                {panel.title}
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                                {panel.description}
                            </p>

                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-5xl font-serif font-medium text-gray-900">{panel.price}</span>
                                <span className="text-gray-500 font-light">/ session</span>
                            </div>

                            <div className="border-t border-b border-gray-100 py-6 mb-8 space-y-4">
                                {panel.popularTests.map((test, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="font-medium text-gray-900">{test}</span>
                                        <span className="text-sm text-gray-500">Key biomarker included</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <Button className="w-full sm:w-auto h-14 text-lg px-8">Schedule Your Test</Button>
                            </div>
                            <p className="text-xs text-gray-500 flex items-center gap-4">
                                <span className="flex items-center gap-1"><Icons.Check size={12} /> FSA/HSA Eligible</span>
                                <span className="flex items-center gap-1"><Icons.Check size={12} /> Results in 3-5 days</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who is this for? - Interactive Grid */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <span className="text-teal-400 font-bold tracking-widest text-sm uppercase mb-4 block">Suitability</span>
                            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                                Who Is This <br /> <span className="italic text-teal-200">For?</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                This panel is designed for individuals looking to gain deeper insights into their biological performance, specifically those experiencing:
                            </p>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 gap-4">
                            {panel.benefits.map((benefit, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex gap-6 items-start">
                                    <span className="text-4xl font-serif text-teal-500 opacity-50">{i + 1}</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                        <p className="text-gray-400 leading-relaxed font-light">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Biomarker List */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                            What's <span className="italic text-teal-700">Tested?</span>
                        </h2>
                        <p className="text-gray-500">
                            A breakdown of every single biomarker included in the {panel.title}.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {panel.biomarkers.map((item, i) => (
                            <div key={i} className="bg-white rounded-xl overflow-hidden border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                <Accordion
                                    title={item.name}
                                    content={item.detail}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button variant="outline" className="border-gray-200 hover:border-gray-900">Download Sample Report</Button>
                    </div>
                </div>
            </section>

            {/* Authenticity Section */}
            <section className="py-24 bg-cream/50 border-y border-gray-100/50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex p-3 bg-white rounded-2xl shadow-sm text-teal-700 mb-8">
                        <Icons.ShieldCheck size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900 max-w-2xl mx-auto leading-tight mb-6">
                        We prioritize <span className="italic text-teal-700">clinical accuracy</span> over social proof.
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto font-light leading-relaxed">
                        As a new standard in healthcare, we let our biomarkers and peer-reviewed protocols speak for themselves. No fake reviews, just radical transparency in every test.
                    </p>
                </div>
            </section>

            {/* Common Questions */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-serif text-gray-900 mb-12 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        {panel.faqs && panel.faqs.map((faq, i) => (
                            <div key={i} className="border-b border-gray-100 pb-4">
                                <h3 className="font-medium text-lg text-gray-900 mb-2">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Similar Panels Carousel */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-serif text-gray-900">Similar Panels</h2>
                        <div className="flex gap-2">
                            <button onClick={scrollLeft} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-colors">
                                <Icons.ArrowRight className="rotate-180" size={18} />
                            </button>
                            <button onClick={scrollRight} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-colors">
                                <Icons.ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide -mx-6 px-6"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {similarPanels.map((p) => (
                            <div
                                key={p.id}
                                onClick={() => navigate(`/panel/${p.id}`)}
                                className="min-w-[300px] md:min-w-[350px] bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-teal-100 snap-center group"
                            >
                                <div className="aspect-video rounded-2xl bg-gray-100 mb-6 overflow-hidden relative">
                                    <img src={p.heroImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                        {React.cloneElement(p.icon as React.ReactElement<any>, { size: 14 })}
                                    </div>
                                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Panel</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">{p.title}</h3>
                                <p className="text-gray-500 text-sm line-clamp-2">{p.description}</p>
                                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                                    <span className="font-serif font-medium text-gray-900">{p.price}</span>
                                    <span className="text-sm font-medium text-teal-700 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                        View <Icons.ArrowRight size={12} />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
};

export default PanelDetail;
