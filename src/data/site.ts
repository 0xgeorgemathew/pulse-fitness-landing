// ============================================================
// PULSE — Central content data for the landing page.
// Keeping copy + figures here so components stay focused on layout.
// ============================================================

export const site = {
  name: "PULSE",
  tagline: "Train like you mean it.",
  description:
    "PULSE is the high-energy fitness app that turns ambition into routine. Real coaches, smart tracking, and workouts that actually move the needle.",
};

export const stats = [
  { value: "2.4M", label: "Active members" },
  { value: "180+", label: "Live classes / week" },
  { value: "98%", label: "Goal completion" },
  { value: "4.9★", label: "App Store rating" },
];

export type Workout = {
  id: string;
  title: string;
  category: "Strength" | "Cardio" | "HIIT" | "Yoga" | "Boxing" | "Mobility";
  duration: number; // minutes
  intensity: "Low" | "Medium" | "High" | "Max";
  kcal: number;
  coach: string;
  accent: "lime" | "orange" | "pink" | "blue";
  blurb: string;
  moves: string[];
};

export const workouts: Workout[] = [
  {
    id: "iron-stack",
    title: "Iron Stack",
    category: "Strength",
    duration: 42,
    intensity: "High",
    kcal: 480,
    coach: "Marcus Vale",
    accent: "orange",
    blurb: "Progressive compound lifts to build raw, functional power.",
    moves: ["Back squat", "Deadlift", "Bench", "Weighted pull-up"],
  },
  {
    id: "afterburn",
    title: "Afterburn",
    category: "HIIT",
    duration: 28,
    intensity: "Max",
    kcal: 410,
    coach: "Lena Cruz",
    accent: "pink",
    blurb: "Tabata-style intervals that keep burning calories for hours.",
    moves: ["Burpees", "Box jumps", "Kettlebell swing", "Sprint"],
  },
  {
    id: "deep-flow",
    title: "Deep Flow",
    category: "Yoga",
    duration: 35,
    intensity: "Low",
    kcal: 180,
    coach: "Priya Anand",
    accent: "blue",
    blurb: "Slow vinyasa to unlock mobility and reset your nervous system.",
    moves: ["Sun A", "Pigeon", "Spinal twist", "Savasana"],
  },
  {
    id: "shadow-round",
    title: "Shadow Round",
    category: "Boxing",
    duration: 30,
    intensity: "High",
    kcal: 360,
    coach: "Diego Marín",
    accent: "lime",
    blurb: "Six three-minute rounds of shadow boxing + footwork drills.",
    moves: ["Jab-cross", "Slip roll", "Combos", "Conditioning"],
  },
  {
    id: "engine-room",
    title: "Engine Room",
    category: "Cardio",
    duration: 45,
    intensity: "Medium",
    kcal: 520,
    coach: "Sara Holm",
    accent: "blue",
    blurb: "Zone-2 endurance work that builds a tireless aerobic base.",
    moves: ["Row", "Bike", "Run", "Sled push"],
  },
  {
    id: "reset",
    title: "Reset",
    category: "Mobility",
    duration: 18,
    intensity: "Low",
    kcal: 90,
    coach: "Priya Anand",
    accent: "lime",
    blurb: "Targeted mobility flow for recovery days and tight joints.",
    moves: ["Hip openers", "T-spine", "Banded work", "Breath"],
  },
];

export type Coach = {
  name: string;
  role: string;
  specialty: string;
  initials: string;
  accent: "lime" | "orange" | "pink" | "blue";
  years: number;
  cred: string;
};

export const coaches: Coach[] = [
  {
    name: "Marcus Vale",
    role: "Head of Strength",
    specialty: "Powerlifting · Hypertrophy",
    initials: "MV",
    accent: "orange",
    years: 12,
    cred: "NSCA-CSCS",
  },
  {
    name: "Lena Cruz",
    role: "HIIT & Conditioning",
    specialty: "Metabolic training",
    initials: "LC",
    accent: "pink",
    years: 9,
    cred: "NASM-CPT",
  },
  {
    name: "Priya Anand",
    role: "Yoga & Mobility",
    specialty: "Vinyasa · Recovery",
    initials: "PA",
    accent: "blue",
    years: 11,
    cred: "RYT-500",
  },
  {
    name: "Diego Marín",
    role: "Boxing Coach",
    specialty: "Technique · Footwork",
    initials: "DM",
    accent: "lime",
    years: 14,
    cred: "Ex-pro · 47-3",
  },
];

export type Plan = {
  name: string;
  price: number;
  cadence: string;
  tagline: string;
  features: string[];
  cta: string;
  featured: boolean;
  accent: "lime" | "orange";
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: 0,
    cadence: "free forever",
    tagline: "Test the waters with a curated weekly plan.",
    features: [
      "5 featured workouts / week",
      "Basic progress tracking",
      "Community feed access",
      "iOS & Android apps",
    ],
    cta: "Start free",
    featured: false,
    accent: "lime",
  },
  {
    name: "Pulse Pro",
    price: 14,
    cadence: "per month",
    tagline: "Everything you need to actually hit your goals.",
    features: [
      "Unlimited workouts & live classes",
      "Full progress analytics dashboard",
      "Personalized adaptive plans",
      "All 4 master coaches",
      "Apple Health & Garmin sync",
      "Offline downloads",
    ],
    cta: "Go Pro",
    featured: true,
    accent: "orange",
  },
  {
    name: "Elite",
    price: 39,
    cadence: "per month",
    tagline: "1:1 coaching for serious athletes and busy pros.",
    features: [
      "Everything in Pro",
      "Dedicated human coach",
      "Weekly video check-ins",
      "Custom nutrition plan",
      "Priority new-class requests",
    ],
    cta: "Apply now",
    featured: false,
    accent: "lime",
  },
];

// Weekly progress demo data — used by the animated dashboard.
export const weeklyData = [
  { day: "Mon", kcal: 420, mins: 38 },
  { day: "Tue", kcal: 510, mins: 45 },
  { day: "Wed", kcal: 0, mins: 0 },
  { day: "Thu", kcal: 380, mins: 30 },
  { day: "Fri", kcal: 590, mins: 52 },
  { day: "Sat", kcal: 640, mins: 60 },
  { day: "Sun", kcal: 220, mins: 18 },
];

export const goals = [
  { label: "Weekly workouts", value: 5, target: 6, unit: "", accent: "lime" as const },
  { label: "Calories burned", value: 2760, target: 3500, unit: "kcal", accent: "orange" as const },
  { label: "Active minutes", value: 243, target: 300, unit: "min", accent: "blue" as const },
];
