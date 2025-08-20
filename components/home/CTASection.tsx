'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar } from 'lucide-react';

export function CTASection() {
  const t = useTranslations('contact');
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || '5511999999999';
  const message = encodeURIComponent(t('whatsapp.message'));
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="py-20 bg-gradient-to-r from-court-green to-court-green/80">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contato#agendar">
                <Calendar className="mr-2" />
                Agendar Avaliação
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white hover:bg-white/20"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" />
                {t('whatsapp.button')}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}