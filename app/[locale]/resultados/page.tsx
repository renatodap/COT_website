import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Trophy, Medal, Star } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'results' });
  const { generatePageMetadata } = await import('@/lib/metadata');
  
  return generatePageMetadata(locale as 'pt' | 'en', 'results', {
    title: t('meta.title'),
    description: t('meta.description'),
  });
}

export default function ResultsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('results');
  const { generateBreadcrumbSchema } = require('@/lib/metadata');
  
  const breadcrumbSchema = generateBreadcrumbSchema(locale as 'pt' | 'en', [
    { name: locale === 'en' ? 'Home' : 'Início', url: `/${locale}` },
    { name: locale === 'en' ? 'Results' : 'Resultados', url: `/${locale}/resultados` }
  ]);

  const featuredAthletes = [
    {
      name: 'Bia Haddad Maia',
      image: '/omaki/omaki_biahaddad.webp',
      ranking: 'Top 15 WTA',
      achievements: [
        'Grand Slam Quartas de Final',
        'WTA 500 Birmingham Campeã',
        'WTA 500 Nottingham Campeã',
        'Fed Cup Representante',
      ],
      metrics: {
        utr: 'UTR +5 em 3 anos',
        wins: '150+ vitórias profissionais',
      },
    },
    {
      name: 'Luisa Stefani',
      image: '/omaki/omaki_stefani.webp',
      ranking: 'Top 10 Duplas WTA',
      achievements: [
        'US Open Campeã de Duplas',
        'Australian Open Finalista',
        'Olympics Tokyo 2020',
        '4 títulos WTA',
      ],
      metrics: {
        titles: '11 títulos profissionais',
        wins: '200+ vitórias em duplas',
      },
    },
  ];

  const categories = [
    {
      title: t('categories.professional'),
      icon: Trophy,
      athletes: [
        { name: 'Atleta 1', achievement: 'ATP 250 Semifinal' },
        { name: 'Atleta 2', achievement: 'WTA 125 Quartas' },
        { name: 'Atleta 3', achievement: 'ITF Pro Circuit Campeão' },
      ],
    },
    {
      title: t('categories.junior'),
      icon: Medal,
      athletes: [
        { name: 'Junior 1', achievement: 'Campeão Brasileiro Sub-18' },
        { name: 'Junior 2', achievement: 'Top 100 ITF Junior' },
        { name: 'Junior 3', achievement: 'Orange Bowl Semifinal' },
      ],
    },
    {
      title: t('categories.college'),
      icon: Star,
      athletes: [
        { name: 'College 1', achievement: 'Division I Full Scholarship' },
        { name: 'College 2', achievement: 'All-American Honors' },
        { name: 'College 3', achievement: 'NCAA Champion' },
      ],
    },
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
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
              {t('featured.title')}
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredAthletes.map((athlete) => (
                <Card key={athlete.name} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={athlete.image}
                      alt={athlete.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-court-green text-white">
                        {athlete.ranking}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl">{athlete.name}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-charcoal mb-3">{t('achievements')}</h4>
                      <ul className="space-y-2">
                        {athlete.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <Trophy className="w-4 h-4 text-court-green mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(athlete.metrics).map(([key, value]) => (
                        <div key={key} className="bg-snow p-3 rounded-lg text-center">
                          <div className="font-semibold text-court-green">{value}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-snow">
          <Container>
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
              {t('categories.title')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <div key={category.title}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-court-green rounded-full flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.athletes.map((athlete, index) => (
                      <Card key={index} className="p-4">
                        <h4 className="font-semibold text-charcoal mb-1">{athlete.name}</h4>
                        <p className="text-sm text-gray-600">{athlete.achievement}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="bg-gradient-to-r from-court-green to-court-green/80 rounded-lg p-12 text-white text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">
                {t('stats.title')}
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <p className="opacity-90">{t('stats.athletes')}</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <p className="opacity-90">{t('stats.professionals')}</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <p className="opacity-90">{t('stats.scholarships')}</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <p className="opacity-90">{t('stats.titles')}</p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="bg-snow">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
                {t('testimonials.title')}
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <Card className="p-8">
                  <blockquote className="text-lg text-gray-600 italic mb-4">
                    &ldquo;{t('testimonials.quote1')}&rdquo;
                  </blockquote>
                  <cite className="text-charcoal font-semibold">— Bia Haddad Maia</cite>
                </Card>
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