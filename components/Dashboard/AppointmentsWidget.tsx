import React from 'react';
import { Icons } from '../Icons';
import { Button } from '../UI';

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const AppointmentsWidget = () => {
    const [view, setView] = React.useState<'annual' | 'mid'>('annual');
    const appointments = useQuery(api.dashboard.getAppointments, { type: view });

    return (
        <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-gray-900 font-serif text-xl font-bold">Test overview</h3>
                <div className="flex bg-gray-50 p-1 rounded-full border border-gray-100">
                    <button
                        onClick={() => setView('annual')}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${view === 'annual' ? 'bg-[#0D6B5E] text-white shadow-sm' : 'text-gray-400'}`}
                    >
                        Annual
                    </button>
                    <button
                        onClick={() => setView('mid')}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${view === 'mid' ? 'bg-[#0D6B5E] text-white shadow-sm' : 'text-gray-400'}`}
                    >
                        Mid
                    </button>
                </div>
            </div>

            <div className="flex-1 space-y-8">
                <div className="relative pl-8">
                    {/* Vertical Line */}
                    <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gray-100" />

                    {(appointments || []).map((apt, i) => (
                        <div key={apt._id} className="relative mb-8">
                            <div className={`absolute -left-8 top-1.5 w-6 h-6 rounded-full border flex items-center justify-center ${apt.status === 'Completed' ? 'bg-teal-50 border-teal-100' : 'bg-gray-200 border-gray-100'}`}>
                                {apt.status === 'Completed' && <Icons.Check className="w-3.5 h-3.5 text-[#0D6B5E]" />}
                            </div>
                            <div>
                                <h4 className={`font-serif font-bold text-lg mb-0.5 ${apt.status === 'Completed' ? 'text-gray-900' : 'text-gray-400'}`}>{apt.title}</h4>
                                <p className={`text-xs font-medium ${apt.status === 'Completed' ? 'text-[#0D6B5E]' : 'text-gray-400'}`}>{apt.date}</p>
                            </div>
                        </div>
                    ))}

                    {!appointments?.length && (
                        <p className="text-gray-400 text-sm ml-2">No appointments found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
