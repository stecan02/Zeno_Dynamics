import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Factory,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Target,
  Check,
  Globe,
  Users,
  Code2,
  Wrench,
  TrendingUp,
  Sparkles,
  Compass,
  Zap,
  Activity,
  Layers,
  BarChart3,
} from "lucide-react";

import dashboard from "@/assets/hw.png";
import software from "@/assets/pc.jpg";
import giorgio from "@/assets/gio.jpg";
import stefano from "@/assets/ste.jpg";
import esg from "@/assets/esg.png";
import teamPhoto from "@/assets/pitch.jpg";
import ZenoDynamics from "@/assets/ZenoDynamics.png";

import { motion, useInView } from "framer-motion";

const easePremium = [0.16, 1, 0.3, 1];

const metrics = [
  {
    value: "96.1%",
    label: "Accuratezza Vision",
    detail: "Modello Edge Custom",
  },
  {
    value: "< 120ms",
    label: "Latenza Inference",
    detail: "Elaborazione locale",
  },
  {
    value: "UNI EN 14803",
    label: "Compliance PAYT",
    detail: "Standard industriale",
  },
  {
    value: "-35%",
    label: "Contaminazione",
    detail: "Impianti pilota",
  },
];

const principles = [
  {
    icon: Target,
    title: "Impatto Misurabile",
    badge: "ROI & Efficienza",
    gradient:
      "from-emerald-500/20 via-emerald-500/5 to-transparent",
    accentColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    glowColor: "group-hover:shadow-emerald-500/10",
    text: "Trasformiamo ogni conferimento in un dato utile per ridurre sprechi, costi e inefficienze operative in tempo reale.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligenza Edge-Native",
    badge: "Zero Latenza",
    gradient:
      "from-teal-500/20 via-teal-500/5 to-transparent",
    accentColor: "text-teal-400",
    borderColor: "hover:border-teal-500/50",
    glowColor: "group-hover:shadow-teal-500/10",
    text: "L’AI elabora i flussi direttamente sul campo, garantendo risposta istantanea e continuità operativa anche offline.",
  },
  {
    icon: ShieldCheck,
    title: "Dati Certificati & ESG",
    badge: "Audit Ready",
    gradient:
      "from-cyan-500/20 via-cyan-500/5 to-transparent",
    accentColor: "text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    glowColor: "group-hover:shadow-cyan-500/10",
    text: "Tracciabilità, normativa UNI EN 14803 e reportistica CSRD automatizzata per gli audit di sostenibilità aziendale.",
  },
];

const methodSteps = [
  {
    number: "01",
    phase: "FASE 1",
    title: "Analisi dei Flussi",
    text: "Studiamo le dinamiche sul campo: tipologia dei materiali, ritmi di conferimento, attriti e vincoli fisici dell’impianto.",
    tags: ["Audit Operativo", "Mapping Dati", "Zero Interruzioni"],
    icon: Activity,
  },
  {
    number: "02",
    phase: "FASE 2",
    title: "Integrazione Co-Progettata",
    text: "Dispieghiamo stazioni Hardware Edge AI adattabili ai processi e ai macchinari esistenti, senza fermare l’operatività.",
    tags: ["Edge Hardware", "Computer Vision", "Plug & Play"],
    icon: Layers,
  },
  {
    number: "03",
    phase: "FASE 3",
    title: "Misurazione e Scalabilità",
    text: "Dati leggibili in Cloud, KPI azionabili in dashboard ed export diretto per reportistica e bilanci ESG di sostenibilità.",
    tags: ["Cloud Sync", "API ERP", "CSRD Export"],
    icon: BarChart3,
  },
];

/* ================================================================
   RESPONSIVE
================================================================ */

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const update = () => {
      setIsMobile(mediaQuery.matches);
    };

    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  return isMobile;
}

/* ================================================================
   REUSABLE ANIMATION
================================================================ */

