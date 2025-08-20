const fs = require('fs');
const path = require('path');

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeFile(filePath, content) {
  ensureDir(filePath);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${filePath}`);
}

const files = {
  // Philosophy Section
  'components/home/PhilosophySection.tsx': `'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Target, Brain, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function PhilosophySection() {
  const t = useTranslations('philosophy');

  const pillars = [
    {
      icon: Target,
      title: t('technique.title'),
      description: t('technique.description'),
      color: 'bg-court-green',
    },
    {
      icon: Brain,
      title: t('competition.title'),
      description: t('competition.description'),
      color: 'bg-charcoal',
    },
    {
      icon: Heart,
      title: t('formation.title'),
      description: t('formation.description'),
      color: 'bg-clay-red',
    },
  ];

  return (
    <section className="py-20 bg-white">
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

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className={\`w-16 h-16 rounded-full \${pillar.color} flex items-center justify-center mb-4\`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600">
                  {pillar.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // Programs Section
  'components/home/ProgramsSection.tsx': `'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function ProgramsSection() {
  const t = useTranslations('programs');

  const programs = [
    {
      key: 'juniors',
      image: '/omaki/omaki_team.webp',
      href: '/programas/juniors',
    },
    {
      key: 'adults',
      image: '/omaki/omaki_coaching_on_court.webp',
      href: '/programas/adultos',
    },
    {
      key: 'clinics',
      image: '/omaki/clube_paulistano.webp',
      href: '/programas/clinicas',
    },
    {
      key: 'online',
      image: '/omaki/omaki_travel.webp',
      href: '/programas/online',
    },
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-all">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={program.image}
                    alt={t(\`\${program.key}.title\`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    {t(\`\${program.key}.title\`)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t(\`\${program.key}.description\`)}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={program.href}>{t('cta')}</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // Results Section
  'components/home/ResultsSection.tsx': `'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function ResultsSection() {
  const t = useTranslations('results');

  const cases = [
    {
      name: 'Bia Haddad',
      achievement: 'Top 15 WTA',
      image: '/omaki/omaki_biahaddad.webp',
      metrics: ['UTR +5', 'Grand Slam QF'],
    },
    {
      name: 'Luisa Stefani',
      achievement: 'Top 10 Duplas WTA',
      image: '/omaki/omaki_stefani.webp',
      metrics: ['US Open Campeã', 'Olympics'],
    },
  ];

  return (
    <section className="py-20 bg-white">
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
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={caseItem.image}
                        alt={caseItem.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6">
                    <h3 className="text-2xl font-semibold text-charcoal mb-2">
                      {caseItem.name}
                    </h3>
                    <p className="text-court-green font-semibold mb-4">
                      {caseItem.achievement}
                    </p>
                    <div className="space-y-2">
                      {caseItem.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-court-green rounded-full mr-2" />
                          <span className="text-gray-600">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/resultados">{t('viewMore')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}`,

  // Projects Section
  'components/home/ProjectsSection.tsx': `'use client';

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
                  src="/omaki/omaki_kyrmair.webp"
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
}`,

  // Press Section
  'components/home/PressSection.tsx': `'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function PressSection() {
  const t = useTranslations('press');

  const pressItems = [
    {
      title: 'Carlos Omaki: O Formador de Campeões',
      outlet: 'TenisBrasil',
      date: '2024-01-15',
      url: '#',
    },
    {
      title: 'Método Omaki revoluciona o tênis juvenil',
      outlet: 'Tênis News',
      date: '2023-12-10',
      url: '#',
    },
    {
      title: 'Podcast: 40 anos de tênis brasileiro',
      outlet: 'SportCast',
      date: '2023-11-20',
      url: '#',
    },
  ];

  return (
    <section className="py-20 bg-white">
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
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-lg overflow-hidden"
          >
            <Image
              src="/omaki/omaki_federer.webp"
              alt="Carlos Omaki com Roger Federer"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-sm">Uso editorial/arquivo pessoal</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {pressItems.map((item, index) => (
              <Card key={index} className="p-4">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal group-hover:text-court-green transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.outlet} • {new Date(item.date).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-court-green transition-colors mt-1" />
                </a>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}`,

  // CTA Section
  'components/home/CTASection.tsx': `'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar } from 'lucide-react';

export function CTASection() {
  const t = useTranslations('contact');
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || '5511999999999';
  const message = encodeURIComponent(t('whatsapp.message'));
  const whatsappUrl = \`https://wa.me/\${whatsappNumber}?text=\${message}\`;

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
}`,

  // Card Component
  'components/ui/card.tsx': `import * as React from "react";
import { cn } from "@/lib/utils/cn";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };`,

  // Root layout fix
  'app/layout.tsx': `import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';

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

export const metadata: Metadata = {
  title: 'Carlos Omaki - Tênis, Método e Legado',
  description: 'Treinamento competitivo para infanto-juvenis e adultos. 40+ anos formando campeões. Projetos sociais e a memória do tênis brasileiro.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}`,

  // Sitemap config
  'next-sitemap.config.js': `/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://carlosomaki.com.br',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  alternateRefs: [
    {
      href: 'https://carlosomaki.com.br',
      hreflang: 'pt-BR',
    },
    {
      href: 'https://carlosomaki.com.br/en',
      hreflang: 'en',
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};`,

  // Create placeholder images
  'public/omaki/.gitkeep': '',

  // Sample content files
  'content/articles/metodo-omaki.mdx': `---
title: "O Método Omaki: 40 Anos de Excelência"
titleEN: "The Omaki Method: 40 Years of Excellence"
date: 2024-01-15
excerpt: "Conheça a metodologia que formou campeões como Bia Haddad e Luisa Stefani"
excerptEN: "Learn about the methodology that trained champions like Bia Haddad and Luisa Stefani"
category: methodology
author: Carlos Omaki
---

# O Método Omaki

Ao longo de quatro décadas dedicadas ao tênis...`,

  'content/policies/privacy.mdx': `---
title: "Política de Privacidade"
titleEN: "Privacy Policy"
lastUpdated: 2024-01-01
---

# Política de Privacidade

Esta política descreve como coletamos e usamos suas informações...`,
};

// Create all remaining files
Object.entries(files).forEach(([filePath, content]) => {
  const fullPath = path.join(__dirname, filePath);
  writeFile(fullPath, content);
});

console.log('\\n✅ All remaining components created!');
console.log('\\nWebsite structure is now complete.');
console.log('\\nFinal steps:');
console.log('1. Add images to public/omaki/');
console.log('2. Create .env.local with your environment variables');
console.log('3. Run: npm run dev');
console.log('4. Visit: http://localhost:3000');