const fs = require('fs');
const path = require('path');

// Complete Portuguese messages
const ptMessages = {
  "nav": {
    "home": "Início",
    "about": "Sobre",
    "sobre": "Sobre",
    "philosophy": "Filosofia",
    "filosofia": "Filosofia",
    "programs": "Programas",
    "programas": "Programas",
    "projects": "Projetos",
    "projetos": "Projetos",
    "results": "Resultados",
    "resultados": "Resultados",
    "press": "Imprensa",
    "imprensa": "Imprensa",
    "articles": "Artigos",
    "artigos": "Artigos",
    "contact": "Contato",
    "contato": "Contato",
    "politicas": "Políticas"
  },
  "hero": {
    "badge": "40+ anos formando campeões",
    "title": "Carlos Omaki",
    "subtitle": "Tênis, método e legado",
    "description": "Treinamento competitivo para infanto-juvenis e adultos. Projetos sociais e a memória do tênis brasileiro.",
    "cta": {
      "primary": "Agendar avaliação",
      "secondary": "Conheça a filosofia"
    }
  },
  "stats": {
    "athletes": "500+ atletas ativos",
    "award": "2× Melhor Treinador de Base",
    "projects": "Projetos sociais & Memorial"
  },
  "philosophy": {
    "title": "Filosofia em 3 Pilares",
    "subtitle": "Metodologia desenvolvida em 40 anos de experiência",
    "meta": {
      "title": "Filosofia - Carlos Omaki Tennis",
      "description": "Conheça a filosofia de treinamento que formou campeões como Bia Haddad e Luisa Stefani"
    },
    "technique": {
      "title": "Técnica de Excelência",
      "description": "Fundamentos sólidos construídos desde a base, com correção biomecânica e desenvolvimento progressivo.",
      "point1": "Análise biomecânica detalhada",
      "point2": "Correção progressiva de movimentos",
      "point3": "Desenvolvimento de estilo próprio"
    },
    "competition": {
      "title": "Competição Inteligente",
      "description": "Estratégia mental e tática para vencer não apenas com força, mas com inteligência de jogo.",
      "point1": "Preparação mental e emocional",
      "point2": "Análise tática de adversários",
      "point3": "Gestão de pressão competitiva"
    },
    "formation": {
      "title": "Formação Humana",
      "description": "Valores do esporte aplicados à vida: disciplina, respeito, superação e trabalho em equipe.",
      "point1": "Desenvolvimento de caráter",
      "point2": "Liderança e trabalho em equipe",
      "point3": "Valores para toda vida"
    },
    "method": {
      "title": "O Método Omaki",
      "description": "Uma abordagem holística que combina técnica refinada, preparação mental e desenvolvimento pessoal.",
      "imageAlt": "Equipe de atletas em treinamento",
      "step1": {
        "title": "Avaliação Individual",
        "description": "Análise completa do perfil físico, técnico e psicológico do atleta."
      },
      "step2": {
        "title": "Planejamento Personalizado",
        "description": "Programa de desenvolvimento adaptado aos objetivos e potencial de cada aluno."
      },
      "step3": {
        "title": "Execução Supervisionada",
        "description": "Acompanhamento constante com correções e ajustes em tempo real."
      },
      "step4": {
        "title": "Evolução Mensurável",
        "description": "Métricas claras de progresso e resultados tangíveis em quadra."
      }
    },
    "values": {
      "title": "Nossos Valores",
      "excellence": {
        "title": "Excelência",
        "description": "Busca constante pela melhor versão de cada atleta."
      },
      "respect": {
        "title": "Respeito",
        "description": "Valorização do adversário, das regras e do esporte."
      },
      "evolution": {
        "title": "Evolução",
        "description": "Crescimento contínuo dentro e fora das quadras."
      }
    }
  },
  "about": {
    "badge": "Desde 1980",
    "title": "Carlos Omaki",
    "intro": "Treinador referência no tênis brasileiro, com mais de 40 anos dedicados à formação de atletas campeões e ao desenvolvimento do esporte no país.",
    "description": "Minha jornada no tênis começou como atleta e evoluiu para uma missão: formar não apenas campeões em quadra, mas pessoas vitoriosas na vida.",
    "meta": {
      "title": "Sobre Carlos Omaki - 40 Anos de Tênis",
      "description": "Conheça a trajetória de Carlos Omaki, referência no tênis brasileiro"
    },
    "journey": {
      "title": "Trajetória",
      "start": {
        "title": "Início da Jornada",
        "description": "Início como atleta e transição para treinador, desenvolvendo metodologia própria."
      },
      "growth": {
        "title": "Crescimento e Reconhecimento",
        "description": "Formação de primeiros campeões nacionais e internacionais."
      },
      "legacy": {
        "title": "Legado Consolidado",
        "description": "Referência nacional com atletas no circuito profissional mundial."
      }
    },
    "achievements": {
      "title": "Conquistas e Reconhecimentos",
      "coaching": {
        "title": "Como Treinador",
        "item1": "2× Melhor Treinador de Base do Brasil",
        "item2": "Formador de atletas Top 20 WTA",
        "item3": "100+ títulos nacionais e internacionais"
      },
      "social": {
        "title": "Impacto Social",
        "item1": "Fundador do Instituto Primeiro Serviço",
        "item2": "Diretor Fundador do Memorial do Tênis Brasileiro",
        "item3": "1000+ jovens beneficiados em projetos sociais"
      }
    }
  },
  "programs": {
    "title": "Programas de Desenvolvimento",
    "subtitle": "Metodologia adaptada para cada fase e objetivo",
    "includes": "O que está incluído",
    "cta": "Solicitar proposta",
    "meta": {
      "title": "Programas de Tênis - Carlos Omaki",
      "description": "Programas de treinamento para todas as idades e níveis"
    },
    "juniors": {
      "title": "Juniors Competitivos",
      "audience": "6 a 18 anos",
      "description": "Formação completa para atletas jovens com foco em torneios estaduais, nacionais e internacionais.",
      "feature1": "Treinamento técnico e tático 5x por semana",
      "feature2": "Preparação física específica",
      "feature3": "Acompanhamento em torneios",
      "feature4": "Suporte psicológico esportivo"
    },
    "adults": {
      "title": "Adultos Competitivos",
      "audience": "18+ anos",
      "description": "Programa intensivo para jogadores adultos que buscam performance em torneios e rankings.",
      "feature1": "Treinos personalizados por nível",
      "feature2": "Estratégia e tática avançada",
      "feature3": "Preparação para torneios específicos",
      "feature4": "Análise de vídeo e correção técnica"
    },
    "clinics": {
      "title": "Clínicas para Clubes",
      "audience": "Clubes e Escolas",
      "description": "Workshops especializados e clínicas técnicas para clubes, escolas e grupos.",
      "feature1": "Programas customizados por demanda",
      "feature2": "Capacitação de professores",
      "feature3": "Avaliação de atletas"
    },
    "online": {
      "title": "Online Coaching",
      "audience": "Global",
      "description": "Análise técnica e planejamento tático através de vídeos e consultorias remotas.",
      "feature1": "Análise detalhada de vídeos",
      "feature2": "Plano de treino personalizado",
      "feature3": "Acompanhamento mensal"
    },
    "cta": {
      "title": "Pronto para evoluir seu jogo?",
      "subtitle": "Entre em contato para uma avaliação personalizada",
      "button": "Agendar Avaliação",
      "philosophy": "Conhecer Filosofia"
    }
  },
  "projects": {
    "title": "Projetos & Legado",
    "subtitle": "Transformando vidas através do tênis",
    "meta": {
      "title": "Projetos Sociais - Carlos Omaki Tennis",
      "description": "Instituto Primeiro Serviço e Memorial do Tênis Brasileiro"
    },
    "institute": {
      "title": "Instituto Primeiro Serviço",
      "description": "Democratizando o acesso ao tênis de qualidade para jovens de comunidades carentes, oferecendo não apenas treinamento esportivo, mas também suporte educacional e desenvolvimento pessoal.",
      "imageAlt": "Jovens atletas do Instituto Primeiro Serviço",
      "impact": {
        "students": "Alunos formados",
        "annual": "Alunos por ano",
        "years": "Anos de projeto",
        "retention": "Taxa de permanência"
      },
      "programs": {
        "title": "Programas Oferecidos",
        "item1": "Iniciação esportiva gratuita para jovens de 7 a 17 anos",
        "item2": "Suporte escolar e acompanhamento pedagógico",
        "item3": "Formação de valores e cidadania através do esporte"
      },
      "cta": "Como apoiar o projeto"
    },
    "memorial": {
      "title": "Memorial do Tênis Brasileiro",
      "role": "Diretor Fundador",
      "description": "Preservando a história e celebrando as conquistas do tênis nacional, o Memorial é um espaço de memória, pesquisa e inspiração para as novas gerações.",
      "imageAlt": "Memorial do Tênis Brasileiro",
      "imageCredit": "Foto: Arquivo Memorial",
      "mission": {
        "title": "Nossa Missão",
        "item1": "Preservar a memória do tênis brasileiro",
        "item2": "Documentar conquistas e trajetórias de atletas",
        "item3": "Inspirar novas gerações através da história"
      },
      "cta": "Visitar Memorial"
    },
    "impact": {
      "title": "Impacto Real",
      "subtitle": "Números que refletem décadas de dedicação ao desenvolvimento do tênis e transformação social",
      "years": "Anos de dedicação",
      "lives": "Vidas transformadas",
      "legacy": "Legado infinito"
    }
  },
  "results": {
    "title": "Resultados que Falam",
    "subtitle": "Atletas formados pelo método Omaki conquistando o mundo",
    "featured": {
      "title": "Destaques Profissionais"
    },
    "achievements": "Principais Conquistas",
    "categories": {
      "title": "Resultados por Categoria",
      "professional": "Profissionais",
      "junior": "Juvenis",
      "college": "Universitários"
    },
    "stats": {
      "title": "Números que Impressionam",
      "athletes": "Atletas formados",
      "professionals": "Profissionais ativos",
      "scholarships": "Bolsas universitárias",
      "titles": "Títulos conquistados"
    },
    "testimonials": {
      "title": "Depoimentos",
      "quote1": "O Carlos não apenas me ensinou a jogar tênis, ele me ensinou a ser uma competidora, a nunca desistir e a sempre buscar a excelência. Devo muito da minha carreira a ele."
    },
    "viewMore": "Ver todos os resultados",
    "meta": {
      "title": "Resultados e Atletas - Carlos Omaki Tennis",
      "description": "Conheça os atletas formados e resultados alcançados"
    }
  },
  "contact": {
    "title": "Vamos Conversar",
    "subtitle": "Agende uma avaliação ou tire suas dúvidas",
    "meta": {
      "title": "Contato - Carlos Omaki Tennis",
      "description": "Entre em contato para agendar uma avaliação ou conhecer nossos programas"
    },
    "form": {
      "title": "Envie sua mensagem",
      "name": "Nome completo",
      "email": "E-mail",
      "phone": "WhatsApp",
      "profile": "Perfil",
      "profiles": {
        "parent": "Pai/Mãe de atleta",
        "athlete": "Atleta",
        "club": "Clube/Escola"
      },
      "message": "Mensagem",
      "consent": "Autorizo o uso de imagem para fins de divulgação",
      "submit": "Enviar mensagem",
      "submitting": "Enviando...",
      "success": "Mensagem enviada com sucesso!",
      "error": "Erro ao enviar. Tente novamente."
    },
    "info": {
      "title": "Informações de Contato"
    },
    "location": {
      "title": "Localização",
      "address": "São Paulo, SP"
    },
    "hours": {
      "title": "Horários",
      "weekdays": "Segunda a Sexta: 6h às 22h",
      "saturday": "Sábado: 7h às 18h",
      "sunday": "Domingo: 8h às 14h"
    },
    "whatsapp": {
      "title": "Resposta Rápida",
      "description": "Prefere conversar por WhatsApp? Clique abaixo para iniciar uma conversa.",
      "button": "Conversar no WhatsApp",
      "message": "Olá! Gostaria de saber mais sobre os programas de tênis."
    },
    "calendar": {
      "title": "Agende sua Avaliação",
      "subtitle": "Escolha o melhor horário para conhecer nossa metodologia"
    },
    "map": {
      "title": "Localização no mapa"
    }
  },
  "footer": {
    "rights": "Todos os direitos reservados",
    "policies": {
      "privacy": "Privacidade",
      "terms": "Termos de Uso",
      "imageRights": "Direitos de Imagem"
    }
  },
  "cookies": {
    "message": "Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa",
    "policy": "Política de Privacidade",
    "accept": "Aceitar"
  },
  "common": {
    "back": "Voltar",
    "share": "Compartilhar",
    "loading": "Carregando...",
    "error": "Erro ao carregar",
    "tryAgain": "Tentar novamente"
  },
  "imageCredits": {
    "personalArchive": "Foto de arquivo pessoal",
    "editorialUse": "Uso editorial/arquivo pessoal",
    "consentObtained": "Consentimento de imagem obtido"
  },
  "error": {
    "404": {
      "title": "Página não encontrada",
      "description": "A página que você está procurando não existe ou foi movida.",
      "back": "Voltar ao início"
    },
    "500": {
      "title": "Algo deu errado",
      "description": "Ocorreu um erro inesperado. Por favor, tente novamente.",
      "retry": "Tentar novamente"
    }
  }
};

