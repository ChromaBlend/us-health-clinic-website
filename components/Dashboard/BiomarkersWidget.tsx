import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Icons } from '../Icons';

interface CircularProgressProps {
    percentage: number;
    color: string;
    label: string;
    subLabel?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, color, label }) => {
    const radius = 56;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-100"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                        initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke={color}
                        strokeWidth="8"
                        fill="transparent"
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-serif font-bold text-gray-900">{percentage}%</span>
                </div>
            </div>
            <div className="mt-4 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{label}</span>
            </div>
        </div>
    );
};

export const BiomarkersWidget = () => {
    const stats = useQuery(api.dashboard.getBiomarkerStats);
    const { inRange, optimal, outOfRange } = stats || { inRange: 0, optimal: 0, outOfRange: 0 };

    return (
        <div className="bg-white rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
            <div className="p-8 flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium mb-6">
                    All biomarkers
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-10">
                    <span className="font-bold">160+ Biomarkers</span> included in your membership
                </h3>

                <div className="grid grid-cols-3 gap-4 md:gap-8">
                    <CircularProgress
                        percentage={inRange}
                        color="#0D9488"
                        label="In range"
                    />
                    <CircularProgress
                        percentage={optimal}
                        color="#6366F1"
                        label="Optimal"
                    />
                    <CircularProgress
                        percentage={outOfRange}
                        color="#F97316"
                        label="Out of range"
                    />
                </div>
            </div>

            <button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-5 px-8 flex justify-between items-center transition-colors group">
                <span className="font-medium">See what's covered</span>
                <Icons.ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    );
};
