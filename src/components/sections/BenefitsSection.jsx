import React, { useEffect, useRef, useState } from "react";
import {
  BarChart,
  FileBarChart,
  Settings2,
  Receipt,
  FileText,
  CheckCircle2,
  Scale,
} from "lucide-react";
import { AnimatedCounter } from "../common/AnimatedCounter.jsx";
import { motion, useInView } from "framer-motion";

const easePremium = [0.16, 1, 0.3, 1];

/* ================================================================
   BREAKPOINT
   "Compatto" = mobile + tablet (< 1024px, cioè sotto `lg`).
   Su iPad mini (768px) il layout è già a griglia ridotta, quindi usiamo
   anche le animazioni verticali: niente scivolamenti laterali che
   sforano il viewport.
================================================================ */

function useIsCompact() {
  const query = "(max-width: 1023px)";

  const [isCompact, setIsCompact] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const handle = (e) => setIsCompact(e.matches);

    setIsCompact(mq.matches);
    mq.addEventListener("change", handle);

    return () => mq.removeEventListener("change", handle);
  }, []);

  return isCompact;
}

/* ================================================================
   ANIMAZIONI
   Ogni stato definisce SEMPRE x e y, così non resta mai un offset
   residuo quando cambia il breakpoint.
================================================================ */

const VISIBLE = { opacity: 1, x: 0, y: 0, scale: 1 };

function getHidden(direction, isCompact) {
  if (isCompact) {
    return { opacity: 0, x: 0, y: 26, scale: 0.985 };
  }

  switch (direction) {
    case "left":
      return { opacity: 0, x: -55, y: 0, scale: 0.97 };
    case "right":
      return { opacity: 0, x: 55, y: 0, scale: 0.97 };
    case "bottom":
      return { opacity: 0, x: 0, y: 45, scale: 0.97 };
    default:
      return { opacity: 0, x: 0, y: 0, scale: 0.9 };
  }
}

/*
 * Definito FUORI dal componente principale: prima veniva ricreato a ogni
 * render, quindi React smontava e rimontava le card (animazioni che
 * ripartono, posizioni sballate).
 */
function AnimatedCard({
  direction = "center",
  delay = 0,
  isInView,
  isCompact,
  children,
  className = "",
}) {
  const hidden = getHidden(direction, isCompact);
  const responsiveDelay = isCompact ? delay * 0.65 : delay;

  return (
    <motion.div
      initial={hidden}
      animate={isInView ? VISIBLE : hidden}
      transition={{
        duration: isCompact ? 0.68 : 0.85,
        delay: isInView ? responsiveDelay : 0,
        ease: easePremium,
      }}
      className={className}
    >
      {children}

      {/* RIFLESSO */}
      <motion.div
        initial={{ x: "-160%", opacity: 0 }}
        animate={
          isInView
            ? { x: ["-160%", "160%"], opacity: [0, 0.22, 0] }
            : { x: "-160%", opacity: 0 }
        }
        transition={{
          duration: isCompact ? 1.9 : 1.7,
          delay: isInView ? responsiveDelay + (isCompact ? 0.5 : 0.65) : 0,
          ease: [0.65, 0, 0.35, 1],
        }}
        className="pointer-events-none absolute inset-y-0 left-0 z-30 w-[28%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/60 to-transparent blur-[2px]"
      />
    </motion.div>
  );
}

/* ================================================================
   KPI CARD (le 3 card in alto, ora tutte identiche in dimensioni)
================================================================ */

function KpiCard({
  direction,
  delay,
  isInView,
  isCompact,
  icon: Icon,
  badge,
  label,
  value,
  placeholder,
  text,
}) {
  return (
    <AnimatedCard
      direction={direction}
      delay={delay}
      isInView={isInView}
      isCompact={isCompact}
      className="group relative flex min-w-0 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/40 hover:shadow-[0_20px_35px_-10px_rgba(16,185,129,0.12)] sm:p-8 md:p-6 lg:col-span-4 lg:p-8 md:col-span-2"
    >
      <div className="z-10 flex items-center justify-between gap-2">
        <div className="shrink-0 rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>

        <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
          {badge}
        </span>
      </div>

      <div className="z-10 my-6">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </span>

        {/* md: testo più piccolo perché le 3 card stanno affiancate */}
        <div className="whitespace-nowrap text-5xl font-black tracking-tight text-slate-900 md:text-3xl lg:text-5xl">
          {isInView && (
            <AnimatedCounter
              value={value}
              placeholder={placeholder}
              duration={1800}
            />
          )}
        </div>
      </div>

      <p className="z-10 text-xs font-normal leading-relaxed text-slate-500">
        {text}
      </p>

      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-emerald-500/5 blur-2xl transition-all duration-500 group-hover:bg-emerald-500/15" />
    </AnimatedCard>
  );
}

