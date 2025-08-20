'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function PressSection() {
  const t = useTranslations('press');

  const pressItems = [
    {
      title: 'Carlos Omaki: O Formador de Campeões',
      outlet: 'TenisBrasil',
      date: '2024-01-15',
      url: '#',
    },
    {
      title: 'Método Omaki revoluciona o tênis juvenil',
      outlet: 'Tênis News',
      date: '2023-12-10',
      url: '#',
    },
    {
      title: 'Podcast: 40 anos de tênis brasileiro',
      outlet: 'SportCast',
      date: '2023-11-20',
      url: '#',
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-lg overflow-hidden"
          >
            <Image
              src="/omaki/omaki_federer.jpg"
              alt="Carlos Omaki com Roger Federer"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-sm">Uso editorial/arquivo pessoal</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {pressItems.map((item, index) => (
              <Card key={index} className="p-4">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal group-hover:text-court-green transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.outlet} • {new Date(item.date).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-court-green transition-colors mt-1" />
                </a>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}