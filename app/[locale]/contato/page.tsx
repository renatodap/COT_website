import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import { CalendarEmbed } from '@/components/integrations/CalendarEmbed';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'contact' });
  const { generatePageMetadata } = await import('@/lib/metadata');
  
  return generatePageMetadata(locale as 'pt' | 'en', 'contact', {
    title: t('meta.title'),
    description: t('meta.description'),
  });
}

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('contact');
  const { generateBreadcrumbSchema, generateLocalBusinessSchema } = require('@/lib/metadata');
  
  const breadcrumbSchema = generateBreadcrumbSchema(locale as 'pt' | 'en', [
    { name: locale === 'en' ? 'Home' : 'Início', url: `/${locale}` },
    { name: locale === 'en' ? 'Contact' : 'Contato', url: `/${locale}/contato` }
  ]);
  
  const businessSchema = generateLocalBusinessSchema(locale as 'pt' | 'en');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
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
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                  {t('form.title')}
                </h2>
                <ContactForm />
              </div>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    {t('info.title')}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-court-green mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-charcoal">{t('location.title')}</p>
                        <p className="text-gray-600">
                          Clube Paulistano<br />
                          São Paulo, SP
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-court-green mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-charcoal">WhatsApp</p>
                        <p className="text-gray-600">+55 11 99999-9999</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-court-green mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-charcoal">E-mail</p>
                        <p className="text-gray-600">contato@carlosomaki.com.br</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-court-green mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-charcoal">{t('hours.title')}</p>
                        <p className="text-gray-600">
                          {t('hours.weekdays')}<br />
                          {t('hours.saturday')}<br />
                          {t('hours.sunday')}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-court-green text-white">
                  <h3 className="text-xl font-semibold mb-4">
                    {t('whatsapp.title')}
                  </h3>
                  <p className="mb-4 opacity-90">
                    {t('whatsapp.description')}
                  </p>
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=${encodeURIComponent(t('whatsapp.message'))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-court-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    {t('whatsapp.button')}
                  </a>
                </Card>
              </div>
            </div>
          </Container>
        </Section>

        <Section id="agendar" className="bg-snow">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-6 text-center">
                {t('calendar.title')}
              </h2>
              <p className="text-center text-gray-600 mb-8">
                {t('calendar.subtitle')}
              </p>
              <CalendarEmbed />
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5406!2d-46.6823!3d-23.5492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzU3LjEiUyA0NsKwNDAnNTYuMyJX!5e0!3m2!1sen!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('map.title')}
              />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}