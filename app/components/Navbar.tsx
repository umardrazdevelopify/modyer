'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when pathname changes to prevent infinite loops
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const isActive = useCallback((path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  }, [pathname]);

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
            className={`transition-colors font-medium text-lg ${
              isActive('/') 
                ? 'text-[#F6A100] font-bold' 
                : 'text-gray-800 hover:text-gray-600'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className={`transition-colors font-medium text-lg ${
              isActive('/services') 
                ? 'text-[#F6A100] font-bold' 
                : 'text-gray-800 hover:text-gray-600'
            }`}
          >
            Services
          </Link>
          <Link 
            href="/our-approach" 
            className={`transition-colors font-medium text-lg ${
              isActive('/our-approach') 
                ? 'text-[#F6A100] font-bold' 
                : 'text-gray-800 hover:text-gray-600'
            }`}
          >
            Our Approach
          </Link>
          <Link 
            href="/about-us" 
            className={`transition-colors font-medium text-lg ${
              isActive('/about-us') 
                ? 'text-[#F6A100] font-bold' 
                : 'text-gray-800 hover:text-gray-600'
            }`}
          >
            About Us
          </Link>
          <Link 
            href="/contact-us" 
            className={`transition-colors font-medium text-lg ${
              isActive('/contact-us') 
                ? 'text-[#F6A100] font-bold' 
                : 'text-gray-800 hover:text-gray-600'
            }`}
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
              className={`block px-3 py-2 transition-colors font-medium ${
                isActive('/') 
                  ? 'text-[#F6A100] font-bold' 
                  : 'text-[var(--nav-text)] hover:text-gray-600'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`block px-3 py-2 transition-colors font-medium ${
                isActive('/services') 
                  ? 'text-[#F6A100] font-bold' 
                  : 'text-[var(--nav-text)] hover:text-gray-600'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/our-approach" 
              className={`block px-3 py-2 transition-colors font-medium ${
                isActive('/our-approach') 
                  ? 'text-[#F6A100] font-bold' 
                  : 'text-[var(--nav-text)] hover:text-gray-600'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Approach
            </Link>
            <Link 
              href="/about-us" 
              className={`block px-3 py-2 transition-colors font-medium ${
                isActive('/about-us') 
                  ? 'text-[#F6A100] font-bold' 
                  : 'text-[var(--nav-text)] hover:text-gray-600'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/contact-us" 
              className={`block px-3 py-2 transition-colors font-medium ${
                isActive('/contact-us') 
                  ? 'text-[#F6A100] font-bold' 
                  : 'text-[var(--nav-text)] hover:text-gray-600'
              }`}
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
