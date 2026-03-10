import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Result = {
  profile?: string;
  tag?: string;
  countryId?: string;
  primary: {
    name: string;
    university: string;
    chance: string;
    deadline: string;
    stipend: string;
    englishReq?: string;
    benefits: string[];
  };
  backup: {
    name: string;
    university?: string;
    chance: string;
  };
  plan: string[];
  mistake: string;
  resources: { name: string; url: string }[];
};

type Answers = {
  situation: string;
  interest: string;
  income: string;
  english: string;
  country: string;
};

function getDefaultResult(): Result {
  return {
    countryId: 'europe',
    primary: {
      name: 'Stipendium Hungaricum (eng real Evropa varianti)',
      university: 'Corvinus University, Vengriya 🇭🇺',
      chance: '25%',
      deadline: 'Yanvar',
      stipend: '$120/oy + to\'liq ta\'lim',
      benefits: ['O\'zbeklar uchun 170 ta kafolatlangan kvota', 'IELTS 5.5 — erishish mumkin', 'Schengen']
    },
    backup: { name: 'Rossiya Hukumati Kvotasi', chance: '40%' },
    plan: ['Hafta 1: O\'z profilingizni aniqroq biling — bu saytda explore qiling', 'Hafta 2: IELTS darajangizni aniqlang', 'Hafta 3: stipendiumhungaricum.hu ko\'ring', 'Hafta 4: russia.study ham ko\'ring — parallel'],
    mistake: 'Faqat bitta mamlakatga ariza berish — har doim zaxira kerak',
    resources: [{ name: 'Stipendium Hungaricum', url: 'https://stipendiumhungaricum.hu' }, { name: 'russia.study', url: 'https://russia.study' }, { name: 'EducationUSA Toshkent', url: 'https://educationusa.state.gov/centers/tashkent' }]
  }
}

