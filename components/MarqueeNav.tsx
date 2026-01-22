
import React from 'react';

const MarqueeNav: React.FC = () => {
  const items = [
    "Sobre Mim", 
    "Prova Visual", 
    "Harmonização de 🤎", 
    "Onde nos Encontrar", 
    "Agendar Agora"
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-zinc-100 overflow-hidden py-3">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, idx) => (
          <span 
            key={idx} 
            className="text-[#4a3728]/80 font-bold text-[10px] tracking-widest uppercase px-6"
          >
            • {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeNav;
