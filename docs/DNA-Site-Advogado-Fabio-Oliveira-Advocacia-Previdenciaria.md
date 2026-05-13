# SITE DNA — ADVogado Fábio Oliveira

**Nicho:** Advocacia Previdenciária de alta conversão — atuação presencial em Campo Grande (RJ) e Ribeirão Preto (SP), com atendimento online para todo o Brasil. Foco em aposentadorias, INSS, BPC/LOAS, auxílios, revisões e ações contra o INSS.
**Posicionamento:** Site com arquitetura editorial de confiança institucional. A sensação é de sofisticação discreta: o dourado ambar funciona como selo de credibilidade sobre uma base de grafite e creme, evocando escritórios tradicionais sem cair em conservadorismo datado. O layout é asymétrico por intenção (mosaico hero + bento grid de serviços), transmitindo organização moderna sem perder a solidez jurídica.
**Stack Técnica:** HTML5 sem frameworks | CSS3 custom puro (zero Tailwind/Bootstrap) | Google Fonts: DM Sans (300, 400, 600) + Playfair Display (400, 700, 900) | Ícones SVG inline (zero biblioteca de ícones) | Schema.org JSON-LD: LegalService, WebSite, WebPage, FAQPage | Sem pré-processadores CSS
**Data de criação:** 2026-04-08 (conforme Schema.org datePublished/dateModified)

---

## 1. IDENTIDADE VISUAL

### 1.1 Tokens de Marca — CSS Custom Properties

> **Nota:** Este site **não possui sistema dark mode**. A tabela abaixo documenta apenas os tokens do `:root` encontrados no código.

| Token CSS | Valor Exato | Onde é usado especificamente |
|---|---|---|
| `--grafite-primario` | `#1F1F1F` | Fundo da navbar scrolled, fundo hero, fundo enchantment section, fundo CTA form, fundo main-card |
| `--ambar-dourado` | `#C8861A` | Acento visual primário: accent-line, bordas da foto do Fabio, ícones de diferencial, estrelas de depoimento, ticker bar, hover de links do footer, botões primários, setas dos cards |
| `--creme-quente` | `#F4EFE6` | Fundo da seção pain-solution, fundo about, fundo location, fundo do wrapper do formulário CTA |
| `--off-white` | `#FAFAF7` | Fundo body, fundo testimonials |
| `--grafite-texto` | `#1A1A1A` | Cor do texto body, títulos de seção em fundo claro |
| `--grafite-secundario` | `#3D3D3D` | Token declarado mas **não utilizado ativamente** no CSS entregue |
| `--texto` | `#1A1A1A` | Usado em `.diferencial-item` (redundância com `--grafite-texto`) |
| `--branco` | `#FFFFFF` | Texto sobre fundos escuros, fundo dos cards bento, input backgrounds |
| `--f-display` | `'Playfair Display', serif` | Todos os títulos h1-h4, logo-text, ticker, quote-icon, location-item strong |
| `--f-body` | `'DM Sans', sans-serif` | Corpo de texto, navegação, botões, labels de formulário |
| `--container-width` | `1200px` | Largura máxima de todas as seções `.container` |
| `--transition-smooth` | `all 0.4s cubic-bezier(0.22, 1, 0.36, 1)` | Transição global padrão: botões, links, cards, navbar, ícone FAQ, setas |

> **Curva de easing global:** `cubic-bezier(0.22, 1, 0.36, 1)` — curva de desaceleração suave (ease-out-quint-like), aplicada em ~90% das transições. Única exceção: `.faq-answer` usa `cubic-bezier(0.4, 0, 0.2, 1)` para o max-height.

### 1.2 Tipografia — Tabela Completa

| Elemento / Classe CSS | Família | Peso | Tamanho Exato | Line-height | Letter-spacing | Transform | Cor |
|---|---|---|---|---|---|---|---|
| `body` | DM Sans | 400 (herdado) | `1rem` (16px padrão browser) | `1.6` | normal | — | `var(--grafite-texto)` |
| `.logo-text` | Playfair Display | 900 | `1.5rem` (24px) | normal | `-0.5px` | — | `white` |
| `.logo-sub` | DM Sans | 400 | `0.65rem` (10.4px) | normal | `2px` | `uppercase` | `white` (opacity 0.8) |
| `.hero-headline` | Playfair Display | 700 | `clamp(2.2rem, 5.5vw, 4rem)` | `0.95` | `-1px` | — | `white` |
| `.hero-subtitle` | DM Sans | 300 | `1.2rem` (19.2px) | normal | normal | — | `white` (opacity 0.9) |
| `.btn` | DM Sans | 600 | `0.95rem` (15.2px) | normal | normal | — | variável por tipo |
| `.section-title` | Playfair Display | 700 | `clamp(2.5rem, 5vw, 4rem)` | `1.1` | normal | — | `var(--grafite-primario)` ou `white` em fundos escuros |
| `.pain-content p` | DM Sans | 400 | `1.25rem` (20px) | normal | normal | — | `var(--grafite-texto)` (opacity 0.8) |
| `.bento-card h3` | Playfair Display | 700 | `1.5rem` (24px) | normal | normal | — | `var(--grafite-primario)` ou `white` no main-card |
| `.main-card h3` | Playfair Display | 700 | `2.5rem` (40px) | normal | normal | — | `white` |
| `.bento-card p` | DM Sans | 400 | `0.9rem` (14.4px) | normal | normal | — | opacity 0.7 |
| `.bento-card .arrow` | sistema | 400 | `1.5rem` (24px) | normal | normal | — | `var(--ambar-dourado)` |
| `.small-card h3` | Playfair Display | 700 | `1.1rem` (17.6px) | normal | normal | — | `var(--grafite-primario)` |
| `.location-item strong` | Playfair Display | 700 | `1.5rem` (24px) | normal | normal | — | `var(--ambar-dourado)` |
| `.diferencial-item` | DM Sans | 400 | `1rem` (16px) | `1.5` | normal | — | `var(--texto)` |
| `.quote-icon` | Playfair Display | 700 | `8rem` (128px) | `0` | normal | — | `var(--ambar-dourado)` (opacity 0.1) |
| `.testimonial-text` | DM Sans | 400 | `1.4rem` (22.4px) | normal | normal | `italic` | `var(--grafite-texto)` |
| `.testimonial-author h4` | Playfair Display | 700 | `1.1rem` (17.6px) | normal | normal | — | `var(--grafite-primario)` |
| `.stars` | sistema | 400 | `0.8rem` (12.8px) | normal | normal | — | `var(--ambar-dourado)` |
| `.ticker-track span` | Playfair Display | 700 | `1.2rem` (19.2px) | normal | `2px` | `uppercase` | `white` |
| `.faq-question h3` | DM Sans | 600 | `1.25rem` (20px) | normal | normal | — | `var(--grafite-primario)` |
| `.faq-icon` | sistema | 400 | `1.5rem` (24px) | normal | normal | — | `var(--ambar-dourado)` |
| `.address-card h3` | Playfair Display | 700 | `1.25rem` (20px) | normal | normal | — | `var(--grafite-primario)` |
| `.form-group label` | DM Sans | 600 | `0.85rem` (13.6px) | normal | `1px` | `uppercase` | `var(--grafite-texto)` |
| `.form-group input/select/textarea` | DM Sans | 400 | `1rem` (16px) | normal | normal | — | `var(--grafite-texto)` |
| `.footer-col h3` | Playfair Display | 700 | `1.25rem` (20px) | normal | normal | — | `var(--ambar-dourado)` |
| `.footer-col p` | DM Sans | 400 | `0.95rem` (15.2px) | normal | normal | — | `white` (opacity 0.7) |
| `.footer-bottom-container` | DM Sans | 400 | `0.85rem` (13.6px) | normal | normal | — | `white` (opacity 0.6) |

### 1.3 Sistema de Cores Funcionais — rgba() e Opacidades

