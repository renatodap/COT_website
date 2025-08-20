'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Carlos Omaki</h3>
            <p className="text-gray-400">
              40+ anos formando campeões
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/sobre" className="hover:text-white">Sobre</Link></li>
              <li><Link href="/programas" className="hover:text-white">Programas</Link></li>
              <li><Link href="/resultados" className="hover:text-white">Resultados</Link></li>
              <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Projetos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/projetos#instituto" className="hover:text-white">Instituto Primeiro Serviço</Link></li>
              <li><Link href="/projetos#memorial" className="hover:text-white">Memorial do Tênis</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/politicas/privacidade" className="hover:text-white">{t('policies.privacy')}</Link></li>
              <li><Link href="/politicas/termos" className="hover:text-white">{t('policies.terms')}</Link></li>
              <li><Link href="/politicas/imagem" className="hover:text-white">{t('policies.imageRights')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Carlos Omaki. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}