export type Mode = 'MDCAT' | 'ECAT';

export type Tab =
  | 'quiz'
  | 'notes'
  | 'buddy'
  | 'timetable'
  | 'results'
  | 'assignments'
  | 'papers';

export interface ModeConfig {
  mode: Mode;
  label: string;
  fullLabel: string;
  subjects: string[];
  questionCount: number;
  timePerQuestion: number;
  marksPerQuestion: number;
  totalMarks: number;
  description: string;
}

export interface QuizQuestion {
  id: string;
  mode: Mode;
  subject: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  explanationUrdu: string;
  memoryTip: string;
  memoryTipUrdu: string;
}

export interface QuizAnswerRecord {
  questionId: string;
  question: string;
  options: string[];
  correctIndex: number;
  selectedIndex: number | null;
  subject: string;
  timedOut: boolean;
}

export interface QuizResult {
  id: string;
  mode: Mode;
  subject: string;
  score: number;
  total: number;
  marks: number;
  totalMarks: number;
  date: string;
  durationSec: number;
  answers: QuizAnswerRecord[];
}

export interface Note {
  id: string;
  mode: Mode;
  subject: string;
  title: string;
  body: string;
  isUrdu: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TimetableEntry {
  id: string;
  mode: Mode;
  subject: string;
  time: string;
  topic: string;
  day: string;
}

export interface Assignment {
  id: string;
  mode: Mode;
  subject: string;
  title: string;
  dueDate: string;
  done: boolean;
  createdAt: string;
}

export interface PastPaper {
  id: string;
  mode: Mode;
  subject: string;
  year: string;
  testType: string;
  title: string;
  url: string;
}

export type Language = 'en' | 'ur';

export interface BuddyResponse {
  text: string;
  isUrdu: boolean;
  isSample: boolean;
}
