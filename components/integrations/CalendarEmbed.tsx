'use client';

import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export function CalendarEmbed() {
  const [isLoading, setIsLoading] = useState(true);
  const calUrl = process.env.NEXT_PUBLIC_CALCOM_URL || 'https://cal.com/carlosomaki';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] bg-white rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <Loader2 className="w-8 h-8 animate-spin text-court-green" />
        </div>
      )}
      <iframe
        src={`${calUrl}/assessment?embed=true`}
        className="w-full h-full border-0"
        style={{ display: isLoading ? 'none' : 'block' }}
        title="Agendar Avaliação"
      />
    </div>
  );
}