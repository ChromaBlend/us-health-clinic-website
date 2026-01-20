import React, { useState } from 'react';
import { FadeIn } from '../../components/Animations';
import { Button } from '../../components/UI';
import { Icons } from '../../components/Icons';
import { ViewResultModal } from '../../components/Dashboard/ViewResultModal';
import { UploadModal } from '../../components/Dashboard/UploadModal';

const Results = () => {
    const [selectedResult, setSelectedResult] = useState<any>(null);
    const [isUploadOpen, setIsUploadOpen] = useState(false);

    const results = [
        {
            id: 1,
            title: "Comprehensive Metabolic Panel",
            date: "October 24, 2025",
            status: "Action Needed",
            statusColor: "text-orange-600 bg-orange-50",
            summary: "Vitamin D is lower than optimal. LDL levels are slightly elevated.",
            doctor: "Dr. Sarah Chen"
        },
        {
            id: 2,
            title: "Hormone Optimization Panel",
            date: "October 24, 2025",
            status: "Normal",
            statusColor: "text-green-600 bg-green-50",
            summary: "All hormone markers are within optimal range for your age group.",
            doctor: "Dr. Sarah Chen"
        },
        {
            id: 3,
            title: "Cardiovascular Risk Profile",
            date: "April 12, 2025",
            status: "Normal",
            statusColor: "text-green-600 bg-green-50",
            summary: "Excellent cardiovascular health. Continue current protocol.",
            doctor: "Dr. James Wilson"
        }
    ];

    return (
        <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-serif text-gray-900">Lab Results</h1>
                    <p className="text-gray-500 mt-1">Access 100+ biomarkers and your biological age report.</p>
                </div>
                <Button onClick={() => setIsUploadOpen(true)}>
                    <Icons.Upload className="w-4 h-4 mr-2" />
                    Upload Past Data (Quest/Labcorp)
                </Button>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-100">
                    {results.map((result) => (
                        <div key={result.id} className="p-8 hover:bg-teal-50/10 transition-colors group">
                            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                                        <Icons.FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="text-lg font-serif font-bold text-gray-900">{result.title}</h3>
                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${result.statusColor}`}>
                                                {result.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-2">{result.date} • ordered by {result.doctor}</p>
                                        <p className="text-gray-600 text-sm max-w-2xl leading-relaxed">{result.summary}</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 pl-[4.5rem] md:pl-0">
                                    <Button variant="secondary" className="px-5 py-2 text-sm h-10 border-gray-200" onClick={() => setSelectedResult(result)}>View</Button>
                                    <Button variant="outline" className="px-5 py-2 text-sm h-10 !border-gray-200 !text-gray-600 hover:!bg-gray-50 flex items-center gap-2">
                                        <Icons.Download className="w-4 h-4" />
                                        PDF
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modals */}
            <ViewResultModal
                isOpen={!!selectedResult}
                onClose={() => setSelectedResult(null)}
                result={selectedResult}
            />

            <UploadModal
                isOpen={isUploadOpen}
                onClose={() => setIsUploadOpen(false)}
            />
        </FadeIn>
    );
};

export default Results;
