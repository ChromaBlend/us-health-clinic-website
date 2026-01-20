import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icons } from './Icons';
import { Button, SectionHeading, SectionSub } from './UI';
import { FadeIn } from './Animations';
import { JoinModal } from './JoinModal';

const TiltCard = () => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
    const cardRef = React.useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max -10 to 10 deg
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotate({ x: rotateX, y: rotateY });
        setGlare({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100,
            opacity: 1
        });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
        setGlare(prev => ({ ...prev, opacity: 0 }));
    };

    return (
        <div
            ref={cardRef}
            className="relative w-full aspect-[1.58/1] rounded-[2rem] transition-transform duration-200 ease-out preserve-3d group cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`,
            }}
        >
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl bg-teal-950">
                {/* Dynamic Abstract Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-900 to-teal-950" />

                    {/* Geometric Pattern */}
                    <div className="absolute inset-0 opacity-[0.1]"
                        style={{
                            backgroundImage: "radial-gradient(#5eead4 1px, transparent 1px)",
                            backgroundSize: "24px 24px",
                            transform: `translate(${rotate.y * 0.5}px, ${rotate.x * 0.5}px)` // Parallax
                        }} />

                    {/* Dynamic Orbs with Parallax */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[80px] mix-blend-screen transition-transform duration-200 ease-out"
                        style={{ transform: `translate(${50 + rotate.y * 1.5}px, ${-50 + rotate.x * 1.5}px)` }} />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full blur-[60px] mix-blend-screen transition-transform duration-200 ease-out"
                        style={{ transform: `translate(${-50 - rotate.y * 1.5}px, ${50 - rotate.x * 1.5}px)` }} />

                    {/* SVG Curve */}
                    <svg className="absolute inset-0 w-full h-full opacity-40 mix-blend-overlay" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 Q 25 60 50 80 T 100 0" stroke="url(#gradient-line-1)" strokeWidth="0.5" fill="none" />
                        <path d="M0 100 Q 40 40 100 20" stroke="url(#gradient-line-2)" strokeWidth="0.3" fill="none" />
                        <defs>
                            <linearGradient id="gradient-line-1" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="transparent" /><stop offset="50%" stopColor="#ccfbf1" /><stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                            <linearGradient id="gradient-line-2" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="transparent" /><stop offset="50%" stopColor="#5eead4" /><stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Glare Effect */}
                    <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                        style={{
                            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
                            opacity: glare.opacity
                        }}
                    />
                </div>

                {/* Card Content with Parallax */}
                <div className="relative z-10 h-full p-10 flex flex-col justify-between text-white"
                    style={{ transform: `translateZ(40px)` }}>
                    <div>
                        <h3 className="text-3xl font-serif leading-tight drop-shadow-lg">US Health Clinic <br /> Membership</h3>
                    </div>
                    <div>
                        <div className="flex items-end gap-1 mb-1">
                            <span className="text-6xl font-serif tracking-tighter drop-shadow-md">$17</span>
                            <span className="text-teal-200 text-xl font-medium mb-1">/ month</span>
                        </div>
                        <p className="text-teal-100/80 text-sm font-medium drop-shadow-sm">Billed annually at $199</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Membership = () => {
    const navigate = useNavigate();
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

    const membershipItems = [
        {
            title: "All your data in one place",
            desc: "100+ labs, your biological age & health report.",
            img: "all_in_one_place.png"
        },
        {
            title: "Upload past lab data",
            desc: "Visualize past Quest or Labcorp results.",
            img: "upload_last_lab_data.png"
        },
        {
            title: "Your personalized health plan",
            desc: "Actionable insights tailored to your unique biology.",
            img: "personalized_health_plan.png"
        },
        {
            title: "Unlimited concierge messaging",
            desc: "Chat with your care team anytime, anywhere.",
            img: "unlimited_concierge_messaging.png"
        },
        {
            title: "Add-on testing anytime",
            desc: "Order additional panels whenever you need them.",
            img: "testing_anytime.png"
        },
        {
            title: "Access to US Health Clinic",
            desc: "Full access to our nationwide clinic network.",
            img: "access_ushc.png"
        }
    ];

    return (
        <section className="py-24 bg-white" id="membership">
            <div className="max-w-7xl mx-auto px-6 space-y-32">

                {/* SECTION 1: What's Included */}
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left: Sticky Text */}
                    <div className="md:sticky md:top-32">
                        <FadeIn direction="right">
                            <h2 className="text-5xl font-serif text-gray-900 mb-6 leading-tight">
                                What’s included in <br /> your membership
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-md leading-relaxed">
                                USHC is more than a blood test. Access an ecosystem of diagnostics and doctor-trusted solutions personalized to you.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Right: Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
                        {membershipItems.map((item, i) => (
                            <FadeIn key={i} direction="up" delay={i * 0.1}>
                                <div className="group cursor-pointer">
                                    <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 mb-6 aspect-square relative">
                                        <img
                                            src={`/images/membership/${item.img}`}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <h4 className="text-xl font-serif text-gray-900 mb-2 group-hover:text-teal-900 transition-colors">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                {/* SECTION 2: Wellness Plus Membership */}
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    {/* Left: Membership Card */}
                    <FadeIn direction="right">
                        <TiltCard />
                    </FadeIn>

                    {/* Right: Details & CTA */}
                    <FadeIn direction="left">
                        <h3 className="text-4xl font-serif text-gray-900 mb-2">Wellness Plus Membership</h3>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-5xl font-serif text-teal-900">$199</span>
                            <span className="text-gray-500 text-lg">/ month . billed annually</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-8 border-b border-gray-100 pb-8">
                            Three dinners secure a year of medical safety.
                        </p>

                        <div className="space-y-6 mb-10">
                            <ul className="space-y-4">
                                {[
                                    "One appointment, one draw for your annual panel.",
                                    "100+ labs tested per year",
                                    "A personalized plan that evolves with you",
                                    "Get your biological age and track your health over a lifetime",
                                    "Continuous, expert-led support for optimized treatment."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="rounded-full bg-teal-50 p-0.5 mt-0.5">
                                            <Icons.Check className="w-4 h-4 text-teal-700" />
                                        </div>
                                        <span className="text-gray-600 text-[15px]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button
                            onClick={() => setIsJoinModalOpen(true)}
                            className="!bg-teal-900 !text-white !hover:bg-teal-800 !rounded-full px-10 py-4 text-base shadow-lg shadow-teal-100"
                        >
                            Join today
                        </Button>
                    </FadeIn>
                </div>

            </div>

            <JoinModal
                isOpen={isJoinModalOpen}
                onClose={() => setIsJoinModalOpen(false)}
            />
        </section>
    );
};
