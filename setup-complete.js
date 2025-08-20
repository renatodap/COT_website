const fs = require('fs');
const path = require('path');

// Helper function to create directories
function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Helper function to write files
function writeFile(filePath, content) {
  ensureDir(filePath);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${filePath}`);
}

// Component files content
const files = {
  // Main layout for internationalization
  'app/[locale]/layout.tsx': `import { Inter, Sora } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';
import { locales } from '@/i18n';
import '../globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['600', '700'],
});

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={\`\${inter.variable} \${sora.variable}\`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}`,

  // Home page
  'app/[locale]/page.tsx': `import { useTranslations } from 'next-intl';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { PhilosophySection } from '@/components/home/PhilosophySection';
import { ProgramsSection } from '@/components/home/ProgramsSection';
import { ResultsSection } from '@/components/home/ResultsSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { PressSection } from '@/components/home/PressSection';
import { CTASection } from '@/components/home/CTASection';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <PhilosophySection />
        <ProgramsSection />
        <ResultsSection />
        <ProjectsSection />
        <PressSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}`,

  // Hero Section Component
  'components/home/HeroSection.tsx': `'use client';

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
          src="/omaki/omaki_coaching_on_court.webp"
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
              src="/omaki/clube_paulistano.webp"
              alt="Clube Paulistano"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/omaki/omaki_athletes_academy.webp"
              alt="Omaki Athletes Academy"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/omaki/omaki_stefani.webp"
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
}`,

  // Badge Component
  'components/ui/badge.tsx': `import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };`,

  // Navbar Component
  'components/layout/Navbar.tsx': `'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
}`,

  // Language Switcher Component
  'components/ui/lang-switcher.tsx': `'use client';

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
}`,

  // WhatsApp Button Component
  'components/ui/whatsapp-button.tsx': `'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export function WhatsAppButton() {
  const t = useTranslations('contact.whatsapp');
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || '5511999999999';
  const message = encodeURIComponent(t('message'));
  const whatsappUrl = \`https://wa.me/\${whatsappNumber}?text=\${message}\`;

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
}`,

  // Footer Component
  'components/layout/Footer.tsx': `'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Carlos Omaki</h3>
            <p className="text-gray-400">
              40+ anos formando campeões
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/sobre" className="hover:text-white">Sobre</Link></li>
              <li><Link href="/programas" className="hover:text-white">Programas</Link></li>
              <li><Link href="/resultados" className="hover:text-white">Resultados</Link></li>
              <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Projetos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/projetos#instituto" className="hover:text-white">Instituto Primeiro Serviço</Link></li>
              <li><Link href="/projetos#memorial" className="hover:text-white">Memorial do Tênis</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/politicas/privacidade" className="hover:text-white">{t('policies.privacy')}</Link></li>
              <li><Link href="/politicas/termos" className="hover:text-white">{t('policies.terms')}</Link></li>
              <li><Link href="/politicas/imagem" className="hover:text-white">{t('policies.imageRights')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Carlos Omaki. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}`,

  // Stats Section
  'components/home/StatsSection.tsx': `'use client';

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
              <stat.icon className={\`w-12 h-12 mx-auto mb-4 \${stat.color}\`} />
              <p className="text-lg font-semibold text-charcoal">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // Other necessary sections would continue here...
};

// Create all files
Object.entries(files).forEach(([filePath, content]) => {
  const fullPath = path.join(__dirname, filePath);
  writeFile(fullPath, content);
});

console.log('\\n✅ Setup complete! All files have been created.');
console.log('\\nNext steps:');
console.log('1. Copy your images to public/omaki/');
console.log('2. Run: npm run dev');
console.log('3. Visit: http://localhost:3000');