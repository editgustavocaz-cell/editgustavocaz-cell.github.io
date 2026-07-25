/**
 * ═══════════════════════════════════════════════════════════════
 *  MAIN.JS — Funcionalidades do Site
 *  Não edite este arquivo. Edite apenas o config.js.
 * ═══════════════════════════════════════════════════════════════
 */

/* ─── ÍCONES SVG CENTRALIZADOS ────────────────────────── */
const ICONS = {
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  whatsappFloat: '<svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
  socialSmall: {
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  },
};

document.addEventListener('DOMContentLoaded', () => {

  /* ─── APLICAR CORES DO TEMA ──────────────────────────── */
  const root = document.documentElement;
  root.style.setProperty('--primary', SITE_CONFIG.theme.primary);
  root.style.setProperty('--secondary', SITE_CONFIG.theme.secondary);
  root.style.setProperty('--accent', SITE_CONFIG.theme.accent);
  root.style.setProperty('--dark', SITE_CONFIG.theme.dark);
  root.style.setProperty('--light', SITE_CONFIG.theme.light);
  root.style.setProperty('--whatsapp', SITE_CONFIG.theme.whatsapp);

  /* ─── SET LANGUAGE ───────────────────────────────────── */
  document.documentElement.lang = SITE_CONFIG.settings.lang;

  /* ─── SET SEO ────────────────────────────────────────── */
  document.title = SITE_CONFIG.seo.title;
  setMeta('description', SITE_CONFIG.seo.description);
  setMeta('keywords', SITE_CONFIG.seo.keywords);
  setMeta('og:title', SITE_CONFIG.seo.title);
  setMeta('og:description', SITE_CONFIG.seo.description);
  setMeta('og:image', SITE_CONFIG.seo.ogImage);
  setMeta('og:type', 'website');
  setMeta('og:locale', SITE_CONFIG.settings.lang);

  function setMeta(name, content) {
    if (!content) return;
    let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      if (name.startsWith('og:')) meta.setAttribute('property', name);
      else meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  /* ─── DETERMINAR SEÇÕES ATIVAS ──────────────────────── */
  function getActiveSections() {
    const allSections = SITE_CONFIG.settings.nav.sections;
    const menuActive = SITE_CONFIG.menu.active && SITE_CONFIG.menu.categories && SITE_CONFIG.menu.categories.length > 0;
    const testimonialsActive = SITE_CONFIG.testimonials.active && SITE_CONFIG.testimonials.list && SITE_CONFIG.testimonials.list.length > 0;
    const servicesActive = SITE_CONFIG.services.active && SITE_CONFIG.services.list && SITE_CONFIG.services.list.length > 0;
    const galleryActive = SITE_CONFIG.gallery && SITE_CONFIG.gallery.length > 0;

    return allSections.filter(s => {
      if (s.id === 'menu') return menuActive;
      if (s.id === 'testimonials') return testimonialsActive;
      if (s.id === 'services') return servicesActive;
      if (s.id === 'gallery') return galleryActive;
      return true; // hero, about, contact always active
    });
  }

  /* ─── BUILD ALL SECTIONS ─────────────────────────────── */
  const whatsUrl = makeWhatsAppUrl();

  renderNavbar();
  renderHero();
  renderAbout();
  renderGallery();
  renderMenu();
  renderServices();
  renderTestimonials();
  renderContact();
  renderFooter();
  renderWhatsAppFloat();
  initScrollAnimations();

  function makeWhatsAppUrl() {
    const w = SITE_CONFIG.social.whatsapp;
    if (!w.active) return '';
    return `https://wa.me/${w.number}?text=${encodeURIComponent(w.message)}`;
  }

  /* ══════════════════════════════════════════════════════════
     NAVBAR
     ══════════════════════════════════════════════════════════ */
  function renderNavbar() {
    const nav = document.getElementById('navbar');
    const activeSections = getActiveSections();
    const name = SITE_CONFIG.business.name;
    const words = name.split(' ');
    const firstWord = words[0];
    const rest = words.slice(1).join(' ');

    nav.innerHTML = `
      <div class="container">
        <a href="#hero" class="navbar-brand">${firstWord}${rest ? ` <span>${rest}</span>` : ''}</a>
        <button class="mobile-toggle" aria-label="Menu" id="mobileToggle">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-links" id="navLinks">
          ${activeSections.map(s => `<a href="#${s.id}">${s.label}</a>`).join('')}
        </div>
      </div>
    `;

    // Mobile toggle
    const toggle = document.getElementById('mobileToggle');
    const links = document.getElementById('navLinks');
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      links.classList.toggle('active');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('active');
        links.classList.remove('active');
      });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Active link highlight
    const allLinks = links.querySelectorAll('a');
    window.addEventListener('scroll', () => {
      let current = '';
      activeSections.forEach(s => {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = s.id;
        }
      });
      allLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
      });
    });
  }

  /* ══════════════════════════════════════════════════════════
     HERO
     ══════════════════════════════════════════════════════════ */
  function renderHero() {
    const hero = document.getElementById('hero');
    const cfg = SITE_CONFIG.business;

    hero.innerHTML = `
      <div class="hero-content">
        <div class="hero-badge">📍 ${cfg.since ? `Desde ${cfg.since}` : 'Sua melhor escolha'}</div>
        <h1>${cfg.name.split(' ').map((w, i) => i === 0 ? `<span>${w}</span>` : w).join(' ')}</h1>
        <p>${cfg.tagline}</p>
        <div class="hero-buttons">
          ${whatsUrl ? `
            <a href="${whatsUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp">
              ${ICONS.whatsapp} Fale Conosco
            </a>
          ` : ''}
          <a href="#gallery" class="btn btn-outline">Ver Trabalhos</a>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>Role para ver mais</span>
        <div class="arrow"></div>
      </div>
    `;
  }

  /* ══════════════════════════════════════════════════════════
     ABOUT
     ══════════════════════════════════════════════════════════ */
  function renderAbout() {
    const section = document.getElementById('about');
    const cfg = SITE_CONFIG.business;
    const desc = cfg.description;
    const sinceYear = parseInt(cfg.since) || new Date().getFullYear();
    const yearsActive = Math.max(0, new Date().getFullYear() - sinceYear);

    section.querySelector('.section-header h2').innerHTML = `Sobre <span>Nós</span>`;

    const grid = section.querySelector('.about-grid');
    if (grid) {
      grid.innerHTML = `
        <div class="about-content animate-on-scroll">
          ${desc.map(p => `<p>${p}</p>`).join('')}
          <div class="about-stats">
            <div class="stat-item">
              <div class="stat-number">${yearsActive > 0 ? `+${yearsActive}` : '🆕'}</div>
              <div class="stat-label">${yearsActive > 0 ? 'Anos de Experiência' : 'Começando Agora'}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">${yearsActive > 0 ? `+${yearsActive * 10}` : '⭐'}</div>
              <div class="stat-label">${yearsActive > 0 ? 'Clientes Atendidos' : 'Qualidade Total'}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">100%</div>
              <div class="stat-label">Satisfação</div>
            </div>
          </div>
        </div>
        <div class="about-image animate-on-scroll-right">
          <img src="assets/images/about.jpg" alt="${cfg.name}" loading="lazy"
               onerror="this.alt='Foto do estabelecimento'; this.style.objectFit='contain'; this.style.padding='3rem'; this.style.background='var(--primary-light)'; this.src='data:image/svg+xml,' + encodeURIComponent('<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\"><rect fill=\"%23dbeafe\" width=\"200\" height=\"200\"/><text x=\"100\" y=\"110\" text-anchor=\"middle\" fill=\"%232563eb\" font-size=\"40\">📸</text></svg>')">
        </div>
      `;
    }
  }

  /* ══════════════════════════════════════════════════════════
     GALLERY (com lightbox filtrada)
     ══════════════════════════════════════════════════════════ */
  let currentFilteredGallery = [];
  let currentLightboxIndex = 0;

  function renderGallery() {
    const section = document.getElementById('gallery');
    const allGallery = SITE_CONFIG.gallery;
    const categories = SITE_CONFIG.galleryCategories;

    if (!allGallery || allGallery.length === 0) {
      section.style.display = 'none';
      return;
    }

    currentFilteredGallery = [...allGallery];
    section.querySelector('.section-header h2').innerHTML = `Nossa <span>Galeria</span>`;

    const filters = section.querySelector('.gallery-filters');
    const grid = section.querySelector('.gallery-grid');

    // Filters
    filters.innerHTML = categories.map(cat =>
      `<button class="gallery-filter ${cat === 'todos' ? 'active' : ''}" data-filter="${cat}">
        ${cat.charAt(0).toUpperCase() + cat.slice(1)}
      </button>`
    ).join('');

    function renderGalleryItems(filter = 'todos') {
      currentFilteredGallery = filter === 'todos'
        ? [...allGallery]
        : allGallery.filter(item => item.category === filter);

      grid.innerHTML = currentFilteredGallery.map((item, idx) => `
        <div class="gallery-item animate-on-scroll" data-index="${idx}">
          <img src="${item.src}" alt="${item.alt}" loading="lazy"
               onerror="this.alt='${item.alt}'; this.style.objectFit='contain'; this.style.padding='2rem'; this.style.background='var(--primary-light)'; this.src='data:image/svg+xml,' + encodeURIComponent('<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\"><rect fill=\"%23dbeafe\" width=\"200\" height=\"200\"/><text x=\"100\" y=\"110\" text-anchor=\"middle\" fill=\"%232563eb\" font-size=\"40\">📸</text></svg>')">
          <div class="gallery-overlay"><span>${item.alt}</span></div>
        </div>
      `).join('');
    }

    renderGalleryItems();

    // Filter click
    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('.gallery-filter');
      if (!btn) return;
      filters.querySelectorAll('.gallery-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGalleryItems(btn.dataset.filter);
      initScrollAnimations();
    });

    // Lightbox (usa currentFilteredGallery)
    grid.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery-item');
      if (!item) return;
      const idx = parseInt(item.dataset.index);
      currentLightboxIndex = idx;
      openLightbox(currentFilteredGallery[currentLightboxIndex]);
    });

    // Create lightbox
    if (!document.getElementById('lightbox')) {
      const lb = document.createElement('div');
      lb.className = 'lightbox';
      lb.id = 'lightbox';
      lb.innerHTML = `
        <button class="lightbox-close" id="lbClose">&times;</button>
        <button class="lightbox-nav prev" id="lbPrev">&#10094;</button>
        <button class="lightbox-nav next" id="lbNext">&#10095;</button>
        <img id="lbImage" src="" alt="">
      `;
      document.body.appendChild(lb);

      document.getElementById('lbClose').addEventListener('click', closeLightbox);
      document.getElementById('lbPrev').addEventListener('click', () => navigateLightbox(-1));
      document.getElementById('lbNext').addEventListener('click', () => navigateLightbox(1));

      document.addEventListener('keydown', (e) => {
        if (!document.getElementById('lightbox')?.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
      });

      lb.addEventListener('click', (e) => {
        if (e.target === lb) closeLightbox();
      });
    }
  }

  function openLightbox(item) {
    if (!item) return;
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lbImage');
    img.src = item.src;
    img.alt = item.alt;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('active');
    document.body.style.overflow = '';
  }

  function navigateLightbox(dir) {
    const len = currentFilteredGallery.length;
    if (len === 0) return;
    currentLightboxIndex = (currentLightboxIndex + dir + len) % len;
    openLightbox(currentFilteredGallery[currentLightboxIndex]);
  }

  /* ══════════════════════════════════════════════════════════
     MENU / CARDÁPIO
     ══════════════════════════════════════════════════════════ */
  function renderMenu() {
    const section = document.getElementById('menu');
    const menu = SITE_CONFIG.menu;

    if (!menu.active || !menu.categories || menu.categories.length === 0) {
      section.style.display = 'none';
      return;
    }

    section.querySelector('.section-header h2').innerHTML =
      `${menu.title.split(' ').map((w, i) => i === 0 ? `<span>${w}</span>` : w).join(' ')}`;
    section.querySelector('.section-header p').textContent = menu.subtitle;

    const categories = section.querySelector('.menu-categories');
    const items = section.querySelector('.menu-items');

    categories.innerHTML = menu.categories.map((cat, i) =>
      `<button class="menu-category ${i === 0 ? 'active' : ''}" data-index="${i}">${cat.name}</button>`
    ).join('');

    function renderMenuItems(index = 0) {
      const cat = menu.categories[index];
      if (!cat) return;
      items.innerHTML = cat.items.map(item => `
        <div class="menu-item animate-on-scroll">
          <div class="menu-item-info">
            <h4>${item.name}</h4>
            ${item.description ? `<p>${item.description}</p>` : ''}
          </div>
          <span class="menu-item-price">${item.price}</span>
        </div>
      `).join('');
    }

    renderMenuItems(0);

    categories.addEventListener('click', (e) => {
      const btn = e.target.closest('.menu-category');
      if (!btn) return;
      categories.querySelectorAll('.menu-category').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenuItems(parseInt(btn.dataset.index));
      initScrollAnimations();
    });
  }

  /* ══════════════════════════════════════════════════════════
     SERVICES
     ══════════════════════════════════════════════════════════ */
  function renderServices() {
    const section = document.getElementById('services');
    const services = SITE_CONFIG.services;

    if (!services.active || !services.list || services.list.length === 0) {
      section.style.display = 'none';
      return;
    }

    section.querySelector('.section-header h2').innerHTML =
      `${services.title.split(' ').map((w, i) => i === 0 ? `<span>${w}</span>` : w).join(' ')}`;
    section.querySelector('.section-header p').textContent = services.subtitle;

    const grid = section.querySelector('.services-grid');

    const iconMap = {
      star: '★', heart: '♥', zap: '⚡', shield: '🛡️',
      settings: '⚙️', award: '🏆', clock: '🕐', phone: '📞',
      map: '📍', camera: '📷', users: '👥', tool: '🔧',
      scissors: '✂️', coffee: '☕', food: '🍽️', car: '🚗',
    };

    grid.innerHTML = services.list.map((service, i) => `
      <div class="service-card animate-on-scroll" style="transition-delay: ${i * 0.1}s">
        <div class="service-icon">${iconMap[service.icon] || '✨'}</div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </div>
    `).join('');
  }

  /* ══════════════════════════════════════════════════════════
     TESTIMONIALS
     ══════════════════════════════════════════════════════════ */
  function renderTestimonials() {
    const section = document.getElementById('testimonials');
    const testimonials = SITE_CONFIG.testimonials;

    if (!testimonials.active || !testimonials.list || testimonials.list.length === 0) {
      section.style.display = 'none';
      return;
    }

    section.querySelector('.section-header h2').innerHTML =
      `${testimonials.title.split(' ').map((w, i) => i === 0 ? `<span>${w}</span>` : w).join(' ')}`;

    const grid = section.querySelector('.testimonials-grid');
    grid.innerHTML = testimonials.list.map((t, i) => {
      const initials = t.name.split(' ').map(n => n[0]).join('').slice(0, 2);
      const stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
      return `
        <div class="testimonial-card animate-on-scroll" style="transition-delay: ${i * 0.15}s">
          <p class="testimonial-text">${t.text}</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">${initials}</div>
            <div>
              <div class="testimonial-name">${t.name}</div>
              <div class="testimonial-stars">${stars}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  /* ══════════════════════════════════════════════════════════
     CONTACT
     ══════════════════════════════════════════════════════════ */
  function renderContact() {
    const section = document.getElementById('contact');
    const contact = SITE_CONFIG.contact;
    const social = SITE_CONFIG.social;

    section.querySelector('.section-header h2').innerHTML = `Entre em <span>Contato</span>`;

    const socialLabels = {
      whatsapp: 'WhatsApp', instagram: 'Instagram', facebook: 'Facebook',
      tiktok: 'TikTok', youtube: 'YouTube', twitter: 'Twitter'
    };

    const socialIcons = {
      whatsapp: ICONS.whatsapp, instagram: ICONS.instagram, facebook: ICONS.facebook,
      tiktok: ICONS.tiktok, youtube: ICONS.youtube, twitter: ICONS.twitter
    };

    // Active socials (exclude whatsapp from mini list — it's shown separately)
    const activeSocials = Object.entries(social).filter(([key, val]) => val.active && key !== 'whatsapp');
    const socialMiniHtml = activeSocials.map(([key, val]) =>
      `<a href="${val.url}" target="_blank" rel="noopener" class="${key}" title="${socialLabels[key]}">${socialIcons[key] || ''}</a>`
    ).join('');

    const hoursHtml = contact.hours.map(h => {
      const colonIdx = h.indexOf(':');
      if (colonIdx === -1) return `<li>${h}</li>`;
      const day = h.slice(0, colonIdx);
      const time = h.slice(colonIdx + 1).trim();
      return `<li><span>${day}:</span> ${time}</li>`;
    }).join('');

    const info = section.querySelector('.contact-info');
    info.innerHTML = `
      ${whatsUrl ? `
        <a href="${whatsUrl}" target="_blank" rel="noopener" class="contact-card" style="cursor:pointer; text-decoration:none;">
          <div class="contact-card-icon" style="color:${SITE_CONFIG.theme.whatsapp}">${ICONS.whatsapp}</div>
          <div>
            <h4>WhatsApp</h4>
            <p>${contact.phone} — Clique para conversar</p>
          </div>
        </a>
      ` : contact.phone ? `
        <div class="contact-card">
          <div class="contact-card-icon">📞</div>
          <div>
            <h4>Telefone</h4>
            <p>${contact.phone}</p>
          </div>
        </div>
      ` : ''}
      ${contact.email ? `
        <a href="mailto:${contact.email}" class="contact-card" style="cursor:pointer; text-decoration:none;">
          <div class="contact-card-icon">✉️</div>
          <div>
            <h4>E-mail</h4>
            <p>${contact.email}</p>
          </div>
        </a>
      ` : ''}
      ${contact.address ? `
        <div class="contact-card">
          <div class="contact-card-icon">📍</div>
          <div>
            <h4>Endereço</h4>
            <p>${contact.address}</p>
          </div>
        </div>
      ` : ''}
      ${contact.hours.length ? `
        <div class="contact-card">
          <div class="contact-card-icon">🕐</div>
          <div>
            <h4>Horários</h4>
            <ul class="hours-list">${hoursHtml}</ul>
          </div>
        </div>
      ` : ''}
      ${socialMiniHtml ? `
        <div class="contact-card">
          <div class="contact-card-icon">🌐</div>
          <div>
            <h4>Redes Sociais</h4>
            <div class="social-mini">${socialMiniHtml}</div>
          </div>
        </div>
      ` : ''}
    `;

    const mapEl = section.querySelector('.contact-map');
    if (contact.maps.active && contact.maps.embedUrl) {
      mapEl.innerHTML = `<iframe src="${contact.maps.embedUrl}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`;
    } else {
      mapEl.style.display = 'none';
    }
  }

  /* ══════════════════════════════════════════════════════════
     FOOTER
     ══════════════════════════════════════════════════════════ */
  function renderFooter() {
    const footer = document.getElementById('footer');
    const name = SITE_CONFIG.business.name;
    const desc = SITE_CONFIG.business.description[0];
    const social = SITE_CONFIG.social;
    const settings = SITE_CONFIG.settings;
    const activeSections = getActiveSections();

    const words = name.split(' ');
    const firstWord = words[0];
    const rest = words.slice(1).join(' ');

    const socialUrls = {
      whatsapp: social.whatsapp.active ? `https://wa.me/${social.whatsapp.number}` : null,
      instagram: social.instagram.active ? social.instagram.url : null,
      facebook: social.facebook.active ? social.facebook.url : null,
    };

    const socialFooterHtml = Object.entries(socialUrls)
      .filter(([, url]) => url)
      .map(([key]) =>
        `<a href="${socialUrls[key]}" target="_blank" rel="noopener" title="${key}">${ICONS.socialSmall[key] || ''}</a>`
      ).join('');

    footer.innerHTML = `
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>${firstWord}${rest ? ` <span>${rest}</span>` : ''}</h3>
          <p>${desc}</p>
        </div>
        <div>
          <h4>Navegação</h4>
          <div class="footer-links">
            ${activeSections.map(s => `<a href="#${s.id}">${s.label}</a>`).join('')}
          </div>
        </div>
        <div>
          <h4>Contato</h4>
          <div class="footer-links">
            ${SITE_CONFIG.contact.phone ? `<a href="${whatsUrl || '#'}">📞 ${SITE_CONFIG.contact.phone}</a>` : ''}
            ${SITE_CONFIG.contact.email ? `<a href="mailto:${SITE_CONFIG.contact.email}">✉️ ${SITE_CONFIG.contact.email}</a>` : ''}
            ${SITE_CONFIG.contact.address ? `<a href="#">📍 ${SITE_CONFIG.contact.address}</a>` : ''}
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${settings.footer.copyright}</span>
        <div class="footer-social">${socialFooterHtml}</div>

      </div>
    `;
  }

  /* ══════════════════════════════════════════════════════════
     FLOATING WHATSAPP
     ══════════════════════════════════════════════════════════ */
  function renderWhatsAppFloat() {
    if (!whatsUrl) return;
    const float = document.getElementById('whatsapp-float');
    float.innerHTML = `
      <a href="${whatsUrl}" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:white;">
        ${ICONS.whatsappFloat}
        <span class="whatsapp-tooltip">Fale conosco no WhatsApp</span>
      </a>
    `;
  }

  /* ══════════════════════════════════════════════════════════
     SCROLL ANIMATIONS
     ══════════════════════════════════════════════════════════ */
  function initScrollAnimations() {
    if (!SITE_CONFIG.settings.animations.enabled) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right')
      .forEach(el => observer.observe(el));
  }

});
