import { Major, Exam, Scholarship, PracticalPath, SiteContent, Locale } from './types';

export type { Locale };

const AUSBILDUNG_PATH_EN: PracticalPath = {
  id: 'ausbildung',
  title: 'Ausbildung',
  subtitle: 'German Dual Vocational Training',
  actuallyIs: 'Ausbildung is a 2–3.5 year vocational training program in Germany that combines workplace learning with classroom instruction. Unlike traditional university, you are an employee of a company from day one and receive a monthly salary while learning a specific trade.',
  types: [
    {
      name: 'Technical / Industrial',
      description: 'Mechatronics, IT specialist, electronics, car mechanics.',
      realityForForeigners: 'Highest demand, but requires strong logic and solid German.',
      realistic: true
    },
    {
      name: 'Healthcare / Nursing',
      description: 'Geriatric care, nursing, therapy assistants.',
      realityForForeigners: 'Easiest visa path but extremely physically and emotionally taxing.',
      realistic: true
    },
    {
      name: 'Administration / Office',
      description: 'Office management, accounting assistants.',
      realityForForeigners: 'Very difficult for non-native speakers due to high language nuance.',
      realistic: false
    }
  ],
  whoFits: [
    'Prefers hands-on work over theoretical lectures.',
    'Wants financial independence (earning while learning).',
    'Willing to learn German to a high level (B2).',
    'Disciplined enough to handle a full-time job and school simultaneously.'
  ],
  whoShouldAvoid: [
    'Students who only want "prestige" or a title of "student."',
    'Those unwilling to perform manual or service-oriented tasks.',
    'People who find learning a new language (German) overwhelming.',
    'Those looking for a "quick escape" without long-term commitment.'
  ],
  languageReality: {
    official: 'B1 or B2 German',
    practical: 'Strong B2 / Early C1',
    reasons: [
      'Vocational school exams are in technical German.',
      'Colleagues in workshops/hospitals rarely speak English.',
      'Safety protocols must be understood perfectly.'
    ],
    trajectory: [
      { level: 'A1-A2', time: '4-6 months' },
      { level: 'B1-B2', time: '6-10 months' },
      { level: 'Test/Apply', time: '2-3 months' }
    ]
  },
  fieldCategories: [
    {
      name: 'Mechatronics',
      acceptance: 'HIGH SHORTAGE',
      salary: '€950 – €1,200',
      successRate: 'Moderate',
      whyAccessible: 'Heavy industrial demand for non-EU workers.',
      challenges: 'Complex math and physics in German.',
      languageNeed: 'B2 technical'
    },
    {
      name: 'Nursing (Pflege)',
      acceptance: 'CRITICAL SHORTAGE',
      salary: '€1,100 – €1,350',
      successRate: 'High',
      whyAccessible: 'Germany has an aging population and desperate need for carers.',
      challenges: 'Shift work, high stress, emotional load.',
      languageNeed: 'B2 interpersonal'
    }
  ],
  financialDeepDive: {
    monthlySalary: [
      { industry: 'Nursing', y1: '€1,100', y2: '€1,200', y3: '€1,350' },
      { industry: 'IT/Tech', y1: '€950', y2: '€1,050', y3: '€1,150' },
      { industry: 'Gastronomy', y1: '€850', y2: '€950', y3: '€1,050' }
    ],
    livingExpenses: [
      { category: 'Rent', low: '€300', medium: '€450', high: '€600' },
      { category: 'Insurance', low: '€100', medium: '€110', high: '€120' },
      { category: 'Food/Other', low: '€250', medium: '€350', high: '€450' }
    ],
    mathReality: 'After taxes and insurance, a €1,000 gross salary becomes roughly €800. If your rent is €400, you have €400 left for everything else. It is survival, not luxury.',
    comparison: [
      { label: 'Vs University', details: 'You earn €30-40k over 3 years while students spend €30-40k.' },
      { label: 'Vs Unskilled Work', details: 'Ausbildung leads to a "Skilled Worker" status and a €3,000+ starting salary after graduation.' }
    ]
  },
  visaLegal: {
    residenceAct: 'Section 16a of the Residence Act',
    ageLimits: { rule: 'No legal limit', practice: 'Harder for those over 30 to find employers.' },
    financialRequirement: 'Usually no blocked account needed if salary covers basic needs (~€934/mo).',
    recognitionProcess: [
      'Apostille of school diploma.',
      'Official translation to German.',
      'Recognition (Anerkennung) by German state authorities.'
    ],
    embassyTimeline: '4–12 weeks in Tashkent.'
  },
  downsidesExtended: [
    { category: 'Cultural', content: 'German "Directness" can feel rude or aggressive to Uzbek students.' },
    { category: 'Workload', content: '40 hours work + 12 hours school + Homework. No "student holidays".' },
    { category: 'Isolation', content: 'Often placed in small villages where you may be the only foreigner.' }
  ],
  myths: [
    { myth: 'It is easy to get in.', reality: 'Companies interview you like a real employee. 50+ applications is normal.' },
    { myth: 'You can switch to Uni easily.', reality: 'Possible, but requires a separate university entrance qualification (Abitur/Studienkolleg).' }
  ],
  strategicAssessment: {
    goodMove: ['Goal is permanent residency in Germany.', 'You want a high-paying technical job without 5 years of Uni.'],
    badMove: ['You want to stay in UZ (German vocational titles carry less weight here).', 'You hate physical work or strict schedules.']
  },
  finalTimeline: [
    { phase: 'Language (A1-B2)', duration: '12-18 Months' },
    { phase: 'Application & Interview', duration: '3-6 Months' },
    { phase: 'Visa Process', duration: '2-3 Months' },
    { phase: 'Arrival & Start', duration: 'August/September' }
  ],
  strategicGood: [],
  strategicBad: [],
  realityCheck: 'A powerful social escalator for those willing to grind. Not for the lazy or the prestigious-minded.'
};

const AUSBILDUNG_PATH_UZ: PracticalPath = {
  id: 'ausbildung',
  title: 'Ausbildung',
  subtitle: 'Germaniya Dual Kasb-hunar Ta’limi',
  actuallyIs: 'Ausbildung — bu Germaniyada 2-3,5 yil davom etadigan kasb-hunar ta’limi dasturi bo‘lib, u ish joyidagi amaliyotni va o‘quv yurtidagi nazariyani birlashtiradi. Universitetdan farqli o‘laroq, siz birinchi kundan kompaniya xodimi hisoblanasiz va o‘qish davomida oylik maosh olasiz.',
  types: [
    {
      name: 'Texnik / Sanoat',
      description: 'Mexatronika, IT mutaxassisi, elektronika, avtomobil mexanikasi.',
      realityForForeigners: 'Talab juda yuqori, lekin kuchli mantiq va yaxshi nemis tilini talab qiladi.',
      realistic: true
    },
    {
      name: 'Tibbiyot / Hamshiralik',
      description: 'Keksalar parvarishi, hamshiralik, terapiya yordamchilari.',
      realityForForeigners: 'Viza olish eng oson yo‘l, lekin jismoniy va hissiy jihatdan juda og‘ir.',
      realistic: true
    },
    {
      name: 'Ma’muriyat / Ofis',
      description: 'Ofis boshqaruvi, buxgalteriya yordamchilari.',
      realityForForeigners: 'Tilning nozik jihatlarini bilish talab qilingani uchun chet elliklar uchun juda qiyin.',
      realistic: false
    }
  ],
  whoFits: [
    'Nazariy ma’ruzalardan ko‘ra amaliy ishni afzal ko‘radiganlar.',
    'Moliyaviy mustaqillikka intiluvchilar (o‘qib turib pul topish).',
    'Nemis tilini yuqori darajada (B2) o‘rganishga tayyor bo‘lganlar.',
    'Bir vaqtning o‘zida to‘liq ish kuni va o‘qishni eplay oladigan intizomli yoshlar.'
  ],
  whoShouldAvoid: [
    'Faqat "status" yoki "talaba" degan nomni xohlaydiganlar.',
    'Jismoniy yoki xizmat ko‘rsatish sohasidagi ishlarni xohlamaydiganlar.',
    'Yangi til (nemis tili) o‘rganishni o‘ta qiyin deb biladiganlar.',
    'Uzoq muddatli mehnat qilmasdan, "tezda chiqib ketish" yo‘lini qidirayotganlar.'
  ],
  languageReality: {
    official: 'B1 yoki B2 nemis tili',
    practical: 'Kuchli B2 / Erta C1',
    reasons: [
      'Kasb-hunar maktabi imtihonlari texnik nemis tilida bo‘ladi.',
      'Ustaxona yoki shifoxonalardagi hamkasblar kamdan-kam hollarda nemis tilidan boshqa tilda gaplashishadi.',
      'Xavfsizlik protokollarini mukammal tushunish shart.'
    ],
    trajectory: [
      { level: 'A1-A2', time: '4-6 oy' },
      { level: 'B1-B2', time: '6-10 oy' },
      { level: 'Test/Hujjat topshirish', time: '2-3 oy' }
    ]
  },
  fieldCategories: [
    {
      name: 'Mexatronika',
      acceptance: 'YUQORI TANQISLIK',
      salary: '€950 – €1,200',
      successRate: 'O‘rtacha',
      whyAccessible: 'Yevropa Ittifoqidan bo‘lmagan ishchilar uchun sanoat talabi yuqori.',
      challenges: 'Nemis tilidagi murakkab matematika va fizika.',
      languageNeed: 'B2 texnik'
    },
    {
      name: 'Hamshiralik (Pflege)',
      acceptance: 'KRITIK TANQISLIK',
      salary: '€1,100 – €1,350',
      successRate: 'Yuqori',
      whyAccessible: 'Germaniya aholisi qarib bormoqda va qarovchilarga ehtiyoj juda katta.',
      challenges: 'Smenali ish, yuqori stress, hissiy yuklama.',
      languageNeed: 'B2 muloqot'
    }
  ],
  financialDeepDive: {
    monthlySalary: [
      { industry: 'Hamshiralik', y1: '€1,100', y2: '€1,200', y3: '€1,350' },
      { industry: 'IT/Texnik', y1: '€950', y2: '€1,050', y3: '€1,150' },
      { industry: 'Gastronomiya', y1: '€850', y2: '€950', y3: '€1,050' }
    ],
    livingExpenses: [
      { category: 'Ijara', low: '€300', medium: '€450', high: '€600' },
      { category: 'Sug‘urta', low: '€100', medium: '€110', high: '€120' },
      { category: 'Oziq-ovqat/Boshqa', low: '€250', medium: '€350', high: '€450' }
    ],
    mathReality: 'Soliq va sug‘urtadan keyin 1000 yevro yalpi maosh taxminan 800 yevro bo‘lib qoladi. Agar ijara 400 yevro bo‘lsa, qolgan hamma narsa uchun 400 yevro qoladi. Bu hashamat emas, yashab qolish uchun yetarli pul.',
    comparison: [
      { label: 'Universitetga nisbatan', details: 'Siz 3 yil davomida 30-40 ming yevro ishlaysiz, talabalar esa shuncha pul sarflashadi.' },
      { label: 'Malakasiz ishga nisbatan', details: 'Ausbildung sizni "Malakali mutaxassis" darajasiga olib chiqadi va o‘qishdan keyin 3000 yevrodan yuqori maosh beradi.' }
    ]
  },
  visaLegal: {
    residenceAct: 'Yashash to‘g‘risidagi qonunning 16a-bo‘limi',
    ageLimits: { rule: 'Qonuniy chegara yo‘q', practice: '30 yoshdan oshganlar uchun ish beruvchi topish qiyinroq.' },
    financialRequirement: 'Agar maosh asosiy ehtiyojlarni qoplasa (~934 yevro), odatda bloklangan hisob raqami talab qilinmaydi.',
    recognitionProcess: [
      'Maktab attestatini apostil qilish.',
      'Nemis tiliga rasmiy tarjima.',
      'Germaniya davlat organ tomonidan tan olinishi (Anerkennung).'
    ],
    embassyTimeline: 'Toshkentda 4–12 hafta.'
  },
  downsidesExtended: [
    { category: 'Madaniy', content: 'Nemischa "to‘g‘ridan-to‘g‘ri gapirish" o‘zbek talabalari uchun qo‘pol tuyulishi mumkin.' },
    { category: 'Ish yuklamasi', content: '40 soat ish + 12 soat o‘qish + uy vazifalari. "Talaba ta’tillari" yo‘q.' },
    { category: 'Yolg‘izlik', content: 'Ko‘pincha siz yagona chet ellik bo‘lgan kachik qishloqlarga joylashtirilasiz.' }
  ],
  myths: [
    { myth: 'Kirish oson.', reality: 'Kompaniyalar sizdan haqiqiy xodim kabi intervyu olishadi. 50 tadan ortiq hujjat topshirish odatiy hol.' },
    { myth: 'Universitetga osongina o‘tish mumkin.', reality: 'Mumkin, lekin buning uchun alohida universitetga kirish malakasi (Abitur/Studienkolleg) talab qilinadi.' }
  ],
  strategicAssessment: {
    goodMove: ['Maqsadingiz Germaniyada doimiy yashash.', '5 yil universitetda o‘qimasdan yuqori maoshli texnik ishni xohlaysiz.'],
    badMove: ['O‘zbekistonda qolmoqchisiz (bu diplom bu yerda kamroq ahamiyatga ega).', 'Jismoniy ishni yoki qat’iy jadvalni yomon ko‘rasiz.'],
  },
  finalTimeline: [
    { phase: 'Til o‘rganish (A1-B2)', duration: '12-18 Oy' },
    { phase: 'Hujjat topshirish va suhbat', duration: '3-6 Oy' },
    { phase: 'Viza jarayoni', duration: '2-3 Oy' },
    { phase: 'Yetib borish va boshlash', duration: 'Avgust/Sentyabr' }
  ],
  strategicGood: [],
  strategicBad: [],
  realityCheck: 'Mehnat qilishga tayyor bo‘lganlar uchun kuchli ijtimoiy lift. Dangasalar yoki faqat "diplom" deb yashaydiganlar uchun emas.'
};

