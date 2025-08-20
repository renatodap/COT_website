'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LangSwitcher } from '@/components/ui/lang-switcher';
import { cn } from '@/lib/utils/cn';

export function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/sobre', label: t('about') },
    { href: '/filosofia', label: t('philosophy') },
    { href: '/programas', label: t('programs') },
    { href: '/projetos', label: t('projects') },
    { href: '/resultados', label: t('results') },
    { href: '/imprensa', label: t('press') },
    { href: '/artigos', label: t('articles') },
    { href: '/contato', label: t('contact') },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className={cn(
              "text-2xl font-heading font-bold",
              isScrolled ? "text-charcoal" : "text-white"
            )}>
              Carlos Omaki
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-court-green",
                  pathname === item.href ? "text-court-green" : 
                  isScrolled ? "text-charcoal" : "text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
            <LangSwitcher />
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={isScrolled ? "text-charcoal" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-charcoal" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white border-t"
        >
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium text-charcoal hover:text-court-green"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <LangSwitcher />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}