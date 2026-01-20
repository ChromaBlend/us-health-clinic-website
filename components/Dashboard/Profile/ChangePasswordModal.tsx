import React from 'react';
import { Modal } from '../../Modal';
import { Button } from '../../UI';
import { Icons } from '../../Icons';

interface ChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Change Password">
            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Current Password</label>
                    <input type="password" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">New Password</label>
                    <input type="password" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Confirm New Password</label>
                    <input type="password" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal-500 focus:ring-0 transition-all text-sm" />
                </div>

                <div className="bg-orange-50 p-4 rounded-xl flex gap-3 text-sm text-orange-800 mt-2">
                    <Icons.AlertCircle className="w-5 h-5 shrink-0" />
                    <p>Make sure your new password is at least 8 characters long and includes a number and symbol.</p>
                </div>

                <div className="flex justify-end pt-4">
                    <Button onClick={onClose} className="w-full">Update Password</Button>
                </div>
            </div>
        </Modal>
    );
};
