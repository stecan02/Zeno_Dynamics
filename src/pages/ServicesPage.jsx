import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  LayoutDashboard,
  Package,
  Eye,
  Zap,
  Radio,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react"
import { Link } from "react-router-dom"
import {
  motion,
  useInView,
  useReducedMotion,
  MotionConfig,
} from "framer-motion"
import { createContext, useContext, useEffect, useRef, useState } from "react"

const premiumEase = [0.16, 1, 0.3, 1]

/* -------------------------------------------------------------------------- */
/* BREAKPOINT                                                                 */
/* -------------------------------------------------------------------------- */
/*
 * "Compatto" = mobile + tablet (< 1024px, sotto `lg`).
 * Sotto quella soglia gli ingressi sono verticali, così su iPad mini
 * (768px) nulla scivola lateralmente fuori dal viewport.
 */

function useIsCompact() {
  const query = "(max-width: 1023px)"

  const [isCompact, setIsCompact] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  )

  useEffect(() => {
    const mq = window.matchMedia(query)
    const update = (e) => setIsCompact(e.matches)

    setIsCompact(mq.matches)
    mq.addEventListener("change", update)

    return () => mq.removeEventListener("change", update)
  }, [])

  return isCompact
}

const CompactContext = createContext(false)

/* -------------------------------------------------------------------------- */
/* REVEAL                                                                     */
/* -------------------------------------------------------------------------- */
/*
 * Ogni elemento osserva il PROPRIO viewport (once: false):
 * entra → l'animazione parte; esce → reset immediato; rientra → riparte.
 * `children` può essere una funzione (inView) => JSX per sincronizzare
 * le animazioni interne (visual, loop, ecc.).
 */

const VISIBLE = { opacity: 1, x: 0, y: 0, scale: 1 }

function hiddenState(kind, compact) {
  if (kind === "left" && !compact) return { opacity: 0, x: -48, y: 0, scale: 0.98 }
  if (kind === "right" && !compact) return { opacity: 0, x: 48, y: 0, scale: 0.98 }

  return {
    opacity: 0,
    x: 0,
    y: compact ? 22 : 30,
    scale: compact ? 0.99 : 0.985,
  }
}

const nudge = (y) => ({ opacity: 0, x: 0, y })

function Reveal({
  as = "div",
  kind = "up",
  delay = 0,
  duration,
  amount = 0.15,
  hidden,
  visible,
  className = "",
  children,
}) {
  const compact = useContext(CompactContext)
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount })

  const Tag = motion[as]

  const from = hidden ?? hiddenState(kind, compact)
  const to = visible ?? VISIBLE

  const baseDuration = kind === "up" || compact ? 0.7 : 0.9

  return (
    <Tag
      ref={ref}
      initial={from}
      animate={inView ? to : from}
      transition={{
        duration: duration ?? baseDuration,
        delay: inView ? delay : 0,
        ease: premiumEase,
      }}
      className={className}
    >
      {typeof children === "function" ? children(inView) : children}
    </Tag>
  )
}

/* -------------------------------------------------------------------------- */
/* SPOTLIGHT                                                                  */
/* -------------------------------------------------------------------------- */
/*
 * Alone di luce che segue il puntatore (solo hover, nessun costo a riposo).
 * Aggiorna due variabili CSS direttamente sul DOM: nessun re-render React.
 */

function Spotlight({
  as: Tag = "div",
  rgb = "16,185,129",
  alpha = 0.1,
  size = 420,
  className = "",
  children,
  ...props
}) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()

    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`)
  }

  return (
    <Tag onMouseMove={onMove} className={`group relative ${className}`} {...props}>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${size}px circle at var(--mx, 50%) var(--my, 50%), rgba(${rgb},${alpha}), transparent 62%)`,
        }}
      />

      {children}
    </Tag>
  )
}

/* -------------------------------------------------------------------------- */
/* DATI                                                                       */
/* -------------------------------------------------------------------------- */

