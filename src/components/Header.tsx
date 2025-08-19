import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' || path === '/home') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname === path;
  };

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="EDHUB360 Logo" 
              className="h-16 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#00446E] font-heading leading-tight">
                EDHUB360
              </span>
              <span className="text-sm font-medium text-[#BEA260] leading-tight">
                Education without Limits
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/"
              className={`transition-colors font-medium ${
                isActive('/') 
                  ? 'text-[#009C9F] border-b-2 border-[#009C9F] pb-1' 
                  : 'text-gray-700 hover:text-[#009C9F]'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/courses"
              className={`transition-colors font-medium ${
                isActive('/courses') 
                  ? 'text-[#009C9F] border-b-2 border-[#009C9F] pb-1' 
                  : 'text-gray-700 hover:text-[#009C9F]'
              }`}
            >
              Courses
            </Link>
            <Link 
              to="/about"
              className={`transition-colors font-medium ${
                isActive('/about') 
                  ? 'text-[#009C9F] border-b-2 border-[#009C9F] pb-1' 
                  : 'text-gray-700 hover:text-[#009C9F]'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/contact"
              className={`transition-colors font-medium ${
                isActive('/contact') 
                  ? 'text-[#009C9F] border-b-2 border-[#009C9F] pb-1' 
                  : 'text-gray-700 hover:text-[#009C9F]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact"
              className="bg-[#009C9F] text-white px-6 py-2 rounded-full hover:bg-[#00446E] transition-colors font-medium"
            >
              Get Started
            </Link>
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
              <Link 
                to="/"
                onClick={handleMobileNavClick}
                className={`text-left transition-colors font-medium ${
                  isActive('/') 
                    ? 'text-[#009C9F] font-semibold' 
                    : 'text-gray-700 hover:text-[#009C9F]'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/courses"
                onClick={handleMobileNavClick}
                className={`text-left transition-colors font-medium ${
                  isActive('/courses') 
                    ? 'text-[#009C9F] font-semibold' 
                    : 'text-gray-700 hover:text-[#009C9F]'
                }`}
              >
                Courses
              </Link>
              <Link 
                to="/about"
                onClick={handleMobileNavClick}
                className={`text-left transition-colors font-medium ${
                  isActive('/about') 
                    ? 'text-[#009C9F] font-semibold' 
                    : 'text-gray-700 hover:text-[#009C9F]'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/contact"
                onClick={handleMobileNavClick}
                className={`text-left transition-colors font-medium ${
                  isActive('/contact') 
                    ? 'text-[#009C9F] font-semibold' 
                    : 'text-gray-700 hover:text-[#009C9F]'
                }`}
              >
                Contact
              </Link>
              <Link 
                to="/contact"
                onClick={handleMobileNavClick}
                className="bg-[#009C9F] text-white px-6 py-2 rounded-full hover:bg-[#00446E] transition-colors font-medium text-center"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;