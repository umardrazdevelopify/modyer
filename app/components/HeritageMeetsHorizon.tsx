import Image from 'next/image';

export default function HeritageMeetsHorizon() {
  return (
    <section className="w-full px-4 md:px-16 py-16 bg-[var(--nav-bg)]">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--hero-text)] font-sans mb-6">
            Heritage Meets <span className="relative" style={{color: "#F6A100"}}>Horizon<span className="absolute bottom-0 left-0 w-full h-1 bg-[#F6A100]"></span></span>
          </h2>
          <p className="text-xl text-[var(--hero-text)] font-sans opacity-80 max-w-4xl mx-auto leading-relaxed">
            We honor a legacy of trust by building the technology of tomorrow. Here&apos;s how we do it.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Pillar 1: Digital Transformation */}
          <div className="text-center space-y-6 group hover:scale-105 transition-transform duration-300 rounded-xl p-8 border-2 border-transparent hover:border-teal-500 shadow-lg hover:shadow-2xl transition-all duration-300" style={{backgroundColor: "#f3e0c2"}}>
            <div className="relative">
              <div className="w-32 h-32 mx-auto flex items-center justify-center">
                <Image 
                  src="/assets/horizon/Pillar 1.png" 
                  alt="Digital Transformation" 
                  width={120}
                  height={120}
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans group-hover:text-teal-600 transition-colors">
              Digital Transformation & Modernization
            </h3>
            <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
              We move you from paper, spreadsheets, and legacy software to secure, efficient, and scalable platforms.
            </p>
          </div>

          {/* Pillar 2: Custom AI & Agentic Solutions */}
          <div className="text-center space-y-6 group hover:scale-105 transition-transform duration-300 rounded-xl p-8 border-2 border-transparent hover:border-teal-500 shadow-lg hover:shadow-2xl transition-all duration-300" style={{backgroundColor: "#f3e0c2"}}>
            <div className="relative">
              <div className="w-32 h-32 mx-auto flex items-center justify-center">
                <Image 
                  src="/assets/horizon/pillar 2.png" 
                  alt="Custom AI Solutions" 
                  width={120}
                  height={120}
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans group-hover:text-teal-600 transition-colors">
              Custom AI & Agentic Solutions
            </h3>
            <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
              We build practical, human-in-the-loop AI agents and analytics platforms to automate tasks and uncover insights.
            </p>
          </div>

          {/* Pillar 3: Enterprise Database & API Services */}
          <div className="text-center space-y-6 group hover:scale-105 transition-transform duration-300 rounded-xl p-8 border-2 border-transparent hover:border-teal-500 shadow-lg hover:shadow-2xl transition-all duration-300" style={{backgroundColor: "#f3e0c2"}}>
            <div className="relative">
              <div className="w-32 h-32 mx-auto flex items-center justify-center">
                <Image 
                  src="/assets/horizon/pillar 3.png" 
                  alt="Enterprise Database Services" 
                  width={120}
                  height={120}
                  className="w-32 h-32 object-contain"
                />
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
