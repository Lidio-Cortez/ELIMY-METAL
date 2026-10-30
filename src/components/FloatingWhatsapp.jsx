import React from 'react';

export function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/244923456789"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#10b981] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      title="Falar no WhatsApp"
    >
      <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
        <path d="M12.031 0C5.396 0 .029 5.367.029 12.002c0 2.114.551 4.175 1.597 5.986L0 24l6.19-1.623a11.93 11.93 0 005.84 1.523h.005c6.635 0 12.001-5.367 12.001-12.002A11.934 11.934 0 0012.031 0z"/>
      </svg>
    </a>
  );
}