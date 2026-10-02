import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  RefreshCw,
  Building2,
  Calendar,
  Coins,
} from 'lucide-react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const easePremium = [0.16, 1, 0.3, 1]

/*
 * "Compatto" = mobile + tablet (< 1024px, cioè sotto `lg`).
 * Le due colonne esistono solo da `lg`: sotto quella soglia gli ingressi
 * sono verticali, così in colonna singola non c'è nessuno scivolamento
 * laterale che sfora il viewport.
 */
function useIsCompact() {
  const query = '(max-width: 1023px)'

  const [isCompact, setIsCompact] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  )

  useEffect(() => {
    const mq = window.matchMedia(query)
    const handle = (e) => setIsCompact(e.matches)

    setIsCompact(mq.matches)
    mq.addEventListener('change', handle)

    return () => mq.removeEventListener('change', handle)
  }, [])

  return isCompact
}

/* Cambio tab (azione dell'utente: resta invariato) */
const tabVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction * 70,
  }),

  center: {
    opacity: 1,
    x: 0,
  },

  exit: (direction) => ({
    opacity: 0,
    x: direction * -70,
  }),
}

const tabContent = {
  pilota: {
    title: 'Progetti Pilota & Eventi',
    description:
      'Ideale per validare la tecnologia Zeno sul campo o per installazioni temporanee.',
    color: 'text-emerald-400',
    items: [
      'Unità HW plug-and-play pre-configurata',
      'Modello AI di visione artificiale strutturato',
      'Supporto e assistenza tecnica remota prioritario',
      'Opzione di riscatto o estensione a fine periodo',
    ],
  },

  haas: {
    title: 'Hardware-as-a-Service Full',
    description:
      'La formula all-inclusive per integrare Zeno nei processi produttivi con massima tranquillità.',
    color: 'text-cyan-400',
    items: [
      'Customizzazione dei modelli AI sui tuoi materiali specifici',
      'Manutenzione preventiva e correttiva Full-Risk sul posto',
      'Sostituzione rapida dell’hardware in 48 ore',
      'Upgrade automatico dei moduli HW a metà contratto',
    ],
  },
}

const microPoints = [
  {
    icon: Coins,
    iconColor: 'text-emerald-400',
    hoverBorder: 'hover:border-emerald-500/25',
    title: '100% OPEX',
    text: 'Deducibile fiscalmente',
    delay: 0.42,
  },
  {
    icon: ShieldCheck,
    iconColor: 'text-teal-400',
    hoverBorder: 'hover:border-teal-500/25',
    title: 'Kasko Inclusa',
    text: 'Guasti e ricambi coperti',
    delay: 0.52,
  },
  {
    icon: RefreshCw,
    iconColor: 'text-cyan-400',
    hoverBorder: 'hover:border-cyan-500/25',
    title: 'No Obsolescenza',
    text: 'Upgrade HW e AI inclusi',
    delay: 0.62,
  },
]

