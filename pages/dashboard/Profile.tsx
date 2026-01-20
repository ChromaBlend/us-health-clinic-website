import React, { useState } from 'react';
import { FadeIn } from '../../components/Animations';
import { ConfirmationModal } from '../../components/ConfirmationModal';
import { ProfileGeneral } from '../../components/Dashboard/Profile/ProfileGeneral';
import { ProfileMembership } from '../../components/Dashboard/Profile/ProfileMembership';
import { ProfileBilling } from '../../components/Dashboard/Profile/ProfileBilling';
import { ProfileNotifications } from '../../components/Dashboard/Profile/ProfileNotifications';
import { ProfilePrivacy } from '../../components/Dashboard/Profile/ProfilePrivacy';
import { ManageSubscriptionModal } from '../../components/Dashboard/Profile/ManageSubscriptionModal';
import { AddPaymentMethodModal } from '../../components/Dashboard/Profile/AddPaymentMethodModal';
import { ChangePasswordModal } from '../../components/Dashboard/Profile/ChangePasswordModal';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('General');
    const [activeModal, setActiveModal] = useState<'manage_sub' | 'cancel_sub' | 'add_payment' | 'change_password' | 'delete_account' | null>(null);

    const tabs = ['General', 'Membership', 'Billing', 'Notifications', 'Privacy'];

    const renderContent = () => {
        switch (activeTab) {
            case 'General': return <ProfileGeneral />;
            case 'Membership':
                return <ProfileMembership
                    onManageSubscription={() => setActiveModal('manage_sub')}
                    onCancelMembership={() => setActiveModal('cancel_sub')}
                />;
            case 'Billing':
                return <ProfileBilling
                    onAddPaymentMethod={() => setActiveModal('add_payment')}
                />;
            case 'Notifications': return <ProfileNotifications />;
            case 'Privacy':
                return <ProfilePrivacy
                    onChangePassword={() => setActiveModal('change_password')}
                    onDeleteAccount={() => setActiveModal('delete_account')}
                />;
            default: return <ProfileGeneral />;
        }
    };

    const handleCloseModal = () => setActiveModal(null);

    return (
        <FadeIn>
            <div className="mb-10">
                <h1 className="text-3xl font-serif text-gray-900">Account Settings</h1>
                <p className="text-gray-500 mt-1">Manage your profile, membership, and preferences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Sidebar Navigation */}
                <div className="md:col-span-3">
                    <div className="space-y-1 sticky top-6">
                        {tabs.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveTab(item)}
                                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeTab === item
                                        ? 'bg-teal-900 text-white shadow-lg shadow-teal-900/10 translate-x-1'
                                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="md:col-span-9">
                    <FadeIn key={activeTab}>
                        {renderContent()}
                    </FadeIn>
                </div>
            </div>

            {/* Interaction Modals */}
            <ManageSubscriptionModal
                isOpen={activeModal === 'manage_sub'}
                onClose={handleCloseModal}
            />

            <AddPaymentMethodModal
                isOpen={activeModal === 'add_payment'}
                onClose={handleCloseModal}
            />

            <ChangePasswordModal
                isOpen={activeModal === 'change_password'}
                onClose={handleCloseModal}
            />

            <ConfirmationModal
                isOpen={activeModal === 'cancel_sub'}
                onClose={handleCloseModal}
                onConfirm={handleCloseModal}
                title="Cancel Membership"
                message="Are you sure you want to cancel your Wellness Plus membership? You will lose access to unlimited messaging and your personalized health plan at the end of your billing cycle."
                confirmText="Yes, Cancel Membership"
                variant="danger"
            />

            <ConfirmationModal
                isOpen={activeModal === 'delete_account'}
                onClose={handleCloseModal}
                onConfirm={handleCloseModal}
                title="Delete Account"
                message={
                    <>
                        Are you absolutely sure? This action cannot be undone.
                        <br /><br />
                        This will permanently delete your account, remove all your lab data, and cancel your active subscription immediately.
                    </>
                }
                confirmText="Permanently Delete Account"
                variant="danger"
            />
        </FadeIn>
    );
};

export default Profile;