const EN_CONTENT: SiteContent = {
  ui: {
    seo: {
      home: { title: "ClearPath — Student Decision Guide in Uzbekistan", desc: "An objective information index for students in Uzbekistan. Honest data on majors, exams, and career paths." },
      majors: { title: "Majors Index — ClearPath", desc: "Objective analysis of university fields in Uzbekistan. Daily reality, income potential, and stress factors." },
      exams: { title: "Standardized Exams Index — ClearPath", desc: "Metrics and entry requirements for SAT, IELTS, and DET. Determine strategic relevance for admissions." },
      scholarships: { title: "Scholarships & Funding — ClearPath", desc: "Analysis of funding opportunities like El-Yurt Umidi, Chevening, and Turkiye Burslari for Uzbek students." },
      paths: { title: "Practical Paths — ClearPath", desc: "Evaluations of high-viability, work-first alternatives to traditional university routes, including Ausbildung." },
      resources: { title: "Free Learning Assets — ClearPath", desc: "Filtered directory of high-quality free resources for students." },
      gapYear: { title: "Gap Year Strategy — ClearPath", desc: "Honest guidance on whether taking a gap year in Uzbekistan makes strategic sense." },
      about: { title: "About ClearPath", desc: "Why we built an honest decision guide for students in Uzbekistan." },
      contact: { title: "Inquiry & Feedback — ClearPath", desc: "Contact protocol for complex multi-path decisions and feedback." }
    },
    decisionGuide: "Reference",
    startBriefing: "Browse Majors",
    practicalAlternatives: "Explore Practical Experience",
    howToUse: "Index usage guidelines",
    philosophyTitle: "Information Boundaries",
    noteOnDecisions: "Independent Reference",
    methodology: "Data Methodology",
    academicLibrary: "Majors",
    practicalPaths: "Practical Paths",
    exams: "Exams",
    scholarshipsLabel: "Scholarships",
    resourcesLabel: "Resources",
    plannerLabel: "Planner",
    gapYear: "Gap Year",
    academicHeader: "Academic Library",
    practicalHeader: "Practical Paths",
    toolsHeader: "Tools & Resources",
    readyForTruth: "View Analysis",
    analysisComplete: "Documentation reviewed.",
    returnToDirectory: "Return to Index",
    backToOverview: "Main Index",
    inquiry: "Contact",
    feedback: "Feedback",
    soon: "Soon",
    locked: "In Review",
    sourcesReferenced: "Sources cited",
    logoDisclaimer: "Logos shown for reference only. No endorsement implied.",
    academicLabel: "ACADEMIC",
    careerLabel: "CAREER & EXPERIENCE",
    editorialIndex: "Information Index — Edition 2025",
    homeTitle1: "Information access,",
    homeTitle2: "structured.",
    homeSubtitle: "An open informational index for students in Uzbekistan. Documentation on university majors, standardized exams, and institutional requirements.",
    homeQuote: "Decision-making fails not from lack of effort, but from bad data. We organize that data for reference.",
    philTitle: "AN HONEST START",
    philSub: "How to use this guide",
    phil1: "We don’t make decisions for you. This guide is just here to give you the honest information you need to decide for yourself. Your path is your own.",
    phil2: "We believe in showing you the whole picture—the good, the hard, and the realistic. We are an open library of facts, not a career coach.",
    phil3: "It’s okay to be confused right now. This index helps you navigate that confusion by giving you clear data instead of empty promises.",
    phil4: "Think of this as a compass. We show you where things are, but you’re the one holding it and choosing the direction.",
    methTitle: "Methodology",
    methSub: "Cross-referencing requirements",
    meth1Title: "Source Verification",
    meth1Desc: "Decisions require independent verification. Users are encouraged to cross-reference this index with official institutional portals.",
    meth2Title: "Documented Realities",
    meth2Desc: "Each path is mapped to documented industry factors, including standard daily operations, base income ranges, and observed stress levels.",
    footerTagline: "Decision intelligence for students in Uzbekistan. Grounded in reality, built for clarity.",
    footerNavHeader: "Navigation",
    footerInquiryHeader: "Inquiry",
    footerCopyright: "Decision Intelligence Lab",
    footerLocation: "Uzbekistan",
    academicArchiveLabel: "Archive 01 — Academic Focus",
    academicPageDesc: "Objective analysis of university fields. We focus on the daily reality, long-term stress factors, and actual career viability.",
    examsArchiveLabel: "Archive 02 — Metrics & Entry",
    examsPageDesc: "Objective information about standardized exams used in admissions. Determine strategic relevance before investing resources.",
    scholarshipsArchiveLabel: "Archive 03 — Capital & Funding",
    scholarshipsPageDesc: "Analysis of funding opportunities. We highlight the obligations and reality of merit-based support.",
    pathsArchiveLabel: "Archive 04 — Practical Logic",
    pathsPageDesc: "Evaluations of high-viability, work-first alternatives to traditional university routes.",
    resourcesArchiveLabel: "Asset Directory 03",
    resourcesPageTitle: "The Asset Inventory.",
    resourcesPageDesc: "Filtered intelligence. We ignore 99% of free content to highlight the 1% that actually prepares you for the field.",
    resourceDirectiveLabel: "Operational Directive",
    resourceDirectiveQuote: "Stop hoarding links. Pick one resource, master it, then quit. Hoarding is an excuse to avoid learning.",
    resourceContextLabel: "Context",
    resourceDiscardLabel: "Discard If",
    activeAnalysis: "Active Analysis",
    pathAvailable: "Available",
    pathStatus: "Status",
    verifiedPathway: "Verified Pathway",
    viewPath: "View Path",
    queueLabel: "Queue",
    pathDescription: "Detailed strategic breakdown of technical training, costs, and residency requirements.",
    pathDirectory: "Path Directory",
    intelligenceAnalysis: "Intelligence Analysis",
    brutallyHonest: "Brutally honest strategic deep dive.",
    whatItIs: "What it Actually Is",
    systemDefinition: "System Definition",
    strategicFitment: "Strategic Fitment",
    profileAnalysis: "Profile Analysis",
    strategicMoveIf: "Strategic Move IF:",
    highRiskIf: "High Risk IF:",
    idealProfile: "Ideal Candidate Profile",
    languageReality: "Language Reality",
    communicationBarrier: "Communication Barrier",
    officialRequirement: "Official Requirement",
    practicalMinimum: "Practical Minimum",
    preparationTrajectory: "Preparation Trajectory",
    fieldAnalysis: "Field Analysis",
    operationalSectors: "Operational Sectors",
    acceptanceRate: "Acceptance",
    salaryLabel: "Salary",
    challengeLabel: "Challenge",
    financialLogic: "Financial Logic",
    cashFlowAnalysis: "Cash Flow Analysis",
    industryLabel: "Industry",
    y1Gross: "Y1 (Gross)",
    y3Gross: "Y3 (Gross)",
    expensesLabel: "Estimated Expenses",
    deficitWarning: "Deficit Warning",
    longTermMath: "Long-term Math",
    timeCommitment: "Time Commitment",
    executionReality: "Execution Reality",
    durationLabel: "Duration",
    weeklyLoad: "Weekly Load",
    physicalMentalLoad: "Physical & Mental Load",
    dropoutRateLabel: "Dropout Rate",
    visaLegalLabel: "Visa & Legal",
    complianceProtocol: "Compliance Protocol",
    legalBasis: "Legal Basis",
    docRecognition: "Document Recognition",
    legalRisksLabel: "Legal Risks",
    risksDownsides: "Risks & Downsides",
    darkSide: "The Dark Side",
    mythsReality: "Myths vs Reality",
    filteredTruth: "Filtered Truth",
    mythLabel: "Myth",
    realityLabel: "Reality",
    postCompletion: "Post-Completion",
    payoffLabel: "The Payoff",
    placementRateLabel: "Placement Rate",
    startingGrossLabel: "Starting Gross",
    careerTrajectory: "Career Trajectory",
    comparativeAnalysis: "Comparative Analysis",
    alternativeLogic: "Alternative Logic",
    vsUniversity: "Vs. University",
    vsUnskilled: "Vs. Unskilled Work",
    vsShortCourses: "Vs. Short Courses",
    finalAssessment: "Final Assessment",
    bluntTruth: "The Blunt Truth",
    strategicInquiry: "Strategic Inquiry",
    contactProtocol: "Contact Protocol",
    tierALabel: "Tier A",
    localProgramsLabel: "Local Programs",
    tierBLabel: "Tier B",
    globalFundingLabel: "Global Funding",
    riskLabelPrefix: "Risk:",
    utilityLabelPrefix: "Utility:",
    competitivenessLabel: "Competitiveness",
    coverageLabel: "Coverage",
    riskFactorsLabel: "Risk Factors",
    targetProfileLabel: "Target Profile",
    requiredObligationsLabel: "Required Obligations",
    realityCheckLabel: "Reality Check",
    majorIntelligenceFile: "Major Intelligence File",
    majorDirectory: "Library Directory",
    examDirectory: "Exam Directory",
    metricAnalysisFile: "Metric Analysis File",
    benchmarkFile: "Benchmark File",
    evaluateRelevance: "Evaluate Relevance",
    strategicRelevance: "Strategic Relevance",
    whoNeedsThis: "Who Needs This?",
    resourceProtection: "Resource Protection",
    whoShouldSkip: "Who Should Skip?",
    benchmarkTargets: "Benchmark Targets",
    scoreThresholds: "Score Thresholds",
    exitStrategy: "The Exit Strategy",
    whenToStop: "When To Stop",
    discontinueIf: "Discontinue preparation if:",
    executionAssets: "Execution Assets",
    vettedResources: "Vetted Resources",
    objectiveReality: "The Objective Reality",
    tacticalScorecard: "Tactical Scorecard",
    dailyOperations: "Daily Operations",
    intelligenceAssets: "Intelligence Assets",
    alignmentSignal: "Alignment Signal",
    riskSignal: "Risk Signal",
    analysisCompleteTitle: "Analysis complete. Explore another?",
    operationalGoal: "Operational Goal",
    thresholdForStopping: "Threshold for stopping",
    briefingComplete: "Briefing Complete",
    avoidIf: "Avoid if:",
    moduleLabel: "Module",
    gapYearFeatureLabel: "Special Feature",
    gapYearTitleMain: "The Gap Year",
    gapYearTitleItalic: "Strategic Delay",
    gapYearIntro: "Delaying university is either the smartest move you'll ever make, or a massive waste of momentum. There is no middle ground.",
    noPressureMsg: "If you're not remember ready to make a choice right now — that's also normal.",
    specialistBtn: "🔒 Ask a specialist (coming soon)",
    specialistNote: "This is not guidance. It’s access to lived experience.",
    officialMaterialsLabel: "Official Materials",
    prepBooksLabel: "Prep Books (High Scorers)",
    additionalPlatformsLabel: "Additional Practice Platforms",
    scoreGuidanceLabel: "Score Range Guidance",
    scoreGuidanceDisclaimer: "Targets are based on historical trends. Success depends on individual practice and test conditions. These are not promises of results.",
    desmosTitle: "Desmos Calculator",
    youtubeTitle: "Vetted YouTube Resources",
    youtubeNote: "Video prep is a supplement, not a substitute for practice.",
    officialReliabilityNote: "These are the most reliable sources because they come from the exam creators.",
    creditExamsTitle: "University Credit & Placement Exams",
    creditExamsIntro: "Some universities accept certain exams for course credit or placement. This can help bypass specific introductory courses. Rules vary by university and major.",
    creditExamsImportant: "These exams do not automatically complete a semester. The final decision depends on university policy.",
    creditExamsDisclaimer: "Each university's credit policy is different. An exam accepted in one place may not be accepted in another.",
    creditExamsList: [
      { name: "AP Calculus AB / BC", desc: "May replace Calculus I or Calculus I–II in some universities." },
      { name: "CLEP Calculus", desc: "Some universities accept this for Calculus I credit." },
      { name: "IB Math HL", desc: "For students in the IB system. Accepted in place of math courses at some universities." }
    ],
    gapYearWhatIsTitle: "What it is",
    gapYearWhatIsDesc: "A Gap Year is a strategic pause between high school and university. It is not a vacation; it is a year dedicated to personal and professional growth.",
    gapYearVerdictTitle: "Verdict",
    gapYearVerdictDesc: "High value if structured. High risk if aimless.",
    gapYearStrategicTitle: "Strategic Use Cases",
    gapYearStrategic1Title: "Profile Building",
    gapYearStrategic1Desc: "Increasing competitiveness for top-tier scholarships.",
    gapYearStrategic2Title: "Skill Acquisition",
    gapYearStrategic2Desc: "Learning a high-income skill like coding or digital marketing.",
    gapYearStrategic3Title: "Mental Reset",
    gapYearStrategic3Desc: "Preventing burnout after intense schooling.",
    gapYearDeceptionTitle: "The Common Deception",
    gapYearDeception1: "I'll study all day.",
    gapYearDeception2: "I'll start a business.",
    gapYearDeception3: "I'll learn three languages.",
    gapYearRisksBenefitsTitle: "Risks vs Benefits",
    gapYearUpsideTitle: "Upsides",
    gapYearUpsideList: ["Maturity", "Better Resume", "Clarity"],
    gapYearDownsideTitle: "Downsides",
    gapYearDownsideList: ["Lost Momentum", "Social Isolation", "Late Start"],
    specialistHeader: "Specialists",
    specialistSubtitle: "Real-world Logbooks",
    specialistDesc: "Daily activity logs from senior professionals currently working in target fields.",
    marketingPlaceholderTitle: "Digital Marketing",
    marketingPlaceholderSub: "Uzbekistan & Remote",
    marketingPlaceholderDesc: "Performance marketing, content strategy, and data-driven growth.",
    keyFactsLabel: "Key Facts",
    disclaimerLabel: "Information Only Disclaimer",
    ausbildungKeyFacts: [
      "Duration: 2-3 years",
      "Structure: Company work + Vocational school (Berufsschule)",
      "Financials: Monthly salary from day one",
      "Language: German B1/B2 usually required",
      "Legal: Official work-study contract"
    ],
    ausbildungRealityNotes: [
      "Not easy: Requires balancing a full-time job with academic exams.",
      "High discipline: Strict attendance and performance tracking.",
      "Cultural adaptation: Rapid immersion into German work culture.",
      "Strategic: Not a 'quick exit' — it's a foundation for a long-term career."
    ],
    ausbildungDisclaimer: "This section provides objective information only. It is not a recommendation or a discouragement regarding your choice of Ausbildung.",
    fieldAnalysisLabel: "Field Analysis",
    acceptanceRatingLabel: "Acceptance Rating",
    successRateLabel: "Success Rate",
    whyAccessibleLabel: "Why Accessible",
    challengesLabel: "Specific Challenges",
    languageNeedLabel: "Language Requirement",
    monthlySalaryLabel: "Monthly Salary (Gross)",
    deficitRealityLabel: "The Deficit Reality",
    livingExpLabel: "Living Expenses",
    comparisonUniLabel: "Comparison vs Uni",
    visaResidenceLabel: "Visa & Residency",
    recognitionBarrierLabel: "The Recognition Barrier",
    legalRisksSummary: "Legal & Regulatory Risks",
    finalVerdictLabel: "Final Strategic Verdict",
    decisionFrameworkLabel: "Decision Framework",
    honestTimelineLabel: "Realistic Execution Timeline"
  },
  majors: [
    {
      id: 'computer-science',
      title: 'Computer Science',
      description: 'The architecture of logic and automation.',
      actuallyIs: "CS means learning to think in code and systems. You study programming, algorithms, data structures, and architecture. It's not just \"typing code\"—it's learning why certain solutions work, why others break, and how to design systems that can scale to millions of users.",
      dailyWork: [
        '9-10am: Stand-up meeting (progress tracking).',
        '10am-12pm: Deep coding focus (logic implementation).',
        '1-3pm: Code reviews and teammate feedback.',
        '3-4pm: Architecture and product planning.',
        '4-5pm: Testing, debugging, and documentation.'
      ],
      whoItFits: [
        'Enjoys debugging and problem-solving over building.',
        'Patient with extreme detail (one semicolon matters).',
        'Comfortable with tools becoming obsolete every 3 years.',
        'Able to explain tech logic to non-tech managers.'
      ],
      whoShouldAvoid: [
        'Needs immediate, stable income (entry-level is competitive).',
        'Dislikes sitting for 8-10 hours in front of a screen.',
        'Wants manual work that never changes.',
        'Struggles with abstract mathematical logic.'
      ],
      careerPaths: {
        employee: ['Software Engineer', 'Data Engineer', 'Cybersecurity Specialist'],
        freelance: ['Web Development', 'Technical Consulting'],
        business: ['SaaS Founder', 'Tech Agency Owner']
      },
      uzVsAbroad: {
        uz: ['Local demand is rising in Fintech and E-commerce.', 'Remote work for Western companies is the "Gold Medal" path.'],
        abroad: ['High demand but brutal junior-level competition.', 'Visa sponsorship (H1B/EU Blue Card) is the primary goal.']
      },
      realityCheck: [
        { factor: 'Difficulty', rating: 'HIGH', notes: 'Heavy theory and frustrating debugging cycles.' },
        { factor: 'Competition', rating: 'VERY HIGH', notes: 'Everyone wants to be in tech now.' },
        { factor: 'Income Potential', rating: 'HIGH', notes: 'Highest ceiling for employees.' },
        { factor: 'AI Risk', rating: 'MEDIUM-HIGH', notes: 'Junior roles are being automated; specialists are safer.' }
      ],
      freeResources: [
        { name: 'Harvard CS50x', url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science', why: 'The gold standard intro. Teaches thinking, not just syntax.', whenToStop: 'After Week 5 if logic feels repetitive.', notFor: 'Certificate hunters.' },
        { name: 'Roadmap.sh', url: 'https://roadmap.sh', why: 'Visual guides for every role.', whenToStop: 'Once you choose a specific path.', notFor: 'Easily overwhelmed students.' }
      ]
    },
    {
      id: 'business-management',
      title: 'Business / Management',
      description: 'Understanding organizational leverage and glue.',
      actuallyIs: 'You learn how organizations function: accounting, finance, marketing, operations, and HR. You are the "glue" between different departments, ensuring the business makes money and stays organized.',
      dailyWork: [
        'Analyzing performance metrics in Excel.',
        'Coordinating between technical and sales teams.',
        'Managing project budgets and timelines.',
        'Solving operational fires (supply chain, HR issues).',
        'Reporting data to senior leadership.'
      ],
      whoItFits: [
        'Strong communicators who can lead teams.',
        'People who enjoy identifying patterns in data.',
        'Generalists who get bored specializing in one skill.',
        'Strong networkers who build relationships easily.'
      ],
      whoShouldAvoid: [
        'Introverts who find constant meeting/negotiation draining.',
        'People who hate spreadsheets and contracts.',
        'Those seeking a "hard" technical skill for security.',
        'Individuals who prefer working completely alone.'
      ],
      careerPaths: {
        employee: ['Management Consultant', 'Marketing Manager', 'Operations Lead'],
        freelance: ['Project Management', 'Business Consultant'],
        business: ['Entrepreneurship', 'Retail/Service Ownership']
      },
      uzVsAbroad: {
        uz: ['Very useful for the growing private sector in Tashkent.', 'Merit is becoming more important than legacy networks.'],
        abroad: ['Extremely valuable with a top-tier MBA.', 'High competition for entry-level analyst roles.']
      },
      realityCheck: [
        { factor: 'Difficulty', rating: 'LOW-MEDIUM', notes: 'Conceptual and relationship-based.' },
        { factor: 'Competition', rating: 'EXTREME', notes: 'The most common major globally.' },
        { factor: 'Income Potential', rating: 'MEDIUM-HIGH', notes: 'Starts low, but scales high in seniority.' },
        { factor: 'AI Risk', rating: 'MEDIUM', notes: 'Routine management is being automated; leadership isn\'t.' }
      ],
      freeResources: [
        { name: 'MIT Sloan (OCW)', url: 'https://ocw.mit.edu/courses/management/', why: 'Rigorous university materials.', whenToStop: 'After understanding Case Study methodology.', notFor: 'Light motivational readers.' },
        { name: 'CFI Accounting Fundamentals', url: 'https://corporatefinanceinstitute.com/resources/free-courses/', why: 'Actual skills (balance sheets).', whenToStop: 'After finishing the basics.', notFor: 'Math-haters.' }
      ]
    },
    {
      id: 'economics',
      title: 'Economics',
      description: 'The science of resource allocation and incentives.',
      actuallyIs: 'Economics is the study of how society manages resources. It’s not just about money; it’s about human behavior, incentives, and data. You learn to model how the world works and predict how changes in policy affect people.',
      dailyWork: [
        'Statistical analysis of market trends.',
        'Writing policy recommendations or research reports.',
        'Using software like R, Stata, or Python for modeling.',
        'Monitoring central bank and global market news.',
        'Creating presentations for non-technical stakeholders.'
      ],
      whoItFits: [
        'Logical thinkers with a strong mathematical base.',
        'People curious about global politics and poverty.',
        'Students who enjoy abstract thinking and modeling.',
        'Strong writers who can explain data simply.'
      ],
      whoShouldAvoid: [
        'Those who want a practical "how-to-run-a-shop" degree.',
        'People who struggle with advanced statistics.',
        'Students who find political theory boring.',
        'Those looking for a creative, hands-on physical job.'
      ],
      careerPaths: {
        employee: ['Policy Analyst', 'Investment Banker', 'Data Scientist'],
        freelance: ['Economic Research', 'Data Analysis Consulting'],
        business: ['Strategy Consulting', 'Venture Capital']
      },
      uzVsAbroad: {
        uz: ['Highly valued in Tashkent’s banking and finance sector.', 'Essential for government reform departments.'],
        abroad: ['Extremely competitive in global finance and NGOs.', 'Requires a Master’s or PhD for high-level research roles.']
      },
      realityCheck: [
        { factor: 'Difficulty', rating: 'MEDIUM-HIGH', notes: 'Heavy math/statistics in upper years.' },
        { factor: 'Competition', rating: 'HIGH', notes: 'Competitive for top finance/consulting roles.' },
        { factor: 'Income Potential', rating: 'HIGH', notes: 'Very high in finance; lower in academia.' },
        { factor: 'AI Risk', rating: 'MEDIUM', notes: 'Data processing is automated; intuition is not.' }
      ],
      freeResources: [
        { name: 'Marginal Revolution University', url: 'https://mru.org/', why: 'Best intuitive explanation of econ concepts.', whenToStop: 'After finishing Macro/Micro basics.', notFor: 'Memorization-seekers.' },
        { name: 'Khan Academy Macroeconomics', url: 'https://www.khanacademy.org/economics-finance-domain/macroeconomics', why: 'Solid foundation for high school/uni.', whenToStop: 'Once basics are understood.', notFor: 'Advanced math prep.' }
      ]
    },
    {
      id: 'engineering',
      title: 'Engineering (General)',
      description: 'Applying math and science to physical reality.',
      actuallyIs: 'Engineering is about designing and building things that work. It applies physics and mathematics to solve technical problems, whether it\'s a bridge, a processor, or a car engine. It is a rigorous, technical discipline.',
      dailyWork: [
        'CAD (Computer-Aided Design) modeling.',
        'Conducting site inspections or workshop tests.',
        'Performing complex structural or electrical calculations.',
        'Managing technical safety and compliance documentation.',
        'Collaborating with architects and project managers.'
      ],
      whoItFits: [
        'Natural problem solvers with spatial reasoning.',
        'Students who genuinely enjoy math and physics.',
        'Detail-oriented people who care about safety.',
        'Those who like to see the physical result of their work.'
      ],
      whoShouldAvoid: [
        'People who find technical drawings and rules boring.',
        'Those unwilling to work on-site or in labs.',
        'Students looking for a flexible, creative-only field.',
        'People who struggle with high-precision measurements.'
      ],
      careerPaths: {
        employee: ['Civil Engineer', 'Mechanical Engineer', 'Project Manager'],
        freelance: ['Design Consulting', 'Drafting Services'],
        business: ['Construction Firm', 'Manufacturing Agency']
      },
      uzVsAbroad: {
        uz: ['Massive construction boom in UZ means high local demand.', 'Energy sector (oil/gas/renewables) is a major employer.'],
        abroad: ['High specialization (Aerospace, Bio-eng) is required.', 'Professional licensing (PE) is essential for career growth.']
      },
      realityCheck: [
        { factor: 'Difficulty', rating: 'VERY HIGH', notes: 'Known as one of the hardest undergraduate degrees.' },
        { factor: 'Competition', rating: 'MEDIUM-HIGH', notes: 'Steady demand, but entry-level is competitive.' },
        { factor: 'Income Potential', rating: 'HIGH', notes: 'High starting salaries and stable growth.' },
        { factor: 'AI Risk', rating: 'LOW-MEDIUM', notes: 'Physical execution and safety logic are hard to automate.' }
      ],
      freeResources: [
        { name: 'MIT OpenCourseWare (Eng)', url: 'https://ocw.mit.edu/courses/engineering/', why: 'The global standard for engineering theory.', whenToStop: 'After understanding basic statics.', notFor: 'Visual learners.' },
        { name: 'The Engineering Mindset (YT)', url: 'https://www.youtube.com/@EngineeringMindset', why: 'Great visual explanations of systems.', whenToStop: 'Once concepts feel clear.', notFor: 'Advanced calculation prep.' }
      ]
    },
    {
      id: 'medicine',
      title: 'Medicine',
      description: 'The high-stakes science of human life.',
      actuallyIs: 'Medicine is the science of diagnosing and treating disease. It is a lifelong commitment to learning, high stress, and long hours. It is not just about helping people; it is about high-precision biological maintenance.',
      dailyWork: [
        'Conducting patient consultations and examinations.',
        'Continuous charting and documentation (40% of time).',
        'Hospital rounds and overnight shifts.',
        'Analyzing lab results and diagnostic images.',
        'Consulting with other specialists on complex cases.'
      ],
      whoItFits: [
        'Highly disciplined and organized individuals.',
        'Empathetic but emotionally resilient people.',
        'Students with a massive capacity for memorization.',
        'Those who can maintain focus for 12+ hours.'
      ],
      whoShouldAvoid: [
        'Those seeking "quick money" or a 9-to-5 lifestyle.',
        'People who cannot handle blood, trauma, or high-stakes stress.',
        'Students who hate the idea of studying until age 30.',
        'Those who struggle with interpersonal communication.'
      ],
      careerPaths: {
        employee: ['Surgeon', 'General Practitioner', 'Medical Researcher'],
        freelance: ['Private Consultation (after 10+ years)', 'Medical Writing'],
        business: ['Private Clinic Owner', 'Medical Tech Entrepreneur']
      },
      uzVsAbroad: {
        uz: ['High social status, but low state salary for juniors.', 'Growing private sector offers better financial rewards.'],
        abroad: ['Critical shortages in most developed countries.', 'Requires brutal licensing exams (USMLE/PLAB/M6).']
      },
      realityCheck: [
        { factor: 'Difficulty', rating: 'EXTREME', notes: 'Volume of information is overwhelming.' },
        { factor: 'Competition', rating: 'EXTREME', notes: 'Entry into med school is the hardest hurdle.' },
        { factor: 'Income Potential', rating: 'HIGH (LONG TERM)', notes: 'Starts low, becomes very high after specialization.' },
        { factor: 'AI Risk', rating: 'LOW', notes: 'Physical procedures and complex clinical judgment.' }
      ],
      freeResources: [
        { name: 'Osmosis (YouTube)', url: 'https://www.youtube.com/c/osmosis', why: 'Best visual medical education.', whenToStop: 'After understanding basic pathophysiology.', notFor: 'In-depth surgical prep.' },
        { name: 'Kenhub Anatomy Basics', url: 'https://www.kenhub.com/', why: 'Learn the foundational structures.', whenToStop: 'After basic anatomy overview.', notFor: 'Complete medical novices.' }
      ]
    }
  ],
  exams: [
    {
      id: 'sat',
      title: 'SAT',
      shortDescription: 'Essential for elite US admissions and merit-based financial aid strategies.',
      whoNeeds: [
        'Applying to top-tier US universities (Ivy League, MIT, etc.).',
        'Targeting selective state schools (Purdue, Georgia Tech).',
        'Students looking for merit-based scholarships.'
      ],
      whoDoesNot: [
        'Applying to non-selective US schools (community colleges).',
        'Targeting UK, Canadian, or European universities.',
        'Applying to schools that are strictly test-blind.'
      ],
      scoreRanges: [
        { type: 'Ivy League', range: '1500–1560', competitiveness: 'Top 1% of test-takers' },
        { type: 'Elite non-Ivies', range: '1480–1550', competitiveness: 'Top 1-2%' },
        { type: 'Selective state', range: '1250–1400', competitiveness: 'Top 10-20%' }
      ],
      commonMistakes: [
        'Not practicing under time pressure.',
        'Ignoring weak areas (focusing only on math).',
        'Too many materials; one good resource is enough.',
        'Memorizing answers instead of concepts.',
        'Only watching videos without active solving.',
        'Not analyzing mistakes thoroughly.'
      ],
      resources: [
        { name: 'Khan Academy SAT Prep', url: 'https://www.khanacademy.org/sat', why: 'Official partner of College Board. Best free option.', whenToStop: 'Once you hit your target practice score consistently.', notFor: 'People who need live classroom motivation.' }
      ],
      whenToStop: [
        'Once you hit your target score in 3+ practice tests.',
        'When you reach the "diminishing returns" phase (after 80 hours of study).',
        '2 months before your application deadline.'
      ],
      officialMaterials: [
        { name: "Bluebook App", url: "https://bluebook.collegeboard.org/", why: "Official digital testing environment. Most accurate practice tests.", whenToStop: "Use for full-length diagnostics only.", notFor: "Quick drill practice." },
        { name: "CB Practice PDFs", url: "https://satsuite.collegeboard.org/sat/practice-preparation/practice-tests", why: "Static official questions for review.", whenToStop: "After reviewing every official test.", notFor: "Learning new concepts." }
      ],
      commonlyUsedBooks: [
        "Erica Meltzer (DSAT Reading/Writing)",
        "College Panda (DSAT Math)",
        "The Official SAT Study Guide"
      ],
      additionalPlatforms: [
        { name: "1600.io", url: "https://1600.io/", why: "Detailed video explanations of official tests.", whenToStop: "When you can explain the logic yourself.", notFor: "Absolute beginners." },
        { name: "UWorld", url: "https://www.uworld.com/collegeprep/sat/sat.aspx", why: "Best practice question bank outside official sources.", whenToStop: "When you run out of new questions.", notFor: "Low-budget prep (Paid)." }
      ],
      scoreMapping: [
        { range: "1550+", focus: "Targeting top 10 US universities (Harvard, MIT)." },
        { range: "1450-1530", focus: "Competitive for most top 50 US schools." },
        { range: "1350-1440", focus: "Solid for selective state universities." }
      ],
      desmosGuidance: {
        title: "Desmos Strategy",
        description: "Mastering the built-in graphing calculator is essential for the Math module. It can solve roughly 30% of questions faster than manual algebra.",
        link: "https://www.youtube.com/results?search_query=sat+desmos+tricks"
      },
      youtubeChannels: [
        { name: "Scalar Learning", description: "Best for real-time math solving under time pressure." },
        { name: "Strategic Test Prep", description: "Focuses on digital SAT strategies and time management." }
      ]
    },
    {
      id: 'ielts',
      title: 'IELTS (Academic)',
      shortDescription: 'The standard metric for English proficiency globally.',
      whoNeeds: [
        'Applying to universities in the UK, Australia, or Canada.',
        'Seeking admission to international branch campuses in Uzbekistan (WIUT, Turin, etc.).',
        'Students targeting European degrees taught in English.'
      ],
      whoDoesNot: [
        'Applying to local UZ state universities (unless specific major requirement).',
        'Targeting US schools that accept DET/Duolingo (which is cheaper).',
        'Students who already have evidence of 4+ years of English-medium schooling.'
      ],
      scoreRanges: [
        { type: 'Elite/Global Top 50', range: '7.5 – 8.5', competitiveness: 'Very High (C1/C2 Level)' },
        { type: 'Standard International', range: '6.5 – 7.0', competitiveness: 'High (B2/C1 Level)' },
        { type: 'Foundation/Local', range: '5.5 – 6.0', competitiveness: 'Moderate (B2 Level)' }
      ],
      commonMistakes: [
        'Memorizing "templates" for Writing Task 2.',
        'Ignoring the specific criteria for Speaking (Fluency > Accuracy).',
        'Using "complex" vocabulary incorrectly instead of being clear.',
        'Not practicing under real-time constraints for Reading.',
        'Focusing on accents instead of pronunciation.'
      ],
      resources: [
        { name: 'IELTS Liz', url: 'https://ieltsliz.com/', why: 'Best structured guide for task-specific strategies.', whenToStop: 'Once you understand the marking criteria fully.', notFor: 'Students who need interactive feedback.' },
        { name: 'Road to IELTS (Free Version)', url: 'https://www.ielts.org/en-us/about-the-test/sample-test-questions', why: 'Official sample questions from the creators.', whenToStop: 'After completing all official sample modules.', notFor: 'Complete beginners.' }
      ],
      whenToStop: [
        'When your mock test results are consistently at or above your target band.',
        'After 3 months of intensive study (plateaus are common after this).',
        'When you find yourself over-thinking simple questions.'
      ]
    },
    {
      id: 'det',
      title: 'Duolingo English Test (DET)',
      shortDescription: 'A high-speed, cost-effective alternative for US admissions.',
      whoNeeds: [
        'Applying to US universities on a tight budget ($59 vs $200+).',
        'Students who need results in 48 hours.',
        'Those who prefer an adaptive, computer-based testing style.'
      ],
      whoDoesNot: [
        'Applying to most UK or Australian universities (lower acceptance).',
        'Students who struggle with fast-paced, adaptive questions.',
        'Applying to specific "IELTS only" scholarship programs.'
      ],
      scoreRanges: [
        { type: 'Elite US Admissions', range: '135 – 150', competitiveness: 'Top Tier' },
        { type: 'Selective US Schools', range: '120 – 130', competitiveness: 'Competitive' },
        { type: 'Standard Entry', range: '105 – 115', competitiveness: 'Moderate' }
      ],
      commonMistakes: [
        'Looking away from the screen (test is invalidated immediately).',
        'Not checking microphone/internet quality beforehand.',
        'Speaking too quietly during the recording sections.',
        'Underestimating the speed required for "Write about a Photo".'
      ],
      resources: [
        { name: 'DET Official Guide', url: 'https://englishtest.duolingo.com/readiness', why: 'The only source for real practice questions.', whenToStop: 'Once you hit your target range in the practice test twice.', notFor: 'People looking for "hacks".' }
      ],
      whenToStop: [
        'When you score 10 points above your target in the free practice test.',
        'Once you have mastered the "Production" score sub-section.',
        '3 days before your actual test date (rest is better than cramming here).'
      ]
    }
  ],
  scholarships: [
    {
      id: 'el-yurt-umidi',
      title: 'El-Yurt Umidi Foundation',
      origin: 'UZBEKISTAN',
      description: 'The primary government funding for elite international study.',
      whatItIs: 'A state-funded initiative providing full financial support for undergraduate and graduate education at top 300 universities globally.',
      whoItsFor: [
        'Citizens of Uzbekistan under 25 (Bachelors) or older (Masters/PhD).',
        'Individuals with confirmed admission from a top-300 world university.',
        'Those aiming for public sector leadership.'
      ],
      coverage: 'Full tuition, airfare, visa fees, health insurance, and monthly living stipend.',
      competitiveness: 'EXTREMELY HIGH',
      obligations: [
        'Return to Uzbekistan immediately after graduation.',
        'Mandatory work in state organizations for 3-5 years.',
        'Surrendering passport during the study period (often required for security).'
      ],
      whoShouldNotApply: [
        'Students wanting to seek permanent residency abroad.',
        'Those who prefer the flexibility of the private sector early in their career.',
        'Students without an unconditional offer from a top-tier university.'
      ],
      realityCheck: 'The most generous funding available, but it is effectively a "talent loan" repaid via years of mandatory state service.',
      url: 'https://eyuf.uz/'
    },
    {
      id: 'turkiye-burslari',
      title: 'Turkiye Burslari (Government)',
      origin: 'INTERNATIONAL',
      description: 'Comprehensive government-funded scholarship for Turkey.',
      whatItIs: 'Full financial support for Bachelor’s, Master’s, and PhD levels at prestigious Turkish universities.',
      whoItsFor: [
        'Students with high GPA (usually 70%+ for undergraduate).',
        'Uzbek speakers who can rapidly bridge the language gap (very high similarity).',
        'Individuals aiming for degrees in Social Sciences, Engineering, or Health.'
      ],
      coverage: 'University tuition, monthly stipend, flight tickets, health insurance, and 1-year Turkish language course (highly accessible for Uzbek students).',
      competitiveness: 'HIGH',
      obligations: [
        'Completion of a mandatory 1-year Turkish language course.',
        'Maintain academic standards during the study period.'
      ],
      whoShouldNotApply: [
        'Students seeking English-only education without any regional cultural integration.',
        'Applicants who do not meet the strict age requirements (21 for Bachelor, 30 for Master).'
      ],
      realityCheck: 'A strategic all-inclusive path. The language requirement is actually a "low-effort" win for Uzbeks due to the 80% similarity between our languages.',
      url: 'https://www.turkiyeburslari.gov.tr/'
    },
    {
      id: 'daad',
      title: 'DAAD Scholarship (Germany)',
      origin: 'INTERNATIONAL',
      description: 'The main funding path for studying in Germany.',
      whatItIs: 'Financial support for international students and researchers to pursue higher education at state-recognized German universities.',
      whoItsFor: [
        'Highly qualified students aiming for Master’s or PhD.',
        'Individuals with a focus on research or development-related fields.',
        'Students with some professional experience (depending on the specific program).'
      ],
      coverage: 'Monthly stipend (€934 for Master’s, €1,200 for PhD), travel allowance, health insurance, and sometimes language course subsidies.',
      competitiveness: 'VERY HIGH',
      obligations: [
        'Academic excellence and reporting on progress.',
        'Some programs require returning to the home country after graduation.'
      ],
      whoShouldNotApply: [
        'Undergraduate students (most DAAD funding is for Master’s/PhD).',
        'Students who prefer private universities in Germany (usually not covered).',
        'Applicants without a strong academic profile.'
      ],
      realityCheck: 'Germany offers tuition-free education at public universities; DAAD is the most prestigious way to cover your living costs.',
      url: 'https://www.daad.uz/'
    },
    {
      id: 'chevening',
      title: 'Chevening Scholarship (UK)',
      origin: 'INTERNATIONAL',
      description: 'Global leadership program funded by the UK Foreign Office.',
      whatItIs: 'Full funding for a one-year Master’s degree in the UK for individuals with demonstrable leadership potential.',
      whoItsFor: [
        'Uzbek citizens with 2+ years of work experience.',
        'Individuals with a strong academic background.',
        'Future leaders aiming to influence policy or industry.'
      ],
      coverage: 'University tuition fees, a monthly living stipend, economy class return airfare, and additional grants.',
      competitiveness: 'EXTREMELY HIGH',
      obligations: [
        'Must return to Uzbekistan for at least two years after the scholarship ends.',
        'Engagement with the global Chevening alumni network.'
      ],
      whoShouldNotApply: [
        'Individuals without at least 2,800 hours of work experience.',
        'Those seeking a PhD or undergraduate degree.',
        'Students who do not intend to return to UZ.'
      ],
      realityCheck: 'A highly prestigious networking opportunity, but requires clear career goals and proven leadership history.',
      url: 'https://www.chevening.org/scholarship/uzbekistan/'
    }
  ],
  paths: [AUSBILDUNG_PATH_EN]
};

const UZ_CONTENT: SiteContent = {
  ...EN_CONTENT,
  ui: {
    ...EN_CONTENT.ui,
    seo: {
      home: { title: "ClearPath — Oʻzbekiston talabalari uchun qaror qabul qilish yoʻriqnomasi", desc: "Oʻzbekistonlik talabalar uchun ochiq ma’lumotlar indeksi. Yo‘nalishlar, imtihonlar va karyera yo‘llari bo‘yicha rostgo‘y ma’lumotlar." },
      majors: { title: "Mutaxassisliklar indeksi — ClearPath", desc: "Oʻzbekiston universitet yoʻnalishlarining xolis tahlili. Kundalik voqelik, daromad salohiyati va stress omillari." },
      exams: { title: "Xalqaro imtihonlar indeksi — ClearPath", desc: "SAT, IELTS va DET imtihonlari boʻyicha strategik ma’lumotlar va kirish talablari." },
      scholarships: { title: "Grantlar va moliyalashtirish — ClearPath", desc: "El-Yurt Umidi, Chevening va Turkiya Burslari kabi grant dasturlarining tahlili." },
      paths: { title: "Amaliy yoʻllar — ClearPath", desc: "Universitetga muqobil boʻlgan amaliy va ishga yoʻnaltirilgan yo_llar, Ausbildung tahlili." },
      resources: { title: "Bepul o‘quv resurslari — ClearPath", desc: "Talabalar uchun saralangan va sifatli bepul resurslar katalogi." },
      gapYear: { title: "Tanaffus yili strategiyasi — ClearPath", desc: "O‘zbekistonda Gap Year (tanaffus yili) olishning foyda va zararlari haqida rostgo‘y qo‘llanma." },
      "gap-year": { title: "Tanaffus yili strategiyasi — ClearPath", desc: "O‘zbekistonda Gap Year (tanaffus yili) olishning foyda va zararlari haqida rostgo‘y qo‘llanma." },
      about: { title: "ClearPath loyihasi haqida", desc: "Nima uchun biz O‘zbekiston talabalari uchun ushbu rostgo‘y qo‘llanmani yaratdik." },
      contact: { title: "So‘rovlar va fikr-mulohazalar — ClearPath", desc: "Murakkab qarorlar va loyiha bo‘yicha fikrlar uchun aloqa protokoli." }
    },
    decisionGuide: "Ma’lumotnoma",
    startBriefing: "Yo‘nalishlarni ko‘rish",
    practicalAlternatives: "Amaliy tajribani o‘rganish",
    howToUse: "Indeksdan foydalanish qoidalari",
    philosophyTitle: "Ma’lumot chegaralari",
    noteOnDecisions: "Mustaqil ma’lumotnoma",
    methodology: "Ma’lumotlar metodologiyasi",
    academicLibrary: "Yo‘nalishlar",
    practicalPaths: "Amaliy yo‘llar",
    exams: "Imtihonlar",
    scholarshipsLabel: "Grantlar",
    resourcesLabel: "Resurslar",
    plannerLabel: "Rejalashtiruvchi",
    gapYear: "Gap Year",
    academicHeader: "Akademik arxiv",
    practicalHeader: "Amaliy yo‘llar",
    toolsHeader: "Asboblar va resurslar",
    readyForTruth: "Tahlilni ko‘rish",
    analysisComplete: "Hujjatlar ko‘rib chiqildi.",
    returnToDirectory: "Indeksga qaytish",
    backToOverview: "Asosiy indeks",
    inquiry: "Aloqa",
    feedback: "Fikrlar",
    soon: "Tez kunda",
    locked: "Ko‘rib chiqilmoqda",
    sourcesReferenced: "Asoslangan manbalar",
    logoDisclaimer: "Logotiplar faqat ma’lumot uchun. Hech qanday hamkorlik nazarda tutilmagan.",
    academicLabel: "AKADEMIK",
    careerLabel: "KARYERA VA TAJRIBA",
    editorialIndex: "Ma’lumotlar indeksi — 2025-yil nashri",
    homeTitle1: "To'g'ri ma'lumot,",
    homeTitle2: "tartiblangan.",
    homeSubtitle: "O‘zbekistonlik talabalar uchun ochiq ma’lumotlar indeksi. Universitet yo‘nalishlari, xalqaro imtihonlar va muassasa talablari bo‘yicha hujjatlashtirilgan tahlillar.",
    homeQuote: "Qaror qabul qilishda odamlar dars qilmaganidan emas, noto‘g‘ri ma’lumotga tayanganidan yutqazadi. Biz shu ma’lumotlarni siz uchun tartibladik.",
    philTitle: "ROSTGO‘Y BOSHLANG‘ICH",
    philSub: "Ushbu qo‘llanmadan qanday foydalanish kerak?",
    phil1: "Biz siz uchun qaror qabul qilmaymiz. Ushbu qo‘llanma sizga o‘zingiz mustaqil qaror qabul qilishingiz uchun rostgo‘y ma’lumot berish uchun yaratilgan. Yo‘lingiz — o‘z qo‘lingizda.",
    phil2: "Biz hamma narsani boricha ko‘rsatishga ishonamiz — ijobiy tomonlarini ham, qiyinchiliklarini ham. Biz faktlar kutubxonasiymiz, kouch emasmiz.",
    phil3: "Hozir boshingiz qotgan bo‘lsa, bu normal holat. Ushbu indeks sizga bo‘sh va’dalar o‘rniga aniq ma’lumotlar berish orqali chalkashlikdan chiqishga yordam beradi.",
    phil4: "Buni kompas deb tasavvur qiling. Biz sizga narsalar qayerda ekanini ko‘rsatamiz, lekin uni qo‘lda ushlab, yo‘nalishni tanlaydigan sizsiz.",
    methTitle: "Metodologiya",
    methSub: "Cross-referencing requirements",
    meth1Title: "Manbani tekshirish",
    meth1Desc: "Qarorlar mustaqil tekshiruvni talab qiladi. Foydalanuvchilarga ushbu indeksni rasmiy muassasa portallari bilan solishtirish tavsiya etiladi.",
    meth2Title: "Hujjatlashtirilgan voqelik",
    meth2Desc: "Har bir yo‘nalish sanoatning hujjatlashtirilgan omillariga tayanadi, jumladan kundalik vazifalar, daromad diapazonlari va stress darajalari.",
    footerTagline: "O‘zbekistonlik talabalar uchun qarorlar intellekti. Haqiqatga asoslangan, aniqlik uchun qurilgan.",
    footerNavHeader: "Navigatsiya",
    footerInquiryHeader: "So‘rovlar",
    footerCopyright: "Decision Intelligence Lab",
    footerLocation: "O‘zbekiston",
    academicArchiveLabel: "01-arxiv — Akademik yo‘nalishlar",
    academicPageDesc: "Universitet yo‘nalishlarining xolis tahlili. Biz kundalik voqelikka, uzoq muddatli stress omillariga va haqiqiy karyera imkoniyatlariga e’tibor qaratamiz.",
    examsArchiveLabel: "02-arxiv — Metrika va talablar",
    examsPageDesc: "Qabul jarayonida foydalaniladigan xalqaro imtihonlar haqida xolis ma’lumotlar. Resurslaringizni sarflashdan oldin ularning ahamiyatini aniqlang.",
    scholarshipsArchiveLabel: "03-arxiv — Kapital va grantlar",
    scholarshipsPageDesc: "Moliyalashtirish imkoniyatlari tahlili. Biz grantlar bilan bog‘liq majburiyatlar va ularning haqiqiy voqeligini ko‘rsatamiz.",
    pathsArchiveLabel: "04-arxiv — Amaliy mantiq",
    pathsPageDesc: "An’anaviy universitet yo‘nalishlariga muqobil bo‘lgan yuqori samarali va ishga yo‘naltirilgan yo‘llarning bahosi.",
    resourcesArchiveLabel: "Aktivlar katalogi — 03",
    resourcesPageTitle: "Aktivlar inventarizatsiyasi.",
    resourcesPageDesc: "Saralangan bilimlar. Biz bepul kontentning 99 foizini e’tibordan chetda qoldirib, sizni haqiqiy ishga tayyorlaydigan 1 foizini ajratdik.",
    resourceDirectiveLabel: "Operatsion direktiva",
    resourceDirectiveQuote: "Linklarni yig‘ishni to‘xtating. Bitta resursni tanlang, uni egallang, so‘ng keyingisiga o‘ting. Link yig‘ish — o‘rganmaslik uchun bahonadir.",
    resourceContextLabel: "Kontekst",
    resourceDiscardLabel: "Ushbu holatda rad eting",
    activeAnalysis: "Faol tahlil",
    pathAvailable: "Mavjud",
    pathStatus: "Holat",
    verifiedPathway: "Tasdiqlangan yo‘l",
    viewPath: "Yo‘lni ko‘rish",
    queueLabel: "Navbatda",
    pathDescription: "Texnik ta’lim, xarajatlar va yashash talablarining batafsil strategik tahlili.",
    pathDirectory: "Yo‘llar katalogi",
    intelligenceAnalysis: "Intellektual tahlil",
    brutallyHonest: "Strategik jihatdan ochiq-oydin tahlil.",
    whatItIs: "Aslida bu nima",
    systemDefinition: "Tizim ta’rifi",
    strategicFitment: "Strategik moslik",
    profileAnalysis: "Profil tahlili",
    strategicMoveIf: "Strategik qadam, AGAR:",
    highRiskIf: "YUQORI XAVF, agarda:",
    idealProfile: "Ideal nomzod profili",
    languageReality: "Til voqeligi",
    communicationBarrier: "Muloqot to‘sig‘i",
    officialRequirement: "Rasmiy talab",
    practicalMinimum: "Amaliy minimum",
    preparationTrajectory: "Tayyorgarlik trayektoriyasi",
    fieldAnalysis: "Soha tahlili",
    operationalSectors: "Operatsion sektorlar",
    acceptanceRate: "Qabul darajasi",
    salaryLabel: "Maosh",
    challengeLabel: "Qiyinchilik",
    financialLogic: "Moliyaviy mantiq",
    cashFlowAnalysis: "Pul oqimi tahlili",
    industryLabel: "Sanoat",
    y1Gross: "1-yil (Yalpi)",
    y3Gross: "3-yil (Yalpi)",
    expensesLabel: "Taxminiy xarajatlar",
    deficitWarning: "Taqchillik haqida ogohlantirish",
    longTermMath: "Uzoq muddatli hisob-kitob",
    timeCommitment: "Vaqt talabi",
    executionReality: "Ijro voqeligi",
    durationLabel: "Davomiyligi",
    weeklyLoad: "Haftalik yuklama",
    physicalMentalLoad: "Jismoniy va ruhiy yuklama",
    dropoutRateLabel: "O‘qishdan chetlatilish",
    visaLegalLabel: "Viza va qonunchilik",
    complianceProtocol: "Muvofiqlik protokoli",
    legalBasis: "Huquqiy asos",
    docRecognition: "Hujjatlarni tan olish",
    legalRisksLabel: "Huquqiy xavflar",
    risksDownsides: "Xavf va kamchiliklar",
    darkSide: "Qorong‘u tomonlar",
    mythsReality: "Afsona va haqiqat",
    filteredTruth: "Saralangan haqiqat",
    mythLabel: "Afsona",
    realityLabel: "Haqiqat",
    postCompletion: "Tugatgandan so‘ng",
    payoffLabel: "Natija",
    placementRateLabel: "Ishga joylashish",
    startingGrossLabel: "Boshlang‘ich maosh",
    careerTrajectory: "Karyera trayektoriyasi",
    comparativeAnalysis: "Qiyosiy tahlil",
    alternativeLogic: "Muqobil mantiq",
    vsUniversity: "Universitetga nisbatan",
    vsUnskilled: "Malakasiz ishga nisbatan",
    vsShortCourses: "Qisqa kurslarga nisbatan",
    finalAssessment: "Yakuniy baho",
    bluntTruth: "Ochiq haqiqat",
    strategicInquiry: "Strategik so‘rov",
    contactProtocol: "Aloqa protokoli",
    tierALabel: "A-daraja",
    localProgramsLabel: "Mahalliy dasturlar",
    tierBLabel: "B-daraja",
    globalFundingLabel: "Global moliyalashtirish",
    riskLabelPrefix: "Xavf:",
    utilityLabelPrefix: "Foydalilik:",
    competitivenessLabel: "Raqobatbardoshlik",
    coverageLabel: "Qamrov",
    riskFactorsLabel: "Xavf omillari",
    targetProfileLabel: "Maqsadli profil",
    requiredObligationsLabel: "Majburiyatlar",
    realityCheckLabel: "Haqiqatni tekshirish",
    majorIntelligenceFile: "Soha tahliliy hujjati",
    majorDirectory: "Kutubxona katalogi",
    examDirectory: "Imtihonlar katalogi",
    metricAnalysisFile: "Metrik tahlil hujjati",
    benchmarkFile: "Benchmark hujjati",
    evaluateRelevance: "Ahamiyatini baholash",
    strategicRelevance: "Strategik ahamiyat",
    whoNeedsThis: "Kimga kerak?",
    resourceProtection: "Resurslarni himoya qilish",
    whoShouldSkip: "Kimga tavsiya etilmaydi?",
    benchmarkTargets: "Benchmark maqsadlari",
    scoreThresholds: "Ball chegaralari",
    exitStrategy: "Chiqish strategiyasi",
    whenToStop: "Qachon to‘xtash kerak",
    discontinueIf: "Tayyorgarlikni to‘xtating, agar:",
    executionAssets: "Tayyorgarlik aktivlari",
    vettedResources: "Tekshirilgan resurslar",
    objectiveReality: "Obyektiv voqelik",
    tacticalScorecard: "Taktik baholash",
    dailyOperations: "Kundalik vazifalar",
    intelligenceAssets: "Bilim aktivlari",
    alignmentSignal: "Moslik signali",
    riskSignal: "Xavf signali",
    analysisCompleteTitle: "Tahlil tugallandi. Yana birini ko‘ramizmi?",
    operationalGoal: "Operatsion maqsad",
    thresholdForStopping: "To‘xtash uchun chegara",
    briefingComplete: "Brifing yakunlandi",
    avoidIf: "Rad eting, agar:",
    moduleLabel: "Modul",
    gapYearFeatureLabel: "Maxsus tahlil",
    gapYearTitleMain: "Tanaffus yili",
    gapYearTitleItalic: "Strategik kechikish",
    gapYearIntro: "Universitetga kirishni kechiktirish — bu siz qilgan eng aqlli qadam yoki barcha imkoniyatni qo‘ldan boy berish bo‘lishi mumkin. O‘rtacha yo‘l yo‘q.",
    noPressureMsg: "Agar hozir bir qarorga kelishga tayyor bo‘lmasangiz — bu ham normal holat.",
    specialistBtn: "🔒 Mutaxassisdan so‘rash (tez kunda)",
    specialistNote: "Bu yo‘l-yo‘riq emas. Bu hayotiy tajribaga kirish yo‘lidir.",
    officialMaterialsLabel: "Rasmiy materiallar",
    prepBooksLabel: "Tayyorgarlik kitoblari",
    additionalPlatformsLabel: "Qo‘shimcha mashq platformalari",
    scoreGuidanceLabel: "Ball diapazoni bo‘yunda qo‘llanma",
    scoreGuidanceDisclaimer: "Maqsadlar tarixiy tendentsiyalarga asoslangan. Muvaffaqiyat shaxsiy mashg‘ulotlarga bog‘liq. Bu natijalar bo‘yicha va’da emas.",
    desmosTitle: "Desmos kalkulyatori",
    youtubeTitle: "Tekshirilgan YouTube resurslari",
    youtubeNote: "Video tayyorgarlik — qo‘shimcha vosita, u haqiqiy mashg‘ulotning o‘rnini bosa olmaydi.",
    officialReliabilityNote: "Bular eng ishonchli manbalar, chunki ular imtihon yaratuvchilaridan keladi.",
    creditExamsTitle: "Universitet krediti va joylashtirish imtihonlari",
    creditExamsIntro: "Ayrim universitetlar ayrim imtihonlarni kurs krediti sifatida qabul qiladi. Bu ba’zi kirish kurslarini o‘tkazib yuborishga yordam beradi.",
    creditExamsImportant: "Ushbu imtihonlar semestrni avtomatik ravishda yakunlab bermaydi. Yakuniy qaror universitet siyosatiga bog‘liq.",
    creditExamsDisclaimer: "Har bir universitetning kredit siyosati har xil. Bir joyda qabul qilingan imtihon boshqa joyda o‘tmasligi mumkin.",
    creditExamsList: [
      { name: "AP Calculus AB / BC", desc: "Ba’zi universitetlarda Calculus I yoki II o‘rniga o‘tishi mumkin." },
      { name: "CLEP Calculus", desc: "Ayrim universitetlar buni Calculus I krediti sifatida qabul qiladi." },
      { name: "IB Math HL", desc: "IB tizimi o‘quvchilari uchun. Ba’zi joylarda matematika kurslari o‘rniga o‘tadi." }
    ],
    gapYearWhatIsTitle: "Aslida nima u?",
    gapYearWhatIsDesc: "Gap Year — bu maktab va universitet o'rtasidagi strategik tanaffus. Bu ta'til emas, balki shaxsiy va professional o'sishga bag'ishlangan yildir.",
    gapYearVerdictTitle: "Xulosa",
    gapYearVerdictDesc: "Agar tizimli bo'lsa - foydasi katta. Maqsadsiz bo'lsa - xavfi yuqori.",
    gapYearStrategicTitle: "Strategik maqsadlar",
    gapYearStrategic1Title: "Profilni kuchaytirish",
    gapYearStrategic1Desc: "Nufuzli grantlar uchun raqobatbardoshlikni oshirish.",
    gapYearStrategic2Title: "Ko'nikmalarni egallash",
    gapYearStrategic2Desc: "Dasturlash yoki marketing kabi daromadli sohalarni o'rganish.",
    gapYearStrategic3Title: "Ruxiy dam olish",
    gapYearStrategic3Desc: "Kuchli o'qish jarayonidan keyin 'burnout'ning oldini olish.",
    gapYearDeceptionTitle: "Keng tarqalgan aldovlar",
    gapYearDeception1: "Kun bo'yi dars qilaman.",
    gapYearDeception2: "Biznes boshlayman.",
    gapYearDeception3: "Uchta til o'rganaman.",
    gapYearRisksBenefitsTitle: "Xavf va foydalar",
    gapYearUpsideTitle: "Ijobiy tomonlari",
    gapYearUpsideList: ["Yetuklik", "Yaxshi rezyume", "Aniq maqsad"],
    gapYearDownsideTitle: "Salbiy tomonlari",
    gapYearDownsideList: ["Vaqt boy berish", "Ijtimoiy izolyatsiya", "Kechikish"],
    specialistHeader: "Mutaxassislar",
    specialistSubtitle: "Haqiqiy ishchi daftarlari",
    specialistDesc: "Maqsadli sohalarda ishlayotgan yuqori malakali mutaxassislarning kundalik faoliyat jurnallari.",
    marketingPlaceholderTitle: "Raqamli marketing",
    marketingPlaceholderSub: "O‘zbekiston va masofaviy",
    marketingPlaceholderDesc: "Samarali marketing, kontent strategiyasi va ma’lumotlarga asoslangan o‘sish.",
    keyFactsLabel: "Asosiy faktlar",
    disclaimerLabel: "Faqat ma’lumot uchun rad etish",
    ausbildungKeyFacts: [
      "Davomiyligi: 2-3 yil",
      "Tuzilishi: Kompaniya ishi + Kasb-hunar maktabi (Berufsschule)",
      "Moliya: Birinchi kundan boshlab oylik maosh",
      "Til: Odatda nemis tili B1/B2 talab qilinadi",
      "Qonuniy: Rasmiy ish-o‘qish shartnomasi"
    ],
    ausbildungRealityNotes: [
      "Oson emas: To‘liq ish kunini akademik imtihonlar bilan birlashtirishni talab qiladi.",
      "Yuqori intizom: Qat’iy davomat va natijalarni kuzatish.",
      "Madaniy moslashuv: Nemis ish madaniyatiga tezkor kirishish.",
      "Strategik: Bu 'tezda chiqib ketish' emas — bu uzoq muddatli karyera uchun poydevordir."
    ],
    ausbildungDisclaimer: "Ushbu bo‘lim faqat xolis ma’lumotlarni taqdim etadi. Bu Ausbildung tanlovingiz bo‘yicha tavsiya yoki to‘sqinlik qiluvchi ko‘rsatma emas.",
    fieldAnalysisLabel: "Soha tahlili",
    acceptanceRatingLabel: "Qabul reytingi",
    successRateLabel: "Muvaffaqiyat darajasi",
    whyAccessibleLabel: "Nega kirish mumkin",
    challengesLabel: "Maxsus qiyinchiliklar",
    languageNeedLabel: "Til talabi",
    monthlySalaryLabel: "Oylik maosh (Yalpi)",
    deficitRealityLabel: "Taqchillik voqeligi",
    livingExpLabel: "Yashash xarajatlari",
    comparisonUniLabel: "Universitet bilan solishtirganda",
    visaResidenceLabel: "Viza va yashash joyi",
    recognitionBarrierLabel: "Tan olish to‘sig‘i",
    legalRisksSummary: "Huquqiy va tartibga solish xavflari",
    finalVerdictLabel: "Yakuniy strategik xulosa",
    decisionFrameworkLabel: "Qaror qabul qilish asosi",
    honestTimelineLabel: "Haqiqiy ijro muddati"
  },
  majors: [
    {
      id: 'computer-science',
      title: 'Computer Science (AT)',
      description: 'Mantiq va avtomatlashtirish arxitekturasi.',
      actuallyIs: 'CS (Computer Science) — bu kod va tizimlar orqali fikrlashni o‘rganish demakdir. Siz darslik, algoritmlar, ma’lumotlar tuzilmasi va arxitekturani o‘rganisiz. Bu shunchaki "kod yozish" emas, balki nima uchun ma’lum yechimlar ishlashi, boshqalari esa buzilishi va millionlab foydanuvchilarga mo‘ljallangan tizimlarni qanday loyihalashni o‘rganishdir.',
      dailyWork: [
        '9:00-10:00: Stand-up yig‘ilishi (progressni kuzatish).',
        '10:00-12:00: Diqqat bilan kod yozish (mantiqiy amalga oshirish).',
        '13:00-15:00: Kodni ko‘rib chiqish va jamoa a’zolarining fikrlari.',
        '15:00-16:00: Arxitektura va mahsulotni rejalashtirish.',
        '16:00-17:00: Testlash, xatolarni tuzatish va hujjatlashtirish.'
      ],
      whoItFits: [
        'Yangi narsa yaratishdan ko‘ra, xatolarni tuzatish va muammolarni hal qilishni yoqtiradiganlar.',
        'O‘ta aniqlikka sabrli bo‘lganlar (bitta nuqta-vergul hamma narsani buzishi mumkin).',
        'Har 3 yilda asboblar (tools) eskirishiga tayyor bo‘lganlar.',
        'Texnik mantiqni mutaxassis bo‘lmagan menejerlarga tushuntira oladiganlar.'
      ],
      whoShouldAvoid: [
        'Tez va barqaror daromadga muhtoj bo‘lganlar (junior darajasida raqobat juda kuchli).',
        'Kuniga 8-10 soat ekran qarshisida o‘tirishni yoqtirmaydiganlar.',
        'Hech qachon o‘zgarmaydigan bir xil ishlarni xohlaydiganlar.',
        'Abstrakt matematik mantiq bilan qiynaladiganlar.'
      ],
      careerPaths: {
        employee: ['Dasturiy ta’minot muhandisi', 'Ma’lumotlar muhandisi', 'Kiberxavfsizlik mutaxassisi'],
        freelance: ['Veb-sayt yaratish', 'Texnik maslahat berish'],
        business: ['SaaS asoschisi', 'Texnik agentlik egasi']
      },
      uzVsAbroad: {
        uz: ['Fintex va elektron tijorat sohalarida mahalliy talab ortib bormoqda.', 'G‘arb kompaniyalari uchun masofadan ishlash eng yaxshi yo‘l.'],
        abroad: ['Talab yuqori, lekin junior darajasida raqobat shafqatsiz.', 'Viza homiyligi (H1B/EU Blue Card) asosiy maqsad hisoblanadi.']
      },
      realityCheck: [
        { factor: 'Qiyinchilik', rating: 'YUQORI', notes: 'Murakkab nazariya va charchatadigan xatolarni qidirish jarayonlari.' },
        { factor: 'Raqobat', rating: 'JUDA YUQORI', notes: 'Hozir hamma IT sohasiga kirishni xohlamoqda.' },
        { factor: 'Daromad salohiyati', rating: 'YUQORI', notes: 'Xodimlar uchun eng yuqori maoshlar.' },
        { factor: 'AI xavfi', rating: 'O‘RTA-YUQORI', notes: 'Junior vazifalari avtomatlashtirilmoqda; mutaxassislar xavfsizroq.' }
      ],
      freeResources: [
        { name: 'Harvard CS50x', url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science', why: 'Oltin standart. Faqat sintaksis emas, balki fikrlashni o‘rgatadi.', whenToStop: '5-haftadan keyin mantiq takroriy tuyulsa.', notFor: 'Faqat sertifikat qidirayotganlar.' },
        { name: 'Roadmap.sh', url: 'https://roadmap.sh', why: 'Har bir yo‘nalish uchun vizual qo‘llanmalar.', whenToStop: 'Aniq yo‘nalish tanlangandan keyin.', notFor: 'Uzun ro‘yxatlardan tez charchaydiganlar.' }
      ]
    },
    {
      id: 'business-management',
      title: 'Biznes / Boshqaruv',
      description: 'Tashkiliy tizimlar va jamoani birlashtirish san’ati.',
      actuallyIs: 'Siz tashkilotlar qanday ishlashini o‘rganasiz: buxgalteriya, moliya, marketing, operatsiyalar va HR. Siz turli bo‘limlar orasidagi "bog‘lovchi bo‘g‘in" bo‘lasiz, biznes foyda ko‘rishi va tartibli bo‘lishini ta’minlaysiz.',
      dailyWork: [
        'Excel dasturida samaradorlik ko‘rsatkichlarini tahlil qilish.',
        'Texnik va savdo guruhlari o‘rtasidagi ishlarni muvofqlashtirish.',
        'Loyiha byudjeti va muddatlarini boshqarish.',
        'Tezkor muammolarni (ta’minot zanjiri, kadrlar masalalari) hal qilish.',
        'Yuqori rahbariyatga hisobot berish.'
      ],
      whoItFits: [
        'Jamoani boshqara oladigan kuchli muloqot egalari.',
        'Ma’lumotlar ichidan qonuniyatlarni topishni yoqtiradiganlar.',
        'Bitta tor sohada qolib ketishni xohlamaydigan universal mutaxassislar.',
        'Oson munosabat o‘rnata oladigan tarmoq ustalari (networkers).'
      ],
      whoShouldAvoid: [
        'Doimiy uchrashuvlar va muzokaralardan charchaydigan introvertlar.',
        'Elektron jadvallar (Excel) va shartnomalarni yoqtirmaydiganlar.',
        'Xavfsizlik uchun faqat aniq bir texnik ko‘nikmaga tayanmoqchi bo‘lganlar.',
        'To‘liq yolg‘iz ishlashni afzal ko‘radigan shaxslar.'
      ],
      careerPaths: {
        employee: ['Boshqaruv maslahatchisi', 'Marketing menejeri', 'Operatsion rahbar'],
        freelance: ['Loyiha boshqaruvi', 'Biznes maslahatchisi'],
        business: ['Tadbirkorlik', 'Chakana savdo yoki xizmat ko‘rsatish egasi']
      },
      uzVsAbroad: {
        uz: ['Toshkentdagi o‘sib borayotgan xususiy sektor uchun juda foyali.', 'Hozirda natija tanish-bilishdan ko‘ra muhimroq bo‘lmoqda.'],
        abroad: ['Top darajadagi MBA bilan juda qadrli.', 'Junior tahlilchi lavozimlari uchun kuchli raqobat mavjud.']
      },
      realityCheck: [
        { factor: 'Qiyinchilik', rating: 'PAST-O‘RTA', notes: 'Tushunchalar va munosabatlarga asoslangan.' },
        { factor: 'Raqobat', rating: 'EKSTREMAL', notes: 'Dunyo bo‘ylab eng ko‘p tanlanadigan yo‘nalish.' },
        { factor: 'Daromad salohiyati', rating: 'O‘RTA-YUQORI', notes: 'Pastdan boshlanadi, lekin tajriba bilan tez o‘sadi.' },
        { factor: 'AI xavfi', rating: 'O‘RTA', notes: 'Routine management is being automated; leadership isn\'t.' }
      ],
      freeResources: [
        { name: 'MIT Sloan (OCW)', url: 'https://ocw.mit.edu/courses/management/', why: 'Universitet darajasidagi jiddiy materiallar.', whenToStop: 'Keys (Case Study) metodologiyasini tushungandan keyin.', notFor: 'Yengil motivatsion kitob o‘quvchilar.' },
        { name: 'CFI Buxgalteriya asoslari', url: 'https://corporatefinanceinstitute.com/resources/free-courses/', why: 'Haqiqiy ko‘nikmalar (balans hisobotlari).', whenToStop: 'Asoslarni tugatgandan so‘ng.', notFor: 'Matematikani yomon ko‘radiganlar.' }
      ]
    },
    {
      id: 'economics',
      title: 'Iqtisodiyot',
      description: 'Resurslarni taqsimlash va rag‘batlantirish fanidir.',
      actuallyIs: 'Iqtisodiyot — jamiyat resurslarni qanday boshqarishini o‘rganishdir. Bu faqat pul haqida emas, baki inson xulq-atvori, rag‘batlar va ma’lumotlar haqidadir. Siz dunyo qanday ishlashini modellashtirishni va siyosatdagi o‘zgarishlar odamlarga qanday ta’sir qilishini bashorat qilishni o‘rganisiz.',
      dailyWork: [
        'Bozor tendentsiyalarini statistik tahlil qilish.',
        'Siyosiy tavsiyalar yoki tadqiqot hisobotlarini yozish.',
        'Modellashtirish uchun R, Stata yoki Python kabi darslardan foydalanish.',
        'Markaziy bank va global bozor yangiliklarini kuzatish.',
        'Texnik bo‘lmagan tomonlar uchun taqdimotlar tayyorlash.'
      ],
      whoItFits: [
        'Kuchli matematik asosga ega mantiqiy fikrlovchilar.',
        'Global siyosat va kambag‘allik muammolariga qiziqqanlar.',
        'Abstrakt fikrlash va modellashtirishni yoqtiradigan talabalar.',
        'Ma’lumotlarni oddiy tushuntira oladigan kuchli yozuvchilar.'
      ],
      whoShouldAvoid: [
        'Faqat "do‘konni qanday boshqarish"ni o‘rganmoqchi bo‘lganlar.',
        'Murakkab statistika bilan qiynaladiganlar.',
        'Siyosiy nazariyani zerikarli deb biladiganlar.',
        'Ijodiy, jismoniy qo‘l mehnati bilan bog‘liq ish qidirayotganlar.'
      ],
      careerPaths: {
        employee: ['Siyosiy tahlilchi', 'Investitsion bankir', 'Ma’lumotlar olimi (Data Scientist)'],
        freelance: ['Iqtisodiy tadqiqotlar', 'Ma’lumotlar tahlili bo‘yicha maslahat'],
        business: ['Strategik konsalting', 'Venchur kapitali']
      },
      uzVsAbroad: {
        uz: ['Toshkent bank va moliya sektorida juda qadrlanadi.', 'Davlat islohotlari departamentlari uchun zarur mutaxassislar.'],
        abroad: ['Global moliya va NNTlarda (NGO) raqobat juda kuchli.', 'Yuqori darajadagi tadqiqotlar uchun magistratura yoki PhD talab qilinadi.']
      },
      realityCheck: [
        { factor: 'Qiyinchilik', rating: 'O‘RTA-YUQORI', notes: 'Yuqori kurslarda murakkab matematika/statistika.' },
        { factor: 'Raqobat', rating: 'YUQORI', notes: 'Top moliya va konsalting lavozimlari uchun raqobatli.' },
        { factor: 'Daromad salohiyati', rating: 'YUQORI', notes: 'Moliyada juda yuqori; akademiyada biroz pastroq.' },
        { factor: 'AI xavfi', rating: 'O‘RTA', notes: 'Ma’lumotlarni qayta ishlash avtomatlashmoqda; sezgi (intuition) esa yo‘q.' }
      ],
      freeResources: [
        { name: 'Marginal Revolution University', url: 'https://mru.org/', why: 'Iqtisodiy tushunchalarni eng yaxshi tushuntiruvchi manba.', whenToStop: 'Makro/Mikro asoslarni tugatgandan keyin.', notFor: 'Faqat yodlashni xohlaydiganlar.' },
        { name: 'Khan Academy Makroiqtisodiyot', url: 'https://www.khanacademy.org/economics-finance-domain/macroeconomics', why: 'Universitet oldidan mustahkam poydevor.', whenToStop: 'Asoslarni tushungandan so‘ng.', notFor: 'Murakkab matematik tayyorgarlik qidirayotganlar.' }
      ]
    },
    {
      id: 'engineering',
      title: 'Muhandislik (Umumiy)',
      description: 'Matematika va fanni jismoniy voqelikka tatbiq etish.',
      actuallyIs: 'Muhandislik — ishlaydigan narsalarni loyihalash va qurishdir. U texnik muammolarni hal qilish uchun fizika va matematikadan foydalanadi, xoh u ko‘prik, protsessor yoki avtomobil dvigateli bo‘lsin. Bu qat’iy, texnik intizomdir.',
      dailyWork: [
        'CAD (Computer-Aided Design) loyihalash.',
        'Ob’etlarni tekshirish yoki ustaxona sinovlarini o‘tkazish.',
        'Murakkab strukturaviy yoki elektr hisob-kitoblarini bajarish.',
        'Texnik xavfsizlik va muvofiqlik hujjatlarini boshqarish.',
        'Arxitektorlar va loyiha menejerlari bilan hamkorlik qilish.'
      ],
      whoItFits: [
        'Fazoviy fikrlash qobiliyatiga ega tabiiy muammo yechuvchilar.',
        'Matematika va fizikani chin dildan yoqtiradigan talabalar.',
        'Xavfsizlikka befarq bo‘lmagan, detallarga e’tiborli odamlar.',
        'O‘z ishining jismoniy natijasini ko‘rishni yoqtiradiganlar.'
      ],
      whoShouldAvoid: [
        'Texnik chizmalar va qoidalarni zerikarli deb biladiganlar.',
        'Ob’etlarda yoki laboratoriyalarda ishlashni xohlamaydiganlar.',
        'Faqat moslashuvchan va ijodiy soha qidirayotganlar.',
        'Yuqori aniqlikdagi o‘lchovlar bilan qiynaladiganlar.'
      ],
      careerPaths: {
        employee: ['Fuqaro muhandisi', 'Mexanika muhandisi', 'Loyiha menejeri'],
        freelance: ['Dizayn konsaltingi', 'Chizmachilik xizmatlari'],
        business: ['Qurilish firmasi', 'Ishlab chiqarish agentligi']
      },
      uzVsAbroad: {
        uz: ['O‘zbekistondagi qurilish bumu mahalliy talab yuqori ekanligini anglatadi.', 'Energetika sektori asosiy ish beruvchi hisoblanadi.'],
        abroad: ['Tor ixtisoslashuv (Aerokosmik, Bio-muhandislik) talab qilinadi.', 'Karyera o‘sishi uchun professional litsenziya (PE) zarur.']
      },
      realityCheck: [
        { factor: 'Qiyinchilik', rating: 'JUDA YUQORI', notes: 'Eng qiyin bakalavr yo‘nalishlaridan biri sifatida tanilgan.' },
        { factor: 'Raqobat', rating: 'O‘RTA-YUQORI', notes: 'Barqaror talab, lekin kirish darajasida raqobat bor.' },
        { factor: 'Daromad salohiyati', rating: 'YUQORI', notes: 'Yuqori boshlang‘ich maoshlar va barqaror o‘sish.' },
        { factor: 'AI xavfi', rating: 'PAST-O‘RTA', notes: 'Jismoniy ijro va xavfsizlik mantiqini avtomatlashtirish qiyin.' }
      ],
      freeResources: [
        { name: 'MIT OpenCourseWare (Eng)', url: 'https://ocw.mit.edu/courses/engineering/', why: 'Muhandislik nazariyasi bo‘yicha dunyo standarti.', whenToStop: 'Statika asoslarini tushungandan keyin.', notFor: 'Faqat vizual o‘rganuvchilar.' },
        { name: 'The Engineering Mindset (YT)', url: 'https://www.youtube.com/@EngineeringMindset', why: 'Tizimlarning ajoyib vizual tushuntirishlari.', whenToStop: 'Tushunchalar aniq bo‘lgandan keyin.', notFor: 'Murakkab hisob-kitoblar qidirayotganlar.' }
      ]
    },
    {
      id: 'medicine',
      title: 'Tibbiyot',
      description: 'Inson hayoti bilan bog‘liq mas’uliyatli fan.',
      actuallyIs: 'Tibbiyot — kasalliklarga tashxis qo‘yish va davolash fanidir. Bu umrbod o‘rganish, yuqori stress va uzoq ish soatliga tayyor bo‘lish demakdir. Bu nafaqat odamlarga yordam berish, baki yuqori aniqlikdagi biologik xizmat ko‘rsatishdir.',
      dailyWork: [
        'Bemorlarni qabul qilish va tekshirish.',
        'Doimiy ravishda hujjatlar bilan ishlash (vaqtning 40% qismi).',
        'Kasalxonadagi navbatchiliklar va tungi smenalar.',
        'Laboratoriya natijalari va diagnostika tasvirlarini tahlil qilish.',
        'Murakkab holatlar bo‘yicha boshqa mutaxassislar bilan maslahatlashish.'
      ],
      whoItFits: [
        'Juda tartibli va intizomli shaxslar.',
        'Hamdard, lekin hissiy jihatdan chidamli odamlar.',
        'Katta hajmdagi ma’lumotni yodlash qobiliyatiga ega talabalar.',
        '12+ soat davomida diqqatni jamlay oladiganlar.'
      ],
      whoShouldAvoid: [
        'Tez pul topishni yoki 9:00 dan 18:00 gacha ishlashni xohlaydiganlar.',
        'Qon, jarohat yoki yuqori stressga chidami bo‘lmaganlar.',
        '30 yoshgacha o‘qish g‘oyasini yoqtirmaydigan talabalar.',
        'Muloqot qilishda qiynaladigan shaxslar.'
      ],
      careerPaths: {
        employee: ['Xirurg', 'Umumiy amaliyot shifokori', 'Tibbiy tadqiqotchi'],
        freelance: ['Xususiy qabul (10+ yillik tajribadan so‘ng)', 'Tibbiy maqolalar yozish'],
        business: ['Xususiy klinika egasi', 'Med-tech tadbirkori']
      },
      uzVsAbroad: {
        uz: ['Ijtimoiy maqom yuqori, lekin davlat shifoxonalarida maosh past.', 'Xususiy sektor yaxshi moliyaviy imkoniyatlar taklif qiladi.'],
        abroad: ['Rivojlangan davlatlarning ko‘pchiligida shifokorlar yetishmaydi.', 'Shafqatsiz litsenziyalash imtihonlarini (USMLE/PLAB) talab qiladi.' ]
      },
      realityCheck: [
        { factor: 'Qiyinchilik', rating: 'EKSTREMAL', notes: 'Ma’lumotlar hajmi juda katta.' },
        { factor: 'Raqobat', rating: 'EKSTREMAL', notes: 'Tibbiyotga kirish — eng qiyin to‘siq.' },
        { factor: 'Daromad salohiyati', rating: 'YUQORI (UZOQ MUDDATDA)', notes: 'Pastdan boshlanadi, mutaxassislikdan keyin juda yuqori bo‘ladi.' },
        { factor: 'AI xavfi', rating: 'PAST', notes: 'Jismoniy muolajalar va murakkab klinik xulosalar.' }
      ],
      freeResources: [
        { name: 'Osmosis (YouTube)', url: 'https://www.youtube.com/c/osmosis', why: 'Eng yaxshi vizual tibbiy ta’lim.', whenToStop: 'Patofiziologiya asoslarini tushungandan keyin.', notFor: 'Chuqur jarrohlik tayyorgarligi.' },
        { name: 'Kenhub Anatomiya asoslari', url: 'https://www.kenhub.com/', why: 'Asosiy tana tuzilmalarini o‘rganish.', whenToStop: 'Anatomik sharhdan keyin.', notFor: 'Tibbiyotdan mutlaqo uzoq bo‘lganlar.' }
      ]
    }
  ],
  scholarships: [
    {
      id: 'el-yurt-umidi',
      title: 'El-Yurt Umidi Jamg‘armasi',
      origin: 'UZBEKISTAN',
      description: 'Xalqaro ta’lim uchun asosiy davlat granti.',
      whatItIs: 'Dunyoning eng kuchli 300 ta universitetida bakalavr va magistratura bosqichida o‘qishni to‘liq moliyalashtiruvchi davlat tashabbusi.',
      whoItsFor: [
        '25 yoshgacha bo‘lgan O‘zbekiston fuqarolari (Bakalavr) yoki kattalar (Magistr/PhD).',
        'Top-300 dunyo universitetidan qabul xati (offer) olgan shaxslar.',
        'Davlat sektorida yetakchilik qilishni maqsad qilganlar.'
      ],
      coverage: 'O‘qish puli (kontrakt), aviachiptalar, viza xarajatlari, sug‘urta va oylik stipendiya.',
      competitiveness: 'EKSTREMAL YUQORI',
      obligations: [
        'O‘qishni tugatgandan so‘ng darhol O‘zbekistonga qaytish.',
        'Davlat tashkilotlarida 3-5 yil davomida majburiy mehnat qilish.',
        'O‘qish davrida xorijga chiqish pasportini jamg‘armaga topshirish (ko‘pincha talab qilinadi).'
      ],
      whoShouldNotApply: [
        'Xorijda doimiy qolishni (PR) xohlaydigan talabalar.',
        'Karyerasining boshidayoq xususiy sektorda ishlashni afzal ko‘radiganlar.',
        'Nufuzli universitetdan shartsiz (unconditional) offerga ega bo‘lmaganlar.'
      ],
      realityCheck: 'Eng saxiy grant, lekin bu aslida yillar davomida davlat xizmati bilan qaytariladigan "iste’dodlar krediti"dir.',
      url: 'https://eyuf.uz/'
    },
    {
      id: 'turkiye-burslari',
      title: 'Turkiye Burslari (Davlat granti)',
      origin: 'INTERNATIONAL',
      description: 'Turkiya universitetlari uchun keng qamrovli davlat granti.',
      whatItIs: 'Turkiyaning nufuzli universitetlarida bakalavr, magistratura va PhD bosqichlari uchun to‘liq moliyaviy yordam.',
      whoItsFor: [
        'Yuqori GPA ko‘rsatkichiga ega talabalar (odatda 70%+).',
        'Til to‘sig‘ini tezda yenga oladigan o‘zbek zabon yoshlar (o‘xshashlik juda yuqori).',
        'Ijtimoiy fanlar, muhandislik yoki tibbiyot yo‘nalishini tanlaganlar.'
      ],
      coverage: 'O‘qish puli, oylik stipendiya, aviachiptalar, sug‘urta va 1 yillik nemis tili kursi.',
      competitiveness: 'YUQORI',
      obligations: [
        '1 yillik majburiy turk tili kursini yakunlash.',
        'O‘qish davomida akademik standartlarni saqlab qolish.'
      ],
      whoShouldNotApply: [
        'Mintaqaviy madaniy moslashuvsiz faqat ingliz tilida o‘qishni xohlovchilar.',
        'Qat’iy yosh talablariga javob bermaydigan nomzodlar (bakalavr uchun 21, magistr uchun 30).'
      ],
      realityCheck: 'Strategik universal yo‘l. O‘zbek talabalari uchun turk tili va o‘zbek tili o‘rtasidagi 80% o‘xshashlik tufayli til to‘sig‘i muammo bo‘lmaydi.',
      url: 'https://www.turkiyeburslari.gov.tr/'
    },
    {
      id: 'daad',
      title: 'DAAD Scholarship (Germaniya)',
      origin: 'INTERNATIONAL',
      description: 'Germaniyada o‘qish uchun asosiy moliyalashtirish yo‘li.',
      whatItIs: 'Xalqaro talabalar va tadqiqotchilar uchun Germaniya davlat universitetlarida o‘qishni qo‘llab-quvvatlash.',
      whoItsFor: [
        'Magistratura yoki PhD darajasini maqsad qilgan yuqori malakali talabalar.',
        'Tadqiqot yoki rivojlanish sohalariga e’tibor qaratgan shaxslar.',
        'Ma’lum bir kasbiy tajribaga ega bo‘lgan nomzodlar (dasturga qarab).'
      ],
      coverage: 'Oylik stipendiya (€934 magistrlar, €1200 PhD uchun), yo‘l xarajatlari, sug‘urta va ba’zan til kursi subsidiyalari.',
      competitiveness: 'JUDA YUQORI',
      obligations: [
        'Akademik natijalar va erishilgan yutuqlar bo‘yicha hisobot berish.',
        'Ayrim dasturlar o‘qishdan so‘ng vataniga qaytishni talab qiladi.'
      ],
      whoShouldNotApply: [
        'Bakalavr talabalari (ko‘pchilik DAAD grantlari magistratura uchun).',
        'Xususiy universitetlarda o‘qishni xohlovchilar (odatda qoplanmaydi).',
        'Kuchli akademik profili bo‘lmagan nomzodlar.'
      ],
      realityCheck: 'Germaniya davlat universitetlari bepul; DAAD — bu yashash xarajatlarini qoplashning eng nufuzli usuli.',
      url: 'https://www.daad.uz/'
    },
    {
      id: 'chevening',
      title: 'Chevening Scholarship (Buyuk Britaniya)',
      origin: 'INTERNATIONAL',
      description: 'Britaniya hukumati tomonidan moliyalashtiriladigan global yetakchilik dasturi.',
      whatItIs: 'Yetakchilik salohiyatiga ega shaxslar uchun Britaniyada 1 yillik magistraturada to‘liq bepul o‘qish.',
      whoItsFor: [
        'Kamida 2 yillik ish tajribasiga ega O‘zbekiston fuqarolari.',
        'Kuchli akademik poydevorga ega shaxslar.',
        'Siyosat yoki sanoatga ta’sir ko‘rsatishni xohlovchi bo‘lajak yetakchilar.'
      ],
      coverage: 'O‘qish puli, oylik stipendiya, iqtisod-klass aviachiptalar va qo‘shimcha grantlar.',
      competitiveness: 'EKSTREMAL YUQORI',
      obligations: [
        'O‘qishdan keyin kamida 2 yil O‘zbekistonda yashash va ishlash.',
        'Global Chevening bitiruvchilari tarmog‘i bilan aloqada bo‘lish.'
      ],
      whoShouldNotApply: [
        'Kamida 2800 soatlik ish tajribasiga ega bo‘lmaganlar.',
        'Bakalavr yoki PhD darajasini qidirayotganlar.',
        'O‘zbekistonga qaytish niyati bo‘lmagan shaxslar.'
      ],
      realityCheck: 'Nufuzli aloqalar o‘rnatish imkoniyati, lekin qat’iy karyera maqsadlarini talab qiladi.',
      url: 'https://www.chevening.org/scholarship/uzbekistan/'
    }
  ],
  paths: [AUSBILDUNG_PATH_UZ]
};

export const CONTENT: Record<Locale, SiteContent> = {
  en: EN_CONTENT,
  uz: UZ_CONTENT
};