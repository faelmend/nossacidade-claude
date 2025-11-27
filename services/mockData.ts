
import { Business, Category, Plan, PlanType, Job } from '../types';

// Cities within ~200km radius of João Pinheiro, MG
export const CITIES = [
  { name: 'João Pinheiro', slug: 'joao-pinheiro', state: 'MG' },
  { name: 'Paracatu', slug: 'paracatu', state: 'MG' },
  { name: 'Unaí', slug: 'unai', state: 'MG' },
  { name: 'Patos de Minas', slug: 'patos-de-minas', state: 'MG' },
  { name: 'Três Marias', slug: 'tres-marias', state: 'MG' },
  { name: 'Vazante', slug: 'vazante', state: 'MG' },
  { name: 'Brasilândia de Minas', slug: 'brasilandia-de-minas', state: 'MG' },
  { name: 'Presidente Olegário', slug: 'presidente-olegario', state: 'MG' },
  { name: 'Lagoa Grande', slug: 'lagoa-grande', state: 'MG' },
  { name: 'Pirapora', slug: 'pirapora', state: 'MG' },
  { name: 'Buritizeiro', slug: 'buritizeiro', state: 'MG' },
  { name: 'Lagamar', slug: 'lagamar', state: 'MG' },
  { name: 'Varjão de Minas', slug: 'varjao-de-minas', state: 'MG' },
  { name: 'São Gonçalo do Abaeté', slug: 'sao-goncalo-do-abaete', state: 'MG' },
  { name: 'Buritis', slug: 'buritis', state: 'MG' },
  { name: 'Arinos', slug: 'arinos', state: 'MG' },
  { name: 'Guarda-Mor', slug: 'guarda-mor', state: 'MG' }
];

export const getCityName = (slug?: string) => {
  const city = CITIES.find(c => c.slug === slug);
  return city ? city.name : 'João Pinheiro';
};

