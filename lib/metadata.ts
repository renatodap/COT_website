import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://carlosomaki.com.br';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Carlos Omaki Tennis - Formando Campeões há 40+ Anos',
    template: '%s | Carlos Omaki Tennis'
  },
  description: 'Treinamento de tênis competitivo com metodologia comprovada. Carlos Omaki, 40+ anos formando campeões como Bia Haddad e Luisa Stefani. Projetos sociais e memória do tênis brasileiro.',
  keywords: [
    'Carlos Omaki',
    'tênis',
    'treinamento de tênis',
    'tênis competitivo',
    'Bia Haddad',
    'Luisa Stefani',
    'método Omaki',
    'aulas de tênis',
    'tênis São Paulo',
    'formação de atletas',
    'tênis infantil',
    'tênis juvenil',
    'projetos sociais tênis',
    'memorial do tênis'
  ],
  authors: [{ name: 'Carlos Omaki' }],
  creator: 'Carlos Omaki Tennis',
  publisher: 'Carlos Omaki Tennis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    url: siteUrl,
    siteName: 'Carlos Omaki Tennis',
    title: 'Carlos Omaki Tennis - Formando Campeões há 40+ Anos',
    description: 'Treinamento de tênis competitivo com metodologia comprovada. Carlos Omaki, 40+ anos formando campeões.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Carlos Omaki Tennis - Formando Campeões',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Omaki Tennis - Formando Campeões há 40+ Anos',
    description: 'Treinamento de tênis competitivo com metodologia comprovada. 40+ anos formando campeões.',
    images: ['/og-image.jpg'],
    creator: '@carlosomaki',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'pt': `${siteUrl}/pt`,
      'en': `${siteUrl}/en`,
    },
  },
  other: {
    'theme-color': '#15803d',
    'color-scheme': 'light',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Carlos Omaki',
    'application-name': 'Carlos Omaki Tennis',
    'msapplication-TileColor': '#15803d',
    'msapplication-config': '/browserconfig.xml',
  }
};

// Page-specific metadata generators
export function generatePageMetadata(
  locale: 'pt' | 'en',
  page: string,
  customMeta?: Partial<Metadata>
): Metadata {
  const isEnglish = locale === 'en';
  
  const pageMetadata: Record<string, Metadata> = {
    home: {
      title: isEnglish 
        ? 'Carlos Omaki Tennis - Training Champions for 40+ Years'
        : 'Carlos Omaki Tennis - Formando Campeões há 40+ Anos',
      description: isEnglish
        ? 'Competitive tennis training with proven methodology. Carlos Omaki, 40+ years training champions like Bia Haddad and Luisa Stefani.'
        : 'Treinamento de tênis competitivo com metodologia comprovada. Carlos Omaki, 40+ anos formando campeões como Bia Haddad e Luisa Stefani.',
      openGraph: {
        title: isEnglish 
          ? 'Carlos Omaki Tennis - Training Champions for 40+ Years'
          : 'Carlos Omaki Tennis - Formando Campeões há 40+ Anos',
        description: isEnglish
          ? 'Competitive tennis training with proven methodology. 40+ years training champions.'
          : 'Treinamento de tênis competitivo com metodologia comprovada. 40+ anos formando campeões.',
      },
    },
    about: {
      title: isEnglish ? 'About Carlos Omaki' : 'Sobre Carlos Omaki',
      description: isEnglish
        ? 'Learn about Carlos Omaki, tennis coach with 40+ years of experience, trainer of champions like Bia Haddad and Luisa Stefani.'
        : 'Conheça Carlos Omaki, treinador de tênis com mais de 40 anos de experiência, formador de campeões como Bia Haddad e Luisa Stefani.',
      openGraph: {
        title: isEnglish ? 'About Carlos Omaki' : 'Sobre Carlos Omaki',
        description: isEnglish
          ? 'Tennis coach with 40+ years of experience, trainer of champions.'
          : 'Treinador de tênis com mais de 40 anos de experiência, formador de campeões.',
      },
    },
    philosophy: {
      title: isEnglish ? 'Training Philosophy' : 'Filosofia de Treinamento',
      description: isEnglish
        ? 'Discover the Omaki Method: a holistic approach combining refined technique, mental preparation, and personal development.'
        : 'Conheça o Método Omaki: uma abordagem holística que combina técnica refinada, preparação mental e desenvolvimento pessoal.',
      openGraph: {
        title: isEnglish ? 'The Omaki Method' : 'O Método Omaki',
        description: isEnglish
          ? 'Holistic training approach that has formed champions for over 40 years.'
          : 'Abordagem de treinamento holística que forma campeões há mais de 40 anos.',
      },
    },
    programs: {
      title: isEnglish ? 'Training Programs' : 'Programas de Treinamento',
      description: isEnglish
        ? 'Competitive tennis programs for youth and adults. From beginners to professional athletes.'
        : 'Programas de tênis competitivo para infanto-juvenis e adultos. De iniciantes a atletas profissionais.',
      openGraph: {
        title: isEnglish ? 'Tennis Training Programs' : 'Programas de Tênis',
        description: isEnglish
          ? 'Programs for all levels, from beginners to professional athletes.'
          : 'Programas para todos os níveis, de iniciantes a atletas profissionais.',
      },
    },
    projects: {
      title: isEnglish ? 'Social Projects' : 'Projetos Sociais',
      description: isEnglish
        ? 'Social tennis projects and Brazilian Tennis Memorial. Transforming lives through sport.'
        : 'Projetos sociais de tênis e Memorial do Tênis Brasileiro. Transformando vidas através do esporte.',
      openGraph: {
        title: isEnglish ? 'Social Projects & Tennis Memorial' : 'Projetos Sociais e Memorial do Tênis',
        description: isEnglish
          ? 'Transforming lives through tennis and preserving the sport\'s history.'
          : 'Transformando vidas através do tênis e preservando a história do esporte.',
      },
    },
    results: {
      title: isEnglish ? 'Results & Champions' : 'Resultados e Campeões',
      description: isEnglish
        ? 'Champions trained by Carlos Omaki: Bia Haddad, Luisa Stefani, and hundreds of successful athletes.'
        : 'Campeões formados por Carlos Omaki: Bia Haddad, Luisa Stefani e centenas de atletas de sucesso.',
      openGraph: {
        title: isEnglish ? 'Our Champions' : 'Nossos Campeões',
        description: isEnglish
          ? 'Meet the champions trained by Carlos Omaki over 40+ years.'
          : 'Conheça os campeões formados por Carlos Omaki em 40+ anos.',
      },
    },
    contact: {
      title: isEnglish ? 'Contact' : 'Contato',
      description: isEnglish
        ? 'Get in touch for tennis training evaluation. Start your journey to excellence.'
        : 'Entre em contato para avaliação de treinamento de tênis. Inicie sua jornada rumo à excelência.',
      openGraph: {
        title: isEnglish ? 'Contact Carlos Omaki Tennis' : 'Contato Carlos Omaki Tennis',
        description: isEnglish
          ? 'Schedule your evaluation and start training with the best.'
          : 'Agende sua avaliação e comece a treinar com os melhores.',
      },
    },
  };

  const metadata = pageMetadata[page] || {};
  
  return {
    ...metadata,
    ...customMeta,
    alternates: {
      canonical: `${siteUrl}/${locale}${page === 'home' ? '' : `/${page}`}`,
      languages: {
        'pt': `${siteUrl}/pt${page === 'home' ? '' : `/${page}`}`,
        'en': `${siteUrl}/en${page === 'home' ? '' : `/${page}`}`,
      },
    },
  };
}

