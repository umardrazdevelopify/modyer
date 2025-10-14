export default function OurApproach() {
  return (
    <div className="min-h-screen bg-[var(--background)]">

      {/* Hero Section */}
      <section className="w-full px-4 md:px-16 pt-20 pb-16 bg-[var(--nav-bg)]">
        <div className="w-full max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--hero-text)] font-sans mb-6">
            Your Partner in <span className="relative" style={{color: "#F6A100"}}>Practical Innovation<span className="absolute bottom-0 left-0 w-full h-1 bg-[#F6A100]"></span></span>
          </h1>
          <p className="text-xl text-[var(--hero-text)] font-sans opacity-80 max-w-3xl mx-auto leading-relaxed">
            Our approach is built on a foundation of partnership, pragmatism, and a relentless focus on delivering real-world results.
          </p>
        </div>
      </section>

      {/* Approach Cards Grid */}
      <section className="w-full px-4 md:px-16 py-16 bg-[var(--nav-bg)]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Partners, Not Providers */}
            <div className="group bg-[var(--nav-bg)] rounded-2xl p-8 border-2 border-transparent hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-4 group-hover:text-teal-600 transition-colors">
                Partners, Not Providers
              </h3>
              <p className="text-[var(--hero-text)] font-sans opacity-80 leading-relaxed mb-6">
                We integrate with your team to understand your challenges deeply. Your goals become our goals. We succeed when you succeed, building a long-term relationship founded on mutual trust.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--hero-text)] font-sans">Deep Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--hero-text)] font-sans">Shared Success</span>
                </div>
              </div>
            </div>

            {/* Card 2: Pragmatic AI */}
            <div className="group bg-[var(--nav-bg)] rounded-2xl p-8 border-2 border-transparent hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-4 group-hover:text-teal-600 transition-colors">
                Pragmatic, Human-in-the-Loop AI
              </h3>
              <p className="text-[var(--hero-text)] font-sans opacity-80 leading-relaxed mb-6">
                We believe in practical innovation and view AI as a co-pilot for your business. Our solutions are designed to empower your team, not replace them.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--hero-text)] font-sans">AI as Co-Pilot</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--hero-text)] font-sans">Practical Innovation</span>
                </div>
              </div>
            </div>

            {/* Card 3: Best-of-Breed Technology */}
            <div className="group bg-[var(--nav-bg)] rounded-2xl p-8 border-2 border-transparent hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-4 group-hover:text-teal-600 transition-colors">
                Best-of-Breed Technology
              </h3>
              <p className="text-[var(--hero-text)] font-sans opacity-80 leading-relaxed mb-6">
                The best solution is the one that&apos;s right for you. As an independent firm with key partnerships, we are free to recommend the best technology for the job.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--hero-text)] font-sans">No Vendor Lock-in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--hero-text)] font-sans">Strategic Partnerships</span>
                </div>
              </div>
            </div>

            {/* Card 4: Phased Approach */}
            <div className="group bg-[var(--nav-bg)] rounded-2xl p-8 border-2 border-transparent hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-4 group-hover:text-teal-600 transition-colors">
                A Phased Approach to Modernization
              </h3>
              <p className="text-[var(--hero-text)] font-sans opacity-80 leading-relaxed mb-6">
                Transformation is a journey, not a switch-flip. We work with you to identify the highest-impact areas first, delivering value in manageable phases.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--hero-text)] font-sans">High-Impact First</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--hero-text)] font-sans">Manageable Phases</span>
                </div>
              </div>
            </div>

            {/* Card 5: Solutions for Every Scale */}
            <div className="group bg-[var(--nav-bg)] rounded-2xl p-8 border-2 border-transparent hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-4 group-hover:text-teal-600 transition-colors">
                Solutions for Every Scale
              </h3>
              <p className="text-[var(--hero-text)] font-sans opacity-80 leading-relaxed mb-6">
                From local firms to established enterprises, we believe powerful technology should be accessible to all. Our phased, modular approach allows us to tailor solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--hero-text)] font-sans">Modular Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--hero-text)] font-sans">Budget-Conscious</span>
                </div>
              </div>
            </div>

            {/* Card 6: Why Choose Us - Summary Card */}
            <div className="group bg-[var(--nav-bg)] rounded-2xl p-8 border-2 border-transparent hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-4 group-hover:text-teal-600 transition-colors">
                Why Choose MODYR?
              </h3>
              <p className="text-[var(--hero-text)] font-sans opacity-80 leading-relaxed mb-6">
                We combine decades of experience with cutting-edge technology to deliver solutions that actually work in the real world.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--hero-text)] font-sans">Proven Track Record</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--hero-text)] font-sans">Real-World Results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm font-medium text-[var(--hero-text)] font-sans">Long-term Partnership</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full px-4 md:px-16 py-16 bg-[var(--nav-bg)]">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--hero-text)] font-sans mb-6">
            Ready to Experience Our <span className="relative" style={{color: "#F6A100"}}>Approach?<span className="absolute bottom-0 left-0 w-full h-1 bg-[#F6A100]"></span></span>
          </h2>
          <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 mb-8 leading-relaxed">
            Let&apos;s discuss how our practical, partnership-driven approach can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--nav-bg)] border-2 border-teal-500 px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="text-teal-600">Schedule</span> <span className="text-[#F6A100]">A Consultation</span>
            </button>
            <button className=" border-2 border-teal-500 text-teal-600 bg-teal-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
