export default function TrustBar() {
  return (
    <section className="w-full px-4 md:px-16 py-12 bg-[var(--nav-bg)]">
      <div className="w-full max-w-7xl mx-auto">
        
        
        {/* Single White Container with Three Sections */}
        <div className="bg-[var(--nav-bg)] rounded-lg ">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-400">
            {/* A Legacy of Trust */}
            <div className="text-center py-6 md:py-0">
              <div className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-2">
                A Legacy of Trust
              </div>
              <div className="text-lg text-[var(--hero-text)] font-sans opacity-80">
                Over a century of business acumen
              </div>
            </div>

            {/* Decades of Expertise */}
            <div className="text-center py-6 md:py-0">
              <div className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-2">
                Decades of Expertise
              </div>
              <div className="text-lg text-[var(--hero-text)] font-sans opacity-80">
                30+ years of senior systems analysis experience
              </div>
            </div>

            {/* Future-Ready */}
            <div className="text-center py-6 md:py-0">
              <div className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-2">
                Future-Ready
              </div>
              <div className="text-lg text-[var(--hero-text)] font-sans opacity-80">
                Oracle Partner & AI Specialists
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
