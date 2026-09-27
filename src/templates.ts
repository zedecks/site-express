import { DemoTemplate } from './types';

export const demoTemplates: Record<'food' | 'business' | 'store', DemoTemplate> = {
  // DEMO 01: FOOD
  food: {
    title: 'Demo 01 — SABORES EXPRESS (Restaurantes & Gastronomia)',
    ctaUrl: 'https://wa.me/258877703308?text=Ol%C3%A1!%20Gostei%20do%20Demo%20Food%20e%20quero%20um%20site%20para%20o%20meu%20restaurante.',
    html: `
      <div class="bg-stone-900 text-stone-100 min-h-full font-sans antialiased pb-16">
        <!-- Top Promo Bar -->
        <div class="bg-amber-500 text-stone-950 px-4 py-2 text-center text-xs font-bold tracking-wide">
          🛵 Entregas Rápidas em Maputo & Matola • Taxa Grátis em pedidos acima de 1 000,00 MZN
        </div>

        <!-- Navigation -->
        <div class="bg-stone-950/90 backdrop-blur border-b border-stone-800 py-4 px-6 sticky top-0 z-30 flex items-center justify-between shadow-md">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-display font-black text-xl shadow-lg shadow-amber-500/20">
              S
            </div>
            <div>
              <span class="font-display font-black text-lg text-white tracking-tight">SABORES EXPRESS</span>
              <span class="block text-[10px] text-amber-400 font-bold tracking-wider uppercase">Grelhados & Burgers Artesanais</span>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <span class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Aberto • 11h às 23h
            </span>
            <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido%20no%20Sabores%20Express." target="_blank" class="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-4 py-2 rounded-xl text-xs shadow-md transition-transform transform hover:scale-105">
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>

        <!-- Hero Section -->
        <div class="relative py-16 px-6 text-center max-w-4xl mx-auto">
          <span class="inline-block px-3.5 py-1 rounded-full bg-stone-800 border border-stone-700 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            🔥 Especialidades da Brasa & Forno
          </span>
          <h1 class="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            Sabor autêntico, <br><span class="text-amber-400">servido quente na sua mesa.</span>
          </h1>
          <p class="text-stone-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Carnes no ponto certo, hambúrgueres artesanais e os pratos típicos que Maputo adora. Peça online e receba em minutos.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-3">
            <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20ver%20o%20menu%20completo%20do%20Sabores%20Express." target="_blank" class="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-8 py-3.5 rounded-xl text-sm shadow-xl shadow-amber-500/20 transition-all">
              FAZER PEDIDO NO WHATSAPP
            </a>
          </div>
        </div>

        <!-- Menu Section -->
        <div class="max-w-5xl mx-auto px-4 sm:px-6">
          <div class="flex items-center justify-between border-b border-stone-800 pb-4 mb-8">
            <div>
              <h2 class="font-display font-black text-2xl text-white">Mais Pedidos da Semana</h2>
              <p class="text-xs text-stone-400">Preços reais com preparo imediato</p>
            </div>
            <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">Cardápio do Dia</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <!-- Item 1 -->
            <div class="bg-stone-800/80 border border-stone-700/80 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-200">
              <div>
                <div class="w-full h-36 bg-gradient-to-br from-amber-500/20 to-stone-800 rounded-xl flex items-center justify-center text-5xl mb-4 border border-stone-700/50">
                  🍔
                </div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">Artesanal</span>
                  <span class="text-xs text-amber-400 font-bold">★ 4.9</span>
                </div>
                <h3 class="font-bold text-white text-lg mt-1">Burger Monster Cheddar</h3>
                <p class="text-xs text-stone-400 mt-2 leading-relaxed">200g bife na brasa, dobro queijo cheddar, bacon crocante, cebola caramelizada e molho da casa.</p>
              </div>
              <div class="mt-6 pt-4 border-t border-stone-700/60 flex items-center justify-between">
                <span class="font-display font-black text-amber-400 text-xl">450,00 MZN</span>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20pedir%20o%20Burger%20Monster%20Cheddar%20(450,00%20MZN)." target="_blank" class="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs px-3.5 py-2 rounded-lg">
                  Pedir ➔
                </a>
              </div>
            </div>

            <!-- Item 2 -->
            <div class="bg-stone-800/80 border border-stone-700/80 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-200">
              <div>
                <div class="w-full h-36 bg-gradient-to-br from-rose-500/20 to-stone-800 rounded-xl flex items-center justify-center text-5xl mb-4 border border-stone-700/50">
                  🍕
                </div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">Forno a Lenha</span>
                  <span class="text-xs text-amber-400 font-bold">★ 4.8</span>
                </div>
                <h3 class="font-bold text-white text-lg mt-1">Pizza Rústica Suprema</h3>
                <p class="text-xs text-stone-400 mt-2 leading-relaxed">Massa fina de 48h de fermentação, molho pelati italiano, mozzarella fresca e linguiça picante.</p>
              </div>
              <div class="mt-6 pt-4 border-t border-stone-700/60 flex items-center justify-between">
                <span class="font-display font-black text-amber-400 text-xl">650,00 MZN</span>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20pedir%20a%20Pizza%20R%C3%BAstica%20(650,00%20MZN)." target="_blank" class="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs px-3.5 py-2 rounded-lg">
                  Pedir ➔
                </a>
              </div>
            </div>

            <!-- Item 3 -->
            <div class="bg-stone-800/80 border border-stone-700/80 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-200">
              <div>
                <div class="w-full h-36 bg-gradient-to-br from-yellow-500/20 to-stone-800 rounded-xl flex items-center justify-center text-5xl mb-4 border border-stone-700/50">
                  🍗
                </div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">Prato Típico</span>
                  <span class="text-xs text-amber-400 font-bold">★ 5.0</span>
                </div>
                <h3 class="font-bold text-white text-lg mt-1">Frango Zambeziana</h3>
                <p class="text-xs text-stone-400 mt-2 leading-relaxed">Frango marinado ao leite de coco e especiarias tradicionais na brasa com batata frita e salada.</p>
              </div>
              <div class="mt-6 pt-4 border-t border-stone-700/60 flex items-center justify-between">
                <span class="font-display font-black text-amber-400 text-xl">550,00 MZN</span>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20pedir%20o%20Frango%20Zambeziana%20(550,00%20MZN)." target="_blank" class="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs px-3.5 py-2 rounded-lg">
                  Pedir ➔
                </a>
              </div>
            </div>
          </div>

          <!-- Restaurant Footer Box -->
          <div class="mt-12 bg-stone-950 rounded-2xl p-6 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="text-center sm:text-left">
              <span class="text-xs font-bold text-amber-400 uppercase tracking-wide">📍 Restaurante & Takeaway Sabores Express</span>
              <p class="text-xs text-stone-400 mt-1">Av. Julius Nyerere, Polana, Maputo • Aberto de Terça a Domingo</p>
            </div>
            <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20um%20site%20como%20o%20demo%20Food%20para%20o%20meu%20restaurante." target="_blank" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-5 rounded-xl shadow-md transition-colors flex-shrink-0">
              Quero um site como este para o meu restaurante
            </a>
          </div>
        </div>
      </div>
    `
  },

  // DEMO 02: BUSINESS
  business: {
    title: 'Demo 02 — APEX SOLUTIONS (Empresas & Prestadores de Serviços)',
    ctaUrl: 'https://wa.me/258877703308?text=Ol%C3%A1!%20Gostei%20do%20Demo%20Business%20e%20quero%20um%20site%20para%20a%20minha%20empresa.',
    html: `
      <div class="bg-slate-900 text-slate-100 min-h-full font-sans antialiased pb-16">
        <!-- Navigation -->
        <div class="bg-slate-950/90 backdrop-blur border-b border-slate-800 py-4 px-6 sticky top-0 z-30 flex items-center justify-between shadow-md">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-display font-black text-xl shadow-lg shadow-blue-600/30">
              A
            </div>
            <div>
              <span class="font-display font-black text-lg text-white tracking-tight">APEX SOLUTIONS</span>
              <span class="block text-[10px] text-blue-400 font-semibold tracking-wider uppercase">Consultoria Estratégica & TI</span>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20solicitar%20uma%20proposta%20com%20a%20Apex%20Solutions." target="_blank" class="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-md transition-transform transform hover:scale-105">
              Solicitar Proposta
            </a>
          </div>
        </div>

        <!-- Hero Section -->
        <div class="relative py-16 px-6 text-center max-w-4xl mx-auto">
          <span class="inline-block px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            💼 Soluções Empresariais em Moçambique
          </span>
          <h1 class="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            Estrutura e tecnologia para <br><span class="text-blue-400">acelerar o seu faturamento.</span>
          </h1>
          <p class="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Ajudamos pequenas e médias empresas a organizar operações, implantar sistemas de gestão e conquistar clientes com autoridade digital.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-3">
            <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito." target="_blank" class="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-3.5 rounded-xl text-sm shadow-xl shadow-blue-600/30 transition-all">
              AGENDAR DIAGNÓSTICO NO WHATSAPP
            </a>
          </div>
        </div>

        <!-- Pillars -->
        <div class="max-w-5xl mx-auto px-4 sm:px-6">
          <div class="border-b border-slate-800 pb-4 mb-8">
            <h2 class="font-display font-black text-2xl text-white">Nossos Serviços Especializados</h2>
            <p class="text-xs text-slate-400">Atendimento sob medida para o seu setor</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <!-- Service 1 -->
            <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all">
              <div>
                <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xl mb-4 border border-blue-500/20">
                  📊
                </div>
                <h3 class="font-bold text-white text-lg">Reestruturação Financeira</h3>
                <p class="text-xs text-slate-400 mt-2 leading-relaxed">Planejamento tributário, organização do fluxo de caixa e relatórios para tomada de decisão.</p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <span class="text-xs text-blue-400 font-semibold">Sob Consulta</span>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20Reestrutura%C3%A7%C3%A3o%20Financeira." target="_blank" class="text-xs text-white font-bold bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-lg">Falar ➔</a>
              </div>
            </div>

            <!-- Service 2 -->
            <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all">
              <div>
                <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xl mb-4 border border-blue-500/20">
                  💻
                </div>
                <h3 class="font-bold text-white text-lg">Sistemas & Automação</h3>
                <p class="text-xs text-slate-400 mt-2 leading-relaxed">Software de faturação, controle de stock, integração de atendimento e segurança de dados.</p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <span class="text-xs text-blue-400 font-semibold">Sob Consulta</span>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20Sistemas%20e%20Automa%C3%A7%C3%A3o." target="_blank" class="text-xs text-white font-bold bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-lg">Falar ➔</a>
              </div>
            </div>

            <!-- Service 3 -->
            <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all">
              <div>
                <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xl mb-4 border border-blue-500/20">
                  🎯
                </div>
                <h3 class="font-bold text-white text-lg">Presença Digital & Vendas</h3>
                <p class="text-xs text-slate-400 mt-2 leading-relaxed">Criação de landing pages, anúncios estratégicos e automação de captação de clientes B2B.</p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <span class="text-xs text-blue-400 font-semibold">Sob Consulta</span>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20Presen%C3%A7a%20Digital." target="_blank" class="text-xs text-white font-bold bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-lg">Falar ➔</a>
              </div>
            </div>
          </div>

          <!-- Business Footer Box -->
          <div class="mt-12 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="text-center sm:text-left">
              <span class="text-xs font-bold text-blue-400 uppercase tracking-wide">📍 Apex Solutions • Maputo Corporate</span>
              <p class="text-xs text-slate-400 mt-1">Av. 24 de Julho, Edifício Platinum, 4º Andar • Maputo</p>
            </div>
            <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20um%20site%20institucional%20como%20o%20demo%20Business." target="_blank" class="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3 px-5 rounded-xl shadow-md transition-colors flex-shrink-0">
              Quero um site corporativo para a minha empresa
            </a>
          </div>
        </div>
      </div>
    `
  },

  // DEMO 03: STORE
  store: {
    title: 'Demo 03 — MODA & TECH (Lojas, Moda & Catálogo de Produtos)',
    ctaUrl: 'https://wa.me/258877703308?text=Ol%C3%A1!%20Gostei%20do%20Demo%20Store%20e%20quero%20um%20cat%C3%A1logo%20online%20para%20minha%20loja.',
    html: `
      <div class="bg-zinc-900 text-zinc-100 min-h-full font-sans antialiased pb-16">
        <!-- Top Promo Bar -->
        <div class="bg-emerald-500 text-zinc-950 px-4 py-2 text-center text-xs font-bold tracking-wide">
          📦 Entregas em todo o país • Pagamentos por M-Pesa, e-Mola e Transferência Bancária
        </div>

        <!-- Navigation -->
        <div class="bg-zinc-950/90 backdrop-blur border-b border-zinc-800 py-4 px-6 sticky top-0 z-30 flex items-center justify-between shadow-md">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-500 text-zinc-950 flex items-center justify-center font-display font-black text-xl shadow-lg shadow-emerald-500/20">
              M
            </div>
            <div>
              <span class="font-display font-black text-lg text-white tracking-tight">MODA & TECH</span>
              <span class="block text-[10px] text-emerald-400 font-bold tracking-wider uppercase">Catálogo Digital Oficial</span>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20ver%20o%20cat%C3%A1logo%20de%20produtos%20no%20WhatsApp." target="_blank" class="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black px-4 py-2 rounded-xl text-xs shadow-md transition-transform transform hover:scale-105">
              Comprar no WhatsApp
            </a>
          </div>
        </div>

        <!-- Hero Section -->
        <div class="relative py-16 px-6 text-center max-w-4xl mx-auto">
          <span class="inline-block px-3.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
            ⚡ Lançamentos com Estoque Pronta Entrega
          </span>
          <h1 class="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            Os melhores artigos, <br><span class="text-emerald-400">direto no seu WhatsApp.</span>
          </h1>
          <p class="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Sem processos burocráticos. Escolha o item desejado, clique em comprar e combine a entrega diretamente conosco.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-3">
            <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido%20na%20loja%20Moda%20%26%20Tech." target="_blank" class="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black px-8 py-3.5 rounded-xl text-sm shadow-xl shadow-emerald-500/20 transition-all">
              VER OFERTAS DISPONÍVEIS
            </a>
          </div>
        </div>

        <!-- Product Grid -->
        <div class="max-w-5xl mx-auto px-4 sm:px-6">
          <div class="border-b border-zinc-800 pb-4 mb-8">
            <h2 class="font-display font-black text-2xl text-white">Destaques em Stock</h2>
            <p class="text-xs text-zinc-400">Garantia e suporte direto com a nossa loja</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Product 1 -->
            <div class="bg-zinc-800/80 border border-zinc-700/80 rounded-2xl p-4 flex flex-col justify-between hover:border-emerald-500/50 transition-all">
              <div>
                <div class="w-full h-36 bg-zinc-900 rounded-xl flex items-center justify-center text-4xl mb-3 border border-zinc-700/50">⌚</div>
                <span class="text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-2 py-0.5 rounded uppercase">Em Estoque</span>
                <h3 class="font-bold text-white text-sm mt-2">Smartwatch Ultra AMOLED</h3>
                <p class="text-xs text-zinc-400 mt-1 leading-relaxed">Resistente à água, chamadas Bluetooth e bateria para 7 dias.</p>
              </div>
              <div class="mt-4 pt-3 border-t border-zinc-700/60 flex items-center justify-between">
                <span class="font-display font-black text-emerald-400 text-base">2 500,00 MZN</span>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20comprar%20o%20Smartwatch%20Ultra%20(2%20500,00%20MZN)." target="_blank" class="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs px-3 py-1.5 rounded-lg">Comprar</a>
              </div>
            </div>

            <!-- Product 2 -->
            <div class="bg-zinc-800/80 border border-zinc-700/80 rounded-2xl p-4 flex flex-col justify-between hover:border-emerald-500/50 transition-all">
              <div>
                <div class="w-full h-36 bg-zinc-900 rounded-xl flex items-center justify-center text-4xl mb-3 border border-zinc-700/50">🎧</div>
                <span class="text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-2 py-0.5 rounded uppercase">Em Estoque</span>
                <h3 class="font-bold text-white text-sm mt-2">Headphones Bass Pro</h3>
                <p class="text-xs text-zinc-400 mt-1 leading-relaxed">Cancelamento de ruído ANC e áudio estéreo de alta fidelidade.</p>
              </div>
              <div class="mt-4 pt-3 border-t border-zinc-700/60 flex items-center justify-between">
                <span class="font-display font-black text-emerald-400 text-base">1 800,00 MZN</span>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20comprar%20o%20Headphone%20Bass%20Pro%20(1%20800,00%20MZN)." target="_blank" class="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs px-3 py-1.5 rounded-lg">Comprar</a>
              </div>
            </div>

            <!-- Product 3 -->
            <div class="bg-zinc-800/80 border border-zinc-700/80 rounded-2xl p-4 flex flex-col justify-between hover:border-emerald-500/50 transition-all">
              <div>
                <div class="w-full h-36 bg-zinc-900 rounded-xl flex items-center justify-center text-4xl mb-3 border border-zinc-700/50">👟</div>
                <span class="text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-2 py-0.5 rounded uppercase">Em Estoque</span>
                <h3 class="font-bold text-white text-sm mt-2">Sneakers Air Cushion</h3>
                <p class="text-xs text-zinc-400 mt-1 leading-relaxed">Solado amortecedor leve, ideal para treino e uso casual urbano.</p>
              </div>
              <div class="mt-4 pt-3 border-t border-zinc-700/60 flex items-center justify-between">
                <span class="font-display font-black text-emerald-400 text-base">3 000,00 MZN</span>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20comprar%20o%20Sneakers%20Air%20Cushion%20(3%20000,00%20MZN)." target="_blank" class="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs px-3 py-1.5 rounded-lg">Comprar</a>
              </div>
            </div>

            <!-- Product 4 -->
            <div class="bg-zinc-800/80 border border-zinc-700/80 rounded-2xl p-4 flex flex-col justify-between hover:border-emerald-500/50 transition-all">
              <div>
                <div class="w-full h-36 bg-zinc-900 rounded-xl flex items-center justify-center text-4xl mb-3 border border-zinc-700/50">🎒</div>
                <span class="text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-2 py-0.5 rounded uppercase">Em Estoque</span>
                <h3 class="font-bold text-white text-sm mt-2">Mochila Anti-Furto USB</h3>
                <p class="text-xs text-zinc-400 mt-1 leading-relaxed">Com porta USB, tecido impermeável e bolso oculto para laptop.</p>
              </div>
              <div class="mt-4 pt-3 border-t border-zinc-700/60 flex items-center justify-between">
                <span class="font-display font-black text-emerald-400 text-base">1 500,00 MZN</span>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20comprar%20a%20Mochila%20Anti-Furto%20(1%20500,00%20MZN)." target="_blank" class="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs px-3 py-1.5 rounded-lg">Comprar</a>
              </div>
            </div>
          </div>

          <!-- Store Footer Box -->
          <div class="mt-12 bg-zinc-950 rounded-2xl p-6 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="text-center sm:text-left">
              <span class="text-xs font-bold text-emerald-400 uppercase tracking-wide">📍 Moda & Tech • Maputo & Encomendas Nacionais</span>
              <p class="text-xs text-zinc-400 mt-1">Av. Eduardo Mondlane, Centro Comercial • Maputo</p>
            </div>
            <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20um%20site%20de%20loja%20como%20o%20demo%20Store." target="_blank" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-5 rounded-xl shadow-md transition-colors flex-shrink-0">
              Quero um catálogo online para a minha loja
            </a>
          </div>
        </div>
      </div>
    `
  }
};
