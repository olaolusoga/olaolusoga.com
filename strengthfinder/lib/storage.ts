import { UserData, AssessmentResult, CheckIn } from "./types";

const KEY = "flourish_v1";

function defaults(): UserData {
  return { currentAssessment: null, checkIns: [] };
}

export function loadUserData(): UserData {
  if (typeof window === "undefined") return defaults();
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as UserData) : defaults();
  } catch {
    return defaults();
  }
}

export function saveAssessment(result: AssessmentResult): void {
  if (typeof window === "undefined") return;
  const data = loadUserData();
  if (data.currentAssessment) {
    const checkIn: CheckIn = {
      date: data.currentAssessment.completedAt,
      scores: data.currentAssessment.scores,
    };
    data.checkIns = [...data.checkIns, checkIn];
  }
  data.currentAssessment = result;
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function clearUserData(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}

export function daysSince(isoDate: string): number {
  return Math.floor((Date.now() - new Date(isoDate).getTime()) / 86_400_000);
}
