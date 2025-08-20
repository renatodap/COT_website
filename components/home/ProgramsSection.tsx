'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function ProgramsSection() {
  const t = useTranslations('programs');

  const programs = [
    {
      key: 'juniors',
      image: '/omaki/omaki_team.jpg',
      href: '/programas/juniors',
    },
    {
      key: 'adults',
      image: '/omaki/omaki_coaching_on_court.jpg',
      href: '/programas/adultos',
    },
    {
      key: 'clinics',
      image: '/omaki/clube_paulistano.jpg',
      href: '/programas/clinicas',
    },
    {
      key: 'online',
      image: '/omaki/omaki_travel.jpg',
      href: '/programas/online',
    },
  ];

  return (
    <section className="py-20 bg-snow">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-all">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={program.image}
                    alt={t(`${program.key}.title`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    {t(`${program.key}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t(`${program.key}.description`)}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={program.href}>{t('cta')}</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}