function getResult(answersRaw: string[]): Result | Result[] {
  const [situation, interest, income, english, countryRaw] = answersRaw;
  let country = countryRaw.toLowerCase();
  if (country === 'korea/japan') country = 'asia';

  const a: Answers = { situation, interest, income, english, country };

  if (a.country === 'russia') {
    if (a.interest === 'Medicine') {
      return {
        countryId: 'russia',
        primary: {
          name: 'Rossiya Hukumati Kvotasi — Tibbiyot',
          university: 'Kazan Davlat Tibbiyot Universiteti 🇷🇺',
          chance: '40%',
          deadline: 'Dekabr',
          stipend: 'Bepul ta\'lim',
          englishReq: 'Shart emas',
          benefits: ['800 ta kvota — eng ko\'p', 'Ingliz tili shart emas', 'Rus tibbiyot diplomi xalqaro tan olinadi']
        },
        backup: { name: 'Belarus Tibbiyot Universiteti', chance: '35%' },
        plan: ['Hafta 1: russia.study — ro\'yxatdan o\'ting', 'Hafta 2: Rus tili A1 — YouTube "Russian with Max"', 'Hafta 3: DTM bio+kimyo 3x mock (uzbmb.uz)', 'Hafta 4: Kazan, Novosibirsk, Yekaterinburg — Moskva EMAS'],
        mistake: 'Faqat Moskva universitetlarini tanlash — raqobat eng yuqori, ko\'pchilik rad etiladi',
        resources: [{ name: 'russia.study', url: 'https://russia.study' }, { name: 'DTM testlar', url: 'https://uzbmb.uz' }, { name: 'Russian with Max', url: 'https://youtube.com/@RussianWithMax' }]
      }
    }
    if (a.interest === 'IT') {
      return {
        countryId: 'russia',
        primary: {
          name: 'Rossiya Hukumati Kvotasi — IT',
          university: 'ITMO University yoki Innopolis, Rossiya 🇷🇺',
          chance: '40%',
          deadline: 'Dekabr',
          stipend: 'Bepul ta\'lim',
          englishReq: 'Shart emas',
          benefits: ['IT sohasida kuchli universitetlar', 'Ingliz tili shart emas', 'Stipend past lekin ta\'lim bepul']
        },
        backup: { name: 'Xitoy CSC → BUPT', chance: '15%' },
        plan: ['Hafta 1: russia.study ro\'yxat', 'Hafta 2: Rus tili boshlang — YouTube', 'Hafta 3: GitHub 3 ta loyiha', 'Hafta 4: ITMO, Innopolis, Kazan Federal prioritet qiling'],
        mistake: 'Faqat MGU tanlash — raqobat juda yuqori, mintaqaviy universitetlar ham kuchli',
        resources: [{ name: 'russia.study', url: 'https://russia.study' }, { name: 'CS50', url: 'https://cs50.harvard.edu' }, { name: 'GitHub', url: 'https://github.com' }]
      }
    }
    return {
      countryId: 'russia',
      primary: {
        name: 'Rossiya Hukumati Kvotasi',
        university: 'Siz tanlagan yo\'nalish bo\'yicha Rossiya universiteti 🇷🇺',
        chance: '40%',
        deadline: 'Dekabr',
        stipend: 'Bepul ta\'lim',
        englishReq: 'Shart emas',
        benefits: ['800 ta kvota — barcha yo\'nalishlar', 'Ingliz tili shart emas', 'Yashash xarajatlari past']
      },
      backup: { name: 'Xitoy Hukumati CSC', chance: '15%' },
      plan: ['Hafta 1: russia.study — Rossotrudnichestvo ro\'yxat', 'Hafta 2: Rus tili boshlang', 'Hafta 3: 5 ta universitet tanlang (Moskva EMAS — mintaqaviy)', 'Hafta 4: Hujjatlarni tayyorlang — diplom tarjimasi, sertifikatlar'],
      mistake: 'Faqat Moskva universitetlarini tanlash',
      resources: [{ name: 'russia.study', url: 'https://russia.study' }, { name: 'Khan Academy', url: 'https://khanacademy.org' }, { name: 'British Council', url: 'https://britishcouncil.uz' }]
    }
  }

  if (a.country === 'china') {
    if (a.interest === 'Medicine') {
      return {
        countryId: 'china',
        primary: {
          name: 'Xitoy Hukumati Stipendiyasi (CSC) — Tibbiyot',
          university: 'Jilin University Medical School 🇨🇳',
          chance: '15%',
          deadline: 'Fevral–Mart',
          stipend: '$400/oy',
          englishReq: 'IELTS: 5.5 yoki HSK 3',
          benefits: ['50–100 ta kvota o\'zbeklar uchun', 'Xalqaro tan olingan tibbiyot diplomi', 'Yashash arzon']
        },
        backup: { name: 'Rossiya Tibbiyot Kvotasi → Kazan', chance: '40%' },
        plan: ['Hafta 1: csc.edu.cn da ro\'yxatdan o\'ting', 'Hafta 2: Jilin University tibbiyot professori bilan email aloqa', 'Hafta 3: HSK 3 tayyorgarlik boshlang', 'Hafta 4: IELTS 6.0 mock test'],
        mistake: 'Professor bilan oldindan aloqa qilmaslik — bu Xitoyda majburiy qadam',
        resources: [{ name: 'CSC Scholarship', url: 'https://csc.edu.cn' }, { name: 'HSK tayyorgarlik', url: 'https://chinesetest.cn' }, { name: 'Jilin University', url: 'https://jlu.edu.cn/en' }]
      }
    }
    if (a.interest === 'IT') {
      return {
        countryId: 'china',
        primary: {
          name: 'Xitoy Hukumati Stipendiyasi (CSC) — IT',
          university: 'BUPT yoki Zhejiang University 🇨🇳',
          chance: '15%',
          deadline: 'Fevral–Mart',
          stipend: '$400/oy',
          englishReq: 'IELTS: 6.0 yoki HSK 4',
          benefits: ['Dunyoning eng yirik IT bozori', 'Huawei, Alibaba, Tencent internship imkoniyatlari', 'Stipendiya + yotoqxona']
        },
        backup: { name: 'Rossiya Kvotasi → ITMO', chance: '40%' },
        plan: ['Hafta 1: csc.edu.cn ro\'yxat', 'Hafta 2: BUPT professori bilan email yozing', 'Hafta 3: GitHub — 3 loyiha', 'Hafta 4: HSK 3 + IELTS 6.0 rejalashtirish'],
        mistake: 'Professor bilan oldindan shartnoma qilmaslik — magistr/PhD uchun qat\'iy shart',
        resources: [{ name: 'CSC Scholarship', url: 'https://csc.edu.cn' }, { name: 'CS50', url: 'https://cs50.harvard.edu' }, { name: 'BUPT', url: 'https://bupt.edu.cn/en' }]
      }
    }
    return {
      countryId: 'china',
      primary: {
        name: 'Xitoy Hukumati Stipendiyasi (CSC)',
        university: 'Siz tanlagan yo\'nalish bo\'yicha Xitoy universiteti 🇨🇳',
        chance: '15%',
        deadline: 'Fevral–Mart',
        stipend: '$400/oy',
        englishReq: 'IELTS: 5.5 yoki HSK 3',
        benefits: ['50–100 ta o\'zbek kvotasi', 'Stipendiya + yotoqxona + sug\'urta', 'Xitoy iqtisodiyotiga kirish imkoni']
      },
      backup: { name: 'Rossiya Hukumati Kvotasi', chance: '40%' },
      plan: ['Hafta 1: csc.edu.cn ro\'yxat', 'Hafta 2: Maqsadli professor bilan email aloqa', 'Hafta 3: HSK 3 tayyorgarlik', 'Hafta 4: IELTS 6.0 mock test'],
      mistake: 'Professor bilan oldindan aloqa qilmaslik',
      resources: [{ name: 'CSC Scholarship', url: 'https://csc.edu.cn' }, { name: 'HSK test', url: 'https://chinesetest.cn' }, { name: 'Khan Academy', url: 'https://khanacademy.org' }]
    }
  }

  if (a.country === 'turkey') {
    return {
      countryId: 'turkey',
      primary: {
        name: 'Turkiye Burslari',
        university: 'Ankara yoki Istanbul universiteti 🇹🇷',
        chance: a.interest === 'Medicine' ? '2.4% (GPA 90% shart!)' : '2.4%',
        deadline: 'Yanvar–Fevral',
        stipend: '$120/oy + 1 yillik til kursi',
        englishReq: 'Shart emas (Turk tili)',
        benefits: ['O\'zbek tiliga yaqin — til oson o\'rganiladi', '1 yil turk tili kursi kiritilgan', 'Toshkentdan yaqin — oila bilan aloqa oson']
      },
      backup: { name: 'Stipendium Hungaricum → Evropa', chance: '25%' },
      plan: ['Hafta 1: turkiyeburslari.gov.tr ro\'yxat (Yanvar oxirigacha)', 'Hafta 2: TR-YOS yoki SAT tayyorgarlik', 'Hafta 3: Mahalla/maktab rahbarligi hujjatlarini to\'plang', 'Hafta 4: Motivatsiya xati — "Turkiyada o\'qib, O\'zbekistonga qaytaman"'],
      mistake: a.interest === 'Medicine' ? 'DIQQAT: Tibbiyot uchun GPA 90% shart — 85% bilan ariza AVTOMATIK RAD etiladi' : 'Generic motivatsiya xati — aniq maqsad va qaytish rejasi yozing',
      resources: [{ name: 'Turkiye Burslari', url: 'https://turkiyeburslari.gov.tr' }, { name: 'TR-YOS tayyorgarlik', url: 'https://youtube.com' }, { name: 'British Council', url: 'https://britishcouncil.uz' }]
    }
  }

  if (a.country === 'asia') {
    if (a.english === 'C1C2' || a.english === 'B1B2') {
      return {
        countryId: 'korea/japan',
        primary: {
          name: 'GKS Koreya (Global Korea Scholarship)',
          university: 'KAIST yoki Yonsei University 🇰🇷',
          chance: '2–3%',
          deadline: 'Fevral',
          stipend: '$750/oy',
          englishReq: 'IELTS: 6.5+',
          benefits: ['Samsung, LG, Hyundai internship imkoniyatlari', 'IT va muhandislikda dunyo darajasi', 'Koreya — tez rivojlanayotgan texnologiya markazi']
        },
        backup: { name: 'Xitoy CSC → BUPT', chance: '15%' },
        plan: ['Hafta 1: TOPIK 3 tayyorgarlik boshlang (2 yillik jarayon)', 'Hafta 2: Korean Embassy bilan bog\'laning — embassy track', 'Hafta 3: Ilmiy tadqiqot taklifi yozing (K-pop emas!)', 'Hafta 4: GPA va IELTS hujjatlarini tayyorlang'],
        mistake: '"K-pop va koreys madaniyatini yaxshi ko\'raman" deb yozish — ilmiy tadqiqot taklifi kerak',
        resources: [{ name: 'GKS Scholarship', url: 'https://gksscholarship.com' }, { name: 'TOPIK Guide', url: 'https://topikguide.com' }, { name: 'Korean Education Center', url: 'https://uzbekistan.mofa.go.kr' }]
      }
    }
    return {
      countryId: 'china',
      primary: {
        name: 'Xitoy CSC (Osiyo — eng real variant)',
        university: 'Zhejiang University yoki BUPT 🇨🇳',
        chance: '15%',
        deadline: 'Fevral–Mart',
        stipend: '$400/oy',
        englishReq: 'IELTS: 5.5 yoki HSK 3',
        benefits: ['Osiyo — lekin ingliz tili kam talab qilinadi', 'GKS Koreya dan ancha real (15% vs 2%)', 'Katta Osiyo iqtisodiyotiga kirish']
      },
      backup: { name: 'GKS Koreya (ingliz C1 ga yetgach)', chance: '2–3%' },
      plan: ['Hafta 1: csc.edu.cn ro\'yxat', 'Hafta 2: Ingliz tilini B2 ga yetkazish rejasi tuzing', 'Hafta 3: HSK 3 boshlang', 'Hafta 4: Professor bilan aloqa qiling'],
      mistake: 'A2 ingliz bilan GKS Koreya ga ariza berish — IELTS 6.0 minimal shart',
      resources: [{ name: 'CSC Scholarship', url: 'https://csc.edu.cn' }, { name: 'British Council', url: 'https://britishcouncil.uz' }, { name: 'HSK test', url: 'https://chinesetest.cn' }]
    }
  }

  if (a.country === 'uzbekistan') {
    if (a.english === 'C1C2' && a.income === 'over1000') {
      return {
        countryId: 'uzbekistan',
        primary: {
          name: 'WIUT — Westminster International University',
          university: 'Westminster International University Tashkent 🇺🇿',
          chance: '90%',
          deadline: 'Doimiy qabul',
          stipend: '~36 mln UZS/yil (o\'z mablag\')',
          englishReq: 'IELTS: 5.5+ / Math',
          benefits: ['Britaniya diplomi — Toshkentda', 'Ingliz tilida to\'liq ta\'lim', 'Korporativ karyera uchun eng kuchli lokal variant']
        },
        backup: { name: 'NUUz yoki TSUE — davlat granti uchun', chance: '60%' },
        plan: ['Hafta 1: WIUT kirish imtihoniga ro\'yxat', 'Hafta 2: Math imtihon tayyorgarlik — Khan Academy', 'Hafta 3: IELTS 7.0 mock test', 'Hafta 4: Toshkent MUN yoki WIUT Debate Society'],
        mistake: 'Kirish imtihoniga tayyorgarliksiz borish — WIUT math imtihoni qiyin',
        resources: [{ name: 'WIUT rasmiy', url: 'https://wiut.uz' }, { name: 'Khan Academy', url: 'https://khanacademy.org' }, { name: 'Toshkent MUN', url: 'https://tashkentmun.org' }]
      }
    }
    return {
      countryId: 'uzbekistan',
      primary: {
        name: 'DTM — Davlat granti yoki kontrakt',
        university: 'NUUz, TUIT, TSUE yoki TSUL 🇺🇿',
        chance: '70%',
        deadline: 'Iyun–Avgust (DTM)',
        stipend: 'Bepul (grant) yoki 10–20 mln UZS/yil',
        englishReq: 'Shart emas',
        benefits: ['Toshkentda qolish — xarajat past', 'Oila bilan yaqin', 'DTM natijasi asosida grant imkoni']
      },
      backup: { name: 'WIUT yoki Inha University — ingliz tilida', chance: '60%' },
      plan: ['Hafta 1: DTM ixtisoslashgan fanlarni aniqlang', 'Hafta 2: uzbmb.uz — mock test boshlang', 'Hafta 3: Zaif fanlarni aniqlab, repetitor toping', 'Hafta 4: 150+ ball strategiyasi tuzing'],
      mistake: 'DTM ni kech tayyorlashni boshlash — top universitetlar uchun 150+ ball kerak',
      resources: [{ name: 'DTM rasmiy testlar', url: 'https://uzbmb.uz' }, { name: 'test.uz', url: 'https://test.uz' }, { name: 'Khan Academy O\'zbek', url: 'https://uz.khanacademy.org' }]
    }
  }

  if (a.country === 'europe') {
    if (a.english === 'A1A2') {
      return {
        countryId: 'europe',
        primary: {
          name: 'Stipendium Hungaricum (18 oy tayyorgarlik)',
          university: 'Corvinus University, Vengriya 🇭🇺',
          chance: '25% (IELTS 5.5 ga yetgach)',
          deadline: 'Yanvar (keyingi tsikl)',
          stipend: '$120/oy + to\'liq ta\'lim',
          englishReq: 'IELTS: 5.5+',
          benefits: ['Schengen — 26 mamlakat', 'O\'zbekistonliklar uchun 170 ta kafolatlangan kvota', 'IELTS 5.5 — erishish mumkin']
        },
        backup: { name: 'Rossiya Hukumati Kvotasi (hoziroq boshlash mumkin)', chance: '40%' },
        plan: ['Hafta 1: IELTS A2 → B1 rejasi — 12 oy', 'Hafta 2: British Council bepul materiallar boshlang', 'Hafta 3: Stipendium Hungaricum talablarini o\'rganing', 'Hafta 4: Paralel — russia.study ham ko\'ring (zaxira sifatida)'],
        mistake: 'Ingliz tili tayyorlanmay Evropa arizasi berish — IELTS 5.5 minimal, 6.0 kuchli',
        resources: [{ name: 'British Council', url: 'https://britishcouncil.uz' }, { name: 'Stipendium Hungaricum', url: 'https://stipendiumhungaricum.hu' }, { name: 'russia.study (zaxira)', url: 'https://russia.study' }]
      }
    }
    if (a.interest === 'Medicine') {
      return {
        countryId: 'europe',
        primary: {
          name: 'Stipendium Hungaricum — Tibbiyot',
          university: 'University of Pécs yoki Semmelweis University, Vengriya 🇭🇺',
          chance: '20%',
          deadline: 'Yanvar',
          stipend: '$120/oy + to\'liq ta\'lim',
          englishReq: 'IELTS: 5.5+',
          benefits: ['Yevropa tibbiyot diplomi — xalqaro tan olinadi', 'Ingliz tilida o\'qitish', 'Kafolatlangan kvota']
        },
        backup: { name: 'DAAD Germaniya (magistr uchun, 2 yil ish keyin)', chance: '10%' },
        plan: ['Hafta 1: stipendiumhungaricum.hu — Pécs va Semmelweis ko\'ring', 'Hafta 2: IELTS 6.0 tayyorgarlik', 'Hafta 3: Motivatsiya xati — tibbiyot tajribasini yozing', 'Hafta 4: Tibbiy ko\'rik hujjatlarini oldindan tayyorlang'],
        mistake: 'Tibbiy ko\'rikdan o\'tmaslik yoki portal deadlinini o\'tkazish',
        resources: [{ name: 'Stipendium Hungaricum', url: 'https://stipendiumhungaricum.hu' }, { name: 'University of Pécs', url: 'https://pte.hu/en' }, { name: 'British Council', url: 'https://britishcouncil.uz' }]
      }
    }
    return {
      countryId: 'europe',
      primary: {
        name: 'Stipendium Hungaricum',
        university: 'Corvinus University of Budapest, Vengriya 🇭🇺',
        chance: '25%',
        deadline: 'Yanvar',
        stipend: '$120/oy + to\'liq ta\'lim',
        englishReq: 'IELTS: 5.5+',
        benefits: ['Schengen zonasi — 26 mamlakat erkin', 'Yevropa diplomi — global tan olinadi', '170 ta kafolatlangan kvota']
      },
      backup: { name: 'Chexiya Hukumati → $600/oy', chance: '10%' },
      plan: ['Hafta 1: stipendiumhungaricum.hu ro\'yxat', 'Hafta 2: IELTS 5.5–6.0 tayyorgarlik', 'Hafta 3: Motivatsiya xati — aniq maqsad yozing', 'Hafta 4: 3 ta Vengriya universiteti tanlang'],
      mistake: 'Tibbiy ko\'rik yoki Tempus portal deadline o\'tkazish',
      resources: [{ name: 'Stipendium Hungaricum', url: 'https://stipendiumhungaricum.hu' }, { name: 'British Council', url: 'https://britishcouncil.uz' }, { name: 'Chexiya stipendiya', url: 'https://dzs.cz' }]
    }
  }

  if (a.country === 'dontknow') {
    let options: Result[] = [];

    if (a.interest === 'Medicine') {
      options = [
        {
          tag: '🇷🇺 ENG OSON',
          countryId: 'russia',
          primary: {
            name: 'Rossiya Kvotasi — Tibbiyot',
            university: 'Kazan Davlat Tibbiyot Universiteti 🇷🇺',
            chance: '40%',
            deadline: 'Dekabr',
            stipend: 'Bepul ta\'lim',
            englishReq: 'Shart emas',
            benefits: ['Eng oson kirish', 'Ingliz tili shart emas', '800 ta kvota']
          },
          backup: { name: 'Belarus Tibbiyot Universiteti', chance: '35%' },
          plan: ['Hafta 1: russia.study ro\'yxat', 'Hafta 2: Rus tili boshlang', 'Hafta 3: DTM mock testlar', 'Hafta 4: 3 ta mintaqaviy universitet tanlang'],
          mistake: 'Faqat Moskva tanlash',
          resources: [{ name: 'russia.study', url: 'https://russia.study' }]
        },
        {
          tag: '🇨🇳 ALTERNATIV',
          countryId: 'china',
          primary: {
            name: 'Xitoy CSC — Tibbiyot',
            university: 'Jilin University 🇨🇳',
            chance: '15%',
            deadline: 'Fevral',
            stipend: '$400/oy',
            englishReq: 'IELTS: 5.5 yoki HSK 3',
            benefits: ['Stipendiya + yotoqxona', 'Xalqaro diplom', 'Yashash arzon']
          },
          backup: { name: 'Rossiya Kvotasi', chance: '40%' },
          plan: ['Hafta 1: csc.edu.cn ro\'yxat', 'Hafta 2: Professor bilan aloqa', 'Hafta 3: HSK 3 tayyorgarlik', 'Hafta 4: IELTS 5.5 mock test'],
          mistake: 'Professor bilan oldindan aloqa qilmaslik',
          resources: [{ name: 'CSC Scholarship', url: 'https://csc.edu.cn' }]
        },
        {
          tag: '🇭🇺 YEVROPA',
          countryId: 'europe',
          primary: {
            name: 'Stipendium Hungaricum',
            university: 'University of Pécs 🇭🇺',
            chance: '20%',
            deadline: 'Yanvar',
            stipend: '$120/oy + ta\'lim',
            englishReq: 'IELTS: 5.5+',
            benefits: ['Schengen zonasi', 'Yevropa diplomi', 'Kafolatlangan kvota']
          },
          backup: { name: 'Rossiya Kvotasi', chance: '40%' },
          plan: ['Hafta 1: stipendiumhungaricum.hu ro\'yxat', 'Hafta 2: IELTS 5.5 tayyorgarlik', 'Hafta 3: Motivatsiya xati', 'Hafta 4: Tibbiy ko\'rik hujjatlari'],
          mistake: 'Tibbiy ko\'rikdan o\'tmaslik',
          resources: [{ name: 'Stipendium Hungaricum', url: 'https://stipendiumhungaricum.hu' }]
        }
      ];
    } else if (a.interest === 'IT') {
      options = [
        {
          tag: '🇭🇺 OPTIMAL',
          countryId: 'europe',
          primary: {
            name: 'Stipendium Hungaricum — IT',
            university: 'ELTE yoki BME 🇭🇺',
            chance: '25%',
            deadline: 'Yanvar',
            stipend: '$120/oy + ta\'lim',
            englishReq: 'IELTS: 5.5+',
            benefits: ['Schengen zonasi', 'Kuchli IT ta\'lim', '170 ta kvota']
          },
          backup: { name: 'Rossiya Kvotasi', chance: '40%' },
          plan: ['Hafta 1: stipendiumhungaricum.hu ro\'yxat', 'Hafta 2: IELTS 5.5 tayyorgarlik', 'Hafta 3: GitHub loyiha', 'Hafta 4: Motivatsiya xati'],
          mistake: 'Intervyuga tayyorgarliksiz borish',
          resources: [{ name: 'Stipendium Hungaricum', url: 'https://stipendiumhungaricum.hu' }]
        },
        {
          tag: '🇨🇳 KATTA BOZOR',
          countryId: 'china',
          primary: {
            name: 'Xitoy CSC — IT',
            university: 'BUPT 🇨🇳',
            chance: '15%',
            deadline: 'Fevral',
            stipend: '$400/oy',
            englishReq: 'IELTS: 6.0 yoki HSK 4',
            benefits: ['Alibaba/Tencent internship', 'Katta IT bozor', 'Stipendiya + yotoqxona']
          },
          backup: { name: 'Rossiya Kvotasi', chance: '40%' },
          plan: ['Hafta 1: csc.edu.cn ro\'yxat', 'Hafta 2: BUPT professori bilan aloqa', 'Hafta 3: GitHub loyiha', 'Hafta 4: HSK/IELTS tayyorgarlik'],
          mistake: 'Professor bilan aloqa qilmaslik',
          resources: [{ name: 'CSC Scholarship', url: 'https://csc.edu.cn' }]
        },
        {
          tag: '🇷🇺 ENG OSON',
          countryId: 'russia',
          primary: {
            name: 'Rossiya Kvotasi — IT',
            university: 'ITMO yoki Innopolis 🇷🇺',
            chance: '40%',
            deadline: 'Dekabr',
            stipend: 'Bepul ta\'lim',
            englishReq: 'Shart emas',
            benefits: ['Kuchli IT maktab', 'Ingliz tili shart emas', 'Oson kirish']
          },
          backup: { name: 'Xitoy CSC', chance: '15%' },
          plan: ['Hafta 1: russia.study ro\'yxat', 'Hafta 2: Rus tili boshlang', 'Hafta 3: GitHub loyiha', 'Hafta 4: ITMO/Innopolis tanlash'],
          mistake: 'Faqat Moskva tanlash',
          resources: [{ name: 'russia.study', url: 'https://russia.study' }]
        }
      ];
    } else if (a.interest === 'Business') {
      options = [
        {
          tag: '🇭🇺 YEVROPA',
          countryId: 'europe',
          primary: {
            name: 'Stipendium Hungaricum',
            university: 'Corvinus University 🇭🇺',
            chance: '25%',
            deadline: 'Yanvar',
            stipend: '$120/oy + ta\'lim',
            englishReq: 'IELTS: 5.5+',
            benefits: ['Schengen zonasi', 'Kuchli biznes maktab', '170 ta kvota']
          },
          backup: { name: 'Turkiye Burslari', chance: '10%' },
          plan: ['Hafta 1: stipendiumhungaricum.hu ro\'yxat', 'Hafta 2: IELTS 5.5 tayyorgarlik', 'Hafta 3: Motivatsiya xati', 'Hafta 4: Intervyu tayyorgarlik'],
          mistake: 'Intervyuga tayyorgarliksiz borish',
          resources: [{ name: 'Stipendium Hungaricum', url: 'https://stipendiumhungaricum.hu' }]
        },
        {
          tag: '🇹🇷 QARINDOSH',
          countryId: 'turkey',
          primary: {
            name: 'Turkiye Burslari',
            university: 'Istanbul University 🇹🇷',
            chance: '5%',
            deadline: 'Yanvar',
            stipend: '$120/oy + ta\'lim',
            englishReq: 'Shart emas (Turk tili)',
            benefits: ['O\'zbek tiliga yaqin', '1 yil til kursi', 'Yashash arzon']
          },
          backup: { name: 'Rossiya Kvotasi', chance: '40%' },
          plan: ['Hafta 1: turkiyeburslari.gov.tr ro\'yxat', 'Hafta 2: TR-YOS tayyorgarlik', 'Hafta 3: Motivatsiya xati', 'Hafta 4: Hujjatlarni to\'plash'],
          mistake: 'Generic motivatsiya xati',
          resources: [{ name: 'Turkiye Burslari', url: 'https://turkiyeburslari.gov.tr' }]
        },
        {
          tag: '🇨🇿 ALTERNATIV',
          countryId: 'europe',
          primary: {
            name: 'Chexiya Hukumati',
            university: 'Prague University of Economics 🇨🇿',
            chance: '10%',
            deadline: 'Sentyabr',
            stipend: '$600/oy',
            englishReq: 'IELTS: 6.0+',
            benefits: ['Yevropa markazi', 'Yuqori stipendiya', 'Ingliz tilida ta\'lim']
          },
          backup: { name: 'Stipendium Hungaricum', chance: '25%' },
          plan: ['Hafta 1: dzs.cz ro\'yxat', 'Hafta 2: IELTS 6.0 tayyorgarlik', 'Hafta 3: Motivatsiya xati', 'Hafta 4: Universitet tanlash'],
          mistake: 'Deadline ni o\'tkazib yuborish',
          resources: [{ name: 'Chexiya stipendiya', url: 'https://dzs.cz' }]
        }
      ];
    } else if (a.interest === 'Law') {
      options = [
        {
          tag: '🇺🇿 LOKAL PRESTIJ',
          countryId: 'uzbekistan',
          primary: {
            name: 'WIUT — Westminster',
            university: 'Westminster International University Tashkent 🇺🇿',
            chance: '90%',
            deadline: 'Doimiy',
            stipend: 'O\'z mablag\'',
            englishReq: 'IELTS: 5.5+ / Math',
            benefits: ['Britaniya diplomi', 'Toshkentda qolish', 'Kuchli korporativ tarmoq']
          },
          backup: { name: 'TSUL', chance: '80%' },
          plan: ['Hafta 1: WIUT ro\'yxat', 'Hafta 2: Math imtihon tayyorgarlik', 'Hafta 3: IELTS tayyorgarlik', 'Hafta 4: Debate Society'],
          mistake: 'Math imtihoniga tayyorlanmaslik',
          resources: [{ name: 'WIUT', url: 'https://wiut.uz' }]
        },
        {
          tag: '🇭🇺 YEVROPA',
          countryId: 'europe',
          primary: {
            name: 'Stipendium Hungaricum',
            university: 'ELTE 🇭🇺',
            chance: '20%',
            deadline: 'Yanvar',
            stipend: '$120/oy + ta\'lim',
            englishReq: 'IELTS: 6.0+',
            benefits: ['Schengen zonasi', 'Xalqaro huquq', '170 ta kvota']
          },
          backup: { name: 'Rossiya Kvotasi', chance: '40%' },
          plan: ['Hafta 1: stipendiumhungaricum.hu ro\'yxat', 'Hafta 2: IELTS 6.0 tayyorgarlik', 'Hafta 3: Motivatsiya xati', 'Hafta 4: Intervyu tayyorgarlik'],
          mistake: 'Intervyuga tayyorgarliksiz borish',
          resources: [{ name: 'Stipendium Hungaricum', url: 'https://stipendiumhungaricum.hu' }]
        },
        {
          tag: '🇷🇺 ENG OSON',
          countryId: 'russia',
          primary: {
            name: 'Rossiya Kvotasi — Huquq',
            university: 'Kazan Federal University 🇷🇺',
            chance: '40%',
            deadline: 'Dekabr',
            stipend: 'Bepul ta\'lim',
            englishReq: 'Shart emas',
            benefits: ['Oson kirish', 'Ingliz tili shart emas', 'Rus huquq tizimi']
          },
          backup: { name: 'TSUL', chance: '80%' },
          plan: ['Hafta 1: russia.study ro\'yxat', 'Hafta 2: Rus tili boshlang', 'Hafta 3: DTM mock testlar', 'Hafta 4: Universitet tanlash'],
          mistake: 'Faqat Moskva tanlash',
          resources: [{ name: 'russia.study', url: 'https://russia.study' }]
        }
      ];
    } else {
      options = [
        {
          tag: '🇷🇺 ENG OSON',
          countryId: 'russia',
          primary: {
            name: 'Rossiya Kvotasi',
            university: 'Rossiya universitetlari 🇷🇺',
            chance: '40%',
            deadline: 'Dekabr',
            stipend: 'Bepul ta\'lim',
            englishReq: 'Shart emas',
            benefits: ['Eng oson kirish', 'Ingliz tili shart emas', '800 ta kvota']
          },
          backup: { name: 'Xitoy CSC', chance: '15%' },
          plan: ['Hafta 1: russia.study ro\'yxat', 'Hafta 2: Rus tili boshlang', 'Hafta 3: DTM mock testlar', 'Hafta 4: 3 ta mintaqaviy universitet tanlang'],
          mistake: 'Faqat Moskva tanlash',
          resources: [{ name: 'russia.study', url: 'https://russia.study' }]
        },
        {
          tag: '🇭🇺 OPTIMAL',
          countryId: 'europe',
          primary: {
            name: 'Stipendium Hungaricum',
            university: 'Vengriya universitetlari 🇭🇺',
            chance: '25%',
            deadline: 'Yanvar',
            stipend: '$120/oy + ta\'lim',
            englishReq: 'IELTS: 5.5+',
            benefits: ['Schengen zonasi', 'Yevropa diplomi', '170 ta kvota']
          },
          backup: { name: 'Rossiya Kvotasi', chance: '40%' },
          plan: ['Hafta 1: stipendiumhungaricum.hu ro\'yxat', 'Hafta 2: IELTS 5.5 tayyorgarlik', 'Hafta 3: Motivatsiya xati', 'Hafta 4: 3 universitet tanlang'],
          mistake: 'Intervyuga tayyorgarliksiz borish',
          resources: [{ name: 'Stipendium Hungaricum', url: 'https://stipendiumhungaricum.hu' }]
        },
        {
          tag: '🇩🇪 ENG PRESTIJLI',
          countryId: 'europe',
          primary: {
            name: 'DAAD Germaniya',
            university: 'Germaniya universitetlari 🇩🇪',
            chance: '10%',
            deadline: 'Noyabr',
            stipend: '$1,000/oy',
            englishReq: 'IELTS: 6.5 + 2 yil ish',
            benefits: ['To\'liq moliyalashtirish', 'Kuchli iqtisodiyot', 'Ishlash imkoniyati']
          },
          backup: { name: 'El-Yurt Umidi', chance: '5-10%' },
          plan: ['Hafta 1: IELTS 6.5 tayyorgarlik', 'Hafta 2: DAAD portalida dasturlar', 'Hafta 3: 2 yillik ish tajribasi hujjatlari', 'Hafta 4: Motivatsiya xati va CV'],
          mistake: 'Ish tajribasisiz ariza berish',
          resources: [{ name: 'DAAD', url: 'https://daad.de' }]
        }
      ];
    }

    if (a.income === 'under200' && a.english === 'A1A2') {
      const hasRussia = options.some(o => o.countryId === 'russia');
      if (!hasRussia) {
        options[0] = {
          tag: '🇷🇺 ENG OSON',
          countryId: 'russia',
          primary: {
            name: 'Rossiya Kvotasi',
            university: 'Rossiya universitetlari 🇷🇺',
            chance: '40%',
            deadline: 'Dekabr',
            stipend: 'Bepul ta\'lim',
            englishReq: 'Shart emas',
            benefits: ['Eng oson kirish', 'Ingliz tili shart emas', '800 ta kvota']
          },
          backup: { name: 'Xitoy CSC', chance: '15%' },
          plan: ['Hafta 1: russia.study ro\'yxat', 'Hafta 2: Rus tili boshlang', 'Hafta 3: DTM mock testlar', 'Hafta 4: 3 ta mintaqaviy universitet tanlang'],
          mistake: 'Faqat Moskva tanlash',
          resources: [{ name: 'russia.study', url: 'https://russia.study' }]
        };
      }
    }

    if (a.income === 'over1000' || a.situation === 'working') {
      const hasUzbekistan = options.some(o => o.countryId === 'uzbekistan');
      if (!hasUzbekistan) {
        options[2] = {
          tag: '🇺🇿 LOKAL PRESTIJ',
          countryId: 'uzbekistan',
          primary: {
            name: 'WIUT yoki Inha',
            university: 'Toshkentdagi xalqaro universitetlar 🇺🇿',
            chance: '90%',
            deadline: 'Doimiy',
            stipend: 'O\'z mablag\'',
            englishReq: 'IELTS: 5.5+',
            benefits: ['Oila bilan qolish', 'Xalqaro diplom', 'Ishlash imkoniyati']
          },
          backup: { name: 'DTM Davlat granti', chance: '70%' },
          plan: ['Hafta 1: Universitet tanlash', 'Hafta 2: IELTS tayyorgarlik', 'Hafta 3: Kirish imtihonlari', 'Hafta 4: Hujjat topshirish'],
          mistake: 'Kirish imtihoniga tayyorlanmaslik',
          resources: [{ name: 'WIUT', url: 'https://wiut.uz' }, { name: 'Inha', url: 'https://inha.uz' }]
        };
      }
    }

    return options;
  }

  return getDefaultResult();
}

