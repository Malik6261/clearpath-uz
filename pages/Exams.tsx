import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CONTENT, Locale } from '../constants';

const Exams: React.FC = () => {
  const params = useParams();
  const lang: Locale = params.lang === 'uz' ? 'uz' : 'en';
  const content = CONTENT[lang];
  const t = content.ui;
  const exams = content.exams;

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-24 pb-32">
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 font-mono">{t.examsArchiveLabel}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-stone-900 tracking-tighter leading-[0.85] mb-6">
            {t.exams}
          </h1>
          <p className="text-lg md:text-xl text-stone-500 font-medium leading-relaxed max-w-2xl text-balance">
            {t.examsPageDesc}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {exams.map((exam) => (
            <Link 
              key={exam.id} 
              to={`/${lang}/exams/${exam.id}`}
              className="group p-12 bg-white border border-stone-200 rounded-[3.5rem] hover:border-stone-900 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-700 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <span className="text-[10px] font-bold text-stone-300 uppercase tracking-[0.3em] block mb-10 font-mono">{t.benchmarkFile}</span>
                <h2 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6 tracking-tighter group-hover:translate-x-4 transition-transform duration-500">{exam.title}</h2>
                <div className="h-px w-12 bg-stone-200 mb-8 group-hover:w-24 transition-all duration-500"></div>
                <p className="text-lg text-stone-500 font-medium leading-relaxed max-w-sm italic">
                  {exam.shortDescription}
                </p>
              </div>

              <div className="flex items-center justify-between pt-12 border-t border-stone-50">
                <span className="text-[11px] font-bold text-stone-900 uppercase tracking-widest">{t.evaluateRelevance}</span>
                <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-stone-50 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* University Credit & Placement Exams Section */}
        <section className="pt-24 border-t border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] block mb-6 font-mono">Archive 03 — Placement</span>
              <h2 className="text-4xl font-bold text-stone-900 tracking-tighter leading-none mb-8">
                {t.creditExamsTitle}
              </h2>
              <div className="p-8 bg-stone-100 rounded-[2rem] border border-stone-200">
                <p className="text-sm font-bold text-stone-900 leading-relaxed mb-4 italic">
                  "{t.creditExamsImportant}"
                </p>
                <div className="w-8 h-px bg-stone-300"></div>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl text-stone-500 font-medium leading-relaxed mb-12 text-balance">
                {t.creditExamsIntro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
                {t.creditExamsList.map((item: any, i: number) => (
                  <div key={i} className="p-8 bg-white border border-stone-100 rounded-3xl">
                    <h4 className="text-xl font-bold text-stone-900 mb-2 tracking-tight">{item.name}</h4>
                    <p className="text-sm font-medium text-stone-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="pt-8 border-t border-stone-100">
                <p className="text-[11px] font-bold text-stone-400 uppercase tracking-widest leading-relaxed italic">
                  * {t.creditExamsDisclaimer}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Exams;