/* Overview (superficie chiara) */
const OVERVIEW = [
  {
    href: "#zeno",
    icon: Cpu,
    index: "01",
    tag: "Hardware",
    title: "Zeno Smart Station",
    text: "Stazione autonoma con Computer Vision per la classificazione e la separazione dei rifiuti all'origine.",
    link: "Vedi specifiche hardware",
    rgb: "16,185,129",
    tile: "border-emerald-100 bg-emerald-50 text-emerald-600",
    tagCls: "border-emerald-100 bg-emerald-50 text-emerald-700",
    linkCls: "text-emerald-700",
    arrowCls: "text-emerald-600",
    hair: "via-emerald-400/70",
  },
  {
    href: "#kore",
    icon: LayoutDashboard,
    index: "02",
    tag: "Cloud",
    title: "Kore Dashboard",
    text: "Piattaforma analitica in tempo reale per telemetria, stato flotta ed efficientamento dei percorsi.",
    link: "Vedi piattaforma cloud",
    rgb: "6,182,212",
    tile: "border-cyan-100 bg-cyan-50 text-cyan-600",
    tagCls: "border-cyan-100 bg-cyan-50 text-cyan-700",
    linkCls: "text-cyan-700",
    arrowCls: "text-cyan-600",
    hair: "via-cyan-400/70",
  },
  {
    href: "#w-bag",
    icon: Package,
    index: "03",
    tag: "Accessori",
    title: "Linea W-Bag",
    text: "Sacchetti tecnici ad alta resistenza meccanica progettati su misura per il sistema Zeno.",
    link: "Vedi consumabili",
    rgb: "245,158,11",
    tile: "border-amber-100 bg-amber-50 text-amber-600",
    tagCls: "border-amber-100 bg-amber-50 text-amber-700",
    linkCls: "text-amber-700",
    arrowCls: "text-amber-600",
    hair: "via-amber-400/70",
  },
]

/* Accenti della superficie scura (classi statiche, così Tailwind le vede) */
const ACCENTS = {
  emerald: {
    text: "text-emerald-300",
    tile: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    dot: "bg-emerald-400",
    via: "via-emerald-400/70",
    corner: "border-emerald-400/70",
    ring: "border-emerald-400/25",
    rgb: "52,211,153",
  },
  cyan: {
    text: "text-cyan-300",
    tile: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
    dot: "bg-cyan-400",
    via: "via-cyan-400/70",
    corner: "border-cyan-400/70",
    ring: "border-cyan-400/25",
    rgb: "34,211,238",
  },
  amber: {
    text: "text-amber-300",
    tile: "border-amber-400/20 bg-amber-400/10 text-amber-300",
    dot: "bg-amber-400",
    via: "via-amber-400/70",
    corner: "border-amber-400/70",
    ring: "border-amber-400/25",
    rgb: "251,191,36",
  },
}

const ZENO_FEATURES = [
  {
    icon: Eye,
    title: "Computer Vision",
    text: "Riconoscimento automatico del materiale.",
  },
  {
    icon: Zap,
    title: "Smistamento Meccanico",
    text: "Automazione interna e compattamento.",
  },
  {
    icon: Radio,
    title: "Sensori Telemetrici",
    text: "Misurazione volume e peso in tempo reale.",
  },
  {
    icon: ShieldCheck,
    title: "Controllo Qualità",
    text: "Blocco dei materiali inquinanti o errati.",
  },
]

const KORE_ROWS = [
  ["Stazioni Connesse", "24 Units", "text-white"],
  ["Scansioni / 24h", "1,420", "text-emerald-300"],
  ["Risparmio Operativo", "+24%", "text-cyan-300"],
]

const KORE_POINTS = [
  "Mappatura interattiva del livello di carico in tempo reale.",
  "Notifiche predittive per manutenzioni e interventi coordinati.",
  "Reportistica dettagliata e KPI di sostenibilità esportabili.",
].map((text) => ({ icon: CheckCircle2, text }))

const WBAG_FEATURES = [
  {
    title: "Elevata Resistenza",
    text: "Progettati per sopportare carichi elevati senza lacerarsi.",
  },
  {
    title: "Dimensionamento Integrato",
    text: "Geometria ottimizzata per i vani interni della Smart Station.",
  },
]

const gridBg = {
  backgroundImage:
    "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
  maskImage: "linear-gradient(to bottom, black 20%, transparent)",
  WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent)",
}

