# 🚀 Site Express 48H — Landing Page Profissional

> **Landing page de alta conversão para o serviço Site Express 48H**, otimizada para captação de clientes via WhatsApp em Moçambique.

🌐 **Domínio de Produção:** [https://siteexpress.zedecks.com](https://siteexpress.zedecks.com)  
👤 **Organização / Mantenedor:** [Zedeck's IT (zedecks)](https://github.com/zedecks)  
🎯 **Campanha de Lançamento:** 7 dias e 12 horas (Oferta 4.000 MT)

---

## 📌 Visão Geral do Projeto

O **Site Express 48H** é uma solução desenvolvida para profissionais, pequenas e médias empresas que necessitam de presença digital rápida, de altíssimo padrão visual e orientada a conversão direta por WhatsApp por 4.000 MT.

### ✨ Principais Recursos
- **Design Moderno & Responsivo:** Layout fluido com tipografia Inter & Poppins via Tailwind CSS.
- **Micro-interações e Animações:** Efeitos de hover refinados, pulsing badges e gradientes harmônicos.
- **Foco em Conversão:** Botões de CTA integrados diretamente ao WhatsApp com mensagens pré-formatadas.
- **SEO & Performance:** Meta tags Open Graph completas, HTML5 semântico e carregamento instantâneo sem dependências pesadas de build.
- **Arquitetura Estática:** 100% compatível com deploy direto e gratuito via GitHub Pages.

---

## 🛠️ Stack Tecnológica & Arquitetura

| Camada | Tecnologia / Ferramenta | Função |
| :--- | :--- | :--- |
| **Markup & Semântica** | **HTML5** | Estrutura semântica e acessibilidade |
| **Estilização** | **Tailwind CSS v3 (CLI)** | Build nativo compilado e minificado em `css/styles.css` |
| **Lógica & Tipagem** | **TypeScript (ES2022)** | Código modularizado em `src/` e empacotado em `js/app.js` |
| **Bundler & Build** | **esbuild** | Empacotamento instantâneo com geração de sourcemaps |
| **Hospedagem & Deploy** | **GitHub Pages** | Servidor estático com domínio customizado (`CNAME`) |

---

## 📁 Árvore de Arquivos Limpa e Modular

```text
site-express/
├── .geminiignore          # Regras de FinOps e exclusões de IA
├── .gitignore             # Arquivos ignorados pelo Git
├── CNAME                  # Domínio customizado para GitHub Pages
├── LICENSE                # Licença restritiva CC BY-NC-ND 4.0
├── README.md              # Documentação completa do projeto
├── CHANGELOG.md           # Histórico de alterações (SemVer)
├── package.json           # Scripts de automação (build, watch, typecheck)
├── tsconfig.json          # Configuração do TypeScript estrito
├── tailwind.config.js     # Design tokens (cores brand, sombras, tipografia)
│
├── index.html             # Arquivo HTML principal limpo
│
├── src/                   # Código-fonte tipado e modular
│   ├── input.css          # Ponto de entrada CSS com diretivas Tailwind
│   ├── types.ts           # Interfaces e tipos TypeScript
│   ├── templates.ts       # Templates HTML dinâmicos dos Demos
│   ├── countdown.ts       # Gestor de contagem regressiva (7d 12h) e popup recorrente
│   └── main.ts            # Ponto de entrada da aplicação TypeScript
│
├── css/                   # Bundles compilados para produção
│   └── styles.css         # CSS minificado gerado pelo Tailwind CLI
│
└── js/                    # Bundles compilados para produção
    ├── app.js             # JavaScript empacotado e minificado
    └── app.js.map         # Sourcemap para debugging
```

---

## 💻 Como Executar & Compilar Localmente

### Opção 1: Visualização Imediata (Live Server / Python)
```bash
python -m http.server 7000
```
Acesse no navegador: `http://localhost:7000`

### Opção 2: Scripts de Desenvolvimento & Build
```bash
# Compilar tudo para produção (CSS + JS):
npm run build

# Validação estrita de tipos TypeScript:
npm run typecheck

# Modo Watch durante o desenvolvimento:
npm run watch:css
npm run watch:js
```

---

## 🌐 Como Publicar no GitHub Pages

Para publicar este projeto sob a organização **`zedecks`** no domínio **`siteexpress.zedecks.com`**:

### 1. Repositório no GitHub
O repositório está configurado na organização: `https://github.com/zedecks/site-express`.

### 2. Inicializar Git e Enviar os Arquivos
No terminal local, execute:
```bash
git remote set-url origin https://github.com/zedecks/site-express.git
git push -u origin main
```

### 3. Configurar o GitHub Pages
1. Acesse o repositório no GitHub: `https://github.com/zedecks/site-express/settings/pages`.
2. Em **Build and deployment > Source**, selecione **Deploy from a branch**.
3. Escolha a branch **`main`** e diretório **`/(root)`**, depois clique em **Save**.
4. Em **Custom domain**, confirme se `siteexpress.zedecks.com` foi reconhecido através do arquivo [CNAME](file:///d:/ZEDECKLAB/WaysPessoais/landpages/site-express/CNAME).
5. Ative a opção **Enforce HTTPS**.

### 4. Configuração de DNS no Cloudflare (zedecks.com)
No painel de DNS do domínio `zedecks.com`, adicione ou mantenha o registro:

| Tipo | Nome / Host | Destino / Valor | Status do Proxy |
| :--- | :--- | :--- | :--- |
| **CNAME** | `siteexpress` | `zedecks.github.io` | Somente DNS ⚪ (ou Com Proxy 🟧 com SSL Full) |

---

## 📁 Estrutura de Arquivos

```text
site-express/
├── .geminiignore       # Regras de FinOps e exclusões de IA
├── .gitignore          # Arquivos ignorados pelo Git
├── CNAME               # Apontamento de domínio customizado para GitHub Pages
├── index.html          # Landing Page completa (HTML + Tailwind + JS)
└── README.md           # Documentação completa do projeto
```

---

## 📄 Licença e Direitos de Uso

Este projeto está protegido sob os termos da licença **[Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](LICENSE)**.

### ⚠️ Termos e Restrições:
- **Atribuição Obrigatória (BY):** É estritamente obrigatório conceder os devidos créditos a **Edmilson Muacigarro ([iradoweck](https://github.com/iradoweck))** e referenciar este repositório.
- **Uso Não Comercial (NC):** É terminantemente **proibido o uso comercial**, incluindo a venda, revenda deste código, cobrança de clientes por este modelo ou utilização para fins de lucro sem autorização expressa.
- **Sem Derivações (ND):** É proibida a redistribuição pública de versões modificadas ou derivadas deste projeto.

Desenvolvido por **Edmilson Muacigarro** ([iradoweck](https://github.com/iradoweck)). Todos os direitos morais e patrimoniais reservados.
