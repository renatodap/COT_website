'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function ProjectsSection() {
  const t = useTranslations('projects');

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

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-semibold text-charcoal mb-4">
                {t('institute.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('institute.description')}
              </p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-court-green">200+</p>
                <p className="text-gray-600">
                  {t('institute.impact', { count: 200 })}
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/projetos#instituto">{t('institute.cta')}</Link>
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full">
              <div className="aspect-video relative mb-6">
                <Image
                  src="/omaki/omaki_kyrmair.jpg"
                  alt="Memorial do Tênis Brasileiro"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-charcoal mb-2">
                {t('memorial.title')}
              </h3>
              <p className="text-court-green font-semibold mb-4">
                {t('memorial.role')}
              </p>
              <p className="text-gray-600 mb-6">
                {t('memorial.description')}
              </p>
              <Button asChild>
                <a href="https://memorialdotenisbrasileiro.com.br" target="_blank" rel="noopener noreferrer">
                  {t('memorial.cta')}
                </a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}