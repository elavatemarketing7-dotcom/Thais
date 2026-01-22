
import React, { useState, useEffect } from 'react';
import { AppState } from './types';
import { EXPERT_NAME, IMAGES, WHATSAPP_URL } from './constants';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import InitialOverlay from './components/InitialOverlay';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.INITIAL);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  const handleStartQuiz = () => setAppState(AppState.QUIZ);
  const handleGoToSite = () => setAppState(AppState.SITE);

  const handleQuizComplete = (answers: string[]) => {
    setQuizAnswers(answers);
    setAppState(AppState.ANALYZING);
    setTimeout(() => {
      setAppState(AppState.RESULT);
    }, 2500);
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Background site is always present but can be blurred/hidden */}
      <div className={`${appState !== AppState.SITE ? 'fixed inset-0 overflow-hidden' : ''}`}>
        <LandingPage onContactClick={() => window.open(WHATSAPP_URL, '_blank')} />
      </div>

      {appState === AppState.INITIAL && (
        <InitialOverlay onStartQuiz={handleStartQuiz} onGoToSite={handleGoToSite} />
      )}

      {appState === AppState.QUIZ && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <Quiz onComplete={handleQuizComplete} onSkip={handleGoToSite} />
        </div>
      )}

      {appState === AppState.ANALYZING && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-md">
          <div className="w-full max-w-xs px-6 text-center">
             <div className="relative w-32 h-32 mx-auto mb-6 rounded-full border-4 border-[#4a3728] p-1 overflow-hidden">
                <img src={IMAGES.hero} alt={EXPERT_NAME} className="w-full h-full object-cover rounded-full" />
             </div>
             <h2 className="text-xl font-medium mb-4 text-black">Analisando suas respostas...</h2>
             <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#4a3728] animate-[loading_2.5s_ease-in-out_infinite]" style={{ width: '100%' }}></div>
             </div>
             <p className="mt-4 text-zinc-500 text-sm">Preparando sua avaliação exclusiva.</p>
          </div>
          <style>{`
            @keyframes loading {
              0% { width: 0% }
              50% { width: 70% }
              100% { width: 100% }
            }
          `}</style>
        </div>
      )}

      {appState === AppState.RESULT && (
        <div className="fixed inset-0 z-50">
          <ResultPage 
            onConfirm={() => {
              const text = `Olá Dra. Thais! Acabei de fazer o quiz no seu site e meu perfil deu compatível. Gostaria de agendar uma avaliação.`;
              window.open(`${WHATSAPP_URL}&text=${encodeURIComponent(text)}`, '_blank');
              setAppState(AppState.SITE);
            }}
            onDirectZap={() => window.open(WHATSAPP_URL, '_blank')}
            onClose={() => setAppState(AppState.SITE)}
          />
        </div>
      )}
    </div>
  );
};

export default App;
