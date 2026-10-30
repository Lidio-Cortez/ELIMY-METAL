import React from 'react';

const services = [
  {
    num: '01',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Fabrico de utensílios',
    desc: 'Produzimos panelas, formas, canecas e outros artigos em alumínio com atenção à resistência e ao acabamento.',
  },
  {
    num: '02',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fcfcfc" viewBox="0 0 256 256"><path d="M255.42,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-8-8H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,255.42,117ZM192,88h34.58l9.6,24H192ZM32,72H176v64H32ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm81-24H111a32,32,0,0,0-62,0H32V152H176v12.31A32.11,32.11,0,0,0,161,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm48-24H223a32.06,32.06,0,0,0-31-24V128h48Z"></path></svg>
    ),
    title: 'Venda e distribuição',
    desc: 'Fornecemos produtos a clientes particulares, lojas, revendedores, restaurantes e instituições em Angola.',
  },
  {
    num: '03',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Encomendas por medida',
    desc: 'Avaliamos pedidos em quantidade, formatos específicos e soluções adequadas ao perfil de cada negócio.',
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#0c0f0d] text-white px-6 lg:px-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <span className="text-xs font-bold text-[#10b981] uppercase tracking-widest">
            O QUE FAZEMOS
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mt-2 max-w-xl leading-tight">
            Do fabrico à entrega, estamos consigo.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-1">
          {services.map((s, idx) => (
            <div key={idx} className="relative  border-zinc-800/80 border-r-2 p-8  space-y-6 hover:bg-[#10b981]/10 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-[#10b981] rounded-lg flex items-center justify-center">
                  {s.icon}
                </div>
                <span className="text-4xl font-black text-zinc-800">{s.num}</span>
              </div>

              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}