import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  RefreshCw, 
  Building2, 
  Calendar,
  Coins
} from 'lucide-react'

export function RentalSection() {
  const [activeTab, setActiveTab] = useState('haas')

  return (
    <section className="py-6">
      <div className="rounded-3xl bg-slate-900 text-white p-4 sm:p-8 md:p-12 relative overflow-hidden border border-slate-800 shadow-2xl">
        {/* Glow di sfondo soffusi */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* Colonna Sinistra: Valore Chiave */}
          <div className="lg:col-span-6 space-y-6">

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight break-words">
              Noleggio Operativo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Zero CAPEX. Zero Rischi.
              </span>
            </h2>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Integra la tecnologia Zeno Dynamics senza immobilizzare capitali. Un unico canone include hardware, modelli di AI personalizzati, manutenzione Full Kasko e aggiornamenti continui.
            </p>

            {/* Micro-punti di forza */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <Coins className="w-4 h-4 text-emerald-400 mb-2" />
                <div className="text-xs font-bold text-slate-200">100% OPEX</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Deducibile fiscalmente</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <ShieldCheck className="w-4 h-4 text-teal-400 mb-2" />
                <div className="text-xs font-bold text-slate-200">Kasko Inclusa</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Guasti e ricambi coperti</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <RefreshCw className="w-4 h-4 text-cyan-400 mb-2" />
                <div className="text-xs font-bold text-slate-200">No Obsolescenza</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Upgrade HW e AI inclusi</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contatti"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs sm:text-sm hover:opacity-95 transition-all shadow-lg shadow-emerald-500/15"
              >
                <span>Richiedi Proposta Personalizzata</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Colonna Destra: Selector Interattivo Breve / Lungo Termine */}
          <div className="lg:col-span-6 bg-slate-800/50 backdrop-blur-md border border-slate-700/70 rounded-2xl p-4 sm:p-8 space-y-6 overflow-hidden min-w-0">
            
            {/* Tab Switcher */}
            <div className="relative space-y-5">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => setActiveTab('pilota')}
                  className={`min-w-0 flex-1 py-3 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 text-center transition-colors duration-300 ${
                    activeTab === 'pilota' ? 'bg-emerald-500 text-slate-900 shadow-md' : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800/80'
                  }`}
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span className="break-words">Breve Termine (3-12m)</span>
                </button>

                <button
                  onClick={() => setActiveTab('haas')}
                  className={`min-w-0 flex-1 py-3 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 text-center transition-colors duration-300 ${
                    activeTab === 'haas' ? 'bg-emerald-500 text-slate-900 shadow-md' : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800/80'
                  }`}
                >
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span className="break-words">Lungo Periodo (24-48m)</span>
                </button>
              </div>

              {/* Contenuto tab */}
              {activeTab === 'pilota' ? (
                <div className="space-y-4 pt-1">
                  <h3 className="text-lg font-bold text-white">Progetti Pilota & Eventi</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Ideale per validare la tecnologia Zeno sul campo o per installazioni temporanee.
                  </p>
                  <ul className="space-y-3 pt-1">
                    {[
                      "Unità HW plug-and-play pre-configurata",
                      "Modello AI di visione artificiale strutturato",
                      "Supporto e assistenza tecnica remota prioritario",
                      "Opzione di riscatto o estensione a fine periodo"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="space-y-4 pt-1">
                  <h3 className="text-lg font-bold text-white">Hardware-as-a-Service Full</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    La formula all-inclusive per integrare Zeno nei processi produttivi con massima tranquillità.
                  </p>
                  <ul className="space-y-3 pt-1">
                    {[
                      "Customizzazione dei modelli AI sui tuoi materiali specifici",
                      "Manutenzione preventiva e correttiva Full-Risk sul posto",
                      "Sostituzione rapida dell'hardware in 48 ore",
                      "Upgrade automatico dei moduli HW a metà contratto"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer interno della Card */}
            <div className="pt-5 border-t border-slate-700/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 relative z-10">
              <span className="text-xs text-slate-400">Hai una flotta di impianti?</span>
              <Link
                to="/contatti"
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
              >
                <span>Parla con noi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}