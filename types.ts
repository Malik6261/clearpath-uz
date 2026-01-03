export interface Resource {
  name: string;
  url: string;
  why: string;
  whenToStop: string;
  notFor: string;
  time?: string;
}

export interface RealityCheck {
  factor: string;
  rating: string;
  notes: string;
}

export interface Major {
  id: string;
  title: string;
  description: string;
  actuallyIs: string;
  dailyWork: string[];
  whoItFits: string[];
  whoShouldAvoid: string[];
  careerPaths: {
    employee: string[];
    freelance: string[];
    business: string[];
  };
  uzVsAbroad: {
    uz: string[];
    abroad: string[];
  };
  realityCheck: RealityCheck[];
  freeResources: Resource[];
}

export interface Exam {
  id: string;
  title: string;
  shortDescription: string;
  whoNeeds: string[];
  whoDoesNot: string[];
  scoreRanges: {
    type: string;
    range: string;
    competitiveness: string;
  }[];
  commonMistakes: string[];
  resources: Resource[];
  whenToStop: string[];
  // Extended fields for SAT
  officialMaterials?: Resource[];
  commonlyUsedBooks?: string[];
  additionalPlatforms?: Resource[];
  scoreMapping?: { range: string; focus: string }[];
  desmosGuidance?: { title: string; description: string; link?: string };
  youtubeChannels?: { name: string; description: string }[];
}

export interface Scholarship {
  id: string;
  title: string;
  origin: 'UZBEKISTAN' | 'INTERNATIONAL';
  description: string;
  whatItIs: string;
  whoItsFor: string[];
  coverage: string;
  competitiveness: string;
  obligations: string[];
  whoShouldNotApply: string[];
  realityCheck: string;
  url: string;
}

export interface PracticalPath {
  id: string;
  title: string;
  subtitle: string;
  actuallyIs: string;
  types?: {
    name: string;
    description: string;
    realityForForeigners: string;
    realistic: boolean;
  }[];
  whoFits: string[];
  whoShouldAvoid: string[];
  languageReality?: {
    official: string;
    practical: string;
    reasons: string[];
    trajectory: { level: string; time: string }[];
  };
  fieldCategories?: {
    name: string;
    acceptance: string;
    salary: string;
    successRate: string;
    whyAccessible: string;
    challenges: string;
    languageNeed: string;
  }[];
  financialDeepDive?: {
    monthlySalary: { industry: string; y1: string; y2: string; y3: string }[];
    livingExpenses: { category: string; low: string; medium: string; high: string }[];
    mathReality: string;
    comparison: { label: string; details: string }[];
  };
  visaLegal?: {
    residenceAct: string;
    ageLimits: { rule: string; practice: string };
    financialRequirement: string;
    recognitionProcess: string[];
    embassyTimeline: string;
  };
  downsidesExtended?: { category: string; content: string }[];
  myths?: { myth: string; reality: string }[];
  strategicAssessment: {
    goodMove: string[];
    badMove: string[];
  };
  finalTimeline: { phase: string; duration: string }[];
  strategicGood: string[];
  strategicBad: string[];
  realityCheck: string;
  contactEmail?: string;
  contactNote?: string;
  isComingSoon?: boolean;
}

export type Locale = 'en' | 'uz';

export interface SiteContent {
  majors: Major[];
  exams: Exam[];
  scholarships: Scholarship[];
  paths: PracticalPath[];
  ui: Record<string, any>;
}