/* ================================================================
   SECTION
================================================================ */

export function BenefitsSection() {
  const sectionRef = useRef(null);
  const isCompact = useIsCompact();

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0,
  });

  return (
    <section
      ref={sectionRef}
      id="vantaggi"
      className="relative scroll-mt-24 space-y-12 py-6"
    >
      {/* BACKGROUND */}
      <motion.div
        initial={false}
        animate={{
          opacity: isInView ? 1 : 0,
          scale: isInView ? 1 : 0.95,
        }}
        transition={{
          duration: isCompact ? 0.9 : 1.2,
          ease: easePremium,
        }}
        className="pointer-events-none absolute -top-12 left-1/2 -z-10 h-64 w-full max-w-7xl -translate-x-1/2 bg-gradient-to-b from-emerald-50/60 via-slate-50/20 to-transparent blur-3xl md:h-96"
      />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: isCompact ? 18 : 25 }}
        animate={
          isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: isCompact ? 18 : 25 }
        }
        transition={{
          duration: isCompact ? 0.65 : 0.8,
          ease: easePremium,
        }}
        className="flex flex-col justify-between gap-6 px-2 lg:flex-row lg:items-end"
      >
        <div className="space-y-3">
          <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl">
            Perché scegliere{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Zeno Dynamics
            </span>
          </h2>
        </div>

        <p className="max-w-md text-sm font-normal leading-relaxed text-slate-500 md:text-base">
          Ottimizzazione immediata dei costi operativi, ROI misurabile e totale
          conformità alle normative europee per l'economia circolare.
        </p>
      </motion.div>

      {/*
        BENTO GRID
        - mobile: 1 colonna
        - md (iPad mini): 6 colonne → 3 KPI affiancati (span 2),
          poi TARI, CSRD e Compliance a tutta larghezza (span 6)
        - lg: 12 colonne come prima
      */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-6 lg:grid-cols-12">
        <KpiCard
          direction="left"
          delay={0.12}
          isInView={isInView}
          isCompact={isCompact}
          icon={BarChart}
          badge="Prestazioni"
          label="Efficienza Operativa"
          value="+62%"
          placeholder="+88%"
          text="Automazione completa dei processi di separazione, riduzione dei tempi di gestione manuale dei rifiuti."
        />

        <KpiCard
          direction="center"
          delay={0.25}
          isInView={isInView}
          isCompact={isCompact}
          icon={FileBarChart}
          badge="Volumi"
          label="Impatto Volumetrico Rifiuti"
          value="-45%"
          placeholder="-88%"
          text="Riduzione intelligente e selezione precisa alla fonte per abbattere il volume dei rifiuti indifferenziati."
        />

        <KpiCard
          direction="right"
          delay={0.38}
          isInView={isInView}
          isCompact={isCompact}
          icon={Settings2}
          badge="Deployment"
          label="Configurazione Hardware & AI"
          value="2 giorni"
          placeholder="8 giorni"
          text="Installazione rapida su infrastruttura esistente senza fermare le operazioni ordinarie."
        />

        {/* TARI */}
        <AnimatedCard
          direction="left"
          delay={0.53}
          isInView={isInView}
          isCompact={isCompact}
          className="group relative flex min-w-0 flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 sm:p-8 md:col-span-6 lg:col-span-7"
        >
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between gap-2">
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-2.5 text-emerald-400">
                <Receipt className="h-6 w-6" />
              </div>

              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                Risparmio Fiscale
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ottimizzazione TARI & Tariffa Puntuale
              </h3>

              <p className="max-w-xl text-sm font-normal leading-relaxed text-slate-300">
                Riducendo la quota di rifiuto indifferenziato alla fonte, Zeno
                ti consente di accedere direttamente ai benefici economici
                previsti dalla Tariffazione Puntuale, riducendo drasticamente
                il costo annuo della TARI aziendale.
              </p>
            </div>

            <div className="pt-2">
              <div className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-slate-700/60 bg-slate-800/60 p-4 backdrop-blur-md sm:flex-row sm:items-center sm:gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />

                  <span className="font-mono text-xs text-slate-300">
                    Riduzione media indifferenziato:
                  </span>
                </div>

                <span className="whitespace-nowrap rounded-lg border border-emerald-800/60 bg-emerald-950/80 px-2.5 py-1 font-mono text-sm font-bold text-emerald-400">
                  fino al -40%
                </span>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl md:h-80 md:w-80" />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] opacity-10 [background-size:20px_20px]" />
        </AnimatedCard>

        {/* CSRD */}
        <AnimatedCard
          direction="center"
          delay={0.67}
          isInView={isInView}
          isCompact={isCompact}
          className="group relative flex min-w-0 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl sm:p-8 md:col-span-6 lg:col-span-5"
        >
          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between gap-2">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-2.5 text-emerald-600">
                <FileText className="h-6 w-6" />
              </div>

              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                EU Directive
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                CSRD & ESG Reporting
              </h3>

              <p className="text-xs font-normal leading-relaxed text-slate-500 sm:text-sm">
                La Direttiva CSRD impone dati trasparenti e tracciabili. Zeno
                automatizza la logistica dei dati ambientali, annullando il
                rischio di non conformità.
              </p>
            </div>

            <ul className="space-y-2 pt-1">
              {[
                "Tracciabilità dati certificata",
                "Export report CSRD pronto all'uso",
                "Eliminazione dei rischi sanzionatori",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={false}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0, y: 0 }
                      : {
                          opacity: 0,
                          x: isCompact ? 0 : -12,
                          y: isCompact ? 8 : 0,
                        }
                  }
                  transition={{
                    duration: isCompact ? 0.45 : 0.5,
                    delay: isInView
                      ? (isCompact ? 0.62 : 0.85) +
                        index * (isCompact ? 0.06 : 0.08)
                      : 0,
                    ease: easePremium,
                  }}
                  className="flex items-center gap-2 text-xs font-medium text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />

                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="pointer-events-none absolute bottom-2 left-2 h-24 w-24 rounded-full bg-emerald-50 blur-3xl transition-all duration-500 group-hover:scale-125 md:-bottom-10 md:-left-10 md:h-40 md:w-40" />
        </AnimatedCard>

        {/* COMPLIANCE */}
        <AnimatedCard
          direction="bottom"
          delay={0.82}
          isInView={isInView}
          isCompact={isCompact}
          className="group relative flex min-w-0 flex-col items-stretch justify-between gap-8 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 text-white shadow-2xl sm:p-8 md:col-span-6 lg:col-span-12 lg:flex-row lg:items-center"
        >
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <Scale className="h-4 w-4 shrink-0" />
              Conformità Normativa Europea
            </div>

            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Compliance Globale & Tassonomia UE
            </h3>

            <p className="text-sm font-normal leading-relaxed text-slate-300">
              Log immutabili e reportistica automatizzata dei dati di
              tracciabilità: garantisci al 100% l'allineamento aziendale con
              gli standard della Tassonomia Green UE e le normative locali
              (UNI EN 14803).
            </p>
          </div>

          {/* COMPLIANCE STATUS */}
          <motion.div
            initial={false}
            animate={
              isInView
                ? { opacity: 1, x: 0, y: 0, scale: 1 }
                : {
                    opacity: 0,
                    x: 0,
                    y: isCompact ? 20 : 0,
                    scale: 0.95,
                  }
            }
            transition={{
              duration: isCompact ? 0.65 : 0.8,
              delay: isInView ? (isCompact ? 0.62 : 1.02) : 0,
              ease: easePremium,
            }}
            className="relative z-10 h-28 w-full shrink-0 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-inner sm:h-36 lg:w-72"
          >
            <div className="z-10 flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] text-slate-400">
                STATUS COMPLIANCE
              </span>

              <span className="whitespace-nowrap rounded border border-emerald-800/80 bg-emerald-950/80 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                100% VALIDATED
              </span>
            </div>

            <div className="z-10 flex h-12 items-end gap-1.5">
              {[45, 65, 55, 80, 70, 95, 85, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: "0%" }}
                  animate={{ height: isInView ? `${h}%` : "0%" }}
                  transition={{
                    duration: isCompact ? 0.45 : 0.55,
                    delay: isInView
                      ? (isCompact ? 0.76 : 1.12) +
                        i * (isCompact ? 0.045 : 0.055)
                      : 0,
                    ease: easePremium,
                  }}
                  className="flex-1 rounded-xs bg-gradient-to-t from-emerald-600/40 to-emerald-400 transition-all duration-500 group-hover:brightness-125"
                />
              ))}
            </div>

            <motion.div
              initial={{ x: "-150%", opacity: 0 }}
              animate={
                isInView
                  ? { x: ["-150%", "150%"], opacity: [0, 0.25, 0] }
                  : { x: "-150%", opacity: 0 }
              }
              transition={{
                duration: isCompact ? 1.65 : 1.5,
                delay: isInView ? (isCompact ? 1.05 : 1.35) : 0,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[22%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm"
            />

            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-500/10 blur-xl" />
          </motion.div>

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        </AnimatedCard>
      </div>
    </section>
  );
}