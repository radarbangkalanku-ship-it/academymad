/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Stats from './components/Stats';
import Features from './components/Features';
import Competitions from './components/Competitions';
import Testimonials from './components/Testimonials';
import TopAchievers from './components/TopAchievers';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';

export default function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans selection:bg-orange-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar 
        onOpenAuthModal={() => setIsAuthModalOpen(true)} 
        isAuthenticated={isAuthenticated}
        onLogout={() => setIsAuthenticated(false)}
      />
      
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <main>
          <Hero onOpenAuthModal={() => setIsAuthModalOpen(true)} />
          <Partners />
          <Stats />
          <Features />
          <Competitions onOpenAuthModal={() => setIsAuthModalOpen(true)} />
          <Testimonials />
          <TopAchievers />
          <FAQ />
        </main>
      )}

      <Footer />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLogin={() => setIsAuthenticated(true)}
      />
    </div>
  );
}
