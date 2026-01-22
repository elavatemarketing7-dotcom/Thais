
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, EXPERT_NAME, IMAGES } from '../constants';

interface QuizProps {
  onComplete: (answers: string[]) => void;
  onSkip: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    const newAnswers = [...answers, value];
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setAnswers(newAnswers);
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Floating Hero Context */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-50 pointer-events-none">
        <div className="w-20 h-20 rounded-full border-2 border-white overflow-hidden shadow-lg mb-2">
            <img src={IMAGES.hero} alt={EXPERT_NAME} className="w-full h-full object-cover" />
        </div>
        <span className="text-white text-xs font-semibold tracking-widest uppercase">Dra. {EXPERT_NAME.split(' ')[0]}</span>
      </div>

      <div className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl overflow-hidden relative pt-12">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-zinc-100">
          <div 
            className="h-full bg-[#4a3728] transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="px-8 pb-10 pt-16">
          <span className="text-[#4a3728] font-bold text-sm tracking-tighter mb-2 block">
            PASSO {currentStep + 1} DE {QUIZ_QUESTIONS.length}
          </span>
          <h2 className="text-2xl font-serif font-bold text-zinc-800 leading-tight mb-8">
            {QUIZ_QUESTIONS[currentStep].question}
          </h2>

          <div className="space-y-3">
            {QUIZ_QUESTIONS[currentStep].options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className="w-full py-5 px-6 text-left bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-700 font-medium hover:border-[#4a3728] hover:bg-[#4a3728]/5 active:scale-[0.98] transition-all duration-200"
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="mt-10 flex justify-between items-center">
            <button 
              onClick={onSkip}
              className="text-zinc-400 text-sm hover:text-zinc-600 transition-colors"
            >
              Pular avaliação
            </button>
            {currentStep > 0 && (
              <button 
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="text-[#4a3728] text-sm font-semibold"
              >
                Voltar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
