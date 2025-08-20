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

        {/* Hero Section - Cinematic */}
        <header className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/70 to-green-700/80 z-10"></div>
            <img 
              src="/omaki/omaki_coaching_on_court.jpg" 
              alt="Carlos Omaki coaching on court" 
              className="w-full h-full object-cover scale-110 hover:scale-105 transition-transform duration-1000"
            />
          </div>
          
          {/* Floating Achievement Badge */}
          <div className="absolute top-8 right-8 z-20 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center">
              <div className="text-yellow-400 text-2xl font-bold">2×</div>
              <div className="text-white text-xs font-medium">MELHOR COACH</div>
              <div className="text-white/80 text-xs">2014 & 2015</div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Achievement Badge */}
              <div className="bg-green-700/90 backdrop-blur-sm text-green-100 px-6 py-3 rounded-full text-sm font-bold mb-8 border border-green-500/30">
                Melhor Treinador Brasileiro de Base 2014 & 2015
              </div>
              
              {/* Main Title with Gradient */}
              <div className="mb-6">
                <h1 className="text-7xl lg:text-8xl font-bold mb-2 bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent">
                  Carlos Omaki
                </h1>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-32"></div>
                  <div className="text-green-300 font-bold text-lg tracking-wider">COT</div>
                  <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-32"></div>
                </div>
              </div>
              
              <p className="text-3xl lg:text-4xl mb-4 text-white font-light">40 anos formando campeões</p>
              <p className="text-xl mb-12 text-green-100 font-medium tracking-wide">Carlos Omaki Tennis</p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contato" className="group bg-white text-green-800 px-8 py-4 rounded-xl font-bold hover:bg-green-50 inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <span>Agendar Avaliação</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#filosofia" className="group border-2 border-white/80 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-800 inline-flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm">
                  <span>Nossa Filosofia</span>
                  <svg className="w-5 h-5 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white/60">
            <div className="animate-bounce">
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <p className="text-xs mt-2 font-medium">Role para descobrir</p>
            </div>
          </div>
        </header>

        {/* Stats Section - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Quatro Décadas de Excelência</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="group text-center">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-3">500+</h3>
                  <p className="text-gray-600 font-medium">Jovens tenistas ativos</p>
                </div>
              </div>
              
              <div className="group text-center">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-green-700"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent mb-3">40</h3>
                  <p className="text-gray-600 font-medium">Anos de experiência</p>
                </div>
              </div>
              
              <div className="group text-center">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-yellow-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent mb-3">2×</h3>
                  <p className="text-gray-600 font-medium">Melhor Treinador de Base</p>
                </div>
              </div>
              
              <div className="group text-center">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-700 to-green-800"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-green-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-green-800 to-green-900 bg-clip-text text-transparent mb-3">100+</h3>
                  <p className="text-gray-600 font-medium">Campeões formados</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Enhanced */}
        <section id="sobre" className="py-24 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-green-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Desde 1980
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Uma Carreira de <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">40 Anos</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  De atleta a referência nacional, a jornada de Carlos Omaki é a história do tênis brasileiro moderno
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                {/* Images Column */}
                <div className="space-y-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <img 
                      src="/omaki/omaki_team.jpg" 
                      alt="Carlos Omaki com sua equipe técnica" 
                      className="relative rounded-2xl shadow-2xl w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="text-sm font-semibold text-gray-800">Equipe Técnica COT</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group relative overflow-hidden rounded-xl shadow-lg">
                      <img 
                        src="/omaki/clube_paulistano.jpg" 
                        alt="Club Athletico Paulistano" 
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-3 left-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-semibold">Club Athletico Paulistano</p>
                      </div>
                    </div>
                    
                    <div className="group relative overflow-hidden rounded-xl shadow-lg">
                      <img 
                        src="/omaki/trophy.webp" 
                        alt="Troféu Melhor Treinador" 
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-3 left-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-semibold">Melhor Treinador 2x</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="space-y-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl leading-relaxed text-gray-700 mb-6">
                      Com 40 anos de carreira, Carlos Omaki é <span className="font-bold text-green-700">Melhor Treinador Brasileiro de Base (2014 e 2015)</span> 
                      e proprietário da <span className="font-bold text-gray-800">Academia COT</span>.
                    </p>
                    
                    <p className="text-lg leading-relaxed text-gray-600 mb-6">
                      Coordena equipes no <span className="font-bold text-gray-800">Club Athletico Paulistano, Academia Paulistana de Tênis e Tênis Clube Paulista</span>, 
                      atendendo <span className="font-bold text-green-700">500+ jovens tenistas</span> em São Paulo.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-600">
                      Lidera o <span className="font-bold text-gray-800">Instituto Primeiro Serviço</span> (projeto social) e integra a diretoria do 
                      <span className="font-bold text-gray-800"> Memorial Tênis Brasileiro</span> desde 2023.
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0H7m5 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6-9V8a2 2 0 012-2h2a2 2 0 012 2v1" />
                        </svg>
                      </div>
                      <p className="text-sm font-semibold text-gray-800">3 Clubes</p>
                      <p className="text-xs text-gray-600">Principais SP</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <p className="text-sm font-semibold text-gray-800">Projeto Social</p>
                      <p className="text-xs text-gray-600">Primeiro Serviço</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-semibold text-gray-800">Memorial</p>
                      <p className="text-xs text-gray-600">Tênis Brasileiro</p>
                    </div>
                  </div>
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

        {/* Results Section - Elite Showcase */}
        <section id="resultados" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23059669' fill-opacity='0.1'%3e%3ccircle cx='30' cy='30' r='2'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-green-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Formando Campeões Mundiais
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Resultados</span> que Falam
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Do juvenil ao topo mundial: atletas formados pelo método Omaki conquistando os maiores palcos do tênis
                </p>
              </div>
              
              {/* Elite Athletes Showcase */}
              <div className="grid lg:grid-cols-2 gap-12 mb-20">
                {/* Beatriz Haddad Maia */}
                <div className="group">
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-400/5 to-green-600/10"></div>
                    
                    {/* Award Badge */}
                    <div className="absolute top-6 right-6 z-10">
                      <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        TOP 15 WTA
                      </div>
                    </div>

                    <div className="relative p-8">
                      <div className="flex items-start gap-6 mb-8">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                          <img 
                            src="/omaki/omaki_biahaddad.jpg" 
                            alt="Carlos Omaki com Beatriz Haddad Maia" 
                            className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">Beatriz Haddad Maia</h3>
                          <p className="text-green-700 font-semibold text-lg mb-1">Número 1 do Brasil</p>
                          <p className="text-gray-600 text-sm">Formada na base com Carlos Omaki</p>
                        </div>
                      </div>

                      {/* Achievements Grid */}
                      <div className="grid grid-cols-1 gap-4 mb-6">
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-medium text-gray-800">Top 15 mundial WTA</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-medium text-gray-800">Semifinalista Roland Garros 2023</span>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-green-500">
                        <p className="text-sm italic text-gray-700">&ldquo;A base sólida que recebi foi fundamental para chegar onde estou hoje.&rdquo;</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Luisa Stefani */}
                <div className="group">
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-blue-600/10"></div>
                    
                    {/* Medal Badge */}
                    <div className="absolute top-6 right-6 z-10">
                      <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        🥉 OLÍMPICA
                      </div>
                    </div>

                    <div className="relative p-8">
                      <div className="flex items-start gap-6 mb-8">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                          <img 
                            src="/omaki/omaki_stefani.jpeg" 
                            alt="Carlos Omaki com Luisa Stefani" 
                            className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">Luisa Stefani</h3>
                          <p className="text-blue-700 font-semibold text-lg mb-1">Medalhista Olímpica</p>
                          <p className="text-gray-600 text-sm">Desenvolvida por Carlos Omaki</p>
                        </div>
                      </div>

                      {/* Achievements Grid */}
                      <div className="grid grid-cols-1 gap-4 mb-6">
                        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-xl">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-medium text-gray-800">Bronze Tóquio 2020 (duplas mistas)</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-medium text-gray-800">Top 10 mundial em duplas</span>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-blue-500">
                        <p className="text-sm italic text-gray-700">&ldquo;Os valores e disciplina aprendidos foram essenciais para o sucesso olímpico.&rdquo;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legacy Numbers - Enhanced */}
              <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-400/20"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold mb-4">Legado em <span className="text-green-400">Números</span></h3>
                    <p className="text-gray-300 text-lg">Quatro décadas formando a elite do tênis brasileiro</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="group">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                        <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-2">Categorias de Base</h4>
                        <p className="text-gray-300">Dezenas de campeões brasileiros e sul-americanos formados</p>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                        <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-2">Circuito Profissional</h4>
                        <p className="text-gray-300">Atletas conduzidos do juvenil ao mais alto nível mundial</p>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                        <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-2">Bolsas Universitárias</h4>
                        <p className="text-gray-300">Centenas de jovens encaminhados para universidades americanas</p>
                      </div>
                    </div>
                  </div>
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