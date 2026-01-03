import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CONTENT, Locale } from '../constants';

const EditorialSection: React.FC<{ title: string; subtitle: string; children: React.ReactNode }> = ({ title, subtitle, children }) => (
  <section className="py-20 border-t border-stone-200 first:border-t-0">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-4">
        <div className="sticky top-32">
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-4 font-mono">
            {subtitle}
          </p>
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight leading-none">
            {title}
          </h2>
        </div>
      </div>
      <div className="md:col-span-8">
        {children}
      </div>
    </div>
  </section>
);

const ExamDetail: React.FC = () => {
  const params = useParams();
  const lang: Locale = params.lang === 'uz' ? 'uz' : 'en';
  const { id } = params;
  const content = CONTENT[lang];
  const t = content.ui;
  const exam = content.exams.find((e) => e.id === id);

  if (!exam) return <Navigate to={`/${lang}/exams`} />;

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-32 md:py-52">
        <nav className="mb-20">
          <Link to={`/${lang}/exams`} className="group inline-flex items-center gap-2 text-[11px] font-bold text-stone-400 hover:text-stone-900 uppercase tracking-widest transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
            {t.examDirectory}
          </Link>
        </nav>

        <header className="mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-stone-50 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest">{t.metricAnalysisFile}</span>
          </div>
          <h1 className="text-7xl md:text-[120px] font-bold text-stone-900 tracking-tighter leading-[0.85] mb-8">
            {exam.title}
          </h1>
          <p className="text-xl md:text-3xl text-stone-400 font-medium leading-relaxed italic max-w-2xl">
            {exam.shortDescription}
          </p>
        </header>

        <div className="space-y-0">
          <EditorialSection title={t.strategicRelevance} subtitle={t.whoNeedsThis}>
            <div className="space-y-4">
              {exam.whoNeeds.map((item, i) => (
                <div key={i} className="flex gap-4 p-8 bg-white border border-stone-100 rounded-3xl items-start">
                  <div className="w-1.5 h-1.5 bg-stone-900 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-lg font-bold text-stone-800 leading-tight">{item}</p>
                </div>
              ))}
            </div>
          </EditorialSection>

          <EditorialSection title={t.resourceProtection} subtitle={t.whoShouldSkip}>
            <div className="space-y-4">
              {exam.whoDoesNot.map((item, i) => (
                <div key={i} className="flex gap-4 p-8 bg-red-50/30 border border-red-100 rounded-3xl items-start">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-lg font-bold text-red-900 leading-tight italic">{item}</p>
                </div>
              ))}
            </div>
          </EditorialSection>

          <EditorialSection title={t.benchmarkTargets} subtitle={t.scoreThresholds}>
            <div className="bg-white rounded-[2.5rem] border border-stone-200 overflow-hidden shadow-sm">
              {exam.scoreRanges.map((range, i) => (
                <div key={i} className="p-10 flex flex-col sm:flex-row justify-between sm:items-center gap-6 border-b border-stone-100 last:border-0">
                  <div>
                    <p className="text-[10px] font-bold uppercase text-stone-400 tracking-[0.2em] mb-2">{range.type}</p>
                    <p className="text-4xl font-bold text-stone-900 tracking-tighter">{range.range}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-sm font-bold text-stone-500 italic leading-tight max-w-[150px]">"{range.competitiveness}"</p>
                  </div>
                </div>
              ))}
            </div>
          </EditorialSection>

          {/* New Score Guidance Section */}
          {exam.scoreMapping && (
            <EditorialSection title={t.scoreGuidanceLabel} subtitle="Strategy">
              <div className="mb-10 p-8 bg-stone-100/50 border border-stone-100 rounded-3xl">
                <p className="text-sm font-bold text-stone-400 italic leading-relaxed">
                  * {t.scoreGuidanceDisclaimer}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {exam.scoreMapping.map((map, i) => (
                  <div key={i} className="p-8 bg-white border border-stone-100 rounded-3xl flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <span className="text-2xl font-bold text-stone-900 whitespace-nowrap">{map.range}</span>
                    <p className="text-sm font-semibold text-stone-500 italic sm:text-right max-w-[400px] leading-relaxed">{map.focus}</p>
                  </div>
                ))}
              </div>
            </EditorialSection>
          )}

          <EditorialSection title={t.exitStrategy} subtitle={t.whenToStop}>
            <div className="p-12 bg-stone-900 text-stone-50 rounded-[3.5rem]">
              <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-10 italic">{t.discontinueIf}</p>
              <ul className="space-y-8">
                {exam.whenToStop.map((s, i) => (
                  <li key={i} className="text-xl md:text-2xl font-bold leading-tight flex gap-6">
                    <span className="text-stone-700 select-none">/</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </EditorialSection>

          {/* Official Materials */}
          {exam.officialMaterials && (
            <EditorialSection title={t.officialMaterialsLabel} subtitle="Core">
              <div className="mb-6 p-6 bg-stone-100/50 rounded-2xl border border-stone-100">
                <p className="text-sm font-bold text-stone-500 italic">{t.officialReliabilityNote}</p>
              </div>
              <div className="space-y-6">
                {exam.officialMaterials.map((res, i) => (
                  <PrepResourceCard key={i} res={res} t={t} />
                ))}
              </div>
            </EditorialSection>
          )}

          {/* Prep Books */}
          {exam.commonlyUsedBooks && (
            <EditorialSection title={t.prepBooksLabel} subtitle="Resources">
              <div className="grid grid-cols-1 gap-4">
                {exam.commonlyUsedBooks.map((book, i) => (
                  <div key={i} className="p-8 bg-white border border-stone-100 rounded-3xl flex items-center gap-6 group hover:border-stone-900 transition-all duration-300">
                    <span className="text-stone-200 font-mono text-xl font-bold group-hover:text-stone-900 transition-colors">0{(i+1)}</span>
                    <p className="text-lg font-bold text-stone-700">{book}</p>
                  </div>
                ))}
              </div>
            </EditorialSection>
          )}

          {/* Additional Platforms */}
          {exam.additionalPlatforms && (
            <EditorialSection title={t.additionalPlatformsLabel} subtitle="Practice">
              <div className="space-y-6">
                {exam.additionalPlatforms.map((res, i) => (
                  <PrepResourceCard key={i} res={res} t={t} />
                ))}
              </div>
            </EditorialSection>
          )}

          {/* Desmos Section */}
          {exam.desmosGuidance && (
            <EditorialSection title={t.desmosTitle} subtitle="Tools">
              <div className="p-10 bg-white border border-stone-200 rounded-[3rem] group hover:border-stone-900 transition-all">
                <p className="text-lg font-bold text-stone-800 leading-relaxed mb-8">{exam.desmosGuidance.description}</p>
                {exam.desmosGuidance.link && (
                  <a 
                    href={exam.desmosGuidance.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex py-4 px-8 bg-stone-900 text-stone-50 rounded-2xl text-[12px] font-bold uppercase tracking-widest hover:scale-105 transition-all gap-4 items-center"
                  >
                    Watch Best Desmos Guide
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                )}
              </div>
            </EditorialSection>
          )}

          {/* YouTube Section */}
          {exam.youtubeChannels && (
            <EditorialSection title={t.youtubeTitle} subtitle="Video">
              <p className="text-stone-400 font-bold text-sm italic mb-10">{t.youtubeNote}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {exam.youtubeChannels.map((ch, i) => (
                  <div key={i} className="p-8 bg-white border border-stone-100 rounded-3xl">
                    <h4 className="text-xl font-bold text-stone-900 mb-2 tracking-tight">{ch.name}</h4>
                    <p className="text-xs font-semibold text-stone-500 leading-relaxed">{ch.description}</p>
                  </div>
                ))}
              </div>
            </EditorialSection>
          )}

          <EditorialSection title={t.executionAssets} subtitle={t.vettedResources}>
             <div className="space-y-6">
                {exam.resources.map((res, i) => (
                  <PrepResourceCard key={i} res={res} t={t} />
                ))}
             </div>
          </EditorialSection>

          <EditorialSection title="Common Mistakes" subtitle="Analysis">
            <div className="space-y-4">
              {exam.commonMistakes.map((mistake, i) => (
                <div key={i} className="flex gap-6 p-8 bg-white border border-stone-100 rounded-3xl items-start">
                  <span className="text-red-400 font-bold">/</span>
                  <p className="text-lg font-bold text-stone-600 leading-tight">{mistake}</p>
                </div>
              ))}
            </div>
          </EditorialSection>
        </div>

        <section className="mt-40 pt-20 border-t border-stone-200 text-center">
          <p className="text-stone-400 font-bold text-[11px] uppercase tracking-[0.3em] mb-10">{t.briefingComplete}</p>
          <Link to={`/${lang}/exams`} className="px-12 py-5 bg-stone-900 text-stone-50 rounded-full font-bold text-[13px] uppercase tracking-widest hover:scale-105 transition-all">
            {t.returnToDirectory}
          </Link>
        </section>
      </div>
    </div>
  );
};

const PrepResourceCard: React.FC<{ res: any, t: any }> = ({ res, t }) => (
  <a 
    href={res.url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group p-12 bg-white border border-stone-200 rounded-[3rem] hover:border-stone-900 transition-all flex flex-col justify-between min-h-[250px]"
  >
    <div>
      <div className="flex justify-between items-start mb-8">
        <h4 className="text-3xl font-bold tracking-tight">{res.name}</h4>
        <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-stone-50 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
      <p className="text-stone-500 text-lg font-medium italic mb-10 leading-relaxed">{res.why}</p>
    </div>
    <div className="pt-8 border-t border-stone-50">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-400 mb-2">{t.avoidIf}</p>
      <p className="text-sm font-bold text-stone-400">{res.notFor}</p>
    </div>
  </a>
);

export default ExamDetail;