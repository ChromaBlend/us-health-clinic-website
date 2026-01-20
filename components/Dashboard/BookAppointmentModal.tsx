import React from 'react';
import { Modal } from '../Modal';
import { Button } from '../UI';
import { Icons } from '../Icons';

interface BookAppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Book New Appointment">
            <div className="space-y-6">
                <div>
                    <label className="text-sm font-bold text-gray-700 ml-1 mb-2 block">Select Service</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm appearance-none cursor-pointer">
                        <option>Annual Comprehensive Panel</option>
                        <option>Consultation with Dr. Chen</option>
                        <option>Follow-up Visit</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-bold text-gray-700 ml-1 mb-2 block">Date</label>
                        <div className="relative">
                            <Icons.Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input type="date" className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-bold text-gray-700 ml-1 mb-2 block">Time</label>
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

                <div>
                    <label className="text-sm font-bold text-gray-700 ml-1 mb-2 block">Notes (Optional)</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm resize-none" placeholder="Any specific concerns?"></textarea>
                </div>

                <div className="flex justify-end pt-4">
                    <Button onClick={onClose} className="w-full md:w-auto">Confirm Booking</Button>
                </div>
            </div>
        </Modal>
    );
};