// Expanded categories matching the request for maximum coverage
export const CATEGORIES: (Category & { color: string; bg: string })[] = [
  { 
    id: '1', 
    name: 'Alimentação', 
    slug: 'alimentacao', 
    icon: 'Pizza', 
    color: 'text-orange-600', 
    bg: 'bg-orange-100',
    count: 150,
    subcategories: [
        'Restaurantes', 'Lanchonetes', 'Pizzarias', 'Hamburguerias', 'Padarias', 
        'Confeitarias', 'Açougues', 'Supermercados', 'Hortifruti', 'Distribuidoras de Bebidas',
        'Sorveterias', 'Cafeterias', 'Comida Japonesa', 'Marmitaria', 'Açaí', 'Vegano & Vegetariano', 
        'Churrascarias', 'Food Trucks', 'Comida Caseira', 'Salgados', 'Bolos e Tortas', 'Cervejarias Artesanais',
        'Espetinhos', 'Peixarias', 'Produtores Locais', 'Café Colonial'
    ]
  },
  { 
    id: '2', 
    name: 'Saúde', 
    slug: 'saude', 
    icon: 'HeartPulse', 
    color: 'text-rose-600', 
    bg: 'bg-rose-100',
    count: 120,
    subcategories: [
        'Clínicas Médicas', 'Dentistas', 'Laboratórios', 'Farmácias', 'Fisioterapia', 
        'Psicólogos', 'Nutricionistas', 'Hospitais', 'Óticas', 'Pilates', 
        'Academias', 'Personal Trainer', 'Yoga', 'Quiropraxia', 'Fonoaudiologia', 
        'Dermatologia', 'Pediatria', 'Cardiologia', 'Ortopedia', 'Ginecologia', 'Homeopatia',
        'Psiquiatria', 'Terapia Ocupacional', 'Cuidador de Idosos', 'Ambulância Particular'
    ]
  },
  { 
    id: '3', 
    name: 'Automotivo', 
    slug: 'automotivo', 
    icon: 'CarFront', 
    color: 'text-blue-600', 
    bg: 'bg-blue-100',
    count: 90,
    subcategories: [
        'Oficinas Mecânicas', 'Auto Peças', 'Lava Jato', 'Postos de Combustível', 
        'Borracharias', 'Concessionárias', 'Aluguel de Carros', 'Funilaria e Pintura', 
        'Auto Elétrica', 'Som e Acessórios', 'Guincho 24h', 'Vistoria Veicular', 
        'Estética Automotiva', 'Troca de Óleo', 'Alinhamento e Balanceamento', 'Insulfilm', 'Chaveiro Automotivo',
        'Moto Peças', 'Retífica de Motores', 'Estacionamentos', 'Seguro Auto'
    ]
  },
  { 
    id: '4', 
    name: 'Moda & Vestuário', 
    slug: 'moda', 
    icon: 'Shirt', 
    color: 'text-violet-600', 
    bg: 'bg-violet-100',
    count: 110,
    subcategories: [
        'Roupas Femininas', 'Roupas Masculinas', 'Moda Infantil', 'Calçados', 
        'Acessórios', 'Joalherias', 'Relojoarias', 'Moda Íntima', 'Moda Praia', 'Costureiras', 
        'Aluguel de Roupas', 'Uniformes', 'Bolsas e Malas', 'Tecidos', 'Alta Costura', 
        'Bordados', 'Brechós', 'Moda Fitness', 'Moda Gestante', 'Noivas',
        'Moda Plus Size', 'Artigos em Couro', 'Conserto de Roupas'
    ]
  },
  { 
    id: '5', 
    name: 'Beleza & Estética', 
    slug: 'beleza', 
    icon: 'Scissors', 
    color: 'text-pink-600', 
    bg: 'bg-pink-100',
    count: 95,
    subcategories: [
        'Salões de Beleza', 'Barbearias', 'Clínicas de Estética', 'Manicures', 
        'Maquiadoras', 'Depilação', 'Design de Sobrancelhas', 'Massagem', 
        'Produtos de Beleza', 'Podologia', 'Micropigmentação', 'Tatuagem e Piercing', 
        'Spa', 'Extensão de Cílios', 'Harmonização Facial',
        'Depilação a Laser', 'Bronzeamento', 'Perucas e Apliques'
    ]
  },
  { 
    id: '6', 
    name: 'Construção & Casa', 
    slug: 'construcao', 
    icon: 'Hammer', 
    color: 'text-stone-600', 
    bg: 'bg-stone-100',
    count: 88,
    subcategories: [
        'Material de Construção', 'Arquitetos', 'Engenheiros', 'Construtoras', 
        'Pedreiros', 'Pintores', 'Eletricistas', 'Encanadores', 'Vidraçarias', 
        'Marmorarias', 'Madeireiras', 'Serralherias', 'Gesso', 'Aluguel de Máquinas', 
        'Calhas e Rufos', 'Piscinas', 'Móveis', 'Colchões', 'Decoração', 'Cortinas e Persianas',
        'Cama, Mesa e Banho', 'Utilidades Domésticas', 'Energia Solar',
        'Terraplanagem', 'Poços Artesianos', 'Paisagismo', 'Chaveiro Residencial'
    ]
  },
  { 
    id: '12', 
    name: 'Mídia & Parceiros', 
    slug: 'midia-parceiros', 
    icon: 'Megaphone', 
    color: 'text-fuchsia-600', 
    bg: 'bg-fuchsia-100',
    count: 25,
    subcategories: [
        'Influenciadores Digitais', 'Rádios FM/AM', 'Portais de Notícias', 'Carro de Som',
        'Agências de Marketing', 'Gestão de Redes Sociais', 'Criação de Sites',
        'Jornais Impressos', 'Revistas Locais', 'Outdoors e Painéis',
        'Gráficas Rápidas', 'Comunicação Visual', 'Fachadas e Luminosos', 'Brindes Personalizados',
        'Fotógrafos Publicitários', 'Produtoras de Vídeo'
    ]
  },
  { 
    id: '7', 
    name: 'Serviços Gerais', 
    slug: 'servicos', 
    icon: 'Briefcase', 
    color: 'text-slate-600', 
    bg: 'bg-slate-200',
    count: 130,
    subcategories: [
        'Advogados', 'Contabilidade', 'Imobiliárias', 'Seguros', 'Despachantes', 
        'Lavanderias', 'Dedetizadoras', 'Jardinagem', 
        'Limpeza Pós-obra', 'Mudanças', 'Cartórios', 'Consultoria Empresarial', 
        'Assistência Técnica Celular', 'Agências de Viagens', 'Consórcios',
        'Tradução', 'Detetive Particular', 'Copiadoras', 'Reciclagem'
    ]
  },
  { 
    id: '8', 
    name: 'Tecnologia', 
    slug: 'tecnologia', 
    icon: 'Laptop', 
    color: 'text-cyan-600', 
    bg: 'bg-cyan-100',
    count: 45,
    subcategories: [
        'Lojas de Informática', 'Provedores de Internet', 'Software House', 
        'Segurança Eletrônica', 'Games e Consoles', 'Impressão e Cartuchos', 
        'Automação Comercial', 'Manutenção de Computadores', 'Serviidores e Redes'
    ]
  },
  { 
    id: '9', 
    name: 'Educação', 
    slug: 'educacao', 
    icon: 'GraduationCap', 
    color: 'text-emerald-600', 
    bg: 'bg-emerald-100',
    count: 50,
    subcategories: [
        'Escolas Particulares', 'Escolas de Idiomas', 'Faculdades', 'Cursos Profissionalizantes', 
        'Reforço Escolar', 'Creches', 'Autoescolas', 'Escolas de Música', 'Pré-vestibular', 
        'Treinamentos', 'Artes Marciais', 'Escolas de Dança', 'Natação',
        'Intercâmbio', 'Bibliotecas', 'Material Escolar'
    ]
  },
  { 
    id: '10', 
    name: 'Agro & Pets', 
    slug: 'agro-pet', 
    icon: 'PawPrint', 
    color: 'text-amber-800', 
    bg: 'bg-amber-100',
    count: 40,
    subcategories: [
        'Clínica Veterinária', 'Pet Shop', 'Banho e Tosa', 'Ração', 
        'Produtos Agropecuários', 'Máquinas Agrícolas', 'Adubos e Sementes', 
        'Hotel para Pets', 'Adestramento', 'Equipamentos Rurais',
        'Consultoria Agrícola', 'Laboratório Veterinário', 'Aquarismo'
    ]
  },
  { 
    id: '11', 
    name: 'Festas & Eventos', 
    slug: 'festas', 
    icon: 'PartyPopper', 
    color: 'text-purple-600', 
    bg: 'bg-purple-100',
    count: 35,
    subcategories: [
        'Buffet', 'Decoração de Festas', 'Aluguel de Trajes', 'Fotógrafos de Eventos', 
        'Bolos e Doces Finos', 'DJs e Som', 'Espaços para Eventos', 'Cerimonial', 
        'Brinquedos para Festas', 'Convites e Lembrancinhas',
        'Bandas e Músicos', 'Bartenders', 'Floriculturas'
    ]
  },
];

