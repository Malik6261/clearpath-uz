import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CONTENT, Locale } from '../constants';

const DetailSection: React.FC<{ title: string; children: React.ReactNode; step: string; moduleLabel: string }> = ({ title, children, step, moduleLabel }) => {
  return (
    <div className="py-24 border-b border-stone-100 last:border-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="sticky top-32">
            <span className="text-[11px] font-bold text-stone-300 font-mono uppercase tracking-[0.3em] block mb-4">{moduleLabel} {step}</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-stone-900">{title}</h2>
          </div>
        </div>
        <div className="md:col-span-8">
          {children}
        </div>
      </div>
    </div>
  );
};

const MajorDetail: React.FC = () => {
  const params = useParams();
  const lang: Locale = params.lang === 'uz' ? 'uz' : 'en';
  const { id } = params;
  const content = CONTENT[lang];
  const major = content.majors.find((m) => m.id === id);
  const t = content.ui;

  if (!major) return <Navigate to={`/${lang}/majors`} />;

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-32">
        {/* Back Link */}
        <nav className="mb-20">
          <Link to={`/${lang}/majors`} className="group inline-flex items-center gap-2 text-[11px] font-bold text-stone-400 hover:text-stone-900 uppercase tracking-widest transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
            {t.majorDirectory}
          </Link>
        </nav>

        {/* Cinematic Header */}
        <header className="mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-stone-50 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest">{t.majorIntelligenceFile}</span>
          </div>
          <h1 className="text-6xl md:text-[120px] font-bold text-stone-900 tracking-tighter leading-[0.85] mb-12">
            {major.title}
          </h1>
          <p className="text-2xl md:text-4xl text-stone-400 font-medium leading-[1.2] max-w-3xl text-balance">
            {major.description}
          </p>
        </header>

        {/* Content Modules */}
        <div className="border-t border-stone-200">
          <DetailSection step="01" title={t.objectiveReality} moduleLabel={t.moduleLabel} >
            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-medium mb-12 text-balance">
              {major.actuallyIs}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-stone-900 text-stone-50 rounded-[3rem]">
                <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-6">{t.alignmentSignal}</h4>
                <ul className="space-y-4">
                  {major.whoItFits.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-sm font-semibold">
                       <span className="text-stone-500">/</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 bg-white border border-stone-200 rounded-[3rem]">
                <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-6">{t.riskSignal}</h4>
                <ul className="space-y-4">
                  {major.whoShouldAvoid.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-sm font-semibold text-stone-500">
                       <span className="text-red-200">×</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DetailSection>

          <DetailSection step="02" title={t.tacticalScorecard} moduleLabel={t.moduleLabel}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone-200 rounded-[2.5rem] overflow-hidden border border-stone-200">
              {major.realityCheck.map((row, i) => (
                <div key={i} className="bg-white p-10 hover:bg-stone-50 transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[11px] font-bold uppercase text-stone-400 tracking-[0.2em]">{row.factor}</span>
                    <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-widest ${
                      row.rating.includes('HIGH') || row.rating.includes('YUQORI') ? 'bg-stone-900 text-stone-50' : 'bg-stone-100 text-stone-500'
                    }`}>
                      {row.rating}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-stone-900 leading-snug mb-2">{lang === 'uz' ? 'Tahlil' : 'Analysis'}</p>
                  <p className="text-stone-500 text-sm font-medium leading-relaxed">
                    {row.notes}
                  </p>
                </div>
              ))}
            </div>
          </DetailSection>

          <DetailSection step="03" title={t.dailyOperations} moduleLabel={t.moduleLabel}>
            <div className="space-y-4">
              {major.dailyWork.map((item, i) => (
                <div key={i} className="flex gap-8 p-8 bg-white border border-stone-100 rounded-3xl items-center group hover:border-stone-900 transition-all duration-500">
                  <span className="text-stone-200 font-mono text-xl font-bold group-hover:text-stone-900 transition-colors">{(i+1).toString().padStart(2, '0')}</span>
                  <p className="text-stone-700 font-bold text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </DetailSection>

          <DetailSection step="04" title={t.intelligenceAssets} moduleLabel={t.moduleLabel}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {major.freeResources.map((res, i) => (
                <a 
                  key={i} 
                  href={res.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group p-10 bg-stone-50 border border-stone-200 rounded-[3rem] hover:bg-stone-900 transition-all duration-700 block relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10">
                       <h3 className="text-2xl font-bold tracking-tight text-stone-900 group-hover:text-stone-50 transition-colors">{res.name}</h3>
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-300 group-hover:text-stone-50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                       </svg>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 group-hover:text-stone-500 block mb-2">{t.operationalGoal}</span>
                        <p className="text-sm font-medium text-stone-600 group-hover:text-stone-300 leading-relaxed">{res.why}</p>
                      </div>
                      <div className="pt-6 border-t border-stone-200 group-hover:border-stone-800">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 group-hover:text-stone-500 block mb-2">{t.thresholdForStopping}</span>
                        <p className="text-sm font-bold text-stone-900 group-hover:text-stone-50 italic">"{res.whenToStop}"</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </DetailSection>

          {/* Specialist Lock Feature */}
          <section className="py-24 text-center border-t border-stone-100">
            <div className="max-w-md mx-auto">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-stone-100 text-stone-400 rounded-2xl font-bold text-[13px] uppercase tracking-widest cursor-not-allowed border border-stone-200">
                {t.specialistBtn}
              </div>
              <p className="mt-4 text-[11px] font-medium text-stone-400 max-w-xs mx-auto leading-relaxed italic">
                {t.specialistNote}
              </p>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <section className="py-40 text-center border-t border-stone-100">
           <h3 className="text-4xl font-bold text-stone-900 mb-12">{t.analysisCompleteTitle}</h3>
           <Link to={`/${lang}/majors`} className="px-12 py-5 bg-stone-900 text-stone-50 rounded-full font-bold text-[13px] uppercase tracking-widest hover:scale-105 transition-all">
              {t.returnToDirectory}
           </Link>
        </section>
      </div>
    </div>
  );
};

export default MajorDetail;