import React from 'react';
import { Button } from '../../UI';

interface ProfilePrivacyProps {
    onChangePassword: () => void;
    onDeleteAccount: () => void;
}

export const ProfilePrivacy: React.FC<ProfilePrivacyProps> = ({ onChangePassword, onDeleteAccount }) => {
    return (
        <section className="space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Security</h3>

                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 py-2">
                        <div>
                            <h4 className="text-sm font-bold text-gray-900">Password</h4>
                            <p className="text-xs text-gray-500">Last changed 3 months ago</p>
                        </div>
                        <Button variant="outline" className="!border-gray-200 !text-gray-600 text-xs py-2 h-9" onClick={onChangePassword}>Change Password</Button>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 py-2 border-t border-gray-50 pt-4">
                        <div>
                            <h4 className="text-sm font-bold text-gray-900">Two-Factor Authentication</h4>
                            <p className="text-xs text-gray-500">Add an extra layer of security to your account.</p>
                        </div>
                        <Button variant="outline" className="!border-gray-200 !text-gray-600 text-xs py-2 h-9">Enable 2FA</Button>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                <h3 className="text-xl font-serif font-bold text-red-600 mb-4">Danger Zone</h3>
                <p className="text-sm text-gray-500 mb-6">Once you delete your account, there is no going back. Please be certain.</p>
                <Button variant="ghost" className="!text-red-600 !bg-red-50 hover:!bg-red-100" onClick={onDeleteAccount}>Delete Account</Button>
            </div>
        </section>
    );
};
