export default function HeroSection() {
  return (
    <section className="w-full px-4 md:px-16 pt-8 pb-8 md:pt-40 md:pb-40 bg-[var(--nav-bg)]">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-[var(--hero-text)] leading-tight font-sans">
              Simplifying Complexity.{' '}
              <span className="relative">
                Since 1892
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--hero-underline)]"></span>
              </span>
            </h1>
            
            <p className="text-xl text-[var(--hero-text)] leading-relaxed max-w-2xl font-sans">
              We transform your outdated, manual processes into intelligent, automated systems you can trust. 
              Move your business forward with confidence.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/services"
                className="bg-[var(--button-bg)] text-[var(--button-text)] px-8 py-3 rounded-md font-medium hover:opacity-90 transition-colors text-center font-sans"
              >
                Explore Our Services
              </a>
              <a
                href="/case-studies"
                className="border-2 border-[var(--button-bg)] text-black px-8 py-3 rounded-md font-medium hover:bg-[var(--button-bg)] hover:text-white transition-colors text-center font-sans"
              >
                See Our Work
              </a>
            </div>
          </div>

          {/* Animated Video - Shown first on mobile */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-100 h-100 rounded-lg overflow-hidden shadow-lg">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/assets/Robot Rigging.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Mobile Text Content - Shown after illustration on mobile */}
          <div className="lg:hidden space-y-6 order-2">
            <h1 className="text-4xl font-bold text-[var(--hero-text)] leading-tight font-sans">
              Simplifying Complexity.{' '}
              <span className="relative">
                Since 1892
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--hero-underline)]"></span>
              </span>
            </h1>
            
            <p className="text-lg text-[var(--hero-text)] leading-relaxed max-w-2xl font-sans">
              We transform your outdated, manual processes into intelligent, automated systems you can trust. 
              Move your business forward with confidence.
            </p>

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-4 pt-4">
              <a
                href="/services"
                className="bg-[var(--button-bg)] text-[var(--button-text)] px-8 py-3 rounded-md font-medium hover:opacity-90 transition-colors text-center font-sans"
              >
                Explore Our Services
              </a>
              <a
                href="/case-studies"
                className="border-2 border-[var(--button-bg)] text-black px-8 py-3 rounded-md font-medium hover:bg-[var(--button-bg)] hover:text-white transition-colors text-center font-sans"
              >
                See Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
