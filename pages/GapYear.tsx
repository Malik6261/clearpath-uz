
import React from 'react';
import { useParams } from 'react-router-dom';
import { CONTENT, Locale } from '../constants';

const GapYear: React.FC = () => {
  const { lang } = useParams();
  const safeLang: Locale = lang === 'uz' || lang === 'en' ? (lang as Locale) : 'uz';
  const content = CONTENT[safeLang] || CONTENT.uz;
  const t = content.ui;

  return (
    <div className="max-w-4xl mx-auto px-6 pb-32">
      <header className="py-24 text-center">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-6 block italic">{t.gapYearFeatureLabel}</span>
        <h1 className="text-5xl md:text-8xl font-bold text-stone-900 tracking-tighter leading-none mb-10">
          {t.gapYearTitleMain} <br/>
          <span className="text-stone-400 italic font-normal">{t.gapYearTitleItalic}</span>
        </h1>
        <p className="text-xl md:text-2xl text-stone-500 max-w-2xl mx-auto font-medium leading-relaxed text-balance mb-8">
          {t.gapYearIntro}
        </p>
        <p className="text-stone-400 font-bold text-sm italic">
          {t.noPressureMsg}
        </p>
      </header>

      {/* Special Context for UZ Students */}
      {safeLang === 'uz' && (
        <section className="mb-20 p-12 bg-white border border-stone-200 rounded-[3rem] shadow-sm">
           <h2 className="text-2xl font-bold text-stone-900 mb-6 tracking-tight">{t.gapYearWhatIsTitle}</h2>
           <p className="text-lg text-stone-600 font-medium leading-relaxed">
             {t.gapYearWhatIsDesc}
           </p>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 py-20 border-t border-stone-200">
         <div className="md:col-span-4 sticky top-32 h-fit">
            <h2 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-8 pb-4 border-b border-stone-900 w-fit">{t.gapYearVerdictTitle}</h2>
            <p className="text-stone-500 text-sm font-semibold leading-relaxed">
              {t.gapYearVerdictDesc}
            </p>
         </div>
         
         <div className="md:col-span-8 space-y-24">
            <section>
              <h3 className="text-3xl font-bold mb-8 tracking-tight">{t.gapYearStrategicTitle}</h3>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: t.gapYearStrategic1Title, desc: t.gapYearStrategic1Desc },
                  { title: t.gapYearStrategic2Title, desc: t.gapYearStrategic2Desc },
                  { title: t.gapYearStrategic3Title, desc: t.gapYearStrategic3Desc }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-stone-50 rounded-3xl border border-stone-200">
                    <h4 className="text-xl font-bold mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-stone-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-10 bg-red-50 rounded-[3rem] border border-red-100">
              <h3 className="text-3xl font-bold text-red-900 mb-8 tracking-tight">{t.gapYearDeceptionTitle}</h3>
              <div className="space-y-6">
                 {[t.gapYearDeception1, t.gapYearDeception2, t.gapYearDeception3].map((text, i) => (
                   <div key={i} className="flex gap-4 items-start">
                      <span className="text-red-300 font-bold">/</span>
                      <p className="text-red-800 font-bold leading-relaxed italic">"{text}"</p>
                   </div>
                 ))}
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-bold mb-8 tracking-tight">{t.gapYearRisksBenefitsTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 rounded-3xl overflow-hidden border border-stone-200">
                 <div className="bg-white p-8">
                    <h4 className="text-[11px] font-bold text-green-600 uppercase tracking-widest mb-4">{t.gapYearUpsideTitle}</h4>
                    <ul className="space-y-3 text-sm font-bold text-stone-600">
                       {t.gapYearUpsideList.map((item: string, i: number) => <li key={i}>{item}</li>)}
                    </ul>
                 </div>
                 <div className="bg-white p-8">
                    <h4 className="text-[11px] font-bold text-red-400 uppercase tracking-widest mb-4">{t.gapYearDownsideTitle}</h4>
                    <ul className="space-y-3 text-sm font-bold text-stone-400">
                       {t.gapYearDownsideList.map((item: string, i: number) => <li key={i}>{item}</li>)}
                    </ul>
                 </div>
              </div>
            </section>
         </div>
      </div>
    </div>
  );
};

export default GapYear;
