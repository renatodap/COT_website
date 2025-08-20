import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Heart, Users, Trophy, ExternalLink } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'projects' });
  const { generatePageMetadata } = await import('@/lib/metadata');
  
  return generatePageMetadata(locale as 'pt' | 'en', 'projects', {
    title: t('meta.title'),
    description: t('meta.description'),
  });
}

export default function ProjectsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('projects');
  const { generateBreadcrumbSchema } = require('@/lib/metadata');
  
  const breadcrumbSchema = generateBreadcrumbSchema(locale as 'pt' | 'en', [
    { name: locale === 'en' ? 'Home' : 'Início', url: `/${locale}` },
    { name: locale === 'en' ? 'Projects' : 'Projetos', url: `/${locale}/projetos` }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-16">
        <Breadcrumbs />
        
        <Section className="bg-gradient-to-b from-court-green/10 to-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-heading font-bold text-charcoal mb-6">
                {t('title')}
              </h1>
              <p className="text-xl text-gray-600">
                {t('subtitle')}
              </p>
            </div>
          </Container>
        </Section>

        <Section id="instituto">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-court-green rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-charcoal">
                    {t('institute.title')}
                  </h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">
                  {t('institute.description')}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-snow p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-court-green mb-2">1000+</div>
                    <p className="text-gray-600">{t('institute.impact.students')}</p>
                  </div>
                  <div className="bg-snow p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-court-green mb-2">200</div>
                    <p className="text-gray-600">{t('institute.impact.annual')}</p>
                  </div>
                  <div className="bg-snow p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-court-green mb-2">15</div>
                    <p className="text-gray-600">{t('institute.impact.years')}</p>
                  </div>
                  <div className="bg-snow p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-court-green mb-2">85%</div>
                    <p className="text-gray-600">{t('institute.impact.retention')}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-charcoal">{t('institute.programs.title')}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-court-green mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{t('institute.programs.item1')}</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="w-5 h-5 text-court-green mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{t('institute.programs.item2')}</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 text-court-green mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{t('institute.programs.item3')}</span>
                    </li>
                  </ul>
                </div>
                
                <Button size="lg" asChild>
                  <Link href="/contato">{t('institute.cta')}</Link>
                </Button>
              </div>
              
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/omaki/omaki_team.webp"
                  alt={t('institute.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </Section>

        <Section id="memorial" className="bg-snow">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/omaki/omaki_kyrmair.webp"
                  alt={t('memorial.imageAlt')}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm">{t('memorial.imageCredit')}</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                  {t('memorial.title')}
                </h2>
                <p className="text-court-green font-semibold text-lg mb-6">
                  {t('memorial.role')}
                </p>
                
                <p className="text-gray-600 mb-6">
                  {t('memorial.description')}
                </p>
                
                <div className="bg-white p-6 rounded-lg mb-8">
                  <h3 className="font-semibold text-charcoal mb-4">{t('memorial.mission.title')}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-court-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{t('memorial.mission.item1')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-court-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{t('memorial.mission.item2')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-court-green rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{t('memorial.mission.item3')}</span>
                    </li>
                  </ul>
                </div>
                
                <Button size="lg" asChild>
                  <a 
                    href="https://memorialdotenisbrasileiro.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    {t('memorial.cta')}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="bg-charcoal text-white">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">
                {t('impact.title')}
              </h2>
              <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
                {t('impact.subtitle')}
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl font-bold text-court-green mb-4">40+</div>
                  <p className="text-lg">{t('impact.years')}</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-court-green mb-4">5000+</div>
                  <p className="text-lg">{t('impact.lives')}</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-court-green mb-4">∞</div>
                  <p className="text-lg">{t('impact.legacy')}</p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}