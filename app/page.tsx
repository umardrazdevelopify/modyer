import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <HeroSection />
    </div>
  );
}
