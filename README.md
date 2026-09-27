# 🚀 Site Express 48H — Landing Page Profissional

> **Landing page de alta conversão para o serviço Site Express 48H**, otimizada para captação de clientes via WhatsApp em Moçambique.

🌐 **Domínio de Produção:** [https://siteexpress.edmilsonmuacigarro.com](https://siteexpress.edmilsonmuacigarro.com)  
👤 **Organização / Mantenedor:** [iradoweck](https://github.com/iradoweck)  
🎯 **Campanha de Lançamento:** Até 7 dias e 12 horas

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

## 🛠️ Stack Tecnológica

| Tecnologia | Uso / Função |
| :--- | :--- |
| **HTML5** | Estruturação semântica e acessibilidade |
| **Tailwind CSS (CDN)** | Sistema de design e utilitários modernos |
| **Vanilla JavaScript** | Lógica de interatividade e roteamento suave de âncoras |
| **Google Fonts** | Tipografia (Inter & Poppins) |
| **GitHub Pages** | Hospedagem estática com suporte a domínio customizado (`CNAME`) |

---

## 💻 Como Executar Localmente

Como a aplicação é estática, você não precisa de passos complexos de instalação.

### Opção 1: Live Server (VS Code / Antigravity)
- Abra o arquivo [index.html](file:///d:/ZEDECKLAB/WaysPessoais/landpages/site-express/index.html) no editor.
- Inicie a extensão **Live Server** (Porta padrão recomendada pela regra global de landpages: `7000` - `7006`).

### Opção 2: Servidor HTTP Simples (Python)
```bash
python -m http.server 7000
```
Acesse no navegador: `http://localhost:7000`

---

## 🌐 Como Publicar no GitHub Pages

Para publicar este projeto sob a conta/organização **`iradoweck`** no domínio **`siteexpress.edmilsonmuacigarro.com`**:

### 1. Criar o Repositório no GitHub
Crie um repositório chamado `site-express` (ou nome de sua preferência) na conta `iradoweck`.

### 2. Inicializar Git e Enviar os Arquivos
No terminal local, execute:
```bash
git init
git add .
git commit -m "feat: initial commit for Site Express 48h landing page"
git branch -M main
git remote add origin https://github.com/iradoweck/site-express.git
git push -u origin main
```

### 3. Configurar o GitHub Pages
1. Acesse o repositório no GitHub: `https://github.com/iradoweck/site-express/settings/pages`.
2. Em **Build and deployment > Source**, selecione **Deploy from a branch**.
3. Escolha a branch **`main`** e diretório **`/(root)`**, depois clique em **Save**.
4. Em **Custom domain**, confirme se `siteexpress.edmilsonmuacigarro.com` foi reconhecido através do arquivo [CNAME](file:///d:/ZEDECKLAB/WaysPessoais/landpages/site-express/CNAME).
5. Ative a opção **Enforce HTTPS** (após a validação do DNS).

### 4. Configuração de DNS no seu Provedor de Domínio
Adicione a seguinte entrada DNS no painel onde o domínio `edmilsonmuacigarro.com` está configurado:

| Tipo | Nome / Host | Destino / Valor |
| :--- | :--- | :--- |
| **CNAME** | `siteexpress` | `iradoweck.github.io` |

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

## 📄 Licença

Este projeto é software livre e está licenciado sob os termos da **[GNU General Public License v3.0 (GPL-3.0)](LICENSE)**.

Desenvolvido por **Edmilson Muacigarro** ([iradoweck](https://github.com/iradoweck)).