| Valor `rgba()` | Uso Específico | Contexto |
|---|---|---|
| `rgba(31, 31, 31, 0.95)` | Fundo da navbar no scroll | `.navbar.scrolled` — blur de 10px sobreposto |
| `rgba(31, 31, 31, 0.72)` | Overlay do hero | `.hero-overlay` — z-index 1 sobre o grafite primário |
| `rgba(255, 255, 255, 0.3)` | Borda do botão secundário | `.btn-secondary` — 1px sólido |
| `rgba(255, 255, 255, 0.1)` | Hover do botão secundário | `.btn-secondary:hover` — preenchimento sutil |
| `rgba(200, 134, 26, 0.2)` | Sombra do botão primário hover | `.btn-primary:hover` — `0 10px 20px` |
| `rgba(0, 0, 0, 0.05)` | Borda sutil dos cards bento | `.bento-card` — 1px sólido |
| `rgba(31, 31, 31, 0.1)` | Sombra dos cards bento hover | `.bento-card:hover` — `0 20px 40px` |
| `rgba(0, 0, 0, 0.3)` | Sombra da foto do Fabio no hero | `.hero-foto-fabio` — `0 20px 40px` |
| `rgba(0, 0, 0, 0.1)` | Sombra do location map | `.location-map` — `0 20px 50px` |
| `rgba(0, 0, 0, 0.05)` | Sombra dos cards de endereço | `.address-card` — `0 10px 30px` |
| `rgba(0, 0, 0, 0.06)` | Sombra dos cards de depoimento mobile | `.testimonial-card` (dentro de `@media max-width: 768px`) |
| `rgba(255, 255, 255, 0.1)` | Borda do footer-bottom | `.footer-bottom` — separador sutil |
| `rgba(37, 211, 102, 0.3)` | Sombra do botão flutuante WhatsApp | `.fab-whatsapp` — `0 10px 30px` |
| `rgba(0, 0, 0, 0.1)` | Borda dos inputs de formulário | `.form-group input/select/textarea` — 1px sólido |
| `rgba(0, 0, 0, 0.1)` | Borda inferior dos itens FAQ | `.faq-item` — separador entre perguntas |

### 1.4 Estilo Geral

A arquitetura visual segue uma filosofia de **contraste térmico**: bases frias (grafite #1F1F1F) são aquecidas por inserções pontuais de âmbar (#C8861F) e creme (#F4EFE6), criando uma atmosfera de "escritório de luxo acessível". O espaçamento é generoso e vertical — `120px` de padding em seções desktop, reduzindo para `70px` no mobile — priorizando respiração e hierarquia. Não existe dark mode alternativo; o site opera exclusivamente no modo claro-escuro segmentado por seção (seções alternam entre grafite e creme/off-white). O container base é rígido em `1200px` com `24px` de padding lateral (`16px` no mobile pequeno), garantindo leitura confortável em todos os viewports. O princípio visual dominante é a **asymetria controlada**: o hero divide `1.2fr / 0.8fr`, o bento grid usa 12 colunas com spans assimétricos, e a foto do advogado invade o grid como elemento flutuante circular com borda dourada.

---

## 2. LAYOUT — SEÇÃO POR SEÇÃO

---

### SEÇÃO 1 — NAVBAR

**Estrutura:**
```html
<nav class="navbar" id="navbar">
  <div class="container nav-container">
    <div class="logo" id="nav-logo">
      <span class="logo-text">Fábio Oliveira</span>
      <span class="logo-sub">Advocacia Previdenciária</span>
    </div>
    <ul class="nav-links" id="nav-links">...</ul>
    <div class="mobile-menu-toggle" id="mobile-toggle" role="button" aria-label="Abrir menu de navegação" tabindex="0">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>
```

**Fundo:**
- Layer 0 — base: `transparent` (estado inicial), `rgba(31, 31, 31, 0.95)` ao scrollar
- Layer 1 — blur: `backdrop-filter: blur(10px)` aplicado apenas no estado `.scrolled`
- Layer 2 — conteúdo: `z-index: 1000`, `position: fixed`, `top: 0`, `width: 100%`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Logo | `.logo` | flex column | auto | `color: white` |
| Hamburger | `.mobile-menu-toggle span` | absolute dentro do toggle | `28px × 2px` | `background-color: white`, gap `6px` entre spans |
| CTA Nav | `.btn-nav` | inline no menu | `padding: 10px 20px` | `background-color: var(--ambar-dourado)`, `opacity: 1 !important` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| Nenhuma animação própria — transição de estado via CSS | `background: transparent`, `padding: 20px 0` | `background: rgba(31,31,31,0.95)`, `padding: 12px 0` | 0.4s | `cubic-bezier(0.22, 1, 0.36, 1)` | scrollY > 50 (JS) | — |
| Hamburger → X | span reto | span1: `rotate(45deg) translate(6px, 6px)`, span2: `opacity: 0`, span3: `rotate(-45deg) translate(6px, -6px)` | 0.4s | `cubic-bezier(0.22, 1, 0.36, 1)` | click no `.mobile-menu-toggle` | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.nav-links a` | `:hover` | — | — | — | `opacity: 1`, `color: var(--ambar-dourado)` | 0.4s var(--transition-smooth) |
| `.mobile-menu-toggle span` | `.active` | veja animação acima | — | — | — | 0.4s var(--transition-smooth) |

**Diferenciador Visual:**
A navbar não é apenas um container de links — ela é **invisível no topo** e materializa-se como uma barra de vidro fosco escuro ao scrollar. A prova técnica está em `.navbar.scrolled` combinando `background-color: rgba(31, 31, 31, 0.95)` com `backdrop-filter: blur(10px)` e `box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)`, criando uma transição de "fantasma" para "barra sólida".

---

### SEÇÃO 2 — HERO

**Estrutura:**
```html
<section class="hero" id="home">
  <div class="hero-overlay"></div>
  <div class="container hero-container">
    <div class="hero-content">
      <div class="hero-headline-wrapper">
        <div class="accent-line"></div>
        <h1 class="hero-headline" id="hero-headline">Justiça <br>que acolhe, <br>Direito que <br>protege.</h1>
      </div>
      <p class="hero-subtitle" id="hero-subtitle">...</p>
      <div class="hero-ctas" id="hero-ctas">
        <a href="https://wa.me/5521980359909" target="_blank" class="btn btn-primary">...</a>
        <a href="#servicos" class="btn btn-secondary">Conhecer Serviços</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-mosaic">
        <div class="mosaic-item img-1">...</div>
        <div class="mosaic-item img-2">...</div>
        <div class="mosaic-item img-3">...</div>
      </div>
      <div class="hero-foto-fabio" id="hero-foto-fabio">
        <img src="/assets/advogadofabiooliveira_1757348439_3717230589998159907_45812508438.jpg" ...>
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--grafite-primario)` (`#1F1F1F`) sólido
- Layer 1 — overlay: `rgba(31, 31, 31, 0.72)` via `.hero-overlay` (`position: absolute`, `z-index: 1`)
- Layer 2 — conteúdo: `z-index: 2`, grid `1.2fr 0.8fr`, `gap: 60px`

> **Variação mobile (max-width: 768px):** O fundo muda completamente. `.hero` recebe `background-image: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 70%, #000 100%), url('/assets/advogadofabiooliveira_1757348439_3717230589998159907_45812508438.jpg')` com `background-size: cover` e `background-position: center top`. `.hero-overlay` é ocultado (`display: none`).

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Linha de acento | `.accent-line` | absolute, left: 0, top: 10px, bottom: 10px | `3px` largura | `background-color: var(--ambar-dourado)` |
| Headline wrapper | `.hero-headline-wrapper` | relative | auto | `padding-left: 30px` |
| Mosaico | `.hero-mosaic` | relative dentro de `.hero-visual` | `height: 100%` (500px) | `grid-template-columns: 1fr 1fr`, `grid-template-rows: 1.2fr 0.8fr`, `gap: 8px` |
| Foto flutuante Fabio | `.hero-foto-fabio` | absolute, top: 50%, left: -100px, translateY(-50%) | `200px × 200px` | `border-radius: 50%`, `border: 4px solid var(--ambar-dourado)`, `box-shadow: 0 20px 40px rgba(0,0,0,0.3)`, `z-index: 3` |
| Imagem 1 (topo) | `.img-1` | grid column 1/3 | ocupa 2 colunas | — |
| Imagem 2 | `.img-2` | grid row 2, col 1 | — | — |
| Imagem 3 | `.img-3` | grid row 2, col 2 | — | — |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| Parallax Mosaico (JS) | `translate(0, 0)` | `translate(${(clientX/innerWidth-0.5)*20}px, ${(clientY/innerHeight-0.5)*20}px)` | contínuo | linear | `mousemove` em `window` | — |
| Hover imagens mosaico | `scale(1)` | `scale(1.05)` | 0.8s | `ease` | `:hover` em `.mosaic-item` | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.btn-primary` | `:hover` | `translateY(-3px)` | `0 10px 20px rgba(200, 134, 26, 0.2)` | — | `background-color: #b07516` | 0.4s var(--transition-smooth) |
| `.btn-secondary` | `:hover` | — | — | `border-color: white` | `background-color: rgba(255,255,255,0.1)` | 0.4s var(--transition-smooth) |
| `.mosaic-item img` | `:hover` | `scale(1.05)` | — | — | — | 0.8s ease |

