import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icons } from './Icons';
import { Button } from './UI';
import { useConvexAuth } from "convex/react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, isLoading } = useConvexAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How it works', path: '/how-it-works' },
    { name: 'What we test', path: '/what-we-test' },
    { name: 'Treatment', path: '/treatment' },
    { name: 'Vision Board', path: '/vision-board' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-8 h-8 bg-teal-700 text-white flex items-center justify-center rounded-tr-lg rounded-bl-lg transition-transform group-hover:rotate-12">
            <span className="font-serif font-bold text-lg">U</span>
          </div>
          <span className={`font-serif text-xl font-bold tracking-tight ${isScrolled ? 'text-teal-900' : 'text-teal-900'} group-hover:opacity-80 transition-opacity`}>US Health Clinic</span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-teal-700 after:transition-all hover:after:w-full ${location.pathname === item.path
                ? 'text-teal-900 font-semibold after:w-full'
                : 'text-gray-600 hover:text-teal-700'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex gap-6 items-center">
          {isAuthenticated ? (
            <Link to="/dashboard">
              <Button variant="primary" className="py-2 px-6 text-sm">Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link to="/signin" className="text-sm font-medium text-teal-700 hover:text-teal-900">Sign in</Link>
              <Link to="/subscribe">
                <Button variant="primary" className="py-2 px-6 text-sm">Try USHC</Button>
              </Link>
            </>
          )}
        </div>

        <button className="md:hidden text-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-8 flex flex-col gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-serif font-medium ${location.pathname === item.path
                ? 'text-teal-900'
                : 'text-gray-900'
                }`}
            >
              {item.name}
            </Link>
          ))}
          <hr className="border-gray-100" />
          <hr className="border-gray-100" />
          {isAuthenticated ? (
            <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full justify-center">Go to Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link to="/signin" className="text-lg font-medium text-teal-700" onClick={() => setMobileMenuOpen(false)}>Sign in</Link>
              <Link to="/subscribe" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full justify-center">Try USHC</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
