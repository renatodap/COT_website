import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { PhilosophySection } from '@/components/home/PhilosophySection';
import { ProgramsSection } from '@/components/home/ProgramsSection';
import { ResultsSection } from '@/components/home/ResultsSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { PressSection } from '@/components/home/PressSection';
import { CTASection } from '@/components/home/CTASection';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <PhilosophySection />
        <ProgramsSection />
        <ResultsSection />
        <ProjectsSection />
        <PressSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}