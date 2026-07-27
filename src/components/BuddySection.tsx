import { useEffect, useState } from 'react';
import { Lightbulb, Loader2, Sparkles } from 'lucide-react';
import type { Mode, QuizQuestion } from '@/types';
import {
  buildFakeResponse,
  detectLanguage,
  explainWithGemini,
  hasGeminiKey,
} from '@/lib/buddyEngine';

interface BuddySectionProps {
  mode: Mode;
  pendingQuestion: QuizQuestion | null;
  pendingSelected: number | null;
  onConsumePending: () => void;
}

interface BuddyResponseState {
  text: string;
  isUrdu: boolean;
  isSample: boolean;
}

function isUrduText(s: string): boolean {
  return /[\u0600-\u06FF]/.test(s);
}

export function BuddySection({ mode, pendingQuestion, pendingSelected, onConsumePending }: BuddySectionProps) {
  const [question, setQuestion] = useState('');
  const [yourAnswer, setYourAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<BuddyResponseState | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!pendingQuestion) return;
    setQuestion(pendingQuestion.question);
    setYourAnswer(pendingSelected != null ? pendingQuestion.options[pendingSelected] ?? '' : '');
    setCorrectAnswer(pendingQuestion.options[pendingQuestion.correctIndex] ?? '');
    setResponse(null);
    setError(null);
    onConsumePending();
  }, [pendingQuestion, pendingSelected, onConsumePending]);

  const handleExplain = async () => {
    if (!question.trim() || !yourAnswer.trim() || !correctAnswer.trim()) {
      setError('Please fill in the question, your answer, and the correct answer.');
      setResponse(null);
      return;
    }
    setError(null);
    setResponse(null);
    setLoading(true);

    try {
      if (hasGeminiKey()) {
        const text = await explainWithGemini(mode, question, yourAnswer, correctAnswer);
        setResponse({ text, isUrdu: detectLanguage(text) === 'ur', isSample: false });
      } else {
        await new Promise((r) => setTimeout(r, 900));
        const fake = buildFakeResponse(mode, question, yourAnswer, correctAnswer);
        setResponse({ text: fake.text, isUrdu: fake.isUrdu, isSample: true });
      }
    } catch {
      setError('Could not reach the AI service. Showing a sample explanation instead.');
      const fake = buildFakeResponse(mode, question, yourAnswer, correctAnswer);
      setResponse({ text: fake.text, isUrdu: fake.isUrdu, isSample: true });
    } finally {
      setLoading(false);
    }
  };

  const taCls = (v: string) =>
    [
      'w-full resize-y rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 ring-1 ring-slate-200 transition placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500',
      isUrduText(v) ? 'font-urdu text-right text-base' : '',
    ].join(' ');

  return (
    <div className="animate-fade-in">
      <div className="mb-5 rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 p-6 text-white shadow-lg shadow-brand-600/20">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" /> {mode} Tutor
        </div>
        <h1 className="text-2xl font-extrabold leading-tight">Ask PrepBuddy AI</h1>
        <p className="mt-1.5 text-sm text-brand-100">
          Paste a question you got wrong — I'll explain it simply, in English or Urdu, with examples from {mode}.
        </p>
      </div>

      <div className="space-y-3">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500">
            1. Question
          </label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={3}
            placeholder="Paste the full question here..."
            dir={isUrduText(question) ? 'rtl' : 'ltr'}
            className={taCls(question)}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500">
            2. Your Answer
          </label>
          <textarea
            value={yourAnswer}
            onChange={(e) => setYourAnswer(e.target.value)}
            rows={2}
            placeholder="The answer you chose..."
            dir={isUrduText(yourAnswer) ? 'rtl' : 'ltr'}
            className={taCls(yourAnswer)}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500">
            3. Correct Answer
          </label>
          <textarea
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            rows={2}
            placeholder="The right answer..."
            dir={isUrduText(correctAnswer) ? 'rtl' : 'ltr'}
            className={taCls(correctAnswer)}
          />
        </div>

        {error && (
          <p className="rounded-xl bg-red-50 px-3 py-2 text-xs font-semibold text-red-600">{error}</p>
        )}

        <button
          onClick={handleExplain}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition active:scale-[0.99] disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Thinking...
            </>
          ) : (
            <>
              <Lightbulb className="h-4 w-4" /> Explain My Mistake
            </>
          )}
        </button>

        {loading && (
          <div className="animate-fade-in rounded-2xl bg-white p-4 text-sm font-medium text-slate-500 ring-1 ring-slate-100">
            PrepBuddy AI is thinking...
          </div>
        )}

        {response && !loading && (
          <div className="animate-slide-up rounded-2xl bg-white p-5 ring-1 ring-slate-100">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900">PrepBuddy AI</p>
                {response.isSample && (
                  <p className="text-[10px] font-semibold text-amber-600">
                    Sample response — add an API key for live AI
                  </p>
                )}
              </div>
            </div>
            <p
              className={[
                'whitespace-pre-wrap text-sm leading-relaxed text-slate-700',
                response.isUrdu ? 'font-urdu text-right text-base' : '',
              ].join(' ')}
              dir={response.isUrdu ? 'rtl' : 'ltr'}
            >
              {response.text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
