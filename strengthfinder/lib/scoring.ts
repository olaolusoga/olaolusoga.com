import { StrengthId, AssessmentResult } from "./types";
import { careers } from "./careers";
import { hobbies } from "./hobbies";
import { strengths } from "./strengths";

export function computeTopStrengths(
  scores: Record<StrengthId, number>,
  count = 5
): StrengthId[] {
  return (Object.entries(scores) as [StrengthId, number][])
    .sort(([, a], [, b]) => b - a)
    .slice(0, count)
    .map(([id]) => id);
}

export function getCareerMatches(scores: Record<StrengthId, number>, count = 8) {
  return careers
    .map((c) => ({
      ...c,
      matchScore: c.strengths.reduce((sum, sid) => sum + (scores[sid] ?? 0), 0),
      maxScore: c.strengths.length * 5,
    }))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, count);
}

export function getHobbyMatches(scores: Record<StrengthId, number>, count = 8) {
  return hobbies
    .map((h) => ({
      ...h,
      matchScore: h.strengths.reduce((sum, sid) => sum + (scores[sid] ?? 0), 0),
      maxScore: h.strengths.length * 5,
    }))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, count);
}

export function encodeResults(result: AssessmentResult): string {
  try {
    return btoa(encodeURIComponent(JSON.stringify(result)));
  } catch {
    return "";
  }
}

export function decodeResults(encoded: string): AssessmentResult | null {
  try {
    return JSON.parse(decodeURIComponent(atob(encoded)));
  } catch {
    return null;
  }
}

export function computeGrowth(
  older: Record<StrengthId, number>,
  newer: Record<StrengthId, number>
): Record<StrengthId, number> {
  const result = {} as Record<StrengthId, number>;
  for (const s of strengths) {
    result[s.id] = (newer[s.id] ?? 0) - (older[s.id] ?? 0);
  }
  return result;
}
