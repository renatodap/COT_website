// Dummy email functions for MVP - no actual email sending

interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  profile: 'parent' | 'athlete' | 'club';
  message: string;
  locale?: 'pt' | 'en';
}

interface EmailResult {
  success: boolean;
  error?: string;
  id?: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<EmailResult> {
  // MVP: Just log the data, don't actually send email
  console.log('Contact email would be sent:', data);
  
  return {
    success: true,
    id: 'dummy-id',
  };
}

export async function sendContactAutoReply(data: ContactEmailData): Promise<EmailResult> {
  // MVP: Just log the data, don't actually send auto-reply
  console.log('Auto-reply email would be sent to:', data.email);
  
  return {
    success: true,
    id: 'dummy-auto-reply-id',
  };
}