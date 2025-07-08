import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#00446E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="EDHUB360 Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-white font-heading">
                EDHUB360
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Education without limits. We build intelligent, user-focused learning solutions that empower individuals, educators, and organizations to grow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#BEA260] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#BEA260] transition-colors" aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#BEA260] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#BEA260] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-[#BEA260] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#BEA260] transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#BEA260] transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#BEA260] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-[#BEA260]" />
                <span className="text-gray-300 text-sm">contact@edhub360.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-[#BEA260]" />
                <span className="text-gray-300 text-sm">331 230 8027</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 text-[#BEA260] mt-0.5" />
                <span className="text-gray-300 text-sm">Aurora, IL 60504</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 EDHUB360. All rights reserved. | Built with innovation and purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;