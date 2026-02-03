import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';

export const Footer = () => (
    <footer className="bg-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12">
            <div className="col-span-1">
                <div className="flex items-center gap-3 mb-6">
                    <img
                        src="/images/ushc-iconlogo-white.png"
                        alt="USHC Logo"
                        className="w-8 h-8 object-contain"
                    />
                    <span className="font-serif text-xl font-bold">US Health Clinic</span>
                </div>
            </div>
            <div>
                <h5 className="font-bold mb-6 text-teal-200">Learn</h5>
                <ul className="space-y-4 text-teal-50/80">
                    <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                    <li><Link to="/how-it-works" className="hover:text-white transition-colors">How it works</Link></li>
                    <li><Link to="/what-we-test" className="hover:text-white transition-colors">What we test</Link></li>
                    <li><Link to="/treatment" className="hover:text-white transition-colors">Treatment</Link></li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold mb-6 text-teal-200">Join</h5>
                <ul className="space-y-4 text-teal-50/80">
                    <li><Link to="#" className="hover:text-white transition-colors">Sign In</Link></li>
                    <li><Link to="/franchise" className="hover:text-white transition-colors">Franchise Opportunities</Link></li>
                    <li><Link to="/doctors" className="hover:text-white transition-colors">Join as a Doctor</Link></li>
                    <li><Link to="/food-signal-program" className="hover:text-white transition-colors">Food Signal Program</Link></li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold mb-6 text-teal-200">Legal</h5>
                <ul className="space-y-4 text-teal-50/80">
                    <li><Link to="/medical-consent" className="hover:text-white transition-colors">Medical Consent</Link></li>
                    <li><Link to="/privacy-practices" className="hover:text-white transition-colors">Privacy Practices</Link></li>
                    <li><Link to="/membership-agreement" className="hover:text-white transition-colors">Membership Agreement</Link></li>
                    <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    <li><Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold mb-6 text-teal-200">Contact</h5>
                <ul className="space-y-4 text-teal-50/80">
                    <li className="flex items-center gap-2"><Icons.Mail size={16} />contact@ushealthclinic.com</li>
                </ul>
            </div>
        </div>
    </footer>
);
