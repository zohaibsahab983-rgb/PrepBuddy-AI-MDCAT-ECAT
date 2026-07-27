import type { Mode, PastPaper } from '@/types';

export const PAST_PAPERS: PastPaper[] = [
  // MDCAT
  { id: 'pp-mdcat-bio-2024', mode: 'MDCAT', subject: 'Biology', year: '2024', testType: 'MDCAT', title: 'MDCAT Biology 2024 — Full Paper', url: '#' },
  { id: 'pp-mdcat-bio-2023', mode: 'MDCAT', subject: 'Biology', year: '2023', testType: 'MDCAT', title: 'MDCAT Biology 2023 — Full Paper', url: '#' },
  { id: 'pp-mdcat-bio-2022', mode: 'MDCAT', subject: 'Biology', year: '2022', testType: 'MDCAT', title: 'MDCAT Biology 2022 — Full Paper', url: '#' },
  { id: 'pp-mdcat-chem-2024', mode: 'MDCAT', subject: 'Chemistry', year: '2024', testType: 'MDCAT', title: 'MDCAT Chemistry 2024 — Full Paper', url: '#' },
  { id: 'pp-mdcat-chem-2023', mode: 'MDCAT', subject: 'Chemistry', year: '2023', testType: 'MDCAT', title: 'MDCAT Chemistry 2023 — Full Paper', url: '#' },
  { id: 'pp-mdcat-phy-2024', mode: 'MDCAT', subject: 'Physics', year: '2024', testType: 'MDCAT', title: 'MDCAT Physics 2024 — Full Paper', url: '#' },
  { id: 'pp-mdcat-phy-2022', mode: 'MDCAT', subject: 'Physics', year: '2022', testType: 'MDCAT', title: 'MDCAT Physics 2022 — Full Paper', url: '#' },
  { id: 'pp-mdcat-eng-2023', mode: 'MDCAT', subject: 'English', year: '2023', testType: 'MDCAT', title: 'MDCAT English 2023 — Full Paper', url: '#' },
  { id: 'pp-mdcat-gk-2024', mode: 'MDCAT', subject: 'General Knowledge', year: '2024', testType: 'MDCAT', title: 'MDCAT General Knowledge 2024', url: '#' },
  { id: 'pp-mdcat-gk-2022', mode: 'MDCAT', subject: 'General Knowledge', year: '2022', testType: 'MDCAT', title: 'MDCAT General Knowledge 2022', url: '#' },

  // ECAT
  { id: 'pp-ecat-math-2024', mode: 'ECAT', subject: 'Mathematics', year: '2024', testType: 'ECAT', title: 'ECAT Mathematics 2024 — Full Paper', url: '#' },
  { id: 'pp-ecat-math-2023', mode: 'ECAT', subject: 'Mathematics', year: '2023', testType: 'ECAT', title: 'ECAT Mathematics 2023 — Full Paper', url: '#' },
  { id: 'pp-ecat-math-2022', mode: 'ECAT', subject: 'Mathematics', year: '2022', testType: 'ECAT', title: 'ECAT Mathematics 2022 — Full Paper', url: '#' },
  { id: 'pp-ecat-phy-2024', mode: 'ECAT', subject: 'Physics', year: '2024', testType: 'ECAT', title: 'ECAT Physics 2024 — Full Paper', url: '#' },
  { id: 'pp-ecat-phy-2023', mode: 'ECAT', subject: 'Physics', year: '2023', testType: 'ECAT', title: 'ECAT Physics 2023 — Full Paper', url: '#' },
  { id: 'pp-ecat-chem-2024', mode: 'ECAT', subject: 'Chemistry', year: '2024', testType: 'ECAT', title: 'ECAT Chemistry 2024 — Full Paper', url: '#' },
  { id: 'pp-ecat-chem-2022', mode: 'ECAT', subject: 'Chemistry', year: '2022', testType: 'ECAT', title: 'ECAT Chemistry 2022 — Full Paper', url: '#' },
  { id: 'pp-ecat-eng-2023', mode: 'ECAT', subject: 'English', year: '2023', testType: 'ECAT', title: 'ECAT English 2023 — Full Paper', url: '#' },
  { id: 'pp-ecat-lr-2024', mode: 'ECAT', subject: 'Logical Reasoning', year: '2024', testType: 'ECAT', title: 'ECAT Logical Reasoning 2024', url: '#' },
  { id: 'pp-ecat-lr-2022', mode: 'ECAT', subject: 'Logical Reasoning', year: '2022', testType: 'ECAT', title: 'ECAT Logical Reasoning 2022', url: '#' },
];

export function papersForMode(mode: Mode): PastPaper[] {
  return PAST_PAPERS.filter((p) => p.mode === mode);
}
