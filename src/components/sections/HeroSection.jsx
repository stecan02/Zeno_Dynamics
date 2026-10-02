import { ArrowRight, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import zenoStation from "@/assets/zeno_real.png";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const easePremium = [0.16, 1, 0.3, 1];

/*
 * "Compatto" = mobile + tablet (< 1024px, cioè sotto `lg`).
 * Il layout a due colonne esiste solo da `lg`, quindi sotto quella soglia
 * usiamo ingressi verticali: niente scivolamenti laterali in colonna singola.
 * Lo stato è inizializzato subito per evitare il flash al primo render.
 */
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

export function HeroSection() {
  const sectionRef = useRef(null);
  const isMobile = useIsCompact();

  /*
   * once: false → quando la sezione esce dal viewport torna allo stato
   * nascosto, e quando rientra tutte le animazioni ripartono.
   */
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0,
  });

  /* Stato finale comune */
  const visible = { opacity: 1, x: 0, y: 0 };

  /*
   * Stati nascosti: x e y sono sempre espliciti, così non resta mai
   * un offset residuo se cambia il breakpoint.
   */
  const titleInitial = { opacity: 0, x: 0, y: isMobile ? 24 : 35 };

  const textInitial = isMobile
    ? { opacity: 0, x: 0, y: 18 }
    : { opacity: 0, x: -35, y: 0 };

  const buttonInitial = textInitial;

  const imageInitial = isMobile
    ? { opacity: 0, x: 0, y: 28, scale: 0.97 }
    : { opacity: 0, x: 45, y: 0, scale: 0.96 };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="grid items-center gap-12 pt-4 lg:grid-cols-12 lg:gap-16"
    >
      {/* LEFT CONTENT */}
      <div className="min-w-0 space-y-7 lg:col-span-7">
        {/* TITLE */}
        <motion.h1
          initial={false}
          animate={isInView ? visible : titleInitial}
          transition={{
            duration: isMobile ? 0.7 : 0.8,
            ease: easePremium,
          }}
          className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-6xl"
        >
          Una nuova{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            gestione dei rifiuti
          </span>{" "}
          per il tuo business
        </motion.h1>

        {/* MAIN DESCRIPTION */}
        <motion.p
          initial={false}
          animate={isInView ? visible : textInitial}
          transition={{
            duration: isMobile ? 0.65 : 0.75,
            delay: isInView ? 0.12 : 0,
            ease: easePremium,
          }}
          className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          Il sistema Edge AI che smista fisicamente i rifiuti all'origine.
          Zero errori umani nella separazione dei materiali e metriche ESG
          subito pronte in cloud.
        </motion.p>

        {/* SECONDARY DESCRIPTION */}
        <motion.p
          initial={false}
          animate={isInView ? visible : textInitial}
          transition={{
            duration: isMobile ? 0.65 : 0.75,
            delay: isInView ? 0.24 : 0,
            ease: easePremium,
          }}
          className="max-w-xl border-l-2 border-emerald-500 pl-4 text-xs leading-relaxed text-slate-500 sm:text-sm"
        >
          Dalla visione artificiale all'automazione sul campo: dati chiari e
          processi più efficienti per prendere decisioni migliori ogni giorno.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={false}
          animate={isInView ? visible : buttonInitial}
          transition={{
            duration: isMobile ? 0.65 : 0.75,
            delay: isInView ? 0.36 : 0,
            ease: easePremium,
          }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <Link
            to="/contatti"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-slate-950 px-6 py-3.5 text-xs font-bold text-white shadow-xl shadow-slate-950/20 transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800 sm:text-sm"
          >
            <span>Inizia Ora</span>

            <ArrowRight className="h-4 w-4 text-emerald-400 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={() =>
              document.getElementById("dark-section")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 sm:text-sm"
          >
            Scopri di più

            <ArrowRight className="h-4 w-4 text-emerald-600 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/*
        RIGHT / IMAGE
        Sotto lg l'immagine è centrata e limitata a max-w-xl, così su
        iPad mini non diventa un quadrato di 700px.
      */}
      <motion.div
        initial={false}
        animate={isInView ? { ...visible, scale: 1 } : imageInitial}
        transition={{
          duration: isMobile ? 0.85 : 1,
          delay: isInView ? 0.12 : 0,
          ease: easePremium,
        }}
        className="relative mx-auto w-full min-w-0 max-w-xl lg:col-span-5 lg:mx-0 lg:max-w-none"
      >
        {/* SOFT SHADOW */}
        <div className="pointer-events-none absolute -inset-5 rounded-[3rem] bg-slate-300/20 blur-3xl" />

        <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-square">
            <img
              src={zenoStation}
              alt="Stazione Hardware Zeno AI"
              className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
            />

            {/* DARK GRADIENT */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            {/* IMAGE REFLECTION 1 */}
            <motion.div
              initial={{ x: "-160%", opacity: 0 }}
              animate={
                isInView
                  ? { x: ["-160%", "160%"], opacity: [0, 0.45, 0] }
                  : { x: "-160%", opacity: 0 }
              }
              transition={{
                duration: isMobile ? 2.4 : 2.2,
                delay: isInView ? 0.65 : 0,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[38%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[1px]"
            />

            {/* IMAGE REFLECTION 2 */}
            <motion.div
              initial={{ x: "-180%", opacity: 0 }}
              animate={
                isInView
                  ? { x: ["-180%", "180%"], opacity: [0, 0.12, 0] }
                  : { x: "-180%", opacity: 0 }
              }
              transition={{
                duration: isMobile ? 2.9 : 2.8,
                delay: isInView ? 0.9 : 0,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[22%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/50 to-transparent blur-md"
            />

            {/* SOFT TOP LIGHT */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
          </div>

          {/* EDGE AI CARD */}
          <motion.div
            initial={false}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: isMobile ? 12 : 15 }
            }
            transition={{
              duration: 0.7,
              delay: isInView ? 0.55 : 0,
              ease: easePremium,
            }}
            className="absolute bottom-4 left-4 right-4 z-30"
          >
            <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/90 p-3 text-xs text-white backdrop-blur-md">
              <div className="flex min-w-0 items-center gap-2.5">
                {/* CPU ICON */}
                <motion.div
                  initial={false}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.85, opacity: 0 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: isInView ? 0.68 : 0,
                    ease: easePremium,
                  }}
                  className="shrink-0 rounded-lg border border-emerald-500/30 bg-emerald-500/20 p-1.5 text-emerald-400"
                >
                  <Cpu className="h-4 w-4" />
                </motion.div>

                <div className="min-w-0">
                  <div className="font-bold text-white">Edge AI Unit</div>

                  <div className="text-[10px] text-slate-400">
                    YOLO Custom Neural Net
                  </div>
                </div>
              </div>

              {/* ONLINE */}
              <motion.span
                initial={false}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: isMobile ? 5 : 8 }
                }
                transition={{
                  duration: 0.6,
                  delay: isInView ? 0.76 : 0,
                  ease: easePremium,
                }}
                className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-400"
              >
                ONLINE
              </motion.span>
            </div>
          </motion.div>

          {/* BORDER REFLECTION */}
          <svg
            className="pointer-events-none absolute inset-0 z-40 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.rect
              x="0.6"
              y="0.6"
              width="98.8"
              height="98.8"
              rx="4"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.2"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="0.10 0.90"
              initial={{ strokeDashoffset: 1, opacity: 0 }}
              animate={
                isInView
                  ? {
                      strokeDashoffset: [1, 0],
                      opacity: [0, 0.55, 0],
                    }
                  : { strokeDashoffset: 1, opacity: 0 }
              }
              transition={{
                duration: isMobile ? 3 : 2.8,
                delay: isInView ? 0.8 : 0,
                ease: "easeInOut",
              }}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}