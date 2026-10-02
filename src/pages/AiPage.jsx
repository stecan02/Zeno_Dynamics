import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BrainCircuit,
  Camera,
  Cpu,
  Database,
  Eye,
  Gauge,
  Network,
  ScanSearch,
  ShieldCheck,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Zap,
  Boxes,
  Recycle,
  CircleDot,
  MoveRight
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const premiumEase = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: premiumEase
    }
  }
}

const fadeUpMobile = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.99
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: premiumEase
    }
  }
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: premiumEase
    }
  }
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768)
    }

    check()

    window.addEventListener('resize', check)

    return () => {
      window.removeEventListener('resize', check)
    }
  }, [])

  return isMobile
}

function useReveal() {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    amount: 0,
    margin: '0px'
  })

  return [ref, inView]
}

const edgeAdvantages = [
  {
    icon: Zap,
    title: 'Bassa latenza',
    description:
      'L’elaborazione avviene direttamente vicino al punto in cui il dato viene generato.'
  },
  {
    icon: ShieldCheck,
    title: 'Controllo dei dati',
    description:
      'Il processo può essere progettato privilegiando elaborazione locale e controllo dell’infrastruttura.'
  },
  {
    icon: Gauge,
    title: 'Risposta in tempo reale',
    description:
      'La visione artificiale entra direttamente nel ciclo operativo e nelle decisioni della macchina.'
  },
  {
    icon: Network,
    title: 'Integrazione',
    description:
      'AI, automazione, sensori e sistemi aziendali vengono collegati all’interno dello stesso flusso.'
  }
]

const visionSteps = [
  {
    number: '01',
    icon: Camera,
    title: 'Acquisizione',
    description:
      'Una camera acquisisce l’immagine dell’oggetto o della situazione da analizzare.'
  },
  {
    number: '02',
    icon: ScanSearch,
    title: 'Inferenza AI',
    description:
      'Il modello analizza l’immagine e identifica le caratteristiche rilevanti.'
  },
  {
    number: '03',
    icon: BrainCircuit,
    title: 'Decisione',
    description:
      'La logica applicativa trasforma il risultato dell’inferenza in una decisione operativa.'
  },
  {
    number: '04',
    icon: Workflow,
    title: 'Azione',
    description:
      'La decisione viene trasferita al sistema fisico che esegue l’azione prevista.'
  }
]

const modelCycle = [
  'DATA',
  'TRAINING',
  'VALIDATION',
  'DEPLOYMENT',
  'MONITORING',
  'IMPROVEMENT'
]

