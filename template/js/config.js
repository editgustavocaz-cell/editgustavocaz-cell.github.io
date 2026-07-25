/**
 * ═══════════════════════════════════════════════════════════════
 *  CONFIGURAÇÃO DO SITE
 *  ⚡ Edite APENAS este arquivo para personalizar o site completo
 * ═══════════════════════════════════════════════════════════════
 */

const SITE_CONFIG = {
  // ─── INFORMAÇÕES BÁSICAS ─────────────────────────────────────
  business: {
    name: 'Nome do Negócio',
    tagline: 'Slogan ou frase de efeito do seu negócio',
    description: [
      'Somos uma empresa dedicada a oferecer o melhor serviço para nossos clientes. Com anos de experiência no mercado, nossa prioridade é a satisfação de quem confia no nosso trabalho.',
      'Aqui você encontra qualidade, profissionalismo e atendimento personalizado. Venha nos conhecer!'
    ],
    since: '2020', // Ano de fundação
  },

  // ─── CORES DO TEMA ──────────────────────────────────────────
  theme: {
    primary: '#2563eb',       // Cor principal (botões, destaques)
    secondary: '#7c3aed',     // Cor secundária (gradientes, detalhes)
    accent: '#f59e0b',        // Cor de destaque (ícones, badges)
    dark: '#0f172a',          // Cor escura (textos, footer)
    light: '#f8fafc',         // Cor clara (fundos, cards)
    whatsapp: '#25D366',      // Cor do WhatsApp
  },

  // ─── REDES SOCIAIS ───────────────────────────────────────────
  social: {
    whatsapp: {
      number: '5511999999999',     // Código do país + DDD + número (sem espaços)
      message: 'Olá! Vim pelo site e gostaria de mais informações.', // Mensagem padrão
      active: true,
    },
    instagram: {
      url: 'https://instagram.com/seuperfil',
      active: true,
    },
    facebook: {
      url: 'https://facebook.com/seuperfil',
      active: true,
    },
    tiktok: {
      url: 'https://tiktok.com/@seuperfil',
      active: false,
    },
    youtube: {
      url: 'https://youtube.com/@seuperfil',
      active: false,
    },
    twitter: {
      url: 'https://twitter.com/seuperfil',
      active: false,
    },
  },

  // ─── GALERIA DE FOTOS ────────────────────────────────────────
  // Coloque as imagens na pasta: assets/images/
  // Formatos recomendados: .jpg, .webp (fotos) | .png (ilustrações)
  gallery: [
    { src: 'assets/images/foto1.jpg', alt: 'Descrição da foto 1', category: 'trabalhos' },
    { src: 'assets/images/foto2.jpg', alt: 'Descrição da foto 2', category: 'trabalhos' },
    { src: 'assets/images/foto3.jpg', alt: 'Descrição da foto 3', category: 'ambiente' },
    { src: 'assets/images/foto4.jpg', alt: 'Descrição da foto 4', category: 'ambiente' },
    { src: 'assets/images/foto5.jpg', alt: 'Descrição da foto 5', category: 'equipe' },
    { src: 'assets/images/foto6.jpg', alt: 'Descrição da foto 6', category: 'equipe' },
  ],
  galleryCategories: ['todos', 'trabalhos', 'ambiente', 'equipe'],

  // ─── CARDÁPIO / TABELA DE PREÇOS ────────────────────────────
  // Use arrays vazios [] se não tiver cardápio
  menu: {
    active: true,               // Mude para false se não tiver cardápio
    title: 'Nosso Cardápio',
    subtitle: 'Confira nossas opções com preços especiais',
    categories: [
      {
        name: 'Principais',
        items: [
          { name: 'Item 1', description: 'Descrição deliciosa do item', price: 'R$ 29,90' },
          { name: 'Item 2', description: 'Descrição deliciosa do item', price: 'R$ 39,90' },
          { name: 'Item 3', description: 'Descrição deliciosa do item', price: 'R$ 49,90' },
        ]
      },
      {
        name: 'Bebidas',
        items: [
          { name: 'Bebida 1', description: 'Descrição da bebida', price: 'R$ 9,90' },
          { name: 'Bebida 2', description: 'Descrição da bebida', price: 'R$ 12,90' },
        ]
      },
      {
        name: 'Sobremesas',
        items: [
          { name: 'Sobremesa 1', description: 'Descrição da sobremesa', price: 'R$ 19,90' },
          { name: 'Sobremesa 2', description: 'Descrição da sobremesa', price: 'R$ 24,90' },
        ]
      },
    ]
  },

  // ─── SERVIÇOS ────────────────────────────────────────────────
  services: {
    active: true,               // Mude para false se não tiver serviços
    title: 'Nossos Serviços',
    subtitle: 'Oferecemos soluções completas para você',
    list: [
      { icon: 'star', title: 'Serviço 1', description: 'Descrição completa do serviço oferecido com qualidade e profissionalismo.' },
      { icon: 'heart', title: 'Serviço 2', description: 'Descrição completa do serviço oferecido com qualidade e profissionalismo.' },
      { icon: 'zap', title: 'Serviço 3', description: 'Descrição completa do serviço oferecido com qualidade e profissionalismo.' },
      { icon: 'shield', title: 'Serviço 4', description: 'Descrição completa do serviço oferecido com qualidade e profissionalismo.' },
      { icon: 'settings', title: 'Serviço 5', description: 'Descrição completa do serviço oferecido com qualidade e profissionalismo.' },
      { icon: 'award', title: 'Serviço 6', description: 'Descrição completa do serviço oferecido com qualidade e profissionalismo.' },
    ]
  },

  // ─── DEPOIMENTOS ──────────────────────────────────────────────
  testimonials: {
    active: false,
    title: 'O Que Nossos Clientes Dizem',
    list: [
      {
        name: 'Maria Silva',
        text: 'Serviço excelente! Super recomendo para todos que buscam qualidade.',
        rating: 5,
      },
      {
        name: 'João Santos',
        text: 'Atendimento nota 10. Voltarei mais vezes com certeza!',
        rating: 5,
      },
    ]
  },

  // ─── CONTATO ──────────────────────────────────────────────────
  contact: {
    address: 'Rua Exemplo, 123 - Bairro, Cidade - Estado',
    phone: '(11) 99999-9999',
    email: 'contato@exemplo.com',
    hours: [
      'Seg a Sex: 08:00 - 18:00',
      'Sábado: 08:00 - 12:00',
      'Domingo: Fechado',
    ],
    maps: {
      active: true,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.000000!2d-46.634!3d-23.550!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAwLjAiUyA0NsKwMzgnMDIuMCJX!5e0!3m2!1spt-BR!2sbr!4v0000000000',
    },
  },

  // ─── SEO (Search Engine Optimization) ────────────────────────
  seo: {
    title: 'Nome do Negócio - Sua frase de impacto aqui',
    description: 'Descrição curta para aparecer no Google. Máximo 160 caracteres.',
    keywords: 'palavras, chave, do, seu, negócio',
    ogImage: 'assets/images/og-image.jpg', // Imagem que aparece ao compartilhar no WhatsApp/redes
  },

  // ─── CONFIGURAÇÕES AVANÇADAS ────────────────────────────────
  settings: {
    // Navegação
    nav: {
      sections: [
        { id: 'hero', label: 'Início' },
        { id: 'about', label: 'Sobre' },
        { id: 'gallery', label: 'Galeria' },
        { id: 'menu', label: 'Cardápio' },
        { id: 'services', label: 'Serviços' },
        { id: 'contact', label: 'Contato' },
      ],
      // Remova seções que não quiser no menu (ex: exclua 'menu' se não tiver cardápio)
      // Basta apagar a linha correspondente acima
    },

    // Animações
    animations: {
      enabled: true,      // Desative para versão mais leve
      duration: 800,      // Duração em ms
      stagger: 150,       // Atraso entre itens em ms
    },

    // Idioma
    lang: 'pt-BR',

    // Footer
    footer: {
      copyright: `© ${new Date().getFullYear()} Nome do Negócio. Todos os direitos reservados.`,
      credits: true, // Créditos "Feito com ❤️" no footer
    },
  },
};
