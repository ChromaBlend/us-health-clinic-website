import React from 'react';
import { Modal } from './Modal';
import { Button } from './UI';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: React.ReactNode;
    confirmText?: string;
    cancelText?: string;
    variant?: 'danger' | 'primary';
    isLoading?: boolean;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    variant = 'primary',
    isLoading = false
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={title}>
            <div className="space-y-6">
                <div className="text-gray-600 leading-relaxed">
                    {message}
                </div>

                <div className="flex justify-end gap-3 pt-2">
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        disabled={isLoading}
                    >
                        {cancelText}
                    </Button>
                    <button
                        onClick={onConfirm}
                        disabled={isLoading}
                        className={`inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${variant === 'danger'
                                ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 shadow-lg shadow-red-600/20'
                                : 'bg-teal-700 text-white hover:bg-teal-600 focus:ring-teal-700 shadow-lg'
                            }`}
                    >
                        {isLoading ? 'Processing...' : confirmText}
                    </button>
                </div>
            </div>
        </Modal>
    );
};
