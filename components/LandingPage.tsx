
import React from 'react';
import { EXPERT_NAME, PROFESSION, ADDRESS, IMAGES, WHATSAPP_URL, INSTAGRAM_URL } from '../constants';
import MarqueeNav from './MarqueeNav';
import Gallery from './Gallery';

interface LandingPageProps {
  onContactClick: () => void;
}

const AutoSlider: React.FC<{ images: string[], speedClass?: string }> = ({ images, speedClass = "animate-slide-slow" }) => {
  return (
    <div className="relative overflow-hidden w-full group">
      <div className={`flex whitespace-nowrap ${speedClass} hover:[animation-play-state:paused] pointer-events-auto`}>
        {/* Double the images to create infinite loop effect */}
        {[...images, ...images].map((img, i) => (
          <div key={i} className="inline-block px-2 md:px-3">
             <div className="w-[280px] md:w-[350px] aspect-square rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm">
                <img src={img} alt="Resultado" className="w-full h-full object-cover" />
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CommentsSlider: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="w-full py-10 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing">
      <div className="flex px-6 gap-6 md:gap-10 pb-4">
        {images.map((img, i) => (
          <div key={i} className="shrink-0">
            <img 
              src={img} 
              alt="Depoimento" 
              className="w-[320px] md:w-[550px] rounded-[2.5rem] shadow-2xl border border-zinc-50 transition-all duration-500 hover:scale-[1.02]" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const LandingPage: React.FC<LandingPageProps> = ({ onContactClick }) => {
  return (
    <div className="relative pt-12">
      <MarqueeNav />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] flex flex-col">
        <div className="relative flex-1 bg-zinc-200 flex items-end">
           <img 
            src={IMAGES.hero} 
            alt={EXPERT_NAME} 
            className="w-full h-full object-cover object-top absolute inset-0" 
           />
           {/* Multi-layered gradient for superior text legibility */}
           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent hidden md:block"></div>
           
           <div className="relative z-10 w-full px-6 pb-16 md:pb-24 max-w-6xl mx-auto">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-black mb-6 leading-[1.1] drop-shadow-sm">
                  <span className="text-xl md:text-2xl block font-sans uppercase tracking-[0.3em] text-[#4a3728] mb-2 font-semibold">Eu sou</span>
                  {EXPERT_NAME}
                </h1>
                <p className="text-xl md:text-2xl text-zinc-900 mb-10 max-w-lg leading-relaxed font-medium">
                  Transformo rostos preservando sua essência. Onde a técnica encontra o propósito.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                  <button 
                    onClick={onContactClick}
                    className="w-full md:w-auto px-10 py-5 bg-[#4a3728] text-white rounded-2xl font-bold text-lg shadow-2xl shadow-[#4a3728]/40 active:scale-95 transition-all hover:bg-black"
                  >
                    AGENDAR CONSULTA NO WHATSAPP
                  </button>
                  <div className="text-center md:text-left">
                    <p className="text-zinc-500 text-sm font-semibold uppercase tracking-widest mt-2 md:mt-4">
                      Sua primeira conversa
                    </p>
                    <p className="text-zinc-400 text-xs">Sem compromisso</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* VIDEO INTRO SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl bg-zinc-900 relative">
             <video 
              src={IMAGES.videoPlaceholder} 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="auto"
              className="w-full h-full object-cover"
             />
          </div>
          <div className="w-full md:w-1/2">
             <h2 className="text-3xl font-serif font-bold text-black mb-6 leading-tight">
                Beleza com Propósito
             </h2>
             <p className="text-zinc-600 leading-relaxed text-lg italic border-l-4 border-[#4a3728] pl-6">
               "Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. 
               Resultados naturais e transformadores. Sinta a diferença de ser cuidada 
               por quem entende que sua beleza é única, e merece atenção especial."
             </p>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section id="sobre" className="bg-zinc-50 py-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
           <div className="w-full md:w-1/2 h-[500px] rounded-[3rem] overflow-hidden shadow-xl">
              <img src={IMAGES.authority} alt="Dra Thais" className="w-full h-full object-cover" />
           </div>
           <div className="w-full md:w-1/2">
              <h3 className="text-[#4a3728] font-bold uppercase tracking-widest text-sm mb-2">Autoridade & Confiança</h3>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-6">Conheça o Método Dra. Thais</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed text-lg">
                <p>
                  Minha jornada na Harmonização Facial não é apenas sobre aplicar produtos, mas sobre entender a história que cada rosto conta.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex gap-4">
                    <span className="text-[#4a3728] font-bold">✓</span>
                    <span>Avaliação honesta e minuciosa de cada detalhe.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#4a3728] font-bold">✓</span>
                    <span>Produtos de altíssima performance mundial.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#4a3728] font-bold">✓</span>
                    <span>Foco absoluto em naturalidade e segurança.</span>
                  </li>
                </ul>
              </div>
           </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS - AUTO SLIDING */}
      <section id="resultados" className="bg-white py-24 px-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center">
            <h3 className="text-[#4a3728] font-bold uppercase tracking-widest text-xs mb-2">Transformações</h3>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-black">Resultados Reais</h2>
            <p className="mt-4 text-zinc-400 text-sm">*Os resultados podem variar de pessoa para pessoa.</p>
          </div>
        </div>
        <AutoSlider images={IMAGES.results} />
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="bg-black py-24 px-6 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-16 italic">"O segredo da boa harmonização é ninguém saber o que você fez, mas todos notarem que você está radiante."</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
              <div className="text-[#4a3728] text-3xl mb-4">✦</div>
              <h4 className="text-xl font-bold mb-3">Atendimento Humanizado</h4>
              <p className="text-zinc-400">Você não é apenas uma paciente. Sua individualidade é respeitada desde o primeiro contato.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
              <div className="text-[#4a3728] text-3xl mb-4">✦</div>
              <h4 className="text-xl font-bold mb-3">Segurança Biológica</h4>
              <p className="text-zinc-400">Protocolos rígidos de segurança para garantir que sua saúde esteja sempre em primeiro lugar.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
              <div className="text-[#4a3728] text-3xl mb-4">✦</div>
              <h4 className="text-xl font-bold mb-3">Retorno de Autoestima</h4>
              <p className="text-zinc-400">Trabalhamos para que você se olhe no espelho e se reconheça em sua melhor versão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-2xl font-serif font-bold text-black mb-6">Ainda tem dúvidas se o meu método é para você?</h2>
        <button 
          onClick={onContactClick}
          className="px-10 py-5 bg-[#4a3728] text-white rounded-full font-bold shadow-xl active:scale-95 transition-transform"
        >
          TIRE SUAS DÚVIDAS NO WHATSAPP
        </button>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="bg-zinc-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-black mb-16">Sua Jornada de Transformação</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Contato via WhatsApp</h4>
                <p className="text-zinc-600">Nossa equipe fará uma pré-avaliação rápida para entender seus desejos.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-[#4a3728] text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Consulta Presencial</h4>
                <p className="text-zinc-600">Um momento exclusivo para mapeamento facial completo e definição do protocolo.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">O Procedimento</h4>
                <p className="text-zinc-600">Realização da técnica com máxima precisão, conforto e foco no resultado desejado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HARMONIZAÇÃO DE CORAÇÃO & COMENTÁRIOS */}
      <section className="bg-white py-24 px-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-black mb-4">Harmonização de 🤎</h2>
        </div>
        <AutoSlider images={IMAGES.hearts} speedClass="animate-slide-medium" />

        {/* ÁREA DE COMENTÁRIOS DE PACIENTES */}
        <div className="mt-24">
          <div className="max-w-6xl mx-auto px-6 mb-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-2">O que as pacientes dizem</h2>
            <p className="text-zinc-400 uppercase tracking-widest text-xs font-bold mb-8">Experiências Reais</p>
          </div>
          <CommentsSlider images={IMAGES.comments} />
        </div>
      </section>

      {/* MAP SECTION */}
      <section id="onde" className="bg-zinc-100 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-black mb-4">Onde Nos Encontrar</h2>
            <p className="text-zinc-600 font-medium">{ADDRESS}</p>
          </div>
          <div className="w-full h-96 bg-zinc-300 rounded-[3rem] overflow-hidden shadow-lg border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.161245084934!2d-45.5414164!3d-20.0216782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAxJzE4LjAiUyA0NcKwMzInMjkuMSJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="bg-[#4a3728] py-24 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Chegou a sua hora de se sentir maravilhosa.</h2>
          <p className="text-xl text-white/80 mb-12 italic">Recupere sua confiança com o olhar clínico de quem entende de harmonia real.</p>
          <button 
            onClick={onContactClick}
            className="w-full py-6 bg-white text-black rounded-3xl font-black text-xl shadow-2xl active:scale-95 transition-all"
          >
            AGENDAR MINHA CONSULTA AGORA
          </button>
          <p className="mt-4 text-white/60 text-sm">Vagas limitadas para este mês.</p>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="bg-white py-12 px-6 border-t border-zinc-100 text-center">
        <div className="max-w-sm mx-auto">
           <p className="font-signature text-3xl text-black mb-2">{EXPERT_NAME}</p>
           <p className="text-sm font-bold text-zinc-400 tracking-widest uppercase mb-6">{PROFESSION}</p>
           <div className="flex justify-center gap-6 mb-8">
              <a href={INSTAGRAM_URL} target="_blank" className="text-zinc-500 hover:text-black transition-colors font-medium">Instagram</a>
              <a href={WHATSAPP_URL} target="_blank" className="text-zinc-500 hover:text-black transition-colors font-medium">WhatsApp</a>
           </div>
           <p className="text-[10px] text-zinc-300 uppercase tracking-widest">
             © {new Date().getFullYear()} {EXPERT_NAME}. Todos os direitos reservados.
           </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
