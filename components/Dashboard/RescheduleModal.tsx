import React from 'react';
import { Modal } from '../Modal';
import { Button } from '../UI';
import { Icons } from '../Icons';

interface RescheduleModalProps {
    isOpen: boolean;
    onClose: () => void;
    appointment: any; // Using any for simplicity as per existing loose typing, can be improved
}

export const RescheduleModal: React.FC<RescheduleModalProps> = ({ isOpen, onClose, appointment }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Reschedule Appointment">
            <div className="space-y-6">
                <div className="bg-teal-50 p-4 rounded-2xl flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                        <Icons.Calendar className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-900">{appointment?.title}</p>
                        <p className="text-xs text-gray-500">Currently: {appointment?.date} at {appointment?.time}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-bold text-gray-700 ml-1 mb-2 block">New Date</label>
                        <div className="relative">
                            <Icons.Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input type="date" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-bold text-gray-700 ml-1 mb-2 block">New Time</label>
                        <div className="relative">
                            <Icons.Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <select className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm appearance-none">
                                <option>09:00 AM</option>
                                <option>10:00 AM</option>
                                <option>11:00 AM</option>
                                <option>02:00 PM</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <Button onClick={onClose} variant="primary" className="w-full md:w-auto">Confirm Reschedule</Button>
                </div>
            </div>
        </Modal>
    );
};
