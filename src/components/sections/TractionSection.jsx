import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { tractionMetrics } from "@/data/zenoData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const easePremium = [0.16, 1, 0.3, 1];

export function TractionSection() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0,
  });

  return (
    <section
      ref={sectionRef}
      id="traction"
      className="scroll-mt-24 space-y-6"
    >
      {/* HEADER */}
      <motion.div
        initial={false}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 24,
        }}
        transition={{ duration: 0.8, ease: easePremium }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 px-2"
      >
        <div>
          <motion.div
            initial={false}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 8,
            }}
            transition={{
              duration: 0.6,
              delay: isInView ? 0.08 : 0,
              ease: easePremium,
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 tracking-wider uppercase mb-2"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-50 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
            </span>

            Traction & Impatto
          </motion.div>

          <motion.h2
            initial={false}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 14,
            }}
            transition={{
              duration: 0.8,
              delay: isInView ? 0.12 : 0,
              ease: easePremium,
            }}
            className="text-3xl font-black text-slate-900 tracking-tight"
          >
            L'efficienza misurata in tempo reale
          </motion.h2>
        </div>

        <motion.p
          initial={false}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 12,
          }}
          transition={{
            duration: 0.75,
            delay: isInView ? 0.2 : 0,
            ease: easePremium,
          }}
          className="text-xs text-slate-500 max-w-md lg:max-w-xs font-normal leading-relaxed"
        >
          Dati operativi e telemetria aggregati direttamente dalle unità attive
          sul campo.
        </motion.p>
      </motion.div>

      {/* MAIN PANEL */}
      <motion.div
        initial={false}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 38,
          scale: isInView ? 1 : 0.985,
        }}
        transition={{
          duration: 1,
          delay: isInView ? 0.12 : 0,
          ease: easePremium,
        }}
        className="relative rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50/50 to-white/80 backdrop-blur-xl shadow-xl shadow-slate-200/40 p-6 md:p-8 lg:p-10 overflow-hidden"
      >
        {/* SOFT INTERNAL LIGHT */}
        <motion.div
          initial={false}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{
            duration: 1.2,
            delay: isInView ? 0.25 : 0,
          }}
          className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-emerald-50/20 pointer-events-none"
        />

        {/* BORDER SHINE */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="tractionBorderShine"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="45%" stopColor="white" stopOpacity="0.1" />
              <stop offset="50%" stopColor="white" stopOpacity="0.95" />
              <stop offset="55%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          <rect
            x="0.5"
            y="0.5"
            width="99"
            height="99"
            rx="4"
            fill="none"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.7"
            vectorEffect="non-scaling-stroke"
          />

          <motion.rect
            x="0.5"
            y="0.5"
            width="99"
            height="99"
            rx="4"
            fill="none"
            stroke="url(#tractionBorderShine)"
            strokeWidth="1.5"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="0.13 0.87"
            initial={{ strokeDashoffset: 1, opacity: 0 }}
            animate={
              isInView
                ? {
                    strokeDashoffset: [1, 0],
                    opacity: [0, 0.95, 0.7, 0],
                  }
                : { strokeDashoffset: 1, opacity: 0 }
            }
            transition={{
              duration: 3,
              delay: isInView ? 0.35 : 0,
              ease: "easeInOut",
            }}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* LIGHT SWEEP */}
        <motion.div
          initial={false}
          animate={{
            x: isInView ? ["-120%", "120%"] : "-120%",
            opacity: isInView ? [0, 0.22, 0] : 0,
          }}
          transition={{
            duration: 1.6,
            delay: isInView ? 0.5 : 0,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="absolute top-0 bottom-0 left-0 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
        />

        {/*
          METRICS
          - sotto lg (incluso iPad mini 768px) le metriche sono impilate
            con divisori orizzontali: ogni metrica ha tutta la larghezza
          - da lg in su: 3 colonne con divisori verticali
        */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 relative z-10">
          {tractionMetrics.map((metric, idx) => (
            <Metric
              key={metric.id}
              metric={metric}
              index={idx}
              isInView={isInView}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Metric({ metric, index, isInView }) {
  const isLast = index === tractionMetrics.length - 1;

  return (
    <div
      className={`flex min-w-0 flex-col justify-between space-y-6 ${
        index !== 0 ? "pt-8 lg:pt-0 lg:pl-10" : ""
      } ${!isLast ? "lg:pr-10" : ""}`}
    >
      {/* TOP ROW */}
      <motion.div
        initial={false}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 10,
        }}
        transition={{
          duration: 0.65,
          delay: isInView ? 0.38 + index * 0.1 : 0,
          ease: easePremium,
        }}
        className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2"
      >
        <div className="flex min-w-0 items-center gap-2">
          <motion.div
            initial={false}
            animate={{
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0.85,
            }}
            transition={{
              duration: 0.6,
              delay: isInView ? 0.42 + index * 0.1 : 0,
              ease: easePremium,
            }}
            className="shrink-0 p-2 rounded-lg bg-emerald-50 border border-emerald-100"
          >
            {metric.icon}
          </motion.div>

          <span className="text-xs font-semibold text-slate-600">
            {metric.label}
          </span>
        </div>

        <motion.span
          initial={false}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 8,
          }}
          transition={{
            duration: 0.5,
            delay: isInView ? 0.5 + index * 0.1 : 0,
            ease: easePremium,
          }}
          className="shrink-0 whitespace-nowrap text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100"
        >
          {metric.change}
        </motion.span>
      </motion.div>

      {/* NUMBER + DESCRIPTION */}
      <motion.div
        initial={false}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 18,
        }}
        transition={{
          duration: 0.8,
          delay: isInView ? 0.48 + index * 0.1 : 0,
          ease: easePremium,
        }}
      >
        <div className="whitespace-nowrap text-5xl lg:text-[2.75rem] xl:text-6xl font-black tracking-tight text-slate-900">
          {isInView && (
            <AnimatedCounter
              value={metric.targetValue}
              placeholder={metric.placeholder}
              duration={1600}
            />
          )}
        </div>

        <p className="text-xs text-slate-500 mt-2 leading-relaxed max-w-sm">
          {metric.description}
        </p>
      </motion.div>
    </div>
  );
}