function AnimatedSection({
  children,
  className = "",
  initial = { opacity: 0, y: 35 },
  duration = 0.8,
  delay = 0,
}) {
  const ref = useRef(null);
  const isMobile = useIsMobile();

  const isInView = useInView(ref, {
    once: true,
    amount: 0,
  });

  const mobileInitial = {
    opacity: 0,
    x: 0,
    y:
      typeof initial.y === "number"
        ? Math.min(Math.abs(initial.y), 26)
        : 24,
    scale: initial.scale ?? 1,
  };

  const desktopInitial = {
    opacity: 0,
    x: initial.x ?? 0,
    y: initial.y ?? 0,
    scale: initial.scale ?? 1,
  };

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }
          : isMobile
          ? mobileInitial
          : desktopInitial
      }
      transition={{
        duration: isMobile ? Math.min(duration, 0.7) : duration,
        delay: isInView ? delay : 0,
        ease: easePremium,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ================================================================
   STAGGER ITEM
================================================================ */

function RevealItem({
  children,
  className = "",
  delay = 0,
  x = 0,
  y = 16,
  scale = 1,
}) {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isMobile ? 0 : x,
        y: isMobile ? Math.min(Math.abs(y), 20) : y,
        scale,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: isMobile ? 0.58 : 0.68,
        delay,
        ease: easePremium,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ================================================================
   ABOUT PAGE
================================================================ */

export function AboutPage() {
  const isMobile = useIsMobile();

  const ecosystemImages = [
    { src: software, alt: "Software Zeno" },
    { src: dashboard, alt: "Hardware e Stazione Zeno" },
  ];

  const teamImages = [
    { src: teamPhoto, alt: "Zeno Station - Hardware Edge AI" },
    { src: giorgio, alt: "Giorgio - CFO" },
    { src: stefano, alt: "Stefano - Co-founder & CEO" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

  /* ---------------------------------------------------------------
     SLIDESHOW ECOSISTEMA
  --------------------------------------------------------------- */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex + 1) % ecosystemImages.length
      );
    }, 2000);

    return () => clearInterval(timer);
  }, [ecosystemImages.length]);

  /* ---------------------------------------------------------------
     SLIDESHOW TEAM
  --------------------------------------------------------------- */

  useEffect(() => {
    const teamTimer = setInterval(() => {
      setCurrentTeamIndex(
        (prevIndex) =>
          (prevIndex + 1) % teamImages.length
      );
    }, 2000);

    return () => clearInterval(teamTimer);
  }, [teamImages.length]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white font-sans text-slate-900">
      <main className="relative z-10 mx-auto max-w-7xl space-y-20 px-4 py-12 sm:px-6 sm:py-20 lg:px-8">

        {/* ============================================================
            HERO
        ============================================================ */}

        <section className="grid items-center gap-12 pt-4 lg:grid-cols-12 lg:gap-16">

          {/* HERO TEXT */}

          <AnimatedSection
            initial={{
              opacity: 0,
              x: -60,
              y: 0,
              scale: 0.98,
            }}
            duration={0.9}
            className="space-y-7 lg:col-span-7"
          >
            <RevealItem
              delay={0.04}
              y={20}
              scale={0.985}
            >
              <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-6xl">
                Non basta raccogliere dati.{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  Bisogna sapere cosa farne.
                </span>
              </h1>
            </RevealItem>

            <RevealItem
              delay={0.14}
              y={18}
            >
              <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Sviluppiamo infrastrutture Hardware Edge AI per trasformare ogni
                conferimento di rifiuto in conoscenza trasparente, utile e
                misurabile.
              </p>
            </RevealItem>

            <RevealItem
              delay={0.24}
              y={18}
            >
              <p className="max-w-xl border-l-2 border-emerald-500 pl-4 text-xs leading-relaxed text-slate-500 sm:text-sm">
                Uniamo computer vision, sensoristica industriale e normativa per
                aiutare impianti, utility e manifatture a prendere decisioni
                migliori in tempo reale.
              </p>
            </RevealItem>

            <RevealItem
              delay={0.34}
              y={18}
            >
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contatti?topic=demo"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-slate-950 px-6 py-3.5 text-xs font-bold text-white shadow-xl shadow-slate-950/20 transition-all hover:scale-[1.02] hover:bg-slate-800 sm:text-sm"
                >
                  <span>Richiedi Demo Tecnica</span>
                  <ArrowRight className="h-4 w-4 text-emerald-400" />
                </Link>

                <a
                  href="#missione"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-100 sm:text-sm"
                >
                  La Nostra Missione
                </a>
              </div>
            </RevealItem>
          </AnimatedSection>

          {/* HERO IMAGE */}

          <AnimatedSection
            initial={{
              opacity: 0,
              x: 60,
              y: 0,
              scale: 0.94,
            }}
            duration={1}
            delay={0.08}
            className="relative lg:col-span-5"
          >
            <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-emerald-500/10 blur-2xl" />

            <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">

              <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-square">

                <motion.img
                  initial={{
                    scale: 1.08,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2,
                    ease: easePremium,
                  }}
                  src={ZenoDynamics}
                  alt="Stazione Hardware Zeno AI"
                  className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* REFLECTION */}

                <motion.div
                  initial={{
                    x: "-160%",
                    opacity: 0,
                  }}
                  animate={{
                    x: ["-160%", "160%"],
                    opacity: [0, 0.28, 0],
                  }}
                  transition={{
                    duration: 2.3,
                    delay: 0.7,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[28%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[2px]"
                />
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* ============================================================
            METRICS
        ============================================================ */}

        <AnimatedSection
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.97,
          }}
          duration={0.85}
        >
          <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl md:p-8">

            <motion.div
              initial={{
                x: "100%",
                opacity: 0,
              }}
              animate={{
                x: "0%",
                opacity: 1,
              }}
              transition={{
                duration: 1.1,
                delay: 0.15,
                ease: easePremium,
              }}
              className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl"
            />

            <div className="relative z-10 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
              {metrics.map((m, index) => (
                <RevealItem
                  key={m.label}
                  delay={0.12 + index * 0.1}
                  y={22}
                >
                  <div className="space-y-1 border-l border-slate-800 pl-4 text-center md:text-left first:border-0">
                    <div className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {m.value}
                    </div>

                    <div className="text-xs font-bold text-emerald-400 sm:text-sm">
                      {m.label}
                    </div>

                    <div className="text-[11px] text-slate-400">
                      {m.detail}
                    </div>
                  </div>
                </RevealItem>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* ============================================================
            MISSIONE
        ============================================================ */}

        <section
          id="missione"
          className="grid gap-10 lg:grid-cols-12 lg:items-center"
        >
          <AnimatedSection
            initial={{
              opacity: 0,
              x: -55,
              y: 0,
              scale: 0.985,
            }}
            duration={0.85}
            className="space-y-4 lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              <Target className="h-4 w-4" />
              <span>Perché Esistiamo</span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Rendere visibile il valore nascosto nei flussi di scarto.
            </h2>

            <p className="text-sm leading-relaxed text-slate-600">
              Dietro ogni conferimento ci sono tempi, responsabilità normative
              e risorse economiche. Quando i dati non ci sono o arrivano in
              ritardo, la sostenibilità resta soltanto una dichiarazione
              d'intenti.
            </p>
          </AnimatedSection>

          <AnimatedSection
            initial={{
              opacity: 0,
              x: 55,
              y: 0,
              scale: 0.96,
            }}
            duration={0.9}
            delay={0.08}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-7 text-white shadow-xl sm:p-8">

              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "120%",
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.5,
                  ease: easePremium,
                }}
                className="pointer-events-none absolute inset-y-0 z-20 w-1/4 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />

              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-emerald-500/10 blur-xl" />

              <p className="relative z-10 text-sm leading-relaxed text-slate-200 sm:text-base">
                "Zeno nasce per colmare questo vuoto: osservare con la massima
                precisione, interpretare la materia in tempo reale e restituire
                informazioni azionabili all'istante a chi deve gestire i
                processi."
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4 text-xs text-slate-400">
                <span>Zeno Dynamics Core Philosophy</span>
                <span className="font-mono text-emerald-400">
                  2026 Vision
                </span>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* ============================================================
            TEAM
        ============================================================ */}

        <section className="space-y-8">

          <AnimatedSection
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.985,
            }}
            duration={0.8}
            className="mx-auto flex max-w-3xl flex-col items-center space-y-3 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600">
              <Users className="h-3.5 w-3.5" />
              <span>La Nostra Squadra</span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Un unico team, competenze complementari.
            </h2>

            <p className="text-sm leading-relaxed text-slate-600">
              Dalla ricerca universitaria alla progettazione industriale:
              uniamo intelligenza artificiale, sviluppo software ed ingegneria
              meccatronica sotto lo stesso tetto.
            </p>
          </AnimatedSection>

          <AnimatedSection
            initial={{
              opacity: 0,
              y: 45,
              scale: 0.96,
            }}
            duration={0.95}
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 text-white shadow-2xl">

              <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 bg-emerald-500/10 blur-[130px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 bg-cyan-500/10 blur-[130px]" />

              <div className="grid items-stretch lg:grid-cols-12">

                {/* TEXT */}

                <div className="z-10 flex flex-col justify-between space-y-8 p-8 sm:p-12 lg:col-span-6">

                  <div className="space-y-5">

                    <RevealItem
                      delay={0.15}
                      x={-25}
                      y={15}
                    >
                      <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-bold text-emerald-400">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Ingegneria & Operations In-House</span>
                      </div>
                    </RevealItem>

                    <RevealItem
                      delay={0.24}
                      x={-30}
                      y={15}
                    >
                      <h3 className="text-2xl font-black leading-snug text-white sm:text-3xl">
                        Realizziamo ogni componente con visione integrata.
                      </h3>
                    </RevealItem>

                    <RevealItem
                      delay={0.34}
                      x={-25}
                      y={15}
                    >
                      <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                        Non esternalizziamo il cuore della nostra tecnologia.
                        Progettiamo e ottimizziamo direttamente sia i modelli
                        neurali di computer vision che l'hardware edge sul campo,
                        garantendo massima affidabilità e tempi di risposta
                        istantanei.
                      </p>
                    </RevealItem>

                  </div>

                  <div className="grid grid-cols-2 gap-3 border-t border-slate-800/80 pt-4">
                    {[
                      {
                        icon: Code2,
                        title: "AI & Full-Stack",
                        text: "Algoritmi proprietari",
                      },
                      {
                        icon: Wrench,
                        title: "Embedded & Edge",
                        text: "Prototipazione rapida",
                      },
                      {
                        icon: TrendingUp,
                        title: "Regulatory & PAYT",
                        text: "Compliance UNI EN 14803",
                      },
                      {
                        icon: Globe,
                        title: "Presenza sul Campo",
                        text: "Reggio Emilia & Impianti",
                      },
                    ].map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <RevealItem
                          key={item.title}
                          delay={0.4 + index * 0.08}
                          y={15}
                        >
                          <div className="flex items-start gap-2.5">
                            <div className="shrink-0 rounded-lg border border-slate-800 bg-slate-900 p-1.5 text-emerald-400">
                              <Icon className="h-4 w-4" />
                            </div>

                            <div>
                              <div className="text-xs font-bold text-white">
                                {item.title}
                              </div>

                              <div className="text-[11px] text-slate-400">
                                {item.text}
                              </div>
                            </div>
                          </div>
                        </RevealItem>
                      );
                    })}
                  </div>
                </div>

                {/* TEAM SLIDESHOW */}

                <div className="relative min-h-[22rem] overflow-hidden border-t border-slate-800 bg-slate-900 lg:col-span-6 lg:min-h-full lg:border-l lg:border-t-0">

                  {teamImages.map((img, index) => (
                    <motion.img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      initial={{
                        scale: 1.06,
                      }}
                      animate={{
                        scale: index === currentTeamIndex ? 1 : 1.06,
                        opacity: index === currentTeamIndex ? 0.8 : 0,
                      }}
                      transition={{
                        opacity: {
                          duration: 1,
                          ease: "easeInOut",
                        },
                        scale: {
                          duration: 2.2,
                          ease: easePremium,
                        },
                      }}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  ))}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent lg:bg-gradient-to-r lg:from-slate-950 lg:via-transparent lg:to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 z-20 sm:left-auto sm:max-w-xs">
                    <div className="space-y-1.5 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-md">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                        <Compass className="h-4 w-4" />
                        <span>Ingegneria Italiana</span>
                      </div>

                      <p className="text-[11px] leading-normal text-slate-300">
                        Guidati dalla passione per l'innovazione sostenibile e
                        dal rigore scientifico.
                      </p>
                    </div>
                  </div>

                  <div className="absolute right-4 top-4 z-20 flex gap-1.5 rounded-full border border-slate-800 bg-slate-950/60 p-1.5 backdrop-blur-md">
                    {teamImages.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          idx === currentTeamIndex
                            ? "w-4 bg-emerald-400"
                            : "w-1.5 bg-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* ============================================================
            ORIGIN STORY
        ============================================================ */}

        <AnimatedSection
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.97,
          }}
          duration={0.9}
        >
          <section className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12 lg:grid-cols-12">

            <AnimatedSection
              initial={{
                opacity: 0,
                x: -35,
                y: 0,
              }}
              duration={0.7}
              className="space-y-4 lg:col-span-5"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600">
                <MessageCircle className="h-4 w-4" />
                <span>Da Dove Partiamo</span>
              </div>

              <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Dalla difficoltà di decidere senza una visione completa.
              </h2>
            </AnimatedSection>

            <AnimatedSection
              initial={{
                opacity: 0,
                x: 35,
                y: 0,
              }}
              duration={0.75}
              delay={0.08}
              className="space-y-4 border-l-2 border-emerald-500 pl-6 text-xs leading-relaxed text-slate-600 sm:text-sm lg:col-span-7"
            >
              <p>
                In molti impianti le informazioni essenziali esistono già, ma
                sono frammentate: un dato nel gestionale pesate, uno
                nell'archivio manuale, un altro affidato alla memoria degli
                operatori.
              </p>

              <p>
                Zeno connette ciò che accade fisicamente al materiale con i
                sistemi gestionali ERP dell'azienda, fornendo reportistica
                pulita e certificata senza complicare il lavoro.
              </p>
            </AnimatedSection>
          </section>
        </AnimatedSection>

        {/* ============================================================
            TARGET
        ============================================================ */}

        <AnimatedSection
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.97,
          }}
          duration={0.9}
        >
          <section className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-white shadow-2xl sm:p-12 lg:grid lg:grid-cols-12 lg:gap-8">

            <AnimatedSection
              initial={{
                opacity: 0,
                x: -35,
                y: 0,
              }}
              duration={0.7}
              className="mb-6 space-y-4 lg:col-span-5 lg:mb-0"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Globe className="h-4 w-4" />
                <span>A Chi Ci Rivolgiamo</span>
              </div>

              <h2 className="text-2xl font-black text-white sm:text-3xl">
                A chi vuole governare i processi con prove concrete.
              </h2>
            </AnimatedSection>

            <AnimatedSection
              initial={{
                opacity: 0,
                x: 35,
                y: 0,
              }}
              duration={0.75}
              delay={0.08}
              className="space-y-4 text-xs leading-relaxed text-slate-300 sm:text-sm lg:col-span-7"
            >
              <p>
                Ci affianchiamo a responsabili di stabilimento, aziende
                manifatturiere, gestori rifiuti e amministrazioni pubbliche che
                necessitano di tracciare flussi complessi, abbattere gli errori
                di differenziazione e soddisfare gli audit di conformità.
              </p>

              <p className="text-slate-400">
                Non forniamo tecnologia isolata fine a se stessa: affianchiamo
                i team operativi per costruire un flusso di lavoro efficiente,
                trasparente e duraturo nel tempo.
              </p>
            </AnimatedSection>
          </section>
        </AnimatedSection>

        {/* ============================================================
            PRINCIPI GUIDA
        ============================================================ */}

        <section className="space-y-10">

          <AnimatedSection
            initial={{
              opacity: 0,
              y: 30,
            }}
            duration={0.75}
            className="mx-auto max-w-2xl space-y-3 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600">
              <Zap className="h-3.5 w-3.5" />
              <span>Valori Fondanti</span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              I Nostri Principi Guida
            </h2>

            <p className="text-xs text-slate-600 sm:text-sm">
              Ingegneria concreta al servizio dell'operatività industriale di
              ogni giorno.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map(
              (
                {
                  icon: Icon,
                  title,
                  badge,
                  gradient,
                  accentColor,
                  borderColor,
                  glowColor,
                  text,
                },
                index
              ) => (
                <AnimatedSection
                  key={title}
                  initial={{
                    opacity: 0,
                    y: 45,
                    x: index === 0 ? -25 : index === 2 ? 25 : 0,
                    scale: 0.96,
                  }}
                  duration={0.8}
                  delay={index * 0.13}
                >
                  <article
                    className={`group relative h-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-1.5 ${borderColor} ${glowColor}`}
                  >
                    <div
                      className={`pointer-events-none absolute right-0 top-0 h-40 w-40 bg-gradient-to-bl ${gradient} opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    <div className="absolute left-8 right-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-slate-700 to-transparent transition-all duration-500 group-hover:via-emerald-500" />

                    <div className="relative z-10 space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-white shadow-inner transition-transform duration-300 group-hover:scale-110">
                          <Icon className={`h-6 w-6 ${accentColor}`} />
                        </div>

                        <span className="rounded-full border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 backdrop-blur-md">
                          {badge}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-emerald-300">
                          {title}
                        </h3>

                        <p className="text-xs font-normal leading-relaxed text-slate-400 sm:text-sm">
                          {text}
                        </p>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              )
            )}
          </div>
        </section>

        {/* ============================================================
            METODOLOGIA
        ============================================================ */}

        <AnimatedSection
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.965,
          }}
          duration={0.95}
        >
          <section className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950 p-6 text-white shadow-2xl sm:p-10 md:p-14">

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] [background-size:3.5rem_3.5rem]" />

            <div className="pointer-events-none absolute right-1/4 top-0 h-96 w-96 bg-emerald-500/10 blur-[150px]" />

            <div className="pointer-events-none absolute bottom-0 left-1/4 h-96 w-96 bg-cyan-500/10 blur-[150px]" />

            <div className="relative z-10 space-y-12">

              {/* HEADER */}

              <AnimatedSection
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                duration={0.75}
              >
                <div className="flex flex-col justify-between gap-6 border-b border-slate-800/80 pb-8 md:flex-row md:items-end">

                  <div className="max-w-xl space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-md">
                      <Activity className="h-3.5 w-3.5" />
                      <span>Il Nostro Metodo</span>
                    </div>

                    <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
                      La tecnologia è utile quando genera reale fiducia.
                    </h2>
                  </div>

                  <p className="max-w-md text-xs leading-relaxed text-slate-400 sm:text-sm">
                    Una roadmap lineare e trasparente, progettata per integrarsi
                    nei tuoi flussi operativi senza complessità superflue.
                  </p>
                </div>
              </AnimatedSection>

              {/* PIPELINE */}

              <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">

                <div className="relative flex flex-col justify-between space-y-4 lg:col-span-7">

                  <div className="absolute bottom-8 left-[23px] top-8 z-0 hidden w-[2px] bg-gradient-to-b from-emerald-500/50 via-slate-800 to-slate-800 sm:block" />

                  {methodSteps.map(
                    (
                      {
                        number,
                        phase,
                        title,
                        text,
                        icon: StepIcon,
                      },
                      idx
                    ) => (
                      <AnimatedSection
                        key={number}
                        initial={{
                          opacity: 0,
                          x: -40,
                          y: 0,
                          scale: 0.98,
                        }}
                        duration={0.72}
                        delay={0.12 + idx * 0.13}
                      >
                        <div className="group relative z-10 flex gap-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:bg-slate-900/80 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] sm:gap-6 sm:p-6">

                          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                          <div className="relative z-10 shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 font-mono text-sm font-bold text-emerald-400 shadow-inner transition-all group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-300">
                              {number}
                            </div>
                          </div>

                          <div className="relative z-10 flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400/90">
                                {phase}
                              </span>

                              <StepIcon className="hidden h-4 w-4 text-slate-600 transition-colors group-hover:text-emerald-400 sm:block" />
                            </div>

                            <h3 className="text-base font-bold text-white transition-colors group-hover:text-emerald-300 sm:text-lg">
                              {title}
                            </h3>

                            <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                              {text}
                            </p>
                          </div>
                        </div>
                      </AnimatedSection>
                    )
                  )}
                </div>

                {/* RIGHT PANEL */}

                <AnimatedSection
                  initial={{
                    opacity: 0,
                    x: 45,
                    y: 0,
                    scale: 0.97,
                  }}
                  duration={0.85}
                  delay={0.18}
                  className="relative flex flex-col justify-between space-y-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl sm:p-8 lg:col-span-5"
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl" />

                  <div className="relative z-10 space-y-6">
                    <div className="space-y-1.5">
                      <span className="inline-block rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        Valore Operativo
                      </span>

                      <h3 className="pt-1 text-xl font-extrabold tracking-tight text-white">
                        Perché sceglierci
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          title: "Zero interruzioni operative",
                          text: "Hardware non invasivo installato in parallelo ai turni attuali.",
                        },
                        {
                          title: "Conformità PAYT & ESG",
                          text: "Tracciabilità certificata pronta per i report di sostenibilità.",
                        },
                        {
                          title: "Integrazione ERP nativa",
                          text: "Connessione fluida con i principali gestionali aziendali.",
                        },
                      ].map((item, index) => (
                        <RevealItem
                          key={item.title}
                          delay={0.4 + index * 0.1}
                          y={16}
                        >
                          <div className="flex items-start gap-3 rounded-xl border border-slate-800/80 bg-slate-950/70 p-3.5 transition-colors hover:border-slate-700">

                            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                              <Check className="h-3.5 w-3.5" />
                            </div>

                            <div className="space-y-0.5">
                              <h4 className="text-xs font-bold text-white">
                                {item.title}
                              </h4>

                              <p className="text-[11px] leading-relaxed text-slate-400">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </RevealItem>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between border-t border-slate-800/80 pt-5">
                    <span className="text-xs text-slate-400">
                      Dubbi sui flussi?
                    </span>

                    <Link
                      to="/contatti?topic=audit"
                      className="group inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 transition-colors hover:text-emerald-300"
                    >
                      <span>Parla con un tecnico</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ============================================================
            ECOSISTEMA
        ============================================================ */}

        <AnimatedSection
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.97,
          }}
          duration={0.9}
        >
          <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 text-white shadow-2xl">

            <div className="grid items-center lg:grid-cols-12">

              <AnimatedSection
                initial={{
                  opacity: 0,
                  x: -45,
                  y: 0,
                }}
                duration={0.8}
                className="space-y-6 p-8 sm:p-12 lg:col-span-6"
              >
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                  <Factory className="h-4 w-4" />
                  <span>Ecosistema Connesso</span>
                </div>

                <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                  Hardware, AI e Analytics in un unico flusso continuo.
                </h2>

                <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                  Dalla stazione Edge sul campo alla dashboard direzionale:
                  raccogliamo segnali ottici e di peso, riconosciamo i
                  materiali e restituiamo indicazioni chiare per la gestione
                  operativa.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-300 sm:text-sm">
                  {[
                    "Inference AI locale ad alta velocità",
                    "Analytics per flotta impianti, bilanci ESG e TARI Puntuale",
                    "Integrazione API diretta con i sistemi ERP aziendali",
                  ].map((item, index) => (
                    <RevealItem
                      key={item}
                      delay={0.25 + index * 0.09}
                      x={-18}
                      y={12}
                    >
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    </RevealItem>
                  ))}
                </ul>
              </AnimatedSection>

              {/* SLIDESHOW */}

              <AnimatedSection
                initial={{
                  opacity: 0,
                  x: 50,
                  y: 0,
                  scale: 0.96,
                }}
                duration={0.9}
                delay={0.1}
                className="relative min-h-[22rem] overflow-hidden border-t border-slate-800 bg-slate-900 lg:col-span-6 lg:h-full lg:border-l lg:border-t-0"
              >
                {ecosystemImages.map((img, index) => (
                  <motion.img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    initial={{
                      scale: 1.06,
                    }}
                    animate={{
                      scale:
                        index === currentImageIndex
                          ? 1
                          : 1.06,
                      opacity:
                        index === currentImageIndex
                          ? 0.85
                          : 0,
                    }}
                    transition={{
                      opacity: {
                        duration: 1,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: 2.2,
                        ease: easePremium,
                      },
                    }}
                    className="absolute inset-0 h-full w-full object-cover object-left"
                  />
                ))}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent" />

                <div className="absolute bottom-4 right-4 z-10 flex gap-1.5 rounded-full border border-slate-800 bg-slate-950/60 p-1.5 backdrop-blur-md">
                  {ecosystemImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        idx === currentImageIndex
                          ? "w-4 bg-cyan-400"
                          : "w-1.5 bg-slate-600"
                      }`}
                    />
                  ))}
                </div>

                {/* IMAGE REFLECTION */}

                <motion.div
                  initial={{
                    x: "-150%",
                    opacity: 0,
                  }}
                  animate={{
                    x: ["-150%", "150%"],
                    opacity: [0, 0.16, 0],
                  }}
                  transition={{
                    duration: 2.4,
                    delay: 0.8,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[24%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[2px]"
                />
              </AnimatedSection>
            </div>
          </section>
        </AnimatedSection>

        {/* ============================================================
            ESG + CTA
        ============================================================ */}

        <section className="grid items-center gap-10 pt-4 lg:grid-cols-12">

          <AnimatedSection
            initial={{
              opacity: 0,
              x: -50,
              y: 0,
              scale: 0.94,
            }}
            duration={0.9}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative">

              <div className="pointer-events-none absolute -inset-4 rounded-full bg-emerald-500/10 blur-2xl" />

              <motion.img
                initial={{
                  scale: 1.08,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.2,
                  ease: easePremium,
                }}
                src={esg}
                alt="Indicatori ESG e Tracciabilità Sostenibile"
                className="relative z-10 max-h-72 w-auto object-contain"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection
            initial={{
              opacity: 0,
              x: 50,
              y: 0,
              scale: 0.985,
            }}
            duration={0.85}
            delay={0.1}
            className="space-y-6 lg:col-span-7"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              <HeartHandshake className="h-4 w-4" />
              <span>Partnership di Lungo Periodo</span>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Un percorso comune, non una semplice fornitura.
            </h2>

            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
              Ascoltiamo prima di progettare, verifichiamo sul campo prima di
              promettere e misuriamo costantemente i risultati. Crediamo nella
              trasparenza tecnica e nella tracciabilità rigorosa di ogni dato
              gestito dal sistema.
            </p>

            <div>
              <Link
                to="/contatti?topic=partner"
                className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] hover:bg-emerald-500 sm:text-sm"
              >
                <span>Inizia un Progetto Con Noi</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </section>

      </main>
    </div>
  );
}