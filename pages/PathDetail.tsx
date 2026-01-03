import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CONTENT, Locale } from '../constants';

const EditorialSection: React.FC<{ title: string; subtitle: string; children: React.ReactNode }> = ({ title, subtitle, children }) => (
  <section className="py-24 border-t border-stone-200 first:border-t-0">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-4">
        <div className="sticky top-32">
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-4 font-mono">{subtitle}</p>
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight leading-none">{title}</h2>
        </div>
      </div>
      <div className="md:col-span-8">
        <div className="max-w-prose">{children}</div>
      </div>
    </div>
  </section>
);

const PathDetail: React.FC = () => {
  const params = useParams();
  const lang: Locale = params.lang === 'uz' ? 'uz' : 'en';
  const { id } = params;
  
  const content = CONTENT[lang];
  const t = content.ui;
  const path = content.paths.find((p) => p.id === id);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  if (!path) return <Navigate to={`/${lang}/paths`} />;

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-32 md:py-52">
        <nav className="mb-20">
          <Link to={`/${lang}/paths`} className="group inline-flex items-center gap-2 text-[11px] font-bold text-stone-400 hover:text-stone-900 uppercase tracking-widest transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
            {t.pathDirectory}
          </Link>
        </nav>

        <header className="mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-stone-50 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest">{t.intelligenceAnalysis}: {path.id.toUpperCase()}</span>
          </div>
          <h1 className="text-7xl md:text-[120px] font-bold text-stone-900 tracking-tighter leading-[0.85] mb-8">{path.title}</h1>
          <p className="text-xl md:text-3xl text-stone-400 font-medium leading-relaxed italic max-w-2xl">{path.subtitle} — {t.brutallyHonest}</p>
        </header>

        <div className="space-y-0">
          <EditorialSection title={t.whatItIs} subtitle={t.systemDefinition}>
            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-medium mb-12 text-balance">
              {path.actuallyIs}
            </p>
            {path.types && (
              <div className="grid grid-cols-1 gap-6 mt-12">
                {path.types.map((type, i) => (
                  <div key={i} className={`p-10 rounded-[3rem] border ${type.realistic ? 'bg-white border-stone-200' : 'bg-stone-100 border-stone-200 opacity-80'}`}>
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-2xl font-bold tracking-tight">{type.name}</h4>
                      <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${type.realistic ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {type.realistic ? (lang === 'uz' ? 'REAL' : 'REALISTIC') : (lang === 'uz' ? 'UNREALISTIC' : 'UNREALISTIC')}
                      </span>
                    </div>
                    <p className="text-stone-600 font-medium mb-6">{type.description}</p>
                    <div className="pt-6 border-t border-stone-100">
                      <p className="text-[11px] font-bold text-stone-400 uppercase tracking-widest mb-2">{lang === 'uz' ? 'Xorijliklar uchun haqiqat' : 'Reality for Foreigners'}</p>
                      <p className="text-sm font-bold text-stone-900 italic">"{type.realityForForeigners}"</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </EditorialSection>

          <EditorialSection title={t.profileAnalysis} subtitle={t.strategicFitment}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-stone-900 text-stone-50 rounded-[3rem]">
                <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-8 italic">{t.strategicMoveIf}</h4>
                <ul className="space-y-6">
                  {path.whoFits.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-lg font-bold leading-tight">
                       <span className="text-stone-700">/</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 bg-white border border-stone-200 rounded-[3rem]">
                <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-8 italic">{t.highRiskIf}</h4>
                <ul className="space-y-6">
                  {path.whoShouldAvoid.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-lg font-bold leading-tight text-stone-500">
                       <span className="text-red-200">×</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </EditorialSection>

          {path.languageReality && (
            <EditorialSection title={t.languageReality} subtitle={t.communicationBarrier}>
              <div className="space-y-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-8 bg-stone-100 rounded-3xl">
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">{t.officialRequirement}</p>
                    <p className="text-3xl font-bold text-stone-900">{path.languageReality.official}</p>
                  </div>
                  <div className="p-8 bg-stone-900 text-stone-50 rounded-3xl">
                    <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">{t.practicalMinimum}</p>
                    <p className="text-3xl font-bold text-stone-50">{path.languageReality.practical}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                   {path.languageReality.reasons.map((reason, i) => (
                     <div key={i} className="flex gap-6 p-6 bg-white border border-stone-100 rounded-2xl items-center">
                        <span className="text-stone-200 font-mono text-xl font-bold">{(i+1).toString().padStart(2, '0')}</span>
                        <p className="text-stone-700 font-bold">{reason}</p>
                     </div>
                   ))}
                </div>

                <div className="pt-12 border-t border-stone-100">
                  <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-8">{t.preparationTrajectory}</h4>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {path.languageReality.trajectory.map((step, i) => (
                      <div key={i} className="flex-1 p-6 bg-white border border-stone-200 rounded-2xl text-center">
                        <p className="text-2xl font-bold text-stone-900 mb-1">{step.level}</p>
                        <p className="text-[11px] font-bold text-stone-400 uppercase tracking-widest">{step.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </EditorialSection>
          )}

          {path.fieldCategories && (
            <EditorialSection title={t.fieldAnalysisLabel} subtitle={t.operationalSectors}>
               <div className="space-y-6">
                  {path.fieldCategories.map((field, i) => (
                    <div key={i} className="p-10 bg-white border border-stone-200 rounded-[3rem] group hover:border-stone-900 transition-all duration-500 shadow-sm">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-6 mb-10">
                        <h4 className="text-4xl font-bold tracking-tighter">{field.name}</h4>
                        <div className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] ${field.acceptance === 'SHORTAGE' ? 'bg-green-100 text-green-700' : 'bg-stone-900 text-stone-50'}`}>
                          {t.acceptanceRatingLabel}: {field.acceptance}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                         <div>
                            <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">{t.successRateLabel}</p>
                            <p className="text-xl font-bold text-stone-900">{field.successRate}</p>
                         </div>
                         <div>
                            <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">{t.salaryLabel}</p>
                            <p className="text-xl font-bold text-stone-900">{field.salary}</p>
                         </div>
                         <div className="col-span-2">
                            <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">{t.languageNeedLabel}</p>
                            <p className="text-xl font-bold text-stone-900">{field.languageNeed}</p>
                         </div>
                      </div>
                      <div className="mt-10 pt-10 border-t border-stone-50 grid grid-cols-1 md:grid-cols-2 gap-10">
                         <div>
                            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">{t.whyAccessibleLabel}</p>
                            <p className="text-sm font-medium text-stone-600 leading-relaxed italic">"{field.whyAccessible}"</p>
                         </div>
                         <div>
                            <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-4">{t.challengesLabel}</p>
                            <p className="text-sm font-bold text-red-900/40 leading-relaxed">{field.challenges}</p>
                         </div>
                      </div>
                    </div>
                  ))}
               </div>
            </EditorialSection>
          )}

          {path.financialDeepDive && (
            <EditorialSection title={t.financialLogic} subtitle={t.cashFlowAnalysis}>
              <div className="space-y-16">
                <div className="bg-white rounded-[2.5rem] border border-stone-200 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-stone-50">
                      <tr>
                        <th className="px-10 py-6 text-[10px] font-bold uppercase text-stone-400 tracking-widest">{t.industryLabel}</th>
                        <th className="px-10 py-6 text-[10px] font-bold uppercase text-stone-400 tracking-widest">{t.y1Gross}</th>
                        <th className="px-10 py-6 text-[10px] font-bold uppercase text-stone-400 tracking-widest">{t.y3Gross}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {path.financialDeepDive.monthlySalary.map((row, i) => (
                        <tr key={i}>
                          <td className="px-10 py-6 text-lg font-bold text-stone-900">{row.industry}</td>
                          <td className="px-10 py-6 text-lg font-medium text-stone-600">{row.y1}</td>
                          <td className="px-10 py-6 text-lg font-medium text-stone-900">{row.y3}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-12 bg-red-50 border border-red-100 rounded-[3.5rem]">
                  <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-[0.2em] mb-6 font-mono">{t.deficitWarning}</h4>
                  <p className="text-2xl md:text-3xl font-bold text-red-900 leading-tight italic">
                    "{path.financialDeepDive.mathReality}"
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {path.financialDeepDive.comparison.map((comp, i) => (
                    <div key={i} className="p-10 bg-white border border-stone-200 rounded-[3rem]">
                      <h5 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-6 italic">{comp.label}</h5>
                      <p className="text-xl font-bold text-stone-900 leading-relaxed">{comp.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </EditorialSection>
          )}

          {path.visaLegal && (
            <EditorialSection title={t.visaLegalLabel} subtitle={t.complianceProtocol}>
              <div className="space-y-12">
                 <div className="p-10 bg-stone-900 text-stone-50 rounded-[3.5rem]">
                    <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-6">{t.legalBasis}</h4>
                    <p className="text-3xl font-bold tracking-tight mb-8">{path.visaLegal.residenceAct}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-stone-800">
                       <div>
                          <p className="text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-2">{t.ageLimitsLabel}</p>
                          <p className="text-sm font-medium text-stone-400">{path.visaLegal.ageLimits.rule}</p>
                       </div>
                       <div>
                          <p className="text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-2">{lang === 'uz' ? 'Amaliyot' : 'In Practice'}</p>
                          <p className="text-sm font-bold text-stone-500 italic">{path.visaLegal.ageLimits.practice}</p>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-10 bg-white border border-stone-200 rounded-[3rem]">
                       <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-8">{t.recognitionBarrierLabel}</h4>
                       <ul className="space-y-4">
                          {path.visaLegal.recognitionProcess.map((step, i) => (
                            <li key={i} className="flex gap-4 items-start text-sm font-bold text-stone-600">
                               <span className="text-stone-300 font-mono">0{(i+1)}</span> {step}
                            </li>
                          ))}
                       </ul>
                    </div>
                    <div className="p-10 bg-stone-100 rounded-[3rem] border border-stone-200 flex flex-col justify-between">
                       <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-8">{lang === 'uz' ? 'Viza vaqti' : 'Embassy Timeline'}</h4>
                       <div>
                          <p className="text-5xl font-bold text-stone-900 tracking-tighter mb-4">{path.visaLegal.embassyTimeline}</p>
                          <p className="text-sm font-bold text-stone-400 italic leading-relaxed">{lang === 'uz' ? 'Toshkentdagi elchixona uchun 2024-yilgi o\'rtacha ma\'lumotlar.' : '2024 median data for Embassy in Tashkent.'}</p>
                       </div>
                    </div>
                 </div>
              </div>
            </EditorialSection>
          )}

          {path.downsidesExtended && (
            <EditorialSection title={t.risksDownsides} subtitle={t.darkSide}>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {path.downsidesExtended.map((down, i) => (
                    <div key={i} className="p-10 bg-red-50/20 border border-red-100 rounded-[3rem]">
                       <h4 className="text-[10px] font-bold text-red-300 uppercase tracking-widest mb-4 font-mono">{down.category}</h4>
                       <p className="text-lg font-bold text-red-900/60 leading-relaxed italic">{down.content}</p>
                    </div>
                  ))}
               </div>
            </EditorialSection>
          )}

          {path.myths && (
            <EditorialSection title={t.mythsReality} subtitle={t.filteredTruth}>
              <div className="space-y-4">
                {path.myths.map((item, i) => (
                  <div key={i} className="bg-white border border-stone-200 rounded-[3.5rem] overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-stone-50 p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-stone-200">
                       <span className="text-[9px] font-bold text-red-400 uppercase tracking-widest mb-4">{t.mythLabel}</span>
                       <h4 className="text-2xl font-bold tracking-tight text-stone-400">"{item.myth}"</h4>
                    </div>
                    <div className="md:w-2/3 p-10 flex flex-col justify-center">
                       <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest mb-4">{t.realityLabel}</span>
                       <p className="text-lg font-bold text-stone-900 leading-relaxed">{item.reality}</p>
                    </div>
                  </div>
                ))}
              </div>
            </EditorialSection>
          )}

          <EditorialSection title={t.finalVerdictLabel} subtitle={t.decisionFrameworkLabel}>
            <div className="space-y-12">
               <div className="p-10 bg-stone-900 text-stone-50 rounded-[3.5rem]">
                  <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-10 italic">Summary Metrics</h4>
                  <ul className="space-y-8">
                     {path.strategicAssessment.goodMove.map((item, i) => (
                        <li key={i} className="text-2xl font-bold leading-tight flex gap-6">
                           <span className="text-green-500">✓</span> {item}
                        </li>
                     ))}
                     {path.strategicAssessment.badMove.map((item, i) => (
                        <li key={i} className="text-2xl font-bold leading-tight text-stone-500 flex gap-6">
                           <span className="text-red-400">×</span> {item}
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="pt-12 border-t border-stone-200">
                  <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-12">{t.honestTimelineLabel}</h4>
                  <div className="space-y-12 relative pl-10 border-l border-stone-200">
                     {path.finalTimeline.map((step, i) => (
                       <div key={i} className="relative">
                          <div className="absolute -left-[53px] top-0 w-6 h-6 bg-stone-900 rounded-full border-4 border-stone-50"></div>
                          <h5 className="text-xl font-bold text-stone-900 mb-1">{step.phase}</h5>
                          <p className="text-sm font-bold text-stone-400 uppercase tracking-widest">{step.duration}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </EditorialSection>

          <EditorialSection title={t.disclaimerLabel} subtitle="Notice">
            <div className="p-8 bg-stone-100 border border-stone-200 rounded-3xl">
              <p className="text-sm font-bold text-stone-400 italic leading-relaxed">
                {t.ausbildungDisclaimer}
              </p>
            </div>
          </EditorialSection>

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

          {path.contactEmail && (
            <EditorialSection title={t.strategicInquiry} subtitle={t.contactProtocol}>
              <div className="p-12 bg-white border border-stone-200 rounded-[3.5rem] shadow-sm text-center">
                <p className="text-lg text-stone-500 font-medium mb-12 leading-relaxed italic max-w-xl mx-auto">{path.contactNote}</p>
                {process.env.CONTACT_EMAIL ? (
                  <button onClick={() => handleCopy(path.contactEmail!)} className="mx-auto flex py-6 px-10 bg-stone-900 text-stone-50 rounded-2xl text-[13px] font-bold uppercase tracking-widest border border-stone-100 hover:bg-stone-800 transition-all flex items-center justify-center gap-6 group">
                    <span>{path.contactEmail}</span>
                    <span className="text-[10px] text-stone-500 group-hover:text-stone-400">{copiedEmail === path.contactEmail ? (lang === 'uz' ? 'NUSXALANDI' : 'COPIED') : (lang === 'uz' ? 'KO‘CHIRISH' : 'COPY')}</span>
                  </button>
                ) : (
                  <div className="p-8 bg-stone-50 rounded-3xl border border-stone-100 text-stone-400 text-sm italic">
                    {lang === 'uz' ? 'Bog‘lanish ma’lumotlari live saytda ko‘rsatiladi.' : 'Contact details are shown on the live site.'}
                  </div>
                )}
              </div>
            </EditorialSection>
          )}
        </div>

        <section className="mt-40 pt-20 border-t border-stone-200 text-center">
          <p className="text-stone-400 font-bold text-[11px] uppercase tracking-[0.3em] mb-10">{t.briefingComplete}</p>
          <Link to={`/${lang}/paths`} className="px-12 py-5 bg-stone-900 text-stone-50 rounded-full font-bold text-[13px] uppercase tracking-widest hover:scale-105 transition-all">{t.returnToDirectory}</Link>
        </section>
      </div>
    </div>
  );
};

export default PathDetail;