**Diferenciador Visual:**
O hero utiliza uma **composição de invasão de grid**: a foto circular do advogado (200px) posicionada em `left: -100px` sobrepõe fisicamente a transição entre o conteúdo textual e o mosaico visual, funcionando como ponto focal humano que quebra a rigidez do grid. Além disso, o mosaico responde ao movimento do mouse com parallax sutil de ±20px em ambos os eixos, implementado via JS puro manipulando `transform` diretamente no elemento `.hero-mosaic`.

---

### SEÇÃO 3 — PAIN/SOLUTION (DOR E SOLUÇÃO)

**Estrutura:**
```html
<section class="pain-solution">
  <div class="container">
    <div class="pain-content">
      <h2 class="section-title reveal">Seu INSS negado? <br>Você tem direito de lutar.</h2>
      <p class="reveal">A burocracia do INSS...</p>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--creme-quente)` (`#F4EFE6`) sólido
- Layer 1 — conteúdo: centralizado, `max-width: 800px`, `text-align: center`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Container de texto | `.pain-content` | block, margin auto | `max-width: 800px` | `text-align: center` |
| Parágrafo | `.pain-content p` | block | auto | `font-size: 1.25rem`, `opacity: 0.8` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `.reveal` | `opacity: 0`, `transform: translateY(30px)` | `opacity: 1`, `transform: translateY(0)` | 0.8s | `opacity: ease`, `transform: cubic-bezier(0.22, 1, 0.36, 1)` | IntersectionObserver threshold 0.15 | — |

**Micro-interações:**
Nenhuma micro-interação específica além do reveal global.

**Diferenciador Visual:**
Seção minimalista de transição emocional — usa o creme quente como "pausa respiratória" entre o hero escuro e o grid de serviços. A única ação visual é a revelação suave do texto, permitindo que a mensagem de empatia prevaleça sem distrações de imagem ou cor.

---

### SEÇÃO 4 — SERVICES BENTO GRID

**Estrutura:**
```html
<section class="services" id="servicos">
  <div class="container">
    <h2 class="section-title reveal">Especialidades Previdenciárias</h2>
    <div class="bento-grid">
      <div class="bento-card main-card reveal">...</div>
      <div class="bento-card medium-card reveal">...</div> <!-- ×3 -->
      <div class="bento-card small-card reveal">...</div> <!-- ×6 -->
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--off-white)` (`#FAFAF7`) herdado do body
- Layer 1 — cards: fundo `white` com `border: 1px solid rgba(0, 0, 0, 0.05)` e `border-radius: 8px`
- Layer 2 — main card especial: `background-color: var(--grafite-primario)` com imagem de fundo em `.card-bg img` (opacity 0.3)

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Grid container | `.bento-grid` | grid | auto | `grid-template-columns: repeat(12, 1fr)`, `grid-auto-rows: 200px`, `gap: 20px` |
| Main card | `.main-card` | grid span | `span 6` colunas, `span 2` linhas | `color: white`, fundo grafite |
| Medium card | `.medium-card` | grid span | `span 3` colunas, `span 1` linha | fundo branco |
| Small card | `.small-card` | grid span | `span 3` colunas, `span 1` linha | `justify-content: center`, `padding: 20px` |
| Seta | `.arrow` | absolute | auto | `bottom: 30px`, `right: 30px`, `color: var(--ambar-dourado)` |
| Background img main | `.card-bg img` | absolute fill | `100% × 100%` | `object-fit: cover`, `opacity: 0.3` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `.reveal` | `opacity: 0`, `translateY(30px)` | `opacity: 1`, `translateY(0)` | 0.8s | opacity ease, transform cubic-bezier(0.22, 1, 0.36, 1) | IntersectionObserver 0.15 | — |
| Hover card | `translateY(0)` | `translateY(-6px)` | 0.4s | var(--transition-smooth) | `:hover` em `.bento-card` | — |
| Hover seta | `translateX(0)` | `translateX(5px)` | 0.4s | var(--transition-smooth) | `:hover` em `.bento-card` | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.bento-card` | `:hover` | `translateY(-6px)` | `0 20px 40px rgba(31, 31, 31, 0.1)` | — | — | 0.4s var(--transition-smooth) |
| `.bento-card .arrow` | `:hover` (pai) | `translateX(5px)` | — | — | — | 0.4s var(--transition-smooth) |

**Diferenciador Visual:**
O bento grid é a assinatura arquitetônica do site. Usa um sistema de **12 colunas CSS Grid** onde o card principal ocupa metade da largura (`span 6`) e dobra a altura (`span 2`), enquanto 9 cards menores preenchem o restante em padrão assimétrico. A prova técnica está em `.bento-grid { grid-template-columns: repeat(12, 1fr); grid-auto-rows: 200px; }` combinado com spans específicos por classe — uma solução que simula o layout do Apple Bento sem dependências externas.

---

### SEÇÃO 5 — ENCHANTMENT (ATENDIMENTO NACIONAL)

**Estrutura:**
```html
<section class="enchantment">
  <div class="container enchantment-container">
    <div class="enchantment-text reveal">
      <h2 class="section-title">Atendemos você onde estiver</h2>
      <p>...</p>
      <div class="locations-list">
        <div class="location-item"><strong>RJ</strong><span>Campo Grande</span></div>
        <div class="location-item"><strong>SP</strong><span>Ribeirão Preto</span></div>
        <div class="location-item"><strong>Brasil</strong><span>Atendimento Online</span></div>
      </div>
    </div>
    <div class="enchantment-visual reveal">
      <img src="/assets/advogadofabiooliveira_1757348439_3717230589998159907_45812508438.jpg" ...>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--grafite-primario)` (`#1F1F1F`) sólido
- Layer 1 — conteúdo: grid `1fr 1fr`, `gap: 80px`, `color: white`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Container | `.enchantment-container` | grid | auto | `grid-template-columns: 1fr 1fr`, `align-items: center` |
| Lista de localizações | `.locations-list` | flex column | auto | `margin-top: 40px`, `gap: 20px` |
| Item de local | `.location-item` | flex row | auto | `gap: 20px`, `align-items: center` |
| Sigla estado | `.location-item strong` | inline | `min-width: 60px` | `font-family: var(--f-display)`, `font-size: 1.5rem`, `color: var(--ambar-dourado)` |
| Imagem visual | `.enchantment-visual img` | block | `100%` largura | `border-radius: 8px`, `box-shadow: 0 30px 60px rgba(0,0,0,0.3)` |

**Animação:**
| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `.reveal` | `opacity: 0`, `translateY(30px)` | `opacity: 1`, `translateY(0)` | 0.8s | opacity ease, transform cubic-bezier(0.22,1,0.36,1) | IntersectionObserver | — |

**Micro-interações:**
Nenhuma.

**Diferenciador Visual:**
A seção utiliza **tipografia cromática de localização**: as siglas "RJ", "SP" e "Brasil" são renderizadas em Playfair Display 1.5rem com cor âmbar (`#C8861A`) e `min-width: 60px`, funcionando como mini-rótulos editoriais que organizam visualmente a informação geográfica sem precisar de ícones ou bullets.

---

### SEÇÃO 6 — ABOUT (SOBRE O ADVOGADO)

