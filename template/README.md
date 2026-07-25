# 🌐 Template de Site para Negócios Locais

Template profissional, responsivo e totalmente customizável para criar sites para empresas e estabelecimentos comerciais.

## ✨ Funcionalidades

- ✅ **WhatsApp integrado** — Botão flutuante + link direto com mensagem personalizada
- ✅ **Redes Sociais** — Instagram, Facebook, TikTok, YouTube, Twitter
- ✅ **Galeria de Fotos** — Com filtros por categoria e lightbox (zoom)
- ✅ **Cardápio com Preços** — Categorias e itens com descrição e valor
- ✅ **Serviços** — Cards de serviços oferecidos
- ✅ **Depoimentos** — Avaliações de clientes com estrelas
- ✅ **Mapa** — Google Maps embutido com localização
- ✅ **Horários de Funcionamento**
- ✅ **Design Responsivo** — Celular, tablet e desktop
- ✅ **Animações Suaves** — Scroll reveal, hover effects, transições
- ✅ **SEO Otimizado** — Meta tags, Open Graph, keywords
- ✅ **Hospedagem Universal** — Funciona em qualquer servidor (GitHub Pages, Netlify, VPS, etc.)
- ✅ **Zero Dependências** — HTML + CSS + JS puro. Sem frameworks, sem build, sem npm

---

## 🚀 Como Usar

### 1️⃣ Copie a pasta template

```bash
cp -r template/ meu-novo-site/
cd meu-novo-site/
```

### 2️⃣ Edite o arquivo de configuração

Abra o arquivo `js/config.js` e preencha com os dados do negócio:

```javascript
const SITE_CONFIG = {
  business: {
    name: 'Nome do Negócio',
    tagline: 'Slogan do seu negócio',
    // ...
  },
  social: {
    whatsapp: { number: '5511999999999', message: 'Olá!', active: true },
    instagram: { url: 'https://instagram.com/seuperfil', active: true },
    // ...
  },
  // ...
};
```

### 3️⃣ Adicione as fotos

Coloque as imagens na pasta `assets/images/`:
- `foto1.jpg`, `foto2.jpg`... (galeria)
- `about.jpg` (imagem da seção "Sobre")
- `og-image.jpg` (imagem para compartilhamento em redes sociais)

> **Dica:** Use imagens .webp para melhor performance. Otimize em [squoosh.app](https://squoosh.app)

### 4️⃣ Faça o deploy

| Plataforma | Como fazer |
|------------|------------|
| **GitHub Pages** | Crie um repo, faça push, ative GitHub Pages nas settings |
| **Netlify** | Arraste a pasta para [netlify.com](https://netlify.com) — grátis |
| **Vercel** | Conecte o repo ou arraste a pasta |
| **Hospedagem própria** | Envie os arquivos via FTP para o servidor |
| **Qualquer lugar** | Basta servir os arquivos estáticos |

---

## 📁 Estrutura

```
meu-site/
├── index.html              ← Página principal (não precisa editar)
├── css/
│   └── style.css           ← Estilos completos (não precisa editar)
├── js/
│   ├── config.js           ← ⚡ EDITAR AQUI — configuração do negócio
│   └── main.js             ← Funcionalidades (não precisa editar)
└── assets/
    ├── images/             ← Coloque as fotos aqui
    └── icons/              ← Ícones personalizados (opcional)
```

---

## 🎨 Personalização Visual

No arquivo `config.js`, você pode alterar:

```javascript
theme: {
  primary: '#2563eb',       // Cor principal
  secondary: '#7c3aed',     // Cor secundária
  accent: '#f59e0b',        // Cor de destaque
  dark: '#0f172a',          // Cor escura
  light: '#f8fafc',         // Cor clara
  whatsapp: '#25D366',      // Cor do WhatsApp
}
```

> 💡 Use [coolors.co](https://coolors.co) para gerar paletas de cores profissionais.

---

## ⚡ Perfeito para

- 🍕 **Restaurantes, bares e lanchonetes** — Cardápio com preços, fotos dos pratos
- ✂️ **Barbearias e salões** — Galeria de cortes, serviços, preços
- 🔧 **Oficinas e automecânicas** — Serviços, orçamento via WhatsApp
- 🏪 **Lojas e comércios** — Produtos, horários, localização
- 💇 **Salões de beleza** — Portfólio, serviços, agendamento
- 🏥 **Clínicas e consultórios** — Serviços, contato, localização

---

## 📝 Licença

Livre para uso comercial e pessoal. Modifique, distribua e use como quiser.

---

✨
