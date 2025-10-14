
export default function Services() {
  return (
    <div className="min-h-screen bg-[var(--background)]">

      {/* Hero Section */}
      <section className="w-full px-4 md:px-16 pt-20 pb-16 bg-[var(--nav-bg)]">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--hero-text)] font-sans mb-6">
            Our <span className="relative" style={{color: "#F6A100"}}>Services<span className="absolute bottom-0 left-0 w-full h-1 bg-[#F6A100]"></span></span>
          </h1>
          <p className="text-xl text-[var(--hero-text)] font-sans opacity-80 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge strategic intelligence by combining data, design, and modular technology. Here&apos;s how we help our partners make smarter decisions, faster.
          </p>
        </div>
      </section>

      {/* Service 1: Digital Transformation & Process Modernization */}
      <section className="w-full px-4 md:px-16 py-16 bg-[var(--nav-bg)]">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--hero-text)] font-sans mb-4">
              Digital Transformation & Process Modernization
            </h2>
            <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
              Modernize with Confidence. This is the first step. We address the immediate pain of being stuck with manual or outdated systems and build a foundation for future growth.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4 bg-[var(--nav-bg)] rounded-xl p-4 border-2 border-teal-500 shadow-md">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <div>
                  <h4 className="text-xl font-bold text-[var(--hero-text)] font-sans">From Paper to Platform</h4>
                  <p className="text-md text-[var(--hero-text)] font-sans opacity-80">
                    We analyze your manual, paper, or spreadsheet-based workflows and transform them into secure, efficient, and scalable digital applications.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-[var(--nav-bg)] rounded-xl p-4 border-2 border-teal-500 shadow-md">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-xl font-bold text-[var(--hero-text)] font-sans">Deterministic Automation</h4>
                  <p className="text-md text-[var(--hero-text)] font-sans opacity-80">
                    For repetitive, critical tasks, we build robust, deterministic automation solutions that guarantee accuracy and efficiency, saving you time and reducing errors.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-[var(--nav-bg)] rounded-xl p-4 border-2 border-teal-500 shadow-md">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <div>
                  <h4 className="text-xl font-bold text-[var(--hero-text)] font-sans">Custom Business Software</h4>
                  <p className="text-md text-[var(--hero-text)] font-sans opacity-80">
                    Development of tailor-made applications (CRM, ERP, Logistics Management, etc.) that fit your unique business needs, often built on a powerful Oracle backend.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Image/Graphic */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 bg-teal-100 rounded-full flex items-center justify-center shadow-xl">
              <svg className="w-40 h-40 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Custom AI & Agentic Solutions */}
      <section className="w-full px-4 md:px-16 py-16 bg-[var(--nav-bg)]">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Graphic */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-80 h-80 bg-teal-100 rounded-full flex items-center justify-center shadow-xl">
              <svg className="w-40 h-40 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          {/* Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--hero-text)] font-sans mb-4">
              Custom AI & Agentic Solutions
            </h2>
            <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
              Intelligence with Oversight. Intelligent Automation, Tangible Results. This is how we future-proof your business. We build intelligent systems that learn from your data and streamline complex operations.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4 bg-[var(--nav-bg)] rounded-xl p-4 border-2 border-teal-500 shadow-md">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 0A9.953 9.953 0 0112 21c-3.739 0-6.768-2.792-7.286-6.5M18.364 5.636A9.953 9.953 0 0021 12c0 3.739-2.792 6.768-6.5 7.286m0 0A9.953 9.953 0 0112 3c-3.739 0-6.768 2.792-7.286 6.5M17.286 17.286L13.75 13.75M13.75 13.75L10.214 10.214M13.75 13.75L10.214 10.214M10.214 10.214L6.678 6.678" />
                </svg>
                <div>
                  <h4 className="text-xl font-bold text-[var(--hero-text)] font-sans">Human-in-the-Loop AI</h4>
                  <p className="text-md text-[var(--hero-text)] font-sans opacity-80">
                    We design intelligent systems where AI agents handle the heavy lifting, but your team maintains control and oversight on sensitive decisions. It&apos;s the perfect balance of automation and human expertise.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-[var(--nav-bg)] rounded-xl p-4 border-2 border-teal-500 shadow-md">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.206 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.794 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.794 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.206 18 16.5 18s-3.332.477-4.5 1.253" />
                </svg>
                <div>
                  <h4 className="text-xl font-bold text-[var(--hero-text)] font-sans">Advanced Knowledge Retrieval (RAG)</h4>
                  <p className="text-md text-[var(--hero-text)] font-sans opacity-80">
                    Standard AI can hallucinate. Our systems deliver answers you can trust. We build sophisticated RAG solutions that pull precise information from your private data, using Hybrid & Graph RAG, re-ranking, and advanced context embedding to ensure accuracy.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-[var(--nav-bg)] rounded-xl p-4 border-2 border-teal-500 shadow-md">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <h4 className="text-xl font-bold text-[var(--hero-text)] font-sans">Intelligent Agent Development</h4>
                  <p className="text-md text-[var(--hero-text)] font-sans opacity-80">
                    We build custom AI agents to streamline your business, including Voice Agents for customer service and Vision Agents for quality control.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-[var(--nav-bg)] rounded-xl p-4 border-2 border-teal-500 shadow-md">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
                <div>
                  <h4 className="text-xl font-bold text-[var(--hero-text)] font-sans">AI-Powered Analytics & Reporting</h4>
                  <p className="text-md text-[var(--hero-text)] font-sans opacity-80">
                    Go beyond simple reports. We build systems that interpret your data, identify trends, and provide actionable insights automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Enterprise Database & API Services */}
      <section className="w-full px-4 md:px-16 py-16 bg-[var(--nav-bg)]">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--hero-text)] font-sans mb-4">
              Enterprise Database & API Services
            </h2>
            <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
              This is the technical foundation that makes everything else possible, ensuring your systems are powerful, secure, and connected.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4 bg-[var(--nav-bg)] rounded-xl p-4 border-2 border-teal-500 shadow-md">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                <div>
                  <h4 className="text-xl font-bold text-[var(--hero-text)] font-sans">Public & Private API Integration</h4>
                  <p className="text-md text-[var(--hero-text)] font-sans opacity-80">
                    We are experts at connecting your software to the outside world. We build robust integrations with essential third-party services, including government portals (tax, immigration, economic departments), payment gateways, logistics partners, and any other service with an API.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-[var(--nav-bg)] rounded-xl p-4 border-2 border-teal-500 shadow-md">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
                <div>
                  <h4 className="text-xl font-bold text-[var(--hero-text)] font-sans">Oracle-Powered Solutions</h4>
                  <p className="text-md text-[var(--hero-text)] font-sans opacity-80">
                    As an Oracle partner, we specialize in building and managing high-performance, secure applications leveraging the full power of the Oracle database.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-[var(--nav-bg)] rounded-xl p-4 border-2 border-teal-500 shadow-md">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <div>
                  <h4 className="text-xl font-bold text-[var(--hero-text)] font-sans">Best-of-Breed Technology Strategy</h4>
                  <p className="text-md text-[var(--hero-text)] font-sans opacity-80">
                    We are vendor-agnostic and partner with industry leaders like Google, Microsoft, OpenAI, and Anthropic to select the absolute best tool for your specific problem, ensuring you are never locked into a single provider.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Image/Graphic */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2">
            <div className="relative w-80 h-80 bg-teal-100 rounded-full flex items-center justify-center shadow-xl">
              <svg className="w-40 h-40 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
