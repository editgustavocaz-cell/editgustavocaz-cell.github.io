/**
 * ═══════════════════════════════════════════════════════════════
 *  PORTFOLIO — Configuração do Site Pessoal do Gustavo
 *  ⚡ Edite este arquivo para personalizar seu portfólio
 * ═══════════════════════════════════════════════════════════════
 */

const PORTFOLIO = {
  // ─── SEUS DADOS ─────────────────────────────────────────────
  dev: {
    name: 'Gustavo',
    fullName: 'Gustavo',
    role: 'Desenvolvedor Web',
    tagline: 'Seu negócio merece um sistema à prova de falhas',
    description: [
      'Crio sites profissionais e modernos para negócios locais que querem se destacar na internet. Meu foco é transformar a presença digital de empresas como restaurantes, barbearias, clínicas e comércios em geral.',
      'Trabalho com tecnologia de ponta para entregar sites rápidos, bonitos e que realmente convertem visitantes em clientes. Cada projeto é pensado para resolver os problemas específicos de cada negócio.',
    ],
    photo: 'assets/images/gustavo.jpg',
    since: '2026',
  },

  // ─── TEMA ───────────────────────────────────────────────────
  theme: {
    primary: '#00ff41',       // Neon green — cor clássica de hacker
    secondary: '#00d4ff',     // Cyan — terminal highlight
    accent: '#ffb300',        // Âmbar — warning/alert
    dark: '#0a0a0a',
    light: '#0f0f0f',
    whatsapp: '#25D366',
  },

  // ─── CONTATO ────────────────────────────────────────────────
  contact: {
    whatsapp: {
      number: '5585996896378',
      message: 'Olá Gustavo! Vi seu portfólio e quero criar um site para meu negócio.',
      active: true,
    },
    email: '',
    phone: '',
    location: '',
  },

  // ─── SERVIÇOS ───────────────────────────────────────────────
  services: [
    {
      icon: 'globe',
      title: 'Criação de Sites',
      description: 'Sites completos e responsivos para qualquer tipo de negócio local. Do landing page ao site institucional.',
    },
    {
      icon: 'smartphone',
      title: 'Design Responsivo',
      description: 'Sites que funcionam perfeitamente em celulares, tablets e computadores. Seu cliente na palma da mão.',
    },
    {
      icon: 'zap',
      title: 'Alta Performance',
      description: 'Sites otimizados que carregam em segundos. Velocidade que o Google ama e seus clientes aprovam.',
    },
    {
      icon: 'whatsapp',
      title: 'Integração WhatsApp',
      description: 'Botão do WhatsApp inteligente que conecta seus clientes diretamente com você. Conversão na hora.',
    },
    {
      icon: 'search',
      title: 'SEO Local',
      description: 'Otimização para aparecer no Google quando alguém procurar pelo seu tipo de negócio na região.',
    },
    {
      icon: 'heart',
      title: 'Suporte Contínuo',
      description: 'Suporte após a entrega para manutenções, atualizações de conteúdo e melhorias contínuas.',
    },
  ],

  // ─── PROJETOS (SAMPLES) ─────────────────────────────────────
  projects: [
    {
      title: 'Pizza Prime',
      category: 'Pizzaria · Delivery',
      description: 'Site italiano-rústico com tema claro e acolhedor — cardápio interativo por categorias, unidades com delivery, história da pizzaria, seção de franqueado e design artesanal.',
      image: 'assets/images/projeto-pizza.jpg',
      tags: ['Cardápio', 'Delivery', 'WhatsApp', 'Unidades'],
      color: '#C85A3F',
      link: '../samples/pizza-prime/index.html',
    },
    {
      title: 'Barber King',
      category: 'Barbearia',
      description: 'Site moderno para barbearia premium com galeria de cortes, agendamento online, tabela de preços e design dark elegante.',
      image: 'assets/images/projeto-barber.jpg',
      tags: ['Agendamento', 'Galeria', 'Dark Mode'],
      color: '#d4a853',
      link: '../samples/barber-king/index.html',
    },
    {
      title: 'Lumière',
      category: 'Spa & Estética Natural',
      description: 'Site spa/nature com tema verde sálvia, creme e cobre — filosofia com quote, serviços em cards grandes com preços, galeria masonry, depoimentos com fotos, FAQ em grid 2 colunas e design orgânico/natural.',
      image: 'assets/images/projeto-lumiere.jpg',
      tags: ['Spa', 'Galeria', 'FAQ', 'Depoimentos', 'WhatsApp'],
      color: '#7A9E7E',
      link: '../samples/clinica-lumiere/index.html',
    },
    {
      title: 'VitaPet',
      category: 'Clínica Veterinária',
      description: 'Site com tema natureza para clínica veterinária — galeria estilo polaroid, equipe com fotos, FAQ, depoimentos e agendamento via WhatsApp.',
      image: 'assets/images/projeto-petcare.jpg',
      tags: ['Serviços', 'Equipe', 'Galeria', 'FAQ', 'WhatsApp'],
      color: '#3D7A5B',
      link: '../samples/vitapet-veterinaria/index.html',
    },
    {
      title: 'Fitness Pro',
      category: 'Academia',
      description: 'Site para academia com layout radicalmente inovador — sidebar fixa com navegação por abas, estrutura tab-based sem scroll de seções, FAQ inline e design lime + violet.',
      image: 'assets/images/projeto-fitness.jpg',
      tags: ['Sidebar', 'Tabs', 'Inline FAQ', 'Lime', 'WhatsApp'],
      color: '#A3E635',
      link: '../samples/fitness-pro/index.html',
    },
  ],

  // ─── PREÇOS ─────────────────────────────────────────────────
  pricing: [
    {
      name: 'Site Básico',
      price: 'R$ 199,99',
      promo: true,
      promoPrice: 'R$ 179,99',
      period: 'à vista',
      features: [
        'Site completo 1 página',
        'Design responsivo',
        'WhatsApp integrado',
        'Galeria de fotos',
        'SEO básico',
      ],
      popular: false,
      note: 'Hospedagem não inclusa',
    },
    {
      name: 'Site Premium',
      price: 'R$ 349,99',
      period: 'no dinheiro',
      promo: true,
      promoPrice: 'R$ 299,99',
      promoLabel: 'no PIX 🔥',
      features: [
        'Tudo do Básico +',
        '3 páginas completas',
        'Design exclusivo',
        'Domínio .com.br incluso (1 ano)',
        'Google Maps integrado',
        'Redes sociais integradas',
        'SEO completo',
        'Otimização de velocidade',
        'Suporte 30 dias',
      ],
      popular: true,
      note: '🚫 Não aceitamos cartão de crédito. Aceitamos dinheiro e PIX.',
    },
  ],

  // ─── SEO ────────────────────────────────────────────────────
  seo: {
    title: 'Gustavo - Desenvolvedor Web | Sites para Negócios Locais',
    description: 'Crio sites profissionais para restaurantes, barbearias, clínicas e comércios locais. Site rápido, bonito e com WhatsApp integrado.',
    keywords: 'criação de sites, desenvolvedor web, sites para negócios locais, site para restaurante, site para barbearia, São Paulo',
    ogImage: 'assets/images/og-image.jpg',
  },

  // ─── NAVEGAÇÃO ─────────────────────────────────────────────
  nav: {
    sections: [
      { id: 'hero', label: 'Início' },
      { id: 'about', label: 'Sobre' },
      { id: 'services', label: 'Serviços' },
      { id: 'projects', label: 'Projetos' },
      { id: 'pricing', label: 'Preços' },
      { id: 'contact', label: 'Contato' },
    ],
  },

  // ─── CONFIGURAÇÕES ─────────────────────────────────────────
  settings: {
    lang: 'pt-BR',
    animations: { enabled: true, duration: 800, stagger: 150 },
    footer: {
      copyright: `© ${new Date().getFullYear()} Gustavo. Todos os direitos reservados.`,
      credits: true,
    },
  },
};
