
import React from 'react';
import { useParams } from 'react-router-dom';
import { CONTENT, Locale } from '../constants';
import { Scholarship } from '../types';

const Scholarships: React.FC = () => {
  const { lang } = useParams();
  const safeLang: Locale = lang === 'uz' || lang === 'en' ? (lang as Locale) : 'uz';
  const content = CONTENT[safeLang] || CONTENT.uz;
  const t = content.ui;
  const scholarships = content.scholarships;

  const uzPrograms = scholarships.filter(s => s.origin === 'UZBEKISTAN');
  const internationalPrograms = scholarships.filter(s => s.origin === 'INTERNATIONAL');

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-24 pb-32">
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 font-mono">{t.scholarshipsArchiveLabel}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-stone-900 tracking-tighter leading-[0.85] mb-6">
            {t.scholarshipsLabel}
          </h1>
          <p className="text-lg md:text-xl text-stone-500 font-medium leading-relaxed max-w-2xl text-balance">
            {t.scholarshipsPageDesc}
          </p>
        </header>

        {/* Uzbekistan Programs */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-6 font-mono">{t.tierALabel}</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900">{t.localProgramsLabel}</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12">
            {uzPrograms.map(s => <ScholarshipCard key={s.id} scholarship={s} t={t} />)}
          </div>
        </section>

        {/* International Programs */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-6 font-mono">{t.tierBLabel}</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900">{t.globalFundingLabel}</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internationalPrograms.map(s => <ScholarshipCard key={s.id} scholarship={s} t={t} />)}
          </div>
        </section>
      </div>
    </div>
  );
};

const ScholarshipCard: React.FC<{ scholarship: Scholarship, t: Record<string, string> }> = ({ scholarship, t }) => {
  return (
    <div className="bg-white border border-stone-200 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row gap-12 hover:border-stone-900 transition-all duration-700 shadow-sm">
      <div className="md:w-1/2">
        <div className="flex justify-between items-start mb-8">
          <h4 className="text-3xl md:text-4xl font-bold tracking-tighter text-stone-900 leading-tight">
            {scholarship.title}
          </h4>
          <a href={scholarship.url} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-stone-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        
        <p className="text-lg text-stone-600 font-medium leading-relaxed mb-10">
          {scholarship.whatItIs}
        </p>

        <div className="space-y-8">
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4">{t.competitivenessLabel}</h5>
            <div className="inline-flex px-4 py-1.5 rounded-full bg-stone-900 text-stone-50 text-[10px] font-bold uppercase tracking-[0.2em]">
              {scholarship.competitiveness}
            </div>
          </div>
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4">{t.coverageLabel}</h5>
            <p className="text-stone-900 font-bold leading-tight">{scholarship.coverage}</p>
          </div>
          <div className="p-8 bg-stone-50 rounded-[2rem] border border-stone-100">
             <h5 className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-4">{t.riskFactorsLabel}</h5>
             <ul className="space-y-2">
                {scholarship.whoShouldNotApply.map((item: string, i: number) => (
                  <li key={i} className="text-sm font-bold text-stone-400 leading-tight flex gap-3">
                    <span className="text-red-200">×</span> {item}
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col justify-between">
        <div className="space-y-12">
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-6">{t.targetProfileLabel}</h5>
            <ul className="space-y-4">
              {scholarship.whoItsFor.map((item: string, i: number) => (
                <li key={i} className="text-base font-bold text-stone-800 flex gap-4">
                  <span className="text-stone-300">/</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-6">{t.requiredObligationsLabel}</h5>
            <ul className="space-y-4">
              {scholarship.obligations.map((item: string, i: number) => (
                <li key={i} className="p-4 border border-stone-100 rounded-2xl text-sm font-bold text-stone-600 flex gap-4">
                  <span className="text-stone-300 font-mono">{(i+1).toString().padStart(2, '0')}</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-stone-100">
          <h5 className="text-[10px] font-bold uppercase tracking-widest text-stone-900 mb-4 italic">{t.realityCheckLabel}</h5>
          <p className="text-sm text-stone-500 font-medium leading-relaxed italic">
            "{scholarship.realityCheck}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
