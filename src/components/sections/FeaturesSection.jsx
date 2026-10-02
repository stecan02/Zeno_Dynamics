import { ArrowUpRight } from "lucide-react";
import { bentoFeatures } from "@/data/zenoData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const easePremium = [0.22, 1, 0.36, 1];

/*
 * TABLET (640px → 1023px)
 * - il grid passa a 2 colonne (prima: 3 colonne a 768px)
 * - gli span definiti in `item.gridClass` (pensati per 4 colonne) vengono
 *   annullati sotto lg, così le card sono tutte uguali e non lasciano buchi
 * - se il numero di card è dispari, l'ultima occupa tutta la riga
 * Da lg in su resta tutto com'era (gridClass applicato normalmente).
 */
const tabletOverrides =
  "max-lg:!col-span-1 max-lg:!row-span-1 sm:max-lg:[&:last-child:nth-child(odd)]:!col-span-2";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="scroll-mt-24 -mt-8 md:-mt-12 space-y-12"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {bentoFeatures.map((item, index) => (
          <AnimatedFeatureCard
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function AnimatedFeatureCard({ item, index }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    amount: 0,
    margin: "0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 45,
        scale: isInView ? 1 : 0.975,
      }}
      transition={{
        duration: 0.8,
        delay: isInView ? index * 0.08 : 0,
        ease: easePremium,
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.4, ease: easePremium },
      }}
      className={`relative group min-h-[200px] p-6 md:p-7 rounded-2xl border border-slate-100/90 bg-slate-50/40 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] overflow-hidden transition-[background,border-color,box-shadow] duration-500 hover:bg-white hover:border-emerald-500/30 hover:shadow-[0_25px_55px_-20px_rgba(16,185,129,0.12)] flex flex-col justify-between ${item.gridClass ?? ""} ${tabletOverrides}`}
    >
      {/* AMBIENT LIGHT */}
      <motion.div
        animate={{
          opacity: isInView ? (item.isMain ? 1 : 0.5) : 0,
          scale: isInView ? 1 : 0.7,
        }}
        transition={{ duration: 1.1, ease: easePremium }}
        className={`absolute pointer-events-none rounded-full blur-3xl ${
          item.isMain ? "bg-emerald-500/10" : "bg-emerald-500/5"
        } right-0 top-0 w-24 h-24 md:w-40 md:h-40`}
      />

      {/* IMAGE */}
      {item.bgImage && (
        <motion.img
          src={item.bgImage}
          alt={item.title}
          animate={{
            opacity: isInView ? 0.7 : 0,
            x: isInView ? 0 : 28,
            scale: isInView ? 1 : 0.94,
          }}
          transition={{
            duration: 1,
            delay: isInView ? index * 0.08 + 0.12 : 0,
            ease: easePremium,
          }}
          whileHover={{
            scale: 1.055,
            x: -3,
            transition: { duration: 0.7, ease: easePremium },
          }}
          className={`absolute object-contain pointer-events-none mix-blend-multiply transition-opacity duration-700 group-hover:opacity-90 ${
            item.isMain
              ? "right-0 bottom-0 w-1/2 h-auto max-h-[60%] md:max-h-[80%]"
              : item.isAnalytics
                ? "-right-2 -bottom-4 w-2/3 h-auto max-h-[55%] md:-right-6 md:-bottom-7 md:w-[60%] md:max-h-[85%]"
                : "right-2 bottom-0 w-2/3 h-auto max-h-[60%] md:w-1/2 md:max-h-[95%]"
          }`}
        />
      )}

      {/* COMPLIANCE */}
      {item.isCompliance && (
        <motion.div
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1, ease: easePremium }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-blue-400/10 to-emerald-500/20 pointer-events-none"
        />
      )}

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between gap-8">
        {/* ICON */}
        <motion.div
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 14,
            scale: isInView ? 1 : 0.88,
          }}
          transition={{
            duration: 0.65,
            delay: isInView ? index * 0.08 + 0.25 : 0,
            ease: easePremium,
          }}
          whileHover={{
            y: -2,
            scale: 1.06,
            transition: { duration: 0.3, ease: easePremium },
          }}
          className={`relative p-2.5 rounded-xl border w-fit shadow-sm transition-all duration-500 group-hover:border-emerald-200 group-hover:bg-emerald-50 ${item.iconBg}`}
        >
          <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          {item.icon}
        </motion.div>

        {/* TEXT */}
        <motion.div
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 16,
          }}
          transition={{
            duration: 0.7,
            delay: isInView ? index * 0.08 + 0.32 : 0,
            ease: easePremium,
          }}
          className="space-y-1.5 max-w-md"
        >
          <h3 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
            {item.title}

            {!item.isMain && (
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            )}
          </h3>

          <p className="text-xs text-slate-500 leading-relaxed font-normal">
            {item.description}
          </p>
        </motion.div>
      </div>

      {/* HOVER LIGHT */}
      <motion.div
        animate={{ opacity: isInView ? undefined : 0 }}
        className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            "linear-gradient(120deg, transparent 20%, rgba(16,185,129,0.08) 50%, transparent 80%)",
        }}
      />
    </motion.div>
  );
}