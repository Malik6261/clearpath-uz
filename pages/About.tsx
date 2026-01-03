
import React from 'react';
import { useParams } from 'react-router-dom';
import { CONTENT, Locale } from '../constants';

const About: React.FC = () => {
  const { lang } = useParams();
  const safeLang: Locale = lang === 'uz' || lang === 'en' ? (lang as Locale) : 'uz';
  const content = CONTENT[safeLang] || CONTENT.uz;
  const t = content.ui;

  return (
    <div className="bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 py-32 md:py-52">
        <header className="mb-40 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">The Mission Statement</span>
          </div>
          <h1 className="text-6xl md:text-[110px] font-bold text-stone-900 tracking-tighter leading-[0.85] mb-12">
            Clear Decisions. <br/><span className="text-stone-300 italic">Zero Hype.</span>
          </h1>
          <p className="text-xl md:text-3xl text-stone-500 font-medium leading-relaxed text-balance mb-8">
            ClearPath was built to fill the information gap between high school graduation and professional life. We focus on clarity over promises.
          </p>
          <p className="text-stone-400 font-bold text-sm italic">
            {t.noPressureMsg}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 py-20 border-t border-stone-200">
           <div className="md:col-span-4 sticky top-32 h-fit">
              <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-stone-900 mb-8 pb-4 border-b border-stone-900 w-fit font-mono">Philosophy</h2>
              <p className="text-stone-400 text-sm font-bold leading-relaxed">
                Objective analysis. <br/>
                Long-term strategy. <br/>
                Zero marketing fluff.
              </p>
           </div>
           
           <div className="md:col-span-8 space-y-24">
              <section className="space-y-12">
                <p className="text-3xl md:text-4xl font-bold text-stone-900 leading-[1.2] tracking-tight">
                  In Uzbekistan, education decisions are often based on social prestige, parental pressure, or marketing buzzwords.
                </p>
                <div className="space-y-8 text-lg font-medium text-stone-500 leading-relaxed">
                  <p>
                    We believe students deserve the truth about the daily reality of their chosen fields. We do not sell courses. We do not represent any university. We are not an academy.
                  </p>
                  <p>
                    ClearPath is a decision-making resource that prioritizes hard truths. If a field is declining, we tell you. If an exam is unnecessary, we explain why. We aren't here to motivate; we're here to inform.
                  </p>
                </div>
              </section>

              <section className="p-12 md:p-16 bg-stone-900 text-stone-50 rounded-[4rem] relative overflow-hidden">
                <div className="relative z-10 max-w-xl">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-500 mb-8 font-mono">A Note on Research</h3>
                  <p className="text-2xl font-light leading-relaxed mb-10">
                    "Data shifts. Rules change. While we update our guides regularly, you must always anchor our advice against current official policies of universities and exam boards. Think of this guide as a <span className="text-stone-400 italic">compass</span>, not a fixed map."
                  </p>
                  <p className="text-sm font-bold text-stone-500 uppercase tracking-widest italic">
                    — Written by real professionals with real experience.
                  </p>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 border-b border-l border-stone-800 rounded-bl-full"></div>
              </section>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
