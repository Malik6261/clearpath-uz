import { Major, Exam, Scholarship, PracticalPath, SiteContent, Locale } from './types';

export type { Locale };

const AUSBILDUNG_PATH_UZ: PracticalPath = {
  "id": "ausbildung",
  "title": "Ausbildung",
  "subtitle": "Germaniya Dual Kasb-hunar Ta’limi",
  "actuallyIs": "Ausbildung — bu Germaniyada 2-3,5 yil davom etadigan kasb-hunar ta’limi dasturi bo‘lib, u ish joyidagi amaliyotni va o‘quv yurtidagi nazariyani birlashtiradi. Universitetdan farqli o‘laroq, siz birinchi kundan kompaniya xodimi hisoblanasiz va o‘qish davomida oylik maosh olasiz.",
  "types": [
    {
      "name": "Texnik / Sanoat",
      "description": "Mexatronika, IT mutaxassisi, elektronika, avtomobil mexanikasi.",
      "realityForForeigners": "Talab juda yuqori, lekin kuchli mantiq va yaxshi nemis tilini talab qiladi.",
      "realistic": true
    },
    {
      "name": "Tibbiyot / Hamshiralik",
      "description": "Keksalar parvarishi, hamshiralik, terapiya yordamchilari.",
      "realityForForeigners": "Viza olish eng oson yo‘l, lekin jismoniy va hissiy jihatdan juda og‘ir.",
      "realistic": true
    },
    {
      "name": "Ma’muriyat / Ofis",
      "description": "Ofis boshqaruvi, buxgalteriya yordamchilari.",
      "realityForForeigners": "Tilning nozik jihatlarini bilish talab qilingani uchun chet elliklar uchun juda qiyin.",
      "realistic": false
    }
  ],
  "whoFits": [
    "Nazariy ma’ruzalardan ko‘ra amaliy ishni afzal ko‘radiganlar.",
    "Moliyaviy mustaqillikka intiluvchilar (o‘qib turib pul topish).",
    "Nemis tilini yuqori darajada (B2) o‘rganishga tayyor bo‘lganlar.",
    "Bir vaqtning o‘zida to‘liq ish kuni va o‘qishni eplay oladigan intizomli yoshlar."
  ],
  "whoShouldAvoid": [
    "Faqat \"status\" yoki \"talaba\" degan nomni xohlaydiganlar.",
    "Jismoniy yoki xizmat ko‘rsatish sohasidagi ishlarni xohlamaydiganlar.",
    "Yangi til (nemis tili) o‘rganishni o‘ta qiyin deb biladiganlar.",
    "Uzoq muddatli mehnat qilmasdan, \"tezda chiqib ketish\" yo‘lini qidirayotganlar."
  ],
  "languageReality": {
    "official": "B1 yoki B2 nemis tili",
    "practical": "Kuchli B2 / Erta C1",
    "reasons": [
      "Kasb-hunar maktabi imtihonlari texnik nemis tilida bo‘ladi.",
      "Ustaxona yoki shifoxonalardagi hamkasblar kamdan-kam hollarda nemis tilidan boshqa tilda gaplashishadi.",
      "Xavfsizlik protokollarini mukammal tushunish shart."
    ],
    "trajectory": [
      {
        "level": "A1-A2",
        "time": "4-6 oy"
      },
      {
        "level": "B1-B2",
        "time": "6-10 oy"
      },
      {
        "level": "Test/Hujjat topshirish",
        "time": "2-3 oy"
      }
    ]
  },
  "fieldCategories": [
    {
      "name": "Mexatronika",
      "acceptance": "YUQORI TANQISLIK",
      "salary": "€950 – €1,200",
      "successRate": "O‘rtacha",
      "whyAccessible": "Yevropa Ittifoqidan bo‘lmagan ishchilar uchun sanoat talabi yuqori.",
      "challenges": "Nemis tilidagi murakkab matematika va fizika.",
      "languageNeed": "B2 texnik"
    },
    {
      "name": "Hamshiralik (Pflege)",
      "acceptance": "KRITIK TANQISLIK",
      "salary": "€1,100 – €1,350",
      "successRate": "Yuqori",
      "whyAccessible": "Germaniya aholisi qarib bormoqda va qarovchilarga ehtiyoj juda katta.",
      "challenges": "Smenali ish, yuqori stress, hissiy yuklama.",
      "languageNeed": "B2 muloqot"
    }
  ],
  "financialDeepDive": {
    "monthlySalary": [
      {
        "industry": "Hamshiralik",
        "y1": "€1,100",
        "y2": "€1,200",
        "y3": "€1,350"
      },
      {
        "industry": "IT/Texnik",
        "y1": "€950",
        "y2": "€1,050",
        "y3": "€1,150"
      },
      {
        "industry": "Gastronomiya",
        "y1": "€850",
        "y2": "€950",
        "y3": "€1,050"
      }
    ],
    "livingExpenses": [
      {
        "category": "Ijara",
        "low": "€300",
        "medium": "€450",
        "high": "€600"
      },
      {
        "category": "Sug‘urta",
        "low": "€100",
        "medium": "€110",
        "high": "€120"
      },
      {
        "category": "Oziq-ovqat/Boshqa",
        "low": "€250",
        "medium": "€350",
        "high": "€450"
      }
    ],
    "mathReality": "Soliq va sug‘urtadan keyin 1000 yevro yalpi maosh taxminan 800 yevro bo‘lib qoladi. Agar ijara 400 yevro bo‘lsa, qolgan hamma narsa uchun 400 yevro qoladi. Bu hashamat emas, yashab qolish uchun yetarli pul.",
    "comparison": [
      {
        "label": "Universitetga nisbatan",
        "details": "Siz 3 yil davomida 30-40 ming yevro ishlaysiz, talabalar esa shuncha pul sarflashadi."
      },
      {
        "label": "Malakasiz ishga nisbatan",
        "details": "Ausbildung sizni \"Malakali mutaxassis\" darajasiga olib chiqadi va o‘qishdan keyin 3000 yevrodan yuqori maosh beradi."
      }
    ]
  },
  "visaLegal": {
    "residenceAct": "Yashash to‘g‘risidagi qonunning 16a-bo‘limi",
    "ageLimits": {
      "rule": "Qonuniy chegara yo‘q",
      "practice": "30 yoshdan oshganlar uchun ish beruvchi topish qiyinroq."
    },
    "financialRequirement": "Agar maosh asosiy ehtiyojlarni qoplasa (~934 yevro), odatda bloklangan hisob raqami talab qilinmaydi.",
    "recognitionProcess": [
      "Maktab attestatini apostil qilish.",
      "Nemis tiliga rasmiy tarjima.",
      "Germaniya davlat organ tomonidan tan olinishi (Anerkennung)."
    ],
    "embassyTimeline": "Toshkentda 4–12 hafta."
  },
  "downsidesExtended": [
    {
      "category": "Madaniy",
      "content": "Nemischa \"to‘g‘ridan-to‘g‘ri gapirish\" o‘zbek talabalari uchun qo‘pol tuyulishi mumkin."
    },
    {
      "category": "Ish yuklamasi",
      "content": "40 soat ish + 12 soat o‘qish + uy vazifalari. \"Talaba ta’tillari\" yo‘q."
    },
    {
      "category": "Yolg‘izlik",
      "content": "Ko‘pincha siz yagona chet ellik bo‘lgan kachik qishloqlarga joylashtirilasiz."
    }
  ],
  "myths": [
    {
      "myth": "Kirish oson.",
      "reality": "Kompaniyalar sizdan haqiqiy xodim kabi intervyu olishadi. 50 tadan ortiq hujjat topshirish odatiy hol."
    },
    {
      "myth": "Universitetga osongina o‘tish mumkin.",
      "reality": "Mumkin, lekin buning uchun alohida universitetga kirish malakasi (Abitur/Studienkolleg) talab qilinadi."
    }
  ],
  "strategicAssessment": {
    "goodMove": [
      "Maqsadingiz Germaniyada doimiy yashash.",
      "5 yil universitetda o‘qimasdan yuqori maoshli texnik ishni xohlaysiz."
    ],
    "badMove": [
      "O‘zbekistonda qolmoqchisiz (bu diplom bu yerda kamroq ahamiyatga ega).",
      "Jismoniy ishni yoki qat’iy jadvalni yomon ko‘rasiz."
    ]
  },
  "finalTimeline": [
    {
      "phase": "Til o‘rganish (A1-B2)",
      "duration": "12-18 Oy"
    },
    {
      "phase": "Hujjat topshirish va suhbat",
      "duration": "3-6 Oy"
    },
    {
      "phase": "Viza jarayoni",
      "duration": "2-3 Oy"
    },
    {
      "phase": "Yetib borish va boshlash",
      "duration": "Avgust/Sentyabr"
    }
  ],
  "strategicGood": [],
  "strategicBad": [],
  "realityCheck": "Mehnat qilishga tayyor bo‘lganlar uchun kuchli ijtimoiy lift. Dangasalar yoki faqat \"diplom\" deb yashaydiganlar uchun emas."
};

