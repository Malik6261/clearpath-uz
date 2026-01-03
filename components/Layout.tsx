import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { CONTENT, Locale } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const { lang } = useParams();
  const navigate = useNavigate();
  
  // Safe language fallback logic
  const safeLang: Locale = (lang === 'uz' || lang === 'en') ? (lang as Locale) : 'uz';
  const content = CONTENT[safeLang] || CONTENT.uz;
  const t = content.ui;

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // SEO & Meta Injection Logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    
    // Determine current page key for metadata lookup
    const segments = pathname.split('/').filter(Boolean);
    const pageKey = segments.length > 1 ? segments[1] : 'home';
    const metadata = t.seo?.[pageKey] || t.seo?.home;

    if (metadata) {
      document.title = metadata.title;
      document.documentElement.lang = safeLang;
      
      // Meta description
      let descTag = document.querySelector('meta[name="description"]');
      if (descTag) descTag.setAttribute('content', metadata.desc);

      // OG Tags
      const canonicalUrl = `https://clearpath.uz/${safeLang}/${segments.slice(1).join('/')}`;
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.desc);
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
      
      // Canonical link
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute('href', canonicalUrl);

      // Hreflang Tags
      const pathPart = segments.slice(1).join('/');
      ['en', 'uz'].forEach(l => {
        let hreflangTag = document.querySelector(`link[hreflang="${l}"]`);
        if (!hreflangTag) {
          hreflangTag = document.createElement('link');
          hreflangTag.setAttribute('rel', 'alternate');
          hreflangTag.setAttribute('hreflang', l);
          document.head.appendChild(hreflangTag);
        }
        hreflangTag.setAttribute('href', `https://clearpath.uz/${l}/${pathPart}`);
      });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, safeLang, t.seo]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const academicLinks = [
    { name: t.academicLibrary, path: 'majors' },
    { name: t.exams, path: 'exams' },
    { name: t.scholarshipsLabel, path: 'scholarships' },
  ];

  const practicalLinks = [
    { name: t.practicalPaths, path: 'paths' },
  ];

  const toolsLinks = [
    { name: t.resourcesLabel, path: 'resources' },
    { name: t.gapYear, path: 'gap-year' },
  ];

  const switchLanguage = (newLang: Locale) => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0) {
      if (segments[0] === 'en' || segments[0] === 'uz') {
        segments[0] = newLang;
      } else {
        segments.unshift(newLang);
      }
      navigate(`/${segments.join('/')}`);
    } else {
      navigate(`/${newLang}/`);
    }
  };

  const NavLink = ({ to, children, soon }: { to: string; children: React.ReactNode; soon?: boolean }) => {
    const isActive = pathname.includes(to);
    if (soon) {
      return (
        <div className="flex items-center gap-2 px-4 py-2 text-stone-300 cursor-not-allowed select-none min-h-[44px] shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-[11px] font-bold uppercase tracking-widest leading-none flex items-center gap-1.5 whitespace-nowrap">
            {children} <span className="text-[9px] opacity-60 normal-case font-medium">({t.soon})</span>
          </span>
        </div>
      );
    }
    return (
      <Link
        to={`/${safeLang}/${to}`}
        className={`px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all min-h-[44px] flex items-center whitespace-nowrap shrink-0 ${
          isActive ? 'bg-stone-900 text-stone-50' : 'text-stone-400 hover:text-stone-900'
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-4 md:px-6 ${
        scrolled ? 'py-3' : 'py-6'
      }`}>
        <div className={`max-w-[1400px] mx-auto flex items-center justify-between transition-all duration-300 px-4 md:px-8 py-2 md:py-3 rounded-full border ${
          scrolled ? 'bg-white border-stone-200 shadow-sm' : 'bg-transparent border-transparent'
        }`}>
          <div className="flex items-center shrink-0 min-w-[140px] md:min-w-[180px]">
            <Link to={`/${safeLang}/`} className="flex items-center gap-3 group transition-opacity hover:opacity-80" title={t.backToOverview}>
              <div className="w-6 h-6 bg-stone-900 rounded-sm flex items-center justify-center transform rotate-45 group-hover:rotate-90 transition-transform duration-500">
                <div className="w-2 h-2 bg-stone-50 rounded-full"></div>
              </div>
              <span className="text-lg font-bold tracking-tighter text-stone-900">ClearPath</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex flex-1 items-center px-4 overflow-x-auto no-scrollbar min-w-0 h-full">
            <div className="flex items-center gap-2 mx-auto shrink-0 py-1">
              <div className="flex items-center bg-stone-100/50 p-1 rounded-full border border-stone-100 shrink-0">
                {academicLinks.map((link) => (
                  <NavLink key={link.path} to={link.path}>{link.name}</NavLink>
                ))}
              </div>
              <div className="w-px h-4 bg-stone-200 mx-1 shrink-0"></div>
              <div className="flex items-center shrink-0">
                <NavLink to={practicalLinks[0].path}>{practicalLinks[0].name}</NavLink>
              </div>
              <div className="w-px h-4 bg-stone-200 mx-1 shrink-0"></div>
              <div className="flex items-center gap-1 shrink-0">
                {toolsLinks.map((link) => (
                  <NavLink key={link.path} to={link.path}>{link.name}</NavLink>
                ))}
                <NavLink to="#" soon>{t.plannerLabel}</NavLink>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 shrink-0 min-w-[140px] md:min-w-[180px]">
            <div className="flex items-center bg-stone-100 p-1 rounded-full border border-stone-200 h-[36px] shrink-0">
              <button 
                onClick={() => switchLanguage('en')} 
                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all h-full flex items-center ${safeLang === 'en' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-400'}`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button 
                onClick={() => switchLanguage('uz')} 
                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all h-full flex items-center ${safeLang === 'uz' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-400'}`}
                aria-label="Switch to Uzbek"
              >
                UZ
              </button>
            </div>

            <Link to={`/${safeLang}/contact`} className="hidden md:flex px-6 py-2 bg-white border border-stone-200 text-stone-900 text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-stone-900 hover:text-white transition-all duration-300 shadow-sm min-h-[36px] items-center whitespace-nowrap shrink-0">
              {t.inquiry || 'Contact'}
            </Link>

            <button 
              className="lg:hidden p-2 text-stone-900 hover:bg-stone-100 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-[90] lg:hidden transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-stone-900/10" onClick={() => setIsMenuOpen(false)} />
        <div className="absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col pt-32 px-10 pb-12">
          <div className="flex-grow space-y-8 overflow-y-auto">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-stone-300 uppercase tracking-[0.3em] font-mono">{t.academicHeader}</span>
              <div className="flex flex-col gap-2">
                {academicLinks.map((link) => (
                  <Link key={link.path} to={`/${safeLang}/${link.path}`} className="text-2xl font-bold text-stone-900 hover:translate-x-2 transition-transform">{link.name}</Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-bold text-stone-300 uppercase tracking-[0.3em] font-mono">{t.practicalHeader}</span>
              <div className="flex flex-col gap-2">
                <Link to={`/${safeLang}/${practicalLinks[0].path}`} className="text-2xl font-bold text-stone-900 hover:translate-x-2 transition-transform">{practicalLinks[0].name}</Link>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-bold text-stone-300 uppercase tracking-[0.3em] font-mono">{t.toolsHeader}</span>
              <div className="flex flex-col gap-2">
                {toolsLinks.map((link) => (
                  <Link key={link.path} to={`/${safeLang}/${link.path}`} className="text-2xl font-bold text-stone-900 hover:translate-x-2 transition-transform">{link.name}</Link>
                ))}
                <div className="flex items-center gap-2 text-stone-300 select-none">
                  <span className="text-2xl font-bold">{t.plannerLabel}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-200">{t.soon}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto space-y-6 pt-10 border-t border-stone-100">
            <Link to={`/${safeLang}/contact`} className="w-full py-4 bg-stone-900 text-stone-50 text-[13px] font-bold uppercase tracking-widest rounded-xl text-center block">
              {t.inquiry}
            </Link>
          </div>
        </div>
      </div>

      <main className="flex-grow pt-16">{children}</main>

      <footer className="bg-stone-900 text-stone-400 py-32 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-6">
              <Link to={`/${safeLang}/`} className="text-3xl font-bold tracking-tighter text-stone-50 mb-8 block">ClearPath</Link>
              <p className="text-lg text-stone-400 max-w-sm leading-relaxed font-medium">{t.footerTagline}</p>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-[0.3em] mb-8">{t.footerNavHeader}</h4>
              <ul className="space-y-4">
                <li><Link to={`/${safeLang}/majors`} className="text-sm font-semibold hover:text-stone-50 transition-colors">{t.academicLibrary}</Link></li>
                <li><Link to={`/${safeLang}/paths`} className="text-sm font-semibold hover:text-stone-50 transition-colors">{t.practicalPaths}</Link></li>
                <li><Link to={`/${safeLang}/exams`} className="text-sm font-semibold hover:text-stone-50 transition-colors">{t.exams}</Link></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-[0.3em] mb-8">{t.footerInquiryHeader}</h4>
              <ul className="space-y-4">
                <li><Link to={`/${safeLang}/contact`} className="text-sm font-semibold hover:text-stone-50 transition-colors">{t.inquiry}</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest">
            <div className="flex items-center gap-6">
              <p>© {new Date().getFullYear()} {t.footerCopyright}</p>
              <span className="w-1 h-1 bg-stone-700 rounded-full"></span>
              <p>{t.footerLocation}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;