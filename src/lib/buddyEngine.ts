import type { BuddyResponse, Language, Mode, QuizQuestion } from '@/types';
import { findQuestionById, questionsForSubject } from '@/data/questions';

// Add VITE_GEMINI_API_KEY to .env
const GEMINI_KEY = (import.meta.env.VITE_GEMINI_API_KEY as string | undefined)?.trim();

export function detectLanguage(text: string): Language {
  if (/[\u0600-\u06FF]/.test(text)) return 'ur';
  const lower = text.toLowerCase();
  if (
    ['urdu', 'اردو', 'roman urdu', 'urdu me', 'urdu mein', 'بناو', 'سمجھاؤ', 'بتاؤ', 'کیوں'].some(
      (h) => lower.includes(h)
    )
  ) {
    return 'ur';
  }
  return 'en';
}

function systemPrompt(mode: Mode): string {
  return `You are PrepBuddy AI. Current mode is ${mode}. Explain mistakes with examples from this test. Reply in Urdu if the question is in Urdu, else English. Keep it short.`;
}

export function buildFakeResponse(
  mode: Mode,
  question: string,
  yourAnswer: string,
  correctAnswer: string
): BuddyResponse {
  const lang = detectLanguage(`${question} ${yourAnswer}`);

  if (lang === 'ur') {
    return {
      isUrdu: true,
      isSample: true,
      text: `کوئی بات نہیں — آئیے ${mode} کے اس سوال سے سیکھیں۔\n\nآپ کا جواب "${yourAnswer || '—'}" غلط تھا کیونکہ یہ ${mode} کے بنیادی تصور سے مطابقت نہیں رکھتا۔\n\nصحیح جواب "${correctAnswer || '—'}" درست ہے کیونکہ یہ اصول کی تعریف سے مکمل مطابقت رکھتا ہے۔ مثال: ایک عام صورت حال تصور کریں جہاں یہی اصول ${mode} میں لاگو ہوتا ہے — وہی منطق آپ کو صحیح جواب تک لے جاتی ہے۔\n\n💡 ٹپ: کلیدی لفظ یا فارمولے کو ایک مختصر جملے سے جوڑ کر یاد رکھیں۔`,
    };
  }

  return {
    isUrdu: false,
    isSample: true,
    text: `No worries — let's learn from this ${mode} question!\n\nYour answer "${yourAnswer || '—'}" was wrong because it doesn't match the core idea being tested in ${mode}.\n\nThe correct answer "${correctAnswer || '—'}" is right because it fits the rule or definition. Example: picture a simple case where that same ${mode} rule applies — the logic leads you straight to the right choice.\n\n💡 Tip: Link the key word or formula to one short sentence so it sticks in your memory.`,
  };
}

export async function explainWithGemini(
  mode: Mode,
  question: string,
  yourAnswer: string,
  correctAnswer: string
): Promise<string> {
  const prompt =
    `${systemPrompt(mode)}\n\n` +
    `Question: ${question}\n` +
    `Student's answer: ${yourAnswer}\n` +
    `Correct answer: ${correctAnswer}`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    }
  );

  if (!res.ok) throw new Error(`Gemini request failed: ${res.status}`);
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  return text || 'Sorry, I could not generate a response. Please try again.';
}

export function hasGeminiKey(): boolean {
  return !!GEMINI_KEY;
}

/**
 * Try to match a pasted question to the question bank for richer explanations.
 */
export function findMatchingQuestion(text: string, mode: Mode): QuizQuestion | null {
  const normalized = text.toLowerCase().replace(/\s+/g, ' ').trim();
  if (normalized.length < 8) return null;

  const pool: QuizQuestion[] = [];
  for (const subject of subjectsForMode(mode)) {
    pool.push(...questionsForSubject(mode, subject));
  }

  for (const q of pool) {
    const qn = q.question.toLowerCase().replace(/\s+/g, ' ').trim();
    if (qn === normalized || normalized.includes(qn) || qn.includes(normalized)) return q;
  }

  const words = normalized.split(' ').filter((w) => w.length > 3);
  let best: { q: QuizQuestion; score: number } | null = null;
  for (const q of pool) {
    const qn = q.question.toLowerCase();
    const hits = words.filter((w) => qn.includes(w)).length;
    if (hits >= 4 && (!best || hits > best.score)) {
      best = { q, score: hits };
    }
  }
  return best?.q ?? null;
}

function subjectsForMode(mode: Mode): string[] {
  if (mode === 'MDCAT') return ['Biology', 'Chemistry', 'Physics', 'English', 'General Knowledge'];
  return ['Mathematics', 'Physics', 'Chemistry', 'English', 'Logical Reasoning'];
}
