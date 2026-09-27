import { ArrowRight, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import zenoStation from "@/assets/zeno_real.png";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="grid items-center gap-12 pt-4 lg:grid-cols-12 lg:gap-16"
    >
      {/* LEFT CONTENT */}
      <div className="space-y-7 lg:col-span-7">

        {/* TITOLO - dal basso */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-6xl"
        >
          Una nuova{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            gestione dei rifiuti
          </span>{" "}
          per il tuo business
        </motion.h1>

        {/* TESTO PRINCIPALE - da sinistra */}
        <motion.p
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.75,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          Il sistema Edge AI che smista fisicamente i rifiuti all'origine.
          Zero errori umani nella separazione dei materiali e metriche ESG
          subito pronte in cloud.
        </motion.p>

        {/* TESTO SECONDARIO - ancora da sinistra */}
        <motion.p
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.75,
            delay: 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-xl border-l-2 border-emerald-500 pl-4 text-xs leading-relaxed text-slate-500 sm:text-sm"
        >
          Dalla visione artificiale all'automazione sul campo: dati chiari e
          processi più efficienti per prendere decisioni migliori ogni giorno.
        </motion.p>

        {/* BOTTONI - da sinistra */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.75,
            delay: 0.42,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2.5 rounded-xl bg-slate-950 px-6 py-3.5 text-xs font-bold text-white shadow-xl shadow-slate-950/20 transition-all hover:scale-[1.02] hover:bg-slate-800 sm:text-sm"
          >
            <span>Inizia Ora</span>
            <ArrowRight className="h-4 w-4 text-emerald-400" />
          </Link>

          <button
            type="button"
            onClick={() =>
              document
                .getElementById("dark-section")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
            }
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-100 sm:text-sm"
          >
            Scopri di più
            <ArrowRight className="h-4 w-4 text-emerald-600" />
          </button>
        </motion.div>
      </div>

      {/* RIGHT / IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 45, scale: 0.96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative lg:col-span-5"
      >
        {/* GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-emerald-500/20 blur-3xl"
        />

        <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">

          {/* IMAGE */}
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-square">

            <img
              src={zenoStation}
              alt="Stazione Hardware Zeno AI"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* DARK GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            {/* AI SCAN */}
            <motion.div
              initial={{ y: "-120%" }}
              animate={{ y: "120%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-x-0 h-28 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent blur-md"
            />
          </div>

          {/* INFO CARD */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/90 p-3 text-xs text-white backdrop-blur-md">

              <div className="flex items-center gap-2.5">

                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/20 p-1.5 text-emerald-400">
                  <Cpu className="h-4 w-4" />
                </div>

                <div>
                  <div className="font-bold text-white">
                    Edge AI Unit
                  </div>

                  <div className="text-[10px] text-slate-400">
                    YOLO Custom Neural Net
                  </div>
                </div>

              </div>

              <motion.span
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-400"
              >
                ONLINE
              </motion.span>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}