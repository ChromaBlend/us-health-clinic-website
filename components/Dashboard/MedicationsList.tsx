import React from 'react';
import { Icons } from '../Icons';

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const MedicationsList = () => {
    const medications = useQuery(api.dashboard.getMedications);
    return (
        <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-gray-900 font-serif text-xl font-bold">Medications</h3>
                <button className="p-2 text-gray-400 hover:text-teal-700 transition-colors">
                    <Icons.Plus className="w-5 h-5" />
                </button>
            </div>

            <div className="space-y-6">
                {(medications || []).map((med, i) => (
                    <div key={med._id} className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                            <div>
                                <p className="text-gray-900 font-medium">{med.name}</p>
                                <p className="text-gray-500 text-xs">{med.dose}</p>
                            </div>
                        </div>
                        {med.refills > 0 && (
                            <button className="text-xs font-semibold text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-full transition-colors">
                                Refill
                            </button>
                        )}
                    </div>
                ))}

                {medications?.length === 0 && (
                    <p className="text-gray-500 text-sm text-center py-4">No active prescriptions.</p>
                )}
            </div>
        </div>
    );
};
