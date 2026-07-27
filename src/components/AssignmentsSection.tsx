import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, Circle, Plus, Trash2 } from 'lucide-react';
import type { Assignment, Mode } from '@/types';
import { MODE_CONFIGS } from '@/data/modes';
import { useLocalStorage } from '@/hooks/useLocalStorage';

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

interface AssignmentsSectionProps {
  mode: Mode;
}

export function AssignmentsSection({ mode }: AssignmentsSectionProps) {
  const cfg = MODE_CONFIGS[mode];
  const subjects = cfg.subjects;
  const [assignments, setAssignments] = useLocalStorage<Assignment[]>(`prepbuddy.${mode}.assignments`, []);
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState<string>(subjects[0]);
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    setSubject(subjects[0]);
  }, [mode, subjects[0]]);

  const sorted = useMemo(() => {
    const pending = assignments
      .filter((a) => !a.done)
      .sort((a, b) => a.dueDate.localeCompare(b.dueDate));
    const done = assignments.filter((a) => a.done).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    return [...pending, ...done];
  }, [assignments]);

  const handleAdd = () => {
    if (!title.trim() || !dueDate) return;
    const a: Assignment = {
      id: uid(),
      mode,
      subject,
      title: title.trim(),
      dueDate,
      done: false,
      createdAt: new Date().toISOString(),
    };
    setAssignments((prev) => [...prev, a]);
    setTitle('');
    setDueDate('');
  };

  const handleToggle = (id: string) => {
    setAssignments((prev) => prev.map((a) => (a.id === id ? { ...a, done: !a.done } : a)));
  };

  const handleDelete = (id: string) => {
    setAssignments((prev) => prev.filter((a) => a.id !== id));
  };

  const pendingCount = assignments.filter((a) => !a.done).length;

  return (
    <div className="animate-fade-in">
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold text-slate-900">Assignments</h1>
        <p className="text-sm text-slate-400">
          {mode} · {pendingCount} pending · {assignments.length} total
        </p>
      </div>

      {/* Add form */}
      <div className="mb-6 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-600">Add Assignment</h2>
        <div className="space-y-3">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Chapter 5 exercises"
              className="w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
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
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full appearance-none rounded-xl border-0 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
          <button
            onClick={handleAdd}
            disabled={!title.trim() || !dueDate}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition active:scale-[0.99] disabled:opacity-50"
          >
            <Plus className="h-4 w-4" /> Add Assignment
          </button>
        </div>
      </div>

      {/* List */}
      {sorted.length === 0 ? (
        <div className="mt-6 flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-50 text-brand-500">
            <Circle className="h-7 w-7" />
          </div>
          <h3 className="text-base font-bold text-slate-800">No assignments yet</h3>
          <p className="mt-1 max-w-xs text-sm text-slate-400">
            Add your {mode} assignments above to track due dates and progress.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {sorted.map((a) => {
            const overdue = !a.done && a.dueDate < new Date().toISOString().slice(0, 10);
            return (
              <div
                key={a.id}
                className={[
                  'flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 transition',
                  a.done ? 'ring-slate-100 opacity-60' : overdue ? 'ring-red-200' : 'ring-slate-100',
                ].join(' ')}
              >
                <button
                  onClick={() => handleToggle(a.id)}
                  className={[
                    'shrink-0 transition',
                    a.done ? 'text-emerald-500' : 'text-slate-300 hover:text-brand-500',
                  ].join(' ')}
                  aria-label={a.done ? 'Mark pending' : 'Mark done'}
                >
                  {a.done ? <CheckCircle2 className="h-6 w-6" /> : <Circle className="h-6 w-6" />}
                </button>
                <div className="flex-1">
                  <p
                    className={[
                      'text-sm font-bold text-slate-900',
                      a.done ? 'line-through' : '',
                    ].join(' ')}
                  >
                    {a.title}
                  </p>
                  <div className="mt-0.5 flex items-center gap-2">
                    <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-700">
                      {a.subject}
                    </span>
                    <span
                      className={[
                        'text-[11px] font-medium',
                        overdue ? 'text-red-500' : 'text-slate-400',
                      ].join(' ')}
                    >
                      Due {new Date(a.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                      {overdue && ' · Overdue'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(a.id)}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-300 transition hover:bg-red-50 hover:text-red-500"
                  aria-label="Delete assignment"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
