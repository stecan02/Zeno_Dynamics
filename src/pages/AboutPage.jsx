import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Factory,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Target,
  Cpu,
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
  BarChart3
} from 'lucide-react'

import zenoStation from '@/assets/zeno_real.png'
import dashboard from '@/assets/hw.png'
import software from '@/assets/pc.jpg'
import giorgio from '@/assets/gio.jpg'
import stefano from '@/assets/ste.jpg'
import esg from '@/assets/esg.png'
import teamPhoto from '@/assets/pitch.jpg'
import teamPhoto2 from '@/assets/team_apr.jpg'
import ZenoDynamics from '@/assets/ZenoDynamics.png'
import zd from '@/assets/zd.png'

const metrics = [
  { value: '96.1%', label: 'Accuratezza Vision', detail: 'Modello Edge Custom' },
  { value: '< 120ms', label: 'Latenza Inference', detail: 'Elaborazione locale' },
  { value: 'UNI EN 14803', label: 'Compliance PAYT', detail: 'Standard industriale' },
  { value: '-35%', label: 'Contaminazione', detail: 'Impianti pilota' },
]

const principles = [
  {
    icon: Target,
    title: 'Impatto Misurabile',
    badge: 'ROI & Efficienza',
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    accentColor: 'text-emerald-400',
    borderColor: 'hover:border-emerald-500/50',
    glowColor: 'group-hover:shadow-emerald-500/10',
    text: 'Trasformiamo ogni conferimento in un dato utile per ridurre sprechi, costi e inefficienze operative in tempo reale.',
  },
  {
    icon: BrainCircuit,
    title: 'Intelligenza Edge-Native',
    badge: 'Zero Latenza',
    gradient: 'from-teal-500/20 via-teal-500/5 to-transparent',
    accentColor: 'text-teal-400',
    borderColor: 'hover:border-teal-500/50',
    glowColor: 'group-hover:shadow-teal-500/10',
    text: 'L’AI elabora i flussi direttamente sul campo, garantendo risposta istantanea e continuità operativa anche offline.',
  },
  {
    icon: ShieldCheck,
    title: 'Dati Certificati & ESG',
    badge: 'Audit Ready',
    gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    accentColor: 'text-cyan-400',
    borderColor: 'hover:border-cyan-500/50',
    glowColor: 'group-hover:shadow-cyan-500/10',
    text: 'Tracciabilità, normativa UNI EN 14803 e reportistica CSRD automatizzata per gli audit di sostenibilità aziendale.',
  },
]

const methodSteps = [
  {
    number: '01',
    phase: 'FASE 1',
    title: 'Analisi dei Flussi',
    text: 'Studiamo le dinamiche sul campo: tipologia dei materiali, ritmi di conferimento, attriti e vincoli fisici dell’impianto.',
    tags: ['Audit Operativo', 'Mapping Dati', 'Zero Interruzioni'],
    icon: Activity,
  },
  {
    number: '02',
    phase: 'FASE 2',
    title: 'Integrazione Co-Progettata',
    text: 'Dispieghiamo stazioni Hardware Edge AI adattabili ai processi e ai macchinari esistenti, senza fermare l’operatività.',
    tags: ['Edge Hardware', 'Computer Vision', 'Plug & Play'],
    icon: Layers,
  },
  {
    number: '03',
    phase: 'FASE 3',
    title: 'Misurazione e Scalabilità',
    text: 'Dati leggibili in Cloud, KPI azionabili in dashboard ed export diretto per reportistica e bilanci ESG di sostenibilità.',
    tags: ['Cloud Sync', 'API ERP', 'CSRD Export'],
    icon: BarChart3,
  },
]

