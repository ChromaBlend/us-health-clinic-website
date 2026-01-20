import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import WhatWeTest from './pages/WhatWeTest';
import Treatment from './pages/Treatment';
import PanelDetail from './pages/PanelDetail';
import Franchise from './pages/Franchise';
import Doctors from './pages/Doctors';

import MedicalConsent from './pages/MedicalConsent';
import PrivacyPractices from './pages/PrivacyPractices';
import MembershipAgreement from './pages/MembershipAgreement';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import NutritionSignalProgram from './pages/NutritionSignalProgram';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Subscribe from './pages/Subscribe';
import FoodSignalProgram from './pages/FoodSignalProgram';
import VisionBoard from './pages/VisionBoard';

import ScrollToTop from './components/ScrollToTop';


import DashboardOverview from './pages/dashboard/Overview';
import DashboardAppointments from './pages/dashboard/Appointments';
import DashboardResults from './pages/dashboard/Results';
import DashboardMessages from './pages/dashboard/Messages';
import DashboardProfile from './pages/dashboard/Profile';

import DashboardPlaceholder from './pages/DashboardPlaceholder';
import { DashboardLayout } from './components/Dashboard/DashboardLayout';
import { Icons } from './components/Icons';

// Wraps dashboard content in Layout + Animation
const DashboardRoutes = () => {
  const location = useLocation();
  return (
    <DashboardLayout>
      <AuthLoading>
        <div className="flex items-center justify-center h-full w-full min-h-[50vh]">
          <Icons.Loader className="w-8 h-8 animate-spin text-teal-700" />
        </div>
      </AuthLoading>
      <Authenticated>
        <AnimatePresence mode="wait">
          {/* @ts-ignore */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><DashboardOverview /></PageTransition>} />
            <Route path="/overview" element={<PageTransition><DashboardOverview /></PageTransition>} />
            <Route path="/appointments" element={<PageTransition><DashboardAppointments /></PageTransition>} />
            <Route path="/results" element={<PageTransition><DashboardResults /></PageTransition>} />
            <Route path="/messages" element={<PageTransition><DashboardMessages /></PageTransition>} />
            <Route path="/profile" element={<PageTransition><DashboardProfile /></PageTransition>} />
            <Route path="/*" element={<PageTransition><DashboardPlaceholder /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Authenticated>
      <Unauthenticated>
        <Navigate to="/signin" replace />
      </Unauthenticated>
    </DashboardLayout>
  );
};

const App = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const isVisionBoard = location.pathname === '/vision-board';
  const shouldHideNavAndFooter = isDashboard || isVisionBoard;

  return (
    <div className="font-sans text-gray-900 antialiased selection:bg-teal-200 selection:text-teal-900">
      <ScrollToTop />
      {!shouldHideNavAndFooter && <Navbar />}

      {/* Dual Router Structure to isolate Dashboard Layout */}
      {isDashboard ? (
        <Routes>
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
        </Routes>
      ) : (
        <AnimatePresence mode="wait">
          {/* @ts-ignore */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/how-it-works" element={<PageTransition><HowItWorks /></PageTransition>} />
            <Route path="/what-we-test" element={<PageTransition><WhatWeTest /></PageTransition>} />
            <Route path="/panel/:id" element={<PageTransition><PanelDetail /></PageTransition>} />
            <Route path="/treatment" element={<PageTransition><Treatment /></PageTransition>} />
            <Route path="/franchise" element={<PageTransition><Franchise /></PageTransition>} />
            <Route path="/doctors" element={<PageTransition><Doctors /></PageTransition>} />
            <Route path="/medical-consent" element={<PageTransition><MedicalConsent /></PageTransition>} />
            <Route path="/privacy-practices" element={<PageTransition><PrivacyPractices /></PageTransition>} />
            <Route path="/membership-agreement" element={<PageTransition><MembershipAgreement /></PageTransition>} />
            <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
            <Route path="/terms-and-conditions" element={<PageTransition><TermsAndConditions /></PageTransition>} />
            <Route path="/nutrition-signal-program" element={<PageTransition><NutritionSignalProgram /></PageTransition>} />
            <Route path="/signin" element={<PageTransition><SignIn /></PageTransition>} />
            <Route path="/signup" element={<PageTransition><SignUp /></PageTransition>} />
            <Route path="/subscribe" element={<PageTransition><Subscribe /></PageTransition>} />
            <Route path="/food-signal-program" element={<PageTransition><FoodSignalProgram /></PageTransition>} />
            <Route path="/vision-board" element={<PageTransition><VisionBoard /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      )}

      {!shouldHideNavAndFooter && <Footer />}
    </div>
  );
};

export default App;
