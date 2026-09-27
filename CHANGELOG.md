# Changelog

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/), e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [1.1.0] - 2026-09-27

### ✨ Adicionado
- ⏱️ **Countdown de Lançamento (7 dias e 12 horas):** Barra de urgência responsiva no topo com contagem regressiva sincronizada via `localStorage`.
- 😢 **Pop-up de Oferta Expirada:** Modal com animação SVG triste de alta fidelidade e reexibição automática a cada 2 minutos quando a campanha encerra.
- 🏗️ **Arquitetura Modular TypeScript:** Separação estrita em módulos `types.ts`, `templates.ts`, `countdown.ts` e `main.ts` com tipagem estrita (ES2022).
- ⚡ **Empacotamento de Alta Performance:** Integração com `esbuild` para bundle minificado (`js/app.js`) e sourcemap.
- 📋 Configuração de `tsconfig.json` e scripts npm (`build`, `watch:css`, `watch:js`, `typecheck`).

### 🔄 Alterado
- 🧹 Limpeza completa do `index.html`, extraindo scripts inline e estilos para bundles dedicados (`css/styles.css` e `js/app.js`).

---

## [1.0.0] - 2026-09-27

### ✨ Adicionado
- 🚀 Landing page completa do **Site Express 48H** com foco em conversão e integração direta com WhatsApp.
- 🌐 Arquivo `CNAME` configurado para o domínio customizado `siteexpress.edmilsonmuacigarro.com`.
- 📖 Documentação abrangente no `README.md` incluindo stack, execução local e guia passo a passo de deploy no GitHub Pages.
- ⚙️ Compilação nativa de produção via **Tailwind CLI** (`css/styles.css` minificado), eliminando o script de CDN para ganho de performance e conformidade com as diretrizes do Tailwind.
- 📜 Licença pública restritiva **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)** no arquivo `LICENSE` (com atribuição obrigatória e proibição total de comercialização/derivações).
- 🏷️ Configuração de metadados do GitHub (`About`, `Homepage` e `Topics`).
- 🛡️ Arquivos `.gitignore` e `.geminiignore` para governança, segurança e otimização de contexto/FinOps.

### 🔄 Alterado
- 🏷️ Meta tag `og:url` atualizada para apontar para `https://siteexpress.edmilsonmuacigarro.com`.

### ⚡ Melhorado
- 🎯 Otimização de SEO e metadados Open Graph para compartilhamento em redes sociais.

### 🗑️ Removido
- 🔗 URLs temporárias e referências legadas de domínios anteriores.
