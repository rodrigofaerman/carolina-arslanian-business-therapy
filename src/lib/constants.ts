// ============================================
// MENTORIA MENTAL FITNESS - Content Constants
// All content centralized for easy updates
// Aligned with: ESTRUTURA MENTORIA _ MENTAL FITNESS-11.11.25.md
// ============================================

export const SITE = {
  name: "Business Therapy - Mentoria Mental Fitness",
  tagline: "90 dias para líderes C-Level dominarem alta performance",
  author: "Carolina Arslanian",
  email: "carolina@arslanian.com.br",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "+5511963435059",
  linkedin: "https://www.linkedin.com/in/carolinaarslanian",
  instagram: "https://www.instagram.com/carol.mentalfitness",
  location: "São Paulo, SP | Florida, EUA | Atendimento online global",
};

export const NAV_ITEMS = [
  { label: "Início", href: "#hero" },
  { label: "O Programa", href: "#metodo" },
  { label: "Resultados", href: "#resultados" },
  { label: "Conteúdo", href: "#como-funciona" },
  { label: "Investimento", href: "#investimento" },
  { label: "FAQ", href: "#faq" },
];

export const SECTIONS = [
  { id: "hero", label: "Início" },
  { id: "problema", label: "O Problema" },
  { id: "metodo", label: "O Método" },
  { id: "como-funciona", label: "Como Funciona" },
  { id: "resultados", label: "Resultados" },
  { id: "comparacao", label: "Comparação" },
  { id: "sobre", label: "Sobre" },
  { id: "para-quem", label: "Para Quem" },
  { id: "investimento", label: "Investimento" },
  { id: "urgencia", label: "Urgência" },
  { id: "faq", label: "FAQ" },
  { id: "proximos-passos", label: "Próximos Passos" },
  { id: "decisao", label: "Decisão" },
];

// ============================================
// SEÇÃO 1: HERO SECTION
// ============================================
export const HERO = {
  badge: "TURMA MARÇO 2026 | APENAS 8 VAGAS",
  title: "Você foi promovido 5 vezes.",
  titleHighlight: "Mas ninguém te ensinou a comandar sua mente no nível que comanda seu trabalho.",
  subtitle: "Mentoria exclusiva de 90 dias para líderes C-Level dominarem o jogo invisível da alta performance.",
  ctaPrimary: {
    text: "Vagas limitadas, garanta a sua agora!",
    href: "#investimento",
  },
  ctaSecondary: {
    text: "Conheça o Programa Completo",
    href: "#metodo",
  },
  trustBadges: [
    { icon: "👥", text: "Turma reduzida para troca de alto nível" },
    { icon: "📈", text: "ROI de 5-6x em apenas 90 dias" },
    { icon: "🔬", text: "Pesquisa TalentSmart, líder mundial em inteligência emocional" },
  ],
};

// ============================================
// SEÇÃO 2: PROBLEMA - IDENTIFICAÇÃO DA DOR
// ============================================
export const PROBLEM = {
  title: "A verdade que ninguém te contou",
  subtitle: "Não é estresse. É que você está rodando um sistema operacional obsoleto.",
  narrative: [
    "Você achava que a promoção resolveria tudo. Mais poder. Mais impacto. Mais reconhecimento.",
    "Mas agora você trabalha mais do que nunca, dorme pior, e ainda assim sente que está deixando algo importante passar.",
    "**Você não está sozinho. Você não é fraco. Você não é incompetente.**",
    "Você está apenas lutando a batalha errada — tentando controlar o caos externo sem dominar o interno.",
  ],
  checklistTitle: "Quantos destes sinais você reconhece?",
  checklist: [
    "Você acorda às 3h da manhã com o cérebro já em modo reunião",
    "Você tem medo de que descubram que você não é tão bom quanto parece",
    "Seu calendário é um Tetris impossível de encaixar",
    "Sente culpa quando está parado. Produtividade e disciplina são sinônimo de alta performance",
    "Já investiu em coaching tradicional, terapia, cursos de liderança mas não sentiu transformação real",
  ],
  thresholdMessage: "Se você marcou 3+: Continue lendo - este programa foi feito para você.",
};

