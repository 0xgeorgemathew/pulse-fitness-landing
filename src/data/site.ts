// ============================================================
// PULSE — Central content data for the landing page.
// Keeping copy + figures + imagery here so components stay
// focused on layout. All Unsplash URLs verified HTTP 200.
// ============================================================

// Helper: stable Unsplash CDN url with sensible defaults.
const img = (id: string, w = 800, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=80`;

export const site = {
  name: "PULSE",
  tagline: "Train like you mean it.",
  description:
    "PULSE is the high-energy fitness app that turns ambition into routine. Real coaches, smart tracking, and workouts that actually move the needle.",
  heroImage: img("photo-1534258936925-c58bed479fcb", 1600, 1000),
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
  image: string;
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
    image: img("photo-1538805060514-97d9cc17730c", 800, 600),
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
    image: img("photo-1574680096145-d05b474e2155", 800, 600),
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
    image: img("photo-1544367567-0f2fcb009e0b", 800, 600),
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
    image: img("photo-1549719386-74dfcbf7dbed", 800, 600),
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
    image: img("photo-1551698618-1dfe5d97d256", 800, 600),
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
    image: img("photo-1518611012118-696072aa579a", 800, 600),
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
  image: string;
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
    image: img("photo-1568602471122-7832951cc4c5", 600, 600),
  },
  {
    name: "Lena Cruz",
    role: "HIIT & Conditioning",
    specialty: "Metabolic training",
    initials: "LC",
    accent: "pink",
    years: 9,
    cred: "NASM-CPT",
    image: img("photo-1438761681033-6461ffad8d80", 600, 600),
  },
  {
    name: "Priya Anand",
    role: "Yoga & Mobility",
    specialty: "Vinyasa · Recovery",
    initials: "PA",
    accent: "blue",
    years: 11,
    cred: "RYT-500",
    image: img("photo-1594381898411-846e7d193883", 600, 600),
  },
  {
    name: "Diego Marín",
    role: "Boxing Coach",
    specialty: "Technique · Footwork",
    initials: "DM",
    accent: "lime",
    years: 14,
    cred: "Ex-pro · 47-3",
    image: img("photo-1507003211169-0a1dd7228f2d", 600, 600),
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

// ---------- Social proof ----------

export const pressLogos = [
  "Men's Health",
  "WIRED",
  "The Verge",
  "Outside",
  "Shape",
  "Gear Patrol",
];

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  initials: string;
  accent: "lime" | "orange" | "pink" | "blue";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I've tried every fitness app out there. PULSE is the first one where I actually look forward to the workout. The coaches are unreal.",
    name: "Jordan M.",
    detail: "Lost 18 lbs in 12 weeks",
    initials: "JM",
    accent: "lime",
  },
  {
    quote:
      "The progress dashboard is addictive. Seeing the rings close every day turned exercise from a chore into a game I refuse to lose.",
    name: "Sofia R.",
    detail: "Marathon PR · 3:42",
    initials: "SR",
    accent: "pink",
  },
  {
    quote:
      "As a busy dad with two kids, the 18-minute Reset sessions are a lifesaver. I'm moving better now than I did in my twenties.",
    name: "Andre K.",
    detail: "Member since 2024",
    initials: "AK",
    accent: "orange",
  },
  {
    quote:
      "Diego's boxing classes are the best workout I've ever done outside a real gym. Technique breakdowns are genuinely elite.",
    name: "Mei L.",
    detail: "142-day streak",
    initials: "ML",
    accent: "blue",
  },
];

export type Feature = {
  title: string;
  desc: string;
  accent: "lime" | "orange" | "pink" | "blue";
  icon: "adaptive" | "live" | "track" | "community";
};

export const features: Feature[] = [
  {
    title: "Adaptive plans",
    desc: "Your plan reshuffles every week based on your recovery, goals, and what you actually enjoy.",
    accent: "lime",
    icon: "adaptive",
  },
  {
    title: "Live classes",
    desc: "180+ live sessions a week with real-time leaderboards and shoutouts from your coach.",
    accent: "orange",
    icon: "live",
  },
  {
    title: "Deep tracking",
    desc: "Heart rate, calories, streaks, and PRs — synced from Apple Health, Garmin, Whoop, and more.",
    accent: "blue",
    icon: "track",
  },
  {
    title: "Real community",
    desc: "Join challenges, share wins, and train alongside 2.4M athletes who keep each other honest.",
    accent: "pink",
    icon: "community",
  },
];
