/* ============================================ */
/*  DASHBOARD FINANCEIRO · CORE                */
/*  Persistência: localStorage                  */
/* ============================================ */

class Dashboard {
  constructor() {
    this.db = { vendas: [], config: {} };
    this.carregarDados();
    this.init();
  }

  /* ─── PERSISTÊNCIA ─── */

  carregarDados() {
    try {
      const raw = localStorage.getItem('dashboard_financeiro');
      this.db = raw ? JSON.parse(raw) : { vendas: [], config: {} };
    } catch {
      this.db = { vendas: [], config: {} };
    }
    this.db.config = {
      custoDominio: this.db.config.custoDominio || 40,
      valorManutencao: this.db.config.valorManutencao || 19.90,
      custoDominioCliente: this.db.config.custoDominioCliente || 40,
      ...this.db.config
    };
  }

  salvar() {
    localStorage.setItem('dashboard_financeiro', JSON.stringify(this.db));
  }

  /* ─── INIT ─── */

  init() {
    this.renderResumo();
    this.renderGrafico();
    this.renderTabelaVendas();
    this.renderTabelaClientes();
    this.carregarConfig();
    this.bindEvents();
  }

  /* ─── VENDAS CRUD ─── */

  adicionarVenda(data) {
    const venda = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
      cliente: data.cliente.trim(),
      plano: data.plano,
      valor: parseFloat(data.valor),
      manutencao: data.manutencao === 'sim',
      data: data.data || new Date().toISOString().split('T')[0],
      contato: data.contato.trim() || '-'
    };
    this.db.vendas.push(venda);
    this.salvar();
    this.renderAll();
    this.toast(`✅ Venda registrada para ${venda.cliente}`, 'success');
  }

  removerVenda(id) {
    const venda = this.db.vendas.find(v => v.id === id);
    if (!venda) return;
    this.db.vendas = this.db.vendas.filter(v => v.id !== id);
    this.salvar();
    this.renderAll();
    this.toast(`🗑️ Venda de ${venda.cliente} removida`, 'error');
  }

  /* ─── CÁLCULOS ─── */

  get totalVendido() {
    return this.db.vendas.reduce((s, v) => s + v.valor, 0);
  }

  get totalClientes() {
    return this.db.vendas.length;
  }

  get manutencoesAtivas() {
    return this.db.vendas.filter(v => v.manutencao).length;
  }

  get receitaMensalManutencao() {
    const { valorManutencao } = this.db.config;
    return this.manutencoesAtivas * valorManutencao;
  }

  get custoTotalDominios() {
    const { custoDominioCliente } = this.db.config;
    return this.totalClientes * custoDominioCliente;
  }

  get lucroLiquido() {
    return this.totalVendido - this.custoTotalDominios;
  }

  get vendasPorMes() {
    const meses = {};
    this.db.vendas.forEach(v => {
      const [ano, mes] = v.data.split('-');
      const chave = `${ano}-${mes}`;
      if (!meses[chave]) meses[chave] = 0;
      meses[chave] += v.valor;
    });
    return Object.entries(meses)
      .sort(([a], [b]) => a.localeCompare(b));
  }

  /* ─── RENDER RESUMO ─── */

  renderResumo() {
    const fmt = v => `R$ ${v.toFixed(2).replace('.', ',')}`;

    document.getElementById('totalVendido').textContent = fmt(this.totalVendido);
    document.getElementById('lucroLiquido').textContent = fmt(this.lucroLiquido);
    document.getElementById('totalClientes').textContent = this.totalClientes;
    document.getElementById('totalManut').textContent = `${this.manutencoesAtivas} (${fmt(this.receitaMensalManutencao)}/mês)`;

    // Destaque lucro negativo
    const elLucro = document.getElementById('lucroLiquido');
    elLucro.style.color = this.lucroLiquido >= 0 ? 'var(--green)' : 'var(--red)';
  }

  /* ─── RENDER GRÁFICO ─── */

  renderGrafico() {
    const container = document.getElementById('chartBars');
    const vendasMes = this.vendasPorMes;

    if (vendasMes.length === 0) {
      container.innerHTML = '<div class="chart-empty">Nenhuma venda registrada ainda 📊</div>';
      return;
    }

    const valores = vendasMes.map(([, v]) => v);
    const maxValor = Math.max(...valores, 1);

    container.innerHTML = vendasMes.map(([chave, valor]) => {
      const percent = (valor / maxValor) * 100;
      const [ano, mes] = chave.split('-');
      const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dec'];
      const label = `${meses[parseInt(mes) - 1]}/${ano.slice(2)}`;
      const fmt = `R$ ${valor.toFixed(2).replace('.', ',')}`;
      const cor = percent > 70 ? 'var(--green)' :
                  percent > 40 ? 'var(--cyan)' :
                  percent > 20 ? 'var(--amber)' : 'var(--green-dim)';

      return `
        <div class="chart-bar-wrap">
          <span class="chart-bar-value">${fmt}</span>
          <div class="chart-bar" style="height:${Math.max(percent, 4)}%;background:${cor}"></div>
          <span class="chart-bar-label">${label}</span>
        </div>
      `;
    }).join('');
  }

  /* ─── RENDER TABELA VENDAS ─── */

  renderTabelaVendas() {
    const tbody = document.getElementById('vendasBody');
    if (this.db.vendas.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--text-dim);padding:2rem">Nenhuma venda registrada</td></tr>';
      return;
    }

    // Mais recentes primeiro
    const vendas = [...this.db.vendas].reverse();

    tbody.innerHTML = vendas.map(v => {
      const data = new Date(v.data + 'T12:00:00').toLocaleDateString('pt-BR');
      const planoClass = v.plano === 'Premium' ? 'tag-premium' : 'tag-basico';
      const manutClass = v.manutencao ? 'tag-manut-sim' : 'tag-manut-nao';
      const manutText = v.manutencao ? `✅ R$ ${this.db.config.valorManutencao.toFixed(2).replace('.',',')}` : '❌ Não';

      return `
        <tr>
          <td style="color:var(--text-dim)">${data}</td>
          <td><strong>${this.escape(v.cliente)}</strong></td>
          <td><span class="tag-plano ${planoClass}">${v.plano}</span></td>
          <td class="valor-positivo">R$ ${v.valor.toFixed(2).replace('.', ',')}</td>
          <td class="${manutClass}">${manutText}</td>
          <td style="color:var(--text-dim);font-size:.78rem">${this.escape(v.contato)}</td>
          <td><button class="d-btn-danger" data-remover="${v.id}" aria-label="Remover venda de ${this.escape(v.cliente)}">✕</button></td>
        </tr>
      `;
    }).join('');
  }

  /* ─── RENDER TABELA CLIENTES ─── */

  renderTabelaClientes() {
    const tbody = document.getElementById('clientesBody');
    if (this.db.vendas.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--text-dim);padding:2rem">Nenhum cliente cadastrado</td></tr>';
      return;
    }

    // Mais recentes primeiro
    const vendas = [...this.db.vendas].reverse();

    tbody.innerHTML = vendas.map(v => {
      const data = new Date(v.data + 'T12:00:00').toLocaleDateString('pt-BR');
      const planoClass = v.plano === 'Premium' ? 'tag-premium' : 'tag-basico';
      const { custoDominioCliente } = this.db.config;
      const lucro = v.valor - custoDominioCliente;
      const manutText = v.manutencao ? '✅ Sim' : '❌ Não';

      return `
        <tr>
          <td><strong>${this.escape(v.cliente)}</strong></td>
          <td><span class="tag-plano ${planoClass}">${v.plano}</span></td>
          <td class="valor-positivo">R$ ${v.valor.toFixed(2).replace('.', ',')}</td>
          <td style="color:var(--text-dim)">${data}</td>
          <td>${manutText}</td>
          <td style="color:var(--text-dim);font-size:.78rem">${this.escape(v.contato)}</td>
          <td class="valor-positivo">R$ ${lucro.toFixed(2).replace('.', ',')}</td>
        </tr>
      `;
    }).join('');
  }

  /* ─── CONFIG ─── */

  carregarConfig() {
    const { custoDominio, valorManutencao, custoDominioCliente } = this.db.config;
    document.getElementById('custoDominio').value = custoDominio;
    document.getElementById('valorManutencao').value = valorManutencao;
    document.getElementById('custoDominioCliente').value = custoDominioCliente;
  }

  salvarConfig() {
    this.db.config.custoDominio = parseFloat(document.getElementById('custoDominio').value) || 40;
    this.db.config.valorManutencao = parseFloat(document.getElementById('valorManutencao').value) || 19.90;
    this.db.config.custoDominioCliente = parseFloat(document.getElementById('custoDominioCliente').value) || 40;
    this.salvar();
    this.renderAll();
    this.toast('⚙️ Configurações salvas!', 'success');
  }

  /* ─── CSV EXPORT ─── */

  exportarCSV() {
    if (this.db.vendas.length === 0) {
      this.toast('⚠️ Nenhuma venda para exportar', 'error');
      return;
    }

    const header = 'Data,Cliente,Plano,Valor,Manutenção,Mensalidade,Contato,Lucro';
    const rows = this.db.vendas.map(v => {
      const { custoDominioCliente } = this.db.config;
      const lucro = (v.valor - custoDominioCliente).toFixed(2).replace('.', ',');
      const manut = v.manutencao ? `Sim (R$ ${this.db.config.valorManutencao.toFixed(2).replace('.', ',')}/mês)` : 'Não';
      return [
        v.data,
        `"${v.cliente}"`,
        v.plano,
        v.valor.toFixed(2).replace('.', ','),
        manut,
        v.manutencao ? this.db.config.valorManutencao.toFixed(2).replace('.', ',') : '0',
        `"${v.contato}"`,
        lucro
      ].join(',');
    }).join('\n');

    const blob = new Blob(['\uFEFF' + header + '\n' + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dashboard-financeiro-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    this.toast('📥 CSV exportado com sucesso!', 'success');
  }

  /* ─── LIMPAR DADOS ─── */

  limparDados() {
    if (!confirm('⚠️ Tem certeza? Todos os dados serão perdidos!')) return;
    if (!confirm('🔥 ÚLTIMA CHANCE! Deseja realmente excluir TUDO?')) return;
    this.db.vendas = [];
    this.db.config = {
      custoDominio: 40,
      valorManutencao: 19.90,
      custoDominioCliente: 40
    };
    this.salvar();
    this.renderAll();
    this.toast('🗑️ Todos os dados foram limpos!', 'error');
  }

  /* ─── EVENTS ─── */

  bindEvents() {
    // Formulário de venda
    document.getElementById('vendaForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      const data = {
        cliente: document.getElementById('clienteNome').value,
        plano: document.getElementById('planoTipo').value,
        valor: document.getElementById('valorVenda').value.replace(',', '.'),
        manutencao: document.getElementById('temManutencao').value,
        data: document.getElementById('dataVenda').value,
        contato: document.getElementById('contatoCliente').value
      };
      if (!data.cliente || !data.valor || !data.data) {
        this.toast('⚠️ Preencha todos os campos obrigatórios!', 'error');
        return;
      }
      this.adicionarVenda(data);
      form.reset();
      document.getElementById('dataVenda').value = new Date().toISOString().split('T')[0];
    });

    // Data padrão = hoje
    document.getElementById('dataVenda').value = new Date().toISOString().split('T')[0];

    // Remover venda (delegação)
    document.getElementById('vendasBody').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-remover]');
      if (btn && confirm(`Remover esta venda?`)) {
        this.removerVenda(btn.dataset.remover);
      }
    });

    // Config inputs
    ['custoDominio', 'valorManutencao', 'custoDominioCliente'].forEach(id => {
      document.getElementById(id).addEventListener('change', () => this.salvarConfig());
    });

    // Exportar CSV
    document.getElementById('exportarCSV').addEventListener('click', () => this.exportarCSV());

    // Limpar dados
    document.getElementById('limparDados').addEventListener('click', () => this.limparDados());

    // Navegação suave + active state
    document.querySelectorAll('.d-nav-links a').forEach(link => {
      link.addEventListener('click', (e) => {
        document.querySelectorAll('.d-nav-links a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      });
    });

    // Highlight da seção atual no scroll
    this.observeSections();
  }

  observeSections() {
    const sections = document.querySelectorAll('.d-section');
    const navLinks = document.querySelectorAll('.d-nav-links a');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(s => observer.observe(s));
  }

  /* ─── UTILITIES ─── */

  renderAll() {
    this.renderResumo();
    this.renderGrafico();
    this.renderTabelaVendas();
    this.renderTabelaClientes();
  }

  escape(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  toast(msg, tipo = 'success') {
    const container = document.querySelector('.toast-container') || (() => {
      const c = document.createElement('div');
      c.className = 'toast-container';
      document.body.appendChild(c);
      return c;
    })();

    const el = document.createElement('div');
    el.className = `toast toast-${tipo}`;
    el.textContent = msg;
    container.appendChild(el);

    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transition = 'opacity .3s';
      setTimeout(() => el.remove(), 300);
    }, 3000);
  }
}

/* ─── START ─── */

document.addEventListener('DOMContentLoaded', () => {
  new Dashboard();
});
