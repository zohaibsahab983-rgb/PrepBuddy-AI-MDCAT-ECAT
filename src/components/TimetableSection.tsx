import { useEffect, useMemo, useState } from 'react';
import { CalendarDays, Clock, Plus, Sparkles, Trash2, Wand2 } from 'lucide-react';
import type { Mode, TimetableEntry } from '@/types';
import { DAYS, MODE_CONFIGS } from '@/data/modes';
import { useLocalStorage } from '@/hooks/useLocalStorage';

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

interface TimetableSectionProps {
  mode: Mode;
}

/**
 * Mode-specific default study templates.
 * MDCAT leans toward Biology + Chemistry slots.
 * ECAT leans toward Mathematics + Physics slots.
 */
function defaultTemplate(mode: Mode): TimetableEntry[] {
  const cfg = MODE_CONFIGS[mode];
  const mk = (day: string, time: string, subject: string, topic: string): TimetableEntry => ({
    id: uid(),
    mode,
    day,
    time,
    subject,
    topic,
  });

  if (mode === 'MDCAT') {
    return [
      mk('Monday', '09:00', 'Biology', 'Cell structure & function'),
      mk('Monday', '14:00', 'Chemistry', 'Stoichiometry'),
      mk('Tuesday', '09:00', 'Biology', 'Human physiology'),
      mk('Tuesday', '14:00', 'Physics', 'Mechanics'),
      mk('Wednesday', '09:00', 'Chemistry', 'Chemical bonding'),
      mk('Wednesday', '14:00', 'Biology', 'Genetics'),
      mk('Thursday', '09:00', 'Biology', 'Ecology'),
      mk('Thursday', '14:00', 'Physics', 'Electromagnetism'),
      mk('Friday', '09:00', 'Chemistry', 'Organic chemistry'),
      mk('Friday', '14:00', 'English', 'Grammar & vocabulary'),
      mk('Saturday', '10:00', 'General Knowledge', 'Pakistan affairs'),
      mk('Sunday', '10:00', 'Biology', 'Weekly revision'),
    ];
  }

  return [
    mk('Monday', '09:00', 'Mathematics', 'Differentiation'),
    mk('Monday', '14:00', 'Physics', 'Mechanics'),
    mk('Tuesday', '09:00', 'Mathematics', 'Integration'),
    mk('Tuesday', '14:00', 'Chemistry', 'Stoichiometry'),
    mk('Wednesday', '09:00', 'Physics', 'Electromagnetism'),
    mk('Wednesday', '14:00', 'Mathematics', 'Trigonometry'),
    mk('Thursday', '09:00', 'Mathematics', 'Vectors'),
    mk('Thursday', '14:00', 'Physics', 'Optics'),
    mk('Friday', '09:00', 'Chemistry', 'Chemical bonding'),
    mk('Friday', '14:00', 'English', 'Grammar & vocabulary'),
    mk('Saturday', '10:00', 'Logical Reasoning', 'Series & analogies'),
    mk('Sunday', '10:00', 'Mathematics', 'Weekly revision'),
  ];
}

