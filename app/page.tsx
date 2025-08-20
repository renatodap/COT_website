import { Inter, Sora } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['600', '700'],
});

export default function HomePage() {
  return (
    <html lang="pt" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <title>Carlos Omaki Tennis</title>
        <meta name="description" content="Treinamento de tênis competitivo com metodologia comprovada" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        {/* Simple Hero Section */}
        <header className="bg-gradient-to-r from-green-800 to-green-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Carlos Omaki</h1>
            <p className="text-xl mb-8">Tênis, método e legado</p>
            <p className="text-lg mb-8">40+ anos formando campeões</p>
            <div className="space-x-4">
              <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Agendar avaliação
              </button>
              <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800">
                Conheça a filosofia
              </button>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-green-800 mb-2">500+</h3>
                <p>Atletas ativos</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-800 mb-2">2×</h3>
                <p>Melhor Treinador de Base</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-800 mb-2">40+</h3>
                <p>Anos de experiência</p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Filosofia em 3 Pilares</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <h3 className="text-xl font-bold mb-4">Técnica de Excelência</h3>
                <p>Fundamentos sólidos construídos desde a base, com correção biomecânica e desenvolvimento progressivo.</p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-bold mb-4">Competição Inteligente</h3>
                <p>Estratégia mental e tática para vencer não apenas com força, mas com inteligência de jogo.</p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-bold mb-4">Formação Humana</h3>
                <p>Valores do esporte aplicados à vida: disciplina, respeito, superação e trabalho em equipe.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Programas de Desenvolvimento</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-4">Juniors Competitivos</h3>
                <p className="mb-4">6 a 18 anos</p>
                <p>Formação completa para atletas jovens com foco em torneios estaduais, nacionais e internacionais.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-4">Adultos Competitivos</h3>
                <p className="mb-4">18+ anos</p>
                <p>Programa intensivo para jogadores adultos que buscam performance em torneios e rankings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Resultados que Falam</h2>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">Atletas formados pelo método Omaki conquistando o mundo</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Bia Haddad Maia</h3>
                  <p>Top 15 mundial WTA</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Luisa Stefani</h3>
                  <p>Top 10 mundial em duplas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Vamos Conversar</h2>
            <p className="text-xl mb-8">Agende uma avaliação ou tire suas dúvidas</p>
            <div className="space-x-4">
              <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Enviar mensagem
              </button>
              <a 
                href="https://wa.me/5511999999999" 
                className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 inline-block"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Carlos Omaki. Todos os direitos reservados.</p>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}