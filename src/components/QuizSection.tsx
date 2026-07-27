import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock,
  Flag,
  Info,
  RotateCcw,
  Sparkles,
  Trophy,
  XCircle,
} from 'lucide-react';
import type { Mode, QuizAnswerRecord, QuizQuestion, QuizResult } from '@/types';
import { MODE_CONFIGS } from '@/data/modes';
import { pickQuiz } from '@/data/questions';
import { ProgressRing } from '@/components/ProgressRing';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface QuizSectionProps {
  mode: Mode;
  onAskBuddy: (q: QuizQuestion, selectedIndex: number) => void;
}

type Stage = 'select' | 'running' | 'result';

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function QuizSection({ mode, onAskBuddy }: QuizSectionProps) {
  const cfg = MODE_CONFIGS[mode];
  const [stage, setStage] = useState<Stage>('select');
  const [subject, setSubject] = useState<string | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswerRecord[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(cfg.timePerQuestion);
  const [startTime, setStartTime] = useState(0);
  const [results, setResults] = useLocalStorage<QuizResult[]>(`prepbuddy.${mode}.quizResults`, []);
  const timerRef = useRef<number | null>(null);

  // Reset to subject-select whenever mode changes
  useEffect(() => {
    setStage('select');
    setSubject(null);
    setQuestions([]);
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setTimeLeft(cfg.timePerQuestion);
  }, [mode, cfg.timePerQuestion]);

  const q = questions[current];

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const recordAnswer = useCallback(
    (selectedIndex: number | null, timedOut: boolean) => {
      if (!q) return;
      const record: QuizAnswerRecord = {
        questionId: q.id,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        selectedIndex,
        subject: q.subject,
        timedOut,
      };
      setAnswers((prev) => [...prev, record]);
    },
    [q, setAnswers]
  );

  const advance = useCallback(() => {
    stopTimer();
    if (current + 1 >= questions.length) {
      setStage('result');
      return;
    }
    setCurrent((c) => c + 1);
    setSelected(null);
    setTimeLeft(cfg.timePerQuestion);
  }, [current, questions.length, stopTimer, cfg.timePerQuestion]);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
  };

  const handleConfirm = () => {
    if (selected === null) return;
    recordAnswer(selected, false);
    advance();
  };

  const handleTimeout = useCallback(() => {
    recordAnswer(null, true);
    advance();
  }, [recordAnswer, advance]);

  useEffect(() => {
    if (stage !== 'running') return;
    stopTimer();
    timerRef.current = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          stopTimer();
          handleTimeout();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return stopTimer;
  }, [stage, current, stopTimer, handleTimeout]);

  useEffect(() => {
    if (stage !== 'result' || !subject || answers.length === 0) return;
    const score = answers.reduce(
      (acc, a) => acc + (a.selectedIndex === a.correctIndex ? 1 : 0),
      0
    );
    const result: QuizResult = {
      id: `${Date.now()}`,
      mode,
      subject,
      score,
      total: answers.length,
      marks: score * cfg.marksPerQuestion,
      totalMarks: answers.length * cfg.marksPerQuestion,
      date: new Date().toISOString(),
      durationSec: Math.round((Date.now() - startTime) / 1000),
      answers,
    };
    setResults((prev) => [result, ...prev].slice(0, 30));
  }, [stage, subject, answers, startTime, mode, cfg.marksPerQuestion, setResults]);

  const startQuiz = (subj: string) => {
    const picked = pickQuiz(mode, subj, cfg.questionCount);
    setSubject(subj);
    setQuestions(picked);
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setTimeLeft(cfg.timePerQuestion);
    setStartTime(Date.now());
    setStage('running');
  };

  const restart = () => {
    setStage('select');
    setSubject(null);
    setQuestions([]);
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
  };

  if (stage === 'select') {
    return <SubjectSelect mode={mode} onPick={startQuiz} results={results} />;
  }

  if (stage === 'running' && q) {
    const progress = (current + 1) / questions.length;
    const timeProgress = timeLeft / cfg.timePerQuestion;
    const timeColor = timeLeft <= 15 ? '#ef4444' : timeLeft <= 30 ? '#f59e0b' : '#2563eb';
    return (
      <div className="animate-fade-in">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {subject}
            </span>
            <span className="text-xs font-medium text-slate-400">
              {current + 1} / {questions.length}
            </span>
          </div>
          <ProgressRing size={48} stroke={4} progress={timeProgress} color={timeColor}>
            <span className={`text-xs font-bold ${timeLeft <= 15 ? 'text-red-500' : 'text-slate-700'}`}>
              {timeLeft}
            </span>
          </ProgressRing>
        </div>

        <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600 transition-all duration-500"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div key={q.id} className="animate-scale-in rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-600">
            <Clock className="h-3.5 w-3.5" /> {timeLeft}s left
          </div>
          <h2 className="mb-5 text-lg font-bold leading-snug text-slate-900">{q.question}</h2>

          <div className="space-y-3">
            {q.options.map((opt, idx) => {
              const isSelected = selected === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={selected !== null}
                  className={[
                    'flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all',
                    isSelected
                      ? 'border-brand-600 bg-brand-50 text-brand-900 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-brand-300 hover:bg-brand-50/40',
                    selected !== null ? 'cursor-default' : 'active:scale-[0.99]',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                      isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-500',
                    ].join(' ')}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 text-sm font-medium">{opt}</span>
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <div className="mt-5 animate-fade-in">
              <button
                onClick={handleConfirm}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition active:scale-[0.99]"
              >
                {current + 1 >= questions.length ? 'Finish Quiz' : 'Next Question'}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (stage === 'result') {
    const score = answers.reduce(
      (acc, a) => acc + (a.selectedIndex === a.correctIndex ? 1 : 0),
      0
    );
    const pct = Math.round((score / answers.length) * 100);
    const marks = score * cfg.marksPerQuestion;
    const totalMarks = answers.length * cfg.marksPerQuestion;
    const duration = Math.round((Date.now() - startTime) / 1000);
    return (
      <ResultScreen
        mode={mode}
        subject={subject!}
        score={score}
        total={answers.length}
        pct={pct}
        marks={marks}
        totalMarks={totalMarks}
        duration={duration}
        answers={answers}
        onRestart={restart}
        onAskBuddy={onAskBuddy}
      />
    );
  }

  return null;
}

function SubjectSelect({
  mode,
  onPick,
  results,
}: {
  mode: Mode;
  onPick: (s: string) => void;
  results: QuizResult[];
}) {
  const cfg = MODE_CONFIGS[mode];
  const bestScore = useMemo(() => {
    const best: Record<string, number> = {};
    for (const r of results) {
      best[r.subject] = Math.max(best[r.subject] ?? 0, r.marks);
    }
    return best;
  }, [results]);

  const lastResult = results[0];

  return (
    <div className="animate-fade-in">
      {/* Info banner */}
      <div className="mb-4 flex items-start gap-2.5 rounded-2xl bg-brand-50 p-3.5 text-xs font-medium text-brand-800 ring-1 ring-brand-100">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
        <p>
          Note: {cfg.questionCount} Q practice. {mode} = {cfg.totalMarks} Marks. Score is multiplied
          (×{cfg.marksPerQuestion}).
        </p>
      </div>

      <div className="mb-6 rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 p-6 text-white shadow-lg shadow-brand-600/20">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" /> {mode} Timed Quiz
        </div>
        <h1 className="text-2xl font-extrabold leading-tight">Test your knowledge</h1>
        <p className="mt-1.5 text-sm text-brand-100">
          {cfg.questionCount} questions · {cfg.timePerQuestion}s each · {cfg.marksPerQuestion} marks per Q
        </p>
      </div>

      {lastResult && (
        <div className="mb-5 rounded-2xl bg-white p-4 ring-1 ring-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Last quiz</p>
              <p className="text-sm font-bold text-slate-800">
                {lastResult.subject} · {lastResult.marks}/{lastResult.totalMarks} marks
              </p>
            </div>
            <Trophy className="h-5 w-5 text-amber-400" />
          </div>
        </div>
      )}

      <h2 className="mb-3 px-1 text-sm font-bold uppercase tracking-wide text-slate-500">Pick a subject</h2>
      <div className="grid grid-cols-2 gap-3">
        {cfg.subjects.map((subj) => (
          <button
            key={subj}
            onClick={() => onPick(subj)}
            className="group relative overflow-hidden rounded-2xl bg-white p-4 text-left ring-1 ring-slate-100 transition-all hover:-translate-y-0.5 hover:ring-brand-200 active:scale-[0.98]"
          >
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Brain className="h-5 w-5" />
            </div>
            <p className="text-sm font-bold text-slate-800">{subj}</p>
            <p className="mt-0.5 text-xs text-slate-400">{cfg.questionCount} questions</p>
            {bestScore[subj] !== undefined && (
              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-600">
                <Trophy className="h-3 w-3" /> Best: {bestScore[subj]}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function ResultScreen({
  mode,
  subject,
  score,
  total,
  pct,
  marks,
  totalMarks,
  duration,
  answers,
  onRestart,
  onAskBuddy,
}: {
  mode: Mode;
  subject: string;
  score: number;
  total: number;
  pct: number;
  marks: number;
  totalMarks: number;
  duration: number;
  answers: QuizAnswerRecord[];
  onRestart: () => void;
  onAskBuddy: (q: QuizQuestion, selectedIndex: number) => void;
}) {
  const [showReview, setShowReview] = useState(false);
  const message =
    pct >= 80
      ? 'Outstanding! You crushed it.'
      : pct >= 60
      ? 'Good job — solid effort!'
      : pct >= 40
      ? 'Keep going — review and retry.'
      : 'Every expert started here. Let\u2019s learn!';

  return (
    <div className="animate-slide-up">
      <div className="mb-5 rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 p-7 text-center text-white shadow-lg shadow-brand-600/20">
        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
          <Trophy className="h-8 w-8 text-amber-300" />
        </div>
        <p className="text-sm font-semibold text-brand-100">{mode} · {subject}</p>
        <p className="mt-1 text-5xl font-extrabold tracking-tight">
          {marks}
          <span className="text-2xl text-brand-200">/{totalMarks}</span>
        </p>
        <p className="mt-1 text-sm font-medium text-brand-200">{score}/{total} correct</p>
        <p className="mt-2 text-sm font-medium text-brand-100">{message}</p>
        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-brand-100">
          <span className="inline-flex items-center gap-1">
            <Flag className="h-3.5 w-3.5" /> {pct}% accuracy
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {formatTime(duration)}
          </span>
        </div>
      </div>

      <div className="mb-5 flex gap-3">
        <button
          onClick={onRestart}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white py-3.5 text-sm font-bold text-slate-700 ring-1 ring-slate-200 transition active:scale-[0.99]"
        >
          <RotateCcw className="h-4 w-4" /> New Quiz
        </button>
        <button
          onClick={() => setShowReview((s) => !s)}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition active:scale-[0.99]"
        >
          {showReview ? 'Hide Review' : 'Review Answers'}
        </button>
      </div>

      {showReview && (
        <div className="space-y-3 animate-fade-in">
          {answers.map((a, idx) => {
            const correct = a.selectedIndex === a.correctIndex;
            const timedOut = a.timedOut;
            return (
              <div key={idx} className="rounded-2xl bg-white p-4 ring-1 ring-slate-100">
                <div className="mb-3 flex items-start gap-2">
                  <div className="mt-0.5">
                    {correct ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                  <p className="flex-1 text-sm font-semibold text-slate-800">{a.question}</p>
                </div>
                <div className="space-y-1.5 pl-7">
                  {a.options.map((opt, oi) => {
                    const isCorrect = oi === a.correctIndex;
                    const isPicked = oi === a.selectedIndex;
                    return (
                      <div
                        key={oi}
                        className={[
                          'flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium',
                          isCorrect
                            ? 'bg-emerald-50 text-emerald-700'
                            : isPicked
                            ? 'bg-red-50 text-red-600'
                            : 'text-slate-500',
                        ].join(' ')}
                      >
                        <span className="font-bold">{String.fromCharCode(65 + oi)}.</span>
                        <span className="flex-1">{opt}</span>
                        {isCorrect && <CheckCircle2 className="h-3.5 w-3.5" />}
                        {isPicked && !isCorrect && <XCircle className="h-3.5 w-3.5" />}
                      </div>
                    );
                  })}
                </div>
                {timedOut && (
                  <p className="mt-2 pl-7 text-xs font-semibold text-amber-600">⏱ Ran out of time</p>
                )}
                {!correct && a.selectedIndex !== null && (
                  <button
                    onClick={() => {
                      const q: QuizQuestion = {
                        id: a.questionId,
                        mode,
                        subject: a.subject,
                        question: a.question,
                        options: a.options,
                        correctIndex: a.correctIndex,
                        explanation: '',
                        explanationUrdu: '',
                        memoryTip: '',
                        memoryTipUrdu: '',
                      };
                      onAskBuddy(q, a.selectedIndex!);
                    }}
                    className="mt-3 ml-7 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700 transition hover:bg-brand-100"
                  >
                    <Sparkles className="h-3.5 w-3.5" /> Ask AI Buddy to explain
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