**Estrutura:**
```html
<section class="about" id="sobre">
  <div class="container about-container">
    <div class="about-content reveal">...texto + diferenciais...</div>
    <div class="about-visual reveal">
      <div class="foto-fabio-large">
        <img src="/assets/advogadofabiooliveira_1760052121_3739910720197866499_45812508438.jpg" ...>
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--creme-quente)` (`#F4EFE6`) sólido
- Layer 1 — conteúdo: grid `1fr 1fr`, `gap: 80px`, `align-items: center`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Container | `.about-container` | grid | auto | `grid-template-columns: 1fr 1fr` |
| Lista de diferenciais | `.diferenciais-list` | flex column | auto | `margin-top: 40px`, `gap: 16px` |
| Item diferencial | `.diferencial-item` | flex row | auto | `gap: 14px`, `font-size: 1rem`, `line-height: 1.5` |
| Ícone check | `.diferencial-icon` | flex center | `28px × 28px` | `border-radius: 50%`, `background-color: var(--ambar-dourado)`, `color: var(--branco)` |
| Ícone SVG | `.diferencial-icon svg` | inline | `16px × 16px` | stroke do ícone de check (polyline) |
| Foto grande | `.foto-fabio-large img` | block | `width: 100%`, `aspect-ratio: 1` | `border-radius: 50%`, `border: 3px solid var(--ambar-dourado)`, `padding: 10px`, `object-fit: cover` |

**Animação:**
| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `.reveal` | `opacity: 0`, `translateY(30px)` | `opacity: 1`, `translateY(0)` | 0.8s | opacity ease, transform cubic-bezier | IntersectionObserver | — |

**Micro-interações:**
Nenhuma.

**Diferenciador Visual:**
A foto do advogado recebe um **tratamento de retrato oficial com borda flutuante**: `border-radius: 50%`, `border: 3px solid var(--ambar-dourado)` e `padding: 10px` criam um efeito de "selo dourado" ao redor da imagem circular. O `aspect-ratio: 1` força o corte perfeito independentemente da proporção original da imagem.

---

### SEÇÃO 7 — TESTIMONIALS (DEPOIMENTOS)

**Estrutura:**
```html
<section class="testimonials" id="depoimentos">
  <div class="container">
    <h2 class="section-title reveal">O que dizem nossos clientes</h2>
    <div class="testimonials-stack" id="testimonials-stack">
      <div class="testimonial-card reveal">...</div> <!-- ×3 -->
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--off-white)` (`#FAFAF7`)
- Layer 1 — cards: `background-color: white`, `border-radius: 12px`, `box-shadow: 0 20px 40px rgba(0,0,0,0.05)`
- Layer 2 — aspas decorativas: `quote-icon` absoluto, `opacity: 0.1`, `z-index` implícito abaixo do texto

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Stack container | `.testimonials-stack` | relative | `max-width: 800px`, `height: 450px` | `margin: 60px auto 0` |
| Card individual | `.testimonial-card` | absolute, top: 0, left: 0 | `width: 100%` | `padding: 60px`, `transform-origin: bottom center` |
| Ícone de aspas | `.quote-icon` | absolute, top: 40px, left: 40px | — | `font-size: 8rem`, `line-height: 0`, `color: var(--ambar-dourado)`, `opacity: 0.1` |
| Texto do depoimento | `.testimonial-text` | relative, z-index: 1 | auto | `font-size: 1.4rem`, `font-style: italic`, `margin-bottom: 40px` |
| Autor | `.testimonial-author` | flex row | auto | `gap: 20px`, `align-items: center` |
| Foto autor | `.testimonial-author img` | block | `60px × 60px` | `border-radius: 50%` |
| Estrelas | `.stars` | inline | auto | `color: var(--ambar-dourado)`, `font-size: 0.8rem` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| Parallax Stack (JS desktop >768px) | `translateY(${index*20}px) scale(${1-index*0.05})`, `opacity: ${1-index*0.2}` | Variável por scroll: `translateY(${index*20 - offset}px) scale(${scale}) rotate(${rotate}deg)` | contínuo | — | `scroll` event + cálculo de `scrollPercent` | — |
| `.reveal` | `opacity: 0`, `translateY(30px)` | `opacity: 1`, `translateY(0)` | 0.8s | opacity ease, transform cubic-bezier | IntersectionObserver | — |

**Micro-interações:**
Nenhuma — a interação é via scroll parallax, não hover.

**Diferenciador Visual:**
A seção implementa um **efeito de cartas empilhadas com parallax scroll-driven** exclusivo para desktop. Os 3 cards são posicionados em `absolute` com `transform-origin: bottom center` e o JavaScript calcula dinamicamente `z-index`, `translateY`, `scale` e `rotate` baseado na porcentagem de scroll da seção visível na viewport. A fórmula exata é: `offset = Math.max(0, scrollPercent - 0.2) * 500 * (index + 1)`, `scale = 1 - index * 0.05 + (scrollPercent * 0.05)`, `rotate = index * 2 - (scrollPercent * 5)`. Isso cria uma sensação de "desdobramento" das cartas conforme o usuário rola a página.

---

### SEÇÃO 8 — TICKER BAR

**Estrutura:**
```html
<div class="ticker-bar">
  <div class="ticker-track" id="ticker-bar">
    <span>DR. FÁBIO OLIVEIRA · DIREITO PREVIDENCIÁRIO · ... · </span>
    <span>DR. FÁBIO OLIVEIRA · DIREITO PREVIDENCIÁRIO · ... · </span>
  </div>
</div>
```

**Fundo:**
- Layer 0 — base: `var(--ambar-dourado)` (`#C8861A`) sólido
- Layer 1 — texto: branco, fonte Playfair Display, animado horizontalmente

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Barra | `.ticker-bar` | block | `padding: 20px 0` | `overflow: hidden`, `white-space: nowrap` |
| Faixa | `.ticker-track` | inline-block | auto | `animation: ticker 35s linear infinite` |
| Texto | `.ticker-track span` | inline | auto | `margin-right: 50px`, `font-family: var(--f-display)`, `font-size: 1.2rem`, `font-weight: 700`, `letter-spacing: 2px`, `text-transform: uppercase` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `ticker` | `transform: translateX(0)` | `transform: translateX(-50%)` | 35s | `linear` | carregamento da página | — |

**Micro-interações:**
Nenhuma. Redução de movimento respeitada via `@media (prefers-reduced-motion: reduce) { .ticker-track { animation: none; } }` (declarado dentro do breakpoint 768px no CSS).

**Diferenciador Visual:**
O ticker utiliza **duplicação de texto** (dois spans idênticos) para criar loop infinito contínuo sem quebras visuais. A animação desloca a faixa em `-50%`, exatamente o comprimento de um span, garantindo transição perfeita. A duração de 35s é deliberadamente lenta para não competir com a leitura do conteúdo principal.

---

### SEÇÃO 9 — FAQ