// ============================================
// SEÇÃO 3: SOLUÇÃO - FRAMEWORK MENTAL FITNESS
// ============================================
export const FRAMEWORK = {
  title: "O jogo que ninguém te ensinou",
  hook: "Você domina o jogo visível. Mas excelência virou commodity. **O 1% joga o jogo que ninguém te ensinou.**",
  transformations: [
    "Resultado comprovado e palpável inclusive financeiro",
    "De \"afogando nas demandas\" para \"respirando\" e \"no controle\"",
    "De se sentir uma fraude para discutir \"cifras concretas\"",
    "De \"sem tempo hábil e culpado\" para \"tenho o controle do meu tempo\"",
  ],
  energyWaste: "50% da sua energia está no jogo errado.",
  innerGameText: "Você domina planejamento, gestão, estratégia, resultados. Mas não está jogando o **Inner Game** — o jogo invisível que separa o 1% do resto.",
  whatIs: {
    title: "O que é Mental Fitness?",
    definition: "Mental Fitness é a musculação da mente.",
    explanation: "Assim como você treina o corpo para performance física, você pode treinar a mente para performance emocional e estratégica. É o segredo invisível dos líderes que se destacam sob pressão.",
    quote: "\"Se você não conseguir gerenciar o 'barulho interno' dentro de si, como poderá liderar o que está fora?\"",
  },
  videoPlaceholder: "Carol explica o Framework Mental Fitness",
  games: [
    {
      number: 1,
      name: "PENSAR",
      period: "MÊS 1",
      subtitle: "O Controle Remoto do Estresse",
      mainBenefit: "Você para de ser refém dos seus pensamentos.",
      description: "Aprende a desligar o modo \"alerta constante\" sem perder performance. Eleve sua Resiliência Mental: recupere sua energia em horas, não em semanas.",
      icon: "brain",
      tools: [
        "Framework Reprogramação Mental 3 C's: Catch It, Challenge It, Change It",
        "Técnicas de Zoom Out",
        "Diagnóstico pré-início via IA exclusivo",
        "Práticas de alta performance: Visualização, Breathwork",
      ],
      deliverable: "Mental Fitness Scorecard individual com métricas de evolução",
    },
    {
      number: 2,
      name: "AGIR",
      period: "MÊS 2",
      subtitle: "Sistemas que sustentam alta performance",
      mainBenefit: "Você redesenha sua energia e tempo.",
      description: "Você não precisa de mais disciplina. Precisa de melhores estratégias para sair do piloto automático e voltar a liderar sua própria vida.",
      icon: "target",
      tools: [
        "Rituais adaptativos",
        "Protocolo de elasticidade",
        "Gestão de vazamentos de energia e tempo",
      ],
      deliverable: "Sistema de rituais e práticas para maximizar produtividade criativa",
    },
    {
      number: 3,
      name: "SENTIR",
      period: "MÊS 3",
      subtitle: "Autoconfiança e Influência Inabalável",
      mainBenefit: "Você reconstrói confiança real (não máscara).",
      description: "Livre da busca por validação, você destrava sua voz de líder. Seu poder de influência se torna sua nova moeda.",
      icon: "heart",
      tools: [
        "Reprogramação de autoimagem",
        "Authority Protocol",
        "Presença executiva",
      ],
      deliverable: "Plano de presença executiva personalizado",
    },
  ],
};

