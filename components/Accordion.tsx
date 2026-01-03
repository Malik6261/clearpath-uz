
import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, subtitle, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border-b border-stone-200 transition-all duration-500 ${isOpen ? 'bg-white' : 'bg-transparent'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-10 flex items-center justify-between text-left group px-6"
      >
        <div className="flex flex-col gap-2">
          {subtitle && (
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest font-mono">
              {subtitle}
            </span>
          )}
          <h3 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
            {title}
          </h3>
        </div>
        <div className={`w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-stone-900 border-stone-900 text-stone-50 rotate-45' : 'text-stone-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100 pb-16' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 prose prose-stone max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
