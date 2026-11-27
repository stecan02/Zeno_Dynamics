import { ArrowRight, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import "@google/model-viewer"; // registra il web component <model-viewer>
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const easePremium = [0.16, 1, 0.3, 1];

/* Modello 3D (file in public/zeno_modellino.glb) */
const MODEL_SRC = "/zeno_modellino.glb";

/*
 * Pre-caricamento: il download parte appena questo modulo viene importato,
 * cioè prima ancora che il componente venga montato. Quando <model-viewer>
 * chiede il file lo trova già nella cache del browser.
 */
if (typeof window !== "undefined") {
  fetch(MODEL_SRC, { priority: "high" }).catch(() => {});
}

/* Angolo da cui parte la rotazione d'ingresso e angolo di riposo */
const ORBIT_START = 250;
const ORBIT_REST = 30;

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
  const modelRef = useRef(null);
  const isMobile = useIsCompact();
  const reduceMotion = useReducedMotion();

  const [modelReady, setModelReady] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  /*
   * once: false → quando la sezione esce dal viewport torna allo stato
   * nascosto, e quando rientra tutte le animazioni ripartono.
   */
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0,
  });

  /* Il modello è pronto quando <model-viewer> ha finito di caricarlo */
  useEffect(() => {
    const el = modelRef.current;
    if (!el) return;

    const done = () => setModelReady(true);

    if (el.loaded) done();
    el.addEventListener("load", done);
    el.addEventListener("error", done);

    return () => {
      el.removeEventListener("load", done);
      el.removeEventListener("error", done);
    };
  }, []);

  /*
   * Rotazione d'ingresso: mentre il modello scende, la camera gira
   * intorno a lui e rallenta fino all'angolo di riposo. Solo dopo parte
   * l'auto-rotate. Se la sezione esce dal viewport tutto si riarma.
   */
  useEffect(() => {
    const el = modelRef.current;
    if (!el) return;

    const setOrbit = (az) => {
      el.cameraOrbit = `${az}deg 75deg auto`;
    };

    if (reduceMotion) {
      setOrbit(ORBIT_REST);
      el.jumpCameraToGoal?.();
      setIntroDone(true);
      return;
    }

    if (!modelReady || !isInView) {
      setIntroDone(false);
      setOrbit(ORBIT_START);
      el.jumpCameraToGoal?.();
      return;
    }

    const controls = animate(ORBIT_START, ORBIT_REST, {
      duration: 2.1,
      delay: 0.1,
      ease: easePremium,
      onUpdate: setOrbit,
      onComplete: () => setIntroDone(true),
    });

    return () => controls.stop();
  }, [modelReady, isInView, reduceMotion]);

  /* L'effetto d'ingresso parte solo con modello caricato E sezione visibile */
  const arrive = modelReady && isInView;

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

  const stageInitial = isMobile
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
        RIGHT / 3D MODEL SU PIATTAFORMA
        Nessun box: il modello poggia su una piattaforma ellittica
        direttamente sullo sfondo della pagina.
        Sotto lg lo stage è centrato e limitato a max-w-xl.
      */}
      <motion.div
        initial={false}
        animate={isInView ? { ...visible, scale: 1 } : stageInitial}
        transition={{
          duration: isMobile ? 0.85 : 1,
          delay: isInView ? 0.12 : 0,
          ease: easePremium,
        }}
        className="relative mx-auto w-full min-w-0 max-w-xl lg:col-span-5 lg:mx-0 lg:max-w-none"
      >
        {/* STAGE: modello + piattaforma */}
        <div className="relative aspect-[4/5] w-full sm:aspect-square">
          {/* GLOW VERDE DIETRO AL MODELLO */}
          <div className="pointer-events-none absolute left-1/2 top-[45%] h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/15 blur-3xl" />

          {/* PIATTAFORMA (ferma, il modello ci ruota sopra) — più ampia */}
          <div className="pointer-events-none absolute bottom-[6%] left-1/2 h-[17%] w-[94%] -translate-x-1/2">
            {/* ombra a terra */}
            <div className="absolute inset-x-[5%] -bottom-3 top-[40%] rounded-[50%] bg-slate-900/25 blur-2xl" />

            {/* disco principale */}
            <div className="absolute inset-0 rounded-[50%] border border-slate-200 bg-gradient-to-b from-white to-slate-200 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.35)]" />

            {/* anello smeraldo: si apre all'ingresso */}
            <motion.div
              initial={false}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{
                duration: 0.9,
                delay: isInView ? 0.5 : 0,
                ease: easePremium,
              }}
              className="absolute inset-[9%] rounded-[50%] border border-emerald-500/50"
            />

            {/* anello interno sottile */}
            <div className="absolute inset-[24%] rounded-[50%] border border-slate-300/70" />

            {/* ONDA D'URTO: parte quando il modello atterra sulla piattaforma */}
            {!reduceMotion && (
              <motion.div
                initial={false}
                animate={
                  arrive
                    ? { opacity: [0, 0.85, 0], scale: [0.35, 1.18] }
                    : { opacity: 0, scale: 0.35 }
                }
                transition={{
                  duration: 1.3,
                  delay: arrive ? 0.8 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 rounded-[50%] border-2 border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.55)]"
              />
            )}

            {/* BAGLIORE sulla piattaforma all'atterraggio */}
            {!reduceMotion && (
              <motion.div
                initial={false}
                animate={
                  arrive
                    ? { opacity: [0, 0.9, 0.25] }
                    : { opacity: 0 }
                }
                transition={{
                  duration: 1.6,
                  delay: arrive ? 0.8 : 0,
                  ease: "easeOut",
                }}
                className="absolute inset-[18%] rounded-[50%] bg-emerald-300/50 blur-xl"
              />
            )}
          </div>

          {/* COLONNA DI LUCE: si accende mentre il modello scende */}
          {!reduceMotion && (
            <motion.div
              initial={false}
              animate={
                arrive
                  ? { opacity: [0, 0.95, 0.3], scaleY: [0.2, 1] }
                  : { opacity: 0, scaleY: 0.2 }
              }
              transition={{
                duration: 1.8,
                delay: arrive ? 0.1 : 0,
                ease: easePremium,
              }}
              className="pointer-events-none absolute bottom-[14%] left-1/2 z-0 h-[66%] w-[56%] -translate-x-1/2 bg-gradient-to-t from-emerald-300/40 via-emerald-200/15 to-transparent blur-[2px]"
              style={{
                clipPath: "polygon(26% 0, 74% 0, 100% 100%, 0 100%)",
                transformOrigin: "50% 100%",
              }}
            />
          )}

          {/* MODELLO 3D: scende dall'alto, mette a fuoco e ruota fino alla posa */}
          <motion.div
            initial={false}
            animate={
              arrive || reduceMotion
                ? {
                    opacity: modelReady ? 1 : 0,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    y: reduceMotion ? 0 : -90,
                    scale: reduceMotion ? 1 : 0.86,
                    filter: reduceMotion ? "blur(0px)" : "blur(14px)",
                  }
            }
            transition={{
              duration: 1.35,
              delay: arrive ? 0.12 : 0,
              ease: easePremium,
            }}
            className="absolute inset-0 z-10"
          >
            <model-viewer
              ref={modelRef}
              src={MODEL_SRC}
              alt="Modello 3D della stazione Zeno AI"
              camera-controls
              {...(introDone && !reduceMotion ? { "auto-rotate": true } : {})}
              auto-rotate-delay="1500"
              rotation-per-second="20deg"
              interaction-prompt="none"
              disable-zoom
              shadow-intensity="1.2"
              shadow-softness="0.9"
              exposure="1.1"
              environment-image="neutral"
              camera-orbit={`${ORBIT_START}deg 75deg auto`}
              loading="eager"
              reveal="auto"
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                "--poster-color": "transparent",
                "--progress-bar-height": "0px",
                "--progress-bar-color": "transparent",
                touchAction: "pan-y", // su mobile non blocca lo scroll verticale
              }}
            >
              {/* Sostituisce la barra di caricamento di default con nulla */}
              <div slot="progress-bar" />
            </model-viewer>
          </motion.div>
        </div>

        {/* EDGE AI CARD (sotto la piattaforma, non copre il modello) */}
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
          className="relative z-20 mx-auto -mt-2 max-w-sm"
        >
          <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/95 p-3 text-xs text-white shadow-xl shadow-slate-950/20 backdrop-blur-md">
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
      </motion.div>
    </section>
  );
}