import React, { useState } from 'react';
import { 
  Sparkles, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Globe,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import logo from "@/assets/logo.png";

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      if (FORMSPREE_ENDPOINT) {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            email, 
            _subject: 'Nuova Iscrizione Newsletter Zeno' 
          })
        });

        if (!res.ok) throw new Error('Invio fallito');
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      console.error(err);
      setError('Si è verificato un errore. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-xs font-normal text-left overflow-hidden">
      {/* Top Banner / CTA Newsletter */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 border-b border-slate-800/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Iscriviti alla newsletter tecnica di Zeno Dynamics
            </h3>
            <p className="text-slate-400 text-xs max-w-md">
              Ricevi mensilmente analisi di settore, aggiornamenti sulle normative ESG, CSRD e release dei modelli di computer vision per i rifiuti.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-start">
            {isSubmitted ? (
              <div className="flex items-center gap-2 text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 rounded-xl">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Grazie! Ti sei iscritto con successo alla newsletter.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
                <div className="relative flex-1 sm:w-72">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Inserisci la tua email aziendale" 
                    className="w-full h-11 pl-10 pr-4 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-500 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="self-start h-11 px-4 sm:px-5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-lg shadow-emerald-500/10"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  ) : (
                    <>
                      <span>Iscriviti</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {error && (
          <p className="text-rose-400 text-[11px] mt-2">{error}</p>
        )}
      </div>

      {/* Main Grid Links */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Col 1: Brand & Dati Aziendali */}
          <div className="lg:col-span-2 space-y-2">
            {/* Logo Wrapper: -ml-10 / -ml-12 bilancia la posizione su schermi piccoli */}
            <div className="flex justify-start items-center -mb-2 -ml-10 sm:-ml-12 md:ml-0">
              <img 
                src={logo} 
                alt="Zeno Dynamics Logo" 
                className="h-28 md:h-56 w-auto object-contain object-left max-w-full" 
              />
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm pt-0">
              Sviluppiamo infrastrutture Hardware Edge AI e modelli di Computer Vision per l'automazione, il tracciamento e la corretta separazione dei rifiuti industriali e urbani.
            </p>

            <div className="pt-2 space-y-2 text-[11px] text-slate-500">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>Sede Operativa: Via Guareschi 2, Scandiano (RE), Italia</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Made in Italy & European Compliance</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-start gap-3 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors" 
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors" 
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>

              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors" 
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Gamma e Soluzioni */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-100">
              Soluzioni & Hardware
            </h4>
            <ul className="space-y-1.5">
              <li><a href="#gamma" className="hover:text-emerald-400 transition-colors">Zeno One</a></li>
              <li><a href="#gamma" className="hover:text-emerald-400 transition-colors">Zeno Industrial</a></li>
              <li><a href="#gamma" className="hover:text-emerald-400 transition-colors">Zeno Enterprise</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Edge AI & Computer Vision</a></li>
              <li><a href="#analytics" className="hover:text-emerald-400 transition-colors">Cloud Analytics ESG</a></li>
            </ul>
          </div>

          {/* Col 3: Normativa & Compliance */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-100">
              Normative & Certificazioni
            </h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Standard UNI EN 14803</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Reportistica CSRD / ESG</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Audit & Registro Tracciabilità</a></li>
            </ul>
          </div>

          {/* Col 4: Azienda & Supporto */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-100">
              Azienda
            </h4>
            <ul className="space-y-1.5">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Chi Siamo</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Bando & Progetti Regionali</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Stato Sistemi Cloud</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contatta il Team Sales</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Supporto Clienti 24/7</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Certificazioni & Badge bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 border-t border-b border-slate-900 bg-slate-950/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-slate-500">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Conforme UNI EN 14803
          </span>
          <span className="hidden md:inline text-slate-700">•</span>
          <span>Ready for CSRD Reporting</span>
          <span className="hidden md:inline text-slate-700">•</span>
          <span>Edge AI Vision Standard v8.4</span>
        </div>
        
        {/* Status Indicator */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300 font-medium">Tutti i sistemi operativi</span>
        </div>
      </div>

      {/* Legal & Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-500">
        <div className="space-y-1 text-left">
          <div>© 2026 Zeno Dynamics S.r.l. - Tutti i diritti riservati.</div>
          <div className="text-[10px] text-slate-600">
            P.IVA 03133180350 | C.F. 03133180350 | PEC: infozeno@pec.it
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-slate-400 justify-start">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          <a href="#" className="hover:text-white transition-colors">Termini di Servizio</a>
          <a href="#" className="hover:text-white transition-colors">Gestione Consensi</a>
        </div>
      </div>
    </footer>
  );
}