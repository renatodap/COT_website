import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Target, Brain, Heart, Trophy, Users, TrendingUp } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'philosophy' });
  const { generatePageMetadata } = await import('@/lib/metadata');
  
  return generatePageMetadata(locale as 'pt' | 'en', 'philosophy', {
    title: t('meta.title'),
    description: t('meta.description'),
  });
}

export default function PhilosophyPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('philosophy');
  const { generateBreadcrumbSchema } = require('@/lib/metadata');
  
  const breadcrumbSchema = generateBreadcrumbSchema(locale as 'pt' | 'en', [
    { name: locale === 'en' ? 'Home' : 'Início', url: `/${locale}` },
    { name: locale === 'en' ? 'Philosophy' : 'Filosofia', url: `/${locale}/filosofia` }
  ]);

  const pillars = [
    {
      icon: Target,
      key: 'technique',
      color: 'bg-court-green',
    },
    {
      icon: Brain,
      key: 'competition',
      color: 'bg-charcoal',
    },
    {
      icon: Heart,
      key: 'formation',
      color: 'bg-clay-red',
    },
  ];

  const values = [
    { icon: Trophy, key: 'excellence' },
    { icon: Users, key: 'respect' },
    { icon: TrendingUp, key: 'evolution' },
  ];

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

        <Section>
          <Container>
            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow">
                  <div className={`w-20 h-20 rounded-full ${pillar.color} flex items-center justify-center mx-auto mb-6`}>
                    <pillar.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4">
                    {t(`${pillar.key}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t(`${pillar.key}.description`)}
                  </p>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-court-green rounded-full mt-2 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{t(`${pillar.key}.point1`)}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-court-green rounded-full mt-2 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{t(`${pillar.key}.point2`)}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-court-green rounded-full mt-2 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{t(`${pillar.key}.point3`)}</span>
                    </li>
                  </ul>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-snow">
          <Container>
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
              {t('method.title')}
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  {t('method.description')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-court-green text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">{t('method.step1.title')}</h4>
                      <p className="text-gray-600">{t('method.step1.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-court-green text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">{t('method.step2.title')}</h4>
                      <p className="text-gray-600">{t('method.step2.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-court-green text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">{t('method.step3.title')}</h4>
                      <p className="text-gray-600">{t('method.step3.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-court-green text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">{t('method.step4.title')}</h4>
                      <p className="text-gray-600">{t('method.step4.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/omaki/omaki_team.webp"
                  alt={t('method.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
              {t('values.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <value.icon className="w-12 h-12 text-court-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    {t(`values.${value.key}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`values.${value.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}