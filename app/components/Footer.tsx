import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--nav-bg)] text-gray-800 border-t border-gray-300">
      <div className="w-full px-4 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center">
              <Image 
                src="/assets/Asset 1.png" 
                alt="MODYR Logo" 
                width={120}
                height={110}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-[var(--hero-text)] font-sans leading-relaxed max-w-md">
              Simplifying complexity since 1892. We transform your outdated, manual processes into intelligent, automated systems you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[var(--hero-text)] font-sans">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[var(--hero-text)] hover:text-[#F6A100] transition-colors font-sans">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[var(--hero-text)] hover:text-[#F6A100] transition-colors font-sans">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/ai-technology" className="text-[var(--hero-text)] hover:text-[#F6A100] transition-colors font-sans">
                  AI-Technology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--hero-text)] hover:text-[#F6A100] transition-colors font-sans">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[var(--hero-text)] font-sans">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-[var(--hero-text)] font-sans">
                <span className="font-medium">Email:</span> hello@modyr.com
              </p>
              <p className="text-[var(--hero-text)] font-sans">
                <span className="font-medium">Phone:</span> +1 (555) 123-4567
              </p>
              <p className="text-[var(--hero-text)] font-sans">
                <span className="font-medium">Address:</span><br />
                123 Business Street<br />
                Suite 100<br />
                City, State 12345
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[var(--hero-text)] font-sans text-sm">
              © 2024 MODYR. All rights reserved. Simplifying complexity since 1892.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
