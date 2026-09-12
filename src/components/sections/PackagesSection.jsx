import React, { useState, useEffect, useRef } from 'react'
import { RotateCw, Check, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { zenoPackages as zenoPackagesData } from '@/data/zenoData'
import { Link } from "react-router-dom"

function PackageCard({ pkg }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  // Gestisce la chiusura cliccando fuori dalla card (solo su mobile quando è girata)
  useEffect(() => {
    function handleClickOutside(event) {
      if (isFlipped && cardRef.current && !cardRef.current.contains(event.target)) {
        setIsFlipped(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isFlipped]);

  return (
    <div 
      ref={cardRef}
      className="group h-[620px] [perspective:1000px] cursor-pointer"
      // Su mobile il click sulla card inverte lo stato. Su desktop l'hover gestisce tutto.
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Contenitore 3D: su desktop usa l'hover, su mobile usa lo stato isFlipped */}
      <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
        isFlipped ? '[transform:rotateY(180deg)]' : ''
      } lg:[transform:none] lg:group-hover:[transform:rotateY(180deg)]`}>
        
        {/* ==================== FACCIA ANTERIORE (FRONTE) ==================== */}
        <Card 
          className={`absolute inset-0 w-full h-full flex flex-col justify-between rounded-3xl overflow-hidden [backface-visibility:hidden] [-webkit-backface-visibility:hidden] ${
            pkg.highlight 
              ? "bg-slate-950 text-white border-2 border-emerald-500/80 shadow-2xl shadow-emerald-950/40" 
              : "bg-white text-slate-900 border border-slate-200/80 shadow-lg"
          }`}
        >
          {pkg.highlight && (
            <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-[11px] tracking-wider uppercase px-4 py-1.5 rounded-bl-2xl shadow-md z-10">
              {pkg.badge}
            </div>
          )}

          <CardHeader className="p-6 md:p-8 pb-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-2xl border ${
                pkg.highlight 
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                  : "bg-emerald-50 border-emerald-100 text-emerald-600"
              }`}>
                {pkg.icon}
              </div>
              {!pkg.highlight && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  {pkg.badge}
                </span>
              )}
            </div>

            <div>
              <CardTitle className={`text-2xl font-black tracking-tight ${pkg.highlight ? "text-white" : "text-slate-900"}`}>
                {pkg.name}
              </CardTitle>
              <p className={`text-xs font-semibold mt-1 ${pkg.highlight ? "text-emerald-400" : "text-emerald-600"}`}>
                {pkg.tagline}
              </p>
            </div>
          </CardHeader>

          <CardContent className="px-6 md:px-8 py-2 flex-1 flex flex-col justify-between overflow-hidden">
            <CardDescription className={`text-xs leading-relaxed font-normal ${pkg.highlight ? "text-slate-300" : "text-slate-500"}`}>
              {pkg.description}
            </CardDescription>

            <div className={`mt-auto pt-4 flex items-center justify-center gap-2 text-xs font-semibold ${
              pkg.highlight ? "text-emerald-400" : "text-emerald-600"
            }`}>
              <RotateCw className="w-3.5 h-3.5" />
              <span>Passa il mouse o tocca per le specifiche</span>
            </div>
          </CardContent>

          <CardFooter className="p-6 md:p-8 pt-0">
            <div className={`w-full py-3 rounded-2xl text-center text-xs font-extrabold tracking-wide border transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md ${
              pkg.highlight 
                ? "bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 text-slate-950 border-emerald-300 shadow-emerald-500/30" 
                : "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-500 shadow-emerald-600/25"
            }`}>
              <span>Scopri funzionalità</span>
              <span className="text-sm">➔</span>
            </div>
          </CardFooter>
        </Card>

        {/* ==================== FACCIA POSTERIORE (RETRO) ==================== */}
        <Card 
          className={`absolute inset-0 w-full h-full flex flex-col justify-between rounded-3xl overflow-hidden [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] ${
            pkg.highlight 
              ? "bg-slate-900 text-white border-2 border-emerald-500/80 shadow-2xl shadow-emerald-950/50" 
              : "bg-slate-900 text-white border border-slate-800 shadow-2xl"
          }`}
        >
          <CardHeader className="p-6 md:p-8 pb-4 border-b border-slate-800 shrink-0 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl font-extrabold text-white">
                Incluso in {pkg.name}
              </CardTitle>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1.5 rounded-full flex items-center gap-1">
              <RotateCw className="w-3 h-3" /> Chiudi
            </span>
          </CardHeader>

          <CardContent className="p-6 md:p-8 py-4 flex-1 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#334155_transparent]">
            <ul className="space-y-3 md:space-y-3.5">
              {pkg.features?.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed">
                  <Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                  <span className="text-slate-300">{feat}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="p-6 md:p-8 pt-4 border-t border-slate-800/80 shrink-0" onClick={(e) => e.stopPropagation()}>
            <Button 
              asChild
              className={`w-full h-11 rounded-2xl font-bold text-xs cursor-pointer transition-all duration-300 ${
                pkg.highlight 
                  ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25" 
                  : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20"
              }`}
            >
              <Link 
                to={
                  pkg.topic 
                    ? `/contatti?topic=${pkg.topic}`
                    : pkg.id === 'zeno-one' || pkg.name === 'Zeno One'
                      ? '/contatti?topic=tech' 
                      : '/contatti?topic=quote'
                } 
                className="flex items-center justify-center gap-2"
              >
                {pkg.buttonText} <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}

export function PackagesSection({ zenoPackages }) {
  const packagesToDisplay = zenoPackages && zenoPackages.length > 0 ? zenoPackages : zenoPackagesData

  return (
    <section id="gamma" className="space-y-12 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            La gamma <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">Zeno Dynamics</span>
          </h2>
        </div>
        <p className="text-sm md:text-base text-slate-500 max-w-md font-normal leading-relaxed">
          Soluzioni modulari scalabili per ogni dimensione aziendale. Dalla singola sede operativa fino ai grandi network industriali.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {packagesToDisplay.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  )
}