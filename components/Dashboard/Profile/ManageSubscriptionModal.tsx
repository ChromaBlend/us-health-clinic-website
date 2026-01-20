import React from 'react';
import { Modal } from '../../Modal';
import { Button } from '../../UI';
import { Icons } from '../../Icons';

interface ManageSubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ManageSubscriptionModal: React.FC<ManageSubscriptionModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Manage Subscription">
            <div className="space-y-6">
                <div className="bg-teal-50 p-4 rounded-xl border border-teal-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0 mt-1">
                        <Icons.Star className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold text-teal-900">Wellness Plus Plan</h4>
                        <p className="text-sm text-teal-800/80 mb-2">$199 / month • Billed Annually</p>
                        <span className="text-xs font-bold uppercase tracking-wider bg-white text-teal-700 px-2 py-1 rounded-md border border-teal-100">Current Plan</span>
                    </div>
                </div>

                <div>
                    <h5 className="font-bold text-gray-900 mb-3">Available Plans</h5>
                    <div className="space-y-3">
                        <div className="p-4 rounded-xl border border-gray-200 hover:border-teal-500 hover:bg-teal-50/50 transition-colors cursor-pointer group flex justify-between items-center bg-white">
                            <div>
                                <h6 className="font-bold text-gray-900 group-hover:text-teal-900">Essential Care</h6>
                                <p className="text-sm text-gray-500 group-hover:text-teal-700/70">$99 / month</p>
                            </div>
                            <Button variant="outline" className="!text-xs !py-1 !h-8">Downgrade</Button>
                        </div>
                    </div>
                </div>

                <div className="pt-2 text-xs text-gray-400 text-center">
                    Plan changes will take effect at the end of your billing cycle.
                </div>
            </div>
        </Modal>
    );
};
