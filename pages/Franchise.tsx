import React from 'react';
import { Button, SectionHeading, SectionSub, Accordion } from '../components/UI';
import { Icons } from '../components/Icons';

// --- Components ---

const Marquee = ({ text }: { text: string }) => (
    <div className="bg-teal-700 border-y border-teal-600 overflow-hidden py-4 relative z-20">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-teal-100/60 font-serif text-lg tracking-widest uppercase items-center">
            {/* Repeated text for seamless loop */}
            {[...Array(10)].map((_, i) => (
                <React.Fragment key={i}>
                    <span>{text}</span>
                    <Icons.Star size={16} />
                </React.Fragment>
            ))}
        </div>
    </div>
);

const FeatureCard = ({ icon: Icon, title, description, className = "" }: { icon: any, title: string, description: string, className?: string }) => (
    <div className={`bg-white rounded-[2rem] p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start group ${className}`}>
        <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon size={28} />
        </div>
        <h3 className="text-2xl font-medium text-gray-900 font-serif mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed text-base">{description}</p>
    </div>
);

const StatCard = ({ value, label, highlight = false }: { value: string, label: string, highlight?: boolean }) => (
    <div className={`rounded-[2rem] p-8 border ${highlight ? 'bg-teal-900 border-teal-800 text-white shadow-xl' : 'bg-white border-gray-100 text-gray-900 shadow-lg'} transition-all duration-300`}>
        <div className={`text-5xl md:text-6xl font-light mb-4 ${highlight ? 'text-white' : 'text-teal-700'}`}>{value}</div>
        <div className={`text-sm tracking-widest uppercase font-bold ${highlight ? 'text-teal-200' : 'text-gray-400'}`}>{label}</div>
    </div>
);

// --- Sections ---

const Hero = () => (
    <section className="relative min-h-[90vh] bg-cream text-gray-900 overflow-hidden flex flex-col justify-center pt-20">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-100/50 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                    <span className="text-xs font-bold tracking-wide text-teal-800 uppercase">Affiliate Program Now Open</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-serif font-medium leading-[1.05] tracking-tight">
                    Become a <br />
                    <span className="italic text-teal-700">Joult</span> Affiliate.
                </h1>

                <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-light border-l-4 border-teal-100 pl-6">
                    Earn up to <span className="text-teal-800 font-bold">$120 per sale</span>, plus <span className="text-teal-800 font-bold">$1,000+</span> in passive lifetime commissions per customer.
                    <span className="block mt-4 text-sm text-gray-400 uppercase tracking-widest font-bold">Refer customers. Start earning today.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="!bg-teal-700 hover:!bg-teal-800 !text-white !px-10 !py-5 !text-lg !rounded-full font-bold shadow-xl shadow-teal-900/10">
                        Become an affiliate
                    </Button>
                </div>
            </div>

            {/* Visual Abstract UI */}
            <div className="relative hidden lg:block">
                <div className="relative z-10 bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] skew-y-1 hover:skew-y-0 transition-transform duration-700">
                    <div className="space-y-8">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-8">
                            <div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-2">Your Balance</div>
                                <div className="text-5xl font-serif text-gray-900">$12,450.00</div>
                            </div>
                            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center text-teal-700">
                                <Icons.TrendingUp size={32} />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between text-base">
                                <span className="text-gray-500">Commissions (Jan)</span>
                                <span className="text-teal-700 font-bold text-xl">+$2,340.00</span>
                            </div>
                            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-teal-500 w-[75%] rounded-full"></div>
                            </div>
                            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 text-center">
                                <span className="text-teal-800 text-sm font-medium">Next Payout: </span>
                                <span className="text-teal-900 font-bold ml-1 text-lg">March 15th</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-48 h-48 border border-teal-200 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                    <div className="w-4 h-4 bg-teal-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>
        </div>
    </section>
);

