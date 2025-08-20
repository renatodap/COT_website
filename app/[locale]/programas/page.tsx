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
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Users, Trophy, Calendar, Globe } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'programs' });
  const { generatePageMetadata } = await import('@/lib/metadata');
  
  return generatePageMetadata(locale as 'pt' | 'en', 'programs', {
    title: t('meta.title'),
    description: t('meta.description'),
  });
}

export default function ProgramsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('programs');
  const { generateBreadcrumbSchema, generateCourseSchema } = require('@/lib/metadata');
  
  const breadcrumbSchema = generateBreadcrumbSchema(locale as 'pt' | 'en', [
    { name: locale === 'en' ? 'Home' : 'Início', url: `/${locale}` },
    { name: locale === 'en' ? 'Programs' : 'Programas', url: `/${locale}/programas` }
  ]);
  
  const courseSchema = generateCourseSchema(
    locale as 'pt' | 'en',
    locale === 'en' ? 'Tennis Training Programs' : 'Programas de Treinamento de Tênis',
    locale === 'en' ? 'Professional tennis training programs for all levels' : 'Programas profissionais de treinamento de tênis para todos os níveis'
  );

  const programs = [
    {
      key: 'juniors',
      icon: Users,
      image: '/omaki/omaki_team.webp',
      features: ['feature1', 'feature2', 'feature3', 'feature4'],
      href: '/programas/juniors',
    },
    {
      key: 'adults',
      icon: Trophy,
      image: '/omaki/omaki_coaching_on_court.webp',
      features: ['feature1', 'feature2', 'feature3', 'feature4'],
      href: '/programas/adultos',
    },
    {
      key: 'clinics',
      icon: Calendar,
      image: '/omaki/clube_paulistano.webp',
      features: ['feature1', 'feature2', 'feature3'],
      href: '/programas/clinicas',
    },
    {
      key: 'online',
      icon: Globe,
      image: '/omaki/omaki_travel.webp',
      features: ['feature1', 'feature2', 'feature3'],
      href: '/programas/online',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
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

        <Section>
          <Container>
            <div className="grid gap-12">
              {programs.map((program, index) => (
                <div 
                  key={program.key}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-court-green rounded-full flex items-center justify-center">
                            <program.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{t(`${program.key}.title`)}</CardTitle>
                            <CardDescription className="text-base">
                              {t(`${program.key}.audience`)}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-6">
                          {t(`${program.key}.description`)}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-charcoal mb-3">{t('includes')}</h4>
                          <ul className="space-y-2">
                            {program.features.map((feature) => (
                              <li key={feature} className="flex items-start">
                                <span className="w-2 h-2 bg-court-green rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span className="text-gray-600">
                                  {t(`${program.key}.${feature}`)}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button className="w-full" asChild>
                          <Link href={program.href}>{t('cta')}</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}>
                    <Image
                      src={program.image}
                      alt={t(`${program.key}.title`)}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-charcoal text-white">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {t('cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contato#agendar">{t('cta.button')}</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 text-white border-white hover:bg-white/20"
                  asChild
                >
                  <Link href="/filosofia">{t('cta.philosophy')}</Link>
                </Button>
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