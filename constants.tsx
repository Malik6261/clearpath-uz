
import { Major, Exam, Scholarship, PracticalPath, SiteContent, Locale } from './types';

export type { Locale };

const EN_CONTENT: SiteContent = {
  ui: {
    seo: {
      home: { title: "ClearPath — Student Decision Guide in Uzbekistan", desc: "An objective information index for students in Uzbekistan. Honest data on majors, exams, and career paths." },
      majors: { title: "Majors Index — ClearPath", desc: "Objective analysis of university fields in Uzbekistan. Daily reality, income potential, and stress factors." },
      exams: { title: "Standardized Exams Index — ClearPath", desc: "Metrics and entry requirements for SAT, IELTS, and DET. Determine strategic relevance for admissions." },
      scholarships: { title: "Scholarships & Funding — ClearPath", desc: "Analysis of funding opportunities like El-Yurt Umidi and Chevening for Uzbek students." },
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
    moduleLabel: "Modul",
    gapYearFeatureLabel: "Special Feature",
    gapYearTitleMain: "The Gap Year",
    gapYearTitleItalic: "Strategic Delay",
    gapYearIntro: "Delaying university is either the smartest move you'll ever make, or a massive waste of momentum. There is no middle ground.",
    gapYearVerdictTitle: "The Verdict",
    gapYearVerdictDesc: "In Uzbekistan, taking a gap year is often misunderstood as 'failing to get in.' We challenge this. A gap year is a high-risk, high-reward investment in your character.",
    gapYearStrategicTitle: "When it's Strategic",
    gapYearDeceptionTitle: "When it's Self-Deception",
    gapYearRisksBenefitsTitle: "Risks vs Benefits",
    gapYearUpsideTitle: "The Upside",
    gapYearDownsideTitle: "The Downside",
    gapYearWhatIsTitle: "What is a Gap Year?",
    gapYearWhatIsDesc: "A Gap Year is a deliberate one-year break between high school and university. It is NOT 'failing' or 'resting.' It is a year used to build skills, work, or gain clarity that high school cannot provide.",
    gapYearStrategic1Title: "True Burnout",
    gapYearStrategic1Desc: "You are physically or mentally exhausted from high school and exams. Rest is a productivity tool.",
    gapYearStrategic2Title: "Skill Mastery",
    gapYearStrategic2Desc: "6-12 months of daily 6+ hour study to reach true fluency in a language or a technical skill.",
    gapYearStrategic3Title: "Market Research",
    gapYearStrategic3Desc: "You genuinely don't know what to study and want to intern or work in industries first.",
    gapYearDeception1: "I'll figure out my major while relaxing.",
    gapYearDeception2: "I'm delaying because I'm afraid of applications.",
    gapYearDeception3: "I'll take some random online courses to see what I like.",
    gapYearUpsideList: ["+ Emotional maturity", "+ Better college placement", "+ Unique resume signals", "+ Professional network"],
    gapYearDownsideList: ["- Loss of academic momentum", "- Social isolation from peers", "- Delayed career earnings", "- Resetting study habits is hard"],
    noPressureMsg: "If you're not ready to make a choice right now — that's also normal.",
    specialistBtn: "🔒 Ask a specialist (coming soon)",
    specialistNote: "This is not guidance. It’s access to lived experience.",
    officialMaterialsLabel: "Official SAT Materials",
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
    ageLimitsLabel: "Age Considerations",
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
      description: 'Thinking in code and systems.',
      actuallyIs: 'CS means learning to think in code and systems. You study programming, algorithms, data structures, and architecture. It\'s not just "typing code"—it\'s learning why certain solutions work, why others break, and how to design systems that scale.',
      dailyWork: [
        '9-10am: Stand-up meeting (progress tracking)',
        '10am-12pm: Deep coding focus (2-3 hours actual writing)',
        '1-3pm: Code reviews and teammate feedback',
        '3-4pm: Architecture and product planning meetings',
        '4-5pm: Testing, debugging, and documentation',
        'Reality: You spend 50-70% of your day in meetings as you grow. Code is often pragmatic and buggy, not beautiful.'
      ],
      whoItFits: [
        'Enjoys debugging and problem-solving over just building.',
        'Patient with extreme detail (off-by-one errors).',
        'Comfortable with rapid change (tools expire every 2-3 years).',
        'Able to explain complex ideas clearly to non-tech peers.'
      ],
      whoShouldAvoid: [
        'Expects high job certainty (6.1% unemployment in some markets recently).',
        'Wants stable, predictable work without constant learning.',
        'Needs immediate income (entry-level job hunting can take 6-12 months).',
        'Dislikes continuous study outside of office hours.'
      ],
      careerPaths: {
        employee: ['Software Engineer ($80k-$140k starting)', 'Data Engineer', 'Machine Learning Engineer', 'Cybersecurity Specialist'],
        freelance: ['Contract software dev (brutal competition)', 'Building small SaaS products'],
        business: ['Founding a startup (90% failure rate)', 'Building tools for existing platforms']
      },
      uzVsAbroad: {
        uz: ['Growing demand in Tashkent/Samarkand hubs.', 'Junior salaries: $500–$1,000/month (decent locally).', 'Remote work allows Western salaries while living in UZ.'],
        abroad: ['Extremely in-demand across US/EU/Canada.', 'Visa sponsorship (H1B/Skilled Worker) is common.', 'Highly competitive but strong overall.']
      },
      realityCheck: [
        { factor: 'Difficulty', rating: 'HIGH', notes: 'Complex theory and constant debugging frustration.' },
        { factor: 'Competition', rating: 'VERY HIGH', notes: 'Bootcamp graduates compete with degree holders.' },
        { factor: 'Income Potential', rating: 'HIGH', notes: '$80k–$200k+, but highly variable by location.' },
        { factor: 'AI Risk', rating: 'MEDIUM-HIGH', notes: 'Junior roles may be automated; specialists are safer.' }
      ],
      freeResources: [
        { name: 'Harvard CS50x', url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science', why: 'The industry-standard intro. Teaches "how to think," not just syntax.', whenToStop: 'After Week 5 if you feel you have the logic down.', notFor: 'People looking for a "quick" 2-week certificate. This takes 100+ hours.' },
        { name: 'Roadmap.sh', url: 'https://roadmap.sh', why: 'Visual maps of exactly what to learn for every role (Frontend, Backend, etc.).', whenToStop: 'Use only as a reference. Do not try to "finish" a roadmap.', notFor: 'Students who get overwhelmed by large lists of topics.' },
        { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/', why: 'Best for hands-on web development practice without setup.', whenToStop: 'Once you are ready to build a project on your own local computer.', notFor: 'People who want to learn deep theory/math first.' }
      ]
    },
    {
      id: 'business-management',
      title: 'Business / Management',
      description: 'Understanding how organizations work.',
      actuallyIs: 'You learn how organizations function: accounting, finance, marketing, operations, HR, and strategy. It is broad, which is both its strength and its weakness.',
      dailyWork: [
        'Lots of Excel, PowerPoint, and reporting.',
        'Meetings, meetings, and more meetings.',
        'Analyzing company finances or marketing metrics.',
        'Solving small operational problems daily.',
        'Reality: Very few "breakthrough" moments; mostly incremental management.'
      ],
      whoItFits: [
        'Comfortable with spreadsheets and data metrics.',
        'Works well in collaborative team settings.',
        'Flexible career interests (opens many doors).',
        'Interested in the "why" behind company decisions.'
      ],
      whoShouldAvoid: [
        'Hates sitting in long meetings.',
        'Wants deep technical mastery in one specific niche.',
        'Seeks high creative freedom (often follows playbooks).',
        'Wants quick high income (starts lower than engineering).'
      ],
      careerPaths: {
        employee: ['Management Consultant ($65k-$120k+)', 'Financial Manager', 'Marketing Manager', 'Product Manager'],
        freelance: ['Virtual assistant', 'Operations consultant'],
        business: ['Buying and reselling goods', 'Starting a service business']
      },
      uzVsAbroad: {
        uz: ['High demand in growing Tashkent sector.', 'Entry-level: $600–$1,200/month.', 'Useful for future local entrepreneurship.'],
        abroad: ['Extremely valuable with an MBA.', 'Global business culture is very similar.', 'Visa sponsorship is common for managers.']
      },
      realityCheck: [
        { factor: 'Difficulty', rating: 'LOW-MEDIUM', notes: 'Conceptual rather than math-heavy.' },
        { factor: 'Competition', rating: 'VERY HIGH', notes: 'Most common major; hard to stand out.' },
        { factor: 'Income Potential', rating: 'MEDIUM-HIGH', notes: 'Consultants earn more than general managers.' },
        { factor: 'AI Risk', rating: 'MEDIUM', notes: 'Routine analysis is automatable; strategy is safer.' }
      ],
      freeResources: [
        { name: 'MIT Sloan Management (OCW)', url: 'https://ocw.mit.edu/courses/management/', why: 'Rigorous, university-level course materials on strategy and finance.', whenToStop: 'After you understand the "Case Study" method.', notFor: 'Students looking for light, inspirational business content.' },
        { name: 'Corporate Finance Institute (Free Courses)', url: 'https://corporatefinanceinstitute.com/resources/free-courses/', why: 'Practical skills: reading balance sheets and basic accounting.', whenToStop: 'After finishing "Accounting Fundamentals."', notFor: 'People who hate math or fine print.' }
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
    }
  ],
  paths: [
    {
      id: 'ausbildung',
      title: 'Ausbildung (Dual Vocational Training)',
      subtitle: 'Work & Study in Germany',
      actuallyIs: 'Ausbildung is a vocational apprenticeship system combining paid work with structured classroom instruction. Trainees work 3-4 days at a company and attend vocational school (Berufsschule) 1-2 days per week. It results in a nationally recognized IHK or HWK qualification.',
      types: [
        { name: 'Duale Ausbildung (Company-Based)', description: '70% of apprenticeships. You sign a contract with a company. They pay you.', realityForForeigners: 'The only realistic pathway for Uzbek students. Contract triggers visa eligibility.', realistic: true },
        { name: 'Schulische Ausbildung (School-Based)', description: 'Entirely in school with internships. Common in nursing, graphic design.', realityForForeigners: 'Unpaid/Low-paid and often require tuition fees. Extremely difficult for international students without huge savings.', realistic: false }
      ],
      whoFits: [
        'Practical over theoretical mindset.',
        'Tolerance for repetition and routine.',
        'Physical resilience (trades demand 8-10 hours standing).',
        'Ability to take instruction from supervisors (strict hierarchy).',
        'Independence + resilience to social isolation.'
      ],
      whoShouldAvoid: [
        'Prefer abstract thinking and academic debate.',
        'Struggle with authority figures.',
        'Primary motivation is just "easy entry to Europe."',
        'Cannot afford a €5,000–€10,000 financial safety cushion.',
        'Unmanaged mental health conditions.'
      ],
      languageReality: {
        official: 'B1 German (CEFR standard).',
        practical: 'B2 is increasingly non-negotiable for success.',
        reasons: [
          'B1 is comprehension, not fluency. You won\'t follow rapid instruction.',
          'Exam success requires B2 level precision for technical written tests.',
          'Workplace communication uses slang, dialects, and rapid speech.',
          'Social integration requires more than basic B1 grammar.'
        ],
        trajectory: [
          { level: 'A0 to A2', time: '3-4 months intensive' },
          { level: 'A2 to B1', time: '4-5 months' },
          { level: 'B1 to B2', time: '4-6 months' }
        ]
      },
      fieldCategories: [
        { name: 'Healthcare/Nursing', acceptance: 'SHORTAGE', successRate: '85%+', salary: '€1k-€1.4k', whyAccessible: 'Aging population/Desperate need.', challenges: 'High burnout, B2 terminology needed.', languageNeed: 'B2 High' },
        { name: 'Electrical/Mechatronics', acceptance: 'SHORTAGE', successRate: '55-60%', salary: '€950-€1.2k', whyAccessible: 'Germany industrial strength.', challenges: 'Math-heavy, technically difficult.', languageNeed: 'B1/B2' },
        { name: 'IT/Software Dev', acceptance: 'OVERSATURATED', successRate: '<30%', salary: '€1.1k-€1.5k', whyAccessible: 'High demand but high bar.', challenges: 'Extremely competitive for foreigners.', languageNeed: 'B2 Specialist' },
        { name: 'Logistics/Warehouse', acceptance: 'MODERATE', successRate: '40-50%', salary: '€650-€950', whyAccessible: 'Always hiring physical labor.', challenges: 'Physically exhausting, night shifts.', languageNeed: 'B1/B2' }
      ],
      financialDeepDive: {
        monthlySalary: [
          { industry: 'IT/Tech', y1: '€1.1k-€1.2k', y2: '€1.2k-€1.3k', y3: '€1.3k-€1.5k' },
          { industry: 'Healthcare', y1: '€1.0k-€1.1k', y2: '€1.1k-€1.2k', y3: '€1.2k-€1.4k' },
          { industry: 'Construction', y1: '€900-€1.0k', y2: '€1.0k-€1.2k', y3: '€1.1k-€1.3k' }
        ],
        livingExpenses: [
          { category: 'Rent (Shared)', low: '€400-€600', medium: '€600-€800', high: '€800-€1.2k' },
          { category: 'Groceries', low: '€150-€200', medium: '€200-€250', high: '€250-€300' }
        ],
        mathReality: 'If you earn €1,000 gross (€850 net) in a city like Berlin, you will likely have a monthly deficit of €350. You NEED savings or family support.',
        comparison: [
          { label: 'Advantage', details: 'Enter workforce 3-4 years earlier, debt-free. 30-year advantage: €200k-€350k.' },
          { label: 'Trap', details: 'Assumes you complete it. Dropout in year 2 leaves you with zero qualification and debt.' }
        ]
      },
      visaLegal: {
        residenceAct: '§16a AufenthG (with contract) or §17 (seeking position - max age 35).',
        ageLimits: { rule: 'No legal limit once contract signed.', practice: 'Employers strongly prefer 18-25 (87% acceptance). 30+ drops to 43%.' },
        financialRequirement: 'Proof of funds or signed contract salary. Blocked account (€11,304/year) usually waived for duale Ausbildung.',
        recognitionProcess: [
          'Request: German state authority.',
          'Translation: Official German translation (€100-€300).',
          'Legalization: Apostille at Embassy in Tashkent.',
          'Assessment: Equivalence to Realschule/Abitur.'
        ],
        embassyTimeline: '6-12 weeks in Tashkent (median 8 weeks). Visa fee: €75.'
      },
      downsidesExtended: [
        { category: 'Physical Exhaustion', content: 'Nursing (heavy lifting), construction (weather), HVAC (bending). Cumulates into chronic fatigue.' },
        { category: 'Homesickness', content: '5,000+ km from UZ. 4-hour time diff. Intense reported in 80% of students.' },
        { category: 'Documented Bias', content: 'Research shows fewer callbacks for foreign-sounding names. Subtle xenophobia exists.' },
        { category: 'Contract Risk', content: 'Probation (1-4 months) allows firing without notice or reason. 33% of dropouts happen here.' }
      ],
      myths: [
        { myth: 'B1 is enough', reality: 'Legally yes, practically no. You will fail exams and social integration.' },
        { myth: 'Earn fast money', reality: 'Barely covers survival. Wealth building only happens post-completion.' },
        { myth: 'Everyone gets accepted', reality: 'Visa approval is 73%. Dropout rate for foreigners is 24%.' }
      ],
      strategicAssessment: {
        goodMove: [
          'You have/can reach B2 in 12 months.',
          'You have €5k-€10k savings.',
          'You genuinely want the specific trade.',
          'You are aged 18-28.',
          'You target shortage fields (Nursing, Trades).'
        ],
        badMove: [
          'Attempting with B1/A2.',
          'Family depends on your income from year 1.',
          'Pursuing to "escape" UZ rather than wanting the job.',
          'Over 35 years old.',
          'Unmanaged mental health conditions.'
        ]
      },
      finalTimeline: [
        { phase: 'German Study (UZ)', duration: '12 months (B2)' },
        { phase: 'Applications', duration: '6-8 months' },
        { phase: 'Visa Process', duration: '3 months' },
        { phase: 'Training', duration: '36 months' },
        { phase: 'PR Pathway', duration: 'Year 5+' }
      ],
      strategicGood: ['Language mastery (B2)', 'Financial cushion', 'Trade interest'],
      strategicBad: ['Low language', 'No savings', 'Age 30+'],
      realityCheck: 'A credible strategic move but demands a 5-year life investment. Not a quick exit.'
    }
  ]
};

const UZ_CONTENT: SiteContent = {
  ...EN_CONTENT,
  ui: {
    ...EN_CONTENT.ui,
    seo: {
      home: { title: "ClearPath — Oʻzbekiston talabalari uchun yoʻriqnoma", desc: "Oʻzbekistonlik talabalar uchun ochiq ma'lumotlar indeksi. Mutaxassisliklar va imtihonlar boʻyicha xolis ma'lumotlar." },
      majors: { title: "Mutaxassisliklar — ClearPath", desc: "Universitet yoʻnalishlarining xolis tahlili. Kundalik oʻqish, daromad va stress omillari." },
      exams: { title: "Imtihonlar — ClearPath", desc: "SAT, IELTS va DET imtihonlari boʻyicha strategik ma'lumotlar va kirish talablari." },
      scholarships: { title: "Grantlar — ClearPath", desc: "El-Yurt Umidi, Chevening va boshqa grant dasturlari tahlili." },
      paths: { title: "Amaliy yoʻllar — ClearPath", desc: "Universitetga muqobil boʻlgan amaliy va ishga yoʻnaltirilgan yoʻllar, Ausbildung tahlili." },
      resources: { title: "Resurslar — ClearPath", desc: "Talabalar uchun saralangan bepul bilim va resurslar katalogi." },
      gapYear: { title: "Tanaffus yili — ClearPath", desc: "Gap Year olishning strategik ahamiyati va xavflari boʻyicha samimiy qoʻllanma." },
      about: { title: "ClearPath haqida", desc: "Nima uchun biz oʻzbekistonlik talabalar uchun ushbu yoʻriqnomani yaratdik?" },
      contact: { title: "Bogʻlanish — ClearPath", desc: "Murakkab qarorlar va fikr-mulohazalar uchun biz bilan bogʻlanish protokoli." }
    },
    decisionGuide: "Ma'lumotnoma",
    startBriefing: "Mutaxassisliklarni ko'rish",
    practicalAlternatives: "Amaliy tajribani ko'rish",
    howToUse: "Indeksdan foydalanish qoidalari",
    philosophyTitle: "Ma'lumotlar chegaralari",
    noteOnDecisions: "Mustaqil navigatsiya",
    methodology: "Ma'lumotlar metodologiyasi",
    academicLibrary: "Mutaxassisliklar",
    practicalPaths: "Amaliy yo‘llar",
    exams: "Imtihonlar",
    scholarshipsLabel: "Grantlar",
    resourcesLabel: "Resurslar",
    plannerLabel: "Reja",
    gapYear: "Gap Year",
    academicHeader: "Akademik kutubxona",
    practicalHeader: "Amaliy yo'llar",
    toolsHeader: "Asboblar va resurslar",
    readyForTruth: "Tahlilni ko'rish",
    analysisComplete: "Hujjatlar ko'rib chiqildi.",
    returnToDirectory: "Indeksga qaytish",
    backToOverview: "Asosiy indeks",
    inquiry: "Bog‘lanish",
    feedback: "Fikr-mulohaza",
    soon: "tez orada",
    locked: "Ko'rib chiqilmoqda",
    sourcesReferenced: "Manbalar",
    logoDisclaimer: "Logotiplar faqat ma'lumot uchun ko'rsatilgan. Hamkorlikni anglatmaydi.",
    academicLabel: "AKADEMIK",
    careerLabel: "ISH VA AMALIY TAJRIBA",
    editorialIndex: "Ma'lumotlar indeksi — 2025 nashri",
    homeTitle1: "Ma'lumotlar ochiqligi,",
    homeTitle2: "tizimlashtirilgan.",
    homeSubtitle: "O'zbekistonlik talabalar uchun ochiq ma'lumotlar indeksi. Universitet mutaxassisliklari, standartlashtirilgan imtihonlar va institutsional talablar bo'yicha hujjatlar.",
    homeQuote: "Qaror qabul qilishdagi muvaffaqiyatsizliklar harakat yetishmasligidan emas, barcha noto'g'ri ma'lumotlar tufayli yuzaga keladi. Biz ushbu ma'lumotlarni tahlil qilish uchun tashkil etdik.",
    philTitle: "SAMIMIY YONDASHUV",
    philSub: "Qo‘llanmadan foydalanish haqida",
    phil1: "Biz siz uchun qaror qabul qilmaymiz. Bu qo‘llanma shunchaki mustaqil tanlov qilishingiz uchun kerak bo‘lgan ochiq va rost ma’lovlarni beradi. Yo‘lingizni o‘zingiz belgilaysiz.",
    phil2: "Biz hamma narsani boricha — yutug‘i, qiyinchiligi va real holatini ko‘rsatish tarafdorimiz. Biz shunchaki faktlar to‘plamimiz, murabbiy emas.",
    phil3: "Hozir boshingiz qotgan bo‘lsa, bu normal holat. Bu yerda we quruq va’dalar o‘rniga aniq ma’lovlar bilan shu chalkashlikdan chiqishga yordam beramiz.",
    phil4: "Buni kompas deb biling. Biz nima qayerda ekanini ko‘rsatamiz, lekin yo‘nalishni tanlash sizning qo‘lingizda.",
    methTitle: "Metodologiya",
    methSub: "Talablarni o'zaro solishtirish",
    meth1Title: "Manbalarni tekshirish",
    meth1Desc: "Qarorlar mustaqil tekshiruvni talab qiladi. Foydalanuvchilarga ushbu indeksni rasmiy institutsional portallar bilan solishtirish tavsiya etiladi.",
    meth2Title: "Hujjatlashtirilgan haqiqat",
    meth2Desc: "Har bir yo'nalish standart kundalik ishlar, bazaviy daromad diapazonlari va kuzatilgan stress darajalari kabi hujjatlashtirilgan omillarga asoslangan.",
    footerTagline: "O'zbekistonlik talabalar uchun qaror qabul qilish intellekti. Haqiqatga asoslangan, aniqlik uchun yaratilgan.",
    footerNavHeader: "Navigatsiya",
    footerInquiryHeader: "So'rov",
    footerCopyright: "Qaror qabul qilish laboratoriyasi",
    footerLocation: "O'zbekiston",
    academicArchiveLabel: "Arxiv 01 — Akademik yo'nalish",
    academicPageDesc: "Universitet yo'nalishlarining xolis tahlili. Kundalik hayot, daromad va stress omillariga e'tibor qaratamiz.",
    examsArchiveLabel: "Arxiv 02 — Metrika va kirish",
    examsPageDesc: "Standartlashtirilgan imtihonlar haqida xolis ma'lumotlar. Resurslarni sarflashdan oldin strategik ahamiyatni aniqlang.",
    scholarshipsArchiveLabel: "Arxiv 03 — Kapital va moliya",
    scholarshipsPageDesc: "Grant imkoniyatlarining tahlili. Akademik yordamning majburiyatlari va haqiqatiga e'tibor qaratamiz.",
    pathsArchiveLabel: "Arxiv 04 — Amaliy yo'llar",
    pathsPageDesc: "An'anaviy universitet yo'llariga nisbatan yuqori samarali, ishga yo'naltirilgan muqobillar tahlili.",
    resourcesArchiveLabel: "Bilimlar katalogi 03",
    resourcesPageTitle: "Resurslar ombori.",
    resourcesPageDesc: "Saralangan ma'lumotlar. Biz foydasiz kontentni chetga surib, sizni haqiqiy ishga tayyorlaydigan 1% resursni tanladik.",
    resourceDirectiveLabel: "Amaliy ko'rsatma",
    resourceDirectiveQuote: "Link yig'ishni to'xtating. Bitta resursni tanlang, o'rganing va tugating. Yig'ish — bu o'rganishdan qochishdir.",
    resourceContextLabel: "Kontekst",
    resourceDiscardLabel: "Qachon to'xtash kerak",
    activeAnalysis: "Aktiv tahlil",
    pathAvailable: "Mavjud",
    pathStatus: "Holati",
    verifiedPathway: "Tasdiqlangan yo‘nalish",
    viewPath: "Yo‘lni ko‘rish",
    queueLabel: "Navbatda",
    pathDescription: "Texnik tayyorgarlik, xarajatlar va yashash talablarining strategik tahlili.",
    pathDirectory: "Yo'llar katalogi",
    intelligenceAnalysis: "Strategik tahlil",
    brutallyHonest: "Brutally honest darajasidagi tahlil.",
    whatItIs: "Bu o'zi nima?",
    systemDefinition: "Tizim ta'rifi",
    strategicFitment: "Strategik moslik",
    profileAnalysis: "Profil tahlili",
    strategicMoveIf: "Strategik tanlov AGAR:",
    highRiskIf: "Yuqori xavf AGAR:",
    idealProfile: "Ideal profil",
    languageReality: "Til bilish haqiqati",
    communicationBarrier: "Muloqot to'sig'i",
    officialRequirement: "Rasmiy talab",
    practicalMinimum: "Amaliy minimum",
    preparationTrajectory: "Tayyorgarlik jarayoni",
    fieldAnalysis: "Soha tahlili",
    operationalSectors: "Operatsion sektorlar",
    acceptanceRate: "Qabul qilish",
    salaryLabel: "Maosh",
    challengeLabel: "Qiyinchilik",
    financialLogic: "Moliyaviy mantiq",
    cashFlowAnalysis: "Pul oqimi tahlili",
    industryLabel: "Soha",
    y1Gross: "1-yil (Brutto)",
    y3Gross: "3-yil (Brutto)",
    expensesLabel: "Xarajatlar",
    deficitWarning: "Defitsit ogohlantirishi",
    longTermMath: "Uzoq muddatli hisob-kitob",
    timeCommitment: "Vaqt va majburiyat",
    executionReality: "Amaliyot haqiqati",
    durationLabel: "Davomiyligi",
    weeklyLoad: "Haftalik yuklama",
    physicalMentalLoad: "Jismoniy va ruhiy bosim",
    dropoutRateLabel: "O'qishni tashlab ketish",
    visaLegalLabel: "Viza va qonun",
    complianceProtocol: "Protokol",
    legalBasis: "Huquqiy asos",
    ageLimitsLabel: "Yosh masalalari",
    // Fix: Removed redundant recognitionBarrierLabel here (line 670 original) because it is also defined in the end block.
    risksDownsides: "Xavflar va kamchiliklar",
    darkSide: "Qorong'u tomoni",
    mythsReality: "Afsonalar va haqiqat",
    filteredTruth: "Saralangan haqiqat",
    mythLabel: "Afsona",
    realityLabel: "Haqiqat",
    postCompletion: "Tugatgandan keyin",
    payoffLabel: "Natija",
    placementRateLabel: "Ishga joylashish",
    startingGrossLabel: "Boshlang'ich maosh",
    careerTrajectory: "Karyera yo'nalishi",
    comparativeAnalysis: "Qiyosiy tahlil",
    alternativeLogic: "Muqobil mantiq",
    vsUniversity: "Universitetga nisbatan",
    vsUnskilled: "Malakasiz ishga nisbatan",
    vsShortCourses: "Kurslarga nisbatan",
    finalAssessment: "Yakuniy baho",
    bluntTruth: "Achchiq haqiqat",
    strategicInquiry: "Strategik bog'lanish",
    contactProtocol: "Aloqa protokoli",
    keyFactsLabel: "Muhim faktlar",
    disclaimerLabel: "Radnoma",
    ausbildungKeyFacts: [
      "Davomiyligi: 2-3 yil",
      "Tuzilishi: Kompaniya ishi + Kasb-hunar maktabi",
      "Moliya: Birinchi kundan oylik maosh",
      "Til: Nemis tili B1/B2 kerak",
      "Huquqiy: Rasmiy ish-o'qish shartnomasi"
    ],
    ausbildungRealityNotes: [
      "Oson emas: To'liq kunlik ish va imtihonlarni muvozanatlash kerak.",
      "Intizom: Qat'iy davomat va samaradorlik nazorati.",
      "Madaniy moslashuv: Nemis ish muhitiga tezkor kirishish.",
      "Strategik: Bu 'tezkor chiqish' emas, balki poydevor."
    ],
    ausbildungDisclaimer: "Ushbu bo'lim faqat xolis ma'lumot beradi. Bu Ausbildungni tanlash bo'yicha tavsiya yoki to'siq emas.",
    fieldAnalysisLabel: "Soha tahlili",
    acceptanceRatingLabel: "Qabul darajasi",
    successRateLabel: "Muvaffaqiyat darajasi",
    whyAccessibleLabel: "Nega oson",
    challengesLabel: "Maxsus qiyinchiliklar",
    languageNeedLabel: "Til talabi",
    monthlySalaryLabel: "Oylik maosh (Brutto)",
    deficitRealityLabel: "Defitsit haqiqati",
    livingExpLabel: "Yashash xarajatlari",
    comparisonUniLabel: "Universitet bilan solishtirganda",
    visaResidenceLabel: "Viza va rezidentlik",
    recognitionBarrierLabel: "Diplomni tan olish to'sig'i",
    legalRisksSummary: "Huquqiy va qonuniy xavflar",
    finalVerdictLabel: "Yakuniy strategik xulosa",
    decisionFrameworkLabel: "Qaror qabul qilish asosi",
    honestTimelineLabel: "Real ijro vaqti"
  },
  majors: EN_CONTENT.majors,
  exams: EN_CONTENT.exams,
  scholarships: EN_CONTENT.scholarships,
  paths: [
    {
      id: 'ausbildung',
      title: 'Ausbildung (Dual ta’lim tizimi)',
      subtitle: 'Germaniyada ish va o‘qish',
      actuallyIs: 'Ochiqini aytganda, Ausbildung — bu Germaniyadagi o‘qish va ishni birlashtirgan tizim. Siz haftada 3-4 kun haqiqiy korxonada ishlaysiz va 1-2 kun kasb-hunar maktabida nazariyani o‘rganasiz. Bu shunchaki "ish" emas, bu diplom beradigan va Germaniya qonunlari bilan himoyalangan o‘quv yo‘nalishidir.',
      types: [
        { name: 'Duale Ausbildung (Korxonaga asoslangan)', description: 'Barcha yo‘nalishlarning 70% ini tashkil qiladi. Siz to‘g‘ridan-to‘g‘ri kompaniya bilan shartnoma tuzasiz.', realityForForeigners: 'O‘zbekistonlik talabalar uchun eng real yo‘l. Shartnoma bo‘lsa, viza olish ancha osonlashadi.', realistic: true },
        { name: 'Schulische Ausbildung (Maktabga asoslangan)', description: 'Asosan tibbiyot (hamshiralikdan tashqari) va dizayn yo‘nalishlarida uchraydi. Ko‘pincha maosh berilmaydi.', realityForForeigners: 'Juda qiyin yo‘l. Chunki yashash xarajatlarini qoplash uchun katta miqdorda shaxsiy jamg‘arma talab etiladi.', realistic: false }
      ],
      whoFits: [
        'Nazariyadan ko‘ra amaliy ishni yoqtiradiganlar.',
        'Bir xil va tartibli (routine) ishlarga sabrli bo‘lganlar.',
        'Jismoniy va ruhiy bosimga chidamli (masalan, 8-10 soat tik oyoqda turish).',
        'Nemis ish madaniyatidagi qat’iy tartib-intizomga tayyor bo‘lganlar.'
      ],
      whoShouldAvoid: [
        'Abstrakt fikrlash va akademik munozaralarni xohlaydiganlar.',
        'Rahbarlik yoki qoidalar bilan kelisha olmaydiganlar.',
        'Asosiy maqsadi faqat "Yevropaga qochib ketish" bo‘lganlar.',
        'Yonida kamida 5,000 – 10,000 yevro zaxira puli bo‘lmaganlar.'
      ],
      languageReality: {
        official: 'B1 Nemis tili (rasmiy talab).',
        practical: 'Ochiqini aytsak, B2 darajasisiz muvaffaqiyatga erishish juda qiyin.',
        reasons: [
          'B1 tushunish uchun yetadi, lekin muloqot uchun emas. Ishda tezkor buyruqlarni tushunmay qolasiz.',
          'Imtihonlar B2 darajasida bo‘ladi. Nemis tili pastligi sababli mutaxassislik imtihonidan yiqilish xavfi yuqori.',
          'Ishxonadagi hamkasblaringiz kitobdagi tilda emas, lahja (sheva) va jargonlarda gaplashishadi.',
          'Ijtimoiy hayotga kirishib ketish uchun muloqot darajasi yuqori bo‘lishi kerak.'
        ],
        trajectory: [
          { level: 'A0 dan A2 gacha', time: '3-4 oy intensiv o‘qish' },
          { level: 'A2 dan B1 gacha', time: '4-5 oy intensiv o‘qish' },
          { level: 'B1 dan B2 gacha', time: '4-6 oy intensiv o‘qish' }
        ]
      },
      fieldCategories: [
        { name: 'Sog‘liqni saqlash (Hamshiralik)', acceptance: 'JUDA YUQORI', successRate: '85%+', salary: '€1k-€1.4k', whyAccessible: 'Germaniyada kadrlar yetishmovchiligi juda katta.', challenges: 'Smenali ish, og‘ir jismoniy mehnat.', languageNeed: 'B2 darajasi shart' },
        { name: 'Texnik sohalar (Mexanik, Elektrik)', acceptance: 'YUQORI', successRate: '55-60%', salary: '€950-€1.2k', whyAccessible: 'Sanoat korxonalari doim ishchi qidiradi.', challenges: 'Matematika va fizika talab etiladi.', languageNeed: 'B1/B2' },
        { name: 'IT va Dasturlash', acceptance: 'JUDA QIYIN', successRate: '<30%', salary: '€1.1k-€1.5k', whyAccessible: 'Talab katta, lekin chet elliklar uchun barqaror emas.', challenges: 'Raqobat o‘ta kuchli, nemis tili mukammal bo‘lishi kerak.', languageNeed: 'Spetsifik B2' }
      ],
      financialDeepDive: {
        monthlySalary: [
          { industry: 'IT va Texnika', y1: '€1.1k-€1.2k', y2: '€1.2k-€1.3k', y3: '€1.3k-€1.5k' },
          { industry: 'Hamshiralik', y1: '€1.0k-€1.1k', y2: '€1.1k-€1.2k', y3: '€1.2k-€1.4k' },
          { industry: 'Qurilish', y1: '€900-€1.0k', y2: '€1.0k-€1.2k', y3: '€1.1k-€1.3k' }
        ],
        livingExpenses: [
          { category: 'Ijarada turish (Shared)', low: '€400-€600', medium: '€600-€800', high: '€800-€1.2k' },
          { category: 'Oziq-ovqat', low: '€150-€200', medium: '€200-€250', high: '€250-€300' }
        ],
        mathReality: 'Mana bu joyda odamlar chalkashadi: Agar siz Berlinda 1,000 yevro topsangiz, ijaradan keyin cho‘ntagingizda deyarli pul qolmaydi. Oila yordami yoki shaxsiy jamg‘arma bo‘lishi shart.',
        comparison: [
          { label: 'Yutug‘i', details: 'Siz tengdoshlaringizdan 3-4 yil oldin ishlashni boshlaysiz va qarzingiz bo‘lmaydi.' },
          { label: 'Xatari', details: 'Agar 2-yilda o‘qishni tashlab ketsangiz, na diplomingiz bo‘ladi va na foyda.' }
        ]
      },
      visaLegal: {
        residenceAct: 'AufenthG §16a (shartnoma bilan) yoki §17 (ish qidirish uchun viza).',
        ageLimits: { rule: 'Shartnoma bo‘lsa yosh chegarasi yo‘q.', practice: 'Lekin ish beruvchilar asosan 18-25 yoshdagilarni tanlashadi. 30 yoshdan oshgach shartnoma olish juda qiyin.' },
        financialRequirement: 'Jamg‘arma yoki shartnomadagi maosh. Duale Ausbildung uchun ko‘pincha bloklangan hisob (blocked account) shart emas.',
        recognitionProcess: [
          'So‘rov: Germaniya tegishli tashkilotiga.',
          'Tarjima: Diplomingizni nemis tiliga rasmiy tarjimasi.',
          'Tasdiq: Tashkentdagi elchixonada Apostil qo‘yish.',
          'Baho: O‘zbekiston maktab shahodatnomasini Germaniya tizimi bilan tengligini aniqlash.'
        ],
        embassyTimeline: 'Toshkentda 6-12 hafta (o‘rtacha 8 hafta). Viza to‘lovi: €75.'
      },
      downsidesExtended: [
        { category: 'Jismoniy toliqish', content: 'Hamshiralikda bemor ko‘tarish, qurilishda har qanday ob-havoda ishlash. Bu xronik charchoqqa olib keladi.' },
        { category: 'Vatan sog‘inchi', content: 'O‘zbekistondan 5,000 km uzoqlik. 4 soatlik vaqt farqi. Talabalarning 80% idagi ruhiy siqilishning asosiy sababi.' },
        { category: 'Diskriminatsiya', content: 'Tadqiqotlar shuni ko‘rsatadiki, chet ellik ismli nomzodlarga nemislarga qaraganda kamroq javob qaytariladi.' },
        { category: 'Shartnoma xavfi', content: 'Sinov muddati (1-4 oy) ichida sizni sababsiz va ogohlantirishsiz ishdan bo‘shatishlari mumkin.' }
      ],
      myths: [
        { myth: 'B1 darajasi yetarli', reality: 'Qonuniy yetarli, lekin hayotiy emas. Imtihonlardan o‘ta olmay qolishingiz mumkin.' },
        { myth: 'Tezda boyib ketish', reality: 'Maosh faqat yashashga yetadi. Asosiy daromad o‘qishni bitirgandan keyin boshlanadi.' },
        { myth: 'Hamma qabul qilinadi', reality: 'Viza berish darajasi 73%. Chet ellik talabalarning 24% i o‘qishni oxirigacha yetkaza olmaydi.' }
      ],
      strategicAssessment: {
        goodMove: [
          'Sizda 12 oy ichida B2 darajasiga chiqishga xohish va imkoniyat bor.',
          'Kamida 5,000 – 10,000 yevro zaxira pulingiz bor.',
          'Siz aynan tanlangan hunarni o‘rganishni chin dildan xohlaysiz.',
          'Yoshingiz 18-28 oralig‘ida.',
          'Kadrlar yetishmaydigan sohalarni (Tibbiyot, Texnika) tanlayapsiz.'
        ],
        badMove: [
          'Tilingiz B1 yoki A2 darajasida qolib ketgan bo‘lsa.',
          'Oilangiz sizdan birinchi yildanoq pul yuborishingizni kutayotgan bo‘lsa.',
          'Maqsadingiz hunar o‘rganish emas, shunchaki "ketib qolish" bo‘lsa.',
          'Yoshingiz 35 dan oshgan bo‘lsa.',
          'Ruhiy holatingiz bunday katta bosimga tayyor bo‘lmasa.'
        ]
      },
      finalTimeline: [
        { phase: 'Nemis tili (O‘zbekistonda)', duration: '12 oy (B2 daraja)' },
        { phase: 'Hujjat topshirish', duration: '6-8 oy' },
        { phase: 'Viza jarayoni', duration: '3 oy' },
        { phase: 'O‘qish va ish', duration: '36 oy (3 yil)' },
        { phase: 'Doimiy yashash (PR)', duration: '5-yildan so‘ng'
        }
      ],
      strategicGood: ['Tilni bilish (B2)', 'Moliyaviy zaxira', 'Hunarga qiziqish'],
      strategicBad: ['Til bilmaslik', 'Pul yo‘qligi', 'Yosh 30+'],
      realityCheck: 'Bu hayotingizning 5 yilini berishingiz kerak bo‘lgan jiddiy loyiha. Tez va oson yo‘l emas.'
    }
  ]
};

export const CONTENT: Record<Locale, SiteContent> = {
  en: EN_CONTENT,
  uz: UZ_CONTENT
};

export const MAJORS = EN_CONTENT.majors;
export const EXAMS = EN_CONTENT.exams;
export const SCHOLARSHIPS = EN_CONTENT.scholarships;
export const PRACTICAL_PATHS = EN_CONTENT.paths;

export const getLocale = (pathname: string): Locale => {
  const parts = pathname.split('/').filter(Boolean);
  const lang = parts[0];
  return (lang === 'uz') ? 'uz' : 'en';
};
