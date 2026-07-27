import { useMemo, useState } from 'react';
import { FileText, Filter, Search } from 'lucide-react';
import type { Mode, PastPaper } from '@/types';
import { MODE_CONFIGS, MODES, PAPER_YEARS } from '@/data/modes';
import { papersForMode } from '@/data/pastPapers';

interface PapersSectionProps {
  mode: Mode;
}

export function PapersSection({ mode }: PapersSectionProps) {
  const cfg = MODE_CONFIGS[mode];
  const [testType, setTestType] = useState<Mode>(mode);
  const [subject, setSubject] = useState<string>(cfg.subjects[0]);
  const [year, setYear] = useState<string>('All');
  const [search, setSearch] = useState('');

  const activeSubjects = MODE_CONFIGS[testType].subjects;

  const filtered = useMemo(() => {
    const pool = papersForMode(testType);
    const q = search.toLowerCase().trim();
    return pool
      .filter((p) => subject === 'All' || p.subject === subject)
      .filter((p) => year === 'All' || p.year === year)
      .filter((p) => !q || p.title.toLowerCase().includes(q) || p.subject.toLowerCase().includes(q))
      .sort((a, b) => b.year.localeCompare(a.year));
  }, [testType, subject, year, search]);

  return (
    <div className="animate-fade-in">
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold text-slate-900">Past Paper Vault</h1>
        <p className="text-sm text-slate-400">Practice with previous {testType} papers</p>
      </div>

      {/* Filters */}
      <div className="mb-5 space-y-3 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
        <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
          <Filter className="h-3.5 w-3.5" /> Filters
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Test Type</label>
          <div className="flex gap-2">
            {MODES.map((m) => (
              <button
                key={m}
                onClick={() => {
                  setTestType(m);
                  setSubject('All');
                }}
                className={[
                  'flex-1 rounded-xl py-2.5 text-xs font-bold transition',
                  testType === m
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200',
                ].join(' ')}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Subject</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full appearance-none rounded-xl border-0 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="All">All Subjects</option>
              {activeSubjects.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Year</label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full appearance-none rounded-xl border-0 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="All">All Years</option>
              {PAPER_YEARS.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search papers..."
            className="w-full rounded-xl border-0 bg-slate-50 py-2.5 pl-10 pr-4 text-sm font-medium text-slate-800 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{testType} Papers</h2>
        <span className="text-xs font-semibold text-slate-400">{filtered.length} found</span>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-6 flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-50 text-brand-500">
            <FileText className="h-7 w-7" />
          </div>
          <h3 className="text-base font-bold text-slate-800">No papers found</h3>
          <p className="mt-1 max-w-xs text-sm text-slate-400">
            Try changing the filters above.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((p) => (
            <PaperCard key={p.id} paper={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function PaperCard({ paper }: { paper: PastPaper }) {
  return (
    <a
      href={paper.url}
      className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:ring-brand-200"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <FileText className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold text-slate-900">{paper.title}</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-700">
            {paper.subject}
          </span>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500">
            {paper.year}
          </span>
          <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-600">
            {paper.testType}
          </span>
        </div>
      </div>
    </a>
  );
}
