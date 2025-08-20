import { z } from 'zod';

// Define the schema for environment variables
const envSchema = z.object({
  // Required public variables
  NEXT_PUBLIC_SITE_URL: z.string().url().default('https://carlosomaki.com.br'),
  NEXT_PUBLIC_APP_NAME: z.string().default('Carlos Omaki Tennis'),
  NEXT_PUBLIC_APP_DESCRIPTION: z.string().default('Treinamento de tênis competitivo com metodologia comprovada'),
  NEXT_PUBLIC_WHATSAPP: z.string().regex(/^\d{13}$/).default('5511999999999'),
  NEXT_PUBLIC_CONTACT_EMAIL: z.string().email().default('contato@carlosomaki.com.br'),
  
  // Optional public variables
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  NEXT_PUBLIC_GTM_ID: z.string().optional(),
  NEXT_PUBLIC_PHONE: z.string().optional(),
  NEXT_PUBLIC_OG_IMAGE: z.string().default('/og-image.jpg'),
  NEXT_PUBLIC_TWITTER_HANDLE: z.string().optional(),
  NEXT_PUBLIC_FB_PAGE_ID: z.string().optional(),
  NEXT_PUBLIC_INSTAGRAM_HANDLE: z.string().optional(),
  NEXT_PUBLIC_LINKEDIN_URL: z.string().url().optional(),
  NEXT_PUBLIC_GOOGLE_MAPS_KEY: z.string().optional(),
  NEXT_PUBLIC_CALENDLY_URL: z.string().url().optional(),
  NEXT_PUBLIC_YOUTUBE_CHANNEL: z.string().optional(),
  NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
  NEXT_PUBLIC_LOGROCKET_ID: z.string().optional(),
  
  // Feature flags
  NEXT_PUBLIC_ENABLE_ANALYTICS: z.string().optional().transform(val => val === 'true'),
  NEXT_PUBLIC_ENABLE_CONTACT_FORM: z.string().optional().transform(val => val !== 'false'),
  NEXT_PUBLIC_ENABLE_NEWSLETTER: z.string().optional().transform(val => val !== 'false'),
  NEXT_PUBLIC_ENABLE_WHATSAPP: z.string().optional().transform(val => val !== 'false'),
  NEXT_PUBLIC_ENABLE_CALENDAR: z.string().optional().transform(val => val !== 'false'),
  NEXT_PUBLIC_ENABLE_BLOG: z.string().optional().transform(val => val !== 'false'),
  NEXT_PUBLIC_VERCEL_ANALYTICS: z.string().optional().transform(val => val === 'true'),
  NEXT_PUBLIC_WEB_VITALS: z.string().optional().transform(val => val !== 'false'),
  NEXT_PUBLIC_IMAGE_OPTIMIZATION: z.string().optional().transform(val => val !== 'false'),
  
  // Localization
  NEXT_PUBLIC_DEFAULT_LOCALE: z.enum(['pt', 'en']).default('pt'),
  NEXT_PUBLIC_AVAILABLE_LOCALES: z.string().default('pt,en'),
  
  // Server-side variables
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  DATABASE_URL: z.string().default('file:./prisma/dev.db'),
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM_EMAIL: z.string().email().optional(),
  RESEND_TO_EMAIL: z.string().email().optional(),
  RESEND_CC_EMAIL: z.string().email().optional().or(z.literal('')),
  RESEND_BCC_EMAIL: z.string().email().optional().or(z.literal('')),
  ADMIN_API_TOKEN: z.string().optional(),
  RATE_LIMIT_PER_MINUTE: z.string().optional().transform(val => Number(val || 10)),
  RATE_LIMIT_BURST: z.string().optional().transform(val => Number(val || 20)),
  CSP_REPORT_URI: z.string().default('/api/csp-report'),
  HSTS_MAX_AGE: z.string().optional().transform(val => Number(val || 31536000)),
  CALCOM_URL: z.string().url().optional(),
});

// Parse and validate environment variables
function validateEnv() {
  const parsed = envSchema.safeParse(process.env);
  
  if (!parsed.success) {
    console.error(
      '❌ Invalid environment variables:',
      JSON.stringify(parsed.error.flatten().fieldErrors, null, 2)
    );
    
    if (process.env.NODE_ENV === 'production') {
      throw new Error('Invalid environment variables');
    }
  }
  
  return parsed.data;
}

// Export validated environment variables
export const env = validateEnv();

// Helper functions for feature flags
export const features = {
  analytics: () => env?.NEXT_PUBLIC_ENABLE_ANALYTICS ?? false,
  contactForm: () => env?.NEXT_PUBLIC_ENABLE_CONTACT_FORM ?? true,
  newsletter: () => env?.NEXT_PUBLIC_ENABLE_NEWSLETTER ?? true,
  whatsapp: () => env?.NEXT_PUBLIC_ENABLE_WHATSAPP ?? true,
  calendar: () => env?.NEXT_PUBLIC_ENABLE_CALENDAR ?? true,
  blog: () => env?.NEXT_PUBLIC_ENABLE_BLOG ?? true,
  vercelAnalytics: () => env?.NEXT_PUBLIC_VERCEL_ANALYTICS ?? false,
  webVitals: () => env?.NEXT_PUBLIC_WEB_VITALS ?? true,
  imageOptimization: () => env?.NEXT_PUBLIC_IMAGE_OPTIMIZATION ?? true,
};

// Helper function to check if email is configured
export function isEmailConfigured() {
  return !!(
    env?.RESEND_API_KEY &&
    env?.RESEND_FROM_EMAIL &&
    env?.RESEND_TO_EMAIL &&
    env?.RESEND_API_KEY !== 'replace_with_actual_key' &&
    !env?.RESEND_API_KEY.includes('placeholder')
  );
}

// Helper function to get WhatsApp link
export function getWhatsAppLink(message?: string) {
  const phone = env?.NEXT_PUBLIC_WHATSAPP ?? '5511999999999';
  const baseUrl = `https://wa.me/${phone}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}

// Helper function to get site URL
export function getSiteUrl(path = '') {
  const baseUrl = env?.NEXT_PUBLIC_SITE_URL ?? 'https://carlosomaki.com.br';
  return path ? `${baseUrl}${path.startsWith('/') ? path : `/${path}`}` : baseUrl;
}

// Export type for use in other files
export type Env = z.infer<typeof envSchema>;