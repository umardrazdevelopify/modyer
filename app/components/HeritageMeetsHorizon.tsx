export default function HeritageMeetsHorizon() {
  return (
    <section className="w-full px-4 md:px-16 py-16 bg-[var(--nav-bg)]">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--hero-text)] font-sans mb-6">
            Heritage Meets <span className="relative" style={{color: "#F6A100"}}>Horizon<span className="absolute bottom-0 left-0 w-full h-1 bg-[#F6A100]"></span></span>
          </h2>
          <p className="text-xl text-[var(--hero-text)] font-sans opacity-80 max-w-3xl mx-auto leading-relaxed">
            We honor a legacy of trust by building the technology of tomorrow. Here's how we do it.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Pillar 1: Digital Transformation */}
          <div className="text-center space-y-6 group hover:scale-105 transition-transform duration-300 bg-[var(--nav-bg)] rounded-xl p-8 border-2 border-transparent hover:border-[#F6A100] shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">⚡</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans group-hover:text-blue-600 transition-colors">
              Digital Transformation & Modernization
            </h3>
            <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
              We move you from paper, spreadsheets, and legacy software to secure, efficient, and scalable platforms.
            </p>
          </div>

          {/* Pillar 2: Custom AI & Agentic Solutions */}
          <div className="text-center space-y-6 group hover:scale-105 transition-transform duration-300 bg-[var(--nav-bg)] rounded-xl p-8 border-2 border-transparent hover:border-[#F6A100] shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">AI</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans group-hover:text-purple-600 transition-colors">
              Custom AI & Agentic Solutions
            </h3>
            <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
              We build practical, human-in-the-loop AI agents and analytics platforms to automate tasks and uncover insights.
            </p>
          </div>

          {/* Pillar 3: Enterprise Database & API Services */}
          <div className="text-center space-y-6 group hover:scale-105 transition-transform duration-300 bg-[var(--nav-bg)] rounded-xl p-8 border-2 border-transparent hover:border-[#F6A100] shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">🔗</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans group-hover:text-teal-600 transition-colors">
              Enterprise Database & API Services
            </h3>
            <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
              We connect your software to the outside world, integrating with government portals, payment gateways, and other essential services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
