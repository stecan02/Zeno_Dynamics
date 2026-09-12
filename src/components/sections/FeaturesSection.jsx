import { ArrowUpRight } from "lucide-react";
import { bentoFeatures } from "@/data/zenoData";

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-24 -mt-8 md:-mt-12 space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
        {bentoFeatures.map((item) => (
          <div
            key={item.id}
            className={`relative group p-7 rounded-2xl border border-slate-100/90 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300 hover:bg-white hover:border-emerald-500/30 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.08)] hover:-translate-y-0.5 flex flex-col justify-between ${item.gridClass}`}
          >
            <div className={`absolute transition-opacity duration-300 pointer-events-none rounded-full blur-3xl ${
              item.isMain ? 'bg-emerald-500/10 opacity-100' : 'bg-emerald-500/5 opacity-0 group-hover:opacity-100'
            } ${
              // responsive positions/sizes
              'right-2 top-2 w-20 h-20 md:-right-8 md:-top-8 md:w-36 md:h-36'
            }`} />

            {item.bgImage && (
              <img 
                src={item.bgImage} 
                alt={item.title} 
                className={`absolute object-contain opacity-70 group-hover:opacity-90 transition-all duration-500 pointer-events-none mix-blend-multiply ${
                  item.isMain ? 'right-0 bottom-0 w-1/2 h-auto max-h-[60%] md:max-h-[80%] group-hover:scale-105' :
                  item.isAnalytics ? '-right-2 -bottom-4 w-2/3 h-auto max-h-[55%] md:-right-6 md:-bottom-7 md:w-[60%] md:max-h-[85%] group-hover:scale-105' :
                  'right-2 bottom-0 w-2/3 h-auto max-h-[60%] md:w-1/2 md:max-h-[95%] group-hover:scale-110'
                }`}
              />
            )}

            {item.isCompliance && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-blue-400/10 to-emerald-500/20 pointer-events-none" />
            )}

            <div className="relative z-10 w-full h-full flex flex-col justify-between gap-8">
              <div className={`p-2.5 rounded-xl border w-fit shadow-sm transition-colors duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-50 ${item.iconBg}`}>
                {item.icon}
              </div>

              <div className="space-y-1.5 max-w-md">
                <h3 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                  {item.title}
                  {!item.isMain && <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-600" />}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}