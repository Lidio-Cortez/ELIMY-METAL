import React from 'react';

export function About() {
  return (
    <section id="empresa" className="py-24 bg-[#f4f6f4] text-zinc-900 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Imagem com Badge "2019" */}
        <div className="lg:col-span-6 relative">
          <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-200">
            <img
              src="/chuttersnap-Hv3i-nJNWcI-unsplash.jpg"
              alt="Fábrica de Alumínio"
              className="w-full h-[440px] object-cover"
            />
          </div>

          {/* Badge 2019 */}
          <div className="absolute -bottom-6 right-6 lg:left-6 bg-[#10b981] text-white p-6 rounded-lg max-w-xs shadow-xl">
            <div className="text-3xl font-black">2019</div>
            <div className="text-[11px] font-bold tracking-wider uppercase mt-1">
              O INÍCIO DA NOSSA HISTÓRIA
            </div>
          </div>
        </div>

        {/* Conteúdo de Texto */}
        <div className="lg:col-span-6 space-y-6 lg:pl-6">
          <span className="text-xs font-bold text-[#10b981] uppercase tracking-widest">
            QUEM SOMOS
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 leading-tight">
            Indústria que transforma alumínio em confiança.
          </h2>

          <p className="text-zinc-600 text-sm leading-relaxed">
            A ELIMY METAL é uma empresa angolana dedicada ao fabrico e comercialização de utensílios de alumínio. Combinamos conhecimento local, produção responsável e atenção aos detalhes para entregar produtos essenciais ao dia a dia.
          </p>

          <p className="text-zinc-600 text-sm leading-relaxed">
            Atendemos famílias, revendedores, restaurantes e outros negócios, com soluções ajustadas às necessidades e à realidade do nosso mercado.
          </p>

          {/* Lista de Vantagens */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
              <span className="w-5 h-5 bg-[#10b981]/15 text-[#10b981] rounded-full flex items-center justify-center text-[10px]">✓</span>
              Fabrico em Angola
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
              <span className="w-5 h-5 bg-[#10b981]/15 text-[#10b981] rounded-full flex items-center justify-center text-[10px]">✓</span>
              Venda a retalho e por grosso
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
              <span className="w-5 h-5 bg-[#10b981]/15 text-[#10b981] rounded-full flex items-center justify-center text-[10px]">✓</span>
              Materiais resistentes
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
              <span className="w-5 h-5 bg-[#10b981]/15 text-[#10b981] rounded-full flex items-center justify-center text-[10px]">✓</span>
              Atendimento próximo
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}