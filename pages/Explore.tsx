import React, { useState } from 'react';

const SCHOLARSHIPS = [
  { id: 1, name: 'Stipendium Hungaricum', flag: '🇭🇺', chance: '25%', chanceColor: 'bg-emerald-100 text-emerald-800 border-emerald-200', quota: '170 ta', ielts: '5.5', gpa: '75%', deadline: 'Yanvar', stipend: '$120/oy + ta\'lim', mistake: 'Tibbiy ko\'rik yoki portal deadline o\'tkazib yuborish', tags: ['Oson', 'Evropa'] },
  { id: 2, name: 'Rossiya Hukumati', flag: '🇷🇺', chance: '40%', chanceColor: 'bg-emerald-100 text-emerald-800 border-emerald-200', quota: '800 ta', ielts: 'Shart emas', gpa: '70%', deadline: 'Dekabr', stipend: 'Bepul ta\'lim', mistake: 'Faqat Moskva — MGU, HSE tanlash', tags: ['Oson', 'MDH'] },
  { id: 3, name: 'Xitoy CSC', flag: '🇨🇳', chance: '15%', chanceColor: 'bg-emerald-100 text-emerald-800 border-emerald-200', quota: '50-100 ta', ielts: '6.0', gpa: '75%', deadline: 'Fevral-Mart', stipend: '$400/oy', mistake: 'Magistr/PhD uchun professor bilan oldindan aloqa qilmaslik', tags: ['Oson', 'Osiyo'] },
  { id: 4, name: 'El-Yurt Umidi', flag: '🇺🇿', chance: '5-10%', chanceColor: 'bg-yellow-100 text-yellow-800 border-yellow-200', quota: '350 ta', ielts: '6.5/7.0', gpa: '85%', deadline: 'Aprel/Iyun/Noyabr', stipend: '$1,500/oy', mistake: 'Universitetga qabul olmay ariza berish', tags: ['O\'rtacha', 'MDH'] },
  { id: 5, name: 'DAAD', flag: '🇩🇪', chance: '10%', chanceColor: 'bg-yellow-100 text-yellow-800 border-yellow-200', quota: 'Cheksiz', ielts: '6.5', gpa: '85%', deadline: 'Okt-Noyabr', stipend: '$1,000/oy', mistake: '2 yil ish tajribasisiz ariza — qat\'iy shart', tags: ['O\'rtacha', 'Evropa'] },
  { id: 6, name: 'Malayziya', flag: '🇲🇾', chance: '15%', chanceColor: 'bg-emerald-100 text-emerald-800 border-emerald-200', quota: '—', ielts: '6.0', gpa: '3.5/4.0', deadline: 'Iyun', stipend: '$320/oy', mistake: 'Bakalavr uchun ariza — faqat postgraduate', tags: ['Oson', 'Osiyo'] },
  { id: 7, name: 'Chexiya', flag: '🇨🇿', chance: '10%', chanceColor: 'bg-yellow-100 text-yellow-800 border-yellow-200', quota: '15 ta', ielts: '6.0', gpa: '80%', deadline: 'Sentabr', stipend: '$600/oy', mistake: 'Ro\'yxatda onlayn testni vaqtida bitirmaslik', tags: ['O\'rtacha', 'Evropa'] },
  { id: 8, name: 'Turkiye Burslari', flag: '🇹🇷', chance: '2.4%', chanceColor: 'bg-red-100 text-red-800 border-red-200', quota: '100 ta', ielts: 'Shart emas', gpa: '70% (Tib:90%)', deadline: 'Yanvar-Fevral', stipend: '$120/oy', mistake: 'Tibbiyotga 85% bilan ariza — avtomatik rad', tags: ['Qiyin', 'Evropa', 'Osiyo'] },
  { id: 9, name: 'GKS Koreya', flag: '🇰🇷', chance: '2-3%', chanceColor: 'bg-red-100 text-red-800 border-red-200', quota: '15 ta', ielts: '6.0', gpa: '80%', deadline: 'Fevral', stipend: '$750/oy', mistake: '"K-pop yaxshi ko\'raman" yozish — ilmiy taklif kerak', tags: ['Qiyin', 'Osiyo'] },
  { id: 10, name: 'MEXT', flag: '🇯🇵', chance: '3%', chanceColor: 'bg-red-100 text-red-800 border-red-200', quota: '10 ta', ielts: '6.5', gpa: '85%', deadline: 'May', stipend: '$900/oy', mistake: 'Elchixona math imtihonini DTM bilan teng deb o\'ylash', tags: ['Qiyin', 'Osiyo'] },
  { id: 11, name: 'Erasmus+', flag: '🇪🇺', chance: '1%', chanceColor: 'bg-red-100 text-red-800 border-red-200', quota: '11-16 ta', ielts: '6.5-7.0', gpa: '85%', deadline: 'Yanvar-Fevral', stipend: '$1,500/oy', mistake: 'O\'zbek kreditlarga mos kelmaydigan konsortsium', tags: ['Qiyin', 'Evropa'] },
  { id: 12, name: 'Umid Prezident', flag: '🇺🇿', chance: '1%', chanceColor: 'bg-red-100 text-red-800 border-red-200', quota: '200 ta', ielts: '7.0', gpa: '100%', deadline: 'Sentabr', stipend: '$150/oy', mistake: '1 ta "4" baho — darhol bekor', tags: ['Qiyin', 'MDH'] },
];