export const PLANS: Plan[] = [
  {
    id: PlanType.FREE,
    name: 'Listagem Cortesia',
    price: 0,
    period: 'sempre',
    iconName: 'Store',
    features: [
      'Nome e Endereço',
      'Categoria Básica',
      'Aparece nas buscas'
    ]
  },
  {
    id: PlanType.BASIC,
    name: 'Plano Básico',
    price: 49.90,
    period: 'mês',
    iconName: 'TrendingUp',
    features: [
      'Página exclusiva',
      'Botão WhatsApp Direto',
      'Link Redes Sociais',
      'Galeria de Fotos',
      'Atualização Google Maps/Meu Negócio',
      '1 vaga de emprego/mês',
      'Descrição Completa',
      'Destaque na categoria'
    ]
  },
  {
    id: PlanType.ESSENTIAL,
    name: 'Plano Essencial',
    price: 249.90,
    period: 'mês',
    isRecommended: true,
    iconName: 'Rocket',
    features: [
      'Tudo do Plano Básico',
      'R$ 50,00 em anúncios Meta Ads todo mês',
      '4 criativos estáticos/mês',
      '3 vagas de emprego/mês',
      'Gestão de Tráfego Pago',
      'Banners rotativos no portal',
      'Suporte Consultivo',
      'Prioridade máxima nas buscas',
      'Selo de Verificado'
    ]
  },
  {
    id: PlanType.EXCLUSIVE,
    name: 'Plano Exclusivo',
    price: 999.90,
    period: 'mês',
    iconName: 'Crown',
    features: [
      'Tudo do plano essencial',
      'Vagas de emprego ilimitadas',
      'Agência de marketing completa sob demanda',
      'Consultoria estratégica mensal',
      'Criação de conteúdo dedicada',
      'Relatórios avançados de performance'
    ]
  },
];

