
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Locale } from '../constants';

const Contact: React.FC = () => {
  const params = useParams();
  const lang: Locale = params.lang === 'uz' ? 'uz' : 'en';
  const [emailRevealed, setEmailRevealed] = useState(false);
  
  // Environment variable for production, placeholder for open-source
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
  
  const placeholder = lang === 'uz' 
    ? 'Bog‘lanish ma’lumotlari live saytda ko‘rsatiladi.' 
    : 'Contact details are shown on the live site.';

  const handleEmailClick = () => {
    if (CONTACT_EMAIL) {
      setEmailRevealed(true);
      navigator.clipboard.writeText(CONTACT_EMAIL);
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-32 md:py-52">
        <header className="mb-24 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Communication Protocol</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tighter leading-none mb-8">Questions & Feedback.</h1>
          <p className="text-xl text-stone-500 font-medium leading-relaxed">
            While our guide is designed to be comprehensive, we understand that unique situations require direct human insight.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          {/* Ground Rules Card */}
          <div className="md:col-span-5 p-12 bg-white border border-stone-200 rounded-[3rem] shadow-sm">
            <h3 className="text-2xl font-bold mb-10 tracking-tight text-stone-900 underline decoration-stone-100 underline-offset-8">Inquiry Guidelines</h3>
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-4 font-mono">Acceptable Cases</h4>
                <ul className="space-y-4 text-sm font-bold text-stone-700">
                  <li className="flex gap-4 items-start"><span className="text-stone-300">/</span> Complex multi-path decisions not covered here</li>
                  <li className="flex gap-4 items-start"><span className="text-stone-300">/</span> Contradictory information in institutional policies</li>
                  <li className="flex gap-4 items-start"><span className="text-stone-300">/</span> Reporting outdated or erroneous data</li>
                  <li className="flex gap-4 items-start"><span className="text-stone-300">/</span> Critical feedback on guide structure</li>
                </ul>
              </div>
              <div className="pt-10 border-t border-stone-100">
                <h4 className="text-[10px] font-bold text-red-300 uppercase tracking-[0.2em] mb-4 font-mono">Out of Scope</h4>
                <ul className="space-y-4 text-sm font-bold text-stone-400">
                  <li className="flex gap-4 items-start"><span className="text-red-100">×</span> Questions already answered in the library</li>
                  <li className="flex gap-4 items-start"><span className="text-red-100">×</span> Personal tutoring or homework assistance</li>
                  <li className="flex gap-4 items-start"><span className="text-red-100">×</span> Requests for admissions guarantees</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Methods Card */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="p-12 md:p-20 bg-stone-900 text-stone-50 rounded-[4rem] relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">Direct Access.</h3>
                 <p className="text-stone-400 text-lg font-medium mb-12 leading-relaxed">
                    Inquiries are handled personally. Please ensure your message is concise and focused on strategic clarification.
                 </p>
                 
                 <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    {CONTACT_EMAIL ? (
                      <button 
                        onClick={handleEmailClick}
                        className="flex-1 py-5 px-8 bg-stone-50 text-stone-900 rounded-2xl text-center font-bold text-[13px] uppercase tracking-widest hover:bg-stone-200 transition-all flex items-center justify-center gap-3 group"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="select-all">
                          {emailRevealed ? CONTACT_EMAIL : 'Reveal Email'}
                        </span>
                        {emailRevealed && (
                          <span className="text-[9px] text-stone-400 normal-case font-normal ml-2 opacity-0 group-hover:opacity-100 transition-opacity">(Copied)</span>
                        )}
                      </button>
                    ) : (
                      <div className="flex-1 py-5 px-8 bg-stone-800/50 text-stone-400 border border-stone-700/50 rounded-2xl text-center font-bold text-[11px] uppercase tracking-widest italic">
                        {placeholder}
                      </div>
                    )}
                    
                    <a 
                      href="https://wa.me/998909416261" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 py-5 px-8 bg-stone-800 text-stone-50 border border-stone-700 rounded-2xl text-center font-bold text-[13px] uppercase tracking-widest hover:bg-stone-700 transition-all flex items-center justify-center gap-3"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.605 6.06L0 24l6.117-1.605a11.83 11.83 0 005.925 1.587h.005c6.635 0 12.032-5.396 12.035-12.03a11.85 11.85 0 00-3.527-8.506z"/>
                      </svg>
                      WhatsApp
                    </a>
                 </div>

                 <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-stone-800 gap-4">
                    <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">
                       Priority response: Professional inquiries
                    </p>
                    <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">
                       GMT+5 Tashkent
                    </p>
                 </div>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800/30 rounded-full translate-x-1/3 -translate-y-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
