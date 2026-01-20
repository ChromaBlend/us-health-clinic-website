import React from 'react';

export const ProfileNotifications = () => {
    const NotificationToggle = ({ title, desc, defaultChecked = false }: { title: string, desc: string, defaultChecked?: boolean }) => (
        <div className="flex items-center justify-between py-4">
            <div>
                <h4 className="text-sm font-bold text-gray-900">{title}</h4>
                <p className="text-xs text-gray-500">{desc}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked={defaultChecked} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
            </label>
        </div>
    );

    return (
        <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Notification Preferences</h3>

            <div className="space-y-2 divide-y divide-gray-50">
                <NotificationToggle
                    title="Lab Results Ready"
                    desc="Get notified when your lab results are available to view."
                    defaultChecked={true}
                />
                <NotificationToggle
                    title="Appointment Reminders"
                    desc="Receive reminders 24 hours before your scheduled appointment."
                    defaultChecked={true}
                />
                <NotificationToggle
                    title="New Messages"
                    desc="Get notified when you receive a new message from your care team."
                    defaultChecked={true}
                />
                <NotificationToggle
                    title="Marketing Updates"
                    desc="Receive updates about new features and promotions."
                />
            </div>
        </section>
    );
};