function ResultView({ result, onBack, answers }: { result: Result, onBack?: () => void, answers: string[] }) {
  const englishAnswer = answers[3];
  const requiresIelts = result.primary.englishReq && result.primary.englishReq.includes('IELTS');
  const showEnglishWarning = englishAnswer === 'A1A2' && requiresIelts;
  const countryId = result.countryId || 'europe';

  return (
    <div className="space-y-10">
      {onBack && (
        <button onClick={onBack} className="text-sm text-stone-500 hover:text-stone-900 font-medium mb-4 flex items-center gap-1">
          ← Variantlarga qaytish
        </button>
      )}

      {/* English Warning */}
      {showEnglishWarning && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h3 className="text-xs font-bold text-yellow-800 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="text-lg">⚠️</span> Ingliz tili talabi
          </h3>
          <p className="text-sm text-yellow-900 font-medium mb-2">
            Bu stipendiya {result.primary.englishReq} talab qiladi. Sizning hozirgi darajangiz: A1/A2.
          </p>
          <p className="text-sm text-yellow-800">
            Tavsiya: 12 oy davomida <a href="https://britishcouncil.uz" target="_blank" rel="noopener noreferrer" className="underline font-bold">britishcouncil.uz</a> bepul materiallar bilan tayyorlaning.<br/>
            Yoki hoziroq boshlash uchun: Rossiya Hukumati Kvotasi (ingliz tili shart emas).
          </p>
        </div>
      )}

      {/* Primary Path */}
      <div>
        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="text-lg">🎯</span> Asosiy Yo'l
        </h3>
        <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-stone-500 mb-1">Stipendiya</p>
              <p className="font-bold text-stone-900">{result.primary.name}</p>
            </div>
            <div>
              <p className="text-sm text-stone-500 mb-1">Universitet</p>
              <p className="font-bold text-stone-900">{result.primary.university}</p>
            </div>
            <div>
              <p className="text-sm text-stone-500 mb-1">Muvaffaqiyat ehtimoli</p>
              <p className="font-bold text-emerald-600">{result.primary.chance}</p>
            </div>
            <div>
              <p className="text-sm text-stone-500 mb-1">Deadline</p>
              <p className="font-bold text-stone-900">{result.primary.deadline}</p>
            </div>
            {result.primary.englishReq && (
              <div>
                <p className="text-sm text-stone-500 mb-1">Ingliz tili talabi</p>
                <p className="font-bold text-stone-900">{result.primary.englishReq}</p>
              </div>
            )}
            <div className={result.primary.englishReq ? "" : "md:col-span-2"}>
              <p className="text-sm text-stone-500 mb-1">Stipend</p>
              <p className="font-bold text-stone-900">{result.primary.stipend}</p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-stone-200">
            <p className="text-sm font-bold text-stone-900 mb-2">Mamlakat afzalliklari:</p>
            <ul className="space-y-1">
              {result.primary.benefits.map((b, i) => (
                <li key={i} className="text-sm text-stone-600 flex items-start gap-2">
                  <span className="text-stone-400 mt-0.5">→</span> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Backup Path */}
      <div>
        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="text-lg">🔄</span> Zaxira Yo'l
        </h3>
        <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100">
          <p className="font-bold text-stone-900">{result.backup.name}</p>
          <p className="text-sm text-stone-600">{result.backup.university ? `${result.backup.university} — ` : ''}{result.backup.chance} ehtimol</p>
        </div>
      </div>

      {/* 30 Day Plan */}
      <div>
        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="text-lg">📅</span> 30 Kunlik Harakat Rejasi
        </h3>
        <div className="space-y-3">
          {result.plan.map((p, i) => {
            const [week, ...desc] = p.split(': ');
            return (
              <div key={i} className="flex gap-4 items-start">
                <span className="px-2 py-1 bg-stone-900 text-white text-xs font-bold rounded shrink-0">{week}</span>
                <p className="text-sm text-stone-700 font-medium pt-0.5">{desc.join(': ')}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mistake */}
      <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
        <h3 className="text-xs font-bold text-red-800 uppercase tracking-widest mb-2 flex items-center gap-2">
          <span className="text-lg">⚠️</span> Eng ko'p qilingan xato
        </h3>
        <p className="text-sm text-red-900 font-medium">{result.mistake}</p>
      </div>

      {/* Qo'shimcha tayyorgarlik */}
      <div>
        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="text-lg">🚀</span> Qo'shimcha tayyorgarlik
        </h3>
        <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 space-y-4">
          <ul className="space-y-3">
            {(countryId === 'russia' || result.backup.name.includes('Rossiya')) && (
              <>
                <li className="text-sm text-stone-700 flex items-start gap-2">
                  <span className="text-stone-400 mt-0.5">→</span> 🇷🇺 Rus tili: A1 dan boshlang — YouTube 'Russian with Max' (bepul)
                </li>
                <li className="text-sm text-stone-700 flex items-start gap-2">
                  <span className="text-stone-400 mt-0.5">→</span> ТРКИ sertifikat olsangiz — ariza kuchliroq bo'ladi
                </li>
              </>
            )}
            {countryId === 'china' && (
              <>
                <li className="text-sm text-stone-700 flex items-start gap-2">
                  <span className="text-stone-400 mt-0.5">→</span> 🇨🇳 Xitoy tili: HSK 3 → HSK 4 (stipendiya uchun minimal)
                </li>
                <li className="text-sm text-stone-700 flex items-start gap-2">
                  <span className="text-stone-400 mt-0.5">→</span> csc.edu.cn — rasmiy bepul materiallar
                </li>
              </>
            )}
            {countryId === 'korea/japan' && (
              <>
                <li className="text-sm text-stone-700 flex items-start gap-2">
                  <span className="text-stone-400 mt-0.5">→</span> 🇰🇷 TOPIK 3+ — GKS uchun kuchli foyda (topikguide.com)
                </li>
                <li className="text-sm text-stone-700 flex items-start gap-2">
                  <span className="text-stone-400 mt-0.5">→</span> 🇯🇵 JLPT N3 — MEXT uchun tavsiya etiladi
                </li>
              </>
            )}
            {countryId === 'turkey' && (
              <>
                <li className="text-sm text-stone-700 flex items-start gap-2">
                  <span className="text-stone-400 mt-0.5">→</span> 🇹🇷 Turk tili: 1 yillik kurs kiritilgan — lekin oldindan bilsang afzal
                </li>
                <li className="text-sm text-stone-700 flex items-start gap-2">
                  <span className="text-stone-400 mt-0.5">→</span> TR-YOS imtihoni — SAT o'rniga (Toshkentda topshirish mumkin)
                </li>
              </>
            )}
            {(countryId === 'europe' || countryId === 'uzbekistan' || countryId === 'global') && (
              <>
                <li className="text-sm text-stone-700 flex items-start gap-2">
                  <span className="text-stone-400 mt-0.5">→</span> 📝 IELTS: britishcouncil.uz — bepul materiallar
                </li>
                <li className="text-sm text-stone-700 flex items-start gap-2">
                  <span className="text-stone-400 mt-0.5">→</span> 📝 SAT: khanacademy.org/sat — bepul, rasmiy College Board bilan
                </li>
                <li className="text-sm text-stone-700 flex items-start gap-2">
                  <span className="text-stone-400 mt-0.5">→</span> 📝 Duolingo English Test: $59 — tezroq va arzonroq IELTS alternativasi
                </li>
              </>
            )}
            
            <li className="text-sm text-stone-700 flex items-start gap-2 mt-4 pt-4 border-t border-stone-200">
              <span className="text-stone-400 mt-0.5">→</span> 💼 Portfolio: GitHub (IT), Behance (Dizayn), Uzum Market (Biznes)
            </li>
            <li className="text-sm text-stone-700 flex items-start gap-2">
              <span className="text-stone-400 mt-0.5">→</span> 🏆 Musobaqalar: xalqaro olimpiadalar — stipendiya arizasini kuchaytiradi
            </li>
            <li className="text-sm text-stone-700 flex items-start gap-2">
              <span className="text-stone-400 mt-0.5">→</span> 📄 Sertifikatlar: Google, Coursera, edX — bepul, tan olinadi
            </li>
          </ul>
        </div>
      </div>

      {/* Resources */}
      <div>
        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="text-lg">📚</span> Bepul Resurslar
        </h3>
        <ul className="space-y-2">
          {result.resources.map((r, i) => (
            <li key={i} className="text-sm">
              <span className="text-stone-400 mr-2">→</span>
              <span className="font-bold text-stone-900 mr-2">{r.name}</span>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                {r.url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const QUESTIONS = [
  {
    title: "Hozir qaysi vaziyatdasiz?",
    options: [
      { label: "🎓 Maktabda o'qiyman (9–11 sinf)", value: "School" },
      { label: "📋 DTM topshirdim yoki topshirmoqchiman", value: "DTM" },
      { label: "✈️ Chet elga chiqishni rejalashtirmoqchiman", value: "Abroad" },
      { label: "💼 Ishlayman, o'qishni xohlayman", value: "Working" },
      { label: "😕 Umuman bilmayman — yo'naltirib yuboring", value: "DontKnow" }
    ]
  },
  {
    title: "Qiziqishingiz nima?",
    options: [
      { label: "💻 IT / Dasturlash / Sun'iy intellekt", value: "IT" },
      { label: "💼 Biznes / Marketing / Tadbirkorlik", value: "Business" },
      { label: "🏥 Tibbiyot / Farmatsevtika", value: "Medicine" },
      { label: "⚖️ Huquq / Xalqaro munosabatlar", value: "Law" },
      { label: "🎨 Dizayn / Arxitektura / Ijod", value: "Design" },
      { label: "📊 Iqtisodiyot / Moliya / Tahlil", value: "Economics" }
    ]
  },
  {
    title: "Oilaviy oylik daromad (taxminan)?",
    options: [
      { label: "💸 $200 dan kam", value: "under200" },
      { label: "💰 $200–$500", value: "200to500" },
      { label: "💵 $500–$1,000", value: "500to1000" },
      { label: "🏦 $1,000 dan ortiq", value: "over1000" }
    ]
  },
  {
    title: "Ingliz tili darajangiz?",
    options: [
      { label: "🔴 A1–A2 — Deyarli bilmayman", value: "A1A2" },
      { label: "🟡 B1–B2 — Oddiy suhbat qila olaman", value: "B1B2" },
      { label: "🟢 C1–C2 — Erkin gaplashaman", value: "C1C2" }
    ]
  },
  {
    title: "Qayerda o'qishni xohlaysiz?",
    options: [
      { label: "🇷🇺 Rossiya", value: "Russia" },
      { label: "🇨🇳 Xitoy", value: "China" },
      { label: "🇪🇺 Evropa (Vengriya, Germaniya, Chexiya...)", value: "Europe" },
      { label: "🇹🇷 Turkiya", value: "Turkey" },
      { label: "🇰🇷🇯🇵 Osiyo (Koreya, Yaponiya)", value: "Korea/Japan" },
      { label: "🇺🇿 O'zbekistonda qolaman", value: "Uzbekistan" },
      { label: "🌍 Bilmayman — eng yaxshisini o'zingiz tanlang", value: "DontKnow" }
    ]
  }
];

const Home: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQ, setCurrentQ] = useState<number>(0);
  const [result, setResult] = useState<Result | Result[] | null>(null);
  const [selectedResult, setSelectedResult] = useState<Result | null>(null);
  const [showQuiz, setShowQuiz] = useState<boolean>(false);

  const handleAnswer = (val: string) => {
    const newAnswers = [...answers, val];
    setAnswers(newAnswers);
    
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const res = getResult(newAnswers);
      setResult(res);
      if (!Array.isArray(res)) {
        setSelectedResult(res);
      } else {
        setSelectedResult(null);
      }
    }
  };

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentQ(0);
    setResult(null);
    setSelectedResult(null);
    setShowQuiz(false);
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="px-6 pt-20 pb-16 md:pt-32 md:pb-24 max-w-4xl mx-auto text-center space-y-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1] animate-[fadeInUp_0.6s_ease-out]">
          "Qaror qabul qilishda odamlar dars qilmaganidan emas, noto'g'ri ma'lumotga tayanganidan yutqazadi."
        </h1>
        <p className="text-lg md:text-xl text-stone-500 font-medium max-w-2xl mx-auto leading-relaxed">
          O'zbekistonlik talabalar uchun ochiq ma'lumotlar indeksi. Universitet yo'nalishlari, xalqaro imtihonlar va muassasa talablari bo'yicha hujjatlashtirilgan tahlillar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button 
            onClick={() => {
              setShowQuiz(true);
              setTimeout(() => {
                document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-stone-800 transition-colors shadow-lg"
          >
            🎯 Yo'limni topish →
          </button>
          <Link 
            to="/explore"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-stone-900 text-stone-900 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-stone-50 transition-colors"
          >
            🔍 O'zim ko'rib chiqaman
          </Link>
        </div>
        
        <p className="text-sm font-medium text-stone-400">
          Agar hozir bir qarorga kelishga tayyor bo'lmasangiz — bu ham normal holat.
        </p>
      </section>

      {/* QUIZ SECTION */}
      {showQuiz && (
        <section id="quiz-section" className="px-6 py-16 bg-stone-100/50 border-y border-stone-200 min-h-[60vh] flex items-center">
          <div className="max-w-2xl mx-auto w-full">
            {!result ? (
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200 animate-[fadeInUp_0.3s_ease-out]">
                <div className="mb-8">
                  <div className="flex justify-between text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">
                    <span>Savol {currentQ + 1} / {QUESTIONS.length}</span>
                    <span>{Math.round(((currentQ) / QUESTIONS.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-stone-900 h-full transition-all duration-500 ease-out"
                      style={{ width: `${((currentQ) / QUESTIONS.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-8">
                  {QUESTIONS[currentQ].title}
                </h2>

                <div className="space-y-3">
                  {QUESTIONS[currentQ].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.value)}
                      className="w-full text-left px-6 py-4 rounded-xl border-2 border-stone-100 hover:border-stone-900 hover:bg-stone-50 transition-all font-medium text-stone-700 text-lg"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-200 animate-[fadeInUp_0.5s_ease-out]">
                {Array.isArray(result) && !selectedResult ? (
                  <div>
                    <div className="text-center mb-10 pb-8 border-b border-stone-100">
                      <h2 className="text-3xl font-bold text-stone-900 mb-4">Sizning profilingiz uchun 3 ta variant:</h2>
                      <p className="text-stone-500">O'zingizga eng ma'qulini tanlang va harakat rejasini ko'ring.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {result.map((res, i) => (
                        <div key={i} className="bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col h-full hover:border-stone-400 transition-colors">
                          <div className="text-xs font-bold text-stone-500 mb-4 uppercase tracking-widest">{res.tag}</div>
                          <h3 className="text-xl font-bold text-stone-900 mb-1">{res.primary.name}</h3>
                          <p className="text-sm text-stone-500 mb-6">{res.primary.university}</p>
                          
                          <div className="space-y-3 mb-8 flex-grow">
                            <div className="flex justify-between text-sm">
                              <span className="text-stone-500">Ehtimol:</span>
                              <span className="font-bold text-emerald-600">{res.primary.chance}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-stone-500">Ingliz:</span>
                              <span className="font-bold text-stone-900">{res.primary.englishReq}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-stone-500">Stipend:</span>
                              <span className="font-bold text-stone-900">{res.primary.stipend}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-stone-500">Deadline:</span>
                              <span className="font-bold text-rose-600">{res.primary.deadline}</span>
                            </div>
                          </div>
                          
                          <button 
                            onClick={() => setSelectedResult(res)}
                            className="w-full py-3 bg-stone-900 text-white rounded-xl text-sm font-bold hover:bg-stone-800 transition-colors"
                          >
                            Shu yo'lni tanlayman →
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-stone-100 flex justify-center">
                      <button 
                        onClick={resetQuiz}
                        className="px-6 py-3 bg-stone-100 text-stone-600 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-stone-200 transition-colors"
                      >
                        Qaytadan boshlash
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-8 pb-8 border-b border-stone-100">
                      {selectedResult?.profile && (
                        <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                          ✅ Sizning profilingiz: {selectedResult.profile}
                        </span>
                      )}
                      <h2 className="text-3xl font-bold text-stone-900">Natija tayyor</h2>
                    </div>

                    <ResultView 
                      result={selectedResult!} 
                      answers={answers}
                      onBack={Array.isArray(result) ? () => setSelectedResult(null) : undefined} 
                    />

                    <div className="mt-12 pt-8 border-t border-stone-100 flex flex-col sm:flex-row gap-4 justify-center">
                      <button 
                        onClick={resetQuiz}
                        className="px-6 py-3 bg-stone-100 text-stone-600 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-stone-200 transition-colors"
                      >
                        Qaytadan boshlash
                      </button>
                      <Link 
                        to="/explore"
                        className="px-6 py-3 bg-stone-900 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-stone-800 transition-colors text-center"
                      >
                        Batafsil ma'lumot uchun → Ko'proq o'rganish
                      </Link>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* MINIMAL SECTIONS */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-24">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-stone-900 mb-2">12 ta</div>
            <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">Stipendiya</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-stone-900 mb-2">5</div>
            <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">Talaba profili</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-stone-900 mb-2">0 so'm</div>
            <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">Xarajat</div>
          </div>
        </div>

        {/* Methodology */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
            <div className="text-stone-300 font-mono font-bold text-xl mb-4">01</div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">Manbani tekshirish</h3>
            <p className="text-stone-600 leading-relaxed">
              Qarorlar mustaqil tekshiruvni talab qiladi. Foydalanuvchilarga ushbu indeksni rasmiy muassasa portallari bilan solishtirish tavsiya etiladi.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
            <div className="text-stone-300 font-mono font-bold text-xl mb-4">02</div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">Hujjatlashtirilgan voqelik</h3>
            <p className="text-stone-600 leading-relaxed">
              Har bir yo'nalish sanoatning hujjatlashtirilgan omillariga tayanadi, jumladan kundalik vazifalar, daromad diapazonlari va qiyinchilik darajalari.
            </p>
          </div>
        </div>

        {/* Compass Quote */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-2xl md:text-3xl font-medium text-stone-900 leading-relaxed italic">
            "Buni kompas deb tasavvur qiling. Biz sizga narsalar qayerda ekanini ko'rsatamiz, lekin uni qo'lda ushlab, yo'nalishni tanlaydigan sizsiz."
          </p>
        </div>

        {/* Founder minimal */}
        <div className="max-w-xl mx-auto bg-stone-50 border border-stone-200 rounded-2xl p-8 text-center">
          <div className="w-8 h-8 bg-stone-900 rounded-sm transform rotate-45 mx-auto mb-6"></div>
          <p className="font-bold text-stone-900 mb-2">Malik — Toshkent, 23</p>
          <p className="text-stone-600 italic mb-4">"Men o'z hamyurtlarim ta'limda qimmat xatolar qilayotganini ko'rdim."</p>
        </div>

      </section>

      {/* Honest disclaimer */}
      <div className="bg-stone-100 border-t border-stone-200 py-8 px-6 text-center">
        <p className="text-xs text-stone-500 max-w-3xl mx-auto leading-relaxed">
          Biz siz uchun qaror qabul qilmaymiz. Ushbu qo'llanma sizga o'zingiz mustaqil qaror qabul qilishingiz uchun rostgo'y ma'lumot berish uchun yaratilgan. Yo'lingiz — o'z qo'lingizda.
        </p>
      </div>

    </div>
  );
};

export default Home;
