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
    moduleLabel: "Module",
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
      description: 'The architecture of logic and automation.',
      actuallyIs: 'CS means learning to think in code and systems. You study programming, algorithms, data structures, and architecture. It\'s not just "typing code"—it\'s learning why certain solutions work, why others break, and how to design systems that can scale to millions of users.',
      dailyWork: [
        '9-10am: Stand-up meeting (progress tracking).',
        '10am-12pm: Deep coding focus (usually only 2-3 hours of actual writing).',
        '1-3pm: Code reviews and teammate feedback (reading other people\'s logic).',
        '3-4pm: Architecture and product planning meetings.',
        '4-5pm: Testing, debugging, and writing technical documentation.',
        'Reality: As you grow, you spend more time talking to people than writing code.'
      ],
      whoItFits: [
        'Enjoys debugging and problem-solving over just building new things.',
        'Patient with extreme detail (one missing semicolon breaks everything).',
        'Comfortable with rapid change (your tools will be obsolete in 3 years).',
        'Able to explain complex technical ideas to non-tech managers.'
      ],
      whoShouldAvoid: [
        'Needs immediate, stable income (entry-level hunting can take 6 months).',
        'Dislikes sitting for 8-10 hours a day in front of a screen.',
        'Wants predictable, manual work that never changes.',
        'Struggles with abstract mathematical logic.'
      ],
      careerPaths: {
        employee: ['Software Engineer ($80k-$140k starting abroad)', 'Data Engineer', 'Cybersecurity Specialist'],
        freelance: ['Web Development', 'Consultancy (hard to start for juniors)'],
        business: ['SaaS Founder', 'Tech Agency Owner']
      },
      uzVsAbroad: {
        uz: ['Local demand is rising in Fintech and E-commerce.', 'Remote work for Western companies while living in UZ is the "Gold Medal" path.'],
        abroad: ['Extremely high demand but brutal entry-level competition.', 'Visa sponsorship (H1B/Skilled Worker) is a primary goal for many.']
      },
      realityCheck: [
        { factor: 'Difficulty', rating: 'HIGH', notes: 'Heavy theory and frustrating debugging cycles.' },
        { factor: 'Competition', rating: 'VERY HIGH', notes: 'Everyone wants to be in tech now.' },
        { factor: 'Income Potential', rating: 'HIGH', notes: 'Highest ceiling for employees.' },
        { factor: 'AI Risk', rating: 'MEDIUM-HIGH', notes: 'Junior roles are being automated; specialists are safer.' }
      ],
      freeResources: [
        { name: 'Harvard CS50x', url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science', why: 'The gold standard intro. Teaches thinking, not just syntax.', whenToStop: 'After Week 5 if you feel you have the logic down.', notFor: 'People looking for a quick certificate.' },
        { name: 'Roadmap.sh', url: 'https://roadmap.sh', why: 'Visual guides for every role.', whenToStop: 'Use only as a reference; do not try to "finish" it.', notFor: 'Students who get easily overwhelmed by long lists.' }
      ]
    },
    {
      id: 'business-management',
      title: 'Business / Management',
      description: 'Understanding organizational leverage.',
      actuallyIs: 'You learn how organizations function: accounting, finance, marketing, operations, HR, and strategy. It is broad, which is both its greatest strength and its primary weakness. You are the "glue" between different departments.',
      dailyWork: [
        'Heavy use of Excel, PowerPoint, and CRM software.',
        'Back-to-back meetings to coordinate between teams.',
        'Analyzing performance metrics and budgeting.',
        'Solving operational fires (e.g., supply chain delays).',
        'Reality: Much of your day is managing personalities and reporting data.'
      ],
      whoItFits: [
        'Strong communicators who can lead teams without being "the boss."',
        'People who enjoy identifying patterns in data metrics.',
        'Generalists who get bored specializing in one technical skill.',
        'Strong networkers who build relationships easily.'
      ],
      whoShouldAvoid: [
        'Introverts who find constant meeting/negotiation draining.',
        'People who hate spreadsheets and fine-print contracts.',
        'Those seeking a "hard" technical skill with immediate job security.',
        'Individuals who prefer working completely alone.'
      ],
      careerPaths: {
        employee: ['Management Consultant', 'Marketing Manager', 'Operations Lead'],
        freelance: ['Business Strategy Consultant', 'Project Management'],
        business: ['Entrepreneurship', 'Retail/Service business ownership']
      },
      uzVsAbroad: {
        uz: ['Very useful for the growing private sector in Tashkent.', 'Parental networks often help here, but merit is becoming more important.'],
        abroad: ['Extremely valuable with a top-tier MBA.', 'High competition for entry-level analyst roles.']
      },
      realityCheck: [
        { factor: 'Difficulty', rating: 'LOW-MEDIUM', notes: 'Conceptual and relationship-based.' },
        { factor: 'Competition', rating: 'EXTREME', notes: 'The most common major; standing out is very hard.' },
        { factor: 'Income Potential', rating: 'MEDIUM-HIGH', notes: 'Starts low, but scales high in seniority.' },
        { factor: 'AI Risk', rating: 'MEDIUM', notes: 'Routine management can be automated; leadership cannot.' }
      ],
      freeResources: [
        { name: 'MIT Sloan (OCW)', url: 'https://ocw.mit.edu/courses/management/', why: 'Rigorous university materials.', whenToStop: 'After understanding Case Study methodology.', notFor: 'Light motivational readers.' },
        { name: 'CFI Free Courses', url: 'https://corporatefinanceinstitute.com/resources/free-courses/', why: 'Learn actual skills like balance sheets.', whenToStop: 'After finishing "Accounting Fundamentals."', notFor: 'Math-haters.' }
      ]
    },
    {
      id: 'economics',
      title: 'Economics',
      description: 'Analyzing systems of value and resource allocation.',
      actuallyIs: 'Economics is the study of how people, companies, and governments make choices about resources. It combines social science with high-level math and data analysis. It\'s more about predicting human behavior through models than just "money."',
      dailyWork: [
        'Data cleaning and statistical modeling (R, Python, or Stata).',
        'Drafting policy briefs or market research reports.',
        'Forecasting market trends based on historical data.',
        'Meetings with stakeholders to explain complex economic signals.',
        'Reality: If you are in research, it is 90% cleaning data in a computer.'
      ],
      whoItFits: [
        'Highly analytical thinkers who look for "hidden" causes.',
        'People who enjoy math but want to apply it to human society.',
        'Strong writers who can turn numbers into readable stories.',
        'Those interested in global policy and macro-trends.'
      ],
      whoShouldAvoid: [
        'Students who "just want to work in a bank" (Finance is better).',
        'People who dislike advanced calculus and statistics.',
        'Those seeking a creative, hands-on major.',
        'Individuals who want a simple, black-and-white answer to problems.'
      ],
      careerPaths: {
        employee: ['Policy Analyst', 'Data Scientist', 'Financial Analyst', 'Economic Researcher'],
        freelance: ['Data Analysis contracts', 'Technical Writing'],
        business: ['Venture Capital', 'Strategic Planning for firms']
      },
      uzVsAbroad: {
        uz: ['High demand in government ministries and international NGOs (UNDP, World Bank).', 'Valuable for Tashkent-based macro-economic research.'],
        abroad: ['Well-regarded by consulting firms (McKinsey, BCG).', 'Requires a Master’s or PhD for high-level research roles.']
      },
      realityCheck: [
        { factor: 'Difficulty', rating: 'HIGH', notes: 'Intense math and abstract modeling.' },
        { factor: 'Competition', rating: 'HIGH', notes: 'Compete with Finance and Math majors for roles.' },
        { factor: 'Income Potential', rating: 'HIGH', notes: 'Top analysts earn significantly.' },
        { factor: 'AI Risk', rating: 'MEDIUM', notes: 'Data tasks are being automated; judgment remains key.' }
      ],
      freeResources: [
        { name: 'Marginal Revolution University', url: 'https://mru.org/', why: 'Best visual intro to Micro and Macro economics.', whenToStop: 'After the Core Principles modules.', notFor: 'People who hate talking about "Supply and Demand."' },
        { name: 'Khan Academy Macroeconomics', url: 'https://www.khanacademy.org/economics-finance-domain/macroeconomics', why: 'Explains the math behind the news.', whenToStop: 'When you can explain "Inflation" accurately.', notFor: 'Advanced math students (too basic).' }
      ]
    },
    {
      id: 'engineering',
      title: 'Engineering',
      description: 'Applying physical laws to solve material problems.',
      actuallyIs: 'Engineering is using math, physics, and science to design, build, and maintain structures, machines, and systems. It ranges from Civil (bridges) to Mechanical (engines) and Electrical (circuits). It is the most "practical" of the hard sciences.',
      dailyWork: [
        'Designing prototypes in CAD (Computer-Aided Design) software.',
        'On-site inspections of construction or manufacturing.',
        'Running stress tests and safety calculations.',
        'Documenting technical specs for manufacturing teams.',
        'Reality: You spend more time on safety regulations than on "creative design."'
      ],
      whoItFits: [
        'Natural builders who like taking things apart.',
        'People who are "relentlessly logical" about physical problems.',
        'Comfortable with high stakes (if an engineer fails, things break).',
        'Strong spatial awareness and visualization skills.'
      ],
      whoShouldAvoid: [
        'Those who struggle with Physics and advanced Calculus.',
        'People who prefer abstract theory over physical results.',
        'Individuals who dislike technical rules and standardized safety codes.',
        'Students seeking a "fast and easy" degree.'
      ],
      careerPaths: {
        employee: ['Civil Engineer', 'Mechanical Engineer', 'Structural Lead', 'Manufacturing Manager'],
        freelance: ['Independent CAD design', 'Site consultancy'],
        business: ['Construction firm owner', 'Hardware Startup founder']
      },
      uzVsAbroad: {
        uz: ['Massive demand due to the construction boom in Tashkent.', 'Electrical engineering is critical for local energy infrastructure.'],
        abroad: ['Strong visa prospects for skilled labor in EU (especially Germany).', 'Stable, high-floor income in almost any country.']
      },
      realityCheck: [
        { factor: 'Difficulty', rating: 'VERY HIGH', notes: 'Brutal math and physics load.' },
        { factor: 'Competition', rating: 'MEDIUM-HIGH', notes: 'High bar to entry keeps supply low.' },
        { factor: 'Income Potential', rating: 'MEDIUM-HIGH', notes: 'Very stable, but lower ceiling than Software.' },
        { factor: 'AI Risk', rating: 'LOW', notes: 'Physical onsite presence and safety liability are hard to automate.' }
      ],
      freeResources: [
        { name: 'The Engineering ToolBox', url: 'https://www.engineeringtoolbox.com/', why: 'Actual formulas used in the field.', whenToStop: 'Use as a reference library.', notFor: 'Beginners (very technical).' },
        { name: 'Brilliant.org (Free trials/Physics)', url: 'https://brilliant.org/', why: 'Build intuitive understanding of physical laws.', whenToStop: 'Once you understand simple mechanics.', notFor: 'People who want to learn code only.' }
      ]
    },
    {
      id: 'medicine',
      title: 'Medicine',
      description: 'The science of biological maintenance and repair.',
      actuallyIs: 'Medicine is the study of diagnosing, treating, and preventing disease. It is a long, 10-15 year journey of education and training. You are committing to a life of service and continuous learning. It is not just about "saving lives"—it is about detailed biological maintenance.',
      dailyWork: [
        'Patient rounds (checking on recovery/status).',
        'Diagnostic testing and reviewing lab results.',
        'Massive amounts of paperwork/electronic medical records.',
        'Staying awake for 24+ hour shifts during residency.',
        'Reality: You spend 40% of your time on administrative data entry.'
      ],
      whoItFits: [
        'Extremely high emotional resilience (handling death and illness).',
        'Ability to memorize vast amounts of information.',
        'Deep empathy combined with professional detachment.',
        'Commitment to a 10+ year education path before high income.'
      ],
      whoShouldAvoid: [
        'People primarily motivated by "status" or "money" (other paths are faster).',
        'Those who faint at the sight of blood or bodily fluids.',
        'Individuals with low patience for bureaucracy.',
        'Students who value a 9-to-5 work-life balance early in life.'
      ],
      careerPaths: {
        employee: ['Surgeon', 'General Practitioner', 'Medical Researcher', 'Hospital Administrator'],
        freelance: ['Private Clinic (requires huge capital)', 'Telemedicine'],
        business: ['Health-tech consultant', 'Pharma sales']
      },
      uzVsAbroad: {
        uz: ['Local doctors are respected but often underpaid in the public sector.', 'Private clinics in Tashkent are the high-income target.'],
        abroad: ['Extremely difficult licensing exams (USMLE, PLAB) to move.', 'Highest job security of any profession globally.']
      },
      realityCheck: [
        { factor: 'Difficulty', rating: 'EXTREME', notes: 'Unmatched volume of information.' },
        { factor: 'Competition', rating: 'EXTREME', notes: 'Getting into med school is just the first hurdle.' },
        { factor: 'Income Potential', rating: 'HIGH', notes: 'Guaranteed high income, but only after age 30-35.' },
        { factor: 'AI Risk', rating: 'LOW', notes: 'Human trust and surgical dexterity are safe.' }
      ],
      freeResources: [
        { name: 'Khan Academy Biology/Health', url: 'https://www.khanacademy.org/science/health-and-medicine', why: 'Best intro to human systems.', whenToStop: 'After finishing "Anatomy and Physiology."', notFor: 'Those who hate memorizing Latin names.' },
        { name: 'Kenhub (Free articles)', url: 'https://www.kenhub.com/', why: 'Learn where bones and organs actually are.', whenToStop: 'Use as a supplement.', notFor: 'Visual learners who prefer books.' }
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
    honestTimelineLabel: "Real ijro vaqti",
    moduleLabel: "Modul"
  },
  majors: [
    {
      id: 'computer-science',
      title: 'Computer Science',
      description: 'Mantiq va avtomatlashtirish arxitekturasi.',
      actuallyIs: 'CS — bu kod va tizimlar orqali fikrlashni o‘rganish degani. Siz dasturlash, algoritmlar, ma’lumotlar tuzilmasi va arxitekturani o‘rganasiz. Bu shunchaki "kod yozish" emas — bu nima uchun ba’zi yechimlar ishlashi, boshqalari esa buzilishini va millionlab foydalanuvchilarga xizmat qila oladigan tizimlarni qanday yaratishni tushunishdir.',
      dailyWork: [
        '9-10: Stand-up uchrashuvi (ish jarayonini kuzatish).',
        '10-12: Chuqur kod yozish (odatda kuniga faqat 2-3 soat haqiqiy kod yoziladi).',
        '13-15: Kod tahlili (Code Review) va jamoaviy fikr-mulohaza.',
        '15-16: Arxitektura va mahsulotni rejalashtirish uchrashuvlari.',
        '16-17: Testlash, xatolarni tuzatish va texnik hujjatlar yozish.',
        'Haqiqat: Tajribangiz oshgani sayin, kod yozishdan ko‘ra odamlar bilan muloqotga ko‘p vaqt sarflaysiz.'
      ],
      whoItFits: [
        'Yangi narsa qurishdan ko‘ra, xatolarni qidirish va muammolarni hal qilishni yoqtiradiganlar.',
        'Mayda detallarga sabrli (bitta nuqta-vergul hammasini buzishi mumkin).',
        'Tez o‘zgarishlarga tayyor (ishlatayotgan asboblaringiz 3 yilda eskiradi).',
        'Murakkab texnik g‘oyalarni mutaxassis bo‘lmagan rahbarlarga tushuntira oladiganlar.'
      ],
      whoShouldAvoid: [
        'Tezkor va barqaror daromadga muhtojlar (junior darajasida ish topish 6 oygacha cho‘zilishi mumkin).',
        'Kuniga 8-10 soat monitor qarshisida o‘tirishni yoqtirmaydiganlar.',
        'Hech qachon o‘zgarmaydigan, bir xil mexanik ishni xohlaydiganlar.',
        'Abstrakt matematik mantiq bilan qiynaladiganlar.'
      ],
      careerPaths: {
        employee: ['Dasturiy ta’minot muhandisi', 'Ma’lumotlar muhandisi (Data Engineer)', 'Kiberxavfsizlik mutaxassisi'],
        freelance: ['Veb-saytlar yaratish', 'Texnik maslahat (Juniorlar uchun qiyin)'],
        business: ['SaaS startap asoschisi', 'IT agentlik egasi']
      },
      uzVsAbroad: {
        uz: ['Fintech va elektron tijorat sohalarida talab ortib bormoqda.', 'O‘zbekistonda yashab, G‘arb kompaniyalariga masofadan ishlash — eng foydali yo‘l.'],
        abroad: ['Talab yuqori, lekin boshlang‘ich darajadagi raqobat juda kuchli.', 'Viza homiyligi ko‘pchilikning asosiy maqsadidir.']
      },
      realityCheck: [
        { factor: 'Qiyinchilik', rating: 'YUQORI', notes: 'Og‘ir nazariya va asabiy xato tuzatish jarayonlari.' },
        { factor: 'Raqobat', rating: 'JUDA YUQORI', notes: 'Hozir hamma IT sohasiga kirishga harakat qilyapti.' },
        { factor: 'Daromad salohiyati', rating: 'YUQORI', notes: 'Xodimlar uchun eng yuqori maoshlar.' },
        { factor: 'AI xavfi', rating: 'O‘RTA-YUQORI', notes: 'Junior vazifalar avtomatlashmoqda; mutaxassislar xavfsizroq.' }
      ],
      freeResources: [
        { name: 'Harvard CS50x', url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science', why: 'Eng yaxshi kirish kursi. Sintaksisni emas, fikrlashni o‘rgatadi.', whenToStop: '5-haftadan keyin, agar mantiqni tushungan bo‘lsangiz.', notFor: 'Tezkor sertifikat qidirayotganlar.' },
        { name: 'Roadmap.sh', url: 'https://roadmap.sh', why: 'Har bir yo‘nalish uchun vizual qo‘llanmalar.', whenToStop: 'Faqat ma’lumotnoma sifatida ishlating; hammasini tugatishga urinmang.', notFor: 'Uzun ro‘yxatlardan tezda tushkunlikka tushadiganlar.' }
      ]
    },
    {
      id: 'business-management',
      title: 'Business / Management',
      description: 'Tashkiliy boshqaruvni tushunish.',
      actuallyIs: 'Siz tashkilotlar qanday ishlashini o‘rganasiz: buxgalteriya, moliya, marketing, operatsiyalar, HR va strategiya. Bu soha juda keng, bu uning ham yutug‘i, ham kamchiligidir. Siz turli bo‘limlar orasidagi "ko‘prik" vazifasini bajarasiz.',
      dailyWork: [
        'Excel, PowerPoint va CRM dasturlaridan faol foydalanish.',
        'Jamoalararo ishlarni muvofiqlashtirish uchun ketma-ket majlislar.',
        'Samaradorlik ko‘rsatkichlarini tahlil qilish va byudjetlashtirish.',
        'Operatsion muammolarni hal qilish (masalan, yetkazib berishdagi kechikishlar).',
        'Haqiqat: Kuningizning katta qismi odamlarni boshqarish va hisobot berishga ketadi.'
      ],
      whoItFits: [
        'Rahbar bo‘lmasdan ham jamoani boshqara oladigan kuchli notiqlar.',
        'Ma’lumotlar ichidan qonuniyatlarni topishni yoqtiradiganlar.',
        'Bitta texnik ishga bog‘lanib qolishni istamaydigan keng qamrovli insonlar.',
        'Oson munosabat qura oladiganlar.'
      ],
      whoShouldAvoid: [
        'Doimiy muloqot va muzokaralardan charchaydigan introvertlar.',
        'Jadvallar va mayda harfli shartnomalarni yoqtirmaydiganlar.',
        'Aniq texnik ko‘nikma va darhol ish kafolatini xohlaydiganlar.',
        'Faqat yakka tartibda ishlashni afzal ko‘radiganlar.'
      ],
      careerPaths: {
        employee: ['Boshqaruv maslahatchisi', 'Marketing menejeri', 'Operatsion direktor'],
        freelance: ['Biznes strategiyasi bo‘yicha maslahatchi', 'Loyihalar boshqaruvi'],
        business: ['Tadbirkorlik', 'Chakana savdo yoki xizmat ko‘rsatish biznesi']
      },
      uzVsAbroad: {
        uz: ['Toshkentdagi rivojlanayotgan xususiy sektor uchun juda foydali.', 'Tanish-bilish muhim, lekin hozirda bilim va tajriba birinchi o‘ringa chiqmoqda.'],
        abroad: ['Nufuzli MBA darajasi bilan juda qadrli.', 'Analitik lavozimlar uchun raqobat juda kuchli.']
      },
      realityCheck: [
        { factor: 'Qiyinchilik', rating: 'PAST-O‘RTA', notes: 'Asosan tushunchalar va munosabatlarga asoslangan.' },
        { factor: 'Raqobat', rating: 'O‘TA YUQORI', notes: 'Eng ommabop yo‘nalish; ajralib turish qiyin.' },
        { factor: 'Daromad salohiyati', rating: 'O‘RTA-YUQORI', notes: 'Boshida past, lekin tajriba bilan tez o‘sadi.' },
        { factor: 'AI xavfi', rating: 'O‘RTA', notes: 'Texnik boshqaruv avtomatlashishi mumkin; yetakchilik esa yo‘q.' }
      ],
      freeResources: [
        { name: 'MIT Sloan (OCW)', url: 'https://ocw.mit.edu/courses/management/', why: 'Nufuzli universitet materiallari.', whenToStop: 'Case Study uslubini tushungandan keyin.', notFor: 'Yengil motivatsiya qidirayotganlar.' },
        { name: 'CFI bepul kurslari', url: 'https://corporatefinanceinstitute.com/resources/free-courses/', why: 'Buxgalteriya kabi amaliy ko‘nikmalarni o‘rganish.', whenToStop: '"Accounting Fundamentals" kursini tugatgach.', notFor: 'Matematikadan qochadiganlar.' }
      ]
    },
    {
      id: 'economics',
      title: 'Iqtisodiyot',
      description: 'Qiymat tizimlari va resurslarni taqsimlash tahlili.',
      actuallyIs: 'Iqtisodiyot — bu odamlar, kompaniyalar va hukumatlarning resurslar bo‘yicha qanday tanlov qilishini o‘rganadigan fan. U ijtimoiy fanlarni yuqori darajadagi matematika va ma’lumotlar tahlili bilan birlashtiradi. Bu shunchaki "pul" haqida emas, balki modellar orqali inson xulq-atvorini bashorat qilish haqidadir.',
      dailyWork: [
        'Ma’lumotlarni tozalash va statistik modellashtirish (R, Python yoki Stata).',
        'Siyosiy sharhlar yoki bozor tadqiqotlari hisobotlarini tayyorlash.',
        'Tarixiy ma’lumotlar asosida bozor tendentsiyalarini prognoz qilish.',
        'Murakkab iqtisodiy signallarni tushuntirish uchun uchrashuvlar.',
        'Haqiqat: Agar siz tadqiqotda bo‘lsangiz, vaqtingizning 90% i kompyuterda ma’lumotlarni tozalash bilan o‘tadi.'
      ],
      whoItFits: [
        'Yashirin sabablarni qidiradigan o‘ta analitik fikrlovchilar.',
        'Matematikani yaxshi ko‘radigan, lekin uni jamiyatga tatbiq etmoqchi bo‘lganlar.',
        'Raqamlarni o‘qilishi oson hikoyaga aylantira oladigan kuchli yozuvchilar.',
        'Global siyosat va makro-tendentsiyalarga qiziqqanlar.'
      ],
      whoShouldAvoid: [
        'Faqat "bankda ishlashni" xohlaydiganlar (Moliya yo‘nalishi yaxshiroq).',
        'Oliy matematika va statistikani yoqtirmaydiganlar.',
        'Ijodiy va amaliy ish qidirayotganlar.',
        'Muammolarga oddiy, oq-qora javob xohlaydiganlar.'
      ],
      careerPaths: {
        employee: ['Siyosiy tahlilchi', 'Data Scientist', 'Moliyaviy tahlilchi', 'Iqtisodiy tadqiqotchi'],
        freelance: ['Ma’lumotlar tahlili shartnomalari', 'Texnik yozish'],
        business: ['Venchur kapitali', 'Kompaniyalar uchun strategik rejalashtirish']
      },
      uzVsAbroad: {
        uz: ['Vazirliklar va xalqaro tashkilotlarda (BMT, Jahon banki) talab yuqori.', 'Toshkentdagi makroiqtisodiy tadqiqotlar uchun qadrli.'],
        abroad: ['Konsalting firmalari (McKinsey, BCG) tomonidan yuqori baholanadi.', 'Yuqori darajadagi tadqiqotlar uchun magistratura yoki PhD talab etiladi.']
      },
      realityCheck: [
        { factor: 'Qiyinchilik', rating: 'YUQORI', notes: 'Kuchli matematika va abstrakt modellashtirish.' },
        { factor: 'Raqobat', rating: 'YUQORI', notes: 'Moliya va matematika bitiruvchilari bilan raqobatlashasiz.' },
        { factor: 'Daromad salohiyati', rating: 'YUQORI', notes: 'Top tahlilchilar juda yaxshi daromad topishadi.' },
        { factor: 'AI xavfi', rating: 'O‘RTA', notes: 'Ma’lumotlar bilan bog‘liq vazifalar avtomatlashmoqda; tahliliy xulosa esa insonda qoladi.' }
      ],
      freeResources: [
        { name: 'Marginal Revolution University', url: 'https://mru.org/', why: 'Iqtisodiyotga eng yaxshi vizual kirish.', whenToStop: 'Asosiy prinsiplar modullaridan keyin.', notFor: '"Talab va taklif" haqida gapirishni yoqtirmaydiganlar.' },
        { name: 'Khan Academy Macroeconomics', url: 'https://www.khanacademy.org/economics-finance-domain/macroeconomics', why: 'Yangiliklar ortidagi matematikani tushuntiradi.', whenToStop: '"Inflyatsiya"ni aniq tushuntira olganingizda.', notFor: 'Matematikasi juda kuchli talabalar uchun (juda sodda).' }
      ]
    },
    {
      id: 'engineering',
      title: 'Muhandislik',
      description: 'Moddiy muammolarni hal qilish uchun fizik qonunlarni qo‘llash.',
      actuallyIs: 'Muhandislik — bu inshootlar, mashinalar va tizimlarni loyihalash, qurish va saqlash uchun matematika va fizikadan foydalanishdir. U qurilish (ko‘priklar), mexanika (dvigatellar) va elektr (sxemalar) kabi turlarga bo‘linadi. Bu aniq fanlarning eng "amaliy" qismidir.',
      dailyWork: [
        'CAD (kompyuter yordamida loyihalash) dasturlarida chizmalar chizish.',
        'Qurilish yoki ishlab chiqarish maydonlarida tekshiruv o‘tkazish.',
        'Xavfsizlik hisob-kitoblari va sinovlarini o‘tkazish.',
        'Ishlab chiqarish jamoalari uchun texnik hujjatlarni tayyorlash.',
        'Haqiqat: Siz "ijodiy dizayn"dan ko‘ra xavfsizlik qoidalariga ko‘p vaqt sarflaysiz.'
      ],
      whoItFits: [
        'Narsalarni qismlarga ajratib, qayta yig‘ishni yoqtiradiganlar.',
        'Jismoniy muammolarga nisbatan o‘ta mantiqiy yondashadiganlar.',
        'Mas’uliyatdan qo‘rqmaydiganlar (muhandis xatosi falokatga olib kelishi mumkin).',
        'Vizual tasavvur va fazoviy fikrlashi kuchli bo‘lganlar.'
      ],
      whoShouldAvoid: [
        'Fizika va oliy matematikadan qiynaladiganlar.',
        'Amaliy natijadan ko‘ra mavhum nazariyani afzal ko‘radiganlar.',
        'Texnik qoidalar va standartlashtirilgan xavfsizlik kodlarini yoqtirmaydiganlar.',
        'Tez va oson diplom qidirayotganlar.'
      ],
      careerPaths: {
        employee: ['Qurilish muhandisi', 'Mexanik muhandis', 'Ishlab chiqarish menejeri'],
        freelance: ['Mustaqil CAD dizayni', 'Loyiha maslahatchisi'],
        business: ['Qurilish kompaniyasi egasi', 'Texnik ishlab chiqarish biznesi']
      },
      uzVsAbroad: {
        uz: ['Toshkentdagi qurilish bumu tufayli talab juda yuqori.', 'Energetika tizimi uchun elektr muhandislari juda zarur.'],
        abroad: ['Yevropada (ayniqsa Germaniyada) ishchi viza olish uchun yaxshi imkoniyat.', 'Deyarli har qanday davlatda barqaror va kafolatlangan daromad.']
      },
      realityCheck: [
        { factor: 'Qiyinchilik', rating: 'JUDA YUQORI', notes: 'Og‘ir matematika va fizika yuklamasi.' },
        { factor: 'Raqobat', rating: 'O‘RTA-YUQORI', notes: 'Kirish darajasi balandligi sababli mutaxassislar kam.' },
        { factor: 'Daromad salohiyati', rating: 'O‘RTA-YUQORI', notes: 'Barqaror, lekin IT’dagi kabi juda tez o‘smaydi.' },
        { factor: 'AI xavfi', rating: 'PAST', notes: 'Jismoniy mavjudlik va xavfsizlik mas’uliyatini avtomatlashtirish qiyin.' }
      ],
      freeResources: [
        { name: 'The Engineering ToolBox', url: 'https://www.engineeringtoolbox.com/', why: 'Sohada ishlatiladigan haqiqiy formulalar.', whenToStop: 'Faqat ma’lumotnoma sifatida ishlating.', notFor: 'Boshlovchilar uchun (juda texnik).' },
        { name: 'Brilliant.org (Fizika)', url: 'https://brilliant.org/', why: 'Fizik qonunlarni intuitiv tushunishni shakllantiradi.', whenToStop: 'Mexanika asoslarini tushunganingizda.', notFor: 'Faqat kod yozishni xohlaydiganlar.' }
      ]
    },
    {
      id: 'medicine',
      title: 'Tibbiyot',
      description: 'Biologik xizmat ko‘rsatish va ta’mirlash fani.',
      actuallyIs: 'Tibbiyot — bu kasalliklarni aniqlash, davolash va oldini olishni o‘rganishdir. Bu 10-15 yillik ta’lim va tayyorgarlik yo‘li. Siz xizmat qilish va doimiy o‘rganishga umringizni bag‘ishlaysiz. Bu shunchaki "hayot qutqarish" emas — bu murakkab biologik tizimni batafsil tahlil qilishdir.',
      dailyWork: [
        'Bemorlarni ko‘zdan kechirish (Rounds).',
        'Tahlil natijalarini ko‘rib chiqish va tashxis qo‘yish.',
        'Juda ko‘p miqdordagi qog‘ozbozlik va elektron hisobotlar.',
        'Rezidentura davrida 24+ soatlik navbatchiliklar.',
        'Haqiqat: Vaqtingizning 40% ini kompyuterga ma’lumot kiritishga sarflaysiz.'
      ],
      whoItFits: [
        'O‘ta yuqori ruhiy chidamlilik (o‘lim va kasallik bilan ishlash).',
        'Katta hajmdagi ma’lumotlarni yodlay olish qobiliyati.',
        'Hamdardlik (empathy) va professional sovuqqonlikni birlashtira olish.',
        'Yuqori daromadgacha bo‘lgan 10+ yillik yo‘lga tayyor bo‘lganlar.'
      ],
      whoShouldAvoid: [
        'Asosan "status" yoki "pul" uchun tanlayotganlar (boshqa yo‘llar tezroq daromad beradi).',
        'Qon yoki tana suyuqliklarini ko‘rsa o‘zini yo‘qotadiganlar.',
        'Byurokratiyaga sabri yetmaydiganlar.',
        'Hayotining boshida erkin vaqt (work-life balance) xohlaydiganlar.'
      ],
      careerPaths: {
        employee: ['Xirurg', 'Terapevt', 'Tibbiy tadqiqotchi', 'Kasalxona administratori'],
        freelance: ['Xususiy klinika (katta sarmoya talab qiladi)', 'Teletibbiyot'],
        business: ['Health-tech maslahatchisi', 'Farmatsevtika savdosi']
      },
      uzVsAbroad: {
        uz: ['Davlat sektorida shifokorlar hurmat qilinadi, lekin ko‘pincha maosh kam.', 'Toshkentdagi xususiy klinikalar asosiy daromad manbai.'],
        abroad: ['Boshqa davlatga o‘tish uchun juda qiyin imtihonlar (USMLE, PLAB) topshirish kerak.', 'Dunyo bo‘ylab eng barqaror ish o‘rni.']
      },
      realityCheck: [
        { factor: 'Qiyinchilik', rating: 'O‘TA YUQORI', notes: 'Ma’lumot hajmi bo‘yicha tengsiz soha.' },
        { factor: 'Raqobat', rating: 'O‘TA YUQORI', notes: 'O‘qishga kirish — bu faqat birinchi to‘siq.' },
        { factor: 'Daromad salohiyati', rating: 'YUQORI', notes: 'Faqat 30-35 yoshdan keyin yaxshi daromad kafolatlanadi.' },
        { factor: 'AI xavfi', rating: 'PAST', notes: 'Insoniy ishonch va jarrohlik mahoratini almashtirib bo‘lmaydi.' }
      ],
      freeResources: [
        { name: 'Khan Academy Medicine', url: 'https://www.khanacademy.org/science/health-and-medicine', why: 'Inson tizimlariga eng yaxshi kirish.', whenToStop: 'Anatomiya va fiziologiyani tugatgach.', notFor: 'Lotincha nomlarni yodlashni yomon ko‘radiganlar.' },
        { name: 'Kenhub', url: 'https://www.kenhub.com/', why: 'Organlar va suyaklarning joylashuvini o‘rganish.', whenToStop: 'Qo‘shimcha manba sifatida ishlating.', notFor: 'Kitobdan o‘qishni afzal ko‘radiganlar.' }
      ]
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
