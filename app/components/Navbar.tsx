'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full px-4 md:px-8 bg-[var(--nav-bg)] md:static sticky top-0 z-50">
      {/* Desktop Layout - Centered */}
      <div className="hidden md:flex flex-col items-center">
        {/* Logo - Centered */}
        <div className="flex items-center">
          <Image 
            src="/assets/Asset 1.png" 
            alt="MODYR Logo" 
            width={140}
            height={130}
            className="h-30 w-auto"
          />
        </div>

        {/* Desktop Navigation Links - Centered */}
        <div className="flex items-center space-x-12">
          <Link 
            href="/" 
            className="text-gray-800 hover:text-gray-600 transition-colors font-medium text-lg"
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className="text-gray-800 hover:text-gray-600 transition-colors font-medium text-lg"
          >
            Services
          </Link>
          <Link 
            href="/our-approach" 
            className="text-gray-800 hover:text-gray-600 transition-colors font-medium text-lg"
          >
            Our Approach
          </Link>
          <Link 
            href="/about-us" 
            className="text-gray-800 hover:text-gray-600 transition-colors font-medium text-lg"
          >
            About Us
          </Link>
          <Link 
            href="/contact-us" 
            className="text-gray-800 hover:text-gray-600 transition-colors font-medium text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Layout - Original horizontal layout */}
      <div className="md:hidden w-full flex items-center justify-between">
        {/* Mobile Logo */}
        <div className="flex items-center">
          <Image 
            src="/assets/Asset 1.png" 
            alt="MODYR Logo" 
            width={100}
            height={92}
            className="h-23 w-auto"
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="text-[var(--nav-text)]"
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
            <Link 
              href="/" 
              className="block px-3 py-2 text-[var(--nav-text)] hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="block px-3 py-2 text-[var(--nav-text)] hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/our-approach" 
              className="block px-3 py-2 text-[var(--nav-text)] hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Approach
            </Link>
            <Link 
              href="/about-us" 
              className="block px-3 py-2 text-[var(--nav-text)] hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/contact-us" 
              className="block px-3 py-2 text-[var(--nav-text)] hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
