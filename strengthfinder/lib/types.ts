export type StrengthId =
  | "creativity" | "curiosity" | "judgment" | "love-of-learning" | "perspective"
  | "bravery" | "perseverance" | "honesty" | "zest"
  | "love" | "kindness" | "social-intelligence"
  | "teamwork" | "fairness" | "leadership"
  | "forgiveness" | "humility" | "prudence" | "self-regulation"
  | "appreciation" | "gratitude" | "hope" | "humor" | "spirituality";

export type Virtue =
  | "wisdom" | "courage" | "humanity" | "justice" | "temperance" | "transcendence";

export interface Strength {
  id: StrengthId;
  name: string;
  virtue: Virtue;
  tagline: string;
  description: string;
  question: string;
}

export interface Career {
  id: string;
  title: string;
  description: string;
  strengths: StrengthId[];
  icon: string;
  salary: string;
  growth: string;
}

export interface Hobby {
  id: string;
  name: string;
  description: string;
  strengths: StrengthId[];
  icon: string;
  category: string;
}

export interface AssessmentResult {
  scores: Record<StrengthId, number>;
  completedAt: string;
  version: number;
}

export interface CheckIn {
  date: string;
  scores: Record<StrengthId, number>;
  note?: string;
}

export interface UserData {
  currentAssessment: AssessmentResult | null;
  checkIns: CheckIn[];
}
