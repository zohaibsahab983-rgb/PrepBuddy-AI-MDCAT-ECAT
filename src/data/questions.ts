import type { Mode, QuizQuestion } from '@/types';
import { MDCAT_QUESTIONS } from '@/data/mdcatQuestions';
import { ECAT_QUESTIONS } from '@/data/ecatQuestions';

export const ALL_QUESTIONS: QuizQuestion[] = [...MDCAT_QUESTIONS, ...ECAT_QUESTIONS];

export function questionsForMode(mode: Mode): QuizQuestion[] {
  return ALL_QUESTIONS.filter((q) => q.mode === mode);
}

export function questionsForSubject(mode: Mode, subject: string): QuizQuestion[] {
  return ALL_QUESTIONS.filter((q) => q.mode === mode && q.subject === subject);
}

export function pickQuiz(mode: Mode, subject: string, count: number): QuizQuestion[] {
  const pool = questionsForSubject(mode, subject);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, pool.length));
}

export function findQuestionById(id: string): QuizQuestion | undefined {
  return ALL_QUESTIONS.find((q) => q.id === id);
}
