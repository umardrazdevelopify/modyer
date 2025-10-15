'use client';

import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    workEmail: '',
    biggestChallenge: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-16 pt-20 pb-16 bg-[var(--nav-bg)]">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--hero-text)] font-sans mb-6">
            Let&apos;s Build <span className="relative" style={{color: "#F6A100"}}>Clarity.<span className="absolute bottom-0 left-0 w-full h-1 bg-[#F6A100]"></span></span>
          </h1>
          <p className="text-xl text-[var(--hero-text)] font-sans opacity-80 max-w-3xl mx-auto leading-relaxed">
            Tell us your biggest operational challenge. We&apos;ll schedule a complimentary, no-obligation process review with a senior systems analyst to explore how we can help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full px-4 md:px-16 py-16 bg-[var(--nav-bg)]">
        <div className="w-full max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-lg font-medium text-[var(--hero-text)] font-sans mb-3">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors text-[var(--hero-text)] font-sans"
                placeholder="Enter your full name"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-lg font-medium text-[var(--hero-text)] font-sans mb-3">
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors text-[var(--hero-text)] font-sans"
                placeholder="Enter your company name"
              />
            </div>

            {/* Work Email */}
            <div>
              <label htmlFor="workEmail" className="block text-lg font-medium text-[var(--hero-text)] font-sans mb-3">
                Work Email *
              </label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors text-[var(--hero-text)] font-sans"
                placeholder="Enter your work email"
              />
            </div>

            {/* Your Biggest Challenge */}
            <div>
              <label htmlFor="biggestChallenge" className="block text-lg font-medium text-[var(--hero-text)] font-sans mb-3">
                Your Biggest Challenge *
              </label>
              <textarea
                id="biggestChallenge"
                name="biggestChallenge"
                value={formData.biggestChallenge}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors text-[var(--hero-text)] font-sans resize-vertical"
                placeholder="Describe your biggest operational challenge in detail..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-[var(--nav-bg)] border-2 border-teal-500 px-8 py-4 rounded-lg font-bold text-lg  transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="text-teal-600">Begin the</span> <span className="text-[#F6A100]">Conversation</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
