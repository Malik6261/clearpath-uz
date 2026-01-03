
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CONTENT, Locale } from '../constants';

const PracticalPaths: React.FC = () => {
  const { lang } = useParams();
  const safeLang: Locale = lang === 'uz' || lang === 'en' ? (lang as Locale) : 'uz';
  const content = CONTENT[safeLang] || CONTENT.uz;
  const t = content.ui;
  const activePaths = content.paths;
  
  const placeholders = [
    {
      id: 'marketing',
      title: t.marketingPlaceholderTitle,
      subtitle: t.marketingPlaceholderSub,
      description: t.marketingPlaceholderDesc,
      status: t.soon
    },
    {
      id: 'professionals',
      title: t.specialistHeader,
      subtitle: t.specialistSubtitle,
      description: t.specialistDesc,
      status: safeLang === 'uz' ? 'Tekshirilmoqda' : 'Verification'
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-24 pb-32">
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 font-mono">{t.pathsArchiveLabel}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-stone-900 tracking-tighter leading-[0.85] mb-6">
            {t.practicalPaths}
          </h1>
          <p className="text-lg md:text-xl text-stone-500 font-medium leading-relaxed max-w-2xl text-balance">
            {t.pathsPageDesc}
          </p>
        </header>

        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activePaths.map((path) => (
              <Link 
                key={path.id} 
                to={`/${safeLang}/paths/${path.id}`}
                className="group p-12 bg-white border border-stone-200 rounded-[3.5rem] hover:border-stone-900 transition-all duration-700 min-h-[450px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-stone-200/40 relative overflow-hidden"
              >
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-[10px] font-bold text-stone-300 uppercase tracking-[0.3em] font-mono">{t.activeAnalysis}</span>
                    <span className="px-4 py-1.5 bg-stone-900 text-stone-50 text-[10px] font-bold uppercase rounded-full tracking-widest">{t.pathAvailable}</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold text-stone-900 mb-4 tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                    {path.title}
                  </h2>
                  <p className="text-2xl text-stone-400 font-medium italic mb-8">{path.subtitle}</p>
                  <p className="text-stone-500 text-lg font-medium leading-relaxed max-w-sm">
                    {t.pathDescription}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-12 border-t border-stone-100">
                   <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-stone-900 uppercase tracking-[0.2em] mb-1">{t.pathStatus}</span>
                      <span className="text-sm font-bold text-stone-400 italic">{t.verifiedPathway}</span>
                   </div>
                   <div className="flex items-center gap-4 text-stone-900">
                      <span className="text-[13px] font-bold uppercase tracking-widest">{t.viewPath}</span>
                      <div className="w-14 h-14 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-stone-50 transition-all duration-500 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                   </div>
                </div>
              </Link>
            ))}

            {placeholders.map((p) => (
              <div 
                key={p.id} 
                className="p-12 bg-stone-50 border-2 border-dashed border-stone-200 rounded-[3.5rem] min-h-[450px] flex flex-col justify-between opacity-80"
              >
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-[10px] font-bold text-stone-300 uppercase tracking-[0.3em] font-mono">{t.queueLabel}</span>
                    <span className="px-4 py-1.5 bg-stone-100 text-stone-400 text-[10px] font-bold uppercase rounded-full tracking-widest">{p.status}</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold text-stone-200 mb-4 tracking-tighter italic">
                    {p.title}
                  </h2>
                  <p className="text-2xl text-stone-200 font-medium italic mb-8">{p.subtitle}</p>
                  <p className="text-stone-300 text-lg font-medium leading-relaxed max-w-sm">
                    {p.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-12 border-t border-stone-200 text-stone-300">
                   <span className="text-[11px] font-bold uppercase tracking-[0.2em]">{t.locked}</span>
                   <div className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PracticalPaths;
