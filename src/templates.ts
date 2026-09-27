import { DemoTemplate } from './types';

export const demoTemplates: Record<'food' | 'business' | 'store', DemoTemplate> = {
  // DEMO 01: FOOD
  food: {
    title: 'Demo 01 — FOOD (Restaurantes e Takeaways)',
    ctaUrl: 'https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20um%20site%20semelhante%20ao%20demo%20Food.',
    html: `
      <div class="bg-amber-50/40 text-slate-800 min-h-full font-sans">
        <!-- Demo Header -->
        <div class="bg-slate-900 text-white py-4 px-6 sticky top-0 z-30 flex items-center justify-between border-b border-slate-800 shadow-md">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🍔</span>
            <span class="font-display font-extrabold text-lg text-amber-400">Sabores Express</span>
          </div>
          <div class="text-xs font-semibold text-slate-300 hidden sm:block">Entrega rápida em Maputo e Matola</div>
          <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20um%20site%20semelhante%20ao%20demo%20Food." target="_blank" class="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs">
            Pedir no WhatsApp
          </a>
        </div>

        <!-- Demo Hero -->
        <div class="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-14 px-6 text-center">
          <span class="bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Demo Fictício • Gastronomia</span>
          <h1 class="font-display font-extrabold text-3xl sm:text-5xl mt-4 mb-3 text-white">Sabor que chega até você.</h1>
          <p class="text-slate-300 max-w-xl mx-auto text-sm sm:text-base mb-6">Descubra nosso menu, faça seu pedido e receba onde estiver com toda a comodidade.</p>
          <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20um%20site%20semelhante%20ao%20demo%20Food." target="_blank" class="inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm shadow-md">
            <span>FAZER PEDIDO PELO WHATSAPP</span>
          </a>
        </div>

        <!-- Demo Menu Section -->
        <div class="max-w-4xl mx-auto py-12 px-4 sm:px-6">
          <div class="text-center mb-8">
            <h2 class="font-display font-extrabold text-2xl text-slate-900">Destaques do Nosso Menu</h2>
            <p class="text-xs text-slate-500">Exemplo demonstrativo de pratos e preços</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <!-- Food Item 1 -->
            <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div class="w-full h-32 bg-amber-100 rounded-xl flex items-center justify-center text-4xl mb-3">🍔</div>
                <h3 class="font-bold text-slate-900 text-base">Hambúrguer Clássico</h3>
                <p class="text-xs text-slate-500 mt-1">Hambúrguer artesanal, queijo cheddar, alface crocante e molho especial.</p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span class="font-extrabold text-amber-600 text-lg">450 MT</span>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20pedir%20o%20Hamb%C3%BArguer%20Cl%C3%A1ssico%20do%20demo%20Food." target="_blank" class="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">Pedir</a>
              </div>
            </div>

            <!-- Food Item 2 -->
            <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div class="w-full h-32 bg-orange-100 rounded-xl flex items-center justify-center text-4xl mb-3">🍕</div>
                <h3 class="font-bold text-slate-900 text-base">Pizza Especial</h3>
                <p class="text-xs text-slate-500 mt-1">Molho artesanal, mozzarella, pepperoni crocante e azeitonas pretas.</p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span class="font-extrabold text-amber-600 text-lg">650 MT</span>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20pedir%20a%20Pizza%20Especial%20do%20demo%20Food." target="_blank" class="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">Pedir</a>
              </div>
            </div>

            <!-- Food Item 3 -->
            <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div class="w-full h-32 bg-yellow-100 rounded-xl flex items-center justify-center text-4xl mb-3">🍗</div>
                <h3 class="font-bold text-slate-900 text-base">Frango Grelhado</h3>
                <p class="text-xs text-slate-500 mt-1">Grelhado na brasa ao piripiri suave, acompanhado de batatas douradas.</p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span class="font-extrabold text-amber-600 text-lg">550 MT</span>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20pedir%20o%20Frango%20Grelhado%20do%20demo%20Food." target="_blank" class="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">Pedir</a>
              </div>
            </div>
          </div>

          <!-- About & Info in Demo -->
          <div class="mt-12 bg-white rounded-2xl p-6 border border-slate-200">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 class="font-display font-bold text-lg text-slate-900 mb-2">Sobre Nosso Restaurante</h3>
                <p class="text-xs text-slate-600 leading-relaxed mb-4">Ingredientes frescos selecionados todos os dias para garantir o melhor sabor na sua mesa ou no conforto da sua casa.</p>
                <div class="text-xs text-slate-500 space-y-1">
                  <div>📍 <strong>Localização:</strong> Av. Julius Nyerere, Polana, Maputo</div>
                  <div>🕒 <strong>Horário:</strong> Terça a Domingo, das 11h às 22h</div>
                </div>
              </div>
              <div class="bg-amber-100/60 rounded-xl p-4 text-center">
                <span class="font-bold text-amber-900 text-sm block mb-1">Quer um site de comida assim?</span>
                <p class="text-xs text-amber-800 mb-3">Entregamos com suas fotos reais e o seu cardápio em 48 horas.</p>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20um%20site%20semelhante%20ao%20demo%20Food." target="_blank" class="inline-block bg-brand-green text-white font-bold text-xs py-2 px-4 rounded-lg">
                  Falar com a Zedeck's IT
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    `
  },

  // DEMO 02: BUSINESS
  business: {
    title: 'Demo 02 — BUSINESS (Serviços e Profissionais)',
    ctaUrl: 'https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20um%20site%20semelhante%20ao%20demo%20Business.',
    html: `
      <div class="bg-slate-50 text-slate-800 min-h-full font-sans">
        <!-- Demo Header -->
        <div class="bg-white py-4 px-6 sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 shadow-sm">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">A</div>
            <span class="font-display font-extrabold text-lg text-slate-900">Apex Soluções</span>
          </div>
          <div class="text-xs font-semibold text-slate-500 hidden sm:block">Consultoria Empresarial & Tecnologia</div>
          <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20um%20site%20semelhante%20ao%20demo%20Business." target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs">
            Pedir Proposta
          </a>
        </div>

        <!-- Demo Hero -->
        <div class="bg-gradient-to-r from-slate-900 to-blue-950 text-white py-16 px-6 text-center">
          <span class="bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Demo Fictício • Serviços B2B</span>
          <h1 class="font-display font-extrabold text-3xl sm:text-5xl mt-4 mb-3 text-white">O seu serviço. A um clique de distância.</h1>
          <p class="text-slate-300 max-w-xl mx-auto text-sm sm:text-base mb-6">Apresente o seu trabalho, conquiste novos clientes e facilite os contactos corporativos.</p>
          <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20um%20site%20semelhante%20ao%20demo%20Business." target="_blank" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md">
            <span>FALAR NO WHATSAPP</span>
          </a>
        </div>

        <!-- Demo Services Grid -->
        <div class="max-w-4xl mx-auto py-12 px-4 sm:px-6">
          <div class="text-center mb-8">
            <h2 class="font-display font-extrabold text-2xl text-slate-900">Nossos Serviços Especializados</h2>
            <p class="text-xs text-slate-500">Exemplo demonstrativo de competências empresariais</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Service 1 -->
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">01</div>
              <h3 class="font-bold text-slate-900 text-base mb-1">Consultoria Estratégica</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Diagnóstico de processos, planejamento financeiro e reestruturação para empresas em crescimento.</p>
              <span class="text-xs font-semibold text-blue-600">Sob consulta • Contactar</span>
            </div>

            <!-- Service 2 -->
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">02</div>
              <h3 class="font-bold text-slate-900 text-base mb-1">Desenvolvimento de Sistemas</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Criação de soluções digitais personalizadas, automatização e integrações tecnológicas sob medida.</p>
              <span class="text-xs font-semibold text-blue-600">Sob consulta • Contactar</span>
            </div>

            <!-- Service 3 -->
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">03</div>
              <h3 class="font-bold text-slate-900 text-base mb-1">Marketing e Posicionamento</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Gestão de presença nas redes sociais, anúncios patrocinados e comunicação visual corporativa.</p>
              <span class="text-xs font-semibold text-blue-600">Sob consulta • Contactar</span>
            </div>

            <!-- Service 4 -->
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">04</div>
              <h3 class="font-bold text-slate-900 text-base mb-1">Suporte Técnico Contínuo</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Manutenção de redes informáticas, segurança da informação e assistência aos colaboradores.</p>
              <span class="text-xs font-semibold text-blue-600">Sob consulta • Contactar</span>
            </div>
          </div>

          <!-- Contact & Location Box -->
          <div class="mt-8 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <div class="font-bold text-slate-900 text-sm">Escritório Central</div>
              <div class="text-xs text-slate-500">Av. 24 de Julho, Edifício Platinum, Maputo</div>
            </div>
            <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20um%20site%20semelhante%20ao%20demo%20Business." target="_blank" class="bg-brand-green text-white font-bold text-xs py-2.5 px-4 rounded-xl">
              Conversar com Especialista
            </a>
          </div>

        </div>
      </div>
    `
  },

  // DEMO 03: STORE
  store: {
    title: 'Demo 03 — STORE (Lojas e Produtos)',
    ctaUrl: 'https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20um%20site%20semelhante%20ao%20demo%20Store.',
    html: `
      <div class="bg-slate-100 text-slate-800 min-h-full font-sans">
        <!-- Demo Header -->
        <div class="bg-white py-4 px-6 sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 shadow-sm">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🛍️</span>
            <span class="font-display font-extrabold text-lg text-slate-900">Moda & Tech</span>
          </div>
          <div class="text-xs font-semibold text-slate-500 hidden sm:block">Entregas em todo o território nacional</div>
          <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20um%20site%20semelhante%20ao%20demo%20Store." target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs">
            Catálogo WhatsApp
          </a>
        </div>

        <!-- Demo Hero -->
        <div class="bg-gradient-to-r from-emerald-900 to-slate-900 text-white py-14 px-6 text-center">
          <span class="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Demo Fictício • Loja Online Express</span>
          <h1 class="font-display font-extrabold text-3xl sm:text-5xl mt-4 mb-3 text-white">Tudo o que procura, num só lugar.</h1>
          <p class="text-slate-300 max-w-xl mx-auto text-sm sm:text-base mb-6">Apresente seus produtos e transforme visitantes em clientes directos no seu WhatsApp.</p>
          <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20um%20site%20semelhante%20ao%20demo%20Store." target="_blank" class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm shadow-md">
            <span>VER COLEÇÃO COMPLETA</span>
          </a>
        </div>

        <!-- Demo Product Grid -->
        <div class="max-w-4xl mx-auto py-12 px-4 sm:px-6">
          <div class="text-center mb-8">
            <h2 class="font-display font-extrabold text-2xl text-slate-900">Produtos em Destaque</h2>
            <p class="text-xs text-slate-500">Exemplos demonstrativos de itens à venda</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <!-- Product 1 -->
            <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div class="w-full h-36 bg-slate-100 rounded-xl flex items-center justify-center text-4xl mb-3">⌚</div>
                <div class="text-[10px] text-emerald-600 font-bold uppercase">Disponível</div>
                <h3 class="font-bold text-slate-900 text-sm">Smart Watch</h3>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-100">
                <div class="font-extrabold text-slate-900 text-base mb-2">2.500 MT</div>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20comprar%20o%20Smart%20Watch%20por%202.500%20MT." target="_blank" class="w-full block text-center bg-brand-green hover:bg-brand-greenHover text-white text-xs font-bold py-2 rounded-lg">
                  Comprar
                </a>
              </div>
            </div>

            <!-- Product 2 -->
            <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div class="w-full h-36 bg-slate-100 rounded-xl flex items-center justify-center text-4xl mb-3">🎧</div>
                <div class="text-[10px] text-emerald-600 font-bold uppercase">Disponível</div>
                <h3 class="font-bold text-slate-900 text-sm">Headphones Bluetooth</h3>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-100">
                <div class="font-extrabold text-slate-900 text-base mb-2">1.800 MT</div>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20comprar%20o%20Headphone%20por%201.800%20MT." target="_blank" class="w-full block text-center bg-brand-green hover:bg-brand-greenHover text-white text-xs font-bold py-2 rounded-lg">
                  Comprar
                </a>
              </div>
            </div>

            <!-- Product 3 -->
            <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div class="w-full h-36 bg-slate-100 rounded-xl flex items-center justify-center text-4xl mb-3">👟</div>
                <div class="text-[10px] text-emerald-600 font-bold uppercase">Disponível</div>
                <h3 class="font-bold text-slate-900 text-sm">Tênis Esportivo</h3>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-100">
                <div class="font-extrabold text-slate-900 text-base mb-2">3.000 MT</div>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20comprar%20o%20T%C3%AAnis%20por%203.000%20MT." target="_blank" class="w-full block text-center bg-brand-green hover:bg-brand-greenHover text-white text-xs font-bold py-2 rounded-lg">
                  Comprar
                </a>
              </div>
            </div>

            <!-- Product 4 -->
            <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div class="w-full h-36 bg-slate-100 rounded-xl flex items-center justify-center text-4xl mb-3">🎒</div>
                <div class="text-[10px] text-emerald-600 font-bold uppercase">Disponível</div>
                <h3 class="font-bold text-slate-900 text-sm">Mochila Urbana</h3>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-100">
                <div class="font-extrabold text-slate-900 text-base mb-2">1.500 MT</div>
                <a href="https://wa.me/258877703308?text=Ol%C3%A1!%20Quero%20comprar%20a%20Mochila%20por%201.500%20MT." target="_blank" class="w-full block text-center bg-brand-green hover:bg-brand-greenHover text-white text-xs font-bold py-2 rounded-lg">
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
};