export function AiPage() {
  const isMobile = useIsMobile()

  const [heroRef, heroInView] = useReveal()
  const [conceptRef, conceptInView] = useReveal()
  const [edgeRef, edgeInView] = useReveal()
  const [visionRef, visionInView] = useReveal()
  const [zenoRef, zenoInView] = useReveal()
  const [architectureRef, architectureInView] = useReveal()
  const [trainingRef, trainingInView] = useReveal()
  const [koreRef, koreInView] = useReveal()
  const [performanceRef, performanceInView] = useReveal()
  const [ctaRef, ctaInView] = useReveal()

  const fade = isMobile ? fadeUpMobile : fadeUp

  return (
    <main className="relative w-full max-w-full min-h-screen overflow-x-hidden overflow-y-visible bg-white text-slate-100">

      {/* =========================================================
          BLACK MAIN SURFACE
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          left-3 right-3
          sm:left-4 sm:right-4
          lg:left-5 lg:right-5
          top-[145px]
          sm:top-[155px]
          lg:top-[175px]
          bottom-6
          sm:bottom-8
          lg:bottom-10
          z-0
          overflow-hidden
          rounded-[2rem]
          sm:rounded-[2.75rem]
          lg:rounded-[3.5rem]
          bg-slate-950
        "
      >
       

        {/* Ambient top light */}
        <div
          className="
            absolute
            -top-40
            left-1/2
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-emerald-500/[0.025]
            blur-[120px]
          "
        />

        {/* Ambient right light */}
        <div
          className="
            absolute
            right-[-180px]
            top-[15%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-cyan-500/[0.018]
            blur-[120px]
          "
        />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        ref={heroRef}
        className="
          relative
          z-10
          w-full
          px-7
          sm:px-10
          lg:px-14
          pt-[215px]
          sm:pt-[235px]
          lg:pt-[265px]
          pb-16
          sm:pb-24
        "
      >
        <div className="mx-auto max-w-[1380px]">

          {/* Technical label */}
          <motion.div
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={fade}
            className="mb-8 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-emerald-400/60" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-300/80 sm:text-xs">
              Artificial Intelligence
            </span>

            <div className="hidden h-px w-16 bg-slate-700/70 sm:block" />
          </motion.div>

          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

            {/* Main title */}
            <motion.div
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              variants={fade}
            >
              <div className="mb-5 flex items-center gap-2 text-slate-500">
                <BrainCircuit className="h-4 w-4" />
                <span className="text-[10px] uppercase tracking-[0.2em] sm:text-xs">
                  Zeno AI Systems
                </span>
              </div>

              <h1
                className="
                  max-w-[900px]
                  text-[38px]
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.045em]
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[76px]
                "
              >
                Intelligenza artificiale
                <br />

                <span className="text-slate-500">
                  dentro il processo.
                </span>
              </h1>

              <p
                className="
                  mt-7
                  max-w-[680px]
                  text-sm
                  leading-7
                  text-slate-400
                  sm:text-base
                  sm:leading-8
                "
              >
                Progettiamo sistemi di intelligenza artificiale integrati
                direttamente nelle macchine, nei flussi operativi e nei
                sistemi informativi aziendali.
              </p>
            </motion.div>

            {/* Technical summary */}
            <motion.div
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 35
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.12,
                    ease: premiumEase
                  }
                }
              }}
              className="hidden lg:block"
            >
              <div className="border-l border-slate-800 pl-7">
                <div className="mb-5 flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-emerald-400" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    AI / EDGE / AUTOMATION
                  </span>
                </div>

                <p className="text-sm leading-7 text-slate-400">
                  Dalla raccolta del dato fino alla decisione operativa,
                  ogni componente viene progettato come parte di un unico
                  sistema.
                </p>

                <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-slate-600">
                  <CircleDot className="h-3.5 w-3.5 text-emerald-400/70" />
                  Real-time intelligent systems
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero system panel */}
          <motion.div
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            transition={{ delay: 0.18 }}
            className="
              mt-12
              overflow-hidden
              rounded-2xl
              border
              border-slate-800/80
              bg-slate-900/60
              sm:mt-16
              sm:rounded-3xl
            "
          >
            <div className="grid lg:grid-cols-3">

              <div className="border-b border-slate-800 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-950">
                    <Eye className="h-4 w-4 text-emerald-400" />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Perception
                  </span>
                </div>

                <p className="text-sm leading-6 text-slate-500">
                  Acquisizione e interpretazione dei dati provenienti
                  dall’ambiente.
                </p>
              </div>

              <div className="border-b border-slate-800 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-950">
                    <BrainCircuit className="h-4 w-4 text-emerald-400" />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Intelligence
                  </span>
                </div>

                <p className="text-sm leading-6 text-slate-500">
                  Modelli AI trasformano il dato in informazioni e decisioni.
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-950">
                    <Workflow className="h-4 w-4 text-emerald-400" />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Action
                  </span>
                </div>

                <p className="text-sm leading-6 text-slate-500">
                  L’intelligenza viene trasferita direttamente al processo.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CONCEPT
      ========================================================= */}
      <section
        ref={conceptRef}
        className="
          relative
          z-10
          border-t
          border-slate-800/60
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <motion.div
            initial="hidden"
            animate={conceptInView ? 'visible' : 'hidden'}
            variants={fade}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-400/80">
              01 / Concept
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Dal dato alla decisione.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={conceptInView ? 'visible' : 'hidden'}
            variants={{
              hidden: {
                opacity: 0,
                y: isMobile ? 20 : 25
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.75,
                  delay: 0.1,
                  ease: premiumEase
                }
              }
            }}
          >
            <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              L’AI non viene trattata come un componente isolato, ma come
              un livello intelligente inserito all’interno del processo.
              Questo permette di collegare percezione, elaborazione,
              automazione e dati aziendali.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {[
                ['PERCEPTION', Eye],
                ['INFERENCE', BrainCircuit],
                ['DECISION', Gauge],
                ['ACTION', Workflow]
              ].map(([label, Icon], index) => (
                <motion.div
                  key={label}
                  initial="hidden"
                  animate={conceptInView ? 'visible' : 'hidden'}
                  variants={cardVariants}
                  transition={{ delay: 0.15 + index * 0.06 }}
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-slate-800/80
                    bg-slate-900/40
                    p-4
                  "
                >
                  <Icon className="h-4 w-4 shrink-0 text-emerald-400" />

                  <span className="min-w-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {label}
                  </span>
                </motion.div>
              ))}

            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          EDGE AI
      ========================================================= */}
      <section
        ref={edgeRef}
        className="
          relative
          z-10
          border-t
          border-slate-800/60
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto max-w-[1280px]">

          <motion.div
            initial="hidden"
            animate={edgeInView ? 'visible' : 'hidden'}
            variants={fade}
            className="mb-10 max-w-2xl sm:mb-12"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-400/80">
              02 / Edge AI
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Intelligenza dove serve.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              L’elaborazione può essere portata vicino al punto in cui
              il dato viene generato, riducendo latenza e dipendenza
              dall’infrastruttura cloud.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {edgeAdvantages.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  animate={edgeInView ? 'visible' : 'hidden'}
                  variants={cardVariants}
                  transition={{ delay: 0.08 + index * 0.07 }}
                  className="
                    flex
                    h-full
                    min-w-0
                    flex-col
                    rounded-2xl
                    border
                    border-slate-800/80
                    bg-slate-900/45
                    p-5
                    sm:p-6
                  "
                >
                  <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-950">
                    <Icon className="h-4 w-4 text-emerald-400" />
                  </div>

                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-7 text-[9px] uppercase tracking-[0.2em] text-slate-700">
                    EDGE COMPUTING
                  </div>
                </motion.div>
              )
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          COMPUTER VISION
      ========================================================= */}
      <section
        ref={visionRef}
        className="
          relative
          z-10
          border-t
          border-slate-800/60
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto max-w-[1280px]">

          <motion.div
            initial="hidden"
            animate={visionInView ? 'visible' : 'hidden'}
            variants={fade}
            className="mb-10 sm:mb-12"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-400/80">
              03 / Computer Vision
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Vedere. Comprendere. Agire.
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {visionSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <React.Fragment key={step.number}>

                  <motion.div
                    initial="hidden"
                    animate={visionInView ? 'visible' : 'hidden'}
                    variants={cardVariants}
                    transition={{ delay: 0.08 + index * 0.08 }}
                    className="
                      flex
                      min-w-0
                      flex-col
                      rounded-2xl
                      border
                      border-slate-800/80
                      bg-slate-900/45
                      p-5
                      sm:p-6
                    "
                  >
                    <div className="flex items-center justify-between">

                      <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-600">
                        {step.number}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-950">
                        <Icon className="h-4 w-4 text-emerald-400" />
                      </div>

                    </div>

                    <h3 className="mt-7 text-sm font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>

                    <div className="mt-auto pt-8">
                      <div className="h-px w-full bg-slate-800" />
                    </div>
                  </motion.div>

                </React.Fragment>
              )
            })}

          </div>

          {/* Mobile flow */}
          <div className="mt-6 flex items-center justify-center gap-2 lg:hidden">
            {visionSteps.slice(0, -1).map((step) => (
              <React.Fragment key={step.number}>
                <div className="h-px w-8 bg-slate-800" />
                <MoveRight className="h-3 w-3 text-slate-700" />
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          ZENO ONE
      ========================================================= */}
      <section
        ref={zenoRef}
        className="
          relative
          z-10
          border-t
          border-slate-800/60
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto max-w-[1280px]">

          <motion.div
            initial="hidden"
            animate={zenoInView ? 'visible' : 'hidden'}
            variants={fade}
            className="
              overflow-hidden
              rounded-[1.75rem]
              border
              border-slate-800/80
              bg-slate-900/45
              sm:rounded-[2rem]
            "
          >
            <div className="grid lg:grid-cols-[1fr_0.8fr]">

              <div className="min-w-0 p-7 sm:p-10 lg:p-14">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-950">
                    <Boxes className="h-4 w-4 text-emerald-400" />
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    AI Integrated Product
                  </span>
                </div>

                <h2 className="mt-7 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                  Zeno One
                </h2>

                <p className="mt-5 max-w-[620px] text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  Un esempio concreto di come computer vision,
                  AI edge, automazione e software possano essere
                  integrati all’interno di un singolo sistema.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">

                  {[
                    'AI vision',
                    'Edge processing',
                    'Automated sorting',
                    'Operational data'
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex min-w-0 items-center gap-3"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />

                      <span className="text-sm text-slate-400">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

              <div className="border-t border-slate-800 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">

                <div className="mb-7 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    System flow
                  </span>

                  <Recycle className="h-4 w-4 text-slate-700" />
                </div>

                <div className="space-y-3">

                  {[
                    ['01', 'Capture', Camera],
                    ['02', 'Classify', BrainCircuit],
                    ['03', 'Decide', Gauge],
                    ['04', 'Actuate', Workflow]
                  ].map(([number, label, Icon]) => (
                    <div
                      key={number}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-xl
                        border
                        border-slate-800
                        bg-slate-950/70
                        p-4
                      "
                    >
                      <span className="text-[9px] font-semibold tracking-[0.15em] text-slate-700">
                        {number}
                      </span>

                      <Icon className="h-4 w-4 text-emerald-400" />

                      <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                        {label}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          ARCHITECTURE
      ========================================================= */}
      <section
        ref={architectureRef}
        className="
          relative
          z-10
          border-t
          border-slate-800/60
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto max-w-[1280px]">

          <motion.div
            initial="hidden"
            animate={architectureInView ? 'visible' : 'hidden'}
            variants={fade}
            className="mb-10 sm:mb-12"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-400/80">
              04 / Architecture
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Un’architettura pensata per il processo.
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: Cpu,
                title: 'Edge Layer',
                description:
                  'Computazione locale, acquisizione dati e controllo delle componenti fisiche.'
              },
              {
                icon: BrainCircuit,
                title: 'AI Layer',
                description:
                  'Modelli di machine learning e computer vision per interpretare il dato.'
              },
              {
                icon: Database,
                title: 'Data Layer',
                description:
                  'Raccolta, storicizzazione e trasformazione dei dati in KPI e informazioni operative.'
              }
            ].map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  animate={architectureInView ? 'visible' : 'hidden'}
                  variants={cardVariants}
                  transition={{ delay: index * 0.09 }}
                  className="
                    flex
                    min-w-0
                    flex-col
                    rounded-2xl
                    border
                    border-slate-800/80
                    bg-slate-900/45
                    p-6
                    sm:p-7
                  "
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-950">
                    <Icon className="h-4 w-4 text-emerald-400" />
                  </div>

                  <h3 className="mt-7 text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-8 text-[9px] uppercase tracking-[0.2em] text-slate-700">
                    SYSTEM COMPONENT
                  </div>
                </motion.div>
              )
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          MODEL IMPROVEMENT
      ========================================================= */}
      <section
        ref={trainingRef}
        className="
          relative
          z-10
          border-t
          border-slate-800/60
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <motion.div
            initial="hidden"
            animate={trainingInView ? 'visible' : 'hidden'}
            variants={fade}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-400/80">
              05 / Model Improvement
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Un sistema che migliora con i dati.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              Il modello può essere aggiornato attraverso un ciclo continuo
              di raccolta dati, training, validazione e monitoraggio.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={trainingInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="
              min-w-0
              rounded-2xl
              border
              border-slate-800/80
              bg-slate-900/45
              p-6
              sm:p-8
            "
          >

            <div className="mb-8 flex items-center justify-between gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Continuous learning cycle
              </span>

              <BrainCircuit className="h-4 w-4 shrink-0 text-emerald-400" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              {modelCycle.map((item, index) => (
                <div
                  key={item}
                  className="
                    relative
                    flex
                    min-w-0
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-slate-800
                    bg-slate-950/60
                    px-4
                    py-4
                  "
                >
                  <span className="text-[9px] font-semibold text-slate-700">
                    0{index + 1}
                  </span>

                  <span className="min-w-0 truncate text-[9px] font-semibold tracking-[0.12em] text-slate-400 sm:text-[10px]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </motion.div>
        </div>
      </section>

      {/* =========================================================
          KORE
      ========================================================= */}
      <section
        ref={koreRef}
        className="
          relative
          z-10
          border-t
          border-slate-800/60
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto max-w-[1280px]">

          <motion.div
            initial="hidden"
            animate={koreInView ? 'visible' : 'hidden'}
            variants={fade}
            className="
              overflow-hidden
              rounded-[1.75rem]
              border
              border-slate-800/80
              bg-slate-900/45
              sm:rounded-[2rem]
            "
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

              <div className="min-w-0 p-7 sm:p-10 lg:p-14">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-950">
                    <Database className="h-4 w-4 text-emerald-400" />
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Data Intelligence
                  </span>
                </div>

                <h2 className="mt-7 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                  Kore
                </h2>

                <p className="mt-5 max-w-[560px] text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  Il livello software trasforma i dati prodotti dal sistema
                  in informazioni utilizzabili per monitorare prestazioni,
                  processi e risultati.
                </p>

              </div>

              <div className="border-t border-slate-800 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">

                <div className="mb-6 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    Data flow
                  </span>

                  <Network className="h-4 w-4 text-slate-700" />
                </div>

                <div className="space-y-3">

                  {[
                    ['INPUT', 'Sensors / Vision'],
                    ['PROCESSING', 'AI / Logic'],
                    ['OUTPUT', 'KPI / Events'],
                    ['INSIGHT', 'Operational decisions']
                  ].map(([label, value], index) => (
                    <div
                      key={label}
                      className="
                        flex
                        min-w-0
                        flex-col
                        gap-2
                        rounded-xl
                        border
                        border-slate-800
                        bg-slate-950/60
                        p-4
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                      "
                    >
                      <span className="text-[9px] font-semibold tracking-[0.18em] text-slate-600">
                        {label}
                      </span>

                      <span className="min-w-0 text-xs text-slate-400 sm:text-right">
                        {value}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PERFORMANCE
      ========================================================= */}
      <section
        ref={performanceRef}
        className="
          relative
          z-10
          border-t
          border-slate-800/60
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto max-w-[1000px]">

          <motion.div
            initial="hidden"
            animate={performanceInView ? 'visible' : 'hidden'}
            variants={fade}
            className="mb-10 text-center sm:mb-12"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-400/80">
              06 / Performance
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              L’intelligenza deve produrre risultati.
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">

            {[
              {
                icon: Gauge,
                value: 'REAL-TIME',
                label: 'Decisioni operative'
              },
              {
                icon: Cpu,
                value: 'EDGE',
                label: 'Elaborazione locale'
              },
              {
                icon: Database,
                value: 'DATA',
                label: 'Informazioni misurabili'
              }
            ].map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.value}
                  initial="hidden"
                  animate={performanceInView ? 'visible' : 'hidden'}
                  variants={cardVariants}
                  transition={{ delay: index * 0.08 }}
                  className="
                    flex
                    min-w-0
                    flex-col
                    items-center
                    rounded-2xl
                    border
                    border-slate-800/80
                    bg-slate-900/45
                    p-6
                    text-center
                    sm:p-7
                  "
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-950">
                    <Icon className="h-4 w-4 text-emerald-400" />
                  </div>

                  <span className="mt-6 text-xs font-semibold tracking-[0.2em] text-white">
                    {item.value}
                  </span>

                  <span className="mt-2 text-sm text-slate-500">
                    {item.label}
                  </span>
                </motion.div>
              )
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section
        ref={ctaRef}
        className="
          relative
          z-10
          px-7
          sm:px-10
          lg:px-14
          pt-12
          sm:pt-20
          pb-20
          sm:pb-32
        "
      >
        <motion.div
          initial="hidden"
          animate={ctaInView ? 'visible' : 'hidden'}
          variants={fade}
          className="
            mx-auto
            max-w-[1100px]
            rounded-[1.75rem]
            border
            border-slate-800/80
            bg-slate-900/45
            p-7
            sm:rounded-[2rem]
            sm:p-10
            lg:p-14
          "
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="min-w-0">
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-400/80">
                Start a project
              </span>

              <h2 className="mt-4 max-w-[700px] text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Portiamo l’intelligenza artificiale
                dentro il tuo processo.
              </h2>

              <p className="mt-5 max-w-[650px] text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                Raccontaci il processo che vuoi rendere più intelligente.
                Analizziamo insieme dati, automazione e opportunità di
                integrazione AI.
              </p>
            </div>

            <Link
              to="/contatti"
              className="
                group
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-emerald-500
                px-5
                py-3.5
                text-sm
                font-semibold
                text-slate-950
                transition-all
                duration-300
                hover:bg-emerald-400
              "
            >
              Parliamone

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>
        </motion.div>
      </section>

    </main>
  )
}