**Estrutura:**
```html
<section class="faq" id="faq">
  <div class="container">
    <h2 class="section-title reveal">Dúvidas Frequentes</h2>
    <div class="faq-list">
      <div class="faq-item reveal">
        <div class="faq-question"><h3>...</h3><span class="faq-icon">+</span></div>
        <div class="faq-answer"><p>...</p></div>
      </div>
      <!-- ×8 itens -->
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--off-white)` herdado do body
- Layer 1 — itens: separados por `border-bottom: 1px solid rgba(0, 0, 0, 0.1)`
- Layer 2 — conteúdo: `max-width: 900px`, `margin: 0 auto`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Item | `.faq-item` | block | `padding: 24px 0` | `border-bottom: 1px solid rgba(0,0,0,0.1)` |
| Pergunta | `.faq-question` | flex row | auto | `justify-content: space-between`, `align-items: center`, `cursor: pointer` |
| Título pergunta | `.faq-question h3` | block | auto | `font-size: 1.25rem`, `font-family: var(--f-body)`, `font-weight: 600` |
| Ícone | `.faq-icon` | inline | auto | `font-size: 1.5rem`, `color: var(--ambar-dourado)` |
| Resposta | `.faq-answer` | block | `max-height: 0` | `overflow: hidden`, `opacity: 0`, `transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease` |
| Resposta ativa | `.faq-item.active .faq-answer` | block | `max-height: 200px` | `opacity: 1`, `padding-top: 20px` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| Accordion abrir | `max-height: 0`, `opacity: 0` | `max-height: 200px`, `opacity: 1`, `padding-top: 20px` | 0.4s | max-height: `cubic-bezier(0.4,0,0.2,1)`, opacity: `ease` | click em `.faq-question` (JS) | — |
| Ícone rotação | `rotate(0deg)` | `rotate(45deg)` | 0.4s | var(--transition-smooth) | `.faq-item.active` | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.faq-icon` | `.faq-item.active` | `rotate(45deg)` | — | — | — | 0.4s var(--transition-smooth) |

**Diferenciador Visual:**
O sistema FAQ é um **accordion exclusivo** (apenas um item aberto por vez). O JavaScript garante isso removendo `.active` de todos os itens antes de adicionar ao clicado. O ícone `+` gira 45 graus para formar uma "×" visual de fechamento. A transição de `max-height` usa um easing diferente do resto do site (`cubic-bezier(0.4, 0, 0.2, 1)`) para dar peso físico ao movimento de abertura.

---

### SEÇÃO 10 — LOCATION (ONDE NOS ENCONTRAR)

**Estrutura:**
```html
<section class="location">
  <div class="container location-container">
    <div class="location-info reveal">...address cards...</div>
    <div class="location-map reveal">
      <div class="map-placeholder">
        <iframe src="https://www.google.com/maps/embed?..." width="100%" height="450" style="border:0;" ...></iframe>
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--creme-quente)` (`#F4EFE6`)
- Layer 1 — cards de endereço: `background-color: white`, `border-radius: 8px`, `box-shadow: 0 10px 30px rgba(0,0,0,0.05)`
- Layer 2 — mapa: `border-radius: 8px`, `overflow: hidden`, `box-shadow: 0 20px 50px rgba(0,0,0,0.1)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Container | `.location-container` | grid | auto | `grid-template-columns: 0.8fr 1.2fr`, `gap: 60px` |
| Card endereço | `.address-card` | block | `padding: 40px` | `margin-bottom: 20px`, fundo branco |
| Mapa | `.location-map` | block | auto | `border-radius: 8px`, `overflow: hidden` |
| Iframe | `.map-placeholder iframe` | block | `width: 100%`, `height: 450` | `border: 0`, `loading: lazy` |

**Animação:**
| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `.reveal` | `opacity: 0`, `translateY(30px)` | `opacity: 1`, `translateY(0)` | 0.8s | opacity ease, transform cubic-bezier | IntersectionObserver | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.address-card .btn-outline` | `:hover` | — | — | — | `background-color: var(--ambar-dourado)`, `color: white` | 0.4s var(--transition-smooth) |

**Diferenciador Visual:**
A proporção do grid é assimétrica propositalmente: `0.8fr` para os cards de texto e `1.2fr` para o mapa, dando mais destaque visual ao embed do Google Maps. Os cards de endereço usam sombra sutil (`0 10px 30px rgba(0,0,0,0.05)`) enquanto o mapa usa sombra mais profunda (`0 20px 50px rgba(0,0,0,0.1)`), criando uma hierarquia de elevação onde o mapa "flutua" mais alto que os cards.

---

### SEÇÃO 11 — CTA FORM (AGENDE SUA CONSULTA)

**Estrutura:**
```html
<section class="cta-form" id="contato">
  <div class="container cta-container">
    <div class="cta-text reveal">...texto + info de contato...</div>
    <div class="cta-form-wrapper reveal">
      <form id="contact-form" class="form">
        <div class="form-group"><label for="name">Nome Completo</label><input type="text" id="name" name="name" required placeholder="Seu nome"></div>
        <div class="form-group"><label for="whatsapp">WhatsApp</label><input type="tel" id="whatsapp" name="whatsapp" required placeholder="(00) 00000-0000"></div>
        <div class="form-group"><label for="service">Serviço de Interesse</label><select id="service" name="service">...</select></div>
        <div class="form-group"><label for="message">Mensagem (Opcional)</label><textarea id="message" name="message" rows="4" placeholder="Conte brevemente seu caso"></textarea></div>
        <button type="submit" class="btn btn-primary full-width">Enviar Solicitação</button>
      </form>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--grafite-primario)` (`#1F1F1F`) — seção escura
- Layer 1 — wrapper do formulário: `background-color: var(--creme-quente)` (`#F4EFE6`), `padding: 50px`, `border-radius: 8px`
- Layer 2 — conteúdo textual: `color: white`, grid `1fr 1fr`, `gap: 80px`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Container | `.cta-container` | grid | auto | `grid-template-columns: 1fr 1fr`, `align-items: center`, `gap: 80px` |
| Wrapper form | `.cta-form-wrapper` | block | `padding: 50px` | `background-color: var(--creme-quente)`, `border-radius: 8px`, `color: var(--grafite-texto)` |
| Grupo campo | `.form-group` | block | `margin-bottom: 20px` | — |
| Label | `.form-group label` | block | auto | `font-size: 0.85rem`, `font-weight: 600`, `text-transform: uppercase`, `letter-spacing: 1px` |
| Input/Select/Textarea | `.form-group input, select, textarea` | block | `width: 100%`, `padding: 14px` | `border: 1px solid rgba(0,0,0,0.1)`, `border-radius: 4px`, `font-family: var(--f-body)`, `font-size: 1rem`, `background-color: white` |
| Foco input | `:focus` | — | — | `outline: none`, `border-color: var(--ambar-dourado)` |
| Botão full | `.full-width` | block | `width: 100%` | `justify-content: center` |

**Animação:**
| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `.reveal` | `opacity: 0`, `translateY(30px)` | `opacity: 1`, `translateY(0)` | 0.8s | opacity ease, transform cubic-bezier | IntersectionObserver | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.form-group input:focus` | `:focus` | — | — | `border-color: var(--ambar-dourado)` | `outline: none` | — |
| `.btn-primary` | `:hover` | `translateY(-3px)` | `0 10px 20px rgba(200, 134, 26, 0.2)` | — | `background-color: #b07516` | 0.4s var(--transition-smooth) |

**Diferenciador Visual:**
A seção CTA utiliza **contraste de temperatura invertido**: o fundo é grafite escuro (`#1F1F1F`) mas o formulário flutua dentro de um bloco de creme quente (`#F4EFE6`), criando um efeito de "cartão de papel pardo" sobre mesa escura. Isso isola visualmente o formulário do restante da página e direciona a atenção do usuário para a conversão final.

---

### SEÇÃO 12 — FOOTER

**Estrutura:**
```html
<footer class="footer">
  <div class="container footer-grid">
    <div class="footer-col">...logo + descrição...</div>
    <div class="footer-col">...links rápidos...</div>
    <div class="footer-col">...contato...</div>
  </div>
  <div class="footer-bottom">
    <div class="container footer-bottom-container">
      <p>&copy; Advogado Fábio Oliveira 2026</p>
      <p>Desenvolvido por <a href="https://www.ag5agencia.com.br" target="_blank" class="ag5-link">AG5 Agência</a></p>
    </div>
  </div>
</footer>
```

**Fundo:**
- Layer 0 — base: `#121212` (grafite mais escuro que o primário)
- Layer 1 — grid de colunas: `grid-template-columns: 1.5fr 1fr 1.5fr`, `gap: 60px`
- Layer 2 — footer bottom: separado por `border-top: 1px solid rgba(255, 255, 255, 0.1)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Grid | `.footer-grid` | grid | `margin-bottom: 80px` | `grid-template-columns: 1.5fr 1fr 1.5fr`, `gap: 60px` |
| Título coluna | `.footer-col h3` | block | `margin-bottom: 30px` | `color: var(--ambar-dourado)`, `font-size: 1.25rem` |
| Parágrafo | `.footer-col p` | block | auto | `opacity: 0.7`, `font-size: 0.95rem` |
| Link | `.footer-col ul li a` | inline | auto | `opacity: 0.7`, `font-size: 0.95rem` |
| Bottom container | `.footer-bottom-container` | flex row | `padding-top: 40px` | `justify-content: space-between`, `align-items: center`, `font-size: 0.85rem`, `opacity: 0.6` |
| Link AG5 | `.ag5-link` | inline | auto | `color: var(--ambar-dourado)`, `font-weight: 600` |

**Animação:**
Nenhuma animação própria.

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.footer-col ul li a` | `:hover` | — | — | — | `opacity: 1`, `color: var(--ambar-dourado)` | 0.4s var(--transition-smooth) |

