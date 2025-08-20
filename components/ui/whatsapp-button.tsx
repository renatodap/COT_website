'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export function WhatsAppButton() {
  const t = useTranslations('contact.whatsapp');
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || '5511999999999';
  const message = encodeURIComponent(t('message'));
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "bg-green-500 hover:bg-green-600 text-white",
        "p-4 rounded-full shadow-lg",
        "transition-all duration-300 hover:scale-110",
        "flex items-center justify-center"
      )}
      aria-label={t('button')}
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}