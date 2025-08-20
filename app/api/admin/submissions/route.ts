import { NextRequest, NextResponse } from 'next/server';

// Simple authentication check - in production, use proper auth
function isAuthenticated(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  
  // In production, implement proper authentication
  // For now, check for a simple bearer token from env
  const adminToken = process.env.ADMIN_API_TOKEN;
  
  if (!adminToken) {
    // If no token configured, block access in production
    return process.env.NODE_ENV === 'development';
  }
  
  return authHeader === `Bearer ${adminToken}`;
}

export async function GET(request: NextRequest) {
  // Check authentication
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  // For MVP, return empty data
  return NextResponse.json({
    success: true,
    data: [],
    pagination: {
      page: 1,
      limit: 20,
      total: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPrevPage: false,
    },
  });
}

// Export submissions as CSV
export async function POST(request: NextRequest) {
  // Check authentication
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  // For MVP, return empty CSV
  const headers = [
    'ID',
    'Nome',
    'Email',
    'Telefone',
    'Perfil',
    'Mensagem',
    'Consentimento',
    'Idioma',
    'IP',
    'Data/Hora',
    'Email Enviado',
    'Erro Email',
  ];
  
  const csv = headers.join(',');
  
  // Return CSV file
  return new NextResponse(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': `attachment; filename="submissions-${new Date().toISOString().split('T')[0]}.csv"`,
    },
  });
}