import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { tractionMetrics } from "@/data/zenoData";

export function TractionSection() {
  return (
    <section id="traction" className="scroll-mt-24 space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Traction & Impatto
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            L'efficienza misurata in tempo reale
          </h2>
        </div>
        <p className="text-xs text-slate-500 max-w-xs font-normal leading-relaxed">
          Dati operativi e telemetria aggregati direttamente dalle unità attive sul campo.
        </p>
      </div>

      <div className="relative rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50/50 to-white/80 backdrop-blur-xl shadow-xl shadow-slate-200/40 p-6 md:p-10 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100 relative z-10">
          {tractionMetrics.map((metric, idx) => (
            <div 
              key={metric.id} 
              className={`flex flex-col justify-between space-y-6 ${idx !== 0 ? 'md:pl-10 pt-6 md:pt-0' : ''} ${idx !== tractionMetrics.length - 1 ? 'md:pr-10' : ''}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100">
                    {metric.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-600">{metric.label}</span>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  {metric.change}
                </span>
              </div>

              <div>
                <div className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
                  <AnimatedCounter 
                    value={metric.targetValue} 
                    placeholder={metric.placeholder} 
                    duration={1600} 
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}