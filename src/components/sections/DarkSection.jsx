import React, { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  Building2,
  Zap,
  ArrowRight,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// Import immagini per il carosello
import gestionale2 from "../../assets/sfondo_con_zeno.png";
import gestionale3 from "../../assets/sfondo_con_zeno2.png";

const easePremium = [0.16, 1, 0.3, 1];

export function DarkSection({
  darkSectionRef,
  isDarkSectionVisible = true,
  carouselImages,
  currentSlide: propCurrentSlide,
  setCurrentSlide: propSetCurrentSlide,
}) {
  const [internalSlide, setInternalSlide] = useState(0);

  const currentSlide =
    propCurrentSlide !== undefined ? propCurrentSlide : internalSlide;

  const setCurrentSlide = propSetCurrentSlide || setInternalSlide;

  const images =
    carouselImages && carouselImages.length > 0
      ? carouselImages
      : [gestionale2, gestionale3];

  const animationRef = useRef(null);

  const isInView = useInView(animationRef, {
    once: false,
    amount: 0,
  });

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length, setCurrentSlide]);

  /*
   * MARGINI LATERALI
   * - mobile / sm: il box esce dal padding della pagina (-mx-4 / -mx-8)
   * - md (iPad mini 768px → 1023px): margine 0, quindi resta il bordo
   *   bianco laterale del contenitore
   * - lg: di nuovo full-bleed (-mx-16) come prima
   */
  return (
    <section
      id="dark-section"
      ref={(node) => {
        animationRef.current = node;

        if (typeof darkSectionRef === "function") {
          darkSectionRef(node);
        } else if (darkSectionRef) {
          darkSectionRef.current = node;
        }
      }}
      className={`relative rounded-[2rem] md:rounded-[2.5rem] bg-slate-950 text-white p-8 md:p-10 lg:p-16 overflow-hidden shadow-2xl border border-slate-800/80 -mx-4 sm:-mx-8 md:mx-0 lg:-mx-16 transition-all duration-1000 transform ${
        isDarkSectionVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      {/* AMBIENT BACKGROUND */}
      <motion.div
        initial={false}
        animate={{
          opacity: isInView ? 1 : 0,
          scale: isInView ? 1 : 0.8,
        }}
        transition={{ duration: 1.6, ease: easePremium }}
        className="absolute top-0 right-0 w-40 h-40 md:w-[600px] md:h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"
      />

      <motion.div
        initial={false}
        animate={{
          opacity: isInView ? 1 : 0,
          scale: isInView ? 1 : 0.85,
        }}
        transition={{ duration: 1.8, delay: 0.15, ease: easePremium }}
        className="absolute bottom-0 left-0 w-36 h-36 md:w-[500px] md:h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div
        initial={false}
        animate={{ opacity: isInView ? 0.1 : 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={false}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 10,
            }}
            transition={{
              duration: 0.65,
              delay: isInView ? 0.05 : 0,
              ease: easePremium,
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase"
          >
            <motion.span
              animate={isInView ? { scale: [1, 1.25, 1] } : { scale: 1 }}
              transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-emerald-400"
            />
            Ecosistema Zeno
          </motion.div>

          <motion.h2
            initial={false}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 28,
            }}
            transition={{
              duration: 0.9,
              delay: isInView ? 0.1 : 0,
              ease: easePremium,
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] text-white"
          >
            Zeno, l'era della gestione rifiuti 2.0
          </motion.h2>

          <motion.p
            initial={false}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 18,
            }}
            transition={{
              duration: 0.8,
              delay: isInView ? 0.2 : 0,
              ease: easePremium,
            }}
            className="text-slate-300 text-base leading-relaxed font-normal max-w-2xl"
          >
            Un ecosistema unificato che integra Edge AI, inferenza hardware
            dedicata e smistamento meccanico all'origine per eliminare
            l'errore umano.
          </motion.p>

          <div className="space-y-4 pt-2">
            <FeatureItem
              isInView={isInView}
              delay={0.32}
              icon={<CheckCircle2 className="w-4 h-4" />}
              title="Riconoscimento in millisecondi"
              description="Rilevazione immediata senza dipendere dalla rete."
            />

            <FeatureItem
              isInView={isInView}
              delay={0.45}
              icon={<Zap className="w-4 h-4" />}
              title="Integrazione Plug & Play"
              description="Possibilità di personalizzazione ed integrazione con i sistemi attuali."
            />
          </div>

          {/* CTA */}
          <motion.div
            initial={false}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 16,
            }}
            transition={{
              duration: 0.75,
              delay: isInView ? 0.58 : 0,
              ease: easePremium,
            }}
            className="pt-4"
          >
            <Button
              className="relative overflow-hidden bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-6 text-base rounded-full cursor-pointer shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-emerald-500/30 group"
            >
              <motion.span
                initial={{ x: "-150%" }}
                animate={isInView ? { x: ["-150%", "150%"] } : { x: "-150%" }}
                transition={{
                  duration: 1.1,
                  delay: isInView ? 1 : 0,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 left-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none"
              />

              <Link
                to="/contatti"
                className="relative z-10 flex items-center gap-2"
              >
                Richiedi una demo
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 min-w-0">
          {/* CAROUSEL */}
          <motion.div
            initial={false}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 35,
              scale: isInView ? 1 : 0.97,
            }}
            transition={{
              duration: 1,
              delay: isInView ? 0.18 : 0,
              ease: easePremium,
            }}
            className="sm:col-span-2 relative aspect-[16/9] w-full rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group"
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  scale: index === currentSlide ? 1 : 1.04,
                }}
                transition={{ duration: 0.9, ease: easePremium }}
                className={`absolute inset-0 ${
                  index === currentSlide ? "z-10" : "z-0 pointer-events-none"
                }`}
              >
                <motion.img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  initial={false}
                  animate={
                    index === currentSlide ? { scale: [1, 1.025] } : { scale: 1 }
                  }
                  transition={{ duration: 4, ease: "linear" }}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            ))}

            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none z-20" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/20 to-transparent pointer-events-none z-20" />

            <motion.div
              initial={{ x: "-150%", opacity: 0 }}
              animate={
                isInView
                  ? { x: ["-150%", "150%"], opacity: [0, 0.18, 0] }
                  : { x: "-150%", opacity: 0 }
              }
              transition={{
                duration: 1.8,
                delay: isInView ? 0.8 : 0,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="absolute inset-y-0 left-0 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none z-30"
            />

            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-40"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.rect
                x="0.6"
                y="0.6"
                width="98.8"
                height="98.8"
                rx="5"
                fill="none"
                stroke="rgba(255,255,255,0.75)"
                strokeWidth="1.2"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="0.11 0.89"
                initial={{ strokeDashoffset: 1, opacity: 0 }}
                animate={
                  isInView
                    ? {
                        strokeDashoffset: [1, 0],
                        opacity: [0, 0.7, 0],
                      }
                    : { strokeDashoffset: 1, opacity: 0 }
                }
                transition={{
                  duration: 2.8,
                  delay: isInView ? 0.45 : 0,
                  ease: "easeInOut",
                }}
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-50 bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentSlide
                      ? "w-8 bg-emerald-400"
                      : "w-2 bg-slate-600 hover:bg-slate-400"
                  }`}
                  aria-label={`Vai alla foto ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <TechnologyCard
            isInView={isInView}
            delay={0.42}
            icon={<Server className="w-5 h-5" />}
            label="Edge Processing"
            title="Architettura Hardware Dedicata"
            description="Ogni unità Zeno opera in autonomia locale tramite modulo TPU integrato. L'inferenza non richiede connettività continuativa."
          />

          <TechnologyCard
            isInView={isInView}
            delay={0.55}
            icon={<Building2 className="w-5 h-5" />}
            label="Automazione Intelligente"
            title="Smistamento Meccanico Assistito"
            description="Attuazione rapida che indirizza il rifiuto nel vano corretto. Zero errori di separazione e certificazione istantanea."
            featured
          />
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   FEATURE ITEM
================================================================ */

function FeatureItem({ isInView, delay, icon, title, description }) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 12,
      }}
      transition={{
        duration: 0.7,
        delay: isInView ? delay : 0,
        ease: easePremium,
      }}
      className="flex items-start gap-3"
    >
      <motion.div
        initial={false}
        animate={{
          scale: isInView ? 1 : 0.8,
          opacity: isInView ? 1 : 0,
        }}
        transition={{
          duration: 0.55,
          delay: isInView ? delay + 0.05 : 0,
          ease: easePremium,
        }}
        className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mt-0.5"
      >
        {icon}
      </motion.div>

      <div>
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        <p className="text-xs text-slate-400">{description}</p>
      </div>
    </motion.div>
  );
}

/* ================================================================
   TECHNOLOGY CARD
================================================================ */

function TechnologyCard({
  isInView,
  delay,
  icon,
  label,
  title,
  description,
  featured = false,
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 28,
        scale: isInView ? 1 : 0.97,
      }}
      transition={{
        duration: 0.85,
        delay: isInView ? delay : 0,
        ease: easePremium,
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.3, ease: easePremium },
      }}
      className={`relative overflow-hidden p-6 rounded-2xl flex flex-col justify-between group transition-colors duration-300 ${
        featured
          ? "bg-gradient-to-br from-emerald-950/40 via-slate-900/80 to-slate-900/90 border border-emerald-500/20 hover:border-emerald-400/50"
          : "bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/90"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={
          isInView
            ? { opacity: [0, 0.08, 0], x: ["-100%", "200%"] }
            : { opacity: 0, x: "-100%" }
        }
        transition={{
          duration: 1.5,
          delay: isInView ? delay + 0.7 : 0,
          ease: "easeInOut",
        }}
        className="absolute inset-y-0 left-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none"
      />

      <div className="relative z-10">
        <motion.div
          initial={false}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.8,
          }}
          transition={{
            duration: 0.6,
            delay: isInView ? delay + 0.08 : 0,
            ease: easePremium,
          }}
          className={`p-2.5 rounded-xl w-fit mb-4 transition-transform duration-300 group-hover:scale-110 ${
            featured
              ? "bg-emerald-400/10 border border-emerald-400/30 text-emerald-300"
              : "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
          }`}
        >
          {icon}
        </motion.div>

        <motion.span
          initial={false}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{
            duration: 0.5,
            delay: isInView ? delay + 0.15 : 0,
          }}
          className={`block text-[10px] font-bold tracking-widest uppercase ${
            featured ? "text-emerald-300" : "text-emerald-400"
          }`}
        >
          {label}
        </motion.span>

        <motion.h3
          initial={false}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 8,
          }}
          transition={{
            duration: 0.6,
            delay: isInView ? delay + 0.18 : 0,
            ease: easePremium,
          }}
          className="text-base font-bold text-white mt-1 mb-2"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={false}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 8,
          }}
          transition={{
            duration: 0.6,
            delay: isInView ? delay + 0.22 : 0,
            ease: easePremium,
          }}
          className={`text-xs leading-relaxed ${
            featured ? "text-slate-300" : "text-slate-400"
          }`}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}