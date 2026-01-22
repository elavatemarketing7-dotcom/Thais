
import React from 'react';
import { IMAGES, EXPERT_NAME } from '../constants';

interface ResultPageProps {
  onConfirm: () => void;
  onDirectZap: () => void;
  onClose: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ onConfirm, onDirectZap, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-end justify-center bg-black/80 backdrop-blur-md">
      <div className="w-full h-[92%] bg-white rounded-t-[3rem] overflow-hidden flex flex-col relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-600 z-50"
        >
          ✕
        </button>

        {/* Top Header Section */}
        <div className="p-8 text-center bg-[#fdfaf7]">
           <h3 className="text-[#4a3728] font-bold tracking-[0.2em] text-xs uppercase mb-1">
             Análise Concluída
           </h3>
           <h2 className="text-2xl font-serif font-bold text-black leading-none">
             Perfil Compatível.
             <span className="block text-[#4a3728] mt-1">Você é a Paciente ideal.</span>
           </h2>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6 flex flex-col items-center">
           <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl mb-6 bg-zinc-100 border-4 border-white">
              <img 
                src={IMAGES.authority} 
                alt={EXPERT_NAME} 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-white text-xs font-medium uppercase tracking-widest opacity-80">
                  Método Exclusivo
                </p>
              </div>
           </div>

           <p className="text-zinc-600 text-center leading-relaxed mb-8 max-w-sm">
             Com base nas suas respostas, o Método da <strong>Dra. {EXPERT_NAME.split(' ')[0]}</strong> consegue entregar exatamente a naturalidade e segurança que você procura.
           </p>

           <div className="w-full space-y-3 pb-8">
              <button 
                onClick={onConfirm}
                className="w-full py-5 bg-[#4a3728] text-white rounded-2xl font-bold shadow-xl shadow-[#4a3728]/30 flex items-center justify-center gap-2 animate-pulse-gentle"
              >
                1. ENVIAR MINHA AVALIAÇÃO À DRA.
              </button>

              <button 
                onClick={onDirectZap}
                className="w-full py-4 border-2 border-[#4a3728] text-[#4a3728] rounded-2xl font-bold"
              >
                2. CHAMAR NO WHATSAPP SEM COMPROMISSO
              </button>

              <button 
                onClick={onClose}
                className="w-full py-4 text-zinc-400 font-medium text-sm"
              >
                3. NÃO ENVIAR E CONTINUAR NO SITE
              </button>
           </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse-gentle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-pulse-gentle {
          animation: pulse-gentle 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ResultPage;
