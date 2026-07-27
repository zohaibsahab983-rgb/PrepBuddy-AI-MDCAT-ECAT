import { useState } from 'react';
import {
  BarChart3,
  Brain,
  CalendarDays,
  CheckSquare,
  FileText,
  NotebookPen,
  Sparkles,
  Stethoscope,
  Wrench,
} from 'lucide-react';
import type { Mode, QuizQuestion, Tab } from '@/types';
import { MODES } from '@/data/modes';
import { QuizSection } from '@/components/QuizSection';
import { NotesSection } from '@/components/NotesSection';
import { BuddySection } from '@/components/BuddySection';
import { TimetableSection } from '@/components/TimetableSection';
import { ResultsSection } from '@/components/ResultsSection';
import { AssignmentsSection } from '@/components/AssignmentsSection';
import { PapersSection } from '@/components/PapersSection';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const TABS: { id: Tab; label: string; icon: typeof Brain }[] = [
  { id: 'quiz', label: 'Quiz', icon: Brain },
  { id: 'notes', label: 'Notes', icon: NotebookPen },
  { id: 'buddy', label: 'AI Buddy', icon: Sparkles },
  { id: 'timetable', label: 'Timetable', icon: CalendarDays },
  { id: 'results', label: 'My Results', icon: BarChart3 },
  { id: 'assignments', label: 'Assignments', icon: CheckSquare },
  { id: 'papers', label: 'Past Papers', icon: FileText },
];

function App() {
  const [mode, setMode] = useLocalStorage<Mode>('prepbuddy.mode', 'MDCAT');
  const [tab, setTab] = useState<Tab>('quiz');
  // Hand a question from the Quiz review screen to the AI Buddy
  const [pendingQuestion, setPendingQuestion] = useState<QuizQuestion | null>(null);
  const [pendingSelected, setPendingSelected] = useState<number | null>(null);

  const handleAskBuddy = (q: QuizQuestion, selectedIndex: number) => {
    setPendingQuestion(q);
    setPendingSelected(selectedIndex);
    setTab('buddy');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto flex min-h-screen max-w-md flex-col bg-slate-50">
        {/* Header with mode toggle */}
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
          <div className="flex items-center justify-between px-5 pt-4 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/25">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-base font-extrabold leading-none text-slate-900">PrepBuddy AI</h1>
                <p className="mt-0.5 text-[10px] font-medium text-slate-400">MDCAT & ECAT Prep</p>
              </div>
            </div>

            {/* Mode toggle */}
            <div className="flex rounded-xl bg-slate-100 p-1">
              {MODES.map((m) => {
                const ModeIcon = m === 'MDCAT' ? Stethoscope : Wrench;
                const active = mode === m;
                return (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={[
                      'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition',
                      active
                        ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                        : 'text-slate-500 hover:text-slate-700',
                    ].join(' ')}
                  >
                    <ModeIcon className="h-3.5 w-3.5" /> {m}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab navigation — horizontally scrollable */}
          <div className="flex gap-1 overflow-x-auto scrollbar-hide px-3 pb-2.5">
            {TABS.map((t) => {
              const Icon = t.icon;
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={[
                    'flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition',
                    active
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                      : 'text-slate-500 hover:bg-slate-100',
                  ].join(' ')}
                >
                  <Icon className="h-4 w-4" /> {t.label}
                </button>
              );
            })}
          </div>
        </header>

        <main className="flex-1 px-5 pt-5 pb-10">
          {tab === 'quiz' && <QuizSection mode={mode} onAskBuddy={handleAskBuddy} />}
          {tab === 'notes' && <NotesSection mode={mode} />}
          {tab === 'buddy' && (
            <BuddySection
              mode={mode}
              pendingQuestion={pendingQuestion}
              pendingSelected={pendingSelected}
              onConsumePending={() => {
                setPendingQuestion(null);
                setPendingSelected(null);
              }}
            />
          )}
          {tab === 'timetable' && <TimetableSection mode={mode} />}
          {tab === 'results' && <ResultsSection mode={mode} />}
          {tab === 'assignments' && <AssignmentsSection mode={mode} />}
          {tab === 'papers' && <PapersSection mode={mode} />}
        </main>
      </div>
    </div>
  );
}

export default App;