// JSON-LD Structured Data Generators
export function generateLocalBusinessSchema(locale: 'pt' | 'en') {
  const isEnglish = locale === 'en';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    '@id': `${siteUrl}/#organization`,
    name: 'Carlos Omaki Tennis',
    alternateName: 'Academia Carlos Omaki',
    description: isEnglish
      ? 'Tennis training academy with 40+ years of experience training champions'
      : 'Academia de treinamento de tênis com mais de 40 anos formando campeões',
    url: siteUrl,
    telephone: process.env.NEXT_PUBLIC_WHATSAPP || '+5511999999999',
    email: 'contato@carlosomaki.com.br',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.5505,
      longitude: -46.6333
    },
    image: `${siteUrl}/og-image.jpg`,
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '06:00',
        closes: '22:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '07:00',
        closes: '20:00'
      }
    ],
    founder: {
      '@type': 'Person',
      name: 'Carlos Omaki',
      jobTitle: isEnglish ? 'Head Coach & Founder' : 'Treinador Principal e Fundador',
      description: isEnglish
        ? 'Tennis coach with over 40 years of experience'
        : 'Treinador de tênis com mais de 40 anos de experiência'
    },
    sport: 'Tennis',
    sameAs: [
      'https://www.instagram.com/carlosomaki',
      'https://www.facebook.com/carlosomakitennis',
      'https://www.linkedin.com/in/carlosomaki'
    ]
  };
}

export function generatePersonSchema(locale: 'pt' | 'en') {
  const isEnglish = locale === 'en';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#carlos-omaki`,
    name: 'Carlos Omaki',
    jobTitle: isEnglish ? 'Tennis Coach' : 'Treinador de Tênis',
    description: isEnglish
      ? 'Tennis coach with over 40 years of experience, trainer of champions like Bia Haddad and Luisa Stefani'
      : 'Treinador de tênis com mais de 40 anos de experiência, formador de campeões como Bia Haddad e Luisa Stefani',
    url: `${siteUrl}/about`,
    image: `${siteUrl}/carlos-omaki.jpg`,
    sameAs: [
      'https://www.instagram.com/carlosomaki',
      'https://www.facebook.com/carlosomakitennis',
      'https://www.linkedin.com/in/carlosomaki'
    ],
    knowsAbout: [
      'Tennis',
      'Tennis Training',
      'Sports Psychology',
      'Athletic Development',
      'Youth Sports'
    ],
    alumniOf: {
      '@type': 'Organization',
      name: isEnglish ? 'Brazilian Tennis Confederation' : 'Confederação Brasileira de Tênis'
    },
    award: [
      isEnglish ? 'Best Youth Coach Award (2x)' : 'Prêmio Melhor Treinador de Base (2x)',
      isEnglish ? '40+ Years of Service to Tennis' : '40+ Anos de Serviço ao Tênis'
    ]
  };
}

export function generateArticleSchema(
  locale: 'pt' | 'en',
  title: string,
  description: string,
  publishedDate: string,
  modifiedDate: string,
  imageUrl?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl || `${siteUrl}/og-image.jpg`,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      '@type': 'Person',
      name: 'Carlos Omaki',
      url: `${siteUrl}/about`
    },
    publisher: {
      '@type': 'Organization',
      name: 'Carlos Omaki Tennis',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/${locale}/articles`
    }
  };
}

export function generateBreadcrumbSchema(
  locale: 'pt' | 'en',
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateCourseSchema(
  locale: 'pt' | 'en',
  courseName: string,
  description: string,
  provider: string = 'Carlos Omaki Tennis'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: provider,
      sameAs: siteUrl
    }
  };
}