**Diferenciador Visual:**
O footer usa um **grafite mais profundo** (`#121212`) que o hero (`#1F1F1F`), criando uma sensação de "fundo de poço" que ancorada visualmente a página. As colunas laterais são mais largas (`1.5fr`) que a central (`1fr`), centralizando os links rápidos e dando mais espaço para o bloco de descrição da marca e o bloco de contato com endereço completo e telefone.

---

### SEÇÃO 13 — FLOATING WHATSAPP (FAB)

**Estrutura:**
```html
<a href="https://wa.me/5521980359909" class="fab-whatsapp" target="_blank" id="fab-whatsapp" aria-label="Contatar Advogado Fábio Oliveira via WhatsApp" rel="noopener noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">...</svg>
  <div class="pulse-ring"></div>
</a>
```

**Fundo:**
- Layer 0 — base: `#25D366` (cor oficial WhatsApp)
- Layer 1 — anel de pulso: `border: 2px solid var(--ambar-dourado)` animado
- Layer 2 — ícone: SVG stroke branco, `width: 32`, `height: 32`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Botão | `.fab-whatsapp` | fixed, bottom: 30px, right: 30px | `64px × 64px` | `background-color: #25D366`, `border-radius: 50%`, `z-index: 999`, `box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3)` |
| Anel pulso | `.pulse-ring` | absolute, width: 100%, height: 100% | `100% × 100%` | `border-radius: 50%`, `border: 2px solid var(--ambar-dourado)`, `animation: pulse 2s infinite` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `pulse` | `scale(1)`, `opacity: 1` | `scale(1.5)`, `opacity: 0` | 2s | — (linear implícito) | carregamento da página | infinite |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.fab-whatsapp` | `:hover` | `scale(1.1)` | — | — | — | 0.4s var(--transition-smooth) |

**Diferenciador Visual:**
O botão flutuante não é um simples círculo verde — ele possui um **anel de pulso dourado** (`pulse-ring`) que expande de `scale(1)` para `scale(1.5)` com `opacity: 0`, usando a cor âmbar da marca (`#C8861A`) em vez do verde WhatsApp padrão. Isso integra visualmente o FAB à paleta do site enquanto mantém a identificação imediata do WhatsApp através do preenchimento `#25D366`.

---

## 3. COMPONENTES REUTILIZÁVEIS

### 3.1 Botões

```css
/* ─── BOTÃO BASE ─── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: var(--transition-smooth);
  border: none;
}

/* ─── BOTÃO PRIMÁRIO ─── */
.btn-primary {
  background-color: var(--ambar-dourado);
  color: white;
}
.btn-primary:hover {
  background-color: #b07516;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(200, 134, 26, 0.2);
}

/* ─── BOTÃO SECUNDÁRIO ─── */
.btn-secondary {
  background-color: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: white;
}

/* ─── BOTÃO OUTLINE ─── */
.btn-outline {
  border: 1px solid var(--ambar-dourado);
  color: var(--ambar-dourado);
}
.btn-outline:hover {
  background-color: var(--ambar-dourado);
  color: white;
}

/* ─── BOTÃO NAV ─── */
.btn-nav {
  background-color: var(--ambar-dourado);
  padding: 10px 20px !important;
  border-radius: 4px;
  opacity: 1 !important;
}

/* ─── BOTÃO FULL WIDTH ─── */
.full-width {
  width: 100%;
  justify-content: center;
}
```

### 3.2 Cards

```css
/* ─── CARD BENTO BASE ─── */
.bento-card {
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: var(--transition-smooth);
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.bento-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(31, 31, 31, 0.1);
}
.bento-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--grafite-primario);
}
.bento-card p {
  font-size: 0.9rem;
  opacity: 0.7;
}
.bento-card .arrow {
  position: absolute;
  bottom: 30px;
  right: 30px;
  color: var(--ambar-dourado);
  font-size: 1.5rem;
  transition: var(--transition-smooth);
}
.bento-card:hover .arrow {
  transform: translateX(5px);
}

/* ─── MAIN CARD (BENTO) ─── */
.main-card {
  grid-column: span 6;
  grid-row: span 2;
  color: white;
  background-color: var(--grafite-primario);
}
.main-card h3 {
  color: white;
  font-size: 2.5rem;
}
.main-card p {
  opacity: 0.9;
  font-size: 1.1rem;
}

/* ─── MEDIUM CARD ─── */
.medium-card {
  grid-column: span 3;
  grid-row: span 1;
}

/* ─── SMALL CARD ─── */
.small-card {
  grid-column: span 3;
  grid-row: span 1;
  justify-content: center;
  padding: 20px;
}
.small-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0;
}

/* ─── CARD DE DEPOIMENTO ─── */
.testimonial-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 60px;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  transition: var(--transition-smooth);
  transform-origin: bottom center;
}

/* ─── CARD DE ENDEREÇO ─── */
.address-card {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}
.address-card h3 {
  font-size: 1.25rem;
  margin-bottom: 15px;
  color: var(--grafite-primario);
}
.address-card p {
  margin-bottom: 20px;
  opacity: 0.8;
}
```

### 3.3 Elementos Flutuantes Fixos

```css
/* ─── FLOATING WHATSAPP ─── */
.fab-whatsapp {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 64px;
  height: 64px;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
  transition: var(--transition-smooth);
}
.fab-whatsapp:hover {
  transform: scale(1.1);
}

/* ─── ANEL DE PULSO DO FAB ─── */
.pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid var(--ambar-dourado);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
```

### 3.4 Pills / Tags / Badges / Eyebrows

> **Não encontrados no projeto.** Não há pills, tags, badges ou eyebrows utilizados. O site utiliza labels tipográficas puras (ex: `.logo-sub` como eyebrow da marca).

### 3.5 Sistema .reveal on Scroll

```css
/* ─── REVEAL GLOBAL ─── */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
```

> **Nota:** Não há variações de stagger delay. Todos os elementos `.reveal` animam com a mesma duração e easing. O trigger é o `IntersectionObserver` no JS com `threshold: 0.15`.

### 3.6 Tickers e Scroll Infinito CSS

```css
/* ─── TICKER BAR ─── */
.ticker-bar {
  background-color: var(--ambar-dourado);
  color: white;
  padding: 20px 0;
  overflow: hidden;
  white-space: nowrap;
}
.ticker-track {
  display: inline-block;
  animation: ticker 35s linear infinite;
}
.ticker-track span {
  font-family: var(--f-display);
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 50px;
}

@keyframes ticker {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
```

### 3.7 Scrollbar Customizada

> **Não encontrada.** O site usa a scrollbar nativa do navegador.

### 3.8 Overlay de Play em Vídeos

> **Não encontrado.** Não há vídeos no site.

---

## 4. SISTEMA GLOBAL DE ANIMAÇÕES

TABELA consolidada de TODOS os `@keyframes` declarados no CSS:

| Nome | 0% | 50% | 100% | Duração padrão | Easing | Onde é usado |
|---|---|---|---|---|---|---|
| `ticker` | `transform: translateX(0)` | — | `transform: translateX(-50%)` | 35s | `linear` | `.ticker-track` — loop infinito de texto |
| `pulse` | `transform: scale(1)`, `opacity: 1` | — | `transform: scale(1.5)`, `opacity: 0` | 2s | linear (implícito) | `.pulse-ring` — anel expansivo no FAB WhatsApp |

> **Animações JS-driven (não @keyframes):**
> - **Reveal Scroll:** `opacity` 0→1 + `translateY(30px)`→`0`, 0.8s, trigger por `IntersectionObserver(threshold: 0.15)`
> - **Hero Mosaic Parallax:** `translate(x, y)` contínuo baseado em `mousemove`, range ±20px
> - **Testimonials Stack Parallax:** `translateY`, `scale`, `rotate` calculados em tempo real no evento `scroll` (apenas desktop >768px)
> - **FAQ Accordion:** `max-height` 0→200px + `opacity` 0→1, 0.4s
> - **Mobile Menu:** display none→flex, spans transformam em X

---

## 5. COMPORTAMENTOS JAVASCRIPT