export function TimetableSection({ mode }: TimetableSectionProps) {
  const cfg = MODE_CONFIGS[mode];
  const subjects = cfg.subjects;
  const [entries, setEntries] = useLocalStorage<TimetableEntry[]>(`prepbuddy.${mode}.timetable`, []);
  const [day, setDay] = useState<string>(DAYS[0]);
  const [time, setTime] = useState('09:00');
  const [subject, setSubject] = useState<string>(subjects[0]);
  const [topic, setTopic] = useState('');

  useEffect(() => {
    setSubject(subjects[0]);
  }, [mode, subjects[0]]);

  const grouped = useMemo(() => {
    const map: Record<string, TimetableEntry[]> = {};
    for (const d of DAYS) map[d] = [];
    for (const e of entries) {
      if (!map[e.day]) map[e.day] = [];
      map[e.day].push(e);
    }
    for (const d of DAYS) {
      map[d].sort((a, b) => a.time.localeCompare(b.time));
    }
    return map;
  }, [entries]);

  const handleAdd = () => {
    if (!topic.trim()) return;
    const entry: TimetableEntry = {
      id: uid(),
      mode,
      day,
      time,
      subject,
      topic: topic.trim(),
    };
    setEntries((prev) => [...prev, entry]);
    setTopic('');
  };

  const handleDelete = (id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  };

  const handleLoadTemplate = () => {
    setEntries(defaultTemplate(mode));
  };

  const handleClear = () => {
    setEntries([]);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Timetable</h1>
          <p className="text-sm text-slate-400">{mode} study plan</p>
        </div>
        <button
          onClick={handleLoadTemplate}
          className="flex items-center gap-1.5 rounded-xl bg-brand-50 px-3 py-2 text-xs font-bold text-brand-700 transition hover:bg-brand-100"
        >
          <Wand2 className="h-3.5 w-3.5" /> Template
        </button>
      </div>

      {entries.length === 0 && (
        <div className="mb-5 flex flex-col items-center rounded-2xl bg-brand-50 p-5 text-center ring-1 ring-brand-100">
          <Sparkles className="mb-2 h-6 w-6 text-brand-600" />
          <p className="text-sm font-semibold text-brand-800">
            {mode === 'MDCAT'
              ? 'Load the MDCAT template — it focuses on Biology and Chemistry.'
              : 'Load the ECAT template — it focuses on Mathematics and Physics.'}
          </p>
          <button
            onClick={handleLoadTemplate}
            className="mt-3 rounded-xl bg-brand-600 px-4 py-2 text-xs font-bold text-white transition active:scale-95"
          >
            Load {mode} Template
          </button>
        </div>
      )}

      {/* Add entry form */}
      <div className="mb-6 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-600">Add Study Slot</h2>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Day</label>
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full appearance-none rounded-xl border-0 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                {DAYS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full appearance-none rounded-xl border-0 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Subject</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full appearance-none rounded-xl border-0 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {subjects.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Topic</label>
            <input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Cell biology, Vectors..."
              className="w-full rounded-xl border-0 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-800 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <button
            onClick={handleAdd}
            disabled={!topic.trim()}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition active:scale-[0.99] disabled:opacity-50"
          >
            <Plus className="h-4 w-4" /> Add Slot
          </button>
        </div>
      </div>

      {/* Timetable grouped by day */}
      {entries.length > 0 ? (
        <div className="space-y-4">
          {DAYS.map((d) => {
            const dayEntries = grouped[d] ?? [];
            if (dayEntries.length === 0) return null;
            return (
              <div key={d}>
                <div className="mb-2 flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-brand-600" />
                  <h3 className="text-sm font-bold text-slate-800">{d}</h3>
                  <span className="text-xs font-medium text-slate-400">({dayEntries.length})</span>
                </div>
                <div className="space-y-2">
                  {dayEntries.map((e) => (
                    <div
                      key={e.id}
                      className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-slate-100"
                    >
                      <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                        <Clock className="h-3.5 w-3.5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900">{e.time}</span>
                          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-700">
                            {e.subject}
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm text-slate-600">{e.topic}</p>
                      </div>
                      <button
                        onClick={() => handleDelete(e.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 transition hover:bg-red-50 hover:text-red-500"
                        aria-label="Delete slot"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {entries.length > 0 && (
            <button
              onClick={handleClear}
              className="mt-2 w-full rounded-xl bg-red-50 py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-100"
            >
              Clear All Slots
            </button>
          )}
        </div>
      ) : (
        <div className="mt-2 flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-50 text-brand-500">
            <CalendarDays className="h-7 w-7" />
          </div>
          <h3 className="text-base font-bold text-slate-800">No slots yet</h3>
          <p className="mt-1 max-w-xs text-sm text-slate-400">
            Add a study slot above or load the {mode} template to get started.
          </p>
        </div>
      )}
    </div>
  );
}
