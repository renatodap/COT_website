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
        <title>Carlos Omaki Tennis - 40 Anos Formando Campeões</title>
        <meta name="description" content="Carlos Omaki: 40 anos formando campeões brasileiros. Melhor Treinador de Base 2014/2015. Treinou Bia Haddad Maia e Luisa Stefani." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img src="/omaki/omaki_logo.png" alt="COT - Carlos Omaki Tennis" className="h-12 w-auto" />
                <div>
                  <h1 className="text-2xl font-bold text-green-800">COT</h1>
                  <p className="text-sm text-gray-600">Carlos Omaki Tennis</p>
                </div>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#sobre" className="text-gray-700 hover:text-green-800">Sobre</a>
                <a href="#filosofia" className="text-gray-700 hover:text-green-800">Filosofia</a>
                <a href="#resultados" className="text-gray-700 hover:text-green-800">Resultados</a>
                <a href="#testemunhos" className="text-gray-700 hover:text-green-800">Testemunhos</a>
                <a href="#contato" className="text-gray-700 hover:text-green-800">Contato</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/omaki/omaki_coaching_on_court.jpg" 
              alt="Carlos Omaki coaching on court" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-green-700 text-green-100 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                Melhor Treinador Brasileiro de Base 2014 & 2015
              </div>
              <h1 className="text-6xl font-bold mb-4">Carlos Omaki</h1>
              <p className="text-2xl mb-4">40 anos formando campeões</p>
              <p className="text-xl mb-8 text-green-100">COT - Carlos Omaki Tennis</p>
              <div className="space-x-4">
                <a href="#contato" className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block transition-colors">
                  Agendar avaliação
                </a>
                <a href="#filosofia" className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 inline-block transition-colors">
                  Conheça a filosofia
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-green-800 mb-2">500+</h3>
                <p className="text-gray-600">Jovens tenistas ativos</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-green-800 mb-2">40</h3>
                <p className="text-gray-600">Anos de experiência</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-green-800 mb-2">2×</h3>
                <p className="text-gray-600">Melhor Treinador de Base</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-green-800 mb-2">100+</h3>
                <p className="text-gray-600">Campeões formados</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Uma Carreira de 40 Anos</h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div className="space-y-6">
                  <img 
                    src="/omaki/omaki_team.jpg" 
                    alt="Carlos Omaki com sua equipe técnica" 
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <img 
                      src="/omaki/clube_paulistano.jpg" 
                      alt="Club Athletico Paulistano" 
                      className="rounded-lg shadow-sm w-full h-32 object-cover"
                    />
                    <img 
                      src="/omaki/trophy.webp" 
                      alt="Troféu Melhor Treinador" 
                      className="rounded-lg shadow-sm w-full h-32 object-cover"
                    />
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  Carlos Omaki é um dos mais experientes treinadores de tênis do Brasil, com cerca de 40 anos de carreira 
                  dedicados à formação de atletas. Eleito <strong>Melhor Treinador Brasileiro de Categorias de Base em 2014 e 2015</strong>, 
                  sendo premiado em duas edições consecutivas da maior premiação do tênis nacional.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Atualmente, Omaki é proprietário da <strong>Academia Carlos Omaki Tênis (COT)</strong>, por meio da qual mantém 
                  equipes de competição em importantes entidades de São Paulo – a Academia Paulistana de Tênis, o tradicional 
                  Club Athletico Paulistano (CAP) e o Tênis Clube Paulista. Sob sua coordenação técnica, essas equipes atendem 
                  <strong> cerca de 500 jovens tenistas</strong> na capital paulista.
                </p>

                <p className="text-lg leading-relaxed">
                  Omaki também atua como <strong>coordenador técnico do Instituto Primeiro Serviço</strong>, um projeto social 
                  que promove inclusão por meio do tênis, atendendo crianças e adolescentes de comunidades carentes. Em 2023, 
                  passou a integrar a diretoria do <strong>Memorial Tênis Brasileiro</strong>, iniciativa pioneira que está criando 
                  o museu, biblioteca e Hall da Fama do tênis nacional.
                </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="filosofia" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Metodologia Omaki</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Uma abordagem integral que vai além da técnica: formamos atletas de alto nível e cidadãos, 
                incutindo disciplina, ética e paixão pelo esporte.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Desenvolvimento Integral</h3>
                <p className="text-gray-600 text-center">
                  Coordenamos uma das equipes multidisciplinares mais conceituadas do país, cuidando dos 
                  aspectos técnicos, físicos e mentais desde as fases iniciais.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Experiência Competitiva</h3>
                <p className="text-gray-600 text-center">
                  Organizamos caravanas para torneios de alto nível, como a tradicional &ldquo;Rota do Sol&rdquo; - 
                  cerca de 30 tenistas em 20 dias de competições ininterruptas.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Inclusão Social</h3>
                <p className="text-gray-600 text-center">
                  Através do Instituto Primeiro Serviço, oferecemos treinamento de primeiro mundo, 
                  formação profissional e oportunidades para jovens de comunidades carentes.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
              <div className="bg-green-800 text-white p-8 rounded-lg">
                <blockquote className="text-xl italic">
                  &ldquo;Mais valioso que títulos é colecionar números de amantes do tênis espalhados pelo mundo – 
                  atletas que influenciamos a amar o esporte e que seguem ligados ao tênis, seja como jogadores 
                  profissionais ou em outras carreiras na área.&rdquo;
                  <footer className="mt-4 text-green-200">— Carlos Omaki</footer>
                </blockquote>
              </div>
              <div className="space-y-4">
                <img 
                  src="/omaki/omaki_athletes_academy.jpg" 
                  alt="Atletas da Academia COT em treinamento" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="/omaki/omaki_travel.jpg" 
                    alt="Caravana de torneios COT" 
                    className="rounded-lg shadow-sm w-full h-24 object-cover"
                  />
                  <img 
                    src="/omaki/travel2.jpg" 
                    alt="Viagens competitivas COT" 
                    className="rounded-lg shadow-sm w-full h-24 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="resultados" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Resultados que Falam</h2>
              <p className="text-xl text-gray-600">Atletas formados pelo método Omaki conquistando o mundo</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg relative">
                <div className="flex items-center gap-6 mb-6">
                  <img 
                    src="/omaki/omaki_biahaddad.jpg" 
                    alt="Carlos Omaki com Beatriz Haddad Maia" 
                    className="w-20 h-20 rounded-full object-cover border-4 border-green-200"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-green-800">Beatriz Haddad Maia</h3>
                    <p className="text-green-700 font-semibold">Atual número 1 do Brasil</p>
                  </div>
                </div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Top 15 mundial WTA</li>
                  <li>• Semifinalista Roland Garros 2023</li>
                  <li>• Formada na base com Carlos Omaki</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg relative">
                <div className="flex items-center gap-6 mb-6">
                  <img 
                    src="/omaki/omaki_stefani.jpeg" 
                    alt="Carlos Omaki com Luisa Stefani" 
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-blue-800">Luisa Stefani</h3>
                    <p className="text-blue-700 font-semibold">Medalhista Olímpica</p>
                  </div>
                </div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Bronze Tóquio 2020 (duplas)</li>
                  <li>• Top 10 mundial em duplas</li>
                  <li>• Desenvolvida por Carlos Omaki</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Legado em Números</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Categorias de Base</h4>
                  <p className="text-gray-600">Dezenas de campeões brasileiros e sul-americanos formados</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Circuito Profissional</h4>
                  <p className="text-gray-600">Inúmeros atletas conduzidos do juvenil ao profissional</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Bolsas Universitárias</h4>
                  <p className="text-gray-600">Centenas de jovens encaminhados para universidades americanas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testemunhos" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Testemunhos</h2>
              <p className="text-xl text-gray-600">O que dizem pais, atletas e parceiros</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <blockquote className="text-gray-700 mb-6">
                  &ldquo;Agradecemos ao Carlos, Marina e equipe técnica por toda atenção com a Luna e o Enzo, 
                  e à Diretoria de Esportes, pelo apoio ao tênis competitivo.&rdquo;
                </blockquote>
                <footer className="text-sm">
                  <strong className="text-gray-900">Fábio Guarda</strong>
                  <p className="text-gray-600">Pai de dois jovens tenistas do Club Athletico Paulistano</p>
                </footer>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <blockquote className="text-gray-700 mb-6">
                  &ldquo;Isso comprova que o trabalho integrado com a Escolinha de Tênis e o pré-competitivo 
                  está em perfeita sintonia com o competitivo, coordenado por Carlos Omaki.&rdquo;
                </blockquote>
                <footer className="text-sm">
                  <strong className="text-gray-900">Maurício Macedo</strong>
                  <p className="text-gray-600">Sócio-responsável pelo tênis no Club Athletico Paulistano</p>
                </footer>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <blockquote className="text-gray-700 mb-6">
                  &ldquo;Foi muito especial para todos nós que pudemos vivenciar a presença da Luisa e o carinho de todos. 
                  São para estes momentos que lutamos pela nossa paixão pelo tênis.&rdquo;
                </blockquote>
                <footer className="text-sm">
                  <strong className="text-gray-900">Alessandra Stefani</strong>
                  <p className="text-gray-600">Mãe da medalhista olímpica Luisa Stefani</p>
                </footer>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy & Connections Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Conexões e Legado</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img 
                  src="/omaki/omaki_federer.jpg" 
                  alt="Carlos Omaki com Roger Federer" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Intercâmbio Internacional</h3>
                <p className="text-gray-600">Experiências com os maiores nomes do tênis mundial</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img 
                  src="/omaki/omaki_kyrmair.jpg" 
                  alt="Carlos Omaki com Carlos Kirmayr" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tradição Brasileira</h3>
                <p className="text-gray-600">Parceria com lendas do tênis nacional no Memorial do Tênis</p>
              </div>
            </div>
          </div>
        </section>

        {/* Press Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Na Imprensa</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-green-800 mb-2">TenisBrasil</h3>
                <p className="text-sm text-gray-600">Torneio de duplas de Stefani e Omaki</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-green-800 mb-2">Lance!</h3>
                <p className="text-sm text-gray-600">40 anos formando talentos</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-green-800 mb-2">Tenis News</h3>
                <p className="text-sm text-gray-600">Vice-campeões em Bogotá</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-green-800 mb-2">Terra</h3>
                <p className="text-sm text-gray-600">Referência nacional</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-2xl mb-4 text-green-100 font-semibold">COT - Carlos Omaki Tennis</p>
            <p className="text-xl mb-12 text-green-100 max-w-2xl mx-auto">
              Agende uma avaliação personalizada ou tire suas dúvidas sobre nossos programas de treinamento
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">COT - Carlos Omaki Tennis</h3>
                <p className="text-green-200">Club Athletico Paulistano</p>
                <p className="text-green-200">Academia Paulistana de Tênis</p>
                <p className="text-green-200">Tênis Clube Paulista</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Instituto Primeiro Serviço</h3>
                <p className="text-green-200">Projeto social de inclusão</p>
                <p className="text-green-200">Slice Tennis Academy</p>
                <p className="text-green-200">Tamboré, SP</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Memorial Tênis Brasileiro</h3>
                <p className="text-green-200">Diretoria</p>
                <p className="text-green-200">Preservação da história</p>
                <p className="text-green-200">Hall da Fama</p>
              </div>
            </div>

            <div className="space-x-4">
              <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Enviar mensagem
              </button>
              <a 
                href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os programas de tênis do Carlos Omaki." 
                className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 inline-block transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <img src="/omaki/omaki_logo.png" alt="COT Logo" className="h-10 w-auto" />
                <div>
                  <h3 className="text-2xl font-bold">COT</h3>
                  <p className="text-gray-400 text-sm">Carlos Omaki Tennis</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                40 anos formando campeões brasileiros. Melhor Treinador de Categorias de Base 2014/2015. 
                Dedicação integral ao desenvolvimento do tênis nacional.
              </p>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400">
                &copy; 2024 COT - Carlos Omaki Tennis. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Desenvolvido com paixão pelo tênis brasileiro
              </p>
            </div>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}