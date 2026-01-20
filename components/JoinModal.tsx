import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from './Icons';
import { Button } from './UI';
import { ScaleIn, FadeIn } from './Animations';
import { X, ArrowRight, ArrowLeft, Check, CreditCard, Calendar, User, Phone, Sparkles, Quote } from 'lucide-react';

interface JoinModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type Step = 1 | 2 | 3 | 4;

const ADDONS = [
    {
        id: 'cardio',
        title: 'Cardiovascular Panel',
        desc: 'A focused deep-dive beyond routine labs to reveal early heart risk',
        price: 159,
        img: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=200&auto=format&fit=crop'
    },
    {
        id: 'metabolic',
        title: 'Metabolic Health Panel',
        desc: 'A deeper look at insulin, blood sugar, and metabolic balance',
        price: 129,
        img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=200&auto=format&fit=crop'
    },
    {
        id: 'fertility',
        title: 'Female Fertility & Hormonal Panel',
        desc: 'A targeted hormone deep-dive based on your life stage and goals',
        price: 159,
        img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=200&auto=format&fit=crop'
    }
];

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState<Step>(1);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        dob: '',
        addons: [] as string[]
    });

    const handleAddonToggle = (id: string) => {
        setFormData(prev => ({
            ...prev,
            addons: prev.addons.includes(id)
                ? prev.addons.filter(a => a !== id)
                : [...prev.addons, id]
        }));
    };

    const nextStep = () => setStep(prev => Math.min(prev + 1, 4) as Step);
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1) as Step);

    const basePrice = 199;
    const addonsPrice = formData.addons.reduce((acc, id) => {
        const addon = ADDONS.find(a => a.id === id);
        return acc + (addon?.price || 0);
    }, 0);
    const totalPrice = basePrice + addonsPrice;

    if (!isOpen) return null;

    const steps = [
        { id: 1, label: 'Your Info' },
        { id: 2, label: 'Review' },
        { id: 3, label: 'Add-ons' },
        { id: 4, label: 'Payment' }
    ];

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-teal-950/40 backdrop-blur-sm"
            />

            <div className="relative z-10 w-full max-w-5xl my-auto">
                <ScaleIn delay={0.1} className="w-full">
                    <div className="w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px] border border-gray-100/50">

                        {/* LEFT PANEL */}
                        <div className="w-full md:w-5/12 bg-teal-900 relative p-8 md:p-12 flex flex-col justify-between text-white overflow-hidden min-h-[300px] md:min-h-auto">
                            <div className="absolute inset-0 opacity-40 mix-blend-overlay"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-900/40 to-teal-900/10" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 text-teal-200 font-semibold tracking-wide uppercase text-sm">
                                    <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center">
                                        <Sparkles size={14} className="text-white" />
                                    </div>
                                    <span>US Health Clinic</span>
                                </div>
                            </div>

                            <div className="relative z-10 mt-auto pt-12">
                                <Quote size={40} className="text-teal-400 mb-6 opacity-80" />
                                <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-8 text-white">
                                    "Your health is an investment, not an expense. The best time to start was yesterday. The second best time is now."
                                </h2>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-teal-200/20 backdrop-blur-md flex items-center justify-center border border-white/10 shrink-0 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=100&auto=format&fit=crop" alt="Doctor" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-white text-lg">Dr. Sarah Chen</p>
                                        <p className="text-teal-300 text-sm uppercase tracking-wider font-medium">Chief Medical Officer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT PANEL */}
                        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col bg-white relative">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 bg-transparent hover:bg-gray-50 rounded-full transition-all z-20"
                            >
                                <X size={24} />
                            </button>

                            {/* Step Indicator */}
                            <div className="mb-12">
                                <div className="flex justify-between items-center relative px-2">
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-gray-100 -z-10" />
                                    <div
                                        className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-teal-600 transition-all duration-500 -z-10"
                                        style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                                    />
                                    {steps.map((s) => (
                                        <div key={s.id} className="flex flex-col items-center gap-2">
                                            <div className={`w-4 h-4 rounded-full transition-all duration-300 ${step >= s.id ? 'bg-teal-600 scale-125' : 'bg-gray-200'
                                                }`} />
                                            <span className={`text-[10px] uppercase tracking-widest font-bold transition-colors duration-300 ${step >= s.id ? 'text-teal-600' : 'text-gray-300'
                                                }`}>
                                                {s.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-1"
                                    >
                                        {step === 1 && (
                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="text-3xl font-serif text-gray-900 mb-2">Basic Information</h3>
                                                    <p className="text-gray-500">Let's start with the basics to personalize your experience.</p>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="relative">
                                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                        <input
                                                            type="text"
                                                            placeholder="Full Name"
                                                            value={formData.name}
                                                            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all"
                                                        />
                                                    </div>
                                                    <div className="relative">
                                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                        <input
                                                            type="tel"
                                                            placeholder="Phone Number"
                                                            value={formData.phone}
                                                            onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all"
                                                        />
                                                    </div>
                                                    <div className="relative">
                                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                        <input
                                                            type="date"
                                                            placeholder="Date of Birth"
                                                            value={formData.dob}
                                                            onChange={e => setFormData(prev => ({ ...prev, dob: e.target.value }))}
                                                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {step === 2 && (
                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="text-3xl font-serif text-gray-900 mb-2">Review Plan</h3>
                                                    <p className="text-gray-500">Your chosen membership details.</p>
                                                </div>
                                                <div className="p-8 rounded-[2rem] bg-teal-50/50 border border-teal-100 relative overflow-hidden group">
                                                    <div className="absolute top-0 right-0 p-4">
                                                        <Check className="text-teal-600" size={24} />
                                                    </div>
                                                    <div className="space-y-4">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <h4 className="text-2xl font-serif text-teal-950">USHC Membership</h4>
                                                                <p className="text-teal-600 font-medium">Yearly Plan</p>
                                                            </div>
                                                            <div className="text-right">
                                                                <span className="text-3xl font-serif text-teal-950">${basePrice}</span>
                                                            </div>
                                                        </div>
                                                        <ul className="space-y-2 pt-4 border-t border-teal-100">
                                                            <li className="flex items-center gap-2 text-sm text-teal-800/70">
                                                                <Check size={14} /> 100+ Biomarkers Tested
                                                            </li>
                                                            <li className="flex items-center gap-2 text-sm text-teal-800/70">
                                                                <Check size={14} /> Personalized Health Plan
                                                            </li>
                                                            <li className="flex items-center gap-2 text-sm text-teal-800/70">
                                                                <Check size={14} /> 24/7 Concierge Chat
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {step === 3 && (
                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="text-3xl font-serif text-gray-900 mb-2">Add advanced lab tests (Optional)</h3>
                                                    <p className="text-gray-500">Select additional panels for a deeper health analysis.</p>
                                                </div>
                                                <div className="space-y-3">
                                                    {ADDONS.map(addon => (
                                                        <button
                                                            key={addon.id}
                                                            onClick={() => handleAddonToggle(addon.id)}
                                                            className={`w-full flex items-center gap-4 p-4 rounded-3xl border transition-all text-left group ${formData.addons.includes(addon.id)
                                                                ? 'border-teal-600 bg-teal-50/30'
                                                                : 'border-gray-100 bg-white hover:border-teal-200 shadow-sm'
                                                                }`}
                                                        >
                                                            <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                                                                <img src={addon.img} alt={addon.title} className="w-full h-full object-cover" />
                                                            </div>
                                                            <div className="flex-1 pr-4">
                                                                <h4 className="font-serif text-lg text-gray-900 leading-tight mb-1">{addon.title}</h4>
                                                                <p className="text-sm text-gray-400 group-hover:text-gray-500 transition-colors line-clamp-2 leading-relaxed">{addon.desc}</p>
                                                            </div>
                                                            <div className="flex flex-col items-center gap-1 min-w-[60px]">
                                                                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${formData.addons.includes(addon.id)
                                                                    ? 'bg-teal-600 border-teal-600'
                                                                    : 'border-gray-100 group-hover:border-teal-200'
                                                                    }`}>
                                                                    {formData.addons.includes(addon.id) && <Check size={16} className="text-white" />}
                                                                </div>
                                                                <span className="text-sm font-bold text-gray-900">${addon.price}</span>
                                                            </div>
                                                        </button>
                                                    ))}
                                                    <button className="flex items-center gap-1.5 text-teal-600 font-bold text-sm mt-4 hover:gap-2.5 transition-all">
                                                        <Icons.X className="w-3.5 h-3.5 rotate-45" /> View All
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {step === 4 && (
                                            <div className="space-y-8">
                                                <div>
                                                    <h3 className="text-3xl font-serif text-gray-900 mb-2">Complete Payment</h3>
                                                    <p className="text-gray-500">Secure checkout via Stripe.</p>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex justify-between items-center">
                                                        <div>
                                                            <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Total Due Now</p>
                                                            <h4 className="text-3xl font-serif text-gray-900">${totalPrice}</h4>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-xs text-gray-400">Includes {formData.addons.length} Add-ons</p>
                                                            <button onClick={() => setStep(3)} className="text-teal-600 text-xs font-bold hover:underline">Edit Selection</button>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-4 pt-4">
                                                        <div className="relative">
                                                            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                            <input
                                                                type="text"
                                                                placeholder="Card Number"
                                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-teal-500 outline-none transition-all"
                                                            />
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <input
                                                                type="text"
                                                                placeholder="MM / YY"
                                                                className="w-full px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-teal-500 outline-none transition-all"
                                                            />
                                                            <input
                                                                type="text"
                                                                placeholder="CVC"
                                                                className="w-full px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-teal-500 outline-none transition-all"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Footer Buttons */}
                                <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-50">
                                    {step > 1 ? (
                                        <button
                                            onClick={prevStep}
                                            className="flex items-center gap-2 text-gray-400 hover:text-gray-900 font-medium transition-colors"
                                        >
                                            <ArrowLeft size={20} /> Back
                                        </button>
                                    ) : (
                                        <div />
                                    )}

                                    <button
                                        onClick={step === 4 ? onClose : nextStep}
                                        className="flex items-center gap-2 bg-teal-900 text-white rounded-2xl px-10 py-5 font-bold hover:bg-teal-950 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-teal-900/10 group"
                                    >
                                        {step === 4 ? 'Complete Registration' : step === 3 ? `Start your health journey — $${totalPrice}` : 'Continue'}
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScaleIn>
            </div>
        </div>
    );
};
