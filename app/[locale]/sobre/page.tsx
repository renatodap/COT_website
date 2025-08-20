import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'about' });
  const { generatePageMetadata } = await import('@/lib/metadata');
  
  return generatePageMetadata(locale as 'pt' | 'en', 'about', {
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: {
      type: 'profile',
      firstName: 'Carlos',
      lastName: 'Omaki',
    },
  });
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('about');
  const { generatePersonSchema, generateBreadcrumbSchema } = require('@/lib/metadata'); // eslint-disable-line @typescript-eslint/no-require-imports
  
  const personSchema = generatePersonSchema(locale as 'pt' | 'en');
  const breadcrumbSchema = generateBreadcrumbSchema(locale as 'pt' | 'en', [
    { name: locale === 'en' ? 'Home' : 'Início', url: `/${locale}` },
    { name: locale === 'en' ? 'About' : 'Sobre', url: `/${locale}/sobre` }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-16">
        <Breadcrumbs />
        
        <Section className="bg-snow">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  {t('badge')}
                </Badge>
                <h1 className="text-5xl font-heading font-bold text-charcoal mb-6">
                  {t('title')}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  {t('intro')}
                </p>
                <p className="text-gray-600">
                  {t('description')}
                </p>
              </div>
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/omaki/omaki_coaching_on_court.webp"
                  alt="Carlos Omaki"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">
              {t('journey.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-snow p-6 rounded-lg">
                <div className="text-4xl font-bold text-court-green mb-2">1980</div>
                <h3 className="font-semibold mb-2">{t('journey.start.title')}</h3>
                <p className="text-gray-600">{t('journey.start.description')}</p>
              </div>
              <div className="bg-snow p-6 rounded-lg">
                <div className="text-4xl font-bold text-court-green mb-2">2000</div>
                <h3 className="font-semibold mb-2">{t('journey.growth.title')}</h3>
                <p className="text-gray-600">{t('journey.growth.description')}</p>
              </div>
              <div className="bg-snow p-6 rounded-lg">
                <div className="text-4xl font-bold text-court-green mb-2">2024</div>
                <h3 className="font-semibold mb-2">{t('journey.legacy.title')}</h3>
                <p className="text-gray-600">{t('journey.legacy.description')}</p>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="bg-charcoal text-white">
          <Container>
            <h2 className="text-3xl font-heading font-bold mb-8">
              {t('achievements.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-court-green">
                  {t('achievements.coaching.title')}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-court-green rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{t('achievements.coaching.item1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-court-green rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{t('achievements.coaching.item2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-court-green rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{t('achievements.coaching.item3')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-court-green">
                  {t('achievements.social.title')}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-court-green rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{t('achievements.social.item1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-court-green rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{t('achievements.social.item2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-court-green rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{t('achievements.social.item3')}</span>
                  </li>
                </ul>
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