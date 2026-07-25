/**
 * ═══════════════════════════════════════════════════════════════
 *  PORTFOLIO GUSTAVO — Main
 *  Não edite este arquivo. Edite apenas o config.js.
 * ═══════════════════════════════════════════════════════════════
 */

const ICONS = {
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>',
  whatsappBig: '<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>',
  whatsappFloat: '<svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>',
};

// ─── SERVICE ICONS ───────────────────────────────────────
const SERVICE_ICONS = {
  globe: '🌐', smartphone: '📱', zap: '⚡',
  whatsapp: '💬', search: '🔍', heart: '❤️',
};

document.addEventListener('DOMContentLoaded', () => {
  const P = PORTFOLIO;

  // Aplicar tema
  const root = document.documentElement;
  Object.entries(P.theme).forEach(([key, val]) => root.style.setProperty(`--${key}`, val));

  // SEO
  document.title = P.seo.title;
  setMeta('description', P.seo.description);
  setMeta('keywords', P.seo.keywords);
  setMeta('og:title', P.seo.title);
  setMeta('og:description', P.seo.description);
  setMeta('og:image', P.seo.ogImage);

  function setMeta(name, content) {
    if (!content) return;
    let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      if (name.startsWith('og:')) el.setAttribute('property', name);
      else el.name = name;
      document.head.appendChild(el);
    }
    el.content = content;
  }

  const whatsUrl = `https://wa.me/${P.contact.whatsapp.number}?text=${encodeURIComponent(P.contact.whatsapp.message)}`;

  // ─── BUILD ─────────────────────────────────────────────
  renderNavbar();
  renderHero();
  renderAbout();
  renderServices();
  renderProjects();
  renderPricing();
  renderContact();
  renderFooter();
  renderWhatsAppFloat();
  initReveal();

  function renderNavbar() {
    const nav = document.getElementById('navbar');
    const name = P.dev.name;
    nav.innerHTML = `
      <div class="container">
        <a href="#hero" class="navbar-brand"><span class="prompt">❯</span> ${name}<span class="cursor-blink"></span></a>
        <button class="mobile-toggle" id="mobileToggle"><span></span><span></span><span></span></button>
        <div class="nav-links" id="navLinks">
          ${P.nav.sections.map(s => `<a href="#${s.id}">${s.label}</a>`).join('')}
          <a href="${whatsUrl}" target="_blank" rel="noopener" class="nav-cta">💬 WhatsApp</a>
        </div>
      </div>
    `;

    const toggle = document.getElementById('mobileToggle');
    const links = document.getElementById('navLinks');
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      links.classList.toggle('active');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('active');
    }));

    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    const navLinks = links.querySelectorAll('a[href^="#"]');
    window.addEventListener('scroll', () => {
      let current = '';
      P.nav.sections.forEach(s => {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = s.id;
        }
      });
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
      });
    });
  }

  function renderHero() {
    const hero = document.getElementById('hero');
    hero.innerHTML = `
      <div class="hero-orb"></div>
      <div class="hero-orb"></div>
      <div class="hero-orb"></div>
      <div class="hero-content">
        <div class="hero-badge">${P.dev.role}</div>
        <h1>${P.dev.name}</h1>
        <p class="subtitle">${P.dev.tagline}</p>
        <p style="font-size: 1rem; color: rgba(0, 255, 65, 0.5); font-family: var(--font-mono); max-width: 500px; margin: 0 auto 2.5rem; line-height: 1.8;">
          Crio sites profissionais para restaurantes, barbearias, clínicas e comércios.<br>
          Com WhatsApp integrado, design moderno e tudo que seu negócio precisa para atrair mais clientes.
        </p>
        <div class="hero-buttons">
          <a href="${whatsUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp">
            ${ICONS.whatsapp} Quero um Site
          </a>
          <a href="#projects" class="btn btn-outline-light">Ver Projetos</a>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="mouse"></div>
        <span style="font-family: var(--font-mono); font-size: 0.7rem;">role para ver mais</span>
      </div>
    `;
  }

  function renderAbout() {
    const section = document.getElementById('about');
    const d = P.dev;
    section.querySelector('.section-header h2').innerHTML = `Sobre <span>${d.name.split(' ')[0]}</span>`;
    section.querySelector('.section-header p').textContent = 'Conheça um pouco sobre minha trajetória e o que me motiva';

    const grid = section.querySelector('.about-grid');

    grid.innerHTML = `
      <div class="about-text pf-reveal" style="grid-column: 1 / -1;">
        <h3>Transformando ideias em <span>sites incríveis</span></h3>
        ${d.description.map(p => `<p>${p}</p>`).join('')}
        <div class="about-tags">
          <span class="about-tag">HTML5 & CSS3</span>
          <span class="about-tag">JavaScript</span>
          <span class="about-tag">Design Responsivo</span>
          <span class="about-tag">SEO Local</span>
          <span class="about-tag">WhatsApp API</span>
          <span class="about-tag">Performance</span>
        </div>
      </div>
    `;
  }

  function renderServices() {
    const section = document.getElementById('services');
    const s = P.services;

    section.querySelector('.section-header h2').innerHTML = `Meus <span>Serviços</span>`;
    section.querySelector('.section-header p').textContent = 'Tudo que você precisa para ter um site profissional e atrair mais clientes';

    const grid = section.querySelector('.services-grid');
    grid.innerHTML = s.map((svc, i) => `
      <div class="service-card pf-reveal" style="transition-delay: ${i * 0.1}s">
        <div class="service-icon">${SERVICE_ICONS[svc.icon] || '✨'}</div>
        <h3>${svc.title}</h3>
        <p>${svc.description}</p>
      </div>
    `).join('');
  }

  function renderProjects() {
    const section = document.getElementById('projects');
    const projects = P.projects;

    section.querySelector('.section-header h2').innerHTML = `Exemplos de <span>Sites</span>`;
    section.querySelector('.section-header p').textContent = 'Clique nos sites abaixo para ver eles funcionando na prática';

    const grid = section.querySelector('.projects-grid');
    grid.innerHTML = projects.map((proj, i) => `
      <div class="project-card pf-reveal" style="transition-delay: ${i * 0.12}s">
        <div class="project-preview">
          <iframe src="${proj.link}" loading="lazy" title="${proj.title}"></iframe>
          <div class="preview-overlay">
            <span class="preview-cat" style="color:${proj.color};border-color:${proj.color}">${proj.category}</span>
            <h3>${proj.title}</h3>
            <a href="${proj.link}" target="_blank" rel="noopener" class="preview-btn">🔗 Abrir Site</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderPricing() {
    const section = document.getElementById('pricing');
    const plans = P.pricing;

    section.querySelector('.section-header h2').innerHTML = `Planos e <span>Preços</span>`;
    section.querySelector('.section-header p').textContent = 'Invista no seu negócio com um site profissional. Escolha o plano ideal para você';

    const grid = section.querySelector('.pricing-grid');
    grid.innerHTML = plans.map((plan, i) => `
      <div class="pricing-card ${plan.popular ? 'popular' : ''} pf-reveal" style="transition-delay: ${i * 0.12}s">
        ${plan.popular ? '<div class="pricing-badge">🔥 MAIS POPULAR</div>' : ''}
        <div class="pricing-header">
          <h3>${plan.name}</h3>
          <div class="pricing-price">${plan.price} <span>${plan.period}</span></div>
        </div>
        <ul class="pricing-features">
          ${plan.features.map(f => `<li><span class="check">✓</span> ${f}</li>`).join('')}
        </ul>
        ${plan.note ? `<div style="background:rgba(255,179,0,.1);border:1px solid rgba(255,179,0,.25);border-radius:6px;padding:.55rem .8rem;margin:-.5rem 0 1rem;text-align:center"><p style="font-size:.75rem;color:var(--accent);font-weight:600;font-family:var(--font-mono);letter-spacing:.02em">⚠️ <strong>${plan.note}</strong></p></div>` : ''}
        <a href="${whatsUrl}" target="_blank" rel="noopener" class="btn ${plan.popular ? 'btn-primary' : 'btn-whatsapp'}">
          ${ICONS.whatsapp} Quero Este Plano
        </a>
      </div>
    `).join('');
  }



  function renderContact() {
    const section = document.getElementById('contact');
    const c = P.contact;

    section.querySelector('.section-header h2').innerHTML = `Vamos <span>Conversar</span>`;
    section.querySelector('.section-header p').textContent = 'Pronto para transformar seu negócio? Me mande uma mensagem!';

    const info = section.querySelector('.contact-info');
    info.innerHTML = `
      <div class="pf-reveal-left">
        <h3 style="font-size:1.8rem;font-weight:800;color:var(--text);margin-bottom:1rem;line-height:1.2">
          Seu negócio merece <span style="color:var(--primary)">um site incrível</span>
        </h3>
        <p style="color:var(--text-light);font-size:1.05rem;line-height:1.8;margin-bottom:2rem">
          Entre em contato agora mesmo e vamos criar juntos o site perfeito para o seu negócio. Orçamento sem compromisso!
        </p>
        ${c.email ? `
          <div class="contact-card">
            <div class="contact-card-icon">✉️</div>
            <div>
              <h4>E-mail</h4>
              <p>${c.email}</p>
            </div>
          </div>
        ` : ''}
        ${c.location ? `
          <div class="contact-card">
            <div class="contact-card-icon">📍</div>
            <div>
              <h4>Localização</h4>
              <p>${c.location}</p>
            </div>
          </div>
        ` : ''}
      </div>
    `;

    // Right side - único CTA do WhatsApp
    const cta = section.querySelector('.contact-cta');
    cta.innerHTML = `
      <div class="pf-reveal-right" style="text-align:center;padding:2rem">
        <div style="font-size:4rem;margin-bottom:1rem">💬</div>
        <h3 style="font-size:1.3rem;font-weight:700;color:var(--text);margin-bottom:.8rem">
          Vamos conversar!<br><span style="color:var(--whatsapp)">Respondo rapidinho</span>
        </h3>
        <p style="color:var(--text-light);margin-bottom:1.5rem;font-size:.95rem">
          Clique no botão abaixo e me mande uma mensagem no WhatsApp.<br>Vou entender seu negócio e te apresentar a melhor solução!
        </p>
        <a href="${whatsUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp" style="font-size:1.1rem;padding:1.2rem 2.5rem">
          ${ICONS.whatsapp} Quero um Site Agora
        </a>
      </div>
    `;
  }

  function renderFooter() {
    const footer = document.getElementById('footer');
    const d = P.dev;
    footer.innerHTML = `
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>${d.name}<span class="dot">.</span></h3>
          <p>${d.tagline}. Crio sites profissionais para negócios locais que querem se destacar na internet.</p>
        </div>
        <div>
          <h4>Navegação</h4>
          <div class="footer-links">
            ${P.nav.sections.map(s => `<a href="#${s.id}">${s.label}</a>`).join('')}
          </div>
        </div>
        <div>
          <h4>Contato</h4>
          <div class="footer-links">
            <a href="${whatsUrl}" target="_blank">💬 WhatsApp</a>
            ${P.contact.email ? `<a href="mailto:${P.contact.email}">✉️ E-mail</a>` : ''}
            ${P.contact.location ? `<a href="#">📍 ${P.contact.location}</a>` : ''}
          </div>
        </div>
        <div>
          <h4>Horários</h4>
          <div class="footer-links" style="font-size:0.9rem">
            <span>Seg a Sex: 08h - 18h</span>
            <span>Sáb: 08h - 12h</span>
            <span style="color:var(--whatsapp);font-weight:500">💬 WhatsApp: todos os dias</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${P.settings.footer.copyright}</span>
        ${P.settings.footer.credits ? '<span class="footer-credits">Feito com ❤️ usando <a href="https://freebuff.com">Freebuff</a></span>' : ''}
      </div>
    `;
  }

  function renderWhatsAppFloat() {
    if (!P.contact.whatsapp.active) return;
    const el = document.getElementById('whatsapp-float');
    el.innerHTML = `<a href="${whatsUrl}" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:white">${ICONS.whatsappFloat}</a>`;
  }

  function initReveal() {
    if (!P.settings.animations.enabled) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.pf-reveal, .pf-reveal-left, .pf-reveal-right, .pf-reveal-scale')
      .forEach(el => obs.observe(el));
  }
});
