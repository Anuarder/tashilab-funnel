import { QUIZ_ANSWER_TYPES } from './config';

export type QuizAnswerType = keyof typeof QUIZ_ANSWER_TYPES;

export interface QuizTeaser {
  slug: string;
  type: 'teaser';
  title: string;
  image: string;
  description: string;
}

export interface QuizQuestion {
  slug: string;
  type: 'question';
  title: string;
  withoutProgress?: boolean;
  subtitle?: string;
  description?: string;
  answerType: QuizAnswerType;
  answers: {
    slug: string;
    icon: string;
    title?: string;
  }[];
}

export type QuizAnswer = QuizQuestion['answers'][0];

export type QuizPageContent = QuizTeaser | QuizQuestion;

export interface FunnelConfig {
  mainPage: {
    path: string;
    title: string;
    subtitle: string;
    description: string;
    ages: Array<{
      title: string;
      value: string;
      image: string;
    }>;
  };
  quizPage: Array<QuizPageContent>;
}

export type Funnel = {
  QuizAnswerType: QuizAnswerType;
  QuizTeaser: QuizTeaser;
  QuizQuestion: QuizQuestion;
  QuizAnswer: QuizAnswer;
  QuizPageContent: QuizPageContent;
  FunnelConfig: FunnelConfig;
};
