import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  Building2,
  CheckCircle2,
  Cloud,
  Database,
  Gauge,
  Leaf,
  LineChart,
  Network,
  Recycle,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const premiumEase = [0.16, 1, 0.3, 1];

/* =========================================================
   RESPONSIVE
========================================================= */

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

/* =========================================================
   REVEAL
========================================================= */

function useReveal() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0,
    margin: "0px",
  });

  return [ref, isInView];
}

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 38,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: premiumEase,
    },
  },
};

const fadeUpMobile = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 24,
    scale: 0.99,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: premiumEase,
    },
  },
};

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -48,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: premiumEase,
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 48,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: premiumEase,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.97,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      delay,
      ease: premiumEase,
    },
  }),
};

/* =========================================================
   DATA
========================================================= */

const analyticsAdvantages = [
  {
    icon: Activity,
    title: "Real-time",
    text: "I dati vengono aggiornati continuamente per avere una visione attuale del processo.",
  },
  {
    icon: BarChart3,
    title: "Misurabile",
    text: "Ogni attività diventa un indicatore leggibile, confrontabile e monitorabile.",
  },
  {
    icon: Network,
    title: "Connesso",
    text: "Più dispositivi, più aree e più sedi possono convergere in un unico ambiente.",
  },
  {
    icon: Sparkles,
    title: "Actionable",
    text: "Gli insight non si fermano al dato: aiutano a individuare cosa può essere migliorato.",
  },
];

const analyticsSteps = [
  {
    number: "01",
    icon: Database,
    title: "Raccogli",
    text: "Zeno One acquisisce automaticamente informazioni dal processo.",
  },
  {
    number: "02",
    icon: Cloud,
    title: "Connetti",
    text: "I dati vengono trasferiti e organizzati all'interno dell'infrastruttura cloud.",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Analizza",
    text: "Kore trasforma i dati grezzi in KPI, trend e indicatori.",
  },
  {
    number: "04",
    icon: Gauge,
    title: "Decidi",
    text: "Le informazioni diventano una base concreta per le decisioni operative.",
  },
];

const operationalKpis = [
  {
    label: "Volume",
    value: "−45%",
    detail: "riduzione del volume dei rifiuti",
    icon: TrendingDown,
  },
  {
    label: "Accuracy",
    value: "96%",
    detail: "accuratezza della classificazione AI",
    icon: TargetIcon,
  },
  {
    label: "Tracking",
    value: "100%",
    detail: "dati associati al processo",
    icon: Activity,
  },
];

const esgItems = [
  {
    icon: Recycle,
    title: "Waste intelligence",
    text: "Conoscere quantità, tipologie e distribuzione dei rifiuti permette di individuare inefficienze e aree di intervento.",
  },
  {
    icon: Leaf,
    title: "Environmental data",
    text: "I dati ambientali vengono organizzati in modo strutturato per supportare analisi e reporting.",
  },
  {
    icon: ShieldCheck,
    title: "Tracciabilità",
    text: "Storico e informazioni di processo permettono di ricostruire l'evoluzione delle performance.",
  },
];

const enterpriseFeatures = [
  "Vista aggregata multi-sede",
  "Confronto tra stabilimenti",
  "KPI per area e postazione",
  "Storico e trend temporali",
  "Gestione centralizzata",
  "Report e dati esportabili",
];

const alerts = [
  {
    icon: Bell,
    title: "Anomalie",
    text: "Identifica comportamenti o valori che si discostano dal normale andamento.",
  },
  {
    icon: Gauge,
    title: "Soglie",
    text: "Definisci parametri operativi e monitora automaticamente il loro superamento.",
  },
  {
    icon: TrendingUp,
    title: "Trend",
    text: "Osserva l'evoluzione dei KPI nel tempo e individua variazioni significative.",
  },
];

/* =========================================================
   TARGET ICON
========================================================= */

function TargetIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

/* =========================================================
   DASHBOARD HERO
========================================================= */

