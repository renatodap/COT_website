'use client';

export function SkipNavigation() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-court-green text-white px-4 py-2 rounded-md z-[100]"
    >
      Pular para o conteúdo principal
    </a>
  );
}