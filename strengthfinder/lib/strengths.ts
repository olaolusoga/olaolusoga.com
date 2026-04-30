import { Strength, Virtue } from "./types";

export const strengths: Strength[] = [
  // WISDOM
  {
    id: "creativity",
    name: "Creativity",
    virtue: "wisdom",
    tagline: "Thinking in ways others don't",
    description:
      "You generate novel and productive ideas. You see connections others miss and approach problems from unexpected angles. Originality comes naturally to you.",
    question:
      "When solving a problem, I often think of solutions that others haven't considered.",
  },
  {
    id: "curiosity",
    name: "Curiosity",
    virtue: "wisdom",
    tagline: "Fascinated by the world",
    description:
      "You're genuinely interested in exploring and learning about the world. New topics, ideas, and people energize rather than exhaust you. Rabbit holes are your home.",
    question:
      "I find myself going deep on topics that catch my interest — often much longer than I planned.",
  },
  {
    id: "judgment",
    name: "Critical Thinking",
    virtue: "wisdom",
    tagline: "Weighing every side",
    description:
      "You think things through and examine them from all angles before deciding. Evidence and reasoning guide your views — you don't jump to conclusions.",
    question:
      "Before making decisions, I carefully weigh all sides and challenge my own assumptions.",
  },
  {
    id: "love-of-learning",
    name: "Love of Learning",
    virtue: "wisdom",
    tagline: "Always growing",
    description:
      "You love mastering new skills and gaining new knowledge. The process of learning itself is fulfilling — not just the end result. You're never done.",
    question:
      "I feel genuine excitement when I pick up a new skill or dive into an unfamiliar subject.",
  },
  {
    id: "perspective",
    name: "Perspective",
    virtue: "wisdom",
    tagline: "Seeing the bigger picture",
    description:
      "You can see the world in ways that make sense to others. People come to you for your ability to zoom out, synthesize complexity, and offer wise counsel.",
    question:
      "People often come to me for advice because I can see situations from multiple angles.",
  },

  // COURAGE
  {
    id: "bravery",
    name: "Bravery",
    virtue: "courage",
    tagline: "Doing what's right despite fear",
    description:
      "You speak up for your beliefs and act on your values even when it's uncomfortable. You don't shrink from challenge, threat, or difficult conversations.",
    question:
      "I speak up for what I believe is right even when it's unpopular or puts me at risk.",
  },
  {
    id: "perseverance",
    name: "Perseverance",
    virtue: "courage",
    tagline: "Finishing what you start",
    description:
      "You work hard to finish what you begin. When things get difficult, you double down rather than give up. Completing tasks brings you deep satisfaction.",
    question:
      "When things get hard, I double down rather than give up — setbacks don't stop me.",
  },
  {
    id: "honesty",
    name: "Honesty",
    virtue: "courage",
    tagline: "Authentic above all",
    description:
      "You're authentic and genuine in all you do. You tell the truth even when it's hard, and you live in accordance with your values without compromise.",
    question:
      "Being authentic matters more to me than telling people what they want to hear.",
  },
  {
    id: "zest",
    name: "Zest",
    virtue: "courage",
    tagline: "Full of life and energy",
    description:
      "You approach life with excitement and vitality. You feel fully alive and activated by what you do, and your enthusiasm is contagious to those around you.",
    question:
      "I bring high energy and enthusiasm to almost everything I do — people can feel it.",
  },

  // HUMANITY
  {
    id: "love",
    name: "Love",
    virtue: "humanity",
    tagline: "Valuing deep connection",
    description:
      "You value close relationships deeply — both giving and receiving love matters to you. You invest wholeheartedly in the people you care about.",
    question:
      "Deep, meaningful relationships are one of the most important things in my life.",
  },
  {
    id: "kindness",
    name: "Kindness",
    virtue: "humanity",
    tagline: "Generosity without keeping score",
    description:
      "You enjoy doing favors and helping others. You're generous with your time and care for those in need — often before they even have to ask.",
    question:
      "I regularly go out of my way to help people, often before they even need to ask.",
  },
  {
    id: "social-intelligence",
    name: "Social Intelligence",
    virtue: "humanity",
    tagline: "Reading people with ease",
    description:
      "You're keenly aware of the motives and feelings of others. You know how to fit into social situations and adjust your approach to connect with anyone.",
    question:
      "I can read a room and know exactly how to adjust my energy or message to connect.",
  },

  // JUSTICE
  {
    id: "teamwork",
    name: "Teamwork",
    virtue: "justice",
    tagline: "Better together",
    description:
      "You excel as a member of a group or team. You're loyal, collaborative, and feel genuine satisfaction when a collective effort succeeds.",
    question:
      "I do some of my best work when collaborating with others toward a shared goal.",
  },
  {
    id: "fairness",
    name: "Fairness",
    virtue: "justice",
    tagline: "Equal treatment, always",
    description:
      "You hold a strong belief in treating all people fairly. You try not to let personal feelings bias your decisions, and you act from principle.",
    question:
      "I hold a strong belief that everyone deserves equal treatment — this guides how I act.",
  },
  {
    id: "leadership",
    name: "Leadership",
    virtue: "justice",
    tagline: "Inspiring others forward",
    description:
      "You're skilled at organizing and motivating groups. You can inspire people toward a common goal while keeping relationships intact.",
    question:
      "I naturally step up to guide and organize groups when direction is needed.",
  },

  // TEMPERANCE
  {
    id: "forgiveness",
    name: "Forgiveness",
    virtue: "temperance",
    tagline: "Letting go with grace",
    description:
      "You forgive those who have done wrong. You give people second chances without holding grudges. Mercy and compassion define how you treat others.",
    question:
      "I find it easier than most to let go of resentment and give people second chances.",
  },
  {
    id: "humility",
    name: "Humility",
    virtue: "temperance",
    tagline: "Letting actions speak",
    description:
      "You don't seek the spotlight. You're deeply aware of your own shortcomings and don't consider yourself more special than others. Actions speak louder.",
    question:
      "I don't need recognition — I'd rather let my work and impact speak for itself.",
  },
  {
    id: "prudence",
    name: "Prudence",
    virtue: "temperance",
    tagline: "Thinking before acting",
    description:
      "You're careful about your choices and resist impulsive decisions. You think about long-term consequences and plan accordingly before committing.",
    question:
      "I think carefully about long-term consequences before making significant decisions.",
  },
  {
    id: "self-regulation",
    name: "Self-Regulation",
    virtue: "temperance",
    tagline: "Discipline as a superpower",
    description:
      "You regulate your feelings and actions effectively. You have strong self-discipline, can control your responses, and follow through on commitments to yourself.",
    question:
      "I have strong discipline — I follow through on commitments to myself, even when it's hard.",
  },

  // TRANSCENDENCE
  {
    id: "appreciation",
    name: "Appreciation of Beauty",
    virtue: "transcendence",
    tagline: "Moved by excellence",
    description:
      "You notice and appreciate beauty, excellence, and skilled performance across all domains — from nature and art to everyday moments of human achievement.",
    question:
      "I regularly notice and feel genuinely moved by beauty in art, nature, or human achievement.",
  },
  {
    id: "gratitude",
    name: "Gratitude",
    virtue: "transcendence",
    tagline: "Counting what matters",
    description:
      "You're aware of and thankful for the good things in your life. You don't take blessings for granted and often express appreciation to those around you.",
    question:
      "I often pause to appreciate the good in my life and the people who make it better.",
  },
  {
    id: "hope",
    name: "Hope",
    virtue: "transcendence",
    tagline: "Believing in what's possible",
    description:
      "You expect the best in the future and work toward it. You're optimistic and believe your efforts matter, even during hard times and setbacks.",
    question:
      "Even in difficult times, I maintain genuine optimism that things will work out.",
  },
  {
    id: "humor",
    name: "Humor",
    virtue: "transcendence",
    tagline: "Lightening what's heavy",
    description:
      "You like to laugh and bring smiles to others. You see the lighter side of life and have a talent for making people feel lighter just by being around you.",
    question:
      "I naturally bring levity and laughter to situations — people feel lighter around me.",
  },
  {
    id: "spirituality",
    name: "Spirituality",
    virtue: "transcendence",
    tagline: "Guided by meaning",
    description:
      "You have strong beliefs about the higher purpose and meaning of life. Your sense of direction comes from something larger than immediate goals.",
    question:
      "I have a strong sense of purpose or meaning that guides my choices and how I live.",
  },
];

export const virtueColors: Record<string, string> = {
  wisdom: "#8b5cf6",
  courage: "#ef4444",
  humanity: "#f59e0b",
  justice: "#3b82f6",
  temperance: "#10b981",
  transcendence: "#ec4899",
};

export const virtueLabels: Record<string, string> = {
  wisdom: "Wisdom",
  courage: "Courage",
  humanity: "Humanity",
  justice: "Justice",
  temperance: "Temperance",
  transcendence: "Transcendence",
};

export function getStrengthById(id: string): Strength | undefined {
  return strengths.find((s) => s.id === id);
}
