import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentView: 'home' | 'about' | 'contact';
  onNavigate: (view: 'home' | 'about' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (view: 'home' | 'about' | 'contact') => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavigation('home')}>
            <img 
              src="/logo.jpg" 
              alt="EDHUB360 Logo" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#00446E] font-heading leading-tight">
                EDHUB360
              </span>
              <span className="text-xs font-medium text-[#BEA260] leading-tight">
                Education without Limits
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className={`transition-colors font-medium ${
                currentView === 'home' 
                  ? 'text-[#009C9F] border-b-2 border-[#009C9F] pb-1' 
                  : 'text-gray-700 hover:text-[#009C9F]'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className={`transition-colors font-medium ${
                currentView === 'about' 
                  ? 'text-[#009C9F] border-b-2 border-[#009C9F] pb-1' 
                  : 'text-gray-700 hover:text-[#009C9F]'
              }`}
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className={`transition-colors font-medium ${
                currentView === 'contact' 
                  ? 'text-[#009C9F] border-b-2 border-[#009C9F] pb-1' 
                  : 'text-gray-700 hover:text-[#009C9F]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => handleNavigation('contact')}
              className="bg-[#009C9F] text-white px-6 py-2 rounded-full hover:bg-[#00446E] transition-colors font-medium"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#009C9F] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('home')}
                className={`text-left transition-colors font-medium ${
                  currentView === 'home' 
                    ? 'text-[#009C9F] font-semibold' 
                    : 'text-gray-700 hover:text-[#009C9F]'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className={`text-left transition-colors font-medium ${
                  currentView === 'about' 
                    ? 'text-[#009C9F] font-semibold' 
                    : 'text-gray-700 hover:text-[#009C9F]'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className={`text-left transition-colors font-medium ${
                  currentView === 'contact' 
                    ? 'text-[#009C9F] font-semibold' 
                    : 'text-gray-700 hover:text-[#009C9F]'
                }`}
              >
                Contact
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="bg-[#009C9F] text-white px-6 py-2 rounded-full hover:bg-[#00446E] transition-colors font-medium text-center"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;