// ============================================
// SEÇÃO 4: COMO FUNCIONA
// ============================================
export const HOW_IT_WORKS = {
  title: "Como funciona a jornada de 90 dias",
  subtitle: "Estrutura desenhada para transformação real, não teoria.",
  format: {
    totalMeetings: "8 encontros total (virtual): 6 encontros em grupo (2h cada) + 2 encontros individuais (1h cada)",
    frequency: "Quinzenal (sexta-feira 17h-19h)",
    hybrid: "Sessões Individuais (Híbridas): Virtual ou Presencial (SP/FL) sob consulta",
    boutique: "Turma boutique: Para transformação real e personalização",
    whatsapp: "Grupo WhatsApp exclusivo: Networking, suporte entre sessões e conexões estratégicas",
    deliverables: "Diagnóstico e Perfil Comportamental individual via inteligência artificial exclusiva para participantes",
    scorecard: "Mental Fitness Scorecard: Acompanhamento de evolução com métricas tangíveis",
  },
  timeline: [
    {
      phase: "FASE 1",
      title: "Diagnóstico & Fundação",
      weeks: "Semanas 1-4",
      description: "Mapeamento completo dos seus padrões mentais, sabotadores e vazamentos de energia.",
      includes: [
        "Diagnóstico com IA exclusiva",
        "2 encontros em grupo",
        "1 sessão individual",
      ],
    },
    {
      phase: "FASE 2",
      title: "Reprogramação",
      weeks: "Semanas 5-8",
      description: "Implementação dos 3 Jogos de Performance com ferramentas práticas.",
      includes: [
        "2 encontros em grupo",
        "Mapeamento de perfil (Eneagrama + DISC)",
        "Suporte contínuo via WhatsApp",
      ],
    },
    {
      phase: "FASE 3",
      title: "Consolidação & Sustentabilidade",
      weeks: "Semanas 9-12",
      description: "Criação de rituais adaptativos e plano de manutenção pós-mentoria.",
      includes: [
        "2 encontros em grupo",
        "1 sessão individual de fechamento",
        "Mental Fitness Scorecard completo",
      ],
    },
  ],
  startDate: "Início Confirmado: Março 2026",
  nextCohort: "Próxima turma apenas em Inverno 2026",
};

// ============================================
// SEÇÃO 5: RESULTADOS & PROVAS SOCIAIS
// ============================================
export const RESULTS = {
  title: "ROI Real: Transformação Mensurável",
  subtitle: "Não são promessas. São métricas reais de participantes anteriores.",
  scienceStats: [
    { value: 58, suffix: "%", label: "Mental Fitness é responsável por mais da metade do sucesso no trabalho*" },
    { value: 90, suffix: "%", label: "A grande maioria dos profissionais de alta performance tem alto nível de Mental Fitness*" },
    { value: 6, suffix: "x", label: "ROI médio reportado por participantes em 90 dias" },
  ],
  scienceSource: "*Pesquisa TalentSmart, líder mundial em inteligência emocional",
  metrics: [
    { label: "Estresse", before: 9, after: 4, change: -56, emoji: "😰" },
    { label: "Autoconfiança", before: 4, after: 9, change: 125, emoji: "💎" },
    { label: "Produtividade", before: 5, after: 9, change: 80, emoji: "⚡" },
    { label: "Clareza Mental", before: 3, after: 8, change: 166, emoji: "🧠" },
    { label: "Energia Criativa", before: 2, after: 8, change: 300, emoji: "✨" },
  ],
  metricsTitle: "Caso Real: Líder Executiva (90 dias)",
  roiFinancial: {
    title: "ROI Financeiro Tangível",
    items: [
      { icon: "⏰", highlight: "2-3h/dia", text: "recuperadas com ganho de produtividade de 70%" },
      { icon: "💵", highlight: "~R$ 150k/ano", text: "em valor gerado (baseado em salário R$ 600k)" },
      { icon: "📈", highlight: "18.75x", text: "ROI anual sobre o investimento inicial" },
      { icon: "🚀", highlight: "5-6x", text: "retorno mínimo em 90 dias (sem contar ganhos intangíveis)" },
    ],
  },
  testimonials: [
    {
      quote: "Tenho me sentido, de verdade, cada dia mais FORTALECIDA, mais ALIMENTADA e mais INSTRUMENTALIZADA para seguir minha jornada e atingir meus objetivos.",
      name: "Participante",
      role: "Executiva de RH",
      company: "AbbVie",
    },
    {
      quote: "Agradecimento muito especial a Carol pelo resultado palpável, inclusive financeiro que veio em menos de 6 meses.",
      name: "Participante",
      role: "Executiva de RH",
      company: "AbbVie",
    },
    {
      quote: "A sensação que eu tenho é que, agora, finalmente eu saí de debaixo da água. Estou conseguindo voltar a respirar... A grande conquista foi essa: retomei as rédeas. Tenho hoje muita clareza dos departamentos da minha vida, das ações que são necessárias fazer e que peso vou dar para isso.",
      name: "Participante",
      role: "Executiva de RH",
      company: "AbbVie",
    },
    {
      quote: "Antes do Business Therapy eu estava com a sensação de não ter tempo hábil e me sentindo culpada. Depois de montar com a Carol algumas estratégias de planejamento e reorganização, a sensação mudou para 'Melhor, melhor, melhor'. Agora sinto que tenho o controle do meu tempo e que é viável. Ajudou muito a acalmar a minha autocrítica.",
      name: "Participante",
      role: "Executiva Internacional",
      company: "AbbVie",
    },
  ],
  roiCalculation: {
    title: "ROI Conservador",
    costs: [
      { label: "Investimento no programa", value: "R$ 7.000" },
      { label: "Horas recuperadas (3h/dia × 60 dias úteis)", value: "180h" },
      { label: "Valor hora executivo (R$ 500/h)", value: "R$ 90.000" },
    ],
    result: "ROI de 12x em 90 dias (conservador: 5-6x)",
  },
};