function HeroDashboard() {
  const heroBars = [
    28,
    36,
    31,
    48,
    42,
    56,
    45,
    60,
    52,
    68,
    54,
    72,
    63,
    76,
    58,
    84,
    68,
    78,
    65,
    88,
    72,
    82,
    76,
    94,
  ];

  return (
    <div
      className="
        box-border
        w-full
        min-w-0
        max-w-full
        overflow-hidden
        rounded-[1.75rem]
        border
        border-slate-800
        bg-slate-900/55
        shadow-[0_25px_80px_rgba(0,0,0,0.25)]
      "
    >
      {/* HEADER */}
      <div
        className="
          box-border
          flex
          w-full
          min-w-0
          items-center
          justify-between
          gap-4
          border-b
          border-slate-800
          bg-slate-900/80
          px-5
          py-4
        "
      >
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800">
            <BarChart3 className="h-4 w-4 text-slate-300" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">
              Waste flow
            </p>

            <p className="truncate text-xs text-slate-500">
              Live operational data
            </p>
          </div>
        </div>

        <span
          className="
            shrink-0
            rounded-full
            border
            border-emerald-400/20
            bg-emerald-400/10
            px-2.5
            py-1
            text-[10px]
            font-medium
            uppercase
            tracking-[0.16em]
            text-emerald-300
          "
        >
          LIVE
        </span>
      </div>

      {/* CONTENT */}
      <div
        className="
          box-border
          w-full
          min-w-0
          max-w-full
          overflow-hidden
          p-5
          sm:p-6
        "
      >
        {/* KPI */}
        <div
          className="
            grid
            w-full
            min-w-0
            grid-cols-2
            gap-3
            sm:grid-cols-4
          "
        >
          {[
            {
              label: "Sorted",
              value: "12.4k",
            },
            {
              label: "Accuracy",
              value: "96%",
            },
            {
              label: "Saved",
              value: "1.8t",
            },
            {
              label: "Today",
              value: "+14%",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="
                box-border
                min-w-0
                overflow-hidden
                rounded-xl
                border
                border-slate-800/80
                bg-slate-950/50
                p-3
              "
            >
              <p className="truncate text-[10px] uppercase tracking-[0.16em] text-slate-500">
                {item.label}
              </p>

              <p className="mt-2 truncate text-lg font-semibold text-white sm:text-xl">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* CHART */}
        <div
          className="
            box-border
            mt-4
            w-full
            min-w-0
            rounded-xl
            border
            border-slate-800/80
            bg-slate-950/75
            p-4
          "
        >
          <div className="flex w-full min-w-0 items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-white">
                Waste flow
              </p>

              <p className="mt-1 truncate text-[11px] text-slate-500">
                Last 24 hours
              </p>
            </div>

            <LineChart className="h-4 w-4 shrink-0 text-slate-500" />
          </div>

          {/* BARS */}
          <div
            className="
              mt-6
              grid
              h-[105px]
              w-full
              min-w-0
              grid-cols-[repeat(24,minmax(0,1fr))]
              items-end
              gap-[2px]
              sm:h-[125px]
              sm:gap-1
            "
          >
            {heroBars.map((height, index) => (
              <div
                key={index}
                className="
                  h-full
                  min-w-0
                  rounded-t-sm
                  bg-slate-700/80
                "
                style={{
                  height: `${height}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* STATUS */}
        <div
          className="
            mt-4
            flex
            w-full
            min-w-0
            items-center
            justify-between
            gap-4
          "
        >
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-emerald-400
                shadow-[0_0_12px_rgba(74,222,128,0.65)]
              "
            />

            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium text-slate-300">
                System operating normally
              </p>

              <p className="truncate text-[10px] text-slate-600">
                All modules connected
              </p>
            </div>
          </div>

          <span className="shrink-0 text-[11px] font-medium text-slate-400">
            100%
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CLOUD PAGE
========================================================= */

export default function CloudPage() {
  const isMobile = useIsMobile();

  const [heroRef, heroInView] = useReveal();
  const [conceptRef, conceptInView] = useReveal();
  const [analyticsRef, analyticsInView] = useReveal();
  const [koreRef, koreInView] = useReveal();
  const [esgRef, esgInView] = useReveal();
  const [enterpriseRef, enterpriseInView] = useReveal();
  const [alertsRef, alertsInView] = useReveal();
  const [flowRef, flowInView] = useReveal();
  const [performanceRef, performanceInView] = useReveal();
  const [ctaRef, ctaInView] = useReveal();

  const koreBars = [
    42,
    50,
    44,
    62,
    58,
    72,
    68,
    80,
    73,
    88,
    79,
    92,
    84,
    96,
    87,
    91,
    82,
    89,
    76,
    83,
    72,
    79,
    68,
    74,
  ];

  return (
    <main
      className="
        relative
        w-full
        max-w-full
        min-h-screen
        overflow-x-hidden
        overflow-y-visible
        bg-white
        text-slate-100
      "
    >
      {/* =====================================================
          BLACK MAIN SURFACE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-3
          right-3
          sm:left-4
          sm:right-4
          lg:left-5
          lg:right-5
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

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="
          relative
          z-10
          w-full
          min-w-0
          overflow-x-hidden
          px-7
          sm:px-10
          lg:px-14
          pt-[205px]
          sm:pt-[225px]
          lg:pt-[250px]
          pb-20
          sm:pb-28
        "
      >
        <div className="mx-auto w-full min-w-0 max-w-[1320px]">
          <div
            className="
              grid
              w-full
              min-w-0
              items-stretch
              gap-12
              lg:items-center
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-20
            "
          >
            {/* LEFT */}

            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={isMobile ? fadeUpMobile : fadeUp}
              className="w-full min-w-0"
            >
              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-emerald-400/80
                "
              >
                <span className="h-px w-8 shrink-0 bg-emerald-400/50" />
                Cloud Analytics ESG
              </div>

              <h1
                className="
                  text-[39px]
                  font-medium
                  leading-[1.02]
                  tracking-[-0.045em]
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[72px]
                "
              >
                Tutti i dati.
                <br />
                Una sola visione.
              </h1>

              <p
                className="
                  mt-7
                  max-w-[650px]
                  text-[16px]
                  leading-7
                  text-slate-400
                  sm:text-lg
                  sm:leading-8
                  lg:text-[19px]
                "
              >
                Kore raccoglie i dati provenienti dal processo e li
                trasforma in una vista unica su performance operative,
                sostenibilità e andamento nel tempo.
              </p>

              <div
                className="
                  mt-8
                  grid
                  w-full
                  min-w-0
                  max-w-[560px]
                  grid-cols-3
                  gap-2
                  sm:gap-3
                "
              >
                {[
                  {
                    value: "24",
                    label: "Stations",
                  },
                  {
                    value: "68.4%",
                    label: "Recycling",
                  },
                  {
                    value: "LIVE",
                    label: "Monitoring",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="
                      box-border
                      min-w-0
                      overflow-hidden
                      rounded-xl
                      border
                      border-slate-800/80
                      bg-slate-900/45
                      px-3
                      py-3
                      sm:px-4
                    "
                  >
                    <div className="truncate text-sm font-medium text-white sm:text-base">
                      {item.value}
                    </div>

                    <div
                      className="
                        mt-1
                        truncate
                        text-[8px]
                        uppercase
                        tracking-[0.16em]
                        text-slate-600
                        sm:text-[9px]
                      "
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — DASHBOARD */}

            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={isMobile ? fadeUpMobile : slideRight}
              className="
                mx-auto
                flex
                w-[calc(100vw-3.5rem)]
                min-w-0
                max-w-[calc(100vw-3.5rem)]
                justify-self-center
                overflow-hidden
                sm:w-full
                sm:max-w-[600px]
              "
              transition={{
                delay: isMobile ? 0.12 : 0.2,
                duration: isMobile ? 0.75 : 0.9,
                ease: premiumEase,
              }}
            >
              <HeroDashboard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONCEPT
      ===================================================== */}

      <section
        ref={conceptRef}
        className="
          relative
          z-10
          w-full
          min-w-0
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto w-full min-w-0 max-w-[1320px]">
          <motion.div
            initial="hidden"
            animate={conceptInView ? "visible" : "hidden"}
            variants={isMobile ? fadeUpMobile : fadeUp}
            className="max-w-[780px]"
          >
            <div
              className="
                mb-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-emerald-400/75
              "
            >
              From data to insight
            </div>

            <h2
              className="
                text-3xl
                font-medium
                tracking-[-0.035em]
                text-white
                sm:text-5xl
              "
            >
              Il dato da solo non basta.
            </h2>

            <p
              className="
                mt-5
                text-[15px]
                leading-7
                text-slate-400
                sm:text-lg
                sm:leading-8
              "
            >
              Il vero valore nasce quando le informazioni vengono raccolte,
              correlate e rese leggibili. Kore costruisce questo ponte tra
              ciò che accade nel processo e ciò che l'azienda deve sapere.
            </p>
          </motion.div>

          <div className="mt-12 grid min-w-0 gap-4 sm:mt-16 md:grid-cols-4">
            {analyticsSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  custom={index * 0.08}
                  initial="hidden"
                  animate={conceptInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  className="
                    group
                    min-w-0
                    rounded-2xl
                    border
                    border-slate-800/80
                    bg-slate-900/45
                    p-5
                    transition-colors
                    duration-300
                    hover:border-slate-700
                  "
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-800
                        bg-slate-950
                        text-emerald-400
                      "
                    >
                      <Icon size={18} strokeWidth={1.6} />
                    </div>

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        tracking-[0.22em]
                        text-slate-600
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ANALYTICS
      ===================================================== */}

      <section
        ref={analyticsRef}
        className="
          relative
          z-10
          w-full
          min-w-0
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto w-full min-w-0 max-w-[1320px]">
          <motion.div
            initial="hidden"
            animate={analyticsInView ? "visible" : "hidden"}
            variants={isMobile ? fadeUpMobile : fadeUp}
            className="max-w-[760px]"
          >
            <div
              className="
                mb-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-emerald-400/75
              "
            >
              Operational analytics
            </div>

            <h2
              className="
                text-3xl
                font-medium
                tracking-[-0.035em]
                text-white
                sm:text-5xl
              "
            >
              Vedere cosa sta succedendo.
              <br />
              Capire perché.
            </h2>

            <p
              className="
                mt-5
                text-[15px]
                leading-7
                text-slate-400
                sm:text-lg
                sm:leading-8
              "
            >
              KPI e visualizzazioni trasformano il flusso di dati in una
              fotografia chiara delle performance operative.
            </p>
          </motion.div>

          <div className="mt-12 grid min-w-0 gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
            {analyticsAdvantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  custom={index * 0.07}
                  initial="hidden"
                  animate={analyticsInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  className="
                    min-w-0
                    rounded-2xl
                    border
                    border-slate-800/80
                    bg-slate-900/45
                    p-6
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-800
                      bg-slate-950
                      text-emerald-400
                    "
                  >
                    <Icon size={19} strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-6 text-base font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          KORE
      ===================================================== */}

      <section
        ref={koreRef}
        className="
          relative
          z-10
          w-full
          min-w-0
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto w-full min-w-0 max-w-[1320px]">
          <div
            className="
              grid
              w-full
              min-w-0
              gap-12
              lg:grid-cols-[0.85fr_1.15fr]
              lg:items-center
              lg:gap-20
            "
          >
            <motion.div
              initial="hidden"
              animate={koreInView ? "visible" : "hidden"}
              variants={isMobile ? fadeUpMobile : slideLeft}
              className="
                mx-auto
                w-full
                min-w-0
                max-w-[640px]
                text-center
                lg:mx-0
                lg:text-left
              "
            >
              <div
                className="
                  mb-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-emerald-400/75
                "
              >
                Kore
              </div>

              <h2
                className="
                  text-3xl
                  font-medium
                  tracking-[-0.035em]
                  text-white
                  sm:text-5xl
                "
              >
                Il centro dati
                <br />
                dell'ecosistema.
              </h2>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-[520px]
                  text-[15px]
                  leading-7
                  text-slate-400
                  sm:text-lg
                  sm:leading-8
                  lg:mx-0
                "
              >
                Kore raccoglie le informazioni provenienti dai dispositivi,
                le organizza e le presenta attraverso una vista pensata per
                chi deve monitorare e migliorare il processo.
              </p>

              <div className="mx-auto mt-8 flex max-w-[520px] flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start">
                {[
                  "Dashboard",
                  "KPI",
                  "Trend",
                  "Storico",
                  "Multi-site",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-slate-800
                      bg-slate-900/60
                      px-3
                      py-1.5
                      text-[11px]
                      text-slate-400
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={koreInView ? "visible" : "hidden"}
              variants={isMobile ? fadeUpMobile : slideRight}
              className="
                mx-auto
                flex
                w-[calc(100vw-3.5rem)]
                min-w-0
                max-w-[calc(100vw-3.5rem)]
                justify-center
                overflow-hidden
                sm:w-full
                sm:max-w-[600px]
              "
            >
              <div
                className="
                  box-border
                  w-full
                  min-w-0
                  max-w-full
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-slate-800
                  bg-slate-900/55
                "
              >
                <div
                  className="
                    flex
                    min-w-0
                    items-center
                    justify-between
                    gap-3
                    border-b
                    border-slate-800/80
                    px-5
                    py-4
                    sm:px-6
                  "
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-slate-950
                        text-emerald-400
                      "
                    >
                      <BarChart3 size={17} />
                    </div>

                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium text-white">
                        Kore Analytics
                      </div>

                      <div className="truncate text-[10px] text-slate-500">
                        LIVE · DATA OVERVIEW
                      </div>
                    </div>
                  </div>

                  <div
                    className="
                      ml-3
                      flex
                      shrink-0
                      items-center
                      gap-2
                      text-[10px]
                      text-emerald-400
                    "
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    ONLINE
                  </div>
                </div>

                <div
                  className="
                    box-border
                    w-full
                    min-w-0
                    max-w-full
                    overflow-hidden
                    p-5
                    sm:p-6
                  "
                >
                  <div className="grid w-full min-w-0 grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      ["Waste", "1,284 kg"],
                      ["Recycling", "68.4%"],
                      ["Stations", "24"],
                      ["Alerts", "03"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="
                          box-border
                          min-w-0
                          overflow-hidden
                          rounded-xl
                          border
                          border-slate-800/80
                          bg-slate-950/70
                          p-3
                        "
                      >
                        <div
                          className="
                            truncate
                            text-[9px]
                            uppercase
                            tracking-[0.16em]
                            text-slate-600
                          "
                        >
                          {label}
                        </div>

                        <div className="mt-2 truncate text-sm font-medium text-white">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* KORE CHART */}

                  <div
                    className="
                      box-border
                      mt-4
                      w-full
                      min-w-0
                      rounded-xl
                      border
                      border-slate-800/80
                      bg-slate-950/70
                      p-4
                    "
                  >
                    <div className="flex w-full min-w-0 items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="truncate text-xs font-medium text-white">
                          Waste flow
                        </div>

                        <div className="mt-1 truncate text-[10px] text-slate-600">
                          Last 30 days
                        </div>
                      </div>

                      <LineChart
                        size={17}
                        className="shrink-0 text-slate-600"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div
                      className="
                        mt-6
                        grid
                        h-[130px]
                        w-full
                        min-w-0
                        grid-cols-[repeat(24,minmax(0,1fr))]
                        items-end
                        gap-[2px]
                        sm:gap-1.5
                      "
                    >
                      {koreBars.map((height, index) => (
                        <div
                          key={index}
                          className="
                            min-w-0
                            rounded-t-sm
                            bg-slate-700/80
                          "
                          style={{
                            height: `${height}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div
                    className="
                      mt-4
                      flex
                      min-w-0
                      items-center
                      justify-between
                      gap-3
                      overflow-hidden
                      rounded-xl
                      border
                      border-slate-800/80
                      bg-slate-950/70
                      px-4
                      py-3
                    "
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-emerald-400/10
                          text-emerald-400
                        "
                      >
                        <CheckCircle2 size={16} />
                      </div>

                      <div className="min-w-0">
                        <div className="truncate text-xs text-white">
                          Data synchronization
                        </div>

                        <div className="truncate text-[10px] text-slate-600">
                          All systems synchronized
                        </div>
                      </div>
                    </div>

                    <span className="shrink-0 text-[10px] font-medium text-emerald-400">
                      100%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ESG
      ===================================================== */}

      <section
        ref={esgRef}
        className="
          relative
          z-10
          w-full
          min-w-0
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto w-full min-w-0 max-w-[1320px]">
          <motion.div
            initial="hidden"
            animate={esgInView ? "visible" : "hidden"}
            variants={isMobile ? fadeUpMobile : fadeUp}
            className="max-w-[850px]"
          >
            <div
              className="
                mb-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-emerald-400/75
              "
            >
              ESG & sustainability
            </div>

            <h2
              className="
                text-3xl
                font-medium
                tracking-[-0.035em]
                text-white
                sm:text-5xl
              "
            >
              La sostenibilità
              <br />
              diventa misurabile.
            </h2>

            <p
              className="
                mt-5
                max-w-[760px]
                text-[15px]
                leading-7
                text-slate-400
                sm:text-lg
                sm:leading-8
              "
            >
              I dati raccolti dal processo possono diventare una base
              strutturata per comprendere l'impatto ambientale e supportare
              le attività di monitoraggio e rendicontazione ESG.
            </p>
          </motion.div>

          <div className="mt-12 grid min-w-0 gap-4 md:grid-cols-3">
            {esgItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  custom={index * 0.1}
                  initial="hidden"
                  animate={esgInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  className="
                    min-w-0
                    rounded-2xl
                    border
                    border-slate-800/80
                    bg-slate-900/45
                    p-6
                    sm:p-7
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-800
                      bg-slate-950
                      text-emerald-400
                    "
                  >
                    <Icon size={19} strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-6 text-lg font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial="hidden"
            animate={esgInView ? "visible" : "hidden"}
            variants={isMobile ? fadeUpMobile : fadeUp}
            transition={{
              delay: isMobile ? 0.25 : 0.35,
              duration: 0.8,
              ease: premiumEase,
            }}
            className="
              mt-5
              min-w-0
              rounded-2xl
              border
              border-emerald-400/15
              bg-emerald-400/[0.025]
              p-6
              sm:p-8
            "
          >
            <div
              className="
                flex
                min-w-0
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div className="min-w-0">
                <div
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-emerald-400/70
                  "
                >
                  Sustainability data
                </div>

                <p
                  className="
                    mt-2
                    max-w-[720px]
                    text-sm
                    leading-6
                    text-slate-400
                  "
                >
                  Un dato strutturato e tracciabile permette di passare
                  da una fotografia occasionale a un monitoraggio continuo.
                </p>
              </div>

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  gap-2
                  text-xs
                  text-emerald-400
                "
              >
                <ShieldCheck size={16} />
                DATA READY
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ENTERPRISE / MULTI SITE
      ===================================================== */}

      <section
        ref={enterpriseRef}
        className="
          relative
          z-10
          w-full
          min-w-0
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto w-full min-w-0 max-w-[1320px]">
          <div
            className="
              grid
              w-full
              min-w-0
              gap-12
              lg:grid-cols-[1fr_0.9fr]
              lg:gap-24
            "
          >
            <motion.div
              initial="hidden"
              animate={enterpriseInView ? "visible" : "hidden"}
              variants={isMobile ? fadeUpMobile : slideLeft}
              className="
                mx-auto
                w-full
                min-w-0
                max-w-[600px]
                text-center
                lg:mx-0
                lg:text-left
              "
            >
              <div
                className="
                  mb-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-emerald-400/75
                "
              >
                Enterprise
              </div>

              <h2
                className="
                  text-3xl
                  font-medium
                  tracking-[-0.035em]
                  text-white
                  sm:text-5xl
                "
              >
                Un'unica vista.
                <br />
                Più realtà.
              </h2>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-[520px]
                  text-[15px]
                  leading-7
                  text-slate-400
                  sm:text-lg
                  sm:leading-8
                  lg:mx-0
                "
              >
                Quando il processo si distribuisce su più sedi, Kore
                permette di aggregare le informazioni e mantenere una
                visione coerente dell'intero sistema.
              </p>

              <div
                className="
                  mx-auto
                  mt-8
                  grid
                  w-full
                  min-w-0
                  max-w-[560px]
                  gap-2
                  sm:grid-cols-2
                  lg:mx-0
                "
              >
                {enterpriseFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      min-w-0
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      border
                      border-slate-800/70
                      bg-slate-900/35
                      px-4
                      py-3
                      text-center
                      lg:justify-start
                      lg:text-left
                    "
                  >
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-emerald-400"
                      strokeWidth={1.7}
                    />

                    <span className="min-w-0 text-xs text-slate-400">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={enterpriseInView ? "visible" : "hidden"}
              variants={isMobile ? fadeUpMobile : slideRight}
              className="
                mx-auto
                flex
                w-full
                min-w-0
                max-w-[600px]
                items-center
                justify-center
              "
            >
              {/* MOBILE */}

              <div className="mx-auto w-full min-w-0 max-w-[360px] space-y-3 md:hidden">
                {["SITE 01", "SITE 02"].map((site) => (
                  <div
                    key={site}
                    className="
                      flex
                      min-w-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-800
                      bg-slate-950
                      p-4
                    "
                  >
                    <Building2
                      size={16}
                      className="mr-2 shrink-0 text-slate-500"
                    />

                    <span className="text-xs tracking-[0.15em] text-slate-400">
                      {site}
                    </span>
                  </div>
                ))}

                <div className="flex justify-center py-1">
                  <ArrowRight
                    className="rotate-90 text-slate-700"
                    size={16}
                  />
                </div>

                <div
                  className="
                    min-w-0
                    rounded-[1.5rem]
                    border
                    border-slate-700
                    bg-slate-900
                    p-6
                    text-center
                  "
                >
                  <Cloud
                    size={28}
                    className="mx-auto text-emerald-400"
                  />

                  <div className="mt-3 text-sm font-medium text-white">
                    KORE CLOUD
                  </div>

                  <div className="mt-1 text-[10px] tracking-[0.2em] text-slate-600">
                    CENTRAL DATA
                  </div>
                </div>

                <div className="flex justify-center py-1">
                  <ArrowRight
                    className="rotate-90 text-slate-700"
                    size={16}
                  />
                </div>

                {["SITE 03", "SITE 04"].map((site) => (
                  <div
                    key={site}
                    className="
                      flex
                      min-w-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-800
                      bg-slate-950
                      p-4
                    "
                  >
                    <Building2
                      size={16}
                      className="mr-2 shrink-0 text-slate-500"
                    />

                    <span className="text-xs tracking-[0.15em] text-slate-400">
                      {site}
                    </span>
                  </div>
                ))}
              </div>

              {/* DESKTOP */}

              <div className="relative hidden w-full min-w-0 max-w-[500px] md:block">
                <div
                  className="
                    relative
                    z-20
                    mx-auto
                    flex
                    h-[170px]
                    w-[170px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[2rem]
                    border
                    border-slate-700
                    bg-slate-900
                    shadow-[0_20px_70px_rgba(0,0,0,0.35)]
                  "
                >
                  <Cloud
                    size={31}
                    strokeWidth={1.4}
                    className="text-emerald-400"
                  />

                  <div className="mt-4 text-sm font-medium text-white">
                    KORE CLOUD
                  </div>

                  <div className="mt-1 text-[9px] tracking-[0.2em] text-slate-600">
                    CENTRAL DATA
                  </div>
                </div>

                <div className="absolute left-1/2 top-1/2 h-px w-[75%] -translate-x-1/2 bg-slate-800" />

                <div className="absolute left-1/2 top-1/2 h-[75%] w-px -translate-x-1/2 bg-slate-800" />

                {[
                  { label: "SITE 01", position: "left-0 top-0" },
                  { label: "SITE 02", position: "right-0 top-0" },
                  { label: "SITE 03", position: "left-0 bottom-0" },
                  { label: "SITE 04", position: "right-0 bottom-0" },
                ].map((node) => (
                  <div
                    key={node.label}
                    className={`absolute ${node.position} z-30 flex h-16 w-24 items-center justify-center rounded-xl border border-slate-800 bg-slate-950`}
                  >
                    <div className="text-center">
                      <Building2
                        size={14}
                        className="mx-auto text-slate-500"
                      />

                      <div className="mt-1 text-[9px] tracking-[0.15em] text-slate-500">
                        {node.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ALERTS / INTELLIGENCE
      ===================================================== */}

      <section
        ref={alertsRef}
        className="
          relative
          z-10
          w-full
          min-w-0
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto w-full min-w-0 max-w-[1320px]">
          <motion.div
            initial="hidden"
            animate={alertsInView ? "visible" : "hidden"}
            variants={isMobile ? fadeUpMobile : fadeUp}
            className="max-w-[800px]"
          >
            <div
              className="
                mb-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-emerald-400/75
              "
            >
              Intelligence
            </div>

            <h2
              className="
                text-3xl
                font-medium
                tracking-[-0.035em]
                text-white
                sm:text-5xl
              "
            >
              Non guardare soltanto
              <br />
              il passato.
            </h2>

            <p
              className="
                mt-5
                text-[15px]
                leading-7
                text-slate-400
                sm:text-lg
                sm:leading-8
              "
            >
              Il cloud può aiutare a evidenziare anomalie, variazioni e
              situazioni che meritano attenzione.
            </p>
          </motion.div>

          <div className="mt-12 grid min-w-0 gap-4 md:grid-cols-3">
            {alerts.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  custom={index * 0.09}
                  initial="hidden"
                  animate={alertsInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  className="
                    min-w-0
                    rounded-2xl
                    border
                    border-slate-800/80
                    bg-slate-900/45
                    p-6
                  "
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-800
                        bg-slate-950
                        text-emerald-400
                      "
                    >
                      <Icon size={18} strokeWidth={1.6} />
                    </div>

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        tracking-[0.2em]
                        text-slate-700
                      "
                    >
                      INSIGHT
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          DATA FLOW
      ===================================================== */}

      <section
        ref={flowRef}
        className="
          relative
          z-10
          w-full
          min-w-0
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto w-full min-w-0 max-w-[1320px]">
          <motion.div
            initial="hidden"
            animate={flowInView ? "visible" : "hidden"}
            variants={isMobile ? fadeUpMobile : fadeUp}
            className="text-center"
          >
            <div
              className="
                mb-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-emerald-400/75
              "
            >
              Data flow
            </div>

            <h2
              className="
                text-3xl
                font-medium
                tracking-[-0.035em]
                text-white
                sm:text-5xl
              "
            >
              Un ecosistema connesso.
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[700px]
                text-[15px]
                leading-7
                text-slate-400
                sm:text-lg
                sm:leading-8
              "
            >
              Ogni livello alimenta quello successivo creando un flusso
              continuo dal mondo fisico al livello decisionale.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={flowInView ? "visible" : "hidden"}
            variants={isMobile ? fadeUpMobile : fadeUp}
            transition={{
              delay: isMobile ? 0.18 : 0.28,
              duration: 0.8,
              ease: premiumEase,
            }}
            className="
              mx-auto
              mt-12
              w-full
              min-w-0
              max-w-[1050px]
              rounded-[1.75rem]
              border
              border-slate-800/80
              bg-slate-900/40
              p-5
              sm:mt-16
              sm:p-8
            "
          >
            <div
              className="
                grid
                min-w-0
                gap-3
                md:grid-cols-5
                md:items-center
              "
            >
              {[
                {
                  icon: Recycle,
                  label: "ZENO ONE",
                  text: "Physical data",
                },
                {
                  icon: Zap,
                  label: "EDGE AI",
                  text: "Local intelligence",
                },
                {
                  icon: Cloud,
                  label: "CLOUD",
                  text: "Data infrastructure",
                },
                {
                  icon: BarChart3,
                  label: "KORE",
                  text: "Analytics",
                },
                {
                  icon: Sparkles,
                  label: "INSIGHT",
                  text: "Decision",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <React.Fragment key={item.label}>
                    <div
                      className="
                        flex
                        min-w-0
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-slate-800/80
                        bg-slate-950/70
                        p-4
                        md:flex-col
                        md:items-center
                        md:justify-center
                        md:text-center
                      "
                    >
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-slate-800
                          bg-slate-900
                          text-emerald-400
                        "
                      >
                        <Icon size={17} strokeWidth={1.5} />
                      </div>

                      <div className="min-w-0">
                        <div
                          className="
                            mt-0
                            text-[10px]
                            font-semibold
                            tracking-[0.17em]
                            text-white
                            md:mt-3
                          "
                        >
                          {item.label}
                        </div>

                        <div className="mt-1 text-[10px] text-slate-600">
                          {item.text}
                        </div>
                      </div>
                    </div>

                    {index < 4 && (
                      <div className="hidden items-center justify-center md:flex">
                        <ArrowRight
                          size={15}
                          className="text-slate-700"
                          strokeWidth={1.5}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PERFORMANCE
      ===================================================== */}

      <section
        ref={performanceRef}
        className="
          relative
          z-10
          w-full
          min-w-0
          px-7
          sm:px-10
          lg:px-14
          py-20
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto w-full min-w-0 max-w-[1320px]">
          <motion.div
            initial="hidden"
            animate={performanceInView ? "visible" : "hidden"}
            variants={isMobile ? fadeUpMobile : fadeUp}
            className="mb-12 max-w-[750px] sm:mb-16"
          >
            <div
              className="
                mb-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-emerald-400/75
              "
            >
              Cloud performance
            </div>

            <h2
              className="
                text-3xl
                font-medium
                tracking-[-0.035em]
                text-white
                sm:text-5xl
              "
            >
              Pensato per dati
              <br />
              che continuano a crescere.
            </h2>
          </motion.div>

          <div className="grid min-w-0 gap-4 md:grid-cols-3">
            {operationalKpis.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  custom={index * 0.1}
                  initial="hidden"
                  animate={performanceInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  className="
                    relative
                    min-w-0
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-800/80
                    bg-slate-900/45
                    p-6
                    sm:p-8
                  "
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-slate-600
                      "
                    >
                      {item.label}
                    </span>

                    <Icon
                      size={18}
                      className="shrink-0 text-emerald-400"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div
                    className="
                      mt-10
                      text-4xl
                      font-medium
                      tracking-[-0.04em]
                      text-white
                      sm:text-5xl
                    "
                  >
                    {item.value}
                  </div>

                  <p
                    className="
                      mt-3
                      max-w-[230px]
                      text-sm
                      leading-6
                      text-slate-500
                    "
                  >
                    {item.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        ref={ctaRef}
        className="
          relative
          z-10
          w-full
          min-w-0
          px-7
          pt-12
          pb-20
          sm:px-10
          sm:pt-20
          sm:pb-32
          lg:px-14
        "
      >
        <div className="mx-auto w-full min-w-0 max-w-[1050px]">
          <motion.div
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={isMobile ? fadeUpMobile : fadeUp}
            className="
              box-border
              w-full
              min-w-0
              overflow-hidden
              rounded-[2rem]
              border
              border-slate-800/80
              bg-slate-900/55
              px-6
              py-12
              text-center
              sm:rounded-[2.5rem]
              sm:px-12
              sm:py-16
            "
          >
            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-slate-800
                bg-slate-950
                text-emerald-400
              "
            >
              <Cloud size={22} strokeWidth={1.5} />
            </div>

            <h2
              className="
                mx-auto
                mt-7
                max-w-[760px]
                text-3xl
                font-medium
                tracking-[-0.035em]
                text-white
                sm:text-5xl
              "
            >
              Trasforma i dati del tuo processo
              <br className="hidden sm:block" />
              in decisioni concrete.
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[650px]
                text-sm
                leading-7
                text-slate-500
                sm:text-base
                sm:leading-8
              "
            >
              Scopri come Zeno One, Kore e la nostra infrastruttura cloud
              possono costruire un sistema di monitoraggio intelligente
              attorno al tuo processo.
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
            >
              <Link
                to="/contatti"
                className="
                  group
                  inline-flex
                  max-w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-emerald-400
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-slate-950
                  transition-all
                  duration-300
                  hover:bg-emerald-300
                  hover:gap-3
                "
              >
                Parliamone

                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}