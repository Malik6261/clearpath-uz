
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CONTENT, Locale } from '../constants';

const Majors: React.FC = () => {
  const { lang } = useParams();
  const safeLang: Locale = lang === 'uz' || lang === 'en' ? (lang as Locale) : 'uz';
  const content = CONTENT[safeLang] || CONTENT.uz;
  const majors = content.majors;
  const t = content.ui;

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-24 pb-32">
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 font-mono">{t.academicArchiveLabel}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-stone-900 tracking-tighter leading-[0.85] mb-6">
            {t.academicLibrary}
          </h1>
          <p className="text-lg md:text-xl text-stone-500 font-medium leading-relaxed max-w-2xl text-balance mb-4">
            {t.academicPageDesc}
          </p>
          <p className="text-stone-400 font-bold text-sm italic">
            {t.noPressureMsg}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {majors.map((major, idx) => (
            <Link 
              key={major.id} 
              to={`/${safeLang}/majors/${major.id}`}
              className="group relative flex flex-col md:flex-row md:items-center justify-between p-12 bg-white border border-stone-200 rounded-[3rem] hover:border-stone-900 hover:bg-stone-900 transition-all duration-700 overflow-hidden"
            >
              <div className="relative z-10 md:flex-1">
                <div className="flex items-center gap-6 mb-4">
                  <span className="text-stone-200 font-mono text-xl font-bold group-hover:text-stone-700 transition-colors">{(idx + 1).toString().padStart(2, '0')}</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-stone-900 group-hover:text-stone-50 transition-colors tracking-tighter">{major.title}</h2>
                </div>
                <p className="text-stone-400 group-hover:text-stone-500 text-lg font-medium max-w-lg transition-colors">{major.description}</p>
              </div>
              <div className="relative z-10 mt-8 md:mt-0 flex flex-wrap gap-3">
                <div className="px-4 py-1.5 bg-stone-50 border border-stone-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-400 group-hover:bg-stone-800 group-hover:border-stone-700 group-hover:text-stone-500 transition-all">
                  {t.riskLabelPrefix} {major.realityCheck.find(r => r.factor === (safeLang === 'uz' ? 'AI xavfi' : 'AI Risk'))?.rating}
                </div>
                <div className="px-4 py-1.5 bg-stone-50 border border-stone-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-400 group-hover:bg-stone-800 group-hover:border-stone-700 group-hover:text-stone-500 transition-all">
                  {t.utilityLabelPrefix} {major.realityCheck.find(r => r.factor === (safeLang === 'uz' ? 'Daromad salohiyati' : 'Income Potential'))?.rating}
                </div>
              </div>
              <div className="absolute top-1/2 right-0 w-64 h-64 bg-stone-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-10 transition-opacity duration-1000"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Majors;
