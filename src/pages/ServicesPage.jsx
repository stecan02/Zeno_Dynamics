import { 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  LayoutDashboard, 
  Package, 
  Eye, 
  Zap, 
  Radio, 
  ShieldCheck, 
  CheckCircle2,
  ChevronRight
} from "lucide-react"
import { Link } from "react-router-dom"

export function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-emerald-500 selection:text-slate-950 overflow-hidden">
      
      {/* Background FX Generale */}
      <div className="absolute inset-0 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        
        {/* ========================================================================= */}
        {/* PARTE 1: PANORAMICA FUORI DAL BOX */}
        {/* ========================================================================= */}
        <div className="space-y-12 rounded-none border-0 bg-transparent p-0">
          
          {/* Header Principale */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3.5 py-1 text-xs font-medium tracking-wide text-emerald-700 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              Ecosistema Zeno Dynamics
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              Tecnologia autonoma per lo <span className="text-emerald-700">smaltimento smart</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              Un'infrastruttura integrata a 3 livelli: hardware AI, piattaforma cloud analitica e consumabili ad alte prestazioni.
            </p>
          </div>

          {/* Grid 3 Schede Panoramica (Fluttuanti senza box contenitore) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Zeno */}
            <a 
              href="#zeno" 
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-800/80 bg-[radial-gradient(circle_at_top,#0f172a_0%,#0b1120_35%,#020817_100%)] p-6 hover:border-emerald-500/60 hover:shadow-[0_22px_48px_rgba(16,185,129,0.18)] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-[0_14px_36px_rgba(2,6,23,0.4)]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-emerald-500/12 text-emerald-300 border border-emerald-500/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-200 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">01. HARDWARE</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition">Zeno Smart Station</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Stazione autonoma con Computer Vision per la classificazione e la separazione dei rifiuti all'origine.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-emerald-200 font-semibold pt-4 border-t border-slate-700/80">
                <span>Vedi Specifiche Hardware</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 2: Kore */}
            <a 
              href="#kore" 
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-800/80 bg-[radial-gradient(circle_at_top,#111827_0%,#0b1120_35%,#020817_100%)] p-6 hover:border-cyan-500/60 hover:shadow-[0_22px_48px_rgba(34,211,238,0.18)] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-[0_14px_36px_rgba(2,6,23,0.4)]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/12 text-cyan-300 border border-cyan-500/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <LayoutDashboard className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-200 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">02. CLOUD</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">Kore Dashboard</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Piattaforma analitica in tempo reale per telemetria, stato flotta ed efficientamento dei percorsi.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-cyan-200 font-semibold pt-4 border-t border-slate-700/80">
                <span>Vedi Piattaforma Cloud</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 3: W-Bag */}
            <a 
              href="#w-bag" 
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-800/80 bg-[radial-gradient(circle_at_top,#111827_0%,#0b1120_35%,#020817_100%)] p-6 hover:border-amber-500/60 hover:shadow-[0_22px_48px_rgba(245,158,11,0.18)] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-[0_14px_36px_rgba(2,6,23,0.4)]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-amber-500/12 text-amber-300 border border-amber-500/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <Package className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-amber-200 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">03. ACCESSORI</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition">Linea W-Bag</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Sacchetti tecnici ad alta resistenza meccanica progettati su misura per il sistema Zeno.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-amber-200 font-semibold pt-4 border-t border-slate-700/80">
                <span>Vedi Consumabili</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

          </div>
        </div>

        {/* Separatore visivo leggero */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800/80 to-transparent" />

        {/* ========================================================================= */}
        {/* PARTE 2: SERVIZI NEL DETTAGLIO IN UN BOX SCURO SEPARATO */}
        {/* ========================================================================= */}
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-4 sm:p-6 lg:p-8 backdrop-blur-xl shadow-[0_0_0_1px_rgba(15,23,42,0.5)]">
          <div className="space-y-8">

          {/* 1. SEZIONE DETTAGLIO: ZENO */}
          <section 
            id="zeno" 
            className="scroll-mt-24 rounded-3xl border border-slate-800/80 bg-slate-900/50 p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden space-y-8"
          >
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />

          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest relative z-10">
            <Cpu className="w-4 h-4" /> 01. Stazione Hardware & Edge AI
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Zeno <span className="text-emerald-400">Smart Station</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Unità hardware indipendente per ambienti ad alto flusso. Tramite sensori IoT e algoritmi di Computer Vision, riconosce e smista automaticamente i rifiuti senza richiedere l'intervento manuale dell'utente.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <Eye className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Computer Vision</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Riconoscimento automatico del materiale.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <Zap className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Smistamento Meccanico</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Automazione interna e compattamento.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <Radio className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Sensori Telemetrici</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Misurazione volume e peso in tempo reale.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Controllo Qualità</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Blocco dei materiali inquinanti o errati.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl border border-emerald-500/20 bg-slate-950 p-6 text-center space-y-4 shadow-2xl">
                <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
                  <span>HARDWARE EMBEDDED</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <Cpu className="w-16 h-16 text-emerald-400 mx-auto opacity-80 py-2" />
                <div className="text-xs font-semibold text-white">Unità di Elaborazione Locale</div>
                <p className="text-[11px] text-slate-400">Inference AI direttamente a bordo macchina per azzerare i tempi di risposta.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SEZIONE DETTAGLIO: KORE */}
        <section 
          id="kore" 
          className="scroll-mt-24 rounded-3xl border border-slate-800/80 bg-slate-900/50 p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden space-y-8"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />

          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest relative z-10">
            <LayoutDashboard className="w-4 h-4" /> 02. Piattaforma Cloud & Analytics
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl border border-cyan-500/20 bg-slate-950 p-6 space-y-3 shadow-2xl">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">KORE DASHBOARD</span>
                  <span className="text-[10px] font-mono text-slate-500">REALTIME</span>
                </div>
                <div className="space-y-2 pt-1">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-slate-400">Stazioni Connesse</span>
                    <span className="font-bold text-white">24 Units</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-slate-400">Scansioni / 24h</span>
                    <span className="font-bold text-emerald-400">1,420</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-slate-400">Risparmio Operativo</span>
                    <span className="font-bold text-cyan-400">+24%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Kore <span className="text-cyan-400">Dashboard</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Piattaforma cloud centralizzata per il controllo remoto della flotta. Analizza i dati raccolti dalle stazioni Zeno per ottimizzare la pianificazione delle rotte di svuotamento e monitorare la qualità della raccolta.
              </p>

              <ul className="space-y-2.5 pt-1">
                <li className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  Mappatura interattiva del livello di carico in tempo reale.
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  Notifiche predittive per manutenzioni e interventi coordinati.
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  Reportistica dettagliata e KPI di sostenibilità esportabili.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. SEZIONE DETTAGLIO: W-BAG */}
        <section 
          id="w-bag" 
          className="scroll-mt-24 rounded-3xl border border-slate-800/80 bg-slate-900/50 p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden space-y-8"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest relative z-10">
            <Package className="w-4 h-4" /> 03. Consumabili & Materiali
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Linea <span className="text-amber-400">W-Bag</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Sacchetti ad elevata tenuta meccanica sviluppati specificamente per le stazioni Zeno. Garantiscono l'assorbimento delle sollecitazioni derivanti dal compattamento e facilitano la sostituzione per gli operatori.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <h4 className="text-xs font-semibold text-white">Elevata Resistenza</h4>
                  <p className="text-[11px] text-slate-400">Progettati per sopportare carichi elevati senza lacerarsi.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <h4 className="text-xs font-semibold text-white">Dimensionamento Integrato</h4>
                  <p className="text-[11px] text-slate-400">Geometria ottimizzata per i vani interni della Smart Station.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl border border-amber-500/20 bg-slate-950 p-6 text-center space-y-3 shadow-2xl">
                <Package className="w-12 h-12 text-amber-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Standard Zeno Certified</h4>
                <p className="text-[11px] text-slate-400">
                  Formato e materiale testati per integrarsi con l'estrazione rapida e garantire la massima igiene.
                </p>
              </div>
            </div>
          </div>
        </section>

          {/* Call To Action Finale */}
          <div className="pt-8 text-center space-y-6">
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Pronto a integrare la tecnologia Zeno?
            </h3>
            <div>
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-slate-950 transition duration-300 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                Richiedi una Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          </div>
        </div>

      </div>
    </div>
  )
}