// English messages (simplified version)
const enMessages = {
  "nav": {
    "home": "Home",
    "about": "About",
    "sobre": "About",
    "philosophy": "Philosophy",
    "filosofia": "Philosophy",
    "programs": "Programs",
    "programas": "Programs",
    "projects": "Projects",
    "projetos": "Projects",
    "results": "Results",
    "resultados": "Results",
    "press": "Press",
    "imprensa": "Press",
    "articles": "Articles",
    "artigos": "Articles",
    "contact": "Contact",
    "contato": "Contact",
    "politicas": "Policies"
  },
  "hero": {
    "badge": "40+ years training champions",
    "title": "Carlos Omaki",
    "subtitle": "Tennis, method and legacy",
    "description": "Competitive training for juniors and adults. Social projects and Brazilian tennis history.",
    "cta": {
      "primary": "Schedule assessment",
      "secondary": "Learn philosophy"
    }
  },
  "error": {
    "404": {
      "title": "Page not found",
      "description": "The page you are looking for does not exist or has been moved.",
      "back": "Back to home"
    },
    "500": {
      "title": "Something went wrong",
      "description": "An unexpected error occurred. Please try again.",
      "retry": "Try again"
    }
  },
  // Add minimal required translations for other sections
  "about": { "meta": { "title": "About", "description": "About Carlos Omaki" } },
  "philosophy": { "meta": { "title": "Philosophy", "description": "Training philosophy" } },
  "programs": { "meta": { "title": "Programs", "description": "Tennis programs" } },
  "projects": { "meta": { "title": "Projects", "description": "Social projects" } },
  "results": { "meta": { "title": "Results", "description": "Athletes and results" } },
  "contact": { "meta": { "title": "Contact", "description": "Get in touch" } }
};

// Write files
fs.writeFileSync(
  path.join(__dirname, 'messages', 'pt.json'),
  JSON.stringify(ptMessages, null, 2)
);

fs.writeFileSync(
  path.join(__dirname, 'messages', 'en.json'),
  JSON.stringify(enMessages, null, 2)
);

console.log('✅ Message files updated!');