import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[var(--background)]">

      {/* Hero Section */}
      <section className="w-full px-4 md:px-16 pt-20 pb-16 bg-[var(--nav-bg)]">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--hero-text)] font-sans mb-6">
            A Legacy of Trust.<br />
            A Passion for <span className="relative" style={{color: "#F6A100"}}>Innovation.<span className="absolute bottom-0 left-0 w-full h-1 bg-[#F6A100]"></span></span>
          </h1>
          <p className="text-xl text-[var(--hero-text)] font-sans opacity-80 max-w-3xl mx-auto leading-relaxed">
            We combine the wisdom of generations with the tools of tomorrow, helping our partners navigate complexity with a steady, experienced hand.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full px-4 md:px-16 py-16 bg-[var(--nav-bg)]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--hero-text)] font-sans mb-4">
                Our Story
              </h2>
              <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
                MODYR was born from a unique heritage. Our principles of trust, ethical business, and building for the long term come from a family enterprise established in 1892. For over a century, our parent company has thrived by adapting to change and putting people first.
              </p>
              <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
                We bring that same DNA to the world of technology, acting as a true legacy-to-future transformation partner. We combine the wisdom of generations with the tools of tomorrow, helping our partners navigate complexity with a steady, experienced hand.
              </p>
            </div>
            {/* Image/Graphic */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-96 h-96 bg-transparent flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-xl">
                  <svg className="w-40 h-40 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full px-4 md:px-16 py-16 bg-[var(--nav-bg)]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image/Graphic */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-96 h-96 bg-transparent flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-xl">
                  <svg className="w-40 h-40 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Text Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--hero-text)] font-sans mb-4">
                Our Team
              </h2>
              <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
                Our strength lies in our people. The MODYR core team is composed of senior systems analysts and architects with over 30 years of experience in the trenches of software development, data science, and enterprise systems.
              </p>
              <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
                We&apos;ve seen technologies come and go, and we know what it takes to build solutions that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full px-4 md:px-16 py-16 bg-[var(--nav-bg)]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--hero-text)] font-sans mb-6">
              Our Vision & Mission
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-[var(--nav-bg)] rounded-xl p-8 border-2 border-teal-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-4">
                  Our Vision
                </h3>
              </div>
              <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
                To redefine how businesses navigate complexity by building intelligent, adaptable, and future-proof solutions that empower strategic growth across industries.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[var(--nav-bg)] rounded-xl p-8 border-2 border-teal-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-4">
                  Our Mission
                </h3>
              </div>
              <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
                We deliver cutting-edge strategic intelligence by combining data, design, and modular technology. Through deep insights, innovation, and tailored systems, we help our partners make smarter decisions, faster.
              </p>
            </div>
          </div>
        </div>
      </section>

   

    </div>
  );
}
