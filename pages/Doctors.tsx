import React from 'react';
import { Icons } from '../components/Icons';
import { Button, SectionHeading, SectionSub } from '../components/UI';
import { FadeIn } from '../components/Animations';

const Hero = () => (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-cream">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-[1.1] mb-8 tracking-tight">
                        Practice <span className="italic text-teal-700 relative inline-block">
                            Medicine
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                        </span> <br /> Not Administration.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light max-w-2xl">
                        Join a network of forward-thinking physicians dedicated to root-cause resolution. We handle the operations; you handle the care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100">
                            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                            <span className="text-sm font-medium tracking-wide text-teal-800 uppercase">Hiring MDs, DOs, & NPs</span>
                        </div>
                        <Button to="#apply" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Join the Network
                        </Button>
                    </div>
                </div>

                <div className="relative z-10 w-full">
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100">
                        <h3 className="text-2xl font-serif text-gray-900 mb-2">Join the Network</h3>
                        <p className="text-gray-500 mb-6 text-sm">Submit your interest and our Medical Director will reach out.</p>

                        <JoinNetworkForm />
                    </div>
                </div>
            </div>
        </div>

        {/* Background Decor */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    </section>
);

const Features = () => (
    <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-start">
                {/* Sticky Left Header */}
                <div className="md:w-1/3 relative md:sticky md:top-32">
                    <span className="text-teal-700 font-bold tracking-widest text-sm uppercase mb-4 block">The Benefits</span>
                    <SectionHeading align="left" className="mb-6">
                        Why doctors <br /> <span className="italic text-teal-700">choose us</span>
                    </SectionHeading>
                    <SectionSub align="left" className="mb-8">
                        Build a practice on your terms with the support of a world-class infrastructure. We handle the operations; you handle the care.
                    </SectionSub>
                </div>

                {/* Right Grid */}
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Focus on Patients",
                            desc: "Zero insurance paperwork. No billing headaches. We manage the admin so you can dedicate 100% of your time to patient outcomes.",
                            icon: Icons.Heart
                        },
                        {
                            title: "Advanced Diagnostics",
                            desc: "Access to our proprietary 100+ biomarker panel, giving you the data you need to make precision decisions.",
                            icon: Icons.Activity
                        },
                        {
                            title: "Flexible Schedule",
                            desc: "Telehealth-first model allows you to work from anywhere. Set your own hours and maintain a true work-life balance.",
                            icon: Icons.Calendar
                        },
                        {
                            title: "Continuing Education",
                            desc: "Regular grand rounds with industry leaders in longevity and functional medicine. Stay at the cutting edge.",
                            icon: Icons.BookOpen
                        },
                        {
                            title: "Competitive Compensation",
                            desc: "Earn above-market rates with a transparent compensation structure. Performance bonuses for patient retention.",
                            icon: Icons.TrendingUp
                        },
                        {
                            title: "Custom Tech Stack",
                            desc: "Our provider portal is built by doctors, for doctors. Fast, intuitive, and designed to minimize screen time.",
                            icon: Icons.Smartphone
                        }
                    ].map((feature, i) => (
                        <div key={i} className="group p-8 rounded-[2rem] bg-gray-50 hover:bg-teal-50/50 transition-colors duration-500 border border-transparent hover:border-teal-100">
                            <div className="w-14 h-14 rounded-2xl bg-white text-teal-700 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-serif text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const JoinNetworkForm = ({ className = "" }: { className?: string }) => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        specialty: 'Internal Medicine',
        otherSpecialty: '',
        url: '',
        message: ''
    });

    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [touched, setTouched] = React.useState<Record<string, boolean>>({});

    const validateField = (name: string, value: string) => {
        switch (name) {
            case 'firstName':
            case 'lastName':
                if (!value) return 'Required';
                if (!/^[a-zA-Z\s-]*$/.test(value)) return 'Only letters allowed';
                return '';
            case 'email':
                if (!value) return 'Required';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address';
                return '';
            case 'url':
                if (!value) return 'Required';
                try {
                    new URL(value);
                    return '';
                } catch {
                    return 'Invalid URL';
                }
            case 'message':
                if (!value) return 'Required';
                if (value.length < 10) return 'Too short';
                return '';
            case 'otherSpecialty':
                if (formData.specialty === 'Other' && !value) return 'Please specify';
                return '';
            default:
                return '';
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (touched[name]) {
            setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    };

    const isValid = React.useMemo(() => {
        const fieldErrors = {
            firstName: validateField('firstName', formData.firstName),
            lastName: validateField('lastName', formData.lastName),
            email: validateField('email', formData.email),
            url: validateField('url', formData.url),
            message: validateField('message', formData.message),
            otherSpecialty: validateField('otherSpecialty', formData.otherSpecialty),
        };
        return Object.values(fieldErrors).every(error => error === '');
    }, [formData]);

    const getInputClass = (name: string) => `
        w-full px-6 py-4 rounded-xl bg-gray-50 border-gray-200 
        focus:ring-2 transition-all outline-none
        ${touched[name] && errors[name] ? 'border-red-300 focus:ring-red-100' : 'focus:ring-teal-500 focus:bg-white'}
    `;

    return (
        <form className={`space-y-6 ${className}`} onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">First Name</label>
                    <input
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClass('firstName')}
                        placeholder="Jane"
                    />
                    {touched.firstName && errors.firstName && <p className="text-red-500 text-xs ml-1">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">Last Name</label>
                    <input
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClass('lastName')}
                        placeholder="Doe"
                    />
                    {touched.lastName && errors.lastName && <p className="text-red-500 text-xs ml-1">{errors.lastName}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass('email')}
                    placeholder="doctor@example.com"
                />
                {touched.email && errors.email && <p className="text-red-500 text-xs ml-1">{errors.email}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">Medical Specialty</label>
                    <select
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClass('specialty')}
                    >
                        <option>Internal Medicine</option>
                        <option>Family Medicine</option>
                        <option>Endocrinology</option>
                        <option>Functional Medicine</option>
                        <option>Other</option>
                    </select>
                </div>

                {formData.specialty === 'Other' && (
                    <FadeIn className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Specify Specialty</label>
                        <input
                            name="otherSpecialty"
                            type="text"
                            value={formData.otherSpecialty}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={getInputClass('otherSpecialty')}
                            placeholder="Please specify..."
                        />
                        {touched.otherSpecialty && errors.otherSpecialty && <p className="text-red-500 text-xs ml-1">{errors.otherSpecialty}</p>}
                    </FadeIn>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">LinkedIn or CV URL</label>
                <input
                    name="url"
                    type="url"
                    value={formData.url}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClass('url')}
                    placeholder="https://linkedin.com/in/..."
                />
                {touched.url && errors.url && <p className="text-red-500 text-xs ml-1">{errors.url}</p>}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">Why do you want to join?</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${getInputClass('message')} min-h-[120px]`}
                    placeholder="Tell us about your philosophy..."
                ></textarea>
                {touched.message && errors.message && <p className="text-red-500 text-xs ml-1">{errors.message}</p>}
            </div>

            <Button
                className={`w-full mt-4 ${!isValid ? 'opacity-50 cursor-not-allowed grayscale' : ''}`}
                disabled={!isValid}
            >
                Submit Application
            </Button>
        </form>
    );
};

const ApplicationForm = () => (
    <section className="py-32 bg-cream" id="apply">
        <div className="max-w-3xl mx-auto px-6">
            <FadeIn className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-gray-100">
                <div className="text-center mb-12">
                    <SectionHeading>Join the Network</SectionHeading>
                    <SectionSub>Submit your interest and our Medical Director will reach out.</SectionSub>
                </div>
                <JoinNetworkForm />
            </FadeIn>
        </div>
    </section>
);


const Doctors = () => {
    return (
        <main>
            <Hero />
            <Features />
            <ApplicationForm />
        </main>
    );
};

export default Doctors;
