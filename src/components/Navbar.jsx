import React from 'react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0c0f0d] border-b border-zinc-800/80 px-6 lg:px-16 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#168A4F] text-white font-extrabold flex items-center justify-center text-sm rounded-sm">
          EM
        </div>
        <div className="flex flex-col">
          <span className="text-white font-black text-lg tracking-wider leading-none">
            ELIMY METAL
          </span>
          <span className="text-[10px] text-zinc-400 font-semibold tracking-widest uppercase mt-0.5">
            Indústria Angolana
          </span>
        </div>
      </div>

      {/* Navegação */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
        <a href="#empresa" className="hover:text-white transition-colors">A empresa</a>
        <a href="#produtos" className="hover:text-white transition-colors">Produtos</a>
        <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
        <a href="#contactos" className="hover:text-white transition-colors">Contactos</a>
      </nav>

      {/* Botão de Ação */}
      <a
        href="https://wa.me/244923456789"
        target="_blank"
        rel="noreferrer"
        className="bg-[#168A4F] hover:bg-[#136b3f] text-white text-sm font-semibold px-5 py-2.5 rounded-md flex items-center gap-2 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path></svg>
        Falar connosco
      </a>
    </header>
  );
}