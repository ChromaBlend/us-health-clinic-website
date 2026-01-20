import React from 'react';
import { DashboardLayout } from '../components/Dashboard/DashboardLayout';
import { Icons } from '../components/Icons';
import { Button } from '../components/UI';
import { useNavigate, useLocation } from 'react-router-dom';

const DashboardPlaceholder = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Extract feature name from path
    const featureName = location.pathname.split('/').pop()?.replace(/-/g, ' ') || 'Feature';
    const formattedName = featureName.charAt(0).toUpperCase() + featureName.slice(1);

    return (
        <DashboardLayout>
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
                <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center text-teal-700">
                    <Icons.Clock className="w-12 h-12" />
                </div>
                <div>
                    <h1 className="text-3xl font-serif text-gray-900 mb-2">{formattedName}</h1>
                    <p className="text-gray-500 max-w-md mx-auto">
                        This feature is currently being built. Check back soon for updates to your {formattedName.toLowerCase()}.
                    </p>
                </div>
                <Button onClick={() => navigate('/dashboard')} variant="secondary">
                    Return to Dashboard
                </Button>
            </div>
        </DashboardLayout>
    );
};

export default DashboardPlaceholder;