const UZ_CONTENT: SiteContent = {
  ui: {
  "seo": {
    "home": {
      "title": "ClearPath — Oʻzbekiston talabalari uchun qaror qabul qilish yoʻriqnomasi",
      "desc": "Oʻzbekistonlik talabalar uchun ochiq ma’lumotlar indeksi. Yo‘nalishlar, imtihonlar va karyera yo‘llari bo‘yicha rostgo‘y ma’lumotlar."
    },
    "majors": {
      "title": "Mutaxassisliklar indeksi — ClearPath",
      "desc": "Oʻzbekiston universitet yoʻnalishlarining xolis tahlili. Kundalik voqelik, daromad salohiyati va stress omillari."
    },
    "exams": {
      "title": "Xalqaro imtihonlar indeksi — ClearPath",
      "desc": "SAT, IELTS va DET imtihonlari boʻyicha strategik ma’lumotlar va kirish talablari."
    },
    "scholarships": {
      "title": "Grantlar va moliyalashtirish — ClearPath",
      "desc": "El-Yurt Umidi, Chevening va Turkiya Burslari kabi grant dasturlarining tahlili."
    },
    "paths": {
      "title": "Amaliy yoʻllar — ClearPath",
      "desc": "Universitetga muqobil boʻlgan amaliy va ishga yoʻnaltirilgan yo_llar, Ausbildung tahlili."
    },
    "resources": {
      "title": "Bepul o‘quv resurslari — ClearPath",
      "desc": "Talabalar uchun saralangan va sifatli bepul resurslar katalogi."
    },
    "gapYear": {
      "title": "Tanaffus yili strategiyasi — ClearPath",
      "desc": "O‘zbekistonda Gap Year (tanaffus yili) olishning foyda va zararlari haqida rostgo‘y qo‘llanma."
    },
    "gap-year": {
      "title": "Tanaffus yili strategiyasi — ClearPath",
      "desc": "O‘zbekistonda Gap Year (tanaffus yili) olishning foyda va zararlari haqida rostgo‘y qo‘llanma."
    },
    "about": {
      "title": "ClearPath loyihasi haqida",
      "desc": "Nima uchun biz O‘zbekiston talabalari uchun ushbu rostgo‘y qo‘llanmani yaratdik."
    },
    "contact": {
      "title": "So‘rovlar va fikr-mulohazalar — ClearPath",
      "desc": "Murakkab qarorlar va loyiha bo‘yicha fikrlar uchun aloqa protokoli."
    }
  },
  "decisionGuide": "Ma’lumotnoma",
  "startBriefing": "Yo‘nalishlarni ko‘rish",
  "practicalAlternatives": "Amaliy tajribani o‘rganish",
  "howToUse": "Indeksdan foydalanish qoidalari",
  "philosophyTitle": "Ma’lumot chegaralari",
  "noteOnDecisions": "Mustaqil ma’lumotnoma",
  "methodology": "Ma’lumotlar metodologiyasi",
  "academicLibrary": "Yo‘nalishlar",
  "practicalPaths": "Amaliy yo‘llar",
  "exams": "Imtihonlar",
  "scholarshipsLabel": "Grantlar",
  "resourcesLabel": "Resurslar",
  "plannerLabel": "Rejalashtiruvchi",
  "gapYear": "Gap Year",
  "academicHeader": "Akademik arxiv",
  "practicalHeader": "Amaliy yo‘llar",
  "toolsHeader": "Asboblar va resurslar",
  "readyForTruth": "Tahlilni ko‘rish",
  "analysisComplete": "Hujjatlar ko‘rib chiqildi.",
  "returnToDirectory": "Indeksga qaytish",
  "backToOverview": "Asosiy indeks",
  "inquiry": "Aloqa",
  "feedback": "Fikrlar",
  "soon": "Tez kunda",
  "locked": "Ko‘rib chiqilmoqda",
  "sourcesReferenced": "Asoslangan manbalar",
  "logoDisclaimer": "Logotiplar faqat ma’lumot uchun. Hech qanday hamkorlik nazarda tutilmagan.",
  "academicLabel": "AKADEMIK",
  "careerLabel": "KARYERA VA TAJRIBA",
  "editorialIndex": "Ma’lumotlar indeksi — 2025-yil nashri",
  "homeTitle1": "To'g'ri ma'lumot,",
  "homeTitle2": "tartiblangan.",
  "homeSubtitle": "O‘zbekistonlik talabalar uchun ochiq ma’lumotlar indeksi. Universitet yo‘nalishlari, xalqaro imtihonlar va muassasa talablari bo‘yicha hujjatlashtirilgan tahlillar.",
  "homeQuote": "Qaror qabul qilishda odamlar dars qilmaganidan emas, noto‘g‘ri ma’lumotga tayanganidan yutqazadi. Biz shu ma’lumotlarni siz uchun tartibladik.",
  "philTitle": "ROSTGO‘Y BOSHLANG‘ICH",
  "philSub": "Ushbu qo‘llanmadan qanday foydalanish kerak?",
  "phil1": "Biz siz uchun qaror qabul qilmaymiz. Ushbu qo‘llanma sizga o‘zingiz mustaqil qaror qabul qilishingiz uchun rostgo‘y ma’lumot berish uchun yaratilgan. Yo‘lingiz — o‘z qo‘lingizda.",
  "phil2": "Biz hamma narsani boricha ko‘rsatishga ishonamiz — ijobiy tomonlarini ham, qiyinchiliklarini ham. Biz faktlar kutubxonasiymiz, kouch emasmiz.",
  "phil3": "Hozir boshingiz qotgan bo‘lsa, bu normal holat. Ushbu indeks sizga bo‘sh va’dalar o‘rniga aniq ma’lumotlar berish orqali chalkashlikdan chiqishga yordam beradi.",
  "phil4": "Buni kompas deb tasavvur qiling. Biz sizga narsalar qayerda ekanini ko‘rsatamiz, lekin uni qo‘lda ushlab, yo‘nalishni tanlaydigan sizsiz.",
  "methTitle": "Metodologiya",
  "methSub": "Cross-referencing requirements",
  "meth1Title": "Manbani tekshirish",
  "meth1Desc": "Qarorlar mustaqil tekshiruvni talab qiladi. Foydalanuvchilarga ushbu indeksni rasmiy muassasa portallari bilan solishtirish tavsiya etiladi.",
  "meth2Title": "Hujjatlashtirilgan voqelik",
  "meth2Desc": "Har bir yo‘nalish sanoatning hujjatlashtirilgan omillariga tayanadi, jumladan kundalik vazifalar, daromad diapazonlari va stress darajalari.",
  "footerTagline": "O‘zbekistonlik talabalar uchun qarorlar intellekti. Haqiqatga asoslangan, aniqlik uchun qurilgan.",
  "footerNavHeader": "Navigatsiya",
  "footerInquiryHeader": "So‘rovlar",
  "footerCopyright": "Decision Intelligence Lab",
  "footerLocation": "O‘zbekiston",
  "academicArchiveLabel": "01-arxiv — Akademik yo‘nalishlar",
  "academicPageDesc": "Universitet yo‘nalishlarining xolis tahlili. Biz kundalik voqelikka, uzoq muddatli stress omillariga va haqiqiy karyera imkoniyatlariga e’tibor qaratamiz.",
  "examsArchiveLabel": "02-arxiv — Metrika va talablar",
  "examsPageDesc": "Qabul jarayonida foydalaniladigan xalqaro imtihonlar haqida xolis ma’lumotlar. Resurslaringizni sarflashdan oldin ularning ahamiyatini aniqlang.",
  "scholarshipsArchiveLabel": "03-arxiv — Kapital va grantlar",
  "scholarshipsPageDesc": "Moliyalashtirish imkoniyatlari tahlili. Biz grantlar bilan bog‘liq majburiyatlar va ularning haqiqiy voqeligini ko‘rsatamiz.",
  "pathsArchiveLabel": "04-arxiv — Amaliy mantiq",
  "pathsPageDesc": "An’anaviy universitet yo‘nalishlariga muqobil bo‘lgan yuqori samarali va ishga yo‘naltirilgan yo‘llarning bahosi.",
  "resourcesArchiveLabel": "Aktivlar katalogi — 03",
  "resourcesPageTitle": "Aktivlar inventarizatsiyasi.",
  "resourcesPageDesc": "Saralangan bilimlar. Biz bepul kontentning 99 foizini e’tibordan chetda qoldirib, sizni haqiqiy ishga tayyorlaydigan 1 foizini ajratdik.",
  "resourceDirectiveLabel": "Operatsion direktiva",
  "resourceDirectiveQuote": "Linklarni yig‘ishni to‘xtating. Bitta resursni tanlang, uni egallang, so‘ng keyingisiga o‘ting. Link yig‘ish — o‘rganmaslik uchun bahonadir.",
  "resourceContextLabel": "Kontekst",
  "resourceDiscardLabel": "Ushbu holatda rad eting",
  "activeAnalysis": "Faol tahlil",
  "pathAvailable": "Mavjud",
  "pathStatus": "Holat",
  "verifiedPathway": "Tasdiqlangan yo‘l",
  "viewPath": "Yo‘lni ko‘rish",
  "queueLabel": "Navbatda",
  "pathDescription": "Texnik ta’lim, xarajatlar va yashash talablarining batafsil strategik tahlili.",
  "pathDirectory": "Yo‘llar katalogi",
  "intelligenceAnalysis": "Intellektual tahlil",
  "brutallyHonest": "Strategik jihatdan ochiq-oydin tahlil.",
  "whatItIs": "Aslida bu nima",
  "systemDefinition": "Tizim ta’rifi",
  "strategicFitment": "Strategik moslik",
  "profileAnalysis": "Profil tahlili",
  "strategicMoveIf": "Strategik qadam, AGAR:",
  "highRiskIf": "YUQORI XAVF, agarda:",
  "idealProfile": "Ideal nomzod profili",
  "languageReality": "Til voqeligi",
  "communicationBarrier": "Muloqot to‘sig‘i",
  "officialRequirement": "Rasmiy talab",
  "practicalMinimum": "Amaliy minimum",
  "preparationTrajectory": "Tayyorgarlik trayektoriyasi",
  "fieldAnalysis": "Soha tahlili",
  "operationalSectors": "Operatsion sektorlar",
  "acceptanceRate": "Qabul darajasi",
  "salaryLabel": "Maosh",
  "challengeLabel": "Qiyinchilik",
  "financialLogic": "Moliyaviy mantiq",
  "cashFlowAnalysis": "Pul oqimi tahlili",
  "industryLabel": "Sanoat",
  "y1Gross": "1-yil (Yalpi)",
  "y3Gross": "3-yil (Yalpi)",
  "expensesLabel": "Taxminiy xarajatlar",
  "deficitWarning": "Taqchillik haqida ogohlantirish",
  "longTermMath": "Uzoq muddatli hisob-kitob",
  "timeCommitment": "Vaqt talabi",
  "executionReality": "Ijro voqeligi",
  "durationLabel": "Davomiyligi",
  "weeklyLoad": "Haftalik yuklama",
  "physicalMentalLoad": "Jismoniy va ruhiy yuklama",
  "dropoutRateLabel": "O‘qishdan chetlatilish",
  "visaLegalLabel": "Viza va qonunchilik",
  "complianceProtocol": "Muvofiqlik protokoli",
  "legalBasis": "Huquqiy asos",
  "docRecognition": "Hujjatlarni tan olish",
  "legalRisksLabel": "Huquqiy xavflar",
  "risksDownsides": "Xavf va kamchiliklar",
  "darkSide": "Qorong‘u tomonlar",
  "mythsReality": "Afsona va haqiqat",
  "filteredTruth": "Saralangan haqiqat",
  "mythLabel": "Afsona",
  "realityLabel": "Haqiqat",
  "postCompletion": "Tugatgandan so‘ng",
  "payoffLabel": "Natija",
  "placementRateLabel": "Ishga joylashish",
  "startingGrossLabel": "Boshlang‘ich maosh",
  "careerTrajectory": "Karyera trayektoriyasi",
  "comparativeAnalysis": "Qiyosiy tahlil",
  "alternativeLogic": "Muqobil mantiq",
  "vsUniversity": "Universitetga nisbatan",
  "vsUnskilled": "Malakasiz ishga nisbatan",
  "vsShortCourses": "Qisqa kurslarga nisbatan",
  "finalAssessment": "Yakuniy baho",
  "bluntTruth": "Ochiq haqiqat",
  "strategicInquiry": "Strategik so‘rov",
  "contactProtocol": "Aloqa protokoli",
  "tierALabel": "A-daraja",
  "localProgramsLabel": "Mahalliy dasturlar",
  "tierBLabel": "B-daraja",
  "globalFundingLabel": "Global moliyalashtirish",
  "riskLabelPrefix": "Xavf:",
  "utilityLabelPrefix": "Foydalilik:",
  "competitivenessLabel": "Raqobatbardoshlik",
  "coverageLabel": "Qamrov",
  "riskFactorsLabel": "Xavf omillari",
  "targetProfileLabel": "Maqsadli profil",
  "requiredObligationsLabel": "Majburiyatlar",
  "realityCheckLabel": "Haqiqatni tekshirish",
  "majorIntelligenceFile": "Soha tahliliy hujjati",
  "majorDirectory": "Kutubxona katalogi",
  "examDirectory": "Imtihonlar katalogi",
  "metricAnalysisFile": "Metrik tahlil hujjati",
  "benchmarkFile": "Benchmark hujjati",
  "evaluateRelevance": "Ahamiyatini baholash",
  "strategicRelevance": "Strategik ahamiyat",
  "whoNeedsThis": "Kimga kerak?",
  "resourceProtection": "Resurslarni himoya qilish",
  "whoShouldSkip": "Kimga tavsiya etilmaydi?",
  "benchmarkTargets": "Benchmark maqsadlari",
  "scoreThresholds": "Ball chegaralari",
  "exitStrategy": "Chiqish strategiyasi",
  "whenToStop": "Qachon to‘xtash kerak",
  "discontinueIf": "Tayyorgarlikni to‘xtating, agar:",
  "executionAssets": "Tayyorgarlik aktivlari",
  "vettedResources": "Tekshirilgan resurslar",
  "objectiveReality": "Obyektiv voqelik",
  "tacticalScorecard": "Taktik baholash",
  "dailyOperations": "Kundalik vazifalar",
  "intelligenceAssets": "Bilim aktivlari",
  "alignmentSignal": "Moslik signali",
  "riskSignal": "Xavf signali",
  "analysisCompleteTitle": "Tahlil tugallandi. Yana birini ko‘ramizmi?",
  "operationalGoal": "Operatsion maqsad",
  "thresholdForStopping": "To‘xtash uchun chegara",
  "briefingComplete": "Brifing yakunlandi",
  "avoidIf": "Rad eting, agar:",
  "moduleLabel": "Modul",
  "gapYearFeatureLabel": "Maxsus tahlil",
  "gapYearTitleMain": "Tanaffus yili",
  "gapYearTitleItalic": "Strategik kechikish",
  "gapYearIntro": "Universitetga kirishni kechiktirish — bu siz qilgan eng aqlli qadam yoki barcha imkoniyatni qo‘ldan boy berish bo‘lishi mumkin. O‘rtacha yo‘l yo‘q.",
  "noPressureMsg": "Agar hozir bir qarorga kelishga tayyor bo‘lmasangiz — bu ham normal holat.",
  "specialistBtn": "🔒 Mutaxassisdan so‘rash (tez kunda)",
  "specialistNote": "Bu yo‘l-yo‘riq emas. Bu hayotiy tajribaga kirish yo‘lidir.",
  "officialMaterialsLabel": "Rasmiy materiallar",
  "prepBooksLabel": "Tayyorgarlik kitoblari",
  "additionalPlatformsLabel": "Qo‘shimcha mashq platformalari",
  "scoreGuidanceLabel": "Ball diapazoni bo‘yunda qo‘llanma",
  "scoreGuidanceDisclaimer": "Maqsadlar tarixiy tendentsiyalarga asoslangan. Muvaffaqiyat shaxsiy mashg‘ulotlarga bog‘liq. Bu natijalar bo‘yicha va’da emas.",
  "desmosTitle": "Desmos kalkulyatori",
  "youtubeTitle": "Tekshirilgan YouTube resurslari",
  "youtubeNote": "Video tayyorgarlik — qo‘shimcha vosita, u haqiqiy mashg‘ulotning o‘rnini bosa olmaydi.",
  "officialReliabilityNote": "Bular eng ishonchli manbalar, chunki ular imtihon yaratuvchilaridan keladi.",
  "creditExamsTitle": "Universitet krediti va joylashtirish imtihonlari",
  "creditExamsIntro": "Ayrim universitetlar ayrim imtihonlarni kurs krediti sifatida qabul qiladi. Bu ba’zi kirish kurslarini o‘tkazib yuborishga yordam beradi.",
  "creditExamsImportant": "Ushbu imtihonlar semestrni avtomatik ravishda yakunlab bermaydi. Yakuniy qaror universitet siyosatiga bog‘liq.",
  "creditExamsDisclaimer": "Har bir universitetning kredit siyosati har xil. Bir joyda qabul qilingan imtihon boshqa joyda o‘tmasligi mumkin.",
  "creditExamsList": [
    {
      "name": "AP Calculus AB / BC",
      "desc": "Ba’zi universitetlarda Calculus I yoki II o‘rniga o‘tishi mumkin."
    },
    {
      "name": "CLEP Calculus",
      "desc": "Ayrim universitetlar buni Calculus I krediti sifatida qabul qiladi."
    },
    {
      "name": "IB Math HL",
      "desc": "IB tizimi o‘quvchilari uchun. Ba’zi joylarda matematika kurslari o‘rniga o‘tadi."
    }
  ],
  "gapYearWhatIsTitle": "Aslida nima u?",
  "gapYearWhatIsDesc": "Gap Year — bu maktab va universitet o'rtasidagi strategik tanaffus. Bu ta'til emas, balki shaxsiy va professional o'sishga bag'ishlangan yildir.",
  "gapYearVerdictTitle": "Xulosa",
  "gapYearVerdictDesc": "Agar tizimli bo'lsa - foydasi katta. Maqsadsiz bo'lsa - xavfi yuqori.",
  "gapYearStrategicTitle": "Strategik maqsadlar",
  "gapYearStrategic1Title": "Profilni kuchaytirish",
  "gapYearStrategic1Desc": "Nufuzli grantlar uchun raqobatbardoshlikni oshirish.",
  "gapYearStrategic2Title": "Ko'nikmalarni egallash",
  "gapYearStrategic2Desc": "Dasturlash yoki marketing kabi daromadli sohalarni o'rganish.",
  "gapYearStrategic3Title": "Ruxiy dam olish",
  "gapYearStrategic3Desc": "Kuchli o'qish jarayonidan keyin 'burnout'ning oldini olish.",
  "gapYearDeceptionTitle": "Keng tarqalgan aldovlar",
  "gapYearDeception1": "Kun bo'yi dars qilaman.",
  "gapYearDeception2": "Biznes boshlayman.",
  "gapYearDeception3": "Uchta til o'rganaman.",
  "gapYearRisksBenefitsTitle": "Xavf va foydalar",
  "gapYearUpsideTitle": "Ijobiy tomonlari",
  "gapYearUpsideList": [
    "Yetuklik",
    "Yaxshi rezyume",
    "Aniq maqsad"
  ],
  "gapYearDownsideTitle": "Salbiy tomonlari",
  "gapYearDownsideList": [
    "Vaqt boy berish",
    "Ijtimoiy izolyatsiya",
    "Kechikish"
  ],
  "specialistHeader": "Mutaxassislar",
  "specialistSubtitle": "Haqiqiy ishchi daftarlari",
  "specialistDesc": "Maqsadli sohalarda ishlayotgan yuqori malakali mutaxassislarning kundalik faoliyat jurnallari.",
  "marketingPlaceholderTitle": "Raqamli marketing",
  "marketingPlaceholderSub": "O‘zbekiston va masofaviy",
  "marketingPlaceholderDesc": "Samarali marketing, kontent strategiyasi va ma’lumotlarga asoslangan o‘sish.",
  "keyFactsLabel": "Asosiy faktlar",
  "disclaimerLabel": "Faqat ma’lumot uchun rad etish",
  "ausbildungKeyFacts": [
    "Davomiyligi: 2-3 yil",
    "Tuzilishi: Kompaniya ishi + Kasb-hunar maktabi (Berufsschule)",
    "Moliya: Birinchi kundan boshlab oylik maosh",
    "Til: Odatda nemis tili B1/B2 talab qilinadi",
    "Qonuniy: Rasmiy ish-o‘qish shartnomasi"
  ],
  "ausbildungRealityNotes": [
    "Oson emas: To‘liq ish kunini akademik imtihonlar bilan birlashtirishni talab qiladi.",
    "Yuqori intizom: Qat’iy davomat va natijalarni kuzatish.",
    "Madaniy moslashuv: Nemis ish madaniyatiga tezkor kirishish.",
    "Strategik: Bu 'tezda chiqib ketish' emas — bu uzoq muddatli karyera uchun poydevordir."
  ],
  "ausbildungDisclaimer": "Ushbu bo‘lim faqat xolis ma’lumotlarni taqdim etadi. Bu Ausbildung tanlovingiz bo‘yicha tavsiya yoki to‘sqinlik qiluvchi ko‘rsatma emas.",
  "fieldAnalysisLabel": "Soha tahlili",
  "acceptanceRatingLabel": "Qabul reytingi",
  "successRateLabel": "Muvaffaqiyat darajasi",
  "whyAccessibleLabel": "Nega kirish mumkin",
  "challengesLabel": "Maxsus qiyinchiliklar",
  "languageNeedLabel": "Til talabi",
  "monthlySalaryLabel": "Oylik maosh (Yalpi)",
  "deficitRealityLabel": "Taqchillik voqeligi",
  "livingExpLabel": "Yashash xarajatlari",
  "comparisonUniLabel": "Universitet bilan solishtirganda",
  "visaResidenceLabel": "Viza va yashash joyi",
  "recognitionBarrierLabel": "Tan olish to‘sig‘i",
  "legalRisksSummary": "Huquqiy va tartibga solish xavflari",
  "finalVerdictLabel": "Yakuniy strategik xulosa",
  "decisionFrameworkLabel": "Qaror qabul qilish asosi",
  "honestTimelineLabel": "Haqiqiy ijro muddati"
},
  majors: [
  {
    "id": "computer-science",
    "title": "Computer Science (AT)",
    "description": "Mantiq va avtomatlashtirish arxitekturasi.",
    "actuallyIs": "CS (Computer Science) — bu kod va tizimlar orqali fikrlashni o‘rganish demakdir. Siz darslik, algoritmlar, ma’lumotlar tuzilmasi va arxitekturani o‘rganisiz. Bu shunchaki \"kod yozish\" emas, balki nima uchun ma’lum yechimlar ishlashi, boshqalari esa buzilishi va millionlab foydanuvchilarga mo‘ljallangan tizimlarni qanday loyihalashni o‘rganishdir.",
    "dailyWork": [
      "9:00-10:00: Stand-up yig‘ilishi (progressni kuzatish).",
      "10:00-12:00: Diqqat bilan kod yozish (mantiqiy amalga oshirish).",
      "13:00-15:00: Kodni ko‘rib chiqish va jamoa a’zolarining fikrlari.",
      "15:00-16:00: Arxitektura va mahsulotni rejalashtirish.",
      "16:00-17:00: Testlash, xatolarni tuzatish va hujjatlashtirish."
    ],
    "whoItFits": [
      "Yangi narsa yaratishdan ko‘ra, xatolarni tuzatish va muammolarni hal qilishni yoqtiradiganlar.",
      "O‘ta aniqlikka sabrli bo‘lganlar (bitta nuqta-vergul hamma narsani buzishi mumkin).",
      "Har 3 yilda asboblar (tools) eskirishiga tayyor bo‘lganlar.",
      "Texnik mantiqni mutaxassis bo‘lmagan menejerlarga tushuntira oladiganlar."
    ],
    "whoShouldAvoid": [
      "Tez va barqaror daromadga muhtoj bo‘lganlar (junior darajasida raqobat juda kuchli).",
      "Kuniga 8-10 soat ekran qarshisida o‘tirishni yoqtirmaydiganlar.",
      "Hech qachon o‘zgarmaydigan bir xil ishlarni xohlaydiganlar.",
      "Abstrakt matematik mantiq bilan qiynaladiganlar."
    ],
    "careerPaths": {
      "employee": [
        "Dasturiy ta’minot muhandisi",
        "Ma’lumotlar muhandisi",
        "Kiberxavfsizlik mutaxassisi"
      ],
      "freelance": [
        "Veb-sayt yaratish",
        "Texnik maslahat berish"
      ],
      "business": [
        "SaaS asoschisi",
        "Texnik agentlik egasi"
      ]
    },
    "uzVsAbroad": {
      "uz": [
        "Fintex va elektron tijorat sohalarida mahalliy talab ortib bormoqda.",
        "G‘arb kompaniyalari uchun masofadan ishlash eng yaxshi yo‘l."
      ],
      "abroad": [
        "Talab yuqori, lekin junior darajasida raqobat shafqatsiz.",
        "Viza homiyligi (H1B/EU Blue Card) asosiy maqsad hisoblanadi."
      ]
    },
    "realityCheck": [
      {
        "factor": "Qiyinchilik",
        "rating": "YUQORI",
        "notes": "Murakkab nazariya va charchatadigan xatolarni qidirish jarayonlari."
      },
      {
        "factor": "Raqobat",
        "rating": "JUDA YUQORI",
        "notes": "Hozir hamma IT sohasiga kirishni xohlamoqda."
      },
      {
        "factor": "Daromad salohiyati",
        "rating": "YUQORI",
        "notes": "Xodimlar uchun eng yuqori maoshlar."
      },
      {
        "factor": "AI xavfi",
        "rating": "O‘RTA-YUQORI",
        "notes": "Junior vazifalari avtomatlashtirilmoqda; mutaxassislar xavfsizroq."
      }
    ],
    "freeResources": [
      {
        "name": "Harvard CS50x",
        "url": "https://pll.harvard.edu/course/cs50-introduction-computer-science",
        "why": "Oltin standart. Faqat sintaksis emas, balki fikrlashni o‘rgatadi.",
        "whenToStop": "5-haftadan keyin mantiq takroriy tuyulsa.",
        "notFor": "Faqat sertifikat qidirayotganlar."
      },
      {
        "name": "Roadmap.sh",
        "url": "https://roadmap.sh",
        "why": "Har bir yo‘nalish uchun vizual qo‘llanmalar.",
        "whenToStop": "Aniq yo‘nalish tanlangandan keyin.",
        "notFor": "Uzun ro‘yxatlardan tez charchaydiganlar."
      }
    ]
  },
  {
    "id": "business-management",
    "title": "Biznes / Boshqaruv",
    "description": "Tashkiliy tizimlar va jamoani birlashtirish san’ati.",
    "actuallyIs": "Siz tashkilotlar qanday ishlashini o‘rganasiz: buxgalteriya, moliya, marketing, operatsiyalar va HR. Siz turli bo‘limlar orasidagi \"bog‘lovchi bo‘g‘in\" bo‘lasiz, biznes foyda ko‘rishi va tartibli bo‘lishini ta’minlaysiz.",
    "dailyWork": [
      "Excel dasturida samaradorlik ko‘rsatkichlarini tahlil qilish.",
      "Texnik va savdo guruhlari o‘rtasidagi ishlarni muvofqlashtirish.",
      "Loyiha byudjeti va muddatlarini boshqarish.",
      "Tezkor muammolarni (ta’minot zanjiri, kadrlar masalalari) hal qilish.",
      "Yuqori rahbariyatga hisobot berish."
    ],
    "whoItFits": [
      "Jamoani boshqara oladigan kuchli muloqot egalari.",
      "Ma’lumotlar ichidan qonuniyatlarni topishni yoqtiradiganlar.",
      "Bitta tor sohada qolib ketishni xohlamaydigan universal mutaxassislar.",
      "Oson munosabat o‘rnata oladigan tarmoq ustalari (networkers)."
    ],
    "whoShouldAvoid": [
      "Doimiy uchrashuvlar va muzokaralardan charchaydigan introvertlar.",
      "Elektron jadvallar (Excel) va shartnomalarni yoqtirmaydiganlar.",
      "Xavfsizlik uchun faqat aniq bir texnik ko‘nikmaga tayanmoqchi bo‘lganlar.",
      "To‘liq yolg‘iz ishlashni afzal ko‘radigan shaxslar."
    ],
    "careerPaths": {
      "employee": [
        "Boshqaruv maslahatchisi",
        "Marketing menejeri",
        "Operatsion rahbar"
      ],
      "freelance": [
        "Loyiha boshqaruvi",
        "Biznes maslahatchisi"
      ],
      "business": [
        "Tadbirkorlik",
        "Chakana savdo yoki xizmat ko‘rsatish egasi"
      ]
    },
    "uzVsAbroad": {
      "uz": [
        "Toshkentdagi o‘sib borayotgan xususiy sektor uchun juda foyali.",
        "Hozirda natija tanish-bilishdan ko‘ra muhimroq bo‘lmoqda."
      ],
      "abroad": [
        "Top darajadagi MBA bilan juda qadrli.",
        "Junior tahlilchi lavozimlari uchun kuchli raqobat mavjud."
      ]
    },
    "realityCheck": [
      {
        "factor": "Qiyinchilik",
        "rating": "PAST-O‘RTA",
        "notes": "Tushunchalar va munosabatlarga asoslangan."
      },
      {
        "factor": "Raqobat",
        "rating": "EKSTREMAL",
        "notes": "Dunyo bo‘ylab eng ko‘p tanlanadigan yo‘nalish."
      },
      {
        "factor": "Daromad salohiyati",
        "rating": "O‘RTA-YUQORI",
        "notes": "Pastdan boshlanadi, lekin tajriba bilan tez o‘sadi."
      },
      {
        "factor": "AI xavfi",
        "rating": "O‘RTA",
        "notes": "Routine management is being automated; leadership isn't."
      }
    ],
    "freeResources": [
      {
        "name": "MIT Sloan (OCW)",
        "url": "https://ocw.mit.edu/courses/management/",
        "why": "Universitet darajasidagi jiddiy materiallar.",
        "whenToStop": "Keys (Case Study) metodologiyasini tushungandan keyin.",
        "notFor": "Yengil motivatsion kitob o‘quvchilar."
      },
      {
        "name": "CFI Buxgalteriya asoslari",
        "url": "https://corporatefinanceinstitute.com/resources/free-courses/",
        "why": "Haqiqiy ko‘nikmalar (balans hisobotlari).",
        "whenToStop": "Asoslarni tugatgandan so‘ng.",
        "notFor": "Matematikani yomon ko‘radiganlar."
      }
    ]
  },
  {
    "id": "economics",
    "title": "Iqtisodiyot",
    "description": "Resurslarni taqsimlash va rag‘batlantirish fanidir.",
    "actuallyIs": "Iqtisodiyot — jamiyat resurslarni qanday boshqarishini o‘rganishdir. Bu faqat pul haqida emas, baki inson xulq-atvori, rag‘batlar va ma’lumotlar haqidadir. Siz dunyo qanday ishlashini modellashtirishni va siyosatdagi o‘zgarishlar odamlarga qanday ta’sir qilishini bashorat qilishni o‘rganisiz.",
    "dailyWork": [
      "Bozor tendentsiyalarini statistik tahlil qilish.",
      "Siyosiy tavsiyalar yoki tadqiqot hisobotlarini yozish.",
      "Modellashtirish uchun R, Stata yoki Python kabi darslardan foydalanish.",
      "Markaziy bank va global bozor yangiliklarini kuzatish.",
      "Texnik bo‘lmagan tomonlar uchun taqdimotlar tayyorlash."
    ],
    "whoItFits": [
      "Kuchli matematik asosga ega mantiqiy fikrlovchilar.",
      "Global siyosat va kambag‘allik muammolariga qiziqqanlar.",
      "Abstrakt fikrlash va modellashtirishni yoqtiradigan talabalar.",
      "Ma’lumotlarni oddiy tushuntira oladigan kuchli yozuvchilar."
    ],
    "whoShouldAvoid": [
      "Faqat \"do‘konni qanday boshqarish\"ni o‘rganmoqchi bo‘lganlar.",
      "Murakkab statistika bilan qiynaladiganlar.",
      "Siyosiy nazariyani zerikarli deb biladiganlar.",
      "Ijodiy, jismoniy qo‘l mehnati bilan bog‘liq ish qidirayotganlar."
    ],
    "careerPaths": {
      "employee": [
        "Siyosiy tahlilchi",
        "Investitsion bankir",
        "Ma’lumotlar olimi (Data Scientist)"
      ],
      "freelance": [
        "Iqtisodiy tadqiqotlar",
        "Ma’lumotlar tahlili bo‘yicha maslahat"
      ],
      "business": [
        "Strategik konsalting",
        "Venchur kapitali"
      ]
    },
    "uzVsAbroad": {
      "uz": [
        "Toshkent bank va moliya sektorida juda qadrlanadi.",
        "Davlat islohotlari departamentlari uchun zarur mutaxassislar."
      ],
      "abroad": [
        "Global moliya va NNTlarda (NGO) raqobat juda kuchli.",
        "Yuqori darajadagi tadqiqotlar uchun magistratura yoki PhD talab qilinadi."
      ]
    },
    "realityCheck": [
      {
        "factor": "Qiyinchilik",
        "rating": "O‘RTA-YUQORI",
        "notes": "Yuqori kurslarda murakkab matematika/statistika."
      },
      {
        "factor": "Raqobat",
        "rating": "YUQORI",
        "notes": "Top moliya va konsalting lavozimlari uchun raqobatli."
      },
      {
        "factor": "Daromad salohiyati",
        "rating": "YUQORI",
        "notes": "Moliyada juda yuqori; akademiyada biroz pastroq."
      },
      {
        "factor": "AI xavfi",
        "rating": "O‘RTA",
        "notes": "Ma’lumotlarni qayta ishlash avtomatlashmoqda; sezgi (intuition) esa yo‘q."
      }
    ],
    "freeResources": [
      {
        "name": "Marginal Revolution University",
        "url": "https://mru.org/",
        "why": "Iqtisodiy tushunchalarni eng yaxshi tushuntiruvchi manba.",
        "whenToStop": "Makro/Mikro asoslarni tugatgandan keyin.",
        "notFor": "Faqat yodlashni xohlaydiganlar."
      },
      {
        "name": "Khan Academy Makroiqtisodiyot",
        "url": "https://www.khanacademy.org/economics-finance-domain/macroeconomics",
        "why": "Universitet oldidan mustahkam poydevor.",
        "whenToStop": "Asoslarni tushungandan so‘ng.",
        "notFor": "Murakkab matematik tayyorgarlik qidirayotganlar."
      }
    ]
  },
  {
    "id": "engineering",
    "title": "Muhandislik (Umumiy)",
    "description": "Matematika va fanni jismoniy voqelikka tatbiq etish.",
    "actuallyIs": "Muhandislik — ishlaydigan narsalarni loyihalash va qurishdir. U texnik muammolarni hal qilish uchun fizika va matematikadan foydalanadi, xoh u ko‘prik, protsessor yoki avtomobil dvigateli bo‘lsin. Bu qat’iy, texnik intizomdir.",
    "dailyWork": [
      "CAD (Computer-Aided Design) loyihalash.",
      "Ob’etlarni tekshirish yoki ustaxona sinovlarini o‘tkazish.",
      "Murakkab strukturaviy yoki elektr hisob-kitoblarini bajarish.",
      "Texnik xavfsizlik va muvofiqlik hujjatlarini boshqarish.",
      "Arxitektorlar va loyiha menejerlari bilan hamkorlik qilish."
    ],
    "whoItFits": [
      "Fazoviy fikrlash qobiliyatiga ega tabiiy muammo yechuvchilar.",
      "Matematika va fizikani chin dildan yoqtiradigan talabalar.",
      "Xavfsizlikka befarq bo‘lmagan, detallarga e’tiborli odamlar.",
      "O‘z ishining jismoniy natijasini ko‘rishni yoqtiradiganlar."
    ],
    "whoShouldAvoid": [
      "Texnik chizmalar va qoidalarni zerikarli deb biladiganlar.",
      "Ob’etlarda yoki laboratoriyalarda ishlashni xohlamaydiganlar.",
      "Faqat moslashuvchan va ijodiy soha qidirayotganlar.",
      "Yuqori aniqlikdagi o‘lchovlar bilan qiynaladiganlar."
    ],
    "careerPaths": {
      "employee": [
        "Fuqaro muhandisi",
        "Mexanika muhandisi",
        "Loyiha menejeri"
      ],
      "freelance": [
        "Dizayn konsaltingi",
        "Chizmachilik xizmatlari"
      ],
      "business": [
        "Qurilish firmasi",
        "Ishlab chiqarish agentligi"
      ]
    },
    "uzVsAbroad": {
      "uz": [
        "O‘zbekistondagi qurilish bumu mahalliy talab yuqori ekanligini anglatadi.",
        "Energetika sektori asosiy ish beruvchi hisoblanadi."
      ],
      "abroad": [
        "Tor ixtisoslashuv (Aerokosmik, Bio-muhandislik) talab qilinadi.",
        "Karyera o‘sishi uchun professional litsenziya (PE) zarur."
      ]
    },
    "realityCheck": [
      {
        "factor": "Qiyinchilik",
        "rating": "JUDA YUQORI",
        "notes": "Eng qiyin bakalavr yo‘nalishlaridan biri sifatida tanilgan."
      },
      {
        "factor": "Raqobat",
        "rating": "O‘RTA-YUQORI",
        "notes": "Barqaror talab, lekin kirish darajasida raqobat bor."
      },
      {
        "factor": "Daromad salohiyati",
        "rating": "YUQORI",
        "notes": "Yuqori boshlang‘ich maoshlar va barqaror o‘sish."
      },
      {
        "factor": "AI xavfi",
        "rating": "PAST-O‘RTA",
        "notes": "Jismoniy ijro va xavfsizlik mantiqini avtomatlashtirish qiyin."
      }
    ],
    "freeResources": [
      {
        "name": "MIT OpenCourseWare (Eng)",
        "url": "https://ocw.mit.edu/courses/engineering/",
        "why": "Muhandislik nazariyasi bo‘yicha dunyo standarti.",
        "whenToStop": "Statika asoslarini tushungandan keyin.",
        "notFor": "Faqat vizual o‘rganuvchilar."
      },
      {
        "name": "The Engineering Mindset (YT)",
        "url": "https://www.youtube.com/@EngineeringMindset",
        "why": "Tizimlarning ajoyib vizual tushuntirishlari.",
        "whenToStop": "Tushunchalar aniq bo‘lgandan keyin.",
        "notFor": "Murakkab hisob-kitoblar qidirayotganlar."
      }
    ]
  },
  {
    "id": "medicine",
    "title": "Tibbiyot",
    "description": "Inson hayoti bilan bog‘liq mas’uliyatli fan.",
    "actuallyIs": "Tibbiyot — kasalliklarga tashxis qo‘yish va davolash fanidir. Bu umrbod o‘rganish, yuqori stress va uzoq ish soatliga tayyor bo‘lish demakdir. Bu nafaqat odamlarga yordam berish, baki yuqori aniqlikdagi biologik xizmat ko‘rsatishdir.",
    "dailyWork": [
      "Bemorlarni qabul qilish va tekshirish.",
      "Doimiy ravishda hujjatlar bilan ishlash (vaqtning 40% qismi).",
      "Kasalxonadagi navbatchiliklar va tungi smenalar.",
      "Laboratoriya natijalari va diagnostika tasvirlarini tahlil qilish.",
      "Murakkab holatlar bo‘yicha boshqa mutaxassislar bilan maslahatlashish."
    ],
    "whoItFits": [
      "Juda tartibli va intizomli shaxslar.",
      "Hamdard, lekin hissiy jihatdan chidamli odamlar.",
      "Katta hajmdagi ma’lumotni yodlash qobiliyatiga ega talabalar.",
      "12+ soat davomida diqqatni jamlay oladiganlar."
    ],
    "whoShouldAvoid": [
      "Tez pul topishni yoki 9:00 dan 18:00 gacha ishlashni xohlaydiganlar.",
      "Qon, jarohat yoki yuqori stressga chidami bo‘lmaganlar.",
      "30 yoshgacha o‘qish g‘oyasini yoqtirmaydigan talabalar.",
      "Muloqot qilishda qiynaladigan shaxslar."
    ],
    "careerPaths": {
      "employee": [
        "Xirurg",
        "Umumiy amaliyot shifokori",
        "Tibbiy tadqiqotchi"
      ],
      "freelance": [
        "Xususiy qabul (10+ yillik tajribadan so‘ng)",
        "Tibbiy maqolalar yozish"
      ],
      "business": [
        "Xususiy klinika egasi",
        "Med-tech tadbirkori"
      ]
    },
    "uzVsAbroad": {
      "uz": [
        "Ijtimoiy maqom yuqori, lekin davlat shifoxonalarida maosh past.",
        "Xususiy sektor yaxshi moliyaviy imkoniyatlar taklif qiladi."
      ],
      "abroad": [
        "Rivojlangan davlatlarning ko‘pchiligida shifokorlar yetishmaydi.",
        "Shafqatsiz litsenziyalash imtihonlarini (USMLE/PLAB) talab qiladi."
      ]
    },
    "realityCheck": [
      {
        "factor": "Qiyinchilik",
        "rating": "EKSTREMAL",
        "notes": "Ma’lumotlar hajmi juda katta."
      },
      {
        "factor": "Raqobat",
        "rating": "EKSTREMAL",
        "notes": "Tibbiyotga kirish — eng qiyin to‘siq."
      },
      {
        "factor": "Daromad salohiyati",
        "rating": "YUQORI (UZOQ MUDDATDA)",
        "notes": "Pastdan boshlanadi, mutaxassislikdan keyin juda yuqori bo‘ladi."
      },
      {
        "factor": "AI xavfi",
        "rating": "PAST",
        "notes": "Jismoniy muolajalar va murakkab klinik xulosalar."
      }
    ],
    "freeResources": [
      {
        "name": "Osmosis (YouTube)",
        "url": "https://www.youtube.com/c/osmosis",
        "why": "Eng yaxshi vizual tibbiy ta’lim.",
        "whenToStop": "Patofiziologiya asoslarini tushungandan keyin.",
        "notFor": "Chuqur jarrohlik tayyorgarligi."
      },
      {
        "name": "Kenhub Anatomiya asoslari",
        "url": "https://www.kenhub.com/",
        "why": "Asosiy tana tuzilmalarini o‘rganish.",
        "whenToStop": "Anatomik sharhdan keyin.",
        "notFor": "Tibbiyotdan mutlaqo uzoq bo‘lganlar."
      }
    ]
  }
],
  exams: [
  {
    "id": "sat",
    "title": "SAT",
    "shortDescription": "AQShning nufuzli universitetlariga kirish va moliyaviy yordam olish uchun asosiy imtihon.",
    "whoNeeds": [
      "AQShning top universitetlariga (Ivy League, MIT va boshqalar) hujjat topshirayotganlar.",
      "Nufuzli davlat universitetlarini (Purdue, Georgia Tech) maqsad qilganlar.",
      "Merit-based (qobiliyatga asoslangan) stipendiyalarni qidirayotgan talabalar."
    ],
    "whoDoesNot": [
      "Tanlov darajasi past bo‘lgan AQSh o‘quv yurtlariga (community colleges) topshirayotganlar.",
      "Buyuk Britaniya, Kanada yoki Yevropa universitetlarini maqsad qilganlar.",
      "Faqat \"test-blind\" (test natijalarini so‘ramaydigan) maktablarga topshirayotganlar."
    ],
    "scoreRanges": [
      {
        "type": "Ivy League",
        "range": "1500–1560",
        "competitiveness": "Top 1% natija"
      },
      {
        "type": "Nufuzli (Ivy bo‘lmagan)",
        "range": "1480–1550",
        "competitiveness": "Top 1-2%"
      },
      {
        "type": "Nufuzli davlat universitetlari",
        "range": "1250–1400",
        "competitiveness": "Top 10-20%"
      }
    ],
    "commonMistakes": [
      "Vaqt bosimi ostida mashq qilmaslik.",
      "Zaif tomonlarga e’tibor bermaslik (faqat matematikaga e’tibor qaratish).",
      "Juda ko‘p materiallardan foydalanish; bitta yaxshi manba yetarli.",
      "Tushunchalarni emas, javoblarni yodlash.",
      "Faol yechmasdan faqat videolarni tomosha qilish.",
      "Xatolarni chuqur tahlil qilmaslik."
    ],
    "resources": [
      {
        "name": "Khan Academy SAT Prep",
        "url": "https://www.khanacademy.org/sat",
        "why": "College Board rasmiy hamkori. Eng yaxshi bepul variant.",
        "whenToStop": "Amaliyotda maqsadli balingizga barqaror erishganingizda.",
        "notFor": "Jonli dars motivatsiyasiga muhtoj bo‘lganlar."
      }
    ],
    "whenToStop": [
      "3+ amaliy testlarda maqsadli balingizga erishganingizda.",
      "\"Kamayuvchi daromad\" bosqichiga yetganingizda (80 soatlik o‘qishdan keyin).",
      "Hujjat topshirish muddatidan 2 oy oldin."
    ],
    "officialMaterials": [
      {
        "name": "Bluebook App",
        "url": "https://bluebook.collegeboard.org/",
        "why": "Rasmiy raqamli test muhiti. Eng aniq amaliy testlar.",
        "whenToStop": "Faqat to‘liq diagnostika uchun foydalaning.",
        "notFor": "Tezkor mashqlar uchun."
      },
      {
        "name": "CB Practice PDFs",
        "url": "https://satsuite.collegeboard.org/sat/practice-preparation/practice-tests",
        "why": "Ko‘rib chiqish uchun rasmiy savollar.",
        "whenToStop": "Barcha rasmiy testlarni ko‘rib chiqqandan keyin.",
        "notFor": "Yangi tushunchalarni o‘rganish uchun."
      }
    ],
    "commonlyUsedBooks": [
      "Erica Meltzer (DSAT Reading/Writing)",
      "College Panda (DSAT Math)",
      "The Official SAT Study Guide"
    ],
    "additionalPlatforms": [
      {
        "name": "1600.io",
        "url": "https://1600.io/",
        "why": "Rasmiy testlarning batafsil video tushuntirishlari.",
        "whenToStop": "Mantiqni o‘zingiz tushuntira olganingizda.",
        "notFor": "Mutlaqo yangi boshlovchilar."
      },
      {
        "name": "UWorld",
        "url": "https://www.uworld.com/collegeprep/sat/sat.aspx",
        "why": "Rasmiy manbalardan tashqari eng yaxshi amaliy savollar bazasi.",
        "whenToStop": "Yangi savollar tugaganda.",
        "notFor": "Kam byudjetli tayyorgarlik (Pullik)."
      }
    ],
    "scoreMapping": [
      {
        "range": "1550+",
        "focus": "AQShning top 10 universitetlari (Harvard, MIT)."
      },
      {
        "range": "1450-1530",
        "focus": "Top 50 AQSh maktablari uchun raqobatbardosh."
      },
      {
        "range": "1350-1440",
        "focus": "Nufuzli davlat universitetlari uchun yaxshi natija."
      }
    ],
    "desmosGuidance": {
      "title": "Desmos Strategiyasi",
      "description": "O‘rnatilgan grafik kalkulyatorni o‘zlashtirish Matematika moduli uchun juda muhim. U savollarning taxminan 30 foizini qo‘lda hisoblashdan ko‘ra tezroq hal qila oladi.",
      "link": "https://www.youtube.com/results?search_query=sat+desmos+tricks"
    },
    "youtubeChannels": [
      {
        "name": "Scalar Learning",
        "description": "Vaqt bosimi ostida real vaqtda matematika yechish uchun eng yaxshi."
      },
      {
        "name": "Strategic Test Prep",
        "description": "Raqamli SAT strategiyalari va vaqtni boshqarishga qaratilgan."
      }
    ]
  },
  {
    "id": "ielts",
    "title": "IELTS (Academic)",
    "shortDescription": "Ingliz tilini bilish darajasini belgilovchi global standart.",
    "whoNeeds": [
      "Buyuk Britaniya, Avstraliya yoki Kanada universitetlariga hujjat topshirayotganlar.",
      "O‘zbekistondagi xalqaro filiallar (WIUT, Turin va boshqalar) ga kirishni maqsad qilganlar.",
      "Ingliz tilida o‘qitiladigan Yevropa darajalarini maqsad qilgan talabalar."
    ],
    "whoDoesNot": [
      "Mahalliy davlat universitetlariga topshirayotganlar (agar maxsus yo‘nalish talab qilmasa).",
      "DET/Duolingo qabul qiladigan AQSh maktablarini maqsad qilganlar (chunki u arzonroq).",
      "4+ yillik ingliz tilidagi ta’limni tasdiqlovchi hujjatga ega talabalar."
    ],
    "scoreRanges": [
      {
        "type": "Elita/Global Top 50",
        "range": "7.5 – 8.5",
        "competitiveness": "Juda yuqori (C1/C2 daraja)"
      },
      {
        "type": "Standart Xalqaro",
        "range": "6.5 – 7.0",
        "competitiveness": "Yuqori (B2/C1 daraja)"
      },
      {
        "type": "Foundation/Mahalliy",
        "range": "5.5 – 6.0",
        "competitiveness": "O‘rtacha (B2 daraja)"
      }
    ],
    "commonMistakes": [
      "Writing Task 2 uchun \"shablonlarni\" yodlash.",
      "Speaking uchun maxsus mezonlarni e’tiborsiz qoldirish (Ravonlik > Aniqlik).",
      "Tushunarli bo‘lish o‘rniga \"murakkab\" so‘zlarni noto‘g‘ri ishlatish.",
      "Reading uchun real vaqt cheklovlari ostida mashq qilmaslik.",
      "Talaffuz o‘rniga aksentga e’tibor qaratish."
    ],
    "resources": [
      {
        "name": "IELTS Liz",
        "url": "https://ieltsliz.com/",
        "why": "Vazifaga yo‘naltirilgan strategiyalar uchun eng yaxshi tuzilgan qo‘llanma.",
        "whenToStop": "Baholash mezonlarini to‘liq tushunganingizda.",
        "notFor": "Interaktiv fikr-mulohazaga muhtoj talabalar."
      },
      {
        "name": "Road to IELTS (Bepul versiya)",
        "url": "https://www.ielts.org/en-us/about-the-test/sample-test-questions",
        "why": "Yaratuvchilardan rasmiy namunaviy savollar.",
        "whenToStop": "Barcha rasmiy namunaviy modullarni tugatgandan so‘ng.",
        "notFor": "Mutlaqo yangi boshlovchilar."
      }
    ],
    "whenToStop": [
      "Mock test natijalaringiz doimiy ravishda maqsadli balingizga teng yoki undan yuqori bo‘lganda.",
      "3 oylik intensiv o‘qishdan so‘ng (bundan keyin o‘sish to‘xtashi odatiy hol).",
      "Oddiy savollarni haddan tashqari ko‘p o‘ylashni boshlaganingizda."
    ]
  },
  {
    "id": "det",
    "title": "Duolingo English Test (DET)",
    "shortDescription": "AQShga kirish uchun tezkor va tejamkor muqobil.",
    "whoNeeds": [
      "Cheklangan byudjet bilan AQSh universitetlariga topshirayotganlar ($59 vs $200+).",
      "Natijalar 48 soat ichida kerak bo‘lgan talabalar.",
      "Moslashuvchan, kompyuterga asoslangan test uslubini afzal ko‘radiganlar."
    ],
    "whoDoesNot": [
      "Aksariyat Buyuk Britaniya yoki Avstraliya universitetlariga topshirayotganlar (qabul qilish darajasi past).",
      "Tezkor, moslashuvchan savollarda qiynaladigan talabalar.",
      "Maxsus \"faqat IELTS\" stipendiya dasturlariga topshirayotganlar."
    ],
    "scoreRanges": [
      {
        "type": "Elita AQSh qabuli",
        "range": "135 – 150",
        "competitiveness": "Yuqori daraja"
      },
      {
        "type": "Nufuzli AQSh maktablari",
        "range": "120 – 130",
        "competitiveness": "Raqobatbardosh"
      },
      {
        "type": "Standart kirish",
        "range": "105 – 115",
        "competitiveness": "O‘rtacha"
      }
    ],
    "commonMistakes": [
      "Ekrandan boshqa joyga qarash (test darhol bekor qilinadi).",
      "Oldindan mikrofon/internet sifatini tekshirmaslik.",
      "Yozib olish bo‘limlarida juda sekin gapirish.",
      "\"Rasm haqida yozish\" uchun kerak bo‘lgan tezlikni yetarli baholamaslik."
    ],
    "resources": [
      {
        "name": "DET Rasmiy Qo‘llanma",
        "url": "https://englishtest.duolingo.com/readiness",
        "why": "Haqiqiy amaliy savollar uchun yagona manba.",
        "whenToStop": "Amaliy testda maqsadli diapazonga ikki marta erishganingizda.",
        "notFor": "\"Xakerlik\" yo‘llarini qidirayotganlar."
      }
    ],
    "whenToStop": [
      "Bepul amaliy testda maqsadingizdan 10 ball yuqori to‘plaganingizda.",
      "\"Production\" (Ishlab chiqarish) balli kichik bo‘limini o‘zlashtirganingizda.",
      "Haqiqiy test sanasidan 3 kun oldin (bu yerda tiqishtirib o‘qishdan ko‘ra dam olish yaxshiroq)."
    ]
  }
],
  scholarships: [
  {
    "id": "el-yurt-umidi",
    "title": "El-Yurt Umidi Jamg‘armasi",
    "origin": "UZBEKISTAN",
    "description": "Xalqaro ta’lim uchun asosiy davlat granti.",
    "whatItIs": "Dunyoning eng kuchli 300 ta universitetida bakalavr va magistratura bosqichida o‘qishni to‘liq moliyalashtiruvchi davlat tashabbusi.",
    "whoItsFor": [
      "25 yoshgacha bo‘lgan O‘zbekiston fuqarolari (Bakalavr) yoki kattalar (Magistr/PhD).",
      "Top-300 dunyo universitetidan qabul xati (offer) olgan shaxslar.",
      "Davlat sektorida yetakchilik qilishni maqsad qilganlar."
    ],
    "coverage": "O‘qish puli (kontrakt), aviachiptalar, viza xarajatlari, sug‘urta va oylik stipendiya.",
    "competitiveness": "EKSTREMAL YUQORI",
    "obligations": [
      "O‘qishni tugatgandan so‘ng darhol O‘zbekistonga qaytish.",
      "Davlat tashkilotlarida 3-5 yil davomida majburiy mehnat qilish.",
      "O‘qish davrida xorijga chiqish pasportini jamg‘armaga topshirish (ko‘pincha talab qilinadi)."
    ],
    "whoShouldNotApply": [
      "Xorijda doimiy qolishni (PR) xohlaydigan talabalar.",
      "Karyerasining boshidayoq xususiy sektorda ishlashni afzal ko‘radiganlar.",
      "Nufuzli universitetdan shartsiz (unconditional) offerga ega bo‘lmaganlar."
    ],
    "realityCheck": "Eng saxiy grant, lekin bu aslida yillar davomida davlat xizmati bilan qaytariladigan \"iste’dodlar krediti\"dir.",
    "url": "https://eyuf.uz/"
  },
  {
    "id": "turkiye-burslari",
    "title": "Turkiye Burslari (Davlat granti)",
    "origin": "INTERNATIONAL",
    "description": "Turkiya universitetlari uchun keng qamrovli davlat granti.",
    "whatItIs": "Turkiyaning nufuzli universitetlarida bakalavr, magistratura va PhD bosqichlari uchun to‘liq moliyaviy yordam.",
    "whoItsFor": [
      "Yuqori GPA ko‘rsatkichiga ega talabalar (odatda 70%+).",
      "Til to‘sig‘ini tezda yenga oladigan o‘zbek zabon yoshlar (o‘xshashlik juda yuqori).",
      "Ijtimoiy fanlar, muhandislik yoki tibbiyot yo‘nalishini tanlaganlar."
    ],
    "coverage": "O‘qish puli, oylik stipendiya, aviachiptalar, sug‘urta va 1 yillik nemis tili kursi.",
    "competitiveness": "YUQORI",
    "obligations": [
      "1 yillik majburiy turk tili kursini yakunlash.",
      "O‘qish davomida akademik standartlarni saqlab qolish."
    ],
    "whoShouldNotApply": [
      "Mintaqaviy madaniy moslashuvsiz faqat ingliz tilida o‘qishni xohlovchilar.",
      "Qat’iy yosh talablariga javob bermaydigan nomzodlar (bakalavr uchun 21, magistr uchun 30)."
    ],
    "realityCheck": "Strategik universal yo‘l. O‘zbek talabalari uchun turk tili va o‘zbek tili o‘rtasidagi 80% o‘xshashlik tufayli til to‘sig‘i muammo bo‘lmaydi.",
    "url": "https://www.turkiyeburslari.gov.tr/"
  },
  {
    "id": "daad",
    "title": "DAAD Scholarship (Germaniya)",
    "origin": "INTERNATIONAL",
    "description": "Germaniyada o‘qish uchun asosiy moliyalashtirish yo‘li.",
    "whatItIs": "Xalqaro talabalar va tadqiqotchilar uchun Germaniya davlat universitetlarida o‘qishni qo‘llab-quvvatlash.",
    "whoItsFor": [
      "Magistratura yoki PhD darajasini maqsad qilgan yuqori malakali talabalar.",
      "Tadqiqot yoki rivojlanish sohalariga e’tibor qaratgan shaxslar.",
      "Ma’lum bir kasbiy tajribaga ega bo‘lgan nomzodlar (dasturga qarab)."
    ],
    "coverage": "Oylik stipendiya (€934 magistrlar, €1200 PhD uchun), yo‘l xarajatlari, sug‘urta va ba’zan til kursi subsidiyalari.",
    "competitiveness": "JUDA YUQORI",
    "obligations": [
      "Akademik natijalar va erishilgan yutuqlar bo‘yicha hisobot berish.",
      "Ayrim dasturlar o‘qishdan so‘ng vataniga qaytishni talab qiladi."
    ],
    "whoShouldNotApply": [
      "Bakalavr talabalari (ko‘pchilik DAAD grantlari magistratura uchun).",
      "Xususiy universitetlarda o‘qishni xohlovchilar (odatda qoplanmaydi).",
      "Kuchli akademik profili bo‘lmagan nomzodlar."
    ],
    "realityCheck": "Germaniya davlat universitetlari bepul; DAAD — bu yashash xarajatlarini qoplashning eng nufuzli usuli.",
    "url": "https://www.daad.uz/"
  },
  {
    "id": "chevening",
    "title": "Chevening Scholarship (Buyuk Britaniya)",
    "origin": "INTERNATIONAL",
    "description": "Britaniya hukumati tomonidan moliyalashtiriladigan global yetakchilik dasturi.",
    "whatItIs": "Yetakchilik salohiyatiga ega shaxslar uchun Britaniyada 1 yillik magistraturada to‘liq bepul o‘qish.",
    "whoItsFor": [
      "Kamida 2 yillik ish tajribasiga ega O‘zbekiston fuqarolari.",
      "Kuchli akademik poydevorga ega shaxslar.",
      "Siyosat yoki sanoatga ta’sir ko‘rsatishni xohlovchi bo‘lajak yetakchilar."
    ],
    "coverage": "O‘qish puli, oylik stipendiya, iqtisod-klass aviachiptalar va qo‘shimcha grantlar.",
    "competitiveness": "EKSTREMAL YUQORI",
    "obligations": [
      "O‘qishdan keyin kamida 2 yil O‘zbekistonda yashash va ishlash.",
      "Global Chevening bitiruvchilari tarmog‘i bilan aloqada bo‘lish."
    ],
    "whoShouldNotApply": [
      "Kamida 2800 soatlik ish tajribasiga ega bo‘lmaganlar.",
      "Bakalavr yoki PhD darajasini qidirayotganlar.",
      "O‘zbekistonga qaytish niyati bo‘lmagan shaxslar."
    ],
    "realityCheck": "Nufuzli aloqalar o‘rnatish imkoniyati, lekin qat’iy karyera maqsadlarini talab qiladi.",
    "url": "https://www.chevening.org/scholarship/uzbekistan/"
  }
],
  paths: [AUSBILDUNG_PATH_UZ]
};

export const CONTENT: Record<Locale, SiteContent> = {
  en: UZ_CONTENT,
  uz: UZ_CONTENT
};

export const MAJORS = UZ_CONTENT.majors;
export const EXAMS = UZ_CONTENT.exams;
export const SCHOLARSHIPS = UZ_CONTENT.scholarships;
export const PRACTICAL_PATHS = UZ_CONTENT.paths;
