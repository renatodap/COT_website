'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function ResultsSection() {
  const t = useTranslations('results');

  const cases = [
    {
      name: 'Bia Haddad',
      achievement: 'Top 15 WTA',
      image: '/omaki/omaki_biahaddad.jpg',
      metrics: ['UTR +5', 'Grand Slam QF'],
    },
    {
      name: 'Luisa Stefani',
      achievement: 'Top 10 Duplas WTA',
      image: '/omaki/omaki_stefani.jpeg',
      metrics: ['US Open Campeã', 'Olympics'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-heading font-bold text-charcoal mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={caseItem.image}
                        alt={caseItem.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6">
                    <h3 className="text-2xl font-semibold text-charcoal mb-2">
                      {caseItem.name}
                    </h3>
                    <p className="text-court-green font-semibold mb-4">
                      {caseItem.achievement}
                    </p>
                    <div className="space-y-2">
                      {caseItem.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-court-green rounded-full mr-2" />
                          <span className="text-gray-600">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/resultados">{t('viewMore')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}