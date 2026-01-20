import React from 'react';
import { Button } from '../../UI';
import { Icons } from '../../Icons';

interface ProfileBillingProps {
    onAddPaymentMethod: () => void;
}

export const ProfileBilling: React.FC<ProfileBillingProps> = ({ onAddPaymentMethod }) => {
    return (
        <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Payment Methods</h3>

            <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-gray-50/50">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
                            <span className="font-bold text-xs text-gray-600">VISA</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900">Visa ending in 4242</p>
                            <p className="text-xs text-gray-500">Expiry 12/2028</p>
                        </div>
                    </div>
                    <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded-full border border-teal-100">Default</span>
                </div>
                <Button variant="ghost" className="justify-start px-0 hover:bg-transparent hover:text-teal-600" onClick={onAddPaymentMethod}>
                    <Icons.Plus className="w-4 h-4 mr-2" />
                    Add New Payment Method
                </Button>
            </div>

            <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 pt-6 border-t border-gray-100">Billing History</h3>
            <div className="overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-gray-100 text-gray-400">
                            <th className="pb-3 font-medium">Date</th>
                            <th className="pb-3 font-medium">Description</th>
                            <th className="pb-3 font-medium text-right">Amount</th>
                            <th className="pb-3 font-medium text-right">Invoice</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {[
                            { date: 'Oct 24, 2025', desc: 'Annual Membership (Wellness Plus)', amount: '$199.00' },
                            { date: 'Sep 24, 2025', desc: 'Lab Draw Fee', amount: '$45.00' },
                            { date: 'Aug 24, 2025', desc: 'Supplement Order #1234', amount: '$85.50' },
                        ].map((item, i) => (
                            <tr key={i} className="group hover:bg-gray-50 transition-colors">
                                <td className="py-4 text-gray-600">{item.date}</td>
                                <td className="py-4 font-medium text-gray-900">{item.desc}</td>
                                <td className="py-4 text-right text-gray-900">{item.amount}</td>
                                <td className="py-4 text-right">
                                    <button className="text-teal-600 hover:text-teal-800 font-medium text-xs flex items-center justify-end gap-1 w-full">
                                        Download <Icons.Download className="w-3 h-3" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
