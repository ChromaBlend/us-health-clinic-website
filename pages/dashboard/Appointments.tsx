import React, { useState } from 'react';
import { FadeIn } from '../../components/Animations';
import { Button } from '../../components/UI';
import { Icons } from '../../components/Icons';
import { BookAppointmentModal } from '../../components/Dashboard/BookAppointmentModal';
import { RescheduleModal } from '../../components/Dashboard/RescheduleModal';
import { ConfirmationModal } from '../../components/ConfirmationModal';

const Appointments = () => {
    const [view, setView] = useState<'upcoming' | 'past'>('upcoming');
    const [activeModal, setActiveModal] = useState<'book' | 'reschedule' | 'cancel' | null>(null);
    const [selectedAppointment, setSelectedAppointment] = useState<any>(null);

    const appointments = [
        {
            id: 1,
            title: "Annual Comprehensive Panel",
            date: "Nov 14, 2025",
            time: "09:00 AM",
            provider: "USHC Lab Partner",
            location: "123 Medical Center Dr, Beverly Hills, CA",
            type: "Lab Draw",
            status: "upcoming"
        },
        {
            id: 2,
            title: "Result Review with Dr. Chen",
            date: "Nov 20, 2025",
            time: "02:00 PM",
            provider: "Dr. Sarah Chen",
            location: "Video Consultation",
            type: "Consultation",
            status: "upcoming"
        },
        // Past appointments
        {
            id: 3,
            title: "Initial Consultation",
            date: "Oct 01, 2025",
            time: "10:00 AM",
            provider: "Dr. Sarah Chen",
            location: "Video Consultation",
            type: "Consultation",
            status: "past"
        },
        {
            id: 4,
            title: "Baseline Blood Panel",
            date: "Sep 28, 2025",
            time: "08:30 AM",
            provider: "USHC Lab Partner",
            location: "123 Medical Center Dr, Beverly Hills, CA",
            type: "Lab Draw",
            status: "past"
        }
    ];

    const filteredAppointments = appointments.filter(appt => appt.status === view);

    const handleReschedule = (appt: any) => {
        setSelectedAppointment(appt);
        setActiveModal('reschedule');
    };

    const handleCancel = (appt: any) => {
        setSelectedAppointment(appt);
        setActiveModal('cancel');
    };

    const handleCloseModal = () => {
        setActiveModal(null);
        setSelectedAppointment(null);
    };

    return (
        <FadeIn>
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-serif text-gray-900">Appointments</h1>
                    <p className="text-gray-500 mt-1">Manage your visits and consultations.</p>
                </div>
                <Button onClick={() => setActiveModal('book')}>
                    <Icons.Plus className="w-4 h-4 mr-2" />
                    Book New
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: List */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="flex gap-4 border-b border-gray-200 pb-4">
                        <button
                            onClick={() => setView('upcoming')}
                            className={`pb-4 -mb-4 px-2 font-medium transition-colors ${view === 'upcoming' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            Upcoming
                        </button>
                        <button
                            onClick={() => setView('past')}
                            className={`pb-4 -mb-4 px-2 font-medium transition-colors ${view === 'past' ? 'text-teal-700 border-b-2 border-teal-700' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            Past Views
                        </button>
                    </div>

                    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                        <div className="divide-y divide-gray-100">
                            {filteredAppointments.length > 0 ? (
                                filteredAppointments.map((appt) => (
                                    <div key={appt.id} className="p-8 hover:bg-teal-50/10 transition-colors group">
                                        <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                                            <div className="flex gap-6 items-start">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${appt.status === 'past' ? 'bg-gray-100 text-gray-500' : 'bg-teal-50 text-teal-700'}`}>
                                                    <Icons.Calendar className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <h3 className={`text-lg font-serif font-bold ${appt.status === 'past' ? 'text-gray-600' : 'text-gray-900'}`}>{appt.title}</h3>
                                                        <span className={`${appt.status === 'past' ? 'bg-gray-100 text-gray-600' : 'bg-orange-50 text-orange-700'} text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full`}>
                                                            {appt.type}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-500 mb-2">{appt.date} at {appt.time} • with {appt.provider}</p>
                                                    <p className="text-gray-600 text-sm max-w-xl leading-relaxed">{appt.location}</p>
                                                </div>
                                            </div>

                                            {view === 'upcoming' && (
                                                <div className="flex gap-3 pl-[4.5rem] md:pl-0 mt-4 md:mt-0">
                                                    <Button variant="secondary" className="px-5 py-2 text-sm h-10 border-gray-200" onClick={() => handleReschedule(appt)}>Reschedule</Button>
                                                    <Button variant="outline" className="px-5 py-2 text-sm h-10 !border-gray-200 !text-gray-600 hover:!bg-gray-50 flex items-center gap-2" onClick={() => handleCancel(appt)}>
                                                        Cancel
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-12 text-center">
                                    <p className="text-gray-500">No {view} appointments found.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right: Calendar Helper */}
                <div className="lg:col-span-4">
                    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 sticky top-6">
                        <h3 className="font-serif font-bold text-gray-900 mb-4">Calendar</h3>
                        {/* Simplified visual calendar representation */}
                        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d} className="text-gray-400 font-bold py-2">{d}</div>)}
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-sm">
                            {[...Array(30)].map((_, i) => (
                                <div key={i} className={`py-2 rounded-full hover:bg-gray-50 cursor-pointer ${i === 13 ? 'bg-teal-700 text-white hover:!bg-teal-800' : ''}`}>
                                    {i + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <BookAppointmentModal
                isOpen={activeModal === 'book'}
                onClose={handleCloseModal}
            />

            <RescheduleModal
                isOpen={activeModal === 'reschedule'}
                onClose={handleCloseModal}
                appointment={selectedAppointment}
            />

            <ConfirmationModal
                isOpen={activeModal === 'cancel'}
                onClose={handleCloseModal}
                onConfirm={() => {
                    // Logic to cancel appointment would go here
                    handleCloseModal();
                }}
                title="Cancel Appointment"
                message={
                    <>
                        Are you sure you want to cancel <strong>{selectedAppointment?.title}</strong> on <strong>{selectedAppointment?.date}</strong>?
                        <br /><br />
                        This action cannot be undone. You may be charged a cancellation fee if within 24 hours.
                    </>
                }
                confirmText="Yes, Cancel"
                variant="danger"
            />
        </FadeIn>
    );
};

export default Appointments;