export function AboutPage() {
  const ecosystemImages = [
    { src: software, alt: "Software Zeno" },
    { src: dashboard, alt: "Hardware e Stazione Zeno" }
  ];

  const teamImages = [
    { src: teamPhoto, alt: "Zeno Station - Hardware Edge AI" },
    { src: giorgio, alt: "Giorgio - CFO" },
    { src: stefano, alt: "Stefano - Co-founder & CEO" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

  // Timer per lo slideshow dell'ecosistema
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ecosystemImages.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [ecosystemImages.length]);

  // Timer per lo slideshow del team (3 immagini, 2 sec)
  useEffect(() => {
    const teamTimer = setInterval(() => {
      setCurrentTeamIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
    }, 2000);

    return () => clearInterval(teamTimer);
  }, [teamImages.length]);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans overflow-hidden">
      
      <main className="relative mx-auto max-w-7xl space-y-20 px-4 py-12 sm:px-6 sm:py-20 lg:px-8 z-10">
        
        {/* HERO SECTION */}
        <section className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 pt-4">
          <div className="space-y-7 lg:col-span-7">
            
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-700 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="tracking-wide uppercase text-[11px]">Next-Gen Edge AI Vision • Built in Italy</span>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl leading-[1.08]">
              Non basta raccogliere dati.{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Bisogna sapere cosa farne.
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Sviluppiamo infrastrutture Hardware Edge AI per trasformare ogni conferimento di rifiuto in conoscenza trasparente, utile e misurabile.
            </p>

            <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-slate-500 border-l-2 border-emerald-500 pl-4">
              Uniamo computer vision, sensoristica industriale e normativa per aiutare impianti, utility e manifatture a prendere decisioni migliori in tempo reale.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link 
                to="/contatti?topic=demo" 
                className="inline-flex items-center gap-2.5 rounded-xl bg-slate-950 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl shadow-slate-950/20 transition-all hover:bg-slate-800 hover:scale-[1.02]"
              >
                <span>Richiedi Demo Tecnica</span>
                <ArrowRight className="h-4 w-4 text-emerald-400" />
              </Link>
              
              <a 
                href="#missione" 
                className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors shadow-sm"
              >
                La Nostra Missione
              </a>
            </div>
          </div>

          {/* BOX SCURO HARDWARE PREVIEW */}
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-emerald-500/15 blur-2xl pointer-events-none" />
            
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl group">
              <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden">
                <img 
                  src={ZenoDynamics} 
                  alt="Stazione Hardware Zeno AI" 
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                
              </div>
            </div>
          </div>
        </section>

        {/* BOX SCURO METRICHE */}
        <section className="rounded-3xl border border-slate-800 bg-slate-950 p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 blur-2xl pointer-events-none" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {metrics.map((m) => (
              <div key={m.label} className="space-y-1 text-center md:text-left border-l border-slate-800 pl-4 first:border-0">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-mono tracking-tight">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-emerald-400">{m.label}</div>
                <div className="text-[11px] text-slate-400">{m.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION MISSIONE */}
        <section id="missione" className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="space-y-4 lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              <Target className="h-4 w-4" />
              <span>Perché Esistiamo</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Rendere visibile il valore nascosto nei flussi di scarto.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Dietro ogni conferimento ci sono tempi, responsabilità normative e risorse economiche. Quando i dati non ci sono o arrivano in ritardo, la sostenibilità resta soltanto una dichiarazione d'intenti.
            </p>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 bg-slate-950 text-white border border-slate-800 p-7 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-xl pointer-events-none" />
            <p className="text-sm sm:text-base leading-relaxed text-slate-200 relative z-10">
              "Zeno nasce per colmare questo vuoto: osservare con la massima precisione, interpretare la materia in tempo reale e restituire informazioni azionabili all'istante a chi deve gestire i processi."
            </p>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Zeno Dynamics Core Philosophy</span>
              <span className="text-emerald-400 font-mono">2026 Vision</span>
            </div>
          </div>
        </section>

        {/* SEZIONE TEAM UNITO */}
        <section className="space-y-8">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-500/10 border border-emerald-600/20 px-3.5 py-1.5 rounded-full">
          <Users className="h-3.5 w-3.5" />
          <span>La Nostra Squadra</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Un unico team, competenze complementari.
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Dalla ricerca universitaria alla progettazione industriale: uniamo intelligenza artificiale, sviluppo software ed ingegneria meccatronica sotto lo stesso tetto.
        </p>
      </div>

      <div className="relative rounded-3xl border border-slate-800 bg-slate-950 text-white overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[130px] pointer-events-none" />

        <div className="grid lg:grid-cols-12 items-stretch">
          
          {/* Colonna Testuale (Sinistra) */}
          <div className="p-8 sm:p-12 lg:col-span-6 flex flex-col justify-between space-y-8 z-10">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Ingegneria & Operations In-House</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                Realizziamo ogni componente con visione integrata.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Non esternalizziamo il cuore della nostra tecnologia. Progettiamo e ottimizziamo direttamente sia i modelli neurali di computer vision che l'hardware edge sul campo, garantendo massima affidabilità e tempi di risposta istantanei.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                  <Code2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">AI & Full-Stack</div>
                  <div className="text-[11px] text-slate-400">Algoritmi proprietari</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 mt-0.5">
                  <Wrench className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Embedded & Edge</div>
                  <div className="text-[11px] text-slate-400">Prototipazione rapida</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0 mt-0.5">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Regulatory & PAYT</div>
                  <div className="text-[11px] text-slate-400">Compliance UNI EN 14803</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0 mt-0.5">
                  <Globe className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Presenza sul Campo</div>
                  <div className="text-[11px] text-slate-400">Reggio Emilia & Impianti</div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonna Immagini in Slideshow a 3 elementi (Destra) */}
          <div className="relative lg:col-span-6 min-h-[22rem] lg:min-h-full overflow-hidden bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800">
            
            {teamImages.map((img, index) => (
              <img 
                key={img.src}
                src={img.src} 
                alt={img.alt} 
                className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                  index === currentTeamIndex ? 'opacity-80' : 'opacity-0 pointer-events-none'
                }`} 
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent lg:bg-gradient-to-r lg:from-slate-950 lg:via-transparent lg:to-transparent pointer-events-none" />

            {/* Badge testuale sovrapposto */}
            <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:max-w-xs z-20">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-md shadow-2xl space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                  <Compass className="h-4 w-4" />
                  <span>Ingegneria Italiana</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-normal">
                  Guidati dalla passione per l'innovazione sostenibile e dal rigore scientifico.
                </p>
              </div>
            </div>

            {/* Indicatori slideshow a pallini in alto a destra */}
            <div className="absolute top-4 right-4 z-20 flex gap-1.5 bg-slate-950/60 p-1.5 rounded-full backdrop-blur-md border border-slate-800">
              {teamImages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentTeamIndex ? 'w-4 bg-emerald-400' : 'w-1.5 bg-slate-600'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>

        {/* BOX BIANCO ORIGIN STORY */}
        <section className="grid items-center gap-8 lg:grid-cols-12 rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600">
              <MessageCircle className="h-4 w-4" />
              <span>Da Dove Partiamo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">
              Dalla difficoltà di decidere senza una visione completa.
            </h2>
          </div>

          <div className="space-y-4 border-l-2 border-emerald-500 pl-6 text-xs sm:text-sm leading-relaxed text-slate-600 lg:col-span-7">
            <p>
              In molti impianti le informazioni essenziali esistono già, ma sono frammentate: un dato nel gestionale pesate, uno nell'archivio manuale, un altro affidato alla memoria degli operatori.
            </p>
            <p>
              Zeno connette ciò che accade fisicamente al materiale con i sistemi gestionali ERP dell'azienda, fornendo reportistica pulita e certificata senza complicare il lavoro.
            </p>
          </div>
        </section>

        {/* BOX SCURO TARGET AUDIENCE */}
        <section className="rounded-3xl border border-slate-800 bg-slate-950 p-8 sm:p-12 text-white shadow-2xl lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="space-y-4 lg:col-span-5 mb-6 lg:mb-0">
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>A Chi Ci Rivolgiamo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              A chi vuole governare i processi con prove concrete.
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300 lg:col-span-7">
            <p>
              Ci affianchiamo a responsabili di stabilimento, aziende manifatturiere, gestori rifiuti e amministrazioni pubbliche che necessitano di tracciare flussi complessi, abbattere gli errori di differenziazione e soddisfare gli audit di conformità.
            </p>
            <p className="text-slate-400">
              Non forniamo tecnologia isolata fine a se stessa: affianchiamo i team operativi per costruire un flusso di lavoro efficiente, trasparente e duraturo nel tempo.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PRINCIPI GUIDA (RIVISITATI: GLASSMORPHISM & HIGH-TECH CARDS) */}
        {/* ========================================================================= */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-500/10 border border-emerald-600/20 px-3.5 py-1.5 rounded-full">
              <Zap className="h-3.5 w-3.5" />
              <span>Valori Fondanti</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              I Nostri Principi Guida
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Ingegneria concreta al servizio dell'operatività industriale di ogni giorno.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, badge, gradient, accentColor, borderColor, glowColor, text }) => (
              <article 
                key={title} 
                className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-1.5 ${borderColor} ${glowColor}`}
              >
                {/* Background ambient gradient overlay */}
                <div className={`absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl ${gradient} blur-2xl pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60`} />

                {/* Top accent border line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-slate-700 to-transparent group-hover:via-emerald-500 transition-all duration-500" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:bg-slate-850">
                      <Icon className={`h-6 w-6 ${accentColor}`} />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900/80 border border-slate-800 px-2.5 py-1 rounded-full backdrop-blur-md">
                      {badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-normal">
                      {text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* METODOLOGIA (RIVISITATA: CONNECTED PIPELINE PROCESS) */}
        {/* ========================================================================= */}
        {/* ========================================================================= */}
{/* METODOLOGIA (VERTICAL PIPELINE + HIGH-TECH SHOWCASE) */}
{/* ========================================================================= */}
<section className="relative rounded-3xl border border-slate-800/80 bg-slate-950 p-6 sm:p-10 md:p-14 text-white shadow-2xl overflow-hidden">
      
      {/* Sfondo geometrico e luci ambientali sfumate */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 space-y-12">
        
        {/* Header della Sezione */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full backdrop-blur-md">
              <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
              <span>Il Nostro Metodo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              La tecnologia è utile quando genera reale fiducia.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
            Una roadmap lineare e trasparente, progettata per integrarsi nei tuoi flussi operativi senza complessità superflue.
          </p>
        </div>

        {/* Grid Principale: Pipeline (Sinistra) + Overview Moderna (Destra) */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          
          {/* COLONNA SINISTRA: PIPELINE VERTICALE */}
          <div className="lg:col-span-7 relative space-y-4 flex flex-col justify-between">
            
            {/* Linea verticale connettore sfumata */}
            <div className="absolute top-8 bottom-8 left-[23px] w-[2px] bg-gradient-to-b from-emerald-500/50 via-slate-800 to-slate-800 z-0 hidden sm:block" />

            {methodSteps.map(({ number, phase, title, text, icon: StepIcon }, idx) => (
              <div 
                key={number} 
                className="group relative z-10 flex gap-5 sm:gap-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:bg-slate-900/80 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]"
              >
                {/* Glow interno al passaggio del mouse */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Badge Numero */}
                <div className="shrink-0 relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 font-mono text-sm font-bold text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:text-emerald-300 transition-all shadow-inner">
                    {number}
                  </div>
                </div>

                {/* Contenuto Testuale */}
                <div className="space-y-2 flex-1 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400/90 uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {phase}
                    </span>
                    <StepIcon className="h-4 w-4 text-slate-600 group-hover:text-emerald-400 transition-colors hidden sm:block" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* COLONNA DESTRA: PANNELLO MODERNO A CARD */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            
            {/* Dettaglio grafico decorativo */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 inline-block">
                  Valore Operativo
                </span>
                <h3 className="text-xl font-extrabold text-white tracking-tight pt-1">
                  Perché sceglierci
                </h3>
              </div>

              {/* Mini-Card dei Vantaggi (Stile Modern UI) */}
              <div className="space-y-3">
                
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3 transition-colors hover:border-slate-700">
                  <div className="h-6 w-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-white">Zero interruzioni operative</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">Hardware non invasivo installato in parallelo ai turni attuali.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3 transition-colors hover:border-slate-700">
                  <div className="h-6 w-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-white">Conformità PAYT & ESG</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">Tracciabilità certificata pronta per i report di sostenibilità.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3 transition-colors hover:border-slate-700">
                  <div className="h-6 w-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-white">Integrazione ERP nativa</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">Connessione fluida con i principali gestionali aziendali.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA Pulita in basso */}
            <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between relative z-10">
              <span className="text-xs text-slate-400">Dubbi sui flussi?</span>
              <Link 
                to="/contatti?topic=audit" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors group"
              >
                <span>Parla con un tecnico</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>

        {/* ECOSISTEMA / DASHBOARD */}
        <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 text-white shadow-2xl">
      <div className="grid items-center lg:grid-cols-12">
        
        {/* Colonna Testuale (Sinistra) */}
        <div className="space-y-6 p-8 sm:p-12 lg:col-span-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
            <Factory className="h-4 w-4" />
            <span>Ecosistema Connesso</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Hardware, AI e Analytics in un unico flusso continuo.
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
            Dalla stazione Edge sul campo alla dashboard direzionale: raccogliamo segnali ottici e di peso, riconosciamo i materiali e restituiamo indicazioni chiare per la gestione operativa.
          </p>
          
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
            {[
              'Inference AI locale ad alta velocità',
              'Analytics per flotta impianti, bilanci ESG e TARI Puntuale',
              'Integrazione API diretta con i sistemi ERP aziendali'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonna Immagini in Slideshow (Destra) */}
        <div className="relative h-full min-h-[22rem] lg:col-span-6 overflow-hidden bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800">
          
          {ecosystemImages.map((img, index) => (
            <img 
              key={img.src}
              src={img.src} 
              alt={img.alt} 
              className={`absolute inset-0 h-full w-full object-cover object-left transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-85' : 'opacity-0 pointer-events-none'
              }`} 
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent pointer-events-none" />

          {/* Indicatori minimali in basso a destra per lo slideshow */}
          <div className="absolute bottom-4 right-4 z-10 flex gap-1.5 bg-slate-950/60 p-1.5 rounded-full backdrop-blur-md border border-slate-800">
            {ecosystemImages.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentImageIndex ? 'w-4 bg-cyan-400' : 'w-1.5 bg-slate-600'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>

        {/* ESG & CTA */}
        <section className="grid items-center gap-10 lg:grid-cols-12 pt-4">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
              <img 
                src={esg} 
                alt="Indicatori ESG e Tracciabilità Sostenibile" 
                className="relative z-10 max-h-72 w-auto object-contain" 
              />
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              <HeartHandshake className="h-4 w-4" />
              <span>Partnership di Lungo Periodo</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Un percorso comune, non una semplice fornitura.
            </h2>
            
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
              Ascoltiamo prima di progettare, verifichiamo sul campo prima di promettere e misuriamo costantemente i risultati. Crediamo nella trasparenza tecnica e nella tracciabilità rigorosa di ogni dato gestito dal sistema.
            </p>

            <div>
              <Link 
                to="/contatti?topic=partner" 
                className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-500 hover:scale-[1.02]"
              >
                <span>Inizia un Progetto Con Noi</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}