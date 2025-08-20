'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils/cn';

export function Breadcrumbs({ className }: { className?: string }) {
  const pathname = usePathname();
  const t = useTranslations('nav');
  
  // Remove locale from path
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '');
  const segments = pathWithoutLocale.split('/').filter(Boolean);
  
  if (segments.length === 0) return null;

  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = t(segment) || segment;
    
    return { href, label, segment };
  });

  return (
    <nav 
      aria-label="Breadcrumb"
      className={cn("bg-snow border-b", className)}
    >
      <div className="container mx-auto px-6 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              href="/" 
              className="text-gray-500 hover:text-court-green transition-colors"
              aria-label={t('home')}
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.segment}>
              <li>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </li>
              <li>
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-charcoal font-medium" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link 
                    href={crumb.href}
                    className="text-gray-500 hover:text-court-green transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumbs;