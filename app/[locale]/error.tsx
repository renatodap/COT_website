'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('error');
  const params = useParams();
  const locale = params?.locale || 'pt';

  useEffect(() => {
    // Log error to console
    console.error('Error:', error);
    
    // Send error to monitoring service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        error_digest: error.digest,
      });
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error icon with animation */}
        <div className="relative mb-8">
          <div className="absolute inset-0 animate-ping">
            <AlertTriangle className="h-20 w-20 text-red-500/20 mx-auto" />
          </div>
          <AlertTriangle className="h-20 w-20 text-red-500 mx-auto relative" />
        </div>
        
        {/* Error message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {t('500.title')}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          {t('500.description')}
        </p>
        
        {/* Error details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm font-mono text-red-800">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-red-600 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={reset}
            className="bg-court-green hover:bg-court-green/90"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            {t('500.retry')}
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/${locale}`}>
              <Home className="h-4 w-4 mr-2" />
              {t('home')}
            </Link>
          </Button>
        </div>
        
        {/* Support info */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            {t('support')}
          </p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '5511999999999'}`}
            className="text-court-green hover:underline text-sm font-medium"
          >
            WhatsApp: +55 11 9999-9999
          </a>
        </div>
      </div>
    </div>
  );
}