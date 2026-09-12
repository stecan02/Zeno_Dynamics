import React from 'react'
import { Sparkles, BarChart, FileBarChart, Settings2, Receipt, FileText, CheckCircle2, Scale } from 'lucide-react'
import { AnimatedCounter } from '../common/AnimatedCounter.jsx'

export function BenefitsSection() {
  return (
    <section id="vantaggi" className="scroll-mt-24 relative space-y-12 py-6">
      {/* Elementi Decorativi di Sfondo */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 md:h-96 bg-gradient-to-b from-emerald-50/60 via-slate-50/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      {/* Header Sezione */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
        <div className="space-y-3">
         
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Perché scegliere <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">Zeno Dynamics</span>
          </h2>
        </div>
        <p className="text-sm md:text-base text-slate-500 max-w-md font-normal leading-relaxed">
          Ottimizzazione immediata dei costi operativi, ROI misurabile e totale conformità alle normative europee per l'economia circolare.
        </p>
      </div>

      {/* BENTO GRID VANTAGGI */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">

        {/* KPI 1: Efficienza Operativa */}
        <div className="lg:col-span-4 relative group p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_35px_-10px_rgba(16,185,129,0.12)] hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between z-10">
            <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <BarChart className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
              Prestazioni
            </span>
          </div>

          <div className="my-6 z-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-1">
              Efficienza Operativa
            </span>
            <div className="text-5xl font-black text-slate-900 tracking-tight">
              <AnimatedCounter value="+62%" placeholder="+88%" duration={1800} />
            </div>
          </div>

          <p className="text-xs text-slate-500 font-normal leading-relaxed z-10">
            Automazione completa dei processi di separazione, riduzione dei tempi di gestione manuale dei rifiuti.
          </p>

          <div className="absolute right-2 bottom-2 md:-right-8 md:-bottom-8 w-16 h-16 md:w-32 md:h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/15 transition-all duration-500" />
        </div>

        {/* KPI 2: Impatto Volumetrico */}
        <div className="lg:col-span-4 relative group p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_35px_-10px_rgba(16,185,129,0.12)] hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between z-10">
            <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <FileBarChart className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
              Volumi
            </span>
          </div>

          <div className="my-6 z-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-1">
              Impatto Volumetrico Rifiuti
            </span>
            <div className="text-5xl font-black text-slate-900 tracking-tight">
              <AnimatedCounter value="-45%" placeholder="-88%" duration={1800} />
            </div>
          </div>

          <p className="text-xs text-slate-500 font-normal leading-relaxed z-10">
            Riduzione intelligente e selezione precisa alla fonte per abbattere il volume dei rifiuti indifferenziati.
          </p>

          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/15 transition-all duration-500" />
        </div>

        {/* KPI 3: Speed to Deployment */}
        <div className="lg:col-span-4 relative group p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_35px_-10px_rgba(16,185,129,0.12)] hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between z-10">
            <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <Settings2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
              Deployment
            </span>
          </div>

          <div className="my-6 z-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-1">
              Configurazione Hardware & AI
            </span>
            <div className="text-5xl font-black text-slate-900 tracking-tight">
              <AnimatedCounter value="2 giorni" placeholder="8 giorni" duration={1800} />
            </div>
          </div>

          <p className="text-xs text-slate-500 font-normal leading-relaxed z-10">
            Installazione rapida su infrastruttura esistente senza fermare le operazioni ordinarie.
          </p>

          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/15 transition-all duration-500" />
        </div>

        {/* TOPIC 1: HERO CARD TARI */}
        <div className="lg:col-span-7 relative group p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden border border-slate-800">
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Receipt className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Risparmio Fiscale
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Ottimizzazione TARI & Tariffa Puntuale
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal max-w-xl">
                Riducendo la quota di rifiuto indifferenziato alla fonte, Zeno ti consente di accedere direttamente ai benefici economici previsti dalla Tariffazione Puntuale, riducendo drasticamente il costo annuo della TARI aziendale.
              </p>
            </div>

            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-md flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-300">Riduzione media indifferenziato:</span>
                </div>
                <span className="text-sm font-bold font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800/60">
                  fino al -40%
                </span>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-40 h-40 md:w-80 md:h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        </div>

        {/* TOPIC 2: CSRD & ESG REPORTING */}
        <div className="lg:col-span-5 relative group p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                EU Directive
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                CSRD & ESG Reporting
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                La Direttiva CSRD impone dati trasparenti e tracciabili. Zeno automatizza la logistica dei dati ambientali, annullando il rischio di non conformità.
              </p>
            </div>

            <ul className="space-y-2 pt-1">
              {[
                "Tracciabilità dati certificata",
                "Export report CSRD pronto all'uso",
                "Eliminazione dei rischi sanzionatori"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute left-2 bottom-2 md:-left-10 md:-bottom-10 w-24 h-24 md:w-40 md:h-40 bg-emerald-50 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-all duration-500" />
        </div>

        {/* TOPIC 3: COMPLIANCE GLOBALE */}
        <div className="lg:col-span-12 relative group p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <Scale className="w-4 h-4" /> Conformità Normativa Europea
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Compliance Globale & Tassonomia UE
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Log immutabili e reportistica automatizzata dei dati di tracciabilità: garantisci al 100% l'allineamento aziendale con gli standard della Tassonomia Green UE e le normative locali (UNI EN 14803).
            </p>
          </div>

          <div className="relative w-full md:w-72 h-28 sm:h-36 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 shrink-0 flex flex-col justify-between overflow-hidden shadow-inner">
            <div className="flex justify-between items-center z-10">
              <span className="text-[11px] font-mono text-slate-400">STATUS COMPLIANCE</span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                100% VALIDATED
              </span>
            </div>

            <div className="flex gap-1.5 h-12 items-end z-10">
              {[45, 65, 55, 80, 70, 95, 85, 100].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-gradient-to-t from-emerald-600/40 to-emerald-400 rounded-xs transition-all duration-500 group-hover:brightness-125" 
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
          </div>

          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>

      </div>
    </section>
  )
}