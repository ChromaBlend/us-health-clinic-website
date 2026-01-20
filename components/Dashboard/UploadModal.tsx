import React from 'react';
import { Modal } from '../Modal';
import { Button } from '../UI';
import { Icons } from '../Icons';

interface UploadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Upload Past Data">
            <div className="space-y-6">
                <div className="text-center p-8 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 text-teal-600 group-hover:scale-110 transition-transform">
                        <Icons.Upload className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">Click to upload or drag and drop</h4>
                    <p className="text-sm text-gray-500 max-w-xs mx-auto">
                        PDF, JPG, or PNG files from Quest, Labcorp, or other providers.
                    </p>
                </div>

                <div>
                    <label className="text-sm font-bold text-gray-700 ml-1 mb-2 block">Provider (Optional)</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm appearance-none cursor-pointer">
                        <option>Quest Diagnostics</option>
                        <option>Labcorp</option>
                        <option>Hospital / Review</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="bg-teal-50 p-4 rounded-xl flex gap-3 text-sm text-teal-800">
                    <Icons.ShieldCheck className="w-5 h-5 shrink-0" />
                    <p>Your data is encrypted and securely stored. Only you and your care team can access it.</p>
                </div>

                <div className="flex justify-end pt-4">
                    <Button onClick={onClose} className="w-full md:w-auto">Upload Files</Button>
                </div>
            </div>
        </Modal>
    );
};