| Função / Comportamento | Trigger | Ação executada | Classes add/remove | Elementos afetados |
|---|---|---|---|---|
| Navbar Scroll Effect | `scroll` event em `window` | Se `scrollY > 50`, adiciona classe; senão remove | `scrolled` adicionada/removida | `#navbar` |
| Mobile Menu Toggle | `click` em `#mobile-toggle` | Alterna estado do menu; bloqueia/desbloqueia scroll do body | `active` toggle em `#mobile-toggle` e `#nav-links` | Menu hamburger, lista de links, `document.body` |
| Fechar Menu ao Clicar Link | `click` em qualquer `a` dentro de `#nav-links` | Fecha menu mobile | `active` removida de `#mobile-toggle` e `#nav-links` | Menu, body overflow resetado |
| Reveal on Scroll | `IntersectionObserver` com `{ threshold: 0.15 }` | Adiciona `.active` quando elemento entra na viewport | `active` adicionada | Todos os elementos `.reveal` |
| FAQ Accordion | `click` em `.faq-question` | Fecha todos os itens; abre o clicado (toggle exclusivo) | `active` toggle em `.faq-item` | `.faq-item` clicado; todos os `.faq-item` são resetados primeiro |
| Testimonials Parallax Desktop | `scroll` event em `window` (apenas se `innerWidth > 768`) | Calcula `scrollPercent` do stack; aplica `translateY`, `scale`, `rotate` por índice | — (manipulação direta de style) | `.testimonial-card` (3 cards) |
| Testimonials Initial Position | `DOMContentLoaded` (apenas desktop) | Define `z-index`, `transform` e `opacity` iniciais por índice | — | `.testimonial-card` |
| Form Submission | `submit` em `#contact-form` | Previne padrão; simula envio com `setTimeout` 1500ms; exibe alert; reseta form | — | `#contact-form`, botão submit |
| Hero Mosaic Parallax | `mousemove` em `window` | Calcula posição relativa do mouse; aplica `translate(x, y)` no mosaico | — | `.hero-mosaic` |

**Snippet crítico do Testimonials Parallax:**
```javascript
cards.forEach((card, index) => {
    card.style.zIndex = cards.length - index;
    card.style.transform = `translateY(${index * 20}px) scale(${1 - index * 0.05})`;
    card.style.opacity = 1 - index * 0.2;
});
// No scroll:
const offset = Math.max(0, scrollPercent - 0.2) * 500 * (index + 1);
const scale = 1 - index * 0.05 + (scrollPercent * 0.05);
const rotate = index * 2 - (scrollPercent * 5);
card.style.transform = `translateY(${index * 20 - offset}px) scale(${scale}) rotate(${rotate}deg)`;
```

---

## 6. RESPONSIVIDADE

### Breakpoints declarados:
- **1024px** (`max-width: 1024px`) — Tablet
- **768px** (`max-width: 768px`) — Mobile
- **374px** (`max-width: 374px`) — Mobile pequeno

| Breakpoint | Elemento | Propriedade | Valor padrão | Valor no breakpoint |
|---|---|---|---|---|
| 1024px | `.hero-container`, `.enchantment-container`, `.about-container`, `.location-container`, `.cta-container` | `grid-template-columns` | `1.2fr 0.8fr` / `1fr 1fr` / `0.8fr 1.2fr` | `1fr` |
| 1024px | `.hero` | `height` | `100vh` | `auto` |
| 1024px | `.hero` | `padding` | `0` (natural) | `120px 0 60px` |
| 1024px | `.hero-visual` | `height` | `500px` | `350px` |
| 1024px | `.hero-visual` | `order` | — | `-1` |
| 1024px | `.hero-foto-fabio` | `left` | `-100px` | `20px` |
| 1024px | `.hero-foto-fabio` | `top/bottom/transform` | `50%`, `translateY(-50%)` | `auto`, `bottom: -40px`, `transform: none` |
| 1024px | `.hero-foto-fabio` | `width/height` | `200px` | `140px` |
| 1024px | `.bento-grid` | `grid-auto-rows` | `200px` | `180px` |
| 1024px | `.main-card` | `grid-column` | `span 6` | `span 12` |
| 1024px | `.medium-card`, `.small-card` | `grid-column` | `span 3` | `span 6` |
| 1024px | `.footer-grid` | `grid-template-columns` | `1.5fr 1fr 1.5fr` | `1fr 1fr` |
| 768px | `.nav-links` | `display` | `flex` | `none` (mobile: `fixed`, `100vh`, `backdrop-filter: blur(12px)`) |
| 768px | `.nav-links.active` | `display` | `none` | `flex` |
| 768px | `.mobile-menu-toggle` | `display` | `none` | `flex` |
| 768px | `.hero` | fundo | `var(--grafite-primario)` | `background-image: linear-gradient(...) + url(...)` |
| 768px | `.hero-overlay` | `display` | `block` | `none` |
| 768px | `.hero-visual`, `.hero-foto-fabio` | `display` | `block` | `none` |
| 768px | `.hero-headline-wrapper` | `padding-left` | `30px` | `0` |
| 768px | `.accent-line` | `display` | `block` | `none` |
| 768px | `.hero-headline` | `font-size` | `clamp(2.2rem, 5.5vw, 4rem)` | `clamp(2.2rem, 9vw, 3.2rem)` |
| 768px | `.hero-subtitle` | `font-size` | `1.2rem` | `1rem` |
| 768px | `.hero-ctas` | `flex-direction` | `row` | `column` |
| 768px | `.hero-ctas .btn` | `width` | `auto` | `100%` |
| 768px | `.bento-grid` | `grid-template-columns` | `repeat(12, 1fr)` | `1fr` |
| 768px | `.bento-grid` | `grid-auto-rows` | `200px` | `auto` |
| 768px | `.main-card`, `.medium-card`, `.small-card` | `grid-column` | variável | `1` |
| 768px | `.main-card` | `min-height` | `auto` | `280px` |
| 768px | `.medium-card` | `min-height` | `auto` | `160px` |
| 768px | `.small-card` | `min-height` | `auto` | `100px` |
| 768px | `.testimonials-stack` | `height` | `450px` | `auto` |
| 768px | `.testimonial-card` | `position` | `absolute` | `relative` |
| 768px | `.testimonial-card` | `padding` | `60px` | `30px 24px` |
| 768px | `.quote-icon` | `font-size` | `8rem` | `4rem` |
| 768px | `.footer-grid` | `grid-template-columns` | `1.5fr 1fr 1.5fr` | `1fr` |
| 768px | `.footer-bottom-container` | `flex-direction` | `row` | `column` |
| 768px | `.fab-whatsapp` | `bottom/right` | `30px` | `20px` |
| 768px | `.fab-whatsapp` | `width/height` | `64px` | `56px` |
| 374px | `.container` | `padding` | `0 24px` | `0 16px` |
| 374px | `.hero-headline` | `font-size` | `clamp(2.2rem, 9vw, 3.2rem)` | `1.8rem` |
| 374px | `.hero-subtitle` | `font-size` | `1rem` | `0.9rem` |
| 374px | `.section-title` | `font-size` | `clamp(1.8rem, 6vw, 2.5rem)` | `1.6rem` |
| 374px | `.cta-form-wrapper` | `padding` | `24px` | `18px` |

---

## 7. PERFORMANCE & SEO TÉCNICO