// ============================================
// SEÇÃO 6: COMPARAÇÃO VS ALTERNATIVAS
// ============================================
export const COMPARISON = {
  title: "Por que Mental Fitness vs Coaching Tradicional ou Curso?",
  columns: [
    {
      type: "coaching",
      title: "Coaching Tradicional",
      focus: "Metas externas",
      duration: "6-12 meses",
      application: "Genérica",
      format: "Individual",
      investment: "R$ 15-30k",
      roi: "Difuso",
    },
    {
      type: "course",
      title: "Curso / MBA",
      focus: "Conhecimento teórico",
      duration: "18-24 meses",
      application: "Acadêmica",
      format: "Teórico em massa",
      investment: "R$ 80-150k",
      roi: "Longo prazo",
    },
    {
      type: "mentalfitness",
      title: "Mental Fitness Mentoria",
      focus: "Reprogramação interna e ações externas para sustentar mudanças",
      duration: "90 dias com alto nível de profundidade e entregáveis",
      application: "Imediata (segunda-feira)",
      format: "Híbrido: grupo + individual + IA",
      investment: "R$ 7-8.5k",
      roi: "5-6x em 90 dias",
      highlight: true,
    },
  ],
  valueBreakdown: {
    title: "Breakdown de Valor",
    calculation: "R$ 8.500 ÷ 8 encontros = R$ 1.062/encontro",
    comparison: "Menos que 1 sessão de coaching executivo premium.",
    includes: [
      "6 sessões em grupo com C-Levels",
      "2 sessões individuais personalizadas",
      "Entregáveis e métricas de evolução individuais",
      "IA exclusiva para diagnóstico profundo",
      "Mapeamento Eneagrama + DISC",
      "Comunidade de líderes + networking estratégico",
      "Suporte entre sessões via WhatsApp",
    ],
  },
};

// ============================================
// SEÇÃO 7: QUEM É CAROL
// ============================================
export const ABOUT = {
  name: "Carolina Arslanian",
  title: "Quem é sua mentora",
  credentials: [
    "20+ anos como Executiva em multinacionais (L'Oréal, Danone)",
    "8 anos em posições de Diretoria de Marketing",
    "Experiência liderando times em 8 países",
    "Mental Fitness Leadership Trainer certificada",
    "Especialização em Neurociência Aplicada à Liderança",
  ],
  quote: "Eu já estive exatamente onde você está. Trabalhando 70h, provando meu valor, exausta. Descobri que o problema não era trabalhar mais — era jogar o jogo errado. Hoje, ensino líderes a fazer a mesma virada.",
  differentiator: "Não sou coach de palco. Sou executiva que virou mentora porque passei pela transformação primeiro.",
  stats: [
    { value: "100+", label: "líderes C-Level transformados" },
    { value: "20+", label: "anos de experiência executiva" },
    { value: "8", label: "países de atuação" },
  ],
};

