import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import HeritageMeetsHorizon from './components/HeritageMeetsHorizon';
import CTA from './components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <HeroSection />
      <TrustBar />
      <HeritageMeetsHorizon />
      <CTA />
    </div>
  );
}
