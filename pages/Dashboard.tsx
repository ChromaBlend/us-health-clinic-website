import React from 'react';
import { DashboardLayout } from '../components/Dashboard/DashboardLayout';
import { BioAgeCard } from '../components/Dashboard/BioAgeCard';
import { BenefitsSummary } from '../components/Dashboard/BenefitsSummary';
import { AppointmentsWidget } from '../components/Dashboard/AppointmentsWidget';
import { ResultsFeed } from '../components/Dashboard/ResultsFeed';
import { MedicationsList } from '../components/Dashboard/MedicationsList';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations';
import { Icons } from '../components/Icons';

const Dashboard = () => {
    return (
        <DashboardLayout>
            <FadeIn>
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-serif text-gray-900">
                            Welcome back, <span className="italic text-teal-700">Sarah</span>
                        </h1>
                        <p className="text-gray-500 mt-2">Here is your daily health snapshot.</p>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 shadow-sm border border-gray-100 transition-colors">
                            <Icons.Phone className="w-4 h-4" />
                            Contact Care Team
                        </button>
                    </div>
                </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 pb-20 md:pb-0">
                {/* Row 1 */}
                <StaggerItem className="md:col-span-8 lg:col-span-8">
                    <BioAgeCard />
                </StaggerItem>
                <StaggerItem className="md:col-span-4 lg:col-span-4">
                    <BenefitsSummary />
                </StaggerItem>

                {/* Row 2 */}
                <StaggerItem className="md:col-span-4 lg:col-span-4 self-stretch">
                    <AppointmentsWidget />
                </StaggerItem>
                <StaggerItem className="md:col-span-5 lg:col-span-5 self-stretch">
                    <ResultsFeed />
                </StaggerItem>
                <StaggerItem className="md:col-span-3 lg:col-span-3 self-stretch">
                    <MedicationsList />
                </StaggerItem>
            </StaggerContainer>
        </DashboardLayout>
    );
};

export default Dashboard;
