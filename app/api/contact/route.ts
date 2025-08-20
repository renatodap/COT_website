import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Simple in-memory rate limiting (for production, use Redis or Vercel KV)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// CSRF token validation
function validateCSRF(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  
  // In production, check against actual domain
  const allowedOrigins = [
    process.env.NEXT_PUBLIC_SITE_URL,
    'http://localhost:3000',
    'https://carlosomaki.com.br',
    'https://www.carlosomaki.com.br'
  ].filter(Boolean) as string[];
  
  if (origin && !allowedOrigins.some(allowed => origin.includes(allowed))) {
    return false;
  }
  
  if (referer && !allowedOrigins.some(allowed => referer.includes(allowed))) {
    return false;
  }
  
  return true;
}

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = 5; // 5 requests
  const window = 60 * 1000; // per minute
  
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + window,
    });
    return true;
  }
  
  if (record.count >= limit) {
    return false;
  }
  
  record.count++;
  return true;
}

// Contact form schema with proper validation
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Nome muito curto')
    .max(100, 'Nome muito longo')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Nome contém caracteres inválidos'),
  email: z.string()
    .email('Email inválido')
    .max(255),
  phone: z.string()
    .min(10, 'Telefone inválido')
    .max(20, 'Telefone inválido')
    .regex(/^[\d\s()+-]+$/, 'Telefone contém caracteres inválidos'),
  profile: z.enum(['parent', 'athlete', 'club']),
  message: z.string()
    .min(10, 'Mensagem muito curta')
    .max(1000, 'Mensagem muito longa'),
  consent: z.boolean().optional(),
  locale: z.enum(['pt', 'en']).optional().default('pt'),
});

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          error_pt: 'Muitas tentativas. Por favor, tente novamente mais tarde.' 
        },
        { status: 429 }
      );
    }
    
    // Validate CSRF
    if (!validateCSRF(request)) {
      return NextResponse.json(
        { error: 'Invalid request origin' },
        { status: 403 }
      );
    }
    
    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    
    // Sanitize data (remove any HTML/scripts)
    const sanitizedData = {
      ...validatedData,
      name: validatedData.name.replace(/<[^>]*>/g, '').trim(),
      message: validatedData.message.replace(/<[^>]*>/g, '').trim(),
      phone: validatedData.phone.replace(/[^\d\s()+-]/g, ''),
    };
    
    // Log submission for monitoring (MVP - just console log)
    console.log('Contact form submission:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      profile: sanitizedData.profile,
      message: sanitizedData.message,
      locale: sanitizedData.locale,
      timestamp: new Date().toISOString(),
    });
    
    // Send success response
    const successMessage = sanitizedData.locale === 'en' 
      ? 'Message sent successfully! We will contact you soon via WhatsApp or email.'
      : 'Mensagem enviada com sucesso! Entraremos em contato em breve via WhatsApp ou email.';
    
    return NextResponse.json(
      { 
        success: true,
        message: successMessage
      },
      { status: 200 }
    );
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Format validation errors
      const formattedErrors = error.issues.reduce((acc, issue) => {
        acc[issue.path.join('.')] = issue.message;
        return acc;
      }, {} as Record<string, string>);
      
      return NextResponse.json(
        { 
          error: 'Invalid form data',
          errors: formattedErrors,
          details: error.issues 
        },
        { status: 400 }
      );
    }
    
    console.error('Contact form error:', error);
    
    // Don't expose internal errors to client
    return NextResponse.json(
      { 
        error: 'Internal server error',
        error_pt: 'Erro interno do servidor' 
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ 
    status: 'ok',
    message: 'Contact API is running',
    timestamp: new Date().toISOString(),
  });
}