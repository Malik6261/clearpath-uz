import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CONTENT, Locale } from '../constants';

const Home: React.FC = () => {
  const params = useParams();
  const lang: Locale = params.lang === 'uz' ? 'uz' : 'en';
  const content = CONTENT[lang];
  const t = content.ui;

  return (
    <div className="bg-stone-50">
      {/* Cinematic Hero */}
      <section className="relative pt-24 md:pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{t.editorialIndex}</span>
          </div>
          
          <h1 className="text-6xl md:text-[110px] font-bold text-stone-900 tracking-tighter leading-[0.9] mb-10 max-w-4xl text-balance">
            {t.homeTitle1} <br/>
            <span className="text-stone-300 italic">{t.homeTitle2}</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <p className="text-xl md:text-2xl text-stone-500 font-medium leading-[1.3] mb-4 max-w-2xl text-balance">
                {t.homeSubtitle}
              </p>
              <p className="text-stone-400 font-bold text-sm mb-10 italic">
                {t.noPressureMsg}
              </p>
              <div className="flex flex-wrap gap-4 items-start">
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest pl-2">{t.academicLabel}</span>
                  <Link 
                    to={`/${lang}/majors`} 
                    className="px-10 py-5 bg-stone-900 text-stone-50 rounded-full font-bold text-[13px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-stone-200"
                  >
                    {t.startBriefing}
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest pl-2">{t.careerLabel}</span>
                  <Link 
                    to={`/${lang}/paths`} 
                    className="px-10 py-5 bg-transparent border border-stone-200 text-stone-900 rounded-full font-bold text-[13px] uppercase tracking-widest hover:bg-stone-50 transition-all"
                  >
                    {t.practicalAlternatives}
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 flex justify-end">
               <div className="p-8 bg-white border border-stone-200 rounded-[2.5rem] shadow-sm max-w-xs rotate-2 hidden md:block">
                  <p className="text-sm font-bold text-stone-900 mb-4 leading-relaxed italic">
                    "{t.homeQuote}"
                  </p>
                  <div className="w-8 h-[1px] bg-stone-200"></div>
               </div>
            </div>
          </div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-stone-100/50 to-transparent pointer-events-none"></div>
      </section>

      {/* Philosophy & Boundaries Block */}
      <section id="philosophy" className="py-20 px-6 bg-stone-100/30 border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-4">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-6 font-mono">{t.philTitle}</h2>
              <h3 className="text-3xl font-bold text-stone-900 tracking-tight leading-none">{t.noteOnDecisions}</h3>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-4">
                <p className="text-stone-600 font-medium leading-relaxed">
                  {t.phil1}
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-stone-600 font-medium leading-relaxed">
                  {t.phil2}
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-stone-600 font-medium leading-relaxed">
                  {t.phil3}
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-stone-600 font-medium leading-relaxed italic border-l-2 border-stone-200 pl-6">
                  "{t.phil4}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Block */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
            <div className="md:col-span-5">
              <div className="sticky top-24">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-8 font-mono">{t.methodology}</h2>
                <h3 className="text-5xl font-bold text-stone-900 tracking-tighter leading-[0.95] mb-8 text-balance">
                  {t.howToUse}
                </h3>
              </div>
            </div>
            
            <div className="md:col-span-7">
              <div className="space-y-16">
                <div className="group">
                  <div className="flex items-center gap-6 mb-6">
                    <span className="text-stone-200 font-mono text-xl font-bold group-hover:text-stone-900 transition-colors">01</span>
                    <h4 className="text-2xl font-bold text-stone-900 tracking-tight">{t.meth1Title}</h4>
                  </div>
                  <p className="text-stone-500 font-medium leading-relaxed pl-14">
                    {t.meth1Desc}
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-6 mb-6">
                    <span className="text-stone-200 font-mono text-xl font-bold group-hover:text-stone-900 transition-colors">02</span>
                    <h4 className="text-2xl font-bold text-stone-900 tracking-tight">{t.meth2Title}</h4>
                  </div>
                  <p className="text-stone-500 font-medium leading-relaxed pl-14">
                    {t.meth2Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Pillars */}
      <section className="py-24 px-6 border-t border-stone-100 bg-stone-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.academicLibrary, path: "majors", tag: t.academicLabel },
              { title: t.practicalPaths, path: "paths", tag: t.careerLabel },
              { title: t.exams, path: "exams", tag: "Metrics" },
              { title: t.gapYear, path: "gap-year", tag: "Strategy" }
            ].map((p, i) => (
              <Link 
                key={i} 
                to={`/${lang}/${p.path}`} 
                className="group p-8 bg-white rounded-[2.5rem] border border-stone-100 hover:border-stone-900 transition-all duration-700 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-8 block font-mono">{p.tag}</span>
                  <h4 className="text-2xl font-bold text-stone-900 mb-4 group-hover:translate-x-2 transition-transform duration-500 tracking-tight">{p.title}</h4>
                </div>
                <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-stone-50 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;