// --- JOB CONSTANTS (Replicating Famous Portal Structures) ---
export const JOB_AREAS = [
    "Administrativo", "Comercial / Vendas", "Tecnologia / TI", "Saúde", 
    "Educação", "Financeiro", "Logística", "Marketing", "Recursos Humanos",
    "Engenharia", "Jurídico", "Atendimento ao Cliente", "Gastronomia",
    "Serviços Gerais", "Construção Civil", "Agropecuária"
];

export const JOB_TYPES = [
    "Tempo Integral", "Meio Período", "Estágio", "Freelance", "PJ", "Temporário"
];

export const EXPERIENCE_LEVELS = [
    "Estágio", "Júnior", "Pleno", "Sênior", "Especialista", "Diretoria"
];

export const JOBS: Job[] = [
    {
        id: '1',
        title: 'Vendedor Interno',
        companyName: 'Materiais de Construção Silva',
        businessId: '6',
        type: 'Tempo Integral',
        salary: 'R$ 1.800,00 + Comissão',
        description: 'Estamos buscando vendedor com experiência em materiais de construção. Necessário boa comunicação e proatividade.',
        requirements: ['Ensino médio completo', 'Experiência em vendas', 'Disponibilidade de horário'],
        postedAt: 'Há 2 dias',
        whatsappContact: '5538955555555',
        category: 'Comercial / Vendas',
        level: 'Júnior',
        modality: 'Presencial',
        source: 'NossaCidade'
    },
    {
        id: '2',
        title: 'Auxiliar de Cozinha',
        companyName: 'Churrascaria Boi na Brasa',
        businessId: '1',
        type: 'Tempo Integral',
        salary: 'A combinar',
        description: 'Auxiliar no preparo de alimentos, organização da cozinha e limpeza.',
        requirements: ['Experiência prévia é um diferencial', 'Agilidade', 'Higiene'],
        postedAt: 'Hoje',
        whatsappContact: '5538999999999',
        category: 'Gastronomia',
        level: 'Júnior',
        modality: 'Presencial',
        source: 'NossaCidade'
    },
    {
        id: '3',
        title: 'Recepcionista',
        companyName: 'Clínica Sorriso Ideal',
        businessId: '3',
        type: 'Tempo Integral',
        salary: 'R$ 1.500,00',
        description: 'Atendimento ao cliente, agendamento de consultas e organização da recepção.',
        requirements: ['Ensino médio completo', 'Conhecimento em informática básica', 'Simpatia'],
        postedAt: 'Há 1 semana',
        whatsappContact: '5538977777777',
        category: 'Atendimento ao Cliente',
        level: 'Júnior',
        modality: 'Presencial',
        source: 'NossaCidade'
    },
    {
        id: '4',
        title: 'Entregador Motoboy',
        companyName: 'Pizzaria Express',
        type: 'Meio Período',
        salary: 'R$ 800,00 + Taxas',
        description: 'Realizar entregas no período noturno. Necessário moto própria e CNH.',
        requirements: ['CNH A', 'Moto Própria', 'Conhecer a cidade'],
        postedAt: 'Há 1 dia',
        whatsappContact: '5538999999999',
        category: 'Logística',
        level: 'Júnior',
        modality: 'Presencial',
        source: 'NossaCidade'
    },
    {
        id: '5',
        title: 'Designer Gráfico Jr',
        companyName: 'Agência Criativa',
        type: 'Freelance',
        salary: 'Por Projeto',
        description: 'Criação de artes para redes sociais e materiais impressos. Portfólio é essencial.',
        requirements: ['Photoshop', 'Illustrator', 'Criatividade'],
        postedAt: 'Há 3 dias',
        whatsappContact: '5538999999999',
        category: 'Marketing',
        level: 'Júnior',
        modality: 'Remoto',
        source: 'NossaCidade'
    },
    {
        id: '6',
        title: 'Estagiário de Direito',
        companyName: 'Escritório Moura & Associados',
        type: 'Estágio',
        salary: 'R$ 900,00',
        description: 'Acompanhamento processual, elaboração de petições simples e atendimento.',
        requirements: ['Cursando Direito a partir do 5º período', 'Boa redação'],
        postedAt: 'Há 5 dias',
        whatsappContact: '5538999999999',
        category: 'Jurídico',
        level: 'Estágio',
        modality: 'Presencial',
        source: 'NossaCidade'
    },
    // --- MOCK EXTERNAL JOBS (AGGREGATOR) ---
    {
        id: 'ext1',
        title: 'Gerente de Contas',
        companyName: 'Banco do Brasil',
        type: 'Tempo Integral',
        salary: 'R$ 6.500,00',
        description: 'Gestão de carteira de clientes PJ. Oportunidade divulgada no LinkedIn.',
        requirements: ['CPA-10', 'Superior Completo', 'Experiência Bancária'],
        postedAt: 'Há 1 dia',
        category: 'Financeiro',
        level: 'Pleno',
        modality: 'Presencial',
        source: 'LinkedIn',
        externalLink: 'https://linkedin.com',
        logo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
    },
    {
        id: 'ext2',
        title: 'Desenvolvedor React Senior',
        companyName: 'Tech Remote',
        type: 'PJ',
        salary: 'R$ 12.000,00',
        description: 'Vaga para desenvolvedor front-end com experiência em React e TypeScript.',
        requirements: ['React', 'TypeScript', 'Inglês Intermediário'],
        postedAt: 'Há 4 horas',
        category: 'Tecnologia / TI',
        level: 'Sênior',
        modality: 'Remoto',
        source: 'Indeed',
        externalLink: 'https://indeed.com',
        logo: 'https://cdn-icons-png.flaticon.com/512/16183/16183628.png'
    }
];

