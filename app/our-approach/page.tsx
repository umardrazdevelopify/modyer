import Image from 'next/image';

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
          <div className="space-y-8">
            {/* Top Row - 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Card 1: Partners, Not Providers - Image Top */}
                  <div className="group rounded-2xl p-8 border-2 border-transparent hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105" style={{backgroundColor: "#f3e0c2"}}>
                    <div className="text-center space-y-6">
                      <div className="flex items-center justify-center w-32 h-32 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Image 
                          src="/assets/our approach/our approach 1.png" 
                          alt="Partners, Not Providers" 
                          width={120}
                          height={120}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-4 group-hover:text-teal-600 transition-colors">
                          Partners, Not Providers
                        </h3>
                        <p className="text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
                          We integrate with your team to understand your challenges deeply. Your goals become our goals. We succeed when you succeed, building a long-term relationship founded on mutual trust.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Pragmatic AI - Image Top */}
                  <div className="group rounded-2xl p-8 border-2 border-transparent hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105" style={{backgroundColor: "#ccddd7"}}>
                    <div className="text-center space-y-6">
                      <div className="flex items-center justify-center w-32 h-32 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Image 
                          src="/assets/our approach/our approach 2.png" 
                          alt="Pragmatic AI" 
                          width={120}
                          height={120}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-4 group-hover:text-teal-600 transition-colors">
                          Pragmatic, Human-in-the-Loop AI
                        </h3>
                        <p className="text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
                        We believe in practical innovation and view AI as a co-pilot for your business. Our solutions are designed to empower your team, not replace them. By keeping a human in the loop for critical decisions, we deliver the efficiency of automation with the accountability and expertise your business demands.
                        </p>
                      </div>
                    </div>
                  </div>
            </div>

            {/* Bottom Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 3: Best-of-Breed Technology - Image Top */}
                  <div className="group rounded-2xl p-8 border-2 border-transparent hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105" style={{backgroundColor: "#f3c9ac"}}>
                    <div className="text-center space-y-6">
                      <div className="flex items-center justify-center w-32 h-32 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Image 
                          src="/assets/our approach/our approach 3.png" 
                          alt="Best-of-Breed Technology" 
                          width={120}
                          height={120}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-4 group-hover:text-teal-600 transition-colors">
                          Best-of-Breed Technology
                        </h3>
                        <p className="text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
                          The best solution is the one that&apos;s right for you. As an independent firm with key partnerships, we are free to recommend the best technology for the job.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Phased Approach - Image Top */}
                  <div className="group rounded-2xl p-8 border-2 border-transparent hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105" style={{backgroundColor: "#ccddd7"}}>
                    <div className="text-center space-y-6">
                      <div className="flex items-center justify-center w-32 h-32 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Image 
                          src="/assets/our approach/our approach 4.png" 
                          alt="Phased Approach" 
                          width={120}
                          height={120}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-4 group-hover:text-teal-600 transition-colors">
                          A Phased Approach to Modernization
                        </h3>
                        <p className="text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
                        Transformation is a journey, not a switch-flip. We work with you to identify the highest-impact areas first, delivering value in manageable phases to ensure smooth adoption, minimize risk, and generate momentum.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 5: Solutions for Every Scale - Image Top */}
                  <div className="group rounded-2xl p-8 border-2 border-transparent hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105" style={{backgroundColor: "#f3c9ac"}}>
                    <div className="text-center space-y-6">
                      <div className="flex items-center justify-center w-32 h-32 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Image 
                          src="/assets/our approach/our approach 5.png" 
                          alt="Solutions for Every Scale" 
                          width={120}
                          height={120}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-4 group-hover:text-teal-600 transition-colors">
                          Solutions for Every Scale
                        </h3>
                        <p className="text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
                        From local firms to established enterprises, we believe powerful technology should be accessible to all. Our phased, modular approach allows us to tailor solutions that fit your scale, your needs, and your budget, ensuring a tangible return on your investment.
                        </p>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