const WhyPromote = () => (
    <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5 space-y-10">
                    <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">Why promote <br /><span className="italic text-teal-700">Joult?</span></h2>
                    <p className="text-xl text-gray-500 leading-relaxed">
                        Promote clinically backed, doctor-designed care. That means more recurring income, less churn, and no fluff.
                    </p>

                    <div className="space-y-6 pt-4">
                        <div className="bg-cream p-8 rounded-3xl border border-teal-100/50">
                            <h4 className="text-gray-900 font-bold uppercase tracking-widest text-sm border-b border-gray-200 pb-4 mb-6">Complete Health Transformation</h4>
                            <ul className="space-y-4">
                                {[
                                    "Access to 160+ lab tests",
                                    "Earn every time referral buys a test",
                                    "Harvard & Stanford trained physicians",
                                    "Genetic testing included",
                                    "Medicated weightloss access"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                                            <Icons.Check size={12} strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-600 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
                    <FeatureCard
                        icon={Icons.RefreshCw}
                        title="Recurring Income"
                        description="Every paid signup through your link earns recurring commission, no limits. Build a passive income stream that grows over time."
                    />
                    <FeatureCard
                        icon={Icons.ShieldCheck}
                        title="Clinically Backed"
                        description="You're promoting real medicine, not supplements. Doctor-designed care ensures high retention and customer trust."
                        className="bg-cream"
                    />
                    <div className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] p-10 relative overflow-hidden group text-white shadow-2xl">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Icons.TrendingUp size={150} />
                        </div>
                        <h3 className="text-3xl font-serif mb-4 relative z-10">How do I make money?</h3>
                        <p className="text-gray-300 max-w-lg relative z-10 text-lg leading-relaxed">
                            Share your unique affiliate link through content, communities, or conversations. Some affiliates grow faster by placing their unique QR code with local vendors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Earnings = () => (
    <section className="bg-cream py-32 px-6 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">How much can I earn?</h2>
                <div className="flex items-center justify-center gap-4 text-teal-700 font-bold tracking-widest uppercase text-sm">
                    <span className="h-px w-12 bg-teal-200"></span>
                    No Cap. No Limits.
                    <span className="h-px w-12 bg-teal-200"></span>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <StatCard value="$10K+" label="Top Affiliates / Month" highlight={true} />
                <StatCard value="$2–$3K" label="Spending 1 Hour / Day" />
                <StatCard value="Lifetime" label="Passive Commission" />
            </div>

            <div className="mt-20 text-center max-w-2xl mx-auto">
                <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 relative">
                    <Icons.Quote className="absolute top-8 left-8 text-teal-100 w-12 h-12 -z-10" />
                    <p className="text-gray-600 italic text-xl font-serif leading-relaxed">
                        "Earn $2–$3K spending just 1 hour a day, posting 100 high-impact comments or posts."
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const FAQSection = () => (
    <section className="bg-white py-32 px-6 relative z-20">
        <div className="max-w-4xl mx-auto">
            <SectionHeading>Details & Logistics</SectionHeading>
            <SectionSub className="mb-16">Everything you need to know about getting paid.</SectionSub>

            <div className="space-y-4">
                <Accordion
                    title="What are the payout minimums?"
                    content="We require a minimum balance of $25 before processing an affiliate payout. We set this to avoid any fraudulent issues with our affiliate program."
                />
                <Accordion
                    title="When do I get paid?"
                    content="We payout on NET30 terms to account for refunds and chargebacks. For example, commissions generated in January would be paid out on March 15th (NET30)."
                />
                <Accordion
                    title="How do I sign up?"
                    content="The Getrewardful affiliate hub hosts our affiliate program. Click the 'Become an affiliate' button below to create an account and join our program."
                />
            </div>
        </div>
    </section>
);

const FooterCTA = () => (
    <section className="relative py-24 md:py-32 bg-teal-900 px-6 text-center z-10 overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white mb-10 rotate-3 shadow-2xl">
                <Icons.Zap size={48} className="text-teal-900" />
            </div>

            <h2 className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tight leading-none">
                High impact. <br />
                <span className="text-teal-400">High income.</span>
            </h2>

            <p className="text-xl md:text-2xl text-teal-100/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Our affiliates see real returns by sharing something that actually works and keeps users coming back.
            </p>

            <Button className="!bg-white hover:!bg-teal-50 !text-teal-900 !px-12 !py-6 !text-xl !rounded-full font-bold shadow-2xl hover:scale-105 transform transition-all duration-300">
                Become an affiliate
            </Button>
        </div>
    </section>
);

const Franchise = () => {
    return (
        <main className="bg-white">
            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                `}
            </style>
            <Hero />
            <Marquee text="Recurring Revenue • Passive Income • High Retention • Doctor Led •" />
            <WhyPromote />
            <Earnings />
            <FAQSection />
            <FooterCTA />
        </main>
    );
};

export default Franchise;
