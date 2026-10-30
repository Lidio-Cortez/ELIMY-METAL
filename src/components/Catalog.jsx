import React, { useState } from 'react';

const products = [
  {
    category: 'PANELAS',
    title: 'Panela Clássica',
    desc: 'Alumínio reforçado · 24 cm',
    price: '12.500 Kz',
    image: './public/cooker-king-ZhmrM74A2mw-unsplash.jpg',
  },
  {
    category: 'PANELAS',
    title: 'Conjunto Familiar',
    desc: 'Conjunto de 3 peças',
    price: '38.900 Kz',
    image: './public/cooker-king-mnIZdwhVhII-unsplash.jpg',
  },
  {
    category: 'FORMAS',
    title: 'Forma Redonda',
    desc: 'Acabamento liso · 26 cm',
    price: '6.800 Kz',
    image: './public/marine-le-gac-YnVVKwTHI3Q-unsplash.jpg',
  },
  {
    category: 'CANECAS',
    title: 'Caneca Tradicional',
    desc: 'Leve e resistente · 500 ml',
    price: '2.400 Kz',
    image: './public/mario-gogh-HVVqiaPDR6g-unsplash.jpg',
  },
];

export function Catalog() {
  const [activeTab, setActiveTab] = useState('Todos');

  // Lógica de Filtragem: se for 'Todos', traz a lista completa, caso contrário filtra pela categoria exata
  const filteredProducts = activeTab === 'Todos'
    ? products
    : products.filter(
        (product) => product.category.toUpperCase() === activeTab.toUpperCase()
      );

  return (
    <section id="produtos" className="py-24 bg-white text-zinc-900 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho e Filtros */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold text-[#10b981] uppercase tracking-widest">
              CATÁLOGO EM DESTAQUE
            </span>
            <h2 className="text-4xl font-extrabold text-zinc-900 mt-2">
              Essenciais para todas as cozinhas.
            </h2>
          </div>

          {/* Botões de Filtro */}
          <div className="flex items-center gap-2 bg-zinc-100 p-1.5 rounded-lg text-xs font-semibold">
            {['Todos', 'Panelas', 'Formas', 'Canecas'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === tab
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Produtos Filtrados */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-50 border border-zinc-200/80 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-md"
            >
              <div className="relative">
                <span className="absolute top-3 left-3 bg-white text-zinc-800 text-[10px] font-extrabold px-2.5 py-1 rounded shadow-sm tracking-wider uppercase">
                  {item.category}
                </span>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="p-5 space-y-1">
                <h3 className="font-bold text-zinc-900 text-base">{item.title}</h3>
                <p className="text-xs text-zinc-500 font-medium">{item.desc}</p>
              </div>

              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-zinc-200/60 mt-auto">
                <div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase block">
                    A PARTIR DE
                  </span>
                  <span className="text-base font-extrabold text-[#10b981]">
                    {item.price}
                  </span>
                </div>
                <button className="w-9 h-9 bg-zinc-900 hover:bg-[#10b981] text-white rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem caso não haja produtos no filtro selecionado */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-zinc-500 text-sm">
            Nenhum produto encontrado para esta categoria no momento.
          </div>
        )}

        <p className="text-center text-xs text-zinc-400 mt-10">
          Preços indicativos. Solicite uma cotação para compras por grosso ou medidas especiais.
        </p>

      </div>
    </section>
  );
}