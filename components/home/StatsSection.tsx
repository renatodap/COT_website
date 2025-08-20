'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Trophy, Users, Heart } from 'lucide-react';

export function StatsSection() {
  const t = useTranslations('stats');

  const stats = [
    {
      icon: Users,
      label: t('athletes'),
      color: 'text-court-green',
    },
    {
      icon: Trophy,
      label: t('award'),
      color: 'text-clay-red',
    },
    {
      icon: Heart,
      label: t('projects'),
      color: 'text-court-green',
    },
  ];

  return (
    <section className="py-16 bg-snow">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <p className="text-lg font-semibold text-charcoal">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}