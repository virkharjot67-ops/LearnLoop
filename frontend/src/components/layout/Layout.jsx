import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ToastContainer from '../common/ToastContainer';

export const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Global Notifications */}
      <ToastContainer />

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

