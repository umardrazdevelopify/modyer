'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full px-4 md:px-8 bg-[var(--nav-bg)]">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/assets/Asset 1.png" 
            alt="MODYR Logo" 
            className="h-23 w-auto"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="/" 
            className="text-[var(--nav-text)] hover:text-gray-600 transition-colors font-medium"
          >
            Home
          </a>
          <a 
            href="/services" 
            className="text-[var(--nav-text)] hover:text-gray-600 transition-colors font-medium"
          >
            Services
          </a>
          <a 
            href="/our-approach" 
            className="text-[var(--nav-text)] hover:text-gray-600 transition-colors font-medium"
          >
            Our Approach
          </a>
          <a 
            href="/about-us" 
            className="text-[var(--nav-text)] hover:text-gray-600 transition-colors font-medium"
          >
            About Us
          </a>
          <a 
            href="/contact-us" 
            className="text-[var(--nav-text)] hover:text-gray-600 transition-colors font-medium"
          >
            Contact Us
          </a>
        </div>

        {/* Desktop Book a Call Button */}
        <a
          href="/try-claude"
          className="hidden md:block bg-[var(--button-bg)] text-[var(--button-text)] px-8 py-3 rounded-md font-medium hover:opacity-90 transition-colors flex items-center"
        >
          Book a Call
        </a>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-[var(--nav-text)]"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--nav-bg)] border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Navigation Links */}
            <a 
              href="/" 
              className="block px-3 py-2 text-[var(--nav-text)] hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/services" 
              className="block px-3 py-2 text-[var(--nav-text)] hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="/our-approach" 
              className="block px-3 py-2 text-[var(--nav-text)] hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Approach
            </a>
            <a 
              href="/about-us" 
              className="block px-3 py-2 text-[var(--nav-text)] hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="/contact-us" 
              className="block px-3 py-2 text-[var(--nav-text)] hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
            
            {/* Mobile Book a Call Button */}
            <a
              href="/try-claude"
              className="block mx-3 mt-4 bg-[var(--button-bg)] text-[var(--button-text)] px-8 py-3 rounded-md font-medium hover:opacity-90 transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
