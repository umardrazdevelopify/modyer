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
                <div className="w-80 h-80 rounded-lg flex items-center justify-center ">
                  <Image 
                    src="/assets/about-us/our story .png" 
                    alt="Our Story" 
                    width={320}
                    height={320}
                    className="w-full h-full object-contain"
                  />
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
                <div className="w-80 h-80 rounded-lg flex items-center justify-center ">
                  <Image 
                    src="/assets/about-us/our team.png" 
                    alt="Our Team" 
                    width={320}
                    height={320}
                    className="w-full h-full object-contain"
                  />
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
            <div className="group rounded-2xl p-8 border-2 border-transparent hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl " style={{backgroundColor: "#f3e0c2"}}>
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center w-32 h-32 mx-auto ">
                  <Image 
                    src="/assets/about-us/vissionn.png" 
                    alt="Our Vision" 
                    width={120}
                    height={120}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-4 group-hover:text-teal-600 transition-colors">
                    Our Vision
                  </h3>
                  <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
                    To redefine how businesses navigate complexity by building intelligent, adaptable, and future-proof solutions that empower strategic growth across industries.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group rounded-2xl p-8 border-2 border-transparent hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl " style={{backgroundColor: "#ccddd7"}}>
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center w-32 h-32 mx-auto ">
                  <Image 
                    src="/assets/about-us/mission.png" 
                    alt="Our Mission" 
                    width={120}
                    height={120}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--hero-text)] font-sans mb-4 group-hover:text-teal-600 transition-colors">
                    Our Mission
                  </h3>
                  <p className="text-lg text-[var(--hero-text)] font-sans opacity-80 leading-relaxed">
                    We deliver cutting-edge strategic intelligence by combining data, design, and modular technology. Through deep insights, innovation, and tailored systems, we help our partners make smarter decisions, faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   

    </div>
  );
}
