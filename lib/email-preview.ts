import { env } from './env';

// Profile labels
const profileLabels = {
  pt: {
    parent: 'Pai/Mãe',
    athlete: 'Atleta',
    club: 'Clube/Academia',
  },
  en: {
    parent: 'Parent',
    athlete: 'Athlete',
    club: 'Club/Academy',
  },
};

// HTML Email Template Generator
function generateEmailTemplate(
  title: string,
  content: string,
  footer?: string
): string {
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #15803d 0%, #166534 100%); padding: 40px 30px; border-radius: 8px 8px 0 0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; text-align: center;">
                      Carlos Omaki Tennis
                    </h1>
                    <p style="margin: 10px 0 0 0; color: #e0f2e9; font-size: 14px; text-align: center;">
                      40+ anos formando campeões
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              ${content}
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding: 0 10px;">
                          <a href="https://instagram.com/carlosomaki" style="color: #15803d; text-decoration: none;">Instagram</a>
                        </td>
                        <td style="padding: 0 10px;">
                          <a href="https://facebook.com/carlosomakitennis" style="color: #15803d; text-decoration: none;">Facebook</a>
                        </td>
                        <td style="padding: 0 10px;">
                          <a href="https://carlosomaki.com.br" style="color: #15803d; text-decoration: none;">Website</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <p style="margin: 0; color: #6c757d; font-size: 12px; line-height: 1.5;">
                      ${footer || '© 2024 Carlos Omaki Tennis. Todos os direitos reservados.'}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

interface ContactFormData {
  name?: string;
  email?: string;
  phone?: string;
  profile?: 'parent' | 'athlete' | 'club';
  message?: string;
  locale?: 'pt' | 'en';
}

// Email preview endpoint data generator
export function generateEmailPreview(
  type: 'notification' | 'autoreply', 
  locale: 'pt' | 'en' = 'pt',
  customData?: ContactFormData
) {
  const sampleData: Required<ContactFormData> = {
    name: customData?.name || 'João Silva',
    email: customData?.email || 'joao.silva@example.com',
    phone: customData?.phone || '+55 11 98765-4321',
    profile: customData?.profile || 'parent',
    message: customData?.message || (locale === 'en' 
      ? 'Hello! I would like to know more about tennis lessons for my 12-year-old son. He has basic experience and would like to develop his skills. When can we schedule an evaluation?'
      : 'Olá! Gostaria de saber mais sobre as aulas de tênis para meu filho de 12 anos. Ele já tem experiência básica e gostaria de desenvolver suas habilidades. Quando podemos agendar uma avaliação?'),
    locale,
  };

  if (type === 'notification') {
    return generateNotificationEmail(sampleData);
  } else {
    return generateAutoReplyEmail(sampleData);
  }
}

function generateNotificationEmail(data: Required<ContactFormData>) {
  const locale = data.locale;
  const profileLabel = profileLabels[locale][data.profile];
  
  const subject = locale === 'en'
    ? `New Contact Form Submission - ${data.name}`
    : `Nova Mensagem de Contato - ${data.name}`;

  const content = `
    <h2 style="margin: 0 0 20px 0; color: #1a1a1a; font-size: 24px;">
      ${locale === 'en' ? 'New Contact Form Submission' : 'Nova Mensagem de Contato'}
    </h2>
    
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px;">
      <tr>
        <td style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #15803d;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="padding-bottom: 10px;">
                <strong style="color: #6c757d; font-size: 12px; text-transform: uppercase;">
                  ${locale === 'en' ? 'Name' : 'Nome'}
                </strong><br>
                <span style="color: #1a1a1a; font-size: 16px;">${data.name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding-bottom: 10px;">
                <strong style="color: #6c757d; font-size: 12px; text-transform: uppercase;">
                  ${locale === 'en' ? 'Email' : 'E-mail'}
                </strong><br>
                <a href="mailto:${data.email}" style="color: #15803d; font-size: 16px; text-decoration: none;">
                  ${data.email}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding-bottom: 10px;">
                <strong style="color: #6c757d; font-size: 12px; text-transform: uppercase;">
                  ${locale === 'en' ? 'Phone' : 'Telefone'}
                </strong><br>
                <a href="tel:${data.phone}" style="color: #15803d; font-size: 16px; text-decoration: none;">
                  ${data.phone}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <strong style="color: #6c757d; font-size: 12px; text-transform: uppercase;">
                  ${locale === 'en' ? 'Profile' : 'Perfil'}
                </strong><br>
                <span style="color: #1a1a1a; font-size: 16px;">${profileLabel}</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    
    <div style="margin-bottom: 30px;">
      <h3 style="margin: 0 0 15px 0; color: #6c757d; font-size: 12px; text-transform: uppercase;">
        ${locale === 'en' ? 'Message' : 'Mensagem'}
      </h3>
      <div style="padding: 20px; background-color: #f8f9fa; border-radius: 4px;">
        <p style="margin: 0; color: #1a1a1a; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">
          ${data.message}
        </p>
      </div>
    </div>
    
    <div style="padding: 20px; background-color: #e8f5e9; border-radius: 4px; text-align: center;">
      <p style="margin: 0 0 15px 0; color: #2e7d32; font-size: 14px;">
        ${locale === 'en' 
          ? 'Quick actions for this contact:' 
          : 'Ações rápidas para este contato:'}
      </p>
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
        <tr>
          <td style="padding: 0 5px;">
            <a href="mailto:${data.email}" style="display: inline-block; padding: 10px 20px; background-color: #15803d; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 14px;">
              ${locale === 'en' ? 'Reply by Email' : 'Responder por E-mail'}
            </a>
          </td>
          <td style="padding: 0 5px;">
            <a href="https://wa.me/${data.phone.replace(/\D/g, '')}" style="display: inline-block; padding: 10px 20px; background-color: #25d366; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 14px;">
              ${locale === 'en' ? 'Contact on WhatsApp' : 'Contatar no WhatsApp'}
            </a>
          </td>
        </tr>
      </table>
    </div>
  `;

  const footer = `
    ${locale === 'en' 
      ? 'This email was automatically sent from the contact form at carlosomaki.com.br' 
      : 'Este e-mail foi enviado automaticamente pelo formulário de contato em carlosomaki.com.br'}
    <br>
    ${new Date().toLocaleString(locale === 'en' ? 'en-US' : 'pt-BR')}
  `;

  return {
    subject,
    html: generateEmailTemplate(subject, content, footer),
  };
}

function generateAutoReplyEmail(data: Required<ContactFormData>) {
  const locale = data.locale;
  
  const subject = locale === 'en'
    ? 'Thank you for contacting Carlos Omaki Tennis'
    : 'Obrigado por entrar em contato - Carlos Omaki Tennis';

  const content = `
    <h2 style="margin: 0 0 20px 0; color: #1a1a1a; font-size: 24px;">
      ${locale === 'en' ? `Hello ${data.name}!` : `Olá ${data.name}!`}
    </h2>
    
    <p style="margin: 0 0 20px 0; color: #4a5568; font-size: 16px; line-height: 1.6;">
      ${locale === 'en' 
        ? 'Thank you for your interest in Carlos Omaki Tennis. We have received your message and will respond as soon as possible.'
        : 'Obrigado pelo seu interesse no Carlos Omaki Tennis. Recebemos sua mensagem e responderemos o mais breve possível.'}
    </p>
    
    <div style="padding: 20px; background-color: #f8f9fa; border-radius: 4px; margin-bottom: 30px;">
      <h3 style="margin: 0 0 15px 0; color: #6c757d; font-size: 14px; text-transform: uppercase;">
        ${locale === 'en' ? 'Your message:' : 'Sua mensagem:'}
      </h3>
      <p style="margin: 0; color: #1a1a1a; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
        ${data.message}
      </p>
    </div>
    
    <div style="padding: 25px; background: linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%); border-radius: 4px; margin-bottom: 30px;">
      <h3 style="margin: 0 0 15px 0; color: #15803d; font-size: 18px;">
        ${locale === 'en' ? 'What happens next?' : 'O que acontece agora?'}
      </h3>
      <ul style="margin: 0; padding-left: 20px; color: #4a5568; font-size: 14px; line-height: 1.8;">
        <li>
          ${locale === 'en'
            ? 'Our team will review your message within 24 hours'
            : 'Nossa equipe analisará sua mensagem em até 24 horas'}
        </li>
        <li>
          ${locale === 'en'
            ? 'We will contact you via phone or email to schedule an evaluation'
            : 'Entraremos em contato por telefone ou e-mail para agendar uma avaliação'}
        </li>
        <li>
          ${locale === 'en'
            ? 'Meanwhile, follow us on social media for news and tips'
            : 'Enquanto isso, siga-nos nas redes sociais para novidades e dicas'}
        </li>
      </ul>
    </div>
    
    <div style="text-align: center; padding: 30px; background-color: #f8f9fa; border-radius: 4px;">
      <h3 style="margin: 0 0 15px 0; color: #1a1a1a; font-size: 16px;">
        ${locale === 'en' ? 'Need immediate assistance?' : 'Precisa de atendimento imediato?'}
      </h3>
      <p style="margin: 0 0 20px 0; color: #6c757d; font-size: 14px;">
        ${locale === 'en' ? 'Contact us via WhatsApp:' : 'Entre em contato pelo WhatsApp:'}
      </p>
      <a href="https://wa.me/${env?.NEXT_PUBLIC_WHATSAPP || '5511999999999'}" style="display: inline-block; padding: 12px 30px; background-color: #25d366; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px; font-weight: bold;">
        ${locale === 'en' ? 'Chat on WhatsApp' : 'Conversar no WhatsApp'}
      </a>
    </div>
  `;

  const footer = locale === 'en'
    ? 'This is an automated message. Please do not reply to this email.'
    : 'Esta é uma mensagem automática. Por favor, não responda a este e-mail.';

  return {
    subject,
    html: generateEmailTemplate(subject, content, footer),
  };
}