import React from 'react';
import { Icons } from '../Icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthActions } from "@convex-dev/auth/react";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { signOut } = useAuthActions();

    const handleLogout = async () => {
        await signOut();
        navigate('/signin', { replace: true });
    };

    const navItems = [
        { icon: <Icons.Activity />, label: "Dashboard", path: "/dashboard" },
        { icon: <Icons.Calendar />, label: "Appointments", path: "/dashboard/appointments" },
        { icon: <Icons.FileText />, label: "Results", path: "/dashboard/results" },
        { icon: <Icons.MessageCircle />, label: "Messages", path: "/dashboard/messages" },
        { icon: <Icons.User />, label: "Profile", path: "/dashboard/profile" },
    ];

    return (
        <div className="min-h-screen bg-[#FDFBF7] flex">
            {/* Sidebar - Desktop */}
            <aside className="hidden md:flex flex-col w-72 fixed h-full bg-teal-900 text-white p-6 shadow-xl z-50 overflow-y-auto">
                <div className="mb-12 pl-2 pt-2">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-white text-teal-900 rounded-lg flex items-center justify-center font-serif font-bold group-hover:rotate-12 transition-transform">U</div>
                        <span className="font-serif font-medium text-lg tracking-tight">US Health Clinic</span>
                    </Link>
                </div>

                <nav className="flex-1 space-y-2 mb-8">
                    {navItems.map((item, i) => (
                        <Link
                            key={i}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${location.pathname === item.path
                                ? 'bg-white text-teal-900 font-medium shadow-sm'
                                : 'text-teal-100 hover:bg-teal-800 hover:text-white'
                                }`}
                        >
                            {React.cloneElement(item.icon as React.ReactElement<any>, { size: 18 })}
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="pt-6 border-t border-teal-800">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-teal-800 text-teal-100 transition-colors w-full"
                    >
                        <Icons.LogOut size={18} />
                        <span>Log Out</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Header & Content */}
            <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
                {/* Mobile Header */}
                <header className="md:hidden bg-teal-900 text-white p-4 sticky top-0 z-40 flex justify-between items-center shadow-md">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white text-teal-900 rounded-lg flex items-center justify-center font-serif font-bold">U</div>
                        <span className="font-serif font-medium text-lg tracking-tight">US Health Clinic</span>
                    </Link>
                    <button className="p-2">
                        <Icons.Menu className="w-6 h-6" />
                    </button>
                </header>

                <main className="flex-1 p-6 md:p-10 lg:p-12 max-w-[1600px] mx-auto w-full">
                    {children}
                </main>

                {/* Mobile Bottom Nav */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 flex justify-around z-50 safe-area-bottom">
                    {navItems.slice(0, 4).map((item, i) => (
                        <Link
                            key={i}
                            to={item.path}
                            className={`flex flex-col items-center p-2 rounded-lg ${location.pathname === item.path
                                ? 'text-teal-700'
                                : 'text-gray-400'
                                }`}
                        >
                            {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                            <span className="text-[10px] mt-1 font-medium">{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
