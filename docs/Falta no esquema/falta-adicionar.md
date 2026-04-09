# 📋 Falta Adicionar no Schema + SEO
**Empresa:** Advogado Fábio Oliveira | Direito Previdenciário | INSS | Aposentadorias | BPC/LOAS | Auxílios | RJ | SP
**Data de geração:** 08/04/2026

---

## 🔴 CRÍTICOS — Impactam SEO diretamente

- [x] `email` — Não encontrado no site/arquivo de raiz — omitido do JSON-LD
- [x] `geo.latitude` / `geo.longitude` — Derivadas do iframe do Google Maps no HTML: -22.9124039, -43.5615712
- [x] `openingHoursSpecification` — Incluído: Seg a Sex 09:00 às 16:00

## 🟡 IMPORTANTES

- [ ] `sameAs` Google Business Profile — Link do perfil da empresa no Google não encontrado no arquivo de raiz
- [ ] `sameAs` Facebook — Link completo do perfil não encontrado (apenas username: advogadofabiooliveira)
- [ ] `sameAs` LinkedIn — Link não encontrado (verificar se aplicável)
- [ ] `aggregateRating` — Nota e número de avaliações não visíveis no HTML

## 🔵 COMPLEMENTARES

- [x] `foundingDate` — 06/2005 (presente no arquivo de raiz, porém omitido do JSON-LD pois não há formato padrão claro; registrar como pendência para possível adição futura)
- [x] `founder.name` — Fábio Oliveira — incluído no JSON-LD
- [ ] `founder.sameAs` — Instagram pessoal do responsável não encontrado separado do perfil da empresa
- [ ] `priceRange` — Faixa de preço não informada no site
- [ ] `paymentAccepted` — Formas de pagamento não listadas
- [ ] `logo` — URL absoluta do logo não encontrada (logo não fornecido)
- [ ] `image` — Imagens representativas sem URL absoluta (usar fotos reais do escritório quando disponíveis)
- [x] `datePublished` / `dateModified` — Definidas como 2026-04-08 (data de criação da LP)
- [ ] `legalName` — Razão social não exibida no site
- [ ] `address` segundo escritório (Ribeirão Preto, SP) — Endereço específico não informado no arquivo de raiz

## 🟢 FAQ

- [x] Seção FAQ encontrada na LP com 8 perguntas — Schema FAQPage incluído no JSON-LD

---

## ✅ Resolvidos Automaticamente

- [x] `geo.latitude` / `geo.longitude` — Derivadas do endereço: R. Amaral Costa, 418 - Loja B, Campo Grande, Rio de Janeiro - RJ, 23050-260
- [x] `name` — Oficial: Advogado Fábio Oliveira
- [x] `alternateName` — Otimizado com palavras-chave: Advogado Fábio Oliveira | Direito Previdenciário | INSS | Aposentadorias | BPC/LOAS | Auxílios | RJ | SP
- [x] `areaServed` — Bairro base (Campo Grande) + 5 adjacentes gerados: Senador Vasconcelos, Santíssimo, Cosmos, Inhoaíba, Paciência
- [x] `hasOfferCatalog` — 10 serviços previdenciários extraídos do arquivo de raiz e incluídos no JSON-LD
- [x] `founder` — Fábio Oliveira, Advogado Previdenciário, bio incluída
- [x] `openingHoursSpecification` — Seg a Sex 09:00-16:00

---

## 🔍 SEO — Aplicado

### Meta Tags
- [x] `<title>` otimizado com front-loading: "Advogado Previdenciário em Campo Grande RJ | Fábio Oliveira"
- [x] `<meta description>` 155 chars — descritivo e com CTA implícito
- [x] `<meta keywords>` — palavras-chave relevantes
- [x] `<meta robots>` — index, follow com permissão para snippets e image preview
- [x] `<meta googlebot>` — index, follow
- [x] `<link rel="canonical">` — URL canônica definida
- [x] `<meta name="author">` — Advogado Fábio Oliveira

### Geo Tags
- [x] `geo.region` — BR-RJ
- [x] `geo.placename` — Rio de Janeiro
- [x] `geo.position` — -22.9124039;-43.5615712
- [x] `ICBM` — -22.9124039, -43.5615712

### Open Graph
- [x] `og:type` — website
- [x] `og:locale` — pt_BR
- [x] `og:url` — URL canônica
- [x] `og:site_name` — Advogado Fábio Oliveira
- [x] `og:title` — mesmo do title SEO
- [x] `og:description` — descrição otimada
- [x] `og:image` — placeholder (gerar imagem OG real)
- [x] `og:image:width` / `og:image:height` — 1200x630
- [x] `og:image:alt` — descrição da imagem

### Twitter Cards
- [x] `twitter:card` — summary_large_image
- [x] `twitter:title` — mesmo do title SEO
- [x] `twitter:description` — descrição otimizada
- [x] `twitter:image` — mesma da OG
- [x] `twitter:image:alt` — descrição da imagem

### Performance / Core Web Vitals
- [x] Hero images com `fetchpriority="high"`
- [x] Imagens abaixo da dobra com `loading="lazy"`
- [x] Todas as imagens com `width` e `height` explícitos (CLS prevention)
- [x] `alt` text descritivo e com palavras-chave em todas as imagens
- [x] Font `display=swap` via Google Fonts URL parameter

### Acessibilidade
- [x] `aria-label` no botão WhatsApp flutuante
- [x] `aria-label` no menu mobile toggle
- [x] `role="button"` e `tabindex="0"` no menu mobile toggle
- [x] `rel="noopener noreferrer"` em links externos

### Arquivos SEO
- [x] `robots.txt` — configurado com permissão para bots de IA (GPTBot, CCBot, Google-Extended, anthropic-ai, Omgilibot)
- [x] `sitemap.xml` — gerado com URL canônica

### NAP (Name, Address, Phone)
- [x] NAP visível no rodapé em texto HTML (não apenas imagem)
- [x] NAP consistente com o Schema JSON-LD

---

## ⚠️ Tarefas Externas / Off-Page (não aplicáveis via código)

- [ ] **Google Business Profile** — Verificar e completar o perfil local, garantir NAP idêntico ao site
- [ ] **Google Search Console** — Submeter o `sitemap.xml` e solicitar indexação
- [ ] **Google Analytics / Tag Manager** — Instalar códigos de rastreamento se necessário
- [ ] **Backlink Building** — Adquirir backlinks de diretórios locais e parceiros do setor jurídico
- [ ] **Redes Sociais** — Linkar o site a partir do Instagram, Facebook, LinkedIn
- [ ] **PageSpeed Insights** — Rodar teste live após deploy para identificar delays server-side
- [ ] **HTTPS/SSL** — Garantir que o servidor force HTTPS (certificado SSL ativo)
- [ ] **Gerar imagem OG real** — Criar `og-image.jpg` (1200x630) para compartilhamento social
- [ ] **Substituir imagens Unsplash** — Usar fotos reais do escritório e do Dr. Fábio quando disponíveis

---

📌 **Após preencher cada item:** remover o `[ ]`, substituir o placeholder no Schema e revalidar em https://validator.schema.org/
📌 **NAP** deve ser idêntico ao Google Business Profile após edição
📌 **Schema atual:** NÃO ALTERAR — JSON-LD já implementado e validado