export function RentalSection() {
  const [activeTab, setActiveTab] = useState('haas')
  const [slideDirection, setSlideDirection] = useState(1)

  const sectionRef = useRef(null)
  const isCompact = useIsCompact()

  /*
   * once: false → quando la sezione esce dal viewport torna allo stato
   * nascosto, e quando rientra tutte le animazioni ripartono.
   */
  const isSectionInView = useInView(sectionRef, {
    once: false,
    amount: 0,
  })

  /*
   * Transizione "di ingresso": il delay vale solo quando entra.
   * In uscita il reset è immediato, così al rientro non c'è ritardo residuo.
   */
  const enter = (duration, delay = 0) => ({
    duration,
    delay: isSectionInView ? delay : 0,
    ease: easePremium,
  })

  /*
   * ANIMAZIONI COLONNE
   * Desktop: ingresso laterale. Compatto: ingresso dal basso.
   * x e y sono sempre espliciti per non lasciare offset residui.
   */
  const leftColumnAnimation = {
    hidden: isCompact
      ? { opacity: 0, x: 0, y: 28 }
      : { opacity: 0, x: -35, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  }

  const rightColumnAnimation = {
    hidden: isCompact
      ? { opacity: 0, x: 0, y: 28 }
      : { opacity: 0, x: 35, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  }

  const microCardAnimation = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  }

  const currentTab = tabContent[activeTab]

  /*
   * pilota -> haas: il vecchio contenuto esce a sinistra, il nuovo entra da destra
   * haas -> pilota: il vecchio contenuto esce a destra, il nuovo entra da sinistra
   */
  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return

    setSlideDirection(newTab === 'haas' ? 1 : -1)
    setActiveTab(newTab)
  }

  const tabButtonClass = (tab) => `
    min-w-0 flex-1 py-3 px-3 rounded-xl text-xs font-bold
    flex items-center justify-center gap-2 text-center
    transition-all duration-300
    ${
      activeTab === tab
        ? 'bg-emerald-500 text-slate-900 shadow-md'
        : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800/80'
    }
  `

  return (
    <section ref={sectionRef} className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={
          isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        transition={enter(0.8)}
        className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-4 text-white shadow-2xl sm:p-8 md:p-12"
      >
        {/* BACKGROUND ATMOSPHERE */}
        <div className="pointer-events-none absolute right-0 top-0 -mr-12 -mt-12 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-0 -mb-12 -ml-12 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.025] via-transparent to-transparent" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* =====================================================
              COLONNA SINISTRA
              ===================================================== */}
          <motion.div
            variants={leftColumnAnimation}
            initial="hidden"
            animate={isSectionInView ? 'visible' : 'hidden'}
            transition={enter(0.9, 0.12)}
            className="min-w-0 space-y-6 lg:col-span-6"
          >
            {/* TITOLO */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={
                  isSectionInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 15 }
                }
                transition={enter(0.75, 0.18)}
                className="break-words text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                Noleggio Operativo
                <br />

                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Zero CAPEX. Zero Rischi.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={
                  isSectionInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 12 }
                }
                transition={enter(0.7, 0.3)}
                className="mt-5 text-sm leading-relaxed text-slate-400 md:text-base"
              >
                Integra la tecnologia Zeno Dynamics senza immobilizzare
                capitali. Un unico canone include hardware, modelli di AI
                personalizzati, manutenzione Full Kasko e aggiornamenti
                continui.
              </motion.p>
            </div>

            {/* MICRO-PUNTI */}
            <div className="grid grid-cols-1 gap-3.5 pt-2 sm:grid-cols-3">
              {microPoints.map((point) => {
                const Icon = point.icon

                return (
                  <motion.div
                    key={point.title}
                    variants={microCardAnimation}
                    initial="hidden"
                    animate={isSectionInView ? 'visible' : 'hidden'}
                    transition={enter(0.65, point.delay)}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className={`min-w-0 rounded-2xl border border-slate-700/50 bg-slate-800/40 p-4 transition-colors duration-300 ${point.hoverBorder}`}
                  >
                    <Icon className={`mb-2 h-4 w-4 ${point.iconColor}`} />

                    <div className="text-xs font-bold text-slate-200">
                      {point.title}
                    </div>

                    <div className="mt-0.5 text-[11px] text-slate-400">
                      {point.text}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={
                isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
              }
              transition={enter(0.7, 0.75)}
              className="pt-2"
            >
              <Link
                to="/contatti"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/15 transition-all duration-300 hover:opacity-95 sm:w-auto sm:text-sm"
              >
                <span>Richiedi Proposta Personalizzata</span>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* =====================================================
              COLONNA DESTRA
              ===================================================== */}
          <motion.div
            variants={rightColumnAnimation}
            initial="hidden"
            animate={isSectionInView ? 'visible' : 'hidden'}
            transition={enter(0.95, 0.2)}
            className="min-w-0 space-y-6 overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-800/50 p-4 backdrop-blur-md sm:p-8 lg:col-span-6"
          >
            {/* TAB SWITCHER */}
            <div className="relative space-y-5">
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <button
                  onClick={() => handleTabChange('pilota')}
                  className={tabButtonClass('pilota')}
                >
                  <Calendar className="h-4 w-4 shrink-0" />

                  <span className="break-words">Breve Termine (3-12m)</span>
                </button>

                <button
                  onClick={() => handleTabChange('haas')}
                  className={tabButtonClass('haas')}
                >
                  <Building2 className="h-4 w-4 shrink-0" />

                  <span className="break-words">Lungo Periodo (24-48m)</span>
                </button>
              </div>

              {/* CONTENUTO TAB ANIMATO */}
              <div className="relative overflow-hidden">
                <AnimatePresence
                  mode="wait"
                  initial={false}
                  custom={slideDirection}
                >
                  <motion.div
                    key={activeTab}
                    custom={slideDirection}
                    variants={tabVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.58, ease: easePremium }}
                    className="space-y-4 pt-1"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {currentTab.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-slate-400">
                        {currentTab.description}
                      </p>
                    </div>

                    <ul className="space-y-3 pt-1">
                      {currentTab.items.map((item, idx) => (
                        <motion.li
                          key={`${activeTab}-${idx}`}
                          initial={{ opacity: 0, x: slideDirection * 18 }}
                          animate={
                            isSectionInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: slideDirection * 18 }
                          }
                          transition={{
                            duration: 0.42,
                            delay: isSectionInView ? 0.08 + idx * 0.055 : 0,
                            ease: easePremium,
                          }}
                          className="flex items-start gap-3 text-xs leading-relaxed text-slate-300"
                        >
                          <CheckCircle2
                            className={`mt-0.5 h-4 w-4 shrink-0 ${currentTab.color}`}
                          />

                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* FOOTER CARD */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
              transition={enter(0.7, 0.9)}
              className="relative z-10 flex flex-col gap-3 border-t border-slate-700/60 pt-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-xs text-slate-400">
                Hai una flotta di impianti?
              </span>

              <Link
                to="/contatti"
                className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 transition-colors hover:text-emerald-300"
              >
                <span>Parla con noi</span>

                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}