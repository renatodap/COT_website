import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('error');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
          {t('404.title')}
        </h2>
        <p className="text-gray-600 mb-8">
          {t('404.description')}
        </p>
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            {t('404.back')}
          </Link>
        </Button>
      </div>
    </div>
  );
}