const dotsBg = {
  backgroundImage:
    "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  maskImage: "linear-gradient(to bottom, black, transparent 85%)",
  WebkitMaskImage: "linear-gradient(to bottom, black, transparent 85%)",
}

/* -------------------------------------------------------------------------- */
/* PANEL (cornice comune dei visual)                                          */
/* -------------------------------------------------------------------------- */

function PanelFrame({ accent, children }) {
  const a = ACCENTS[accent]

  return (
    <Spotlight
      rgb={a.rgb}
      alpha={0.12}
      className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950 p-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] sm:p-6"
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent ${a.via} to-transparent`}
      />

      <div className="relative">{children}</div>
    </Spotlight>
  )
}

/* -------------------------------------------------------------------------- */
/* VISUAL — ZENO                                                              */
/* -------------------------------------------------------------------------- */

function ZenoVisual({ inView }) {
  const reduce = useReducedMotion()
  const loop = inView && !reduce
  const a = ACCENTS.emerald

  const corners = [
    "left-0 top-0 rounded-tl-xl border-l-2 border-t-2",
    "right-0 top-0 rounded-tr-xl border-r-2 border-t-2",
    "bottom-0 left-0 rounded-bl-xl border-b-2 border-l-2",
    "bottom-0 right-0 rounded-br-xl border-b-2 border-r-2",
  ]

  return (
    <PanelFrame accent="emerald">
      <div className="flex items-center justify-between text-xs">
        <span className="flex items-center gap-2 font-mono text-emerald-300">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.45, delay: inView ? 0.4 : 0 }}
            className="h-2 w-2 rounded-full bg-emerald-400"
          />
          Hardware embedded
        </span>

        <span className="text-slate-500">Edge AI</span>
      </div>

      {/* Frame di rilevamento */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: inView ? 0.25 : 0, ease: premiumEase }}
        className="relative mx-auto mt-6 flex aspect-square w-full max-w-[15rem] items-center justify-center"
      >
        {corners.map((c) => (
          <span
            key={c}
            aria-hidden
            className={`absolute h-7 w-7 ${a.corner} ${c}`}
          />
        ))}

        {/* Linea di scansione */}
        <motion.span
          aria-hidden
          className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent shadow-[0_0_14px_rgba(110,231,183,0.9)]"
          animate={loop ? { top: ["6%", "94%"] } : { top: "6%" }}
          transition={
            loop
              ? { duration: 2.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
              : { duration: 0.3 }
          }
        />

        {/* Chip centrale */}
        <div className="relative">
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-2xl border border-emerald-400/40"
            animate={loop ? { scale: [1, 1.5], opacity: [0.5, 0] } : { scale: 1, opacity: 0 }}
            transition={
              loop
                ? { duration: 2.2, repeat: Infinity, ease: "easeOut" }
                : { duration: 0.3 }
            }
          />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10">
            <Cpu className="h-9 w-9 text-emerald-300" />
          </div>
        </div>

        {/* Esito riconoscimento */}
        <div className="absolute inset-x-0 bottom-3 flex justify-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.6, delay: inView ? 0.9 : 0, ease: premiumEase }}
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-slate-950/90 px-2.5 py-1 text-[11px] font-medium text-emerald-300 backdrop-blur"
          >
            <CheckCircle2 className="h-3 w-3" />
            Materiale riconosciuto
          </motion.span>
        </div>
      </motion.div>

      <div className="mt-6 space-y-1 border-t border-white/10 pt-4 text-center">
        <div className="text-sm font-semibold text-white">
          Unità di Elaborazione Locale
        </div>

        <p className="text-xs leading-relaxed text-slate-400">
          Inference AI direttamente a bordo macchina per azzerare i tempi di
          risposta.
        </p>
      </div>
    </PanelFrame>
  )
}

/* -------------------------------------------------------------------------- */
/* VISUAL — KORE                                                              */
/* -------------------------------------------------------------------------- */

const KORE_LINE =
  "M0 66 C 28 62, 44 44, 74 48 S 120 24, 150 32 S 210 14, 240 20 S 286 6, 300 8"

function KoreVisual({ inView }) {
  return (
    <PanelFrame accent="cyan">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-white">Kore Dashboard</span>

        <span className="flex items-center gap-2 text-[11px] font-medium text-cyan-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          Realtime
        </span>
      </div>

      {/* Andamento (illustrativo) */}
      <svg
        viewBox="0 0 300 90"
        preserveAspectRatio="none"
        className="mt-5 h-24 w-full overflow-visible"
        aria-hidden
      >
        <defs>
          <linearGradient id="koreArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d={`${KORE_LINE} L300 90 L0 90 Z`}
          fill="url(#koreArea)"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.9, delay: inView ? 0.6 : 0 }}
        />

        <motion.path
          d={KORE_LINE}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
          transition={{ duration: 1.4, delay: inView ? 0.3 : 0, ease: premiumEase }}
        />
      </svg>

      <div className="mt-4 divide-y divide-white/10 border-t border-white/10">
        {KORE_ROWS.map(([label, value, valueClass], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: 14 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 14 }}
            transition={{
              duration: 0.5,
              delay: inView ? 0.45 + index * 0.1 : 0,
              ease: premiumEase,
            }}
            className="flex items-center justify-between gap-3 py-3 text-xs"
          >
            <span className="text-slate-400">{label}</span>

            <span className={`whitespace-nowrap text-sm font-semibold tabular-nums ${valueClass}`}>
              {value}
            </span>
          </motion.div>
        ))}
      </div>
    </PanelFrame>
  )
}

/* -------------------------------------------------------------------------- */
/* VISUAL — W-BAG                                                             */
/* -------------------------------------------------------------------------- */

function BagVisual({ inView }) {
  const reduce = useReducedMotion()
  const loop = inView && !reduce
  const a = ACCENTS.amber

  return (
    <PanelFrame accent="amber">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: inView ? 0.2 : 0, ease: premiumEase }}
        className="relative mx-auto flex aspect-square w-full max-w-[14rem] items-center justify-center"
      >
        {[0, 14, 28].map((inset) => (
          <span
            key={inset}
            aria-hidden
            className={`absolute rounded-full border ${a.ring}`}
            style={{ inset: `${inset}%` }}
          />
        ))}

        <motion.span
          aria-hidden
          className="absolute inset-[7%] rounded-full border border-dashed border-amber-400/35"
          animate={loop ? { rotate: 360 } : { rotate: 0 }}
          transition={
            loop
              ? { duration: 30, repeat: Infinity, ease: "linear" }
              : { duration: 0.3 }
          }
        />

        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-amber-400/25 bg-amber-400/10">
          <Package className="h-9 w-9 text-amber-300" />
        </div>
      </motion.div>

      <div className="mt-6 space-y-1 border-t border-white/10 pt-4 text-center">
        <div className="text-sm font-semibold text-white">
          Standard Zeno Certified
        </div>

        <p className="text-xs leading-relaxed text-slate-400">
          Formato e materiale testati per integrarsi con l'estrazione rapida e
          garantire la massima igiene.
        </p>
      </div>
    </PanelFrame>
  )
}

/* -------------------------------------------------------------------------- */
/* SEZIONE DI DETTAGLIO                                                       */
/* -------------------------------------------------------------------------- */

function DetailSection({
  id,
  index,
  accent,
  icon: Icon,
  label,
  title,
  body,
  items,
  columns = 1,
  reverse = false,
  divider = true,
  visual,
}) {
  const compact = useContext(CompactContext)
  const a = ACCENTS[accent]

  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24 ${
        divider ? "border-t border-white/10" : ""
      }`}
    >
      {/* Numero in filigrana */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-5 top-6 select-none font-black leading-none sm:right-10 lg:right-16"
        style={{
          fontSize: "clamp(5rem, 14vw, 10rem)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.07)",
        }}
      >
        {index}
      </span>

      <Reveal className="relative flex items-center gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${a.tile}`}
        >
          <Icon className="h-5 w-5" />
        </span>

        <span className={`font-mono text-xs ${a.text}`}>{index}</span>
        <span className="h-px w-8 bg-white/15" />
        <span className="text-sm text-slate-300">{label}</span>
      </Reveal>

      <div className="relative mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* TESTO */}
        <Reveal
          kind={reverse ? "right" : "left"}
          delay={compact ? 0.06 : 0.1}
          className={`min-w-0 space-y-6 lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-slate-400">
            {body}
          </p>

          <ul
            className={`grid grid-cols-1 gap-x-8 pt-2 ${
              columns === 2 ? "sm:grid-cols-2" : ""
            }`}
          >
            {items.map((item, i) => {
              const ItemIcon = item.icon

              return (
                <Reveal
                  as="li"
                  key={item.title ?? item.text}
                  hidden={nudge(compact ? 14 : 18)}
                  delay={0.12 + i * 0.07}
                  duration={0.55}
                  className="flex items-start gap-3 border-t border-white/10 py-4"
                >
                  {ItemIcon ? (
                    <ItemIcon className={`mt-0.5 h-4 w-4 shrink-0 ${a.text}`} />
                  ) : (
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`}
                    />
                  )}

                  <div className="min-w-0">
                    {item.title ? (
                      <>
                        <div className="text-sm font-medium text-white">
                          {item.title}
                        </div>

                        <p className="mt-1 text-xs leading-relaxed text-slate-400">
                          {item.text}
                        </p>
                      </>
                    ) : (
                      <p className="text-sm leading-relaxed text-slate-300">
                        {item.text}
                      </p>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </ul>
        </Reveal>

        {/* VISUAL */}
        <Reveal
          kind={reverse ? "left" : "right"}
          delay={compact ? 0.1 : 0.18}
          className={`min-w-0 lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}
        >
          {visual}
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* SERVICES PAGE                                                              */
/* -------------------------------------------------------------------------- */

export function ServicesPage() {
  const isCompact = useIsCompact()

  return (
    <CompactContext.Provider value={isCompact}>
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen overflow-hidden bg-white px-4 pb-16 pt-16 font-sans text-slate-900 selection:bg-emerald-500 selection:text-slate-950 sm:px-6 sm:pt-24 lg:px-8">
          {/* Atmosfera hero */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
            style={{
              background:
                "radial-gradient(60% 55% at 50% 0%, rgba(16,185,129,0.13), transparent 70%)",
            }}
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
            style={gridBg}
          />

          <div className="relative z-10 mx-auto max-w-6xl">
            {/* =============================================================
                HERO
                ============================================================= */}

            <header className="mx-auto max-w-3xl space-y-6 text-center">
              <Reveal className="flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Ecosistema integrato
                </span>
              </Reveal>

              <Reveal
                as="h1"
                delay={isCompact ? 0.08 : 0.12}
                className="text-5xl font-semibold leading-[1.04] tracking-tight text-slate-950 sm:text-7xl"
              >
                L'Ecosistema
                <br />
                <span className="bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Zeno Dynamics
                </span>
              </Reveal>

              <Reveal
                as="p"
                delay={isCompact ? 0.16 : 0.24}
                className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
              >
                Un'infrastruttura integrata a 3 livelli: hardware AI,
                piattaforma cloud analytics e consumabili smart.
              </Reveal>
            </header>

            {/* =============================================================
                OVERVIEW — i 3 livelli collegati
                ============================================================= */}

            <div className="mt-14 grid grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3 lg:gap-10">
              {OVERVIEW.map((card, i) => {
                const Icon = card.icon
                const isLast = i === OVERVIEW.length - 1

                return (
                  <Reveal
                    key={card.href}
                    delay={i * (isCompact ? 0.06 : 0.1)}
                    className="relative"
                  >
                    <Spotlight
                      as="a"
                      href={card.href}
                      rgb={card.rgb}
                      alpha={0.1}
                      className="flex h-full flex-col justify-between gap-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04),0_24px_40px_-28px_rgba(15,23,42,0.22)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_1px_0_rgba(15,23,42,0.04),0_32px_50px_-26px_rgba(15,23,42,0.28)] lg:p-7"
                    >
                      <span
                        aria-hidden
                        className={`pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent ${card.hair} to-transparent`}
                      />

                      <div className="relative space-y-5">
                        <div className="flex items-center justify-between gap-3">
                          <span
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${card.tile}`}
                          >
                            <Icon className="h-6 w-6" />
                          </span>

                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${card.tagCls}`}
                          >
                            <span className="font-mono">{card.index}</span>
                            {card.tag}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                            {card.title}
                          </h3>

                          <p className="text-sm leading-relaxed text-slate-600">
                            {card.text}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`relative flex items-center justify-between gap-2 border-t border-slate-100 pt-4 text-sm font-medium ${card.linkCls}`}
                      >
                        <span>{card.link}</span>

                        <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </Spotlight>

                    {/* Connettore al livello successivo */}
                    {!isLast && (
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -bottom-8 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center lg:-right-[2.25rem] lg:bottom-auto lg:left-auto lg:top-[2.2rem] lg:translate-x-0"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                          <ArrowRight
                            className={`h-3.5 w-3.5 rotate-90 lg:rotate-0 ${card.arrowCls}`}
                          />
                        </span>
                      </span>
                    )}
                  </Reveal>
                )
              })}
            </div>

            {/* =============================================================
                DETTAGLIO — superficie scura
                ============================================================= */}

            <div className="relative isolate mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_40px_80px_-40px_rgba(2,6,23,0.6)] sm:mt-28 lg:rounded-[2.5rem]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={dotsBg}
              />

              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-emerald-500/[0.10] blur-3xl"
              />

              <div
                aria-hidden
                className="pointer-events-none absolute -left-24 top-1/2 h-[28rem] w-[28rem] rounded-full bg-cyan-500/[0.07] blur-3xl"
              />

              <div className="relative z-10">
                <DetailSection
                  id="zeno"
                  index="01"
                  accent="emerald"
                  icon={Cpu}
                  label="Stazione hardware & Edge AI"
                  divider={false}
                  title="Zeno Smart Station"
                  body="Unità hardware indipendente per ambienti ad alto flusso. Tramite sensori IoT e algoritmi di Computer Vision, riconosce e smista automaticamente i rifiuti senza richiedere l'intervento manuale dell'utente."
                  items={ZENO_FEATURES}
                  columns={2}
                  visual={(inView) => <ZenoVisual inView={inView} />}
                />

                <DetailSection
                  id="kore"
                  index="02"
                  accent="cyan"
                  icon={LayoutDashboard}
                  label="Piattaforma cloud & analytics"
                  reverse
                  title="Kore Dashboard"
                  body="Piattaforma cloud centralizzata per il controllo remoto della flotta. Analizza i dati raccolti dalle stazioni Zeno per ottimizzare la pianificazione delle rotte di svuotamento e monitorare la qualità della raccolta."
                  items={KORE_POINTS}
                  visual={(inView) => <KoreVisual inView={inView} />}
                />

                <DetailSection
                  id="w-bag"
                  index="03"
                  accent="amber"
                  icon={Package}
                  label="Consumabili & materiali"
                  title="Linea W-Bag"
                  body="Sacchetti ad elevata tenuta meccanica sviluppati specificamente per le stazioni Zeno. Garantiscono l'assorbimento delle sollecitazioni derivanti dal compattamento e facilitano la sostituzione per gli operatori."
                  items={WBAG_FEATURES}
                  columns={2}
                  visual={(inView) => <BagVisual inView={inView} />}
                />

                {/* CTA */}
                <section className="relative border-t border-white/10 px-5 py-16 text-center sm:px-10 sm:py-24 lg:px-16">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(50% 70% at 50% 100%, rgba(16,185,129,0.18), transparent 70%)",
                    }}
                  />

                  <Reveal
                    as="h3"
                    className="relative mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl"
                  >
                    Pronto a integrare la tecnologia Zeno?
                  </Reveal>

                  <Reveal delay={0.15} className="relative mt-10 flex justify-center">
                    <Link
                      to="/contatti"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_0_1px_rgba(110,231,183,0.5),0_12px_32px_-8px_rgba(16,185,129,0.6)] transition duration-300 hover:bg-emerald-300 hover:shadow-[0_0_0_1px_rgba(110,231,183,0.7),0_16px_40px_-8px_rgba(16,185,129,0.8)]"
                    >
                      Richiedi una demo

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Reveal>
                </section>
              </div>
            </div>
          </div>
        </div>
      </MotionConfig>
    </CompactContext.Provider>
  )
}