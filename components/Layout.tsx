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
            <button onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-2 bg-stone-900 border border-stone-900 text-stone-50 text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-stone-800 transition-all duration-300 shadow-sm min-h-[36px] flex items-center whitespace-nowrap">
              Malik bilan bog'lanish
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-24">{children}</main>

      <footer id="footer" className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-4 h-4 bg-stone-500 rounded-sm transform rotate-45"></div>
            <span className="text-lg font-bold tracking-tighter text-stone-50">ClearPath — clearpath.uz © 2026</span>
          </div>
          
          <div className="space-y-6">
            <p className="text-sm font-bold text-stone-300 uppercase tracking-widest mb-4">Malik bilan bog'lanish:</p>
            
            <div className="flex flex-col items-center gap-4 text-sm font-medium">
              <a href="https://t.me/malik_labs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.18-.08-.05-.19-.02-.27 0-.11.03-1.84 1.18-5.21 3.45-.49.34-.94.5-1.35.49-.45-.01-1.31-.25-1.95-.46-.79-.26-1.41-.4-1.35-.85.03-.23.34-.47.93-.72 3.65-1.59 6.08-2.64 7.31-3.15 3.48-1.45 4.2-1.7 4.67-1.71.1 0 .33.02.48.14.12.1.17.24.18.35-.01.07-.01.16-.03.26z"/></svg>
                Telegram: @malik_labs
              </a>
              
              <div className="flex items-center gap-2">
                <a href="mailto:maliklabs.work@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Email: maliklabs.work@gmail.com
                </a>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('maliklabs.work@gmail.com');
                  }}
                  className="p-1.5 bg-stone-800 hover:bg-stone-700 rounded-md text-stone-400 hover:text-white transition-colors"
                  title="Nusxa olish"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                </button>
              </div>
              
              <a href="https://wa.me/998909416261" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21.493l-3.125-.001-.001-3.125c-4.832-.001-8.75-3.918-8.75-8.75s3.918-8.75 8.75-8.75 8.75 3.918 8.75 8.75-3.918 8.75-8.75 8.75zm0-16.5c-4.274 0-7.75 3.476-7.75 7.75 0 1.346.347 2.613.957 3.714l1.106 1.996-1.106 3.428 3.428-1.106 1.996 1.106c1.101.61 2.368.957 3.714.957 4.274 0 7.75-3.476 7.75-7.75s-3.476-7.75-7.75-7.75zm3.89 10.37c-.214-.107-1.266-.625-1.462-.696-.196-.071-.339-.107-.482.107-.143.214-.554.696-.679.839-.125.143-.25.161-.464.054-.214-.107-.903-.333-1.719-1.061-.635-.566-1.064-1.266-1.189-1.48-.125-.214-.013-.33.094-.437.096-.096.214-.25.321-.375.107-.125.143-.214.214-.357.071-.143.036-.268-.018-.375-.054-.107-.482-1.161-.661-1.589-.175-.418-.353-.362-.482-.368-.125-.006-.268-.006-.411-.006-.143 0-.375.054-.571.268-.196.214-.75.732-.75 1.786 0 1.054.768 2.071.875 2.214.107.143 1.51 2.304 3.66 3.232.512.221.912.353 1.224.452.514.163.982.14 1.351.085.413-.062 1.266-.518 1.445-1.018.179-.5.179-.929.125-1.018-.054-.089-.196-.143-.411-.25z"/></svg>
                WhatsApp: +998 90 941 62 61
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-stone-800">
            <a href="https://maliklabs.online" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-stone-500 hover:text-stone-300 transition-colors">
              Malik tomonidan yaratilgan → maliklabs.online
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;