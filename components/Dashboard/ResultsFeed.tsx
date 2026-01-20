import React from 'react';
import { Icons } from '../Icons';

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const ResultsFeed = () => {
    const results = useQuery(api.dashboard.getTestResults, {});
    return (
        <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-gray-900 font-serif text-xl font-bold">Recent Results</h3>
                <button className="text-teal-700 hover:text-teal-900 text-sm font-medium transition-colors">
                    See All
                </button>
            </div>

            <div className="space-y-4">
                {(results || []).map((result, i) => (
                    <div key={result._id} className="group flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:bg-teal-50/30 hover:border-teal-100 transition-all duration-200 cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-teal-700 group-hover:shadow-sm transition-all">
                            <Icons.FileText className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-gray-900 font-medium truncate pr-4">{result.title}</h4>
                            <p className="text-gray-500 text-xs mt-0.5">{result.date}</p>
                        </div>
                        <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${result.statusColor}`}>
                            {result.status}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
