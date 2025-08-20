'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Target, Brain, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function PhilosophySection() {
  const t = useTranslations('philosophy');

  const pillars = [
    {
      icon: Target,
      title: t('technique.title'),
      description: t('technique.description'),
      color: 'bg-court-green',
    },
    {
      icon: Brain,
      title: t('competition.title'),
      description: t('competition.description'),
      color: 'bg-charcoal',
    },
    {
      icon: Heart,
      title: t('formation.title'),
      description: t('formation.description'),
      color: 'bg-clay-red',
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
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 rounded-full ${pillar.color} flex items-center justify-center mb-4`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600">
                  {pillar.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}