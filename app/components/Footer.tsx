import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full text-white border-t border-gray-300" style={{backgroundColor: "#0f766e"}}>
      <div className="w-full px-4 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center ">
              <Image 
                src="/assets/logo-for-footer.png" 
                alt="MODYR Logo" 
                width={100}
                height={80}
                className="h-15 w-auto"
              />
            </div>
            <p className="text-white font-sans leading-relaxed max-w-md">
              Simplifying complexity since 1892. We transform your outdated, manual processes into intelligent, automated systems you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-sans">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-[#F6A100] transition-colors font-sans">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-[#F6A100] transition-colors font-sans">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/our-approach" className="text-white hover:text-[#F6A100] transition-colors font-sans">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-white hover:text-[#F6A100] transition-colors font-sans">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-white hover:text-[#F6A100] transition-colors font-sans">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-sans">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-white font-sans">
                <span className="font-medium">Email:</span> hello@modyr.com
              </p>
              <p className="text-white font-sans">
                <span className="font-medium">Phone:</span> +1 (555) 123-4567
              </p>
              <p className="text-white font-sans">
                <span className="font-medium">Address:</span><br />
                123 Business Street<br />
                Suite 100<br />
                City, State 12345
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-400 mt-4 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white font-sans text-sm">
              © 2024 MODYR. All rights reserved. Simplifying complexity since 1892.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
