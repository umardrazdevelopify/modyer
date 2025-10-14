import Link from 'next/link';

export default function CTA() {
  return (
    <section className="w-full px-4 md:px-16 py-16 bg-[var(--nav-bg)]">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* CTA Content */}
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--hero-text)] font-sans mb-6">
            Ready to Build <span className="relative" style={{color: "#F6A100"}}>Clarity?<span className="absolute bottom-0 left-0 w-full h-1 bg-[#F6A100]"></span></span>
          </h2>
          
          <p className="text-xl text-[var(--hero-text)] font-sans opacity-80 mb-8 leading-relaxed max-w-3xl mx-auto">
            Let&apos;s discuss your biggest operational challenge. Our first conversation is a complimentary, no-obligation process review with a senior systems analyst.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="bg-[var(--nav-bg)] border-2 border-teal-500 px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="text-teal-600">Schedule</span> <span className="text-[#F6A100]">A Free Process Review</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
