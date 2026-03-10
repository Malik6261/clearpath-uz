import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-900">
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-4 md:px-6 ${
        scrolled ? 'py-3' : 'py-6'
      }`}>
        <div className={`max-w-[1400px] mx-auto flex items-center justify-between transition-all duration-300 px-4 md:px-8 py-2 md:py-3 rounded-full border ${
          scrolled ? 'bg-white border-stone-200 shadow-sm' : 'bg-transparent border-transparent'
        }`}>
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center gap-3 group transition-opacity hover:opacity-80">
              <div className="w-6 h-6 bg-stone-900 rounded-sm flex items-center justify-center transform rotate-45 group-hover:rotate-90 transition-transform duration-500">
                <div className="w-2 h-2 bg-stone-50 rounded-full"></div>
              </div>
              <span className="text-lg font-bold tracking-tighter text-stone-900">ClearPath</span>
            </Link>
          </div>
          
          <div className="flex items-center justify-end gap-4 shrink-0">
            <Link to="/explore" className="hidden sm:flex px-4 py-2 text-stone-600 hover:text-stone-900 text-[12px] font-bold uppercase tracking-widest transition-colors">
              Ko'proq o'rganish
            </Link>
            <a href="mailto:abdumalikkomilov2003@gmail.com" className="px-6 py-2 bg-stone-900 border border-stone-900 text-stone-50 text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-stone-800 transition-all duration-300 shadow-sm min-h-[36px] flex items-center whitespace-nowrap">
              Malik bilan bog'lanish
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-24">{children}</main>

      <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-4 h-4 bg-stone-500 rounded-sm transform rotate-45"></div>
            <span className="text-lg font-bold tracking-tighter text-stone-50">ClearPath — clearpath.uz | © 2026</span>
          </div>
          <p className="text-sm font-medium">
            Muammo? → <a href="mailto:abdumalikkomilov2003@gmail.com" className="text-stone-300 hover:text-white transition-colors">abdumalikkomilov2003@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;