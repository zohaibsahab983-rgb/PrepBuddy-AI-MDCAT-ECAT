import type { Mode, ModeConfig } from '@/types';

export const MODE_CONFIGS: Record<Mode, ModeConfig> = {
  MDCAT: {
    mode: 'MDCAT',
    label: 'MDCAT',
    fullLabel: 'Medical & Dental College Admission Test',
    subjects: ['Biology', 'Chemistry', 'Physics', 'English', 'General Knowledge'],
    questionCount: 20,
    timePerQuestion: 90,
    marksPerQuestion: 10,
    totalMarks: 200,
    description: 'Medical & Dental College Admission Test',
  },
  ECAT: {
    mode: 'ECAT',
    label: 'ECAT',
    fullLabel: 'Engineering College Admission Test',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'English', 'Logical Reasoning'],
    questionCount: 20,
    timePerQuestion: 100,
    marksPerQuestion: 20,
    totalMarks: 400,
    description: 'Engineering College Admission Test',
  },
};

export const MODES: Mode[] = ['MDCAT', 'ECAT'];

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const PAPER_YEARS = ['2024', '2023', '2022', '2021', '2020', '2019'];
