
export interface QuizQuestion {
  id: number;
  question: string;
  options: { label: string; value: string }[];
}

export enum AppState {
  INITIAL = 'initial',
  QUIZ = 'quiz',
  ANALYZING = 'analyzing',
  RESULT = 'result',
  SITE = 'site'
}