// ============================================
// SEÇÃO 8: PARA QUEM É (E PARA QUEM NÃO É)
// ============================================
export const FOR_WHO = {
  title: "Filtro de Fit: Este programa é para você?",
  idealProfile: {
    title: "Perfil do Líder Ideal",
    cargoSection: {
      title: "Cargo & Responsabilidade",
      items: [
        "C-Level, Diretor ou VP em empresa de médio/grande porte",
        "People leader ou líder de projetos estratégicos",
        "Faturamento pessoal anual de R$ 600k+",
      ],
    },
    momentSection: {
      title: "Momento de Carreira",
      items: [
        "Promovido nos últimos 6-18 meses para posição de alta complexidade",
        "Passando por mudança organizacional (fusão, reestruturação, expansão)",
        "Reconhece que o próximo nível de performance exige mudança interna, não mais técnicas externas",
        "Já investiu em desenvolvimento (coaching, MBA, terapia) mas ainda sente que falta algo",
      ],
    },
  },
  notFor: {
    title: "Este programa NÃO é para você se",
    items: [
      "Busca soluções rápidas ou \"hacks\" de produtividade sem mudança mental profunda",
      "Não está disposto a dedicar 1h30/semana + 15-30min/dia de prática entre sessões",
      "Prefere apenas técnicas e ferramentas sem trabalhar os padrões mentais subjacentes",
      "Acredita que \"mais disciplina\" é a única solução (em vez de melhor design mental)",
    ],
  },
};

// ============================================
// SEÇÃO 9: INVESTIMENTO & BÔNUS
// ============================================
export const INVESTMENT = {
  title: "Seu Investimento na Transformação",
  pricing: {
    regular: 8500,
    preLaunch: 7000,
    preLaunchLabel: "OFERTA PRÉ-LANÇAMENTO",
    validUntil: "Válido até 28/02/2026",
    ctaText: "Garanta Seu Valor Especial",
  },
  bonuses: {
    title: "2 Bônus Exclusivos Pré-Lançamento (Valor R$ 3.500)",
    items: [
      {
        icon: "🎁",
        title: "BÔNUS 1: Sessão Individual Adicional",
        value: 2000,
        details: [
          "Quando usar: Suporte intensivo em desafio específico",
          "Formato: Presencial ou virtual (1h)",
        ],
      },
      {
        icon: "🎁",
        title: "BÔNUS 2: Mapeamento Personalizado de Perfil",
        value: 1500,
        details: [
          "Inclui: Eneagrama + DISC",
          "Entrega: Relatório personalizado antes do Encontro 4",
          "Benefício: Entender o que te motiva, o que te limita e seu perfil de liderança",
        ],
      },
    ],
  },
  guarantee: {
    icon: "🛡️",
    title: "POLÍTICA DE SATISFAÇÃO:",
    text: "Se após os 2 primeiros encontros você sentir que o programa não é para você, devolvemos 100% do investimento.",
    tagline: "Risco zero. Transformação garantida.",
  },
  paymentOptions: {
    title: "Opções de Pagamento",
    options: [
      "Pagamento à vista (desconto adicional de 5%)",
      "Parcelamento em até 12x sem juros",
      "Pagamento via transferência ou cartão corporativo",
    ],
  },
};

// ============================================
// SEÇÃO 11: URGÊNCIA & ESCASSEZ
// ============================================
export const URGENCY = {
  deadline: "2026-02-28T23:59:59-03:00",
  totalVacancies: 8,
  filledVacancies: 5,
  title: "Oferta pré-lançamento expira em",
  vacancyText: "Poucas vagas restantes, depois entra na lista de espera para a próxima turma.",
  nextCohort: "Próxima turma apenas em Inverno 2026",
};

