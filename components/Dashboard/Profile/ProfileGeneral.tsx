import React from 'react';
import { Button } from '../../UI';
import { Icons } from '../../Icons';

export const ProfileGeneral = () => {
    return (
        <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Personal Information</h3>

            <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 text-2xl font-serif font-bold border-4 border-white shadow-sm relative">
                    SC
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-teal-900 text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm hover:scale-110 transition-transform">
                        <Icons.Camera className="w-4 h-4" />
                    </button>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-gray-900">Sarah Chen</h4>
                    <p className="text-gray-500 text-sm">Member since 2024</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input type="text" defaultValue="Sarah Chen" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input type="email" defaultValue="sarah.chen@example.com" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                    <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Date of Birth</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm" />
                </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 flex justify-end">
                <Button>Save Changes</Button>
            </div>
        </section>
    );
};
