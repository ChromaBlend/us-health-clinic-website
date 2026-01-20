import React from 'react';
import { Button } from '../../UI';
import { Icons } from '../../Icons';

interface ProfileMembershipProps {
    onManageSubscription: () => void;
    onCancelMembership: () => void;
}

export const ProfileMembership: React.FC<ProfileMembershipProps> = ({ onManageSubscription, onCancelMembership }) => {
    return (
        <section className="space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden relative">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
                    <div>
                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Current Plan</h3>
                        <p className="text-gray-500 text-sm mb-4">You are currently on the <span className="font-bold text-teal-700">Wellness Plus</span> plan.</p>
                        <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg inline-flex">
                            <Icons.Calendar className="w-4 h-4 text-teal-600" />
                            Renews on October 24, 2026
                        </div>
                    </div>

                    {/* Visual Card Representation */}
                    <div className="w-full md:w-64 aspect-[1.58/1] rounded-2xl bg-teal-900 text-white p-6 relative overflow-hidden shadow-lg">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <span className="font-serif italic text-lg opacity-80">Membership</span>
                            <div>
                                <div className="text-xl font-bold tracking-widest mb-1">•••• •••• 4291</div>
                                <div className="text-xs opacity-70">SARAH CHEN</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex gap-4">
                    <Button variant="outline" className="!border-gray-200 !text-gray-600 hover:!bg-gray-50" onClick={onManageSubscription}>Manage Subscription</Button>
                    <Button variant="ghost" className="!text-red-500 hover:!bg-red-50" onClick={onCancelMembership}>Cancel Membership</Button>
                </div>
            </div>

            <div className="bg-teal-50 p-8 rounded-[2rem] border border-teal-100">
                <h3 className="text-lg font-bold text-teal-900 mb-4">Member Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Annual Comprehensive Panel', 'Unlimited Messaging', 'Personalized Health Plan', '10% off Supplements'].map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-teal-100/50">
                            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                                <Icons.Check className="w-3 h-3 text-teal-700" />
                            </div>
                            <span className="text-sm font-medium text-teal-900">{benefit}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
