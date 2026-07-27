import { useEffect, useMemo, useState } from 'react';
import { BookOpen, Pencil, Save, Search, Trash2, X } from 'lucide-react';
import type { Mode, Note } from '@/types';
import { MODE_CONFIGS } from '@/data/modes';
import { useLocalStorage } from '@/hooks/useLocalStorage';

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function isUrduText(s: string): boolean {
  return /[\u0600-\u06FF]/.test(s);
}

interface NotesSectionProps {
  mode: Mode;
}

export function NotesSection({ mode }: NotesSectionProps) {
  const cfg = MODE_CONFIGS[mode];
  const subjects = cfg.subjects;
  const [notes, setNotes] = useLocalStorage<Note[]>(`prepbuddy.${mode}.notes`, []);
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState<string>(subjects[0]);
  const [body, setBody] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  // Reset subject selection whenever the mode (and thus subjects) change
  useEffect(() => {
    setSubject(subjects[0]);
  }, [mode, subjects[0]]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return notes
      .filter(
        (n) =>
          !q ||
          n.title.toLowerCase().includes(q) ||
          n.body.toLowerCase().includes(q) ||
          n.subject.toLowerCase().includes(q)
      )
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }, [notes, search]);

  const resetForm = () => {
    setTitle('');
    setSubject(subjects[0]);
    setBody('');
    setEditingId(null);
  };

  const handleSave = () => {
    if (!title.trim() && !body.trim()) return;
    const now = new Date().toISOString();
    if (editingId) {
      setNotes((prev) =>
        prev.map((n) =>
          n.id === editingId
            ? {
                ...n,
                title: title.trim(),
                subject,
                body: body.trim(),
                isUrdu: isUrduText(body),
                updatedAt: now,
              }
            : n
        )
      );
    } else {
      const note: Note = {
        id: uid(),
        mode,
        subject,
        title: title.trim(),
        body: body.trim(),
        isUrdu: isUrduText(body),
        createdAt: now,
        updatedAt: now,
      };
      setNotes((prev) => [note, ...prev]);
    }
    resetForm();
  };

  const handleEdit = (n: Note) => {
    setEditingId(n.id);
    setTitle(n.title);
    setSubject(n.subject);
    setBody(n.body);
  };

  const handleDelete = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    if (editingId === id) resetForm();
  };

  const bodyIsUrdu = isUrduText(body);

  return (
    <div className="animate-fade-in">
      <h1 className="mb-4 text-2xl font-extrabold text-slate-900">My Notes</h1>

      <div className="relative mb-5">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search notes..."
          className="w-full rounded-2xl border-0 bg-white py-3.5 pl-11 pr-4 text-sm font-medium text-slate-800 ring-1 ring-slate-200 transition placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <div className="mb-6 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wide text-brand-600">
            {editingId ? 'Edit Note' : 'New Note'}
          </h2>
          {editingId && (
            <button
              onClick={resetForm}
              className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-slate-600"
            >
              <X className="h-3.5 w-3.5" /> Cancel
            </button>
          )}
        </div>

        <div className="space-y-3">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">
              Note Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Cell Biology Summary"
              className="w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">
              Subject
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full appearance-none rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">
              Content
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Type your notes in English or Urdu..."
              dir={bodyIsUrdu ? 'rtl' : 'ltr'}
              className={[
                'min-h-[140px] w-full resize-y rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-800 ring-1 ring-slate-200 transition placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500',
                bodyIsUrdu ? 'font-urdu text-right text-base' : '',
              ].join(' ')}
            />
            <p className="mt-1.5 text-[11px] font-medium text-slate-400">
              {bodyIsUrdu ? 'Urdu detected — typing right-to-left' : 'Tip: you can type in Urdu or English'}
            </p>
          </div>

          <button
            onClick={handleSave}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition active:scale-[0.99]"
          >
            <Save className="h-4 w-4" /> {editingId ? 'Update Note' : 'Save Note'}
          </button>
        </div>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">Saved Notes</h2>
        <span className="text-xs font-semibold text-slate-400">{filtered.length}</span>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-6 flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-50 text-brand-500">
            <BookOpen className="h-7 w-7" />
          </div>
          <h3 className="text-base font-bold text-slate-800">
            {notes.length > 0 ? 'No matching notes' : 'No notes yet'}
          </h3>
          <p className="mt-1 max-w-xs text-sm text-slate-400">
            {notes.length > 0
              ? 'Try a different search.'
              : 'Fill the form above and tap Save Note to get started.'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((n) => {
            const urdu = isUrduText(n.body) || n.isUrdu;
            return (
              <div
                key={n.id}
                className="rounded-2xl bg-white p-4 ring-1 ring-slate-100 transition hover:ring-brand-200"
              >
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-700">
                    <BookOpen className="h-3 w-3" /> {n.subject}
                  </span>
                  <span className="text-[10px] font-medium text-slate-400">
                    {new Date(n.updatedAt).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <h3 className="mb-1 line-clamp-1 text-sm font-bold text-slate-900">
                  {n.title || 'Untitled'}
                </h3>
                <p
                  className={[
                    'line-clamp-3 text-xs text-slate-500',
                    urdu ? 'font-urdu text-right' : '',
                  ].join(' ')}
                  dir={urdu ? 'rtl' : 'ltr'}
                >
                  {n.body || 'No content yet.'}
                </p>

                <div className="mt-3 flex gap-2 border-t border-slate-100 pt-3">
                  <button
                    onClick={() => handleEdit(n)}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand-50 py-2 text-xs font-bold text-brand-700 transition hover:bg-brand-100"
                  >
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(n.id)}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-red-50 py-2 text-xs font-bold text-red-600 transition hover:bg-red-100"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
