import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo_inv.png"; 
import { useLanguage } from '@/i18n/useLanguage.jsx';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const panelRef = useRef(null);
  const languageRef = useRef(null);
  const { language, setLanguage, languages, t } = useLanguage();

  const handleClose = () => {
    setMobileOpen(false);
    setTimeout(() => setIsMounted(false), 320);
  };

  useEffect(() => {
    const closeLanguageMenu = (event) => {
      if (!languageRef.current?.contains(event.target)) setLanguageOpen(false);
    };
    document.addEventListener('mousedown', closeLanguageMenu);
    return () => document.removeEventListener('mousedown', closeLanguageMenu);
  }, []);

  useEffect(() => {
    let cleanup = () => {};
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => panelRef.current?.focus(), 80);
      const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
      window.addEventListener('keydown', onKey);
      cleanup = () => window.removeEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      cleanup();
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleOpen = () => {
    setIsMounted(true);
    requestAnimationFrame(() => setMobileOpen(true));
  };

  return (
    <header className="border-b border-slate-100 bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <div className="w-full pl-0 pr-4 md:pl-0 md:pr-6 lg:pl-6 lg:pr-8 py-3 flex items-center justify-between">
        
        {/* LOGO AZIENDALE */}
        <Link to="/Home" className="flex items-center cursor-pointer group z-10">
          <img 
            src={logo} 
            alt="Zeno Dynamics Logo" 
            className="h-20 md:h-14 lg:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105 max-w-[260px]" 
          />
        </Link>

        {/* NAVIGAZIONE PRINCIPALE */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium h-full">
          <Link to="/Home" className="relative text-slate-600 hover:text-emerald-600 transition-colors h-full flex items-center after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-emerald-500 after:transition-all after:duration-200">
            Home
          </Link>
          <Link to="/about" className="relative text-slate-600 hover:text-emerald-600 transition-colors h-full flex items-center after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-emerald-500 after:transition-all after:duration-200">
            About
          </Link>
          <Link to="/servizi" className="relative text-slate-600 hover:text-emerald-600 transition-colors h-full flex items-center after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-emerald-500 after:transition-all after:duration-200">
            Servizi
          </Link>
          <Link to="/contatti" className="relative text-slate-600 hover:text-emerald-600 transition-colors h-full flex items-center after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-emerald-500 after:transition-all after:duration-200">
            Contatti
          </Link>
        </nav>

        {/* SELETTORE LINGUA */}
        <div ref={languageRef} className="relative hidden md:block" data-language-menu>
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={languageOpen}
            onClick={() => setLanguageOpen((open) => !open)}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-700 shadow-sm transition-colors hover:border-emerald-400 hover:text-emerald-700"
          >
            {language}
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${languageOpen ? 'rotate-180' : ''}`} />
          </button>
          {languageOpen && (
            <div role="listbox" className="absolute right-0 top-full z-50 mt-2 min-w-32 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  role="option"
                  aria-selected={language === item.code}
                  onClick={() => { setLanguage(item.code); setLanguageOpen(false); }}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-xs font-medium transition-colors ${language === item.code ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <button aria-label="Open menu" onClick={handleOpen} className="p-2 rounded-md bg-white/70 hover:bg-white/80 border border-slate-200">
            <Menu className="w-5 h-5 text-slate-700" />
          </button>
        </div>

        {/* Mobile drawer */}
        {isMounted && createPortal(
          <div className={`fixed inset-0 z-[9999] transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`} onClick={handleClose} />
            <div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
              className={`absolute right-0 top-0 w-full sm:w-3/4 max-w-xs h-full bg-white shadow-xl px-4 py-5 overflow-auto text-slate-900 transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
              {/* Header Drawer: Logo spostato leggermente meno a sinistra con -ml-7 */}
              <div className="flex items-center justify-between mb-4 -ml-7">
                <img src={logo} alt="logo" className="h-20 w-auto max-w-[240px] object-contain" />
                <button onClick={handleClose} className="p-2 rounded-md hover:bg-slate-100 shrink-0">
                  <X className="w-5 h-5 text-slate-700" />
                </button>
              </div>

              {/* Navigazione Drawer */}
              <nav className="flex flex-col gap-1">
                <Link to="/Home" onClick={handleClose} className="text-slate-700 font-medium py-1.5 px-2 rounded-md hover:bg-slate-50 transition-colors">Home</Link>
                <Link to="/about" onClick={handleClose} className="text-slate-700 font-medium py-1.5 px-2 rounded-md hover:bg-slate-50 transition-colors">About</Link>
                <Link to="/servizi" onClick={handleClose} className="text-slate-700 font-medium py-1.5 px-2 rounded-md hover:bg-slate-50 transition-colors">Servizi</Link>
                <Link to="/contatti" onClick={handleClose} className="text-slate-700 font-medium py-1.5 px-2 rounded-md hover:bg-slate-50 transition-colors">Contatti</Link>
              </nav>

              {/* Selettore lingua mobile */}
              <div className="mt-4 border-t border-slate-100 pt-3" data-language-menu>
                <p className="px-2 pb-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">{t('Lingua')}</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => { setLanguage(item.code); handleClose(); }}
                      className={`rounded-md border px-3 py-2 text-left text-xs font-semibold ${language === item.code ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </header>
  );
}