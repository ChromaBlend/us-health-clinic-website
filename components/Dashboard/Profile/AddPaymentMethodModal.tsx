import React from 'react';
import { Modal } from '../../Modal';
import { Button } from '../../UI';
import { Icons } from '../../Icons';

interface AddPaymentMethodModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AddPaymentMethodModal: React.FC<AddPaymentMethodModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add Payment Method">
            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Card Number</label>
                    <div className="relative">
                        <Icons.DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm font-mono placeholder:text-gray-300" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Expiry Date</label>
                        <input type="text" placeholder="MM / YY" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm font-mono placeholder:text-gray-300" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">CVC</label>
                        <div className="relative">
                            <Icons.Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input type="text" placeholder="123" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm font-mono placeholder:text-gray-300" />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Cardholder Name</label>
                    <input type="text" placeholder="Name on card" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm" />
                </div>

                <div className="flex justify-end pt-4">
                    <Button onClick={onClose} className="w-full">Add Card</Button>
                </div>
            </div>
        </Modal>
    );
};
