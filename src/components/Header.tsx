import React, { useState } from 'react';
import { MenuIcon, X as CloseIcon } from 'lucide-react';
import { Logo } from './Logo';
export function Header({
  setActivePage
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavigation = page => {
    setActivePage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };
  return <header className="w-full bg-white/80 backdrop-blur-sm py-2 px-6 shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => handleNavigation('home')} className="flex items-center">
            <Logo />
          </button>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => handleNavigation('features')} className="text-gray-600 hover:text-pink-500 transition-colors">
            Features
          </button>
          <button onClick={() => handleNavigation('how-it-works')} className="text-gray-600 hover:text-pink-500 transition-colors">
            How It Works
          </button>
          <button onClick={() => handleNavigation('rainbow-letters')} className="text-gray-600 hover:text-pink-500 transition-colors">
            Rainbow Letters
          </button>
          <button onClick={() => handleNavigation('pricing')} className="text-gray-600 hover:text-pink-500 transition-colors">
            Pricing
          </button>
          <button onClick={() => handleNavigation('about')} className="text-gray-600 hover:text-pink-500 transition-colors">
            About
          </button>
        </nav>
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-pink-500 hover:text-pink-600 transition-colors">
            Log in
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-md hover:opacity-90 transition-opacity">
            Sign up
          </button>
        </div>
        <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4">
          <nav className="flex flex-col space-y-4">
            <button onClick={() => handleNavigation('features')} className="text-gray-600 hover:text-pink-500 transition-colors">
              Features
            </button>
            <button onClick={() => handleNavigation('how-it-works')} className="text-gray-600 hover:text-pink-500 transition-colors">
              How It Works
            </button>
            <button onClick={() => handleNavigation('rainbow-letters')} className="text-gray-600 hover:text-pink-500 transition-colors">
              Rainbow Letters
            </button>
            <button onClick={() => handleNavigation('pricing')} className="text-gray-600 hover:text-pink-500 transition-colors">
              Pricing
            </button>
            <button onClick={() => handleNavigation('about')} className="text-gray-600 hover:text-pink-500 transition-colors">
              About
            </button>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
              <button className="px-4 py-2 text-pink-500 hover:text-pink-600 transition-colors">
                Log in
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-md hover:opacity-90 transition-opacity">
                Sign up
              </button>
            </div>
          </nav>
        </div>}
    </header>;
}