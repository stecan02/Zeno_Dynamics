import React, { useState, useEffect, useRef } from "react";
import { RotateCw, Check, ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { zenoPackages as zenoPackagesData } from "@/data/zenoData";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const easePremium = [0.16, 1, 0.3, 1];

/* ================================================================
   BREAKPOINT
   Il "mazzo" orizzontale esiste solo da `lg` (1024px) in su.
   Prima la soglia era 768px: su iPad mini il layout era a 1 colonna
   ma le card ricevevano comunque gli offset orizzontali del mazzo
   (x: ±105%), quindi finivano sovrapposte/fuori schermo.
   Ora tutto ciò che sta sotto 1024px usa l'ingresso verticale.
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
   PACKAGE CARD
================================================================ */

function PackageCard({ pkg, index, isSectionInView, isMobile }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  /* CLICK OUTSIDE — mobile / tablet */
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isFlipped &&
        cardRef.current &&
        !cardRef.current.contains(event.target)
      ) {
        setIsFlipped(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isFlipped]);

  /* POSIZIONI DESKTOP: le card partono sovrapposte e si aprono a mazzo */
  const desktopPositions = [
    { x: "calc(-105% - 2rem)", rotate: 0 },
    { x: "0%", rotate: 0 },
    { x: "calc(105% + 2rem)", rotate: 0 },
  ];

  const position = desktopPositions[index] || desktopPositions[1];

  const desktopDelay = index * 0.1;
  const mobileDelay = 0.08 + index * 0.1;

  const hiddenCompact = { opacity: 0, x: 0, y: 24, scale: 0.985, rotate: 0 };
  const visibleCompact = { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 };

  const stackedDesktop = { opacity: 1, x: "0%", y: 0, scale: 1, rotate: 0 };
  const spreadDesktop = {
    opacity: 1,
    x: position.x,
    y: 0,
    scale: 1,
    rotate: position.rotate,
  };

  const initialAnimation = isMobile ? hiddenCompact : stackedDesktop;

  const animateTo = isMobile
    ? isSectionInView
      ? visibleCompact
      : hiddenCompact
    : isSectionInView
      ? spreadDesktop
      : stackedDesktop;

  return (
    <motion.div
      ref={cardRef}
      initial={initialAnimation}
      animate={animateTo}
      transition={{
        duration: isMobile ? 0.72 : 1.35,
        delay: isSectionInView ? (isMobile ? mobileDelay : desktopDelay) : 0,
        ease: easePremium,
      }}
      /*
        - sotto lg: card in colonna, larghezza piena fino a max-w-xl
          e centrate (su iPad mini non si allargano a 700px)
        - da lg: posizionamento assoluto a mazzo
      */
      className="group relative mx-auto h-[620px] w-full max-w-xl cursor-pointer [perspective:1000px] lg:absolute lg:left-1/2 lg:top-0 lg:mx-0 lg:w-[calc((100%-4rem)/3)] lg:max-w-none lg:-translate-x-1/2 lg:will-change-transform"
      style={{ zIndex: packagesToZIndex(index) }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* OMBRA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isSectionInView ? 1 : 0 }}
        transition={{
          duration: isMobile ? 0.7 : 0.9,
          delay: isSectionInView
            ? (isMobile ? mobileDelay : desktopDelay) + (isMobile ? 0.25 : 0.45)
            : 0,
          ease: easePremium,
        }}
        className="pointer-events-none absolute inset-x-5 bottom-[-10px] z-0 h-8 rounded-full bg-slate-950/10 blur-xl"
      />

      {/* 3D CARD CONTAINER */}
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        } lg:[transform:none] lg:group-hover:[transform:rotateY(180deg)]`}
      >
        {/* FACCIA ANTERIORE */}
        <Card
          className={`absolute inset-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl [-webkit-backface-visibility:hidden] [backface-visibility:hidden] ${
            pkg.highlight
              ? "border-2 border-emerald-500/80 bg-slate-950 text-white shadow-2xl shadow-emerald-950/40"
              : "border border-slate-200/80 bg-white text-slate-900 shadow-lg"
          }`}
        >
          {pkg.highlight && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: isSectionInView ? 1 : 0,
                y: isSectionInView ? 0 : -10,
              }}
              transition={{
                duration: isMobile ? 0.55 : 0.7,
                delay: isSectionInView
                  ? (isMobile ? mobileDelay : desktopDelay) +
                    (isMobile ? 0.2 : 0.45)
                  : 0,
                ease: easePremium,
              }}
              className="absolute right-0 top-0 z-10 rounded-bl-2xl bg-gradient-to-l from-emerald-500 to-teal-500 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-md"
            >
              {pkg.badge}
            </motion.div>
          )}

          <CardHeader className="space-y-3 p-6 pb-4 md:p-8 md:pb-4">
            <div className="flex items-center justify-between">
              <div
                className={`rounded-2xl border p-3 ${
                  pkg.highlight
                    ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                    : "border-emerald-100 bg-emerald-50 text-emerald-600"
                }`}
              >
                {pkg.icon}
              </div>

              {!pkg.highlight && (
                <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {pkg.badge}
                </span>
              )}
            </div>

            <div>
              <CardTitle
                className={`text-2xl font-black tracking-tight ${
                  pkg.highlight ? "text-white" : "text-slate-900"
                }`}
              >
                {pkg.name}
              </CardTitle>

              <p
                className={`mt-1 text-xs font-semibold ${
                  pkg.highlight ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                {pkg.tagline}
              </p>
            </div>
          </CardHeader>

          <CardContent className="flex flex-1 flex-col justify-between overflow-hidden px-6 py-2 md:px-8">
            <CardDescription
              className={`text-xs font-normal leading-relaxed ${
                pkg.highlight ? "text-slate-300" : "text-slate-500"
              }`}
            >
              {pkg.description}
            </CardDescription>

            <div
              className={`mt-auto flex items-center justify-center gap-2 pt-4 text-xs font-semibold ${
                pkg.highlight ? "text-emerald-400" : "text-emerald-600"
              }`}
            >
              <RotateCw className="h-3.5 w-3.5" />
              <span>Passa il mouse o tocca per le specifiche</span>
            </div>
          </CardContent>

          <CardFooter className="p-6 pt-0 md:p-8 md:pt-0">
            <div
              className={`flex w-full items-center justify-center gap-1.5 rounded-2xl border py-3 text-center text-xs font-extrabold tracking-wide shadow-md transition-all duration-300 ${
                pkg.highlight
                  ? "border-emerald-300 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 text-slate-950 shadow-emerald-500/30"
                  : "border-emerald-500 bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-600/25"
              }`}
            >
              <span>Scopri funzionalità</span>
              <span className="text-sm">➔</span>
            </div>
          </CardFooter>

          <motion.div
            initial={{ x: "-160%", opacity: 0 }}
            animate={
              isSectionInView
                ? { x: ["-160%", "160%"], opacity: [0, 0.18, 0] }
                : { x: "-160%", opacity: 0 }
            }
            transition={{
              duration: isMobile ? 2.25 : 2,
              delay: isSectionInView
                ? (isMobile ? mobileDelay : desktopDelay) +
                  (isMobile ? 0.65 : 0.9)
                : 0,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="pointer-events-none absolute inset-y-0 left-0 z-30 w-[25%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/60 to-transparent blur-[2px]"
          />
        </Card>

        {/* FACCIA POSTERIORE */}
        <Card
          className={`absolute inset-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)] ${
            pkg.highlight
              ? "border-2 border-emerald-500/80 shadow-emerald-950/50"
              : "border border-slate-800"
          }`}
        >
          <CardHeader className="flex shrink-0 flex-row items-center justify-between border-b border-slate-800 p-6 pb-4 md:p-8 md:pb-4">
            <div>
              <CardTitle className="text-xl font-extrabold text-white">
                Incluso in {pkg.name}
              </CardTitle>
            </div>

            <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1.5 text-xs font-bold text-emerald-400">
              <RotateCw className="h-3 w-3" />
              Chiudi
            </span>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-6 py-4 md:p-8 md:py-4 [scrollbar-color:#334155_transparent] [scrollbar-width:thin]">
            <ul className="space-y-3 md:space-y-3.5">
              {pkg.features?.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs leading-relaxed"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span className="text-slate-300">{feat}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter
            className="shrink-0 border-t border-slate-800/80 p-6 pt-4 md:p-8 md:pt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              asChild
              className={`h-11 w-full cursor-pointer rounded-2xl text-xs font-bold transition-all duration-300 ${
                pkg.highlight
                  ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 hover:bg-emerald-400"
                  : "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-500"
              }`}
            >
              <Link
                to={
                  pkg.topic
                    ? `/contatti?topic=${pkg.topic}`
                    : pkg.id === "zeno-one" || pkg.name === "Zeno One"
                      ? "/contatti?topic=tech"
                      : "/contatti?topic=quote"
                }
                className="flex w-full items-center justify-center gap-2"
              >
                {pkg.buttonText}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
}

/* Z-INDEX DEL MAZZO */
function packagesToZIndex(index) {
  if (index === 1) return 3;

  return index === 0 ? 1 : 2;
}

/* ================================================================
   PACKAGES SECTION
================================================================ */

export function PackagesSection({ zenoPackages }) {
  const packagesToDisplay =
    zenoPackages && zenoPackages.length > 0
      ? zenoPackages
      : zenoPackagesData;

  const sectionRef = useRef(null);
  const isCompact = useIsCompact();

  const isSectionInView = useInView(sectionRef, {
    once: false,
    amount: 0,
  });

  return (
    <section ref={sectionRef} id="gamma" className="scroll-mt-24 space-y-12">
      {/* HEADER */}
      <motion.div
        initial={false}
        animate={
          isSectionInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: isCompact ? 18 : 25 }
        }
        transition={{
          duration: isCompact ? 0.65 : 0.85,
          ease: easePremium,
        }}
        className="flex flex-col justify-between gap-6 px-2 lg:flex-row lg:items-end"
      >
        <div className="space-y-3">
          <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl">
            La gamma{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Zeno Dynamics
            </span>
          </h2>
        </div>

        <p className="max-w-md text-sm font-normal leading-relaxed text-slate-500 md:text-base">
          Soluzioni modulari scalabili per ogni dimensione aziendale. Dalla
          singola sede operativa fino ai grandi network industriali.
        </p>
      </motion.div>

      {/* DECK: colonna sotto lg, mazzo orizzontale da lg */}
      <div className="relative grid grid-cols-1 gap-8 lg:block lg:min-h-[620px]">
        {packagesToDisplay.map((pkg, index) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            index={index}
            isSectionInView={isSectionInView}
            isMobile={isCompact}
          />
        ))}
      </div>
    </section>
  );
}