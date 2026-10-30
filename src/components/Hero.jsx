import React from 'react';

export function Hero() {
  return (
    <section className="bg-[#0c0f0d] text-white pt-12 pb-20 px-6 lg:px-16 relative overflow-hidden border-b border-zinc-900">
      {/* Background Grid Lines (efeito de grade subtil no fundo) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Coluna de Texto */}
        <div className="lg:col-span-6 space-y-6">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#168A4F] uppercase   pl-3">
            -DESDE 2019, A PRODUZIR EM ANGOLA
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
            Feito para durar. <br />
            <span className="text-[#146A4F]">Criado para servir.</span>
          </h1>

          <p className="text-zinc-400 text-base lg:text-lg max-w-md leading-relaxed">
            Fabricamos utensílios de alumínio resistentes e acessíveis para cozinhas, famílias e negócios de todo o país.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#produtos"
              className="bg-[#10b981] hover:bg-[#0d9668] text-white text-sm font-semibold px-6 py-3.5 rounded-md flex items-center gap-2 transition-all"
            >
              Ver produtos <span>→</span>
            </a>
            <a
              href="#empresa"
              className="bg-zinc-900 border border-zinc-700/80 hover:bg-zinc-800 text-white text-sm font-semibold px-6 py-3.5 rounded-md transition-all"
            >
              Conhecer a ELIMY
            </a>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-zinc-800/60">
            <div>
              <div className="text-2xl font-black text-white">100%</div>
              <div className="text-xs text-zinc-400 mt-1">Produção nacional</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">6+</div>
              <div className="text-xs text-zinc-400 mt-1">Anos de experiência</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">AO</div>
              <div className="text-xs text-zinc-400 mt-1">Mercado angolano</div>
            </div>
          </div>
        </div>

        {/* Coluna da Imagem */}
        <div className="lg:col-span-6 relative">
          <div className="rounded-xl overflow-hidden border border-zinc-800 relative bg-zinc-900">
            <img 
              src="./src/assets/cooker-king-AOVtEuU9UGc-unsplash.jpg"
              alt="Conjunto de Panelas ELIMY METAL"
              className="w-full h-[460px] object-cover"
            />

            {/* Floating Card: Qualidade Garantida */}
            <div className="absolute bottom-6 left-6 bg-white text-zinc-900 p-5 rounded-lg shadow-2xl max-w-xs border border-zinc-100">
              <div className="flex items-center gap-2 text-[#10b981] font-bold text-xs uppercase tracking-wider mb-1">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#168a4f" viewBox="0 0 256 256"><path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path></svg></span> QUALIDADE GARANTIDA
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                Alumínio selecionado e acabamento cuidado em cada peça.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}