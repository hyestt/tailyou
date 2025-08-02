import React, { useState, memo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PricingPage } from './pages/PricingPage';
import { RainbowLetters } from './components/RainbowLetters';
import { MemorialProfilePage } from './pages/MemorialProfilePage';
import { MemoryTimelinePage } from './pages/MemoryTimelinePage';
import { HealingRitualsPage } from './pages/HealingRitualsPage';
export function App() {
  const [activePage, setActivePage] = useState('home');
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'pricing':
        return <PricingPage />;
      case 'rainbow-letters':
        return <RainbowLetters />;
      case 'memorial-profile':
        return <MemorialProfilePage />;
      case 'memory-timeline':
        return <MemoryTimelinePage />;
      case 'healing-rituals':
        return <HealingRitualsPage />;
      default:
        return <HomePage />;
    }
  };
  return <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header setActivePage={setActivePage} />
      <main>{renderPage()}</main>
      <Footer setActivePage={setActivePage} />
    </div>;
}