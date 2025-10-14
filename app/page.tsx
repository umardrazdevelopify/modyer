import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import HeritageMeetsHorizon from './components/HeritageMeetsHorizon';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <HeritageMeetsHorizon />
      <CTA />
      <Footer />
    </div>
  );
}