| Técnica | Elemento/Recurso | Detalhe |
|---|---|---|
| `rel="preconnect"` | `fonts.googleapis.com` e `fonts.gstatic.com` | Preconnect cruzorigin para fonts |
| `fetchpriority="high"` | 6 imagens do hero (3 mosaico + 1 foto Fabio + 2 não usadas no HTML lido) | Prioridade de carregamento máxima |
| `loading="lazy"` | Todas as imagens abaixo do fold (serviços, about, depoimentos, enchantment) | Atributo nativo de lazy loading |
| Schema.org JSON-LD | `@type: LegalService` | Campos completos: name, alternateName, description, image, url, telephone, address, geo, openingHoursSpecification, areaServed, founder, hasOfferCatalog, sameAs |
| Schema.org JSON-LD | `@type: WebSite` | url, name, publisher, inLanguage |
| Schema.org JSON-LD | `@type: WebPage` | name, description, isPartOf, about, inLanguage, datePublished: "2026-04-08", dateModified: "2026-04-08" |
| Schema.org JSON-LD | `@type: FAQPage` | 8 perguntas e respostas completas |
| Meta Geo | `<head>` | `geo.region: BR-RJ`, `geo.placename: Rio de Janeiro`, `geo.position: -22.9124039;-43.5615712`, `ICBM: -22.9124039, -43.5615712` |
| Open Graph | og:type, og:locale, og:url, og:site_name, og:title, og:description, og:image (1200×630), og:image:width/height/alt | Completo |
| Twitter Cards | twitter:card, twitter:title, twitter:description, twitter:image, twitter:image:alt | Completo (summary_large_image) |
| Canonical | `<link rel="canonical">` | `http://www.advogadofabiooliveira.ag5agencia.site/` |
| Meta Robots | `<meta name="robots">` | `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1` |
| Googlebot | `<meta name="googlebot">` | `index, follow` |
| Sitemap | `sitemap.xml` | Presente na raiz |
| Robots.txt | `robots.txt` | Presente na raiz |
| `referrerpolicy="no-referrer"` | Imagens de avatar de depoimentos (`i.pravatar.cc`) | Proteção de referrer para serviços de placeholder |
| `rel="noopener noreferrer"` | Links externos (WhatsApp, AG5) | Segurança e performance |

---

## 8. ANTI-PADRÕES REGISTRADOS

❌ **HERO COM VÍDEO DE FUNDO**
→ Genérico seria: background video pesado com overlay escuro e play automático.
→ Aqui foi feito: fundo sólido grafite com mosaico de imagens estáticas e parallax de mouse. O hero mobile substitui tudo por uma única imagem de background com gradiente linear sobreposto.
→ Prova técnica: `.hero { background-color: var(--grafite-primario); }` e no mobile `@media (max-width: 768px) { .hero { background-image: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 70%, #000 100%), url('/assets/advogadofabiooliveira_...'); } }`

❌ **SLIDER/CARROSSEL DE DEPOIMENTOS**
→ Genérico seria: carrossel touch/swipe com setas e dots de navegação.
→ Aqui foi feito: stack de cartas com parallax scroll-driven. Os 3 depoimentos são empilhados em absolute e se separam conforme o usuário scrolla, sem qualquer controle de navegação manual.
→ Prova técnica: `.testimonials-stack { position: relative; height: 450px; }` + `.testimonial-card { position: absolute; top: 0; left: 0; width: 100%; transform-origin: bottom center; }` + JS que calcula `scrollPercent` e aplica `translateY`, `scale` e `rotate` dinamicamente.

❌ **GRID DE SERVIÇOS EM 3 COLUNAS IGUAIS**
→ Genérico seria: 3 ou 4 cards idênticos em grid simétrico com ícones genéricos.
→ Aqui foi feito: bento grid de 12 colunas com spans assimétricos (6×2, 3×1, 3×1), card principal com imagem de fundo semi-transparente (opacity 0.3) e seta de navegação. Sem ícones — só tipografia e seta.
→ Prova técnica: `.bento-grid { grid-template-columns: repeat(12, 1fr); grid-auto-rows: 200px; gap: 20px; }` + `.main-card { grid-column: span 6; grid-row: span 2; }` + `.medium-card { grid-column: span 3; }` + `.small-card { grid-column: span 3; }`

❌ **MENU MOBILE DESLIZANTE LATERAL**
→ Genérico seria: drawer deslizando da direita ou esquerda com sombra de overlay.
→ Aqui foi feito: menu fullscreen com backdrop blur (`backdrop-filter: blur(12px)`), fundo `rgba(31, 31, 31, 0.98)`, links centralizados verticalmente e hamburger que se transforma em X com rotação de 45deg dos spans.
→ Prova técnica: `.nav-links { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background-color: rgba(31, 31, 31, 0.98); backdrop-filter: blur(12px); flex-direction: column; justify-content: center; align-items: center; }` + `.mobile-menu-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }`

❌ **FAQ COM ÍCONE DE SETA ROTACIONANDO 180°**
→ Genérico seria: sinal de "+" ou seta para baixo que gira 180 graus.
→ Aqui foi feito: sinal de "+" que gira 45 graus, transformando-se visualmente em "×" (sinal de fechar), reforçando a ação de fechar o accordion.
→ Prova técnica: `.faq-item.active .faq-icon { transform: rotate(45deg); }` + HTML usa `<span class="faq-icon">+</span>`

❌ **FORMULÁRIO EMBUTIDO EM SEÇÃO CLARA**
→ Genérico seria: formulário em fundo branco ou creme, misturando-se visualmente com o restante da página.
→ Aqui foi feito: a seção CTA usa fundo grafite escuro (`#1F1F1F`) e o formulário está contido em um wrapper de creme quente (`#F4EFE6`), criando ilha de contraste térmico que isola a ação de conversão.
→ Prova técnica: `.cta-form { background-color: var(--grafite-primario); color: white; }` + `.cta-form-wrapper { background-color: var(--creme-quente); padding: 50px; border-radius: 8px; color: var(--grafite-texto); }`

❌ **WHATSAPP FLUTUANTE PADRÃO VERDE**
→ Genérico seria: círculo verde WhatsApp com sombra verde, genérico de todos os sites.
→ Aqui foi feito: círculo verde mantido (`#25D366`) mas com anel pulsante na cor âmbar da marca (`#C8861A`), integrando o FAB à identidade visual do site.
→ Prova técnica: `.pulse-ring { border: 2px solid var(--ambar-dourado); animation: pulse 2s infinite; }` + `@keyframes pulse { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(1.5); opacity: 0; } }`

❌ **TIPOGRAFIA ÚNICA PARA TUDO**
→ Genérico seria: uma única fonte sans-serif para títulos e corpo (ex: Roboto ou Open Sans).
→ Aqui foi feito: sistema dual-font com Playfair Display (serif) para títulos, logo, ticker e elementos decorativas; DM Sans (geometric sans) para corpo, navegação, botões e formulários. A combinação cria hierarquia tipográfica de "editorial jurídico".
→ Prova técnica: `--f-display: 'Playfair Display', serif;` + `--f-body: 'DM Sans', sans-serif;` + `h1, h2, h3, h4 { font-family: var(--f-display); font-weight: 700; }` + `body { font-family: var(--f-body); }`

❌ **TICKER MARQUEE ANTIGO**
→ Genérico seria: tag `<marquee>` obsoleta ou animação JS pesada.
→ Aqui foi feito: CSS animation `@keyframes ticker` com duplicação de conteúdo textual para loop perfeito, respeitando `prefers-reduced-motion`.
→ Prova técnica: `.ticker-track { animation: ticker 35s linear infinite; }` + `@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }` + dois spans idênticos dentro de `.ticker-track` + `@media (prefers-reduced-motion: reduce) { .ticker-track { animation: none; } }`

---

## NOTAS FINAIS TÉCNICAS

1. **Sem dark mode:** O site não implementa alternância de tema. A alternância claro/escuro é feita por seção via variação de `background-color` no CSS.
2. **Sem frameworks CSS:** Todo o layout é CSS Grid e Flexbox puro. Zero dependências de UI (Bootstrap, Tailwind, Materialize, etc).
3. **Zero biblioteca de ícones:** Todos os ícones são SVG inline desenhados manualmente (telefone do hero, check dos diferenciais, WhatsApp do FAB).
4. **Imagens de placeholder:** Os depoimentos usam `i.pravatar.cc` como placeholder de avatar. Em produção real, devem ser substituídos por fotos reais de clientes.
5. **Formulário simulado:** O JS do formulário apenas simula envio com `setTimeout` de 1500ms e exibe `alert()`. Não há integração com backend, email API ou WhatsApp Web API para o formulário — apenas o link direto do FAB leva ao WhatsApp.
6. **Google Maps:** O embed utiliza uma URL com coordenadas placeholder (`0x9be3f926065555:0x6555555555555555`) que pode precisar de atualização para o endereço real.
7. **Schema.org extenso:** O JSON-LD contém 4 entidades interligadas (`@graph`) com 10 ofertas de serviço catalogadas e 8 FAQs estruturadas — configuração ideal para rich snippets no Google.