const MAJORS = [
  {
    icon: '💻',
    title: 'IT / Dasturlash',
    content: (
      <div className="space-y-4 text-sm text-stone-600">
        <p className="font-bold text-stone-900">Boshlash tartibi:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>CS50 — cs50.harvard.edu — BEPUL</li>
          <li>freeCodeCamp — freecodecamp.org — BEPUL</li>
          <li>The Odin Project — theodinproject.com — BEPUL</li>
        </ol>
        <p><span className="font-bold text-stone-900">Portfolio:</span> Telegram bot (o'zbek biznes uchun) | UZS-USD konvertor | Toshkent ob-havo ilovasi</p>
        <p><span className="font-bold text-stone-900">GitHub:</span> Haftada 3 commit. README ingliz tilida.</p>
        <p><span className="font-bold text-stone-900">Amaliyot:</span> IT Park Uzbekistan, Uzinfocom</p>
        <p><span className="font-bold text-stone-900">DTM:</span> Matematika (1) + Fizika/Informatika (2)</p>
        <p><span className="font-bold text-stone-900">IELTS vaqti:</span> 11-sinfda yetarli — avval kod muhimroq</p>
      </div>
    )
  },
  {
    icon: '💼',
    title: 'Biznes / Marketing',
    content: (
      <div className="space-y-4 text-sm text-stone-600">
        <p><span className="font-bold text-stone-900">Kurslar:</span> Google Digital Garage (bepul) | Wharton Business Foundations (coursera, audit bepul) | CFI Corporate Finance (bepul)</p>
        <p><span className="font-bold text-stone-900">Portfolio:</span> Uzum Market do'koni | Instagram biznes sahifa | WIUT Case Championship</p>
        <p><span className="font-bold text-stone-900">DTM:</span> Matematika (1) + Iqtisodiyot (2)</p>
      </div>
    )
  },
  {
    icon: '🏥',
    title: 'Tibbiyot',
    content: (
      <div className="space-y-4 text-sm text-stone-600">
        <p><span className="font-bold text-stone-900">Tayyorgarlik:</span> DTM Biologiya + Kimyo 8-11 sinf — TO'LIQ yodlash</p>
        <p><span className="font-bold text-stone-900">Kurslar:</span> Harvard AnatomyX (edx.org, bepul) | MIT Biology (ocw.mit.edu, bepul) | Khan Academy Biologiya</p>
        <p><span className="font-bold text-stone-900">Amaliyot:</span> Akfa Medline kuzatuv soatlari | Qizil Yarim Oy volontyorlik</p>
        <p><span className="font-bold text-stone-900">DTM:</span> Biologiya (1) + Kimyo (2). Top tibbiyot uchun: 160+/189</p>
      </div>
    )
  },
  {
    icon: '⚖️',
    title: 'Huquq',
    content: (
      <div className="space-y-4 text-sm text-stone-600">
        <p><span className="font-bold text-stone-900">Til:</span> C1 ingliz (IELTS 7.5+) + ravon rus tili</p>
        <p><span className="font-bold text-stone-900">Kurslar:</span> Yale Introduction to Law (coursera, bepul) | Harvard Contract Law (edx, bepul)</p>
        <p><span className="font-bold text-stone-900">Tajriba:</span> Toshkent MUN | WIUT Debate | TSUL Huquq Klinikasi | Kinstellar amaliyot</p>
        <p><span className="font-bold text-stone-900">DTM:</span> Tarix (1) + Jamiyatshunoslik (2)</p>
      </div>
    )
  },
  {
    icon: '🎨',
    title: 'Dizayn / Ijodiy',
    content: (
      <div className="space-y-4 text-sm text-stone-600">
        <p><span className="font-bold text-stone-900">Vositalar:</span> Figma (bepul) | Canva Design School (bepul) | Adobe Express</p>
        <p><span className="font-bold text-stone-900">Portfolio:</span> Mahalliy saytlarni qayta loyihalash | Behance "Oldin/Keyin"</p>
        <p><span className="font-bold text-stone-900">Frilanser:</span> Upwork | Fiverr (Payoneer orqali)</p>
        <p><span className="font-bold text-stone-900">Musobaqalar:</span> ACDF mahalliy tanlovlar</p>
      </div>
    )
  }
];

const MISTAKES = [
  "Tayyorgarlikni kech boshlash",
  "Faqat mashhur universitetlarni ko'zlash",
  "Mamlakat stipend miqdorini to'liq xarajat deb hisoblash",
  "Rossiya/Xitoy kvotasi uchun Moskva/Beijing universitetlarini birinchi qilish",
  "Tibbiyotga GPA talabini tekshirmasdan ariza berish",
  "Stipendiya va qabul deadlinlarini alohida kuzatmaslik",
  "DAAD uchun ish tajribasi shart ekanini bilmaslik",
  "Intervyu bilan esseyi boshqa kishi yozishi (intervyuda bilinadi)",
  "Hujjatlarni (apostil, tarjima) kech tayyorlash",
  "Faqat bitta mamlakatga ariza berish — zaxira yo'q"
];

const Explore: React.FC = () => {
  const [filter, setFilter] = useState('Hammasi');
  const [expandedMajor, setExpandedMajor] = useState<number | null>(null);
  const [expandedMistake, setExpandedMistake] = useState<number | null>(null);

  const filteredScholarships = filter === 'Hammasi' 
    ? SCHOLARSHIPS 
    : SCHOLARSHIPS.filter(s => s.tags.includes(filter));

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
          Hamma narsani o'zingiz ko'rib chiqing
        </h1>
        <p className="text-lg text-stone-500 font-medium">
          Bosim yo'q. Qaror yo'q. Faqat haqiqat.
        </p>
      </div>

      {/* SECTION 1: STIPENDIYALAR */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-stone-900">12 ta Stipendiya — Haqiqiy Raqamlar</h2>
          <p className="text-stone-500">Reklama yo'q. Faqat faktlar.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Hammasi', 'Oson', 'O\'rtacha', 'Qiyin', 'Evropa', 'Osiyo', 'MDH'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors ${
                filter === f 
                  ? 'bg-stone-900 text-white' 
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholarships.map(s => (
            <div key={s.id} className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{s.flag}</span>
                <h3 className="font-bold text-lg text-stone-900">{s.name}</h3>
              </div>
              
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500">Muvaffaqiyat:</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-bold border ${s.chanceColor}`}>
                    {s.chance}
                  </span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500">Kvota:</span>
                  <span className="font-medium text-stone-900">{s.quota}</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500">Min. IELTS:</span>
                  <span className="font-medium text-stone-900">{s.ielts}</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500">Min. GPA:</span>
                  <span className="font-medium text-stone-900">{s.gpa}</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500">Deadline:</span>
                  <span className="font-medium text-stone-900">{s.deadline}</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500">Stipend:</span>
                  <span className="font-medium text-stone-900">{s.stipend}</span>
                </div>
              </div>

              <div className="bg-red-50 text-red-800 p-3 rounded-xl text-xs font-medium border border-red-100">
                <span className="font-bold mr-1">⚠️ Eng katta xato:</span>
                {s.mistake}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: YO'NALISHLAR */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-stone-900">Yo'nalishlar bo'yicha yo'l xaritasi</h2>
        <div className="space-y-4">
          {MAJORS.map((m, i) => (
            <div key={i} className="border border-stone-200 rounded-2xl overflow-hidden bg-white">
              <button 
                onClick={() => setExpandedMajor(expandedMajor === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{m.icon}</span>
                  <h3 className="font-bold text-lg text-stone-900">{m.title}</h3>
                </div>
                <span className="text-stone-400">
                  {expandedMajor === i ? '−' : '+'}
                </span>
              </button>
              {expandedMajor === i && (
                <div className="p-6 pt-0 border-t border-stone-100 mt-2">
                  {m.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: DTM */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-stone-900">DTM To'liq Tushuntirish</h2>
        <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-stone-900 mb-3 uppercase tracking-widest text-xs text-stone-500">Tuzilishi</h3>
                <ul className="space-y-2 text-sm text-stone-600 font-mono bg-stone-50 p-4 rounded-xl">
                  <li>3 majburiy fan × 10 savol × 1.1 = 33 ball</li>
                  <li>1-ixtisoslashgan × 30 savol × 3.1 = 93 ball</li>
                  <li>2-ixtisoslashgan × 30 savol × 2.1 = 63 ball</li>
                  <li className="pt-2 mt-2 border-t border-stone-200 font-bold text-stone-900">JAMI MAKSIMAL: 189 ball</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-3 uppercase tracking-widest text-xs text-stone-500">Muhim balllar</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li><span className="font-bold text-stone-900">Davlat granti (NUUz, TSUE):</span> 150+</li>
                  <li><span className="font-bold text-stone-900">Minimal kontrakt:</span> 56.7</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-stone-900 mb-3 uppercase tracking-widest text-xs text-stone-500">Sanalar</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li><span className="font-bold text-stone-900">Ro'yxatdan o'tish:</span> 5–25 iyun (my.gov.uz)</li>
                  <li><span className="font-bold text-stone-900">Imtihon:</span> Iyul/Avgust</li>
                  <li><span className="font-bold text-stone-900">Natijalar:</span> Avgust oxiri</li>
                  <li><span className="font-bold text-stone-900">Tanlash muddati:</span> 15 kun</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-3 uppercase tracking-widest text-xs text-stone-500">Bepul resurslar</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li>uzbmb.uz — rasmiy mock testlar</li>
                  <li>test.uz — qo'shimcha testlar</li>
                  <li>Khan Academy O'zbek</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-3 uppercase tracking-widest text-xs text-stone-500">Past ball → Super-Kontrakt</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li><span className="font-bold text-stone-900">Az yetishgan:</span> 1.5x (faqat 1-yil)</li>
                  <li><span className="font-bold text-stone-900">Ko'proq:</span> 2x, 3x, 10x</li>
                  <li><span className="font-bold text-stone-900">2-yildan:</span> oddiy narx</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: XALQARO IMTIHONLAR */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-stone-900">Xalqaro Imtihonlar</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-stone-900">
                <th className="py-4 px-4 font-bold text-stone-900">Imtihon</th>
                <th className="py-4 px-4 font-bold text-stone-900">Narx</th>
                <th className="py-4 px-4 font-bold text-stone-900">Markaz</th>
                <th className="py-4 px-4 font-bold text-stone-900">Minimal ball</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-stone-50">
                <td className="py-4 px-4 font-medium text-stone-900">IELTS</td>
                <td className="py-4 px-4 text-stone-600">~$240</td>
                <td className="py-4 px-4 text-stone-600">British Council (11 shahar)</td>
                <td className="py-4 px-4 text-stone-600">5.5–7.0</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-4 px-4 font-medium text-stone-900">SAT</td>
                <td className="py-4 px-4 text-stone-600">~$111</td>
                <td className="py-4 px-4 text-stone-600">Toshkent</td>
                <td className="py-4 px-4 text-stone-600">1200+</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-4 px-4 font-medium text-stone-900">TOPIK I</td>
                <td className="py-4 px-4 text-stone-600">250,000 UZS</td>
                <td className="py-4 px-4 text-stone-600">Toshkent, Farg'ona</td>
                <td className="py-4 px-4 text-stone-600">3-daraja</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-4 px-4 font-medium text-stone-900">TOPIK II</td>
                <td className="py-4 px-4 text-stone-600">400,000 UZS</td>
                <td className="py-4 px-4 text-stone-600">Toshkent, Farg'ona</td>
                <td className="py-4 px-4 text-stone-600">4-daraja</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-4 px-4 font-medium text-stone-900">HSK</td>
                <td className="py-4 px-4 text-stone-600">~$100–150</td>
                <td className="py-4 px-4 text-stone-600">Xitoy Konsulatligi</td>
                <td className="py-4 px-4 text-stone-600">HSK4</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-4 px-4 font-medium text-stone-900">TestDaF</td>
                <td className="py-4 px-4 text-stone-600">~$200</td>
                <td className="py-4 px-4 text-stone-600">Goethe-Institut</td>
                <td className="py-4 px-4 text-stone-600">TDN 4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl flex gap-3 items-start">
          <span className="text-xl">💡</span>
          <p className="text-sm text-blue-900 font-medium">
            O'zbekiston hukumati 75%+ ball olgan talabalarga barcha imtihon xarajatlarini qaytaradi. IELTS 7.0 = pul qaytariladi.
          </p>
        </div>
      </section>

      {/* SECTION 5: XATOLAR */}
      <section className="space-y-8 pb-12">
        <h2 className="text-2xl font-bold text-stone-900">Eng ko'p qilingan 10 xato</h2>
        <div className="space-y-3">
          {MISTAKES.map((m, i) => (
            <div key={i} className="bg-white border border-stone-200 rounded-xl p-4 flex gap-4 items-center hover:border-stone-400 transition-colors cursor-default">
              <span className="font-mono font-bold text-stone-400 text-lg w-6">{i + 1}.</span>
              <p className="font-medium text-stone-800">{m}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Explore;
