'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.startsWith('/en') ? 'en' : 'pt';
  const targetLocale = currentLocale === 'pt' ? 'en' : 'pt';

  const switchLocale = () => {
    const segments = pathname.split('/');
    if (segments[1] === 'en' || segments[1] === 'pt') {
      segments[1] = targetLocale;
    } else {
      segments.splice(1, 0, targetLocale);
    }
    const newPath = segments.join('/').replace('//', '/');
    router.push(newPath);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLocale}
      className="gap-2"
    >
      <Globe className="w-4 h-4" />
      {currentLocale === 'pt' ? 'EN' : 'PT'}
    </Button>
  );
}