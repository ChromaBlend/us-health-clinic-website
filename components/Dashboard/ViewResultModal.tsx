import React from 'react';
import { Modal } from '../Modal';
import { Button } from '../UI';
import { Icons } from '../Icons';

interface ViewResultModalProps {
    isOpen: boolean;
    onClose: () => void;
    result: any;
}

export const ViewResultModal: React.FC<ViewResultModalProps> = ({ isOpen, onClose, result }) => {
    if (!result) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Lab Result Details">
            <div className="space-y-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="text-xl font-serif font-bold text-gray-900 mb-1">{result.title}</h4>
                        <p className="text-sm text-gray-500">{result.date} • {result.doctor}</p>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${result.statusColor}`}>
                        {result.status}
                    </span>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <Icons.Activity className="w-4 h-4 text-teal-600" />
                        Summary
                    </h5>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        {result.summary}
                    </p>
                </div>

                <div className="space-y-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Markers Analyzed</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {['Vitamin D', 'Homocysteine', 'Cortisol', 'Thyroid Panel', 'HbA1c', 'Lipid Panel'].map((marker, i) => (
                            <div key={marker} className="flex justify-between items-center p-3 rounded-xl border border-gray-100 bg-white">
                                <span className="text-sm font-medium text-gray-700">{marker}</span>
                                <span className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-orange-500' : 'bg-green-500'}`}></span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end pt-4 gap-3">
                    <Button variant="outline" className="!border-gray-200 !text-gray-600 hover:!bg-gray-50">
                        <Icons.Download className="w-4 h-4 mr-2" />
                        Download PDF
                    </Button>
                    <Button onClick={onClose}>Close</Button>
                </div>
            </div>
        </Modal>
    );
};
