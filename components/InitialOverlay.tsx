
import React from 'react';
import { IMAGES, EXPERT_NAME, WHATSAPP_URL } from '../constants';

interface InitialOverlayProps {
  onStartQuiz: () => void;
  onGoToSite: () => void;
}

const InitialOverlay: React.FC<InitialOverlayProps> = ({ onStartQuiz, onGoToSite }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white p-6 md:p-12">
      <div className="w-full max-w-md text-center">
        <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="absolute inset-0 bg-[#4a3728]/10 rounded-full animate-pulse"></div>
            <img 
              src={IMAGES.hero} 
              alt={EXPERT_NAME} 
              className="relative w-full h-full object-cover rounded-full border-4 border-[#4a3728] shadow-2xl"
            />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
          Bem-vinda ao Universo {EXPERT_NAME.split(' ')[0]}
        </h1>
        
        <p className="text-zinc-600 mb-10 leading-relaxed">
          Escolha como deseja iniciar sua jornada de transformação hoje. 
          Recomendamos a <strong>Avaliação de Perfil</strong> para um atendimento exclusivo.
        </p>

        <div className="space-y-4">
          <button 
            onClick={onStartQuiz}
            className="w-full py-5 bg-[#4a3728] text-white rounded-2xl font-bold text-lg shadow-xl shadow-[#4a3728]/20 active:scale-95 transition-transform animate-bounce-slow"
          >
            FAZER AVALIAÇÃO DE PERFIL
          </button>
          
          <button 
            onClick={onGoToSite}
            className="w-full py-4 border-2 border-[#4a3728]/30 text-black rounded-2xl font-semibold active:scale-95 transition-transform"
          >
            CONHECER O SITE DIRETO
          </button>

          <a 
            href={WHATSAPP_URL}
            target="_blank"
            className="block w-full py-4 text-[#4a3728]/70 text-sm font-medium hover:underline"
          >
            Falar direto no WhatsApp
          </a>
        </div>
      </div>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default InitialOverlay;