// ============================================
// SEÇÃO 12: FAQ (PERGUNTAS FREQUENTES)
// ============================================
export const FAQS = [
  {
    question: "Quanto tempo de dedicação semanal é necessário?",
    answer: "1h30/semana durante os encontros + 15-30min/dia de prática entre sessões para implementação das ferramentas.",
  },
  {
    question: "Posso parcelar o investimento?",
    answer: "Sim! Oferecemos parcelamento em até 12x sem juros no cartão de crédito. Também aceitamos pagamento via transferência bancária ou cartão corporativo.",
  },
  {
    question: "O que acontece se eu perder um encontro?",
    answer: "Todos os encontros são gravados e disponibilizados para os participantes. Você também pode agendar uma sessão individual de alinhamento para não perder o fio da jornada.",
  },
  {
    question: "É terapia? Como difere de coaching executivo?",
    answer: "Não é terapia nem coaching tradicional. Mental Fitness é focado em performance: ferramentas práticas de neurociência aplicada que você implementa imediatamente no trabalho. Enquanto terapia olha para o passado e coaching para metas futuras, Mental Fitness treina habilidades mentais para o presente - como você funciona sob pressão HOJE.",
  },
  {
    question: "Por que apenas 8 participantes?",
    answer: "Para garantir transformação real e personalização profunda. Com 8 líderes C-Level, conseguimos criar conexões genuínas, networking estratégico e adaptar as ferramentas para o contexto específico de cada um.",
  },
  {
    question: "Qual a política de reembolso?",
    answer: "Garantia de Transformação: Se após os 2 primeiros encontros você sentir que o programa não é para você, devolvemos 100% do investimento. Sem perguntas, sem burocracia.",
  },
  {
    question: "Os encontros são presenciais ou virtuais?",
    answer: "Formato híbrido: 6 encontros em grupo são virtuais (sexta-feira 17h-19h), e as 2 sessões individuais podem ser presenciais (SP ou Florida) ou virtuais, conforme sua preferência.",
  },
  {
    question: "O que é a IA exclusiva para participantes?",
    answer: "É um bate-papo com inteligência artificial criada exclusivamente para a mentoria. Ela gera um diagnóstico individual profundo sobre suas dores, desejos e nível de Mental Fitness, personalizado para você.",
  },
  {
    question: "Vou receber certificado?",
    answer: "Sim! Ao final da jornada, você recebe certificado de conclusão da Mentoria Mental Fitness + seu Mental Fitness Scorecard personalizado com todas as métricas de evolução.",
  },
  {
    question: "Como funciona o grupo WhatsApp?",
    answer: "É seu espaço de networking estratégico, suporte entre sessões e conexão com outros líderes C-Level. Usamos para compartilhar insights, ajustes rápidos e criar comunidade.",
  },
];

// ============================================
// SEÇÃO 13: PRÓXIMOS PASSOS
// ============================================
export const NEXT_STEPS = {
  title: "O que acontece depois de garantir sua vaga?",
  steps: [
    {
      number: 1,
      title: "Confirmação",
      description: "Você garante sua vaga e recebe confirmação via e-mail",
    },
    {
      number: 2,
      title: "Comunidade",
      description: "Acesso ao grupo WhatsApp exclusivo da turma para começar a criar conexões",
    },
    {
      number: 3,
      title: "Diagnóstico",
      description: "Bate-papo com IA exclusiva para diagnóstico pré-mentoria",
    },
    {
      number: 4,
      title: "Preparação",
      description: "Recebe calendário completo + materiais preparatórios",
    },
  ],
  startInfo: "🚀 INÍCIO: Primeiro encontro em Março 2026 (data específica será confirmada)",
};

// ============================================
// SEÇÃO 14: CTA FINAL
// ============================================
export const CTA_FINAL = {
  title: "Hora de Decidir: Você Continua no Jogo Visível ou Domina o Jogo Invisível?",
  intro: "Você chegou até aqui porque sabe que algo precisa mudar.",
  tagline: "Não é sobre trabalhar mais. É sobre jogar melhor.",
  ctaPrimary: {
    text: "SIM, QUERO GARANTIR MINHA VAGA NA TURMA OUTONO 2026",
    href: "#investimento",
  },
  ctaSecondary: {
    text: "Ainda tenho dúvidas - Agende 15min de conversa estratégica",
    href: "#", // Calendly or WhatsApp link
  },
  trustBadges: [
    { icon: "🔒", text: "Pagamento 100% seguro" },
    { icon: "🛡️", text: "Garantia de Transformação" },
    { icon: "⏰", text: "Vagas limitadas" },
  ],
};
