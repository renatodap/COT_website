'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/omaki/omaki_coaching_on_court.jpg"
          alt="Carlos Omaki coaching on court"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <Badge variant="secondary" className="inline-flex">
            {t('badge')}
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white">
            {t('title')}
            <span className="block text-court-green mt-2">{t('subtitle')}</span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-lg">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/contato#agendar">{t('cta.primary')}</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
              <Link href="/filosofia">{t('cta.secondary')}</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/omaki/clube_paulistano.jpg"
              alt="Clube Paulistano"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/omaki/omaki_athletes_academy.jpg"
              alt="Omaki Athletes Academy"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/omaki/omaki_stefani.jpeg"
              alt="Luisa Stefani"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/omaki/trophy.webp"
              alt="Trophy"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}