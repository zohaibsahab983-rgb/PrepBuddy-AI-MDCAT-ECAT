import { useMemo } from 'react';
import { Award, BarChart3, Target, TrendingDown, Trophy } from 'lucide-react';
import type { Mode, QuizResult } from '@/types';
import { MODE_CONFIGS } from '@/data/modes';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface ResultsSectionProps {
  mode: Mode;
}

export function ResultsSection({ mode }: ResultsSectionProps) {
  const cfg = MODE_CONFIGS[mode];
  const [results] = useLocalStorage<QuizResult[]>(`prepbuddy.${mode}.quizResults`, []);

  const stats = useMemo(() => {
    if (results.length === 0) {
      return {
        totalQuizzes: 0,
        totalMarks: 0,
        avgAccuracy: 0,
        bestSubject: null as string | null,
        weakestSubject: null as string | null,
        perSubject: {} as Record<string, { marks: number; total: number; count: number }>,
      };
    }

    const perSubject: Record<string, { marks: number; total: number; count: number }> = {};
    for (const s of cfg.subjects) {
      perSubject[s] = { marks: 0, total: 0, count: 0 };
    }
    for (const r of results) {
      if (!perSubject[r.subject]) perSubject[r.subject] = { marks: 0, total: 0, count: 0 };
      perSubject[r.subject].marks += r.marks;
      perSubject[r.subject].total += r.totalMarks;
      perSubject[r.subject].count += 1;
    }

    let best: { subject: string; pct: number } | null = null;
    let weakest: { subject: string; pct: number } | null = null;
    for (const s of cfg.subjects) {
      const ps = perSubject[s];
      if (ps.count === 0) continue;
      const pct = ps.total > 0 ? (ps.marks / ps.total) * 100 : 0;
      if (!best || pct > best.pct) best = { subject: s, pct };
      if (!weakest || pct < weakest.pct) weakest = { subject: s, pct };
    }

    const totalMarks = results.reduce((acc, r) => acc + r.marks, 0);
    const totalCorrect = results.reduce((acc, r) => acc + r.score, 0);
    const totalQ = results.reduce((acc, r) => acc + r.total, 0);
    const avgAccuracy = totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0;

    return {
      totalQuizzes: results.length,
      totalMarks,
      avgAccuracy,
      bestSubject: best?.subject ?? null,
      weakestSubject: weakest?.subject ?? null,
      perSubject,
    };
  }, [results, cfg.subjects]);

  const maxMarks = Math.max(1, ...Object.values(stats.perSubject).map((p) => p.marks));

  if (results.length === 0) {
    return (
      <div className="animate-fade-in">
        <h1 className="mb-4 text-2xl font-extrabold text-slate-900">My Results</h1>
        <div className="mt-10 flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-50 text-brand-500">
            <BarChart3 className="h-7 w-7" />
          </div>
          <h3 className="text-base font-bold text-slate-800">No {mode} quizzes yet</h3>
          <p className="mt-1 max-w-xs text-sm text-slate-400">
            Take a {mode} quiz and your stats, chart, and weakest subject will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold text-slate-900">My Results</h1>
        <p className="text-sm text-slate-400">{mode} dashboard · {stats.totalQuizzes} quizzes taken</p>
      </div>

      {/* Stat cards */}
      <div className="mb-5 grid grid-cols-2 gap-3">
        <StatCard
          icon={<Trophy className="h-5 w-5" />}
          label="Total Marks"
          value={`${stats.totalMarks}`}
          accent="amber"
        />
        <StatCard
          icon={<Target className="h-5 w-5" />}
          label="Avg Accuracy"
          value={`${stats.avgAccuracy}%`}
          accent="brand"
        />
        <StatCard
          icon={<Award className="h-5 w-5" />}
          label="Best Subject"
          value={stats.bestSubject ?? '—'}
          accent="emerald"
        />
        <StatCard
          icon={<TrendingDown className="h-5 w-5" />}
          label="Weakest Subject"
          value={stats.weakestSubject ?? '—'}
          accent="red"
        />
      </div>

      {/* Bar chart by subject */}
      <div className="mb-5 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500">
          Marks by Subject ({mode})
        </h2>
        <div className="space-y-3">
          {cfg.subjects.map((s) => {
            const ps = stats.perSubject[s];
            const marks = ps?.marks ?? 0;
            const pct = maxMarks > 0 ? (marks / maxMarks) * 100 : 0;
            return (
              <div key={s}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">{s}</span>
                  <span className="font-bold text-slate-500">
                    {marks} {ps?.count ? `· ${ps.count} quiz${ps.count > 1 ? 'es' : ''}` : ''}
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600 transition-all duration-700"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent results list */}
      <h2 className="mb-3 px-1 text-sm font-bold uppercase tracking-wide text-slate-500">Recent Quizzes</h2>
      <div className="space-y-3">
        {results.slice(0, 10).map((r) => {
          const pct = r.totalMarks > 0 ? Math.round((r.marks / r.totalMarks) * 100) : 0;
          return (
            <div key={r.id} className="rounded-2xl bg-white p-4 ring-1 ring-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">{r.subject}</p>
                  <p className="text-xs text-slate-400">
                    {new Date(r.date).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-extrabold text-brand-700">
                    {r.marks}/{r.totalMarks}
                  </p>
                  <p className="text-xs font-medium text-slate-400">{pct}% · {r.score}/{r.total} correct</p>
                </div>
              </div>
              <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={[
                    'h-full rounded-full transition-all',
                    pct >= 60 ? 'bg-emerald-500' : pct >= 40 ? 'bg-amber-500' : 'bg-red-500',
                  ].join(' ')}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: 'amber' | 'brand' | 'emerald' | 'red';
}) {
  const colors: Record<string, string> = {
    amber: 'bg-amber-50 text-amber-600',
    brand: 'bg-brand-50 text-brand-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    red: 'bg-red-50 text-red-500',
  };
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100">
      <div className={`mb-2 flex h-9 w-9 items-center justify-center rounded-xl ${colors[accent]}`}>
        {icon}
      </div>
      <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-0.5 text-sm font-extrabold text-slate-900">{value}</p>
    </div>
  );
}
