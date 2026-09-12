import React, { useState, useEffect } from 'react'
import { Sparkles, CheckCircle2, Building2, Zap, ArrowRight, Server } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from "react-router-dom"

// Import immagini per il carosello
import gestionale2 from '../../assets/sfondo_con_zeno.png'
import gestionale3 from '../../assets/sfondo_con_zeno2.png'

export function DarkSection({
  darkSectionRef,
  isDarkSectionVisible = true,
  carouselImages,
  currentSlide: propCurrentSlide,
  setCurrentSlide: propSetCurrentSlide
}) {
  // Gestione interna delle slide se non vengono passate da App.jsx
  const [internalSlide, setInternalSlide] = useState(0)
  const currentSlide = propCurrentSlide !== undefined ? propCurrentSlide : internalSlide
  const setCurrentSlide = propSetCurrentSlide || setInternalSlide

  // Immagini di default
  const images = carouselImages && carouselImages.length > 0 
    ? carouselImages 
    : [gestionale2, gestionale3]

  // Autoplay del carosello ogni 4 secondi
  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [images.length, setCurrentSlide])

  return (
    <section 
      id="dark-section"
      ref={darkSectionRef}
      className={`relative rounded-[2.5rem] bg-slate-950 text-white p-8 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-slate-800/80 -mx-4 sm:-mx-8 lg:-mx-16 transition-all duration-1000 transform ${
        isDarkSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Effetti ambientali di sfondo */}
      <div className="absolute top-0 right-0 w-40 h-40 md:w-[600px] md:h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 md:w-[500px] md:h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* COLONNA SINISTRA: Copy Principale */}
        <div className="lg:col-span-5 space-y-6">
         

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] text-white">
            Zeno, l'era della gestione rifiuti 2.0
          </h2>
          
          <p className="text-slate-300 text-base leading-relaxed font-normal">
            Un ecosistema unificato che integra Edge AI, inferenza hardware dedicata e smistamento meccanico all'origine per eliminare l'errore umano.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Riconoscimento in millisecondi</h4>
                <p className="text-xs text-slate-400">Rilevazione immediata senza dipendere dalla rete.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mt-0.5">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Integrazione Plug & Play</h4>
                <p className="text-xs text-slate-400">Possibilità di personalizzazione ed integrazione con i sistemi attuali.</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-6 text-base rounded-full cursor-pointer shadow-lg shadow-emerald-500/20 transition-all hover:scale-105">
              <Link to="/contatti" className="flex items-center gap-2">
                Richiedi una demo <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* COLONNA DESTRA: BENTO GRID CON CAROSELLO */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          
          {/* CARD 1: Carosello */}
          <div className="sm:col-span-2 relative aspect-[16/9] w-full rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
            
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
            
            {/* Indicatori slide */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentSlide ? "w-8 bg-emerald-400" : "w-2 bg-slate-600 hover:bg-slate-400"
                  }`}
                  aria-label={`Vai alla foto ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CARD 2: Edge Processing */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Server className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400">Edge Processing</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">
                Architettura Hardware Dedicata
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Ogni unità Zeno opera in autonomia locale tramite modulo TPU integrato. L'inferenza non richiede connettività continuativa.
              </p>
            </div>
          </div>

          {/* CARD 3: Automazione Intelligente */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900/80 to-slate-900/90 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-2.5 rounded-xl bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-300">Automazione Intelligente</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">
                Smistamento Meccanico Assistito
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Attuazione rapida che indirizza il rifiuto nel vano corretto. Zero errori di separazione e certificazione istantanea.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}