export const BUSINESSES: Business[] = [
  {
    id: '1',
    name: 'Churrascaria Boi na Brasa',
    categoryId: '1',
    categoryName: 'Alimentação',
    subcategory: 'Churrascaria',
    description: 'A melhor carne da cidade. Rodízio completo com cortes nobres, buffet de saladas variado e ambiente climatizado para sua família.',
    shortDescription: 'Rodízio completo e cortes nobres no centro da cidade.',
    address: 'Av. Gerson Rios, 450, Centro',
    phone: '(38) 3561-0000',
    whatsapp: '5538999999999',
    instagram: '@boinabrasajp',
    website: 'https://boinabrasa.com.br',
    logo: 'https://cdn-icons-png.flaticon.com/512/1134/1134447.png',
    images: [
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3'
    ],
    rating: 4.8,
    reviewCount: 124,
    plan: PlanType.ESSENTIAL,
    isVerified: true,
  },
  {
    id: '2',
    name: 'Oficina Mecânica Pinheiro',
    categoryId: '3',
    categoryName: 'Automotivo',
    subcategory: 'Oficinas Mecânicas',
    description: 'Especialistas em suspensão, freios e injeção eletrônica. Atendemos todas as marcas nacionais e importadas.',
    shortDescription: 'Serviços automotivos de confiança.',
    address: 'Rua Frei Anselmo, 120, Papagaio',
    phone: '(38) 3561-1111',
    whatsapp: '5538988888888',
    logo: 'https://cdn-icons-png.flaticon.com/512/1995/1995470.png',
    images: [
      'https://picsum.photos/800/600?random=4',
      'https://picsum.photos/800/600?random=5'
    ],
    rating: 4.5,
    reviewCount: 56,
    plan: PlanType.BASIC,
    isVerified: true,
  },
  {
    id: '3',
    name: 'Clínica Sorriso Ideal',
    categoryId: '2',
    categoryName: 'Saúde',
    subcategory: 'Dentistas',
    description: 'Odontologia moderna e humanizada. Implantes, ortodontia e estética dental.',
    shortDescription: 'Seu sorriso em boas mãos.',
    address: 'Praça Major Lucas, 33, Centro',
    phone: '(38) 3561-2222',
    whatsapp: '5538977777777',
    instagram: '@sorrisoidealjp',
    logo: 'https://cdn-icons-png.flaticon.com/512/2966/2966334.png',
    images: [
      'https://picsum.photos/800/600?random=6'
    ],
    rating: 5.0,
    reviewCount: 89,
    plan: PlanType.ESSENTIAL,
    isVerified: true,
  },
  {
    id: '4',
    name: 'Mercadinho do Zé',
    categoryId: '1',
    categoryName: 'Alimentação',
    subcategory: 'Supermercados',
    description: 'Padaria e mercearia com pão quente toda hora.',
    shortDescription: 'Padaria e mercearia de bairro.',
    address: 'Rua A, 50, Bairro Santa Cruz',
    phone: '(38) 3561-3333',
    whatsapp: '',
    logo: 'https://cdn-icons-png.flaticon.com/512/1261/1261106.png',
    images: [],
    rating: 4.0,
    reviewCount: 12,
    plan: PlanType.FREE,
    isVerified: false,
  },
  {
    id: '5',
    name: 'Academia PowerFit',
    categoryId: '2',
    categoryName: 'Saúde',
    subcategory: 'Academias',
    description: 'Musculação, FitDance e Muay Thai. A estrutura mais completa da cidade.',
    shortDescription: 'Musculação e aulas coletivas.',
    address: 'Av. Zico Dornelas, 890',
    phone: '(38) 3561-4444',
    whatsapp: '5538966666666',
    logo: 'https://cdn-icons-png.flaticon.com/512/2964/2964514.png',
    images: ['https://picsum.photos/800/600?random=7'],
    rating: 4.7,
    reviewCount: 200,
    plan: PlanType.BASIC,
    isVerified: true,
  },
  {
    id: '6',
    name: 'Materiais de Construção Silva',
    categoryId: '6',
    categoryName: 'Construção & Casa',
    subcategory: 'Material de Construção',
    description: 'Do básico ao acabamento. Entrega grátis em toda a cidade.',
    shortDescription: 'Tudo para sua obra.',
    address: 'Rodovia MG-181, km 2',
    phone: '(38) 3561-5555',
    whatsapp: '5538955555555',
    logo: 'https://cdn-icons-png.flaticon.com/512/602/602182.png',
    images: ['https://picsum.photos/800/600?random=8', 'https://picsum.photos/800/600?random=9'],
    rating: 4.6,
    reviewCount: 45,
    plan: PlanType.ESSENTIAL,
    isVerified: true,
  },
  {
    id: '7',
    name: 'Mãos de Fada',
    categoryId: '4', 
    categoryName: 'Moda & Vestuário',
    subcategory: 'Costureiras', 
    description: '', 
    shortDescription: '',
    address: 'Rua Capitão Speridião, 340, Centro',
    phone: '', 
    whatsapp: '',
    logo: 'https://cdn-icons-png.flaticon.com/512/3081/3081629.png', // Sewing Machine Logo
    images: [],
    rating: 0,
    reviewCount: 0,
    plan: PlanType.FREE,
    isVerified: false,
  },
  // --- MEDIA PARTNERS (MOCK DATA) ---
  {
    id: 'm1',
    name: 'Rádio Cidade 98FM',
    categoryId: '12',
    categoryName: 'Mídia & Parceiros',
    subcategory: 'Rádios FM/AM',
    description: 'A rádio que toca o seu coração. Líder de audiência em toda a região com programação diversificada e jornalismo sério. Anuncie e seja ouvido por milhares.',
    shortDescription: 'Líder de audiência em toda a região.',
    address: 'Rua da Saudade, 100, Centro',
    phone: '(38) 3561-9898',
    whatsapp: '5538998989898',
    logo: 'https://cdn-icons-png.flaticon.com/512/3059/3059463.png',
    images: ['https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80'],
    rating: 5.0,
    reviewCount: 230,
    plan: PlanType.EXCLUSIVE,
    isVerified: true,
    isMediaPartner: true
  },
  {
    id: 'm2',
    name: 'Ana Silva Influencer',
    categoryId: '12',
    categoryName: 'Mídia & Parceiros',
    subcategory: 'Influenciadores Digitais',
    description: 'Lifestyle, moda e dicas de João Pinheiro. Com mais de 50k seguidores engajados, trago visibilidade real para sua marca através de stories e reels criativos.',
    shortDescription: '50k+ seguidores. Lifestyle e Dicas Locais.',
    address: 'Atendimento Online',
    phone: '',
    whatsapp: '5538977771234',
    instagram: '@anasilva.jp',
    logo: 'https://cdn-icons-png.flaticon.com/512/4406/4406234.png',
    images: ['https://images.unsplash.com/photo-1611605698389-37730376985c?auto=format&fit=crop&w=800&q=80'],
    rating: 4.9,
    reviewCount: 85,
    plan: PlanType.ESSENTIAL,
    isVerified: true,
    isMediaPartner: true
  },
  {
    id: 'm3',
    name: 'Portal JP Agora',
    categoryId: '12',
    categoryName: 'Mídia & Parceiros',
    subcategory: 'Portais de Notícias',
    description: 'A notícia em tempo real. O portal mais acessado da cidade com cobertura completa de eventos, política e utilidade pública. Banners e Publi-editoriais.',
    shortDescription: 'Notícias de João Pinheiro e região em tempo real.',
    address: 'Av. Zico Dornelas, 200',
    phone: '(38) 3561-4545',
    whatsapp: '5538999887766',
    website: 'https://jpagora.com',
    logo: 'https://cdn-icons-png.flaticon.com/512/2965/2965879.png',
    images: ['https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80'],
    rating: 4.7,
    reviewCount: 150,
    plan: PlanType.ESSENTIAL,
    isVerified: true,
    isMediaPartner: true
  },
  {
    id: 'm4',
    name: 'O Grito Propaganda',
    categoryId: '12',
    categoryName: 'Mídia & Parceiros',
    subcategory: 'Carro de Som',
    description: 'Leve sua oferta até a porta do cliente. Frota renovada de carros de som com áudio de alta definição cobrindo todos os bairros.',
    shortDescription: 'Som volante de alta qualidade em todos os bairros.',
    address: 'Rua Frei Anselmo, 40',
    phone: '(38) 3561-2020',
    whatsapp: '5538988882020',
    logo: 'https://cdn-icons-png.flaticon.com/512/2355/2355366.png',
    images: ['https://images.unsplash.com/photo-1532632642427-37e5d6d249bd?auto=format&fit=crop&w=800&q=80'],
    rating: 4.5,
    reviewCount: 40,
    plan: PlanType.BASIC,
    isVerified: true,
    isMediaPartner: true
  }
];