/* ============================================ */
/*  GERADOR DE ORÇAMENTO · Core                 */
/*  Gera orçamentos profissionais para clientes */
/* ============================================ */

const DADOS_PADRAO = {
  desenvolvedor: {
    nome: 'Gustavo',
    tagline: 'Desenvolvimento de Sites Profissionais',
    whatsapp: '5585996896378',
    whatsappLink: '5585996896378',
    email: ''
  },
  precos: {
    basico: 179.99,
    premium: 299.99,
    manutencao: 19.90,
    extras: {
      dominio: 40,
      logo: 50,
      fotos: 80,
      blog: 40,
      panfletos: 30,
      redes: 25
    }
  }
};

class GeradorOrcamento {
  constructor() {
    this.dev = DADOS_PADRAO.desenvolvedor;
    this.precos = DADOS_PADRAO.precos;
    this.init();
  }

  init() {
    this.carregarRascunho();
    this.bindEvents();
  }

  /* ─── EVENTS ─── */

  bindEvents() {
    document.getElementById('btnGerar').addEventListener('click', () => this.gerar());
    document.getElementById('btnPrint').addEventListener('click', () => this.imprimir());
    document.getElementById('btnLimpar').addEventListener('click', () => this.limpar());
    document.getElementById('btnSalvarRascunho').addEventListener('click', () => this.salvarRascunho());

    // Enter gera orçamento
    document.getElementById('orcForm').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        this.gerar();
      }
    });
  }

  /* ─── GERAR ORÇAMENTO ─── */

  gerar() {
    const dados = this.coletarDados();
    if (!dados.valido) return;

    this.renderBudget(dados);
    this.toast('✅ Orçamento gerado com sucesso!', 'success');
  }

  coletarDados() {
    const nome = document.getElementById('clienteNome').value.trim();
    const empresa = document.getElementById('clienteEmpresa').value.trim();

    if (!nome || !empresa) {
      this.toast('⚠️ Preencha o nome do cliente e da empresa!', 'warning');
      return { valido: false };
    }

    const planoTipo = document.getElementById('planoTipo').value;
    const temManutencao = document.getElementById('temManutencao').value;
    const prazo = document.getElementById('prazoEntrega').value;
    const validade = document.getElementById('validadeOrcamento').value;
    const observacoes = document.getElementById('observacoes').value.trim();

    // Planos
    const planos = {
      basico: { nome: 'Site Básico', preco: this.precos.basico },
      premium: { nome: 'Site Premium', preco: this.precos.premium },
      custom: { nome: 'Site Personalizado', preco: null }
    };

    const plano = planos[planoTipo];
    let total = plano.preco || 0;

    // Extras selecionados
    const extras = [];
    document.querySelectorAll('#extrasGrid input[type="checkbox"]:checked').forEach(cb => {
      const nomeExtra = cb.closest('.g-checkbox').textContent.trim().split('(')[0].trim();
      const precoExtra = parseFloat(cb.dataset.preco) || 0;
      extras.push({ nome: nomeExtra, preco: precoExtra });
      total += precoExtra;
    });

    // Manutenção (não entra no total do orçamento, é mensal)
    const manutencao = temManutencao === 'sim';

    // Calcular data de validade
    const hoje = new Date();
    const validoAte = new Date(hoje);
    validoAte.setDate(validoAte.getDate() + parseInt(validade));

    return {
      valido: true,
      cliente: nome,
      empresa,
      whatsapp: document.getElementById('clienteWhats').value.trim(),
      email: document.getElementById('clienteEmail').value.trim(),
      plano,
      extras,
      manutencao,
      prazo: parseInt(prazo),
      validade: parseInt(validade),
      validoAte,
      observacoes,
      total,
      data: hoje
    };
  }

  /* ─── RENDER BUDGET ─── */

  renderBudget(d) {
    const container = document.getElementById('budgetPreview');
    const fmt = v => `R$ ${v.toFixed(2).replace('.', ',')}`;
    const planoPreco = d.plano.preco ? fmt(d.plano.preco) : 'Sob consulta';
    const totalFmt = d.plano.preco !== null ? fmt(d.total) : 'Sob consulta';

    const prazoTextos = { 3: '3 dias úteis', 5: '5 dias úteis', 7: '7 dias úteis', 15: '15 dias úteis' };
    const prazoLabel = prazoTextos[d.prazo] || `${d.prazo} dias`;

    const validoFmt = d.validoAte.toLocaleDateString('pt-BR');

    const hojeFmt = d.data.toLocaleDateString('pt-BR');

    // Mensagem WhatsApp
    const msgWhats = encodeURIComponent(
      `Olá ${d.cliente}! Tudo bem? 😊\n\nSegue o orçamento para o site da ${d.empresa}:\n\n` +
      `📦 Plano: ${d.plano.nome}\n💰 Valor: ${totalFmt}\n📅 Validade: ${validoFmt}\n\n` +
      `Qualquer dúvida é só me chamar! 🚀`
    );
    const whatsUrl = `https://wa.me/${this.dev.whatsapp}?text=${msgWhats}`;

    // Extras
    const extrasHTML = d.extras.length > 0 ? `
      <div class="g-budget-extras">
        <h4>➕ Serviços Extras</h4>
        ${d.extras.map(e => `
          <div class="g-budget-extra-item">
            <span>${this.esc(e.nome)}</span>
            <span class="g-be-price">${fmt(e.preco)}</span>
          </div>
        `).join('')}
      </div>
    ` : '';

    const manutHTML = d.manutencao ? `
      <div class="g-budget-maint">
        <span class="g-bm-label">🔄 Manutenção Mensal</span>
        <span class="g-bm-value">${fmt(this.precos.manutencao)}/mês</span>
      </div>
    ` : '';

    const obsHTML = d.observacoes ? `
      <div class="g-budget-notes">
        <h4>📝 Observações</h4>          <p>${this.esc(d.observacoes)}</p>
      </div>
    ` : '';

    container.innerHTML = `
      <div class="g-budget">
        <div class="g-budget-header">
          <div class="g-budget-header-left">
            <h1>❯ Orçamento</h1>
            <div class="g-budget-tagline">${this.dev.tagline}</div>
          </div>
          <div class="g-budget-header-right">
            <div class="g-budget-label">Valor Total</div>
            <strong>${totalFmt}</strong>
            <div class="g-budget-period">${d.plano.preco ? 'à vista' : ''}</div>
          </div>
        </div>

        <div class="g-budget-info">
          <div class="g-budget-info-block">
            <h4>Cliente</h4>
            <p>${this.esc(d.cliente)}</p>
            <p><small>${this.esc(d.empresa)}</small></p>
          </div>
          <div class="g-budget-info-block" style="text-align:right">
            <h4>Orçamento</h4>
            <p>#${d.data.getTime().toString(36).toUpperCase().slice(-6)}</p>
            <p><small>Emissão: ${hojeFmt} · Validade: <span class="g-budget-validity">${validoFmt}</span></small></p>
          </div>
        </div>

        <div class="g-budget-services">
          <h3>📦 Serviços Inclusos</h3>
          <div class="g-budget-service-item g-bs-main">
            <span class="g-bs-name"><span class="check">✓</span> ${d.plano.nome}</span>
            <span class="g-bs-price">${planoPreco}</span>
          </div>
          <div class="g-budget-service-item">
            <span class="g-bs-name"><span class="check">✓</span> Design Responsivo (celular + tablet + PC)</span>
            <span class="g-bs-price" style="color:#8899a0">incluso</span>
          </div>
          <div class="g-budget-service-item">
            <span class="g-bs-name"><span class="check">✓</span> WhatsApp Integrado</span>
            <span class="g-bs-price" style="color:#8899a0">incluso</span>
          </div>
          <div class="g-budget-service-item">
            <span class="g-bs-name"><span class="check">✓</span> Otimização de Velocidade</span>
            <span class="g-bs-price" style="color:#8899a0">incluso</span>
          </div>
          <div class="g-budget-service-item">
            <span class="g-bs-name"><span class="check">✓</span> SSL Grátis (HTTPS)</span>
            <span class="g-bs-price" style="color:#8899a0">incluso</span>
          </div>
          <div class="g-budget-service-item">
            <span class="g-bs-name"><span class="check">✓</span> Hospedagem Premium (Vercel)</span>
            <span class="g-bs-price" style="color:#8899a0">incluso</span>
          </div>
        </div>

        ${extrasHTML}

        <div class="g-budget-total">
          <span class="g-bt-label">Total do Investimento</span>
          <span class="g-bt-value">${totalFmt} <small>${d.plano.preco ? 'à vista' : ''}</small></span>
        </div>

        ${manutHTML}

        <div class="g-budget-payment">
          <strong>💰 Formas de Pagamento:</strong> Dinheiro, PIX ou Débito.<br>
          <strong>⏳ Prazo de Entrega:</strong> ${prazoLabel} após confirmação.<br>
          <strong>🔒 Garantia:</strong> 30 dias de suporte após a entrega.
        </div>

        ${obsHTML}

        <div class="g-budget-footer">
          <div class="g-bf-contact">
            <span>💬 <strong>${this.dev.nome}</strong></span>
            ${this.dev.whatsapp ? `<span>📱 <strong>${this.dev.whatsapp}</strong></span>` : ''}
            <span>📧 ${this.dev.email || 'WhatsApp para contato'}</span>
          </div>
          <div style="margin-top:0.5rem">
            <a href="${whatsUrl}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:0.4rem;padding:0.5rem 1.2rem;background:#25D366;color:#fff;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.85rem">
              💬 Enviar este orçamento no WhatsApp
            </a>
          </div>
          <div style="margin-top:0.8rem;font-size:0.65rem;color:#aab5b8">
            ${this.dev.nome} · ${this.dev.tagline} · Orçamento gerado em ${hojeFmt}
          </div>
        </div>
      </div>
    `;

    // Scroll pra preview no mobile
    if (window.innerWidth <= 968) {
      document.getElementById('previewSection').scrollIntoView({ behavior: 'smooth' });
    }
  }

  /* ─── IMPRIMIR / PDF ─── */

  imprimir() {
    // Verificar se tem orçamento gerado
    const hasBudget = document.querySelector('.g-budget-header');
    if (!hasBudget) {
      this.toast('⚠️ Gere um orçamento primeiro!', 'warning');
      return;
    }
    window.print();
  }

  /* ─── LIMPAR ─── */

  limpar() {
    if (!confirm('Tem certeza? Isso vai limpar todos os campos do formulário.')) return;

    document.getElementById('orcForm').reset();
    document.getElementById('planoTipo').value = 'premium';
    document.getElementById('temManutencao').value = 'nao';
    document.getElementById('prazoEntrega').value = '5';
    document.getElementById('validadeOrcamento').value = '7';

    // Uncheck extras
    document.querySelectorAll('#extrasGrid input[type="checkbox"]').forEach(cb => cb.checked = false);

    // Voltar preview ao vazio
    const container = document.getElementById('budgetPreview');
    container.innerHTML = `
      <div class="g-budget-empty">
        <div class="g-budget-empty-icon">📄</div>
        <h3>Nenhum orçamento gerado</h3>
        <p>Preencha os dados ao lado e clique em <strong>"Gerar Orçamento"</strong></p>
      </div>
    `;

    localStorage.removeItem('orcamento_rascunho');
    this.toast('🗑️ Formulário limpo!', 'warning');
  }

  /* ─── RASCUNHO (localStorage) ─── */

  salvarRascunho() {
    const formData = {
      clienteNome: document.getElementById('clienteNome').value,
      clienteEmpresa: document.getElementById('clienteEmpresa').value,
      clienteWhats: document.getElementById('clienteWhats').value,
      clienteEmail: document.getElementById('clienteEmail').value,
      planoTipo: document.getElementById('planoTipo').value,
      temManutencao: document.getElementById('temManutencao').value,
      prazoEntrega: document.getElementById('prazoEntrega').value,
      validadeOrcamento: document.getElementById('validadeOrcamento').value,
      extras: Array.from(document.querySelectorAll('#extrasGrid input[type="checkbox"]')).map(cb => cb.checked),
      observacoes: document.getElementById('observacoes').value
    };
    localStorage.setItem('orcamento_rascunho', JSON.stringify(formData));
    this.toast('💾 Rascunho salvo!', 'success');
  }

  carregarRascunho() {
    try {
      const raw = localStorage.getItem('orcamento_rascunho');
      if (!raw) return;
      const data = JSON.parse(raw);
      document.getElementById('clienteNome').value = data.clienteNome || '';
      document.getElementById('clienteEmpresa').value = data.clienteEmpresa || '';
      document.getElementById('clienteWhats').value = data.clienteWhats || '';
      document.getElementById('clienteEmail').value = data.clienteEmail || '';
      if (data.planoTipo) document.getElementById('planoTipo').value = data.planoTipo;
      if (data.temManutencao) document.getElementById('temManutencao').value = data.temManutencao;
      if (data.prazoEntrega) document.getElementById('prazoEntrega').value = data.prazoEntrega;
      if (data.validadeOrcamento) document.getElementById('validadeOrcamento').value = data.validadeOrcamento;
      document.getElementById('observacoes').value = data.observacoes || '';

      if (data.extras) {
        document.querySelectorAll('#extrasGrid input[type="checkbox"]').forEach((cb, i) => {
          if (data.extras[i]) cb.checked = true;
        });
      }

      if (data.clienteEmpresa) this.toast('📄 Rascunho carregado!', 'success');
    } catch { /* silêncio */ }
  }

  /* ─── TOAST ─── */

  esc(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  toast(msg, tipo = 'success') {
    let container = document.querySelector('.g-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'g-toast-container';
      document.body.appendChild(container);
    }
    const el = document.createElement('div');
    el.className = `g-toast g-toast-${tipo}`;
    el.textContent = msg;
    container.appendChild(el);
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.3s';
      setTimeout(() => el.remove(), 300);
    }, 3000);
  }
}

/* ─── START ─── */

document.addEventListener('DOMContentLoaded', () => {
  new GeradorOrcamento();
});
