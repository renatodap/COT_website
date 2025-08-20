import { Metadata } from 'next';
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
import { generatePageMetadata, generateLocalBusinessSchema, generatePersonSchema } from '@/lib/metadata';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return generatePageMetadata(locale as 'pt' | 'en', 'home');
}

export default function HomePage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const businessSchema = generateLocalBusinessSchema(locale as 'pt' | 'en');
  const personSchema = generatePersonSchema(locale as 'pt' | 'en');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
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