export default function TrustBar() {
  return (
    <section className="w-full px-4 md:px-16 py-12 bg-[var(--nav-bg)] border-t border-gray-200">
      <div className="w-full">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--hero-text)] font-sans mb-4">
            Why Choose <span className="relative" style={{color: "#F6A100"}}>MODYR ?<span className="absolute bottom-0 left-0 w-full h-1 bg-[#F6A100]"></span></span>
          </h2>
          <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 max-w-2xl mx-auto">
            Our proven track record and expertise make us the trusted partner for your digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* A Legacy of Trust */}
          <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300 bg-[var(--nav-bg)] rounded-xl p-6 border-2 border-transparent hover:border-[#F6A100] shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">1892</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans group-hover:text-orange-600 transition-colors">
              A Legacy of Trust
            </h3>
            <p className="text-lg text-[var(--hero-text)] font-sans opacity-80">
              Over a century of business acumen
            </p>
          </div>

          {/* Decades of Expertise */}
          <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300 bg-[var(--nav-bg)] rounded-xl p-6 border-2 border-transparent hover:border-[#F6A100] shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">30+</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans group-hover:text-teal-600 transition-colors">
              Decades of Expertise
            </h3>
            <p className="text-lg text-[var(--hero-text)] font-sans opacity-80">
              30+ years of senior systems analysis experience
            </p>
          </div>

          {/* Future-Ready */}
          <div className="text-center space-y-4 group hover:scale-105 transition-transform duration-300 bg-[var(--nav-bg)] rounded-xl p-6 border-2 border-transparent hover:border-[#F6A100] shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">AI</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans group-hover:text-purple-600 transition-colors">
              Future-Ready
            </h3>
            <p className="text-lg text-[var(--hero-text)] font-sans opacity-80">
              Oracle Partner & AI Specialists
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
