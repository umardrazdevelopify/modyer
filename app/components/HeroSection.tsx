export default function HeroSection() {
  return (
    <section className="w-full px-6 py-16 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-[var(--hero-text)] leading-tight">
              AI research and products that put{' '}
              <span className="relative">
                safety
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--hero-underline)]"></span>
              </span>{' '}
              at the frontier
            </h1>
            
            <p className="text-xl text-[var(--hero-text)] leading-relaxed max-w-2xl">
              AI will have a vast impact on the world. Anthropic is a public benefit corporation 
              dedicated to securing its benefits and mitigating its risks.
            </p>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80">
              {/* Branching Structure */}
              <svg 
                className="w-full h-full" 
                viewBox="0 0 300 300" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main trunk */}
                <path 
                  d="M150 250 L150 200" 
                  stroke="var(--illustration-branch)" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />
                
                {/* Left branches */}
                <path 
                  d="M150 200 L100 150" 
                  stroke="var(--illustration-branch)" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
                <path 
                  d="M100 150 L80 120" 
                  stroke="var(--illustration-branch)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                <path 
                  d="M100 150 L70 100" 
                  stroke="var(--illustration-branch)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                
                {/* Right branches */}
                <path 
                  d="M150 200 L200 150" 
                  stroke="var(--illustration-branch)" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
                <path 
                  d="M200 150 L220 120" 
                  stroke="var(--illustration-branch)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                <path 
                  d="M200 150 L230 100" 
                  stroke="var(--illustration-branch)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                
                {/* Center branches */}
                <path 
                  d="M150 200 L150 120" 
                  stroke="var(--illustration-branch)" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
                <path 
                  d="M150 120 L130 80" 
                  stroke="var(--illustration-branch)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                <path 
                  d="M150 120 L170 80" 
                  stroke="var(--illustration-branch)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                
                {/* Nodes/Berries */}
                <circle cx="80" cy="120" r="4" fill="var(--illustration-branch)" />
                <circle cx="70" cy="100" r="3" fill="var(--illustration-branch)" />
                <circle cx="220" cy="120" r="4" fill="var(--illustration-branch)" />
                <circle cx="230" cy="100" r="3" fill="var(--illustration-branch)" />
                <circle cx="130" cy="80" r="3" fill="var(--illustration-branch)" />
                <circle cx="170" cy="80" r="3" fill="var(--illustration-branch)" />
                <circle cx="150" cy="120" r="5" fill="var(--illustration-branch)" />
              </svg>
              
              {/* Hands */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <svg 
                  className="w-32 h-16" 
                  viewBox="0 0 128 64" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Left hand */}
                  <path 
                    d="M20 40 Q25 35 30 40 Q35 45 30 50 Q25 55 20 50 Q15 45 20 40" 
                    stroke="var(--illustration-hands)" 
                    strokeWidth="2" 
                    fill="none"
                  />
                  
                  {/* Right hand */}
                  <path 
                    d="M100 40 Q95 35 90 40 Q85 45 90 50 Q95 55 100 50 Q105 45 100 40" 
                    stroke="var(--illustration-hands)" 
                    strokeWidth="2" 
                    fill="none"
                  />
                  
                  {/* Fingers */}
                  <path d="M25 45 L22 50" stroke="var(--illustration-hands)" strokeWidth="1.5" />
                  <path d="M30 45 L28 52" stroke="var(--illustration-hands)" strokeWidth="1.5" />
                  <path d="M95 45 L98 50" stroke="var(--illustration-hands)" strokeWidth="1.5" />
                  <path d="M90 45 L92 52" stroke="var(--illustration-hands)" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
