import { NextRequest, NextResponse } from 'next/server';
import { generateEmailPreview } from '@/lib/email-preview';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type') as 'notification' | 'autoreply' | null;
  const locale = searchParams.get('locale') as 'pt' | 'en' | null;

  if (!type || !['notification', 'autoreply'].includes(type)) {
    return NextResponse.json(
      { error: 'Invalid type. Use ?type=notification or ?type=autoreply' },
      { status: 400 }
    );
  }

  const emailData = generateEmailPreview(type, locale || 'pt');

  // Return HTML response for direct browser viewing
  return new NextResponse(emailData.html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

// Also support POST for testing with custom data
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, locale, data } = body;

    if (!type || !['notification', 'autoreply'].includes(type)) {
      return NextResponse.json(
        { error: 'Invalid type' },
        { status: 400 }
      );
    }

    const emailData = generateEmailPreview(type, locale || 'pt', data);

    return NextResponse.json({
      subject: emailData.subject,
      html: emailData.html,
      preview: `/api/email-preview?type=${type}&locale=${locale || 'pt'}`,
    });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}