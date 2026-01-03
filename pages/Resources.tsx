
import React from 'react';
import { useParams } from 'react-router-dom';
import { CONTENT, Locale } from '../constants';

const Resources: React.FC = () => {
  const { lang } = useParams();
  const safeLang: Locale = lang === 'uz' || lang === 'en' ? (lang as Locale) : 'uz';
  const content = CONTENT[safeLang] || CONTENT.uz;
  const t = content.ui;

  const allResources = [
    ...content.majors.flatMap(m => m.freeResources.map(r => ({ ...r, category: m.title }))),
    ...content.exams.flatMap(e => e.resources.map(r => ({ ...r, category: e.title })))
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-32 md:py-52">
        <header className="mb-32 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">{t.resourcesArchiveLabel}</span>
          </div>
          <h1 className="text-6xl md:text-[110px] font-bold text-stone-900 tracking-tighter leading-[0.85] mb-12">
            {t.resourcesPageTitle}
          </h1>
          <p className="text-xl md:text-3xl text-stone-500 font-medium leading-relaxed text-balance">
            {t.resourcesPageDesc}
          </p>
        </header>

        <section className="mb-24 p-12 md:p-20 bg-stone-900 text-stone-50 rounded-[4rem] relative overflow-hidden">
          <div className="relative z-10">
             <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-stone-500 mb-8 font-mono italic">{t.resourceDirectiveLabel}</h2>
             <p className="text-3xl md:text-5xl font-bold tracking-tight text-balance leading-[1.1]">
               "{t.resourceDirectiveQuote}"
             </p>
          </div>
          {/* Subtle Geometric Decor */}
          <div className="absolute bottom-0 right-0 w-64 h-64 border-t border-l border-stone-800 rounded-tl-full opacity-50"></div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allResources.map((res, i) => (
            <div key={i} className="flex flex-col bg-white border border-stone-200 p-10 rounded-[3rem] hover:border-stone-900 hover:shadow-2xl hover:shadow-stone-200/40 transition-all duration-700 group">
              <div className="flex justify-between items-start mb-10">
                <span className="text-[9px] font-bold bg-stone-100 px-3 py-1 rounded-full text-stone-400 uppercase tracking-widest">{res.category}</span>
                <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-stone-200 hover:text-stone-900 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              <h3 className="text-3xl font-bold mb-6 tracking-tighter text-stone-900 group-hover:underline underline-offset-8 transition-all">{res.name}</h3>
              
              <div className="space-y-8 flex-grow">
                <div>
                  <h4 className="text-[10px] font-bold text-stone-300 uppercase tracking-widest mb-2">{t.resourceContextLabel}</h4>
                  <p className="text-[15px] font-medium text-stone-600 leading-relaxed">{res.why}</p>
                </div>
                <div className="pt-8 border-t border-stone-50 mt-auto">
                  <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-2">{t.resourceDiscardLabel}</h4>
                  <p className="text-[11px] font-bold text-stone-400 leading-tight tracking-tight uppercase">{res.notFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
