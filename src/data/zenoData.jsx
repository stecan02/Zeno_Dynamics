import { Cpu, BarChart3, Layers, Globe, TrendingUp, Activity, ShieldCheck, Box, Building2, Factory } from "lucide-react"

import automationBg from '@/assets/zenobox1.png';
import analyticsBg from '@/assets/gestionale3.png';
import sfondo_con_zeno from '@/assets/sfondo_con_zeno.png';
import sfondo_con_zeno2 from '@/assets/sfondo_con_zeno2.png';
import webcam from '@/assets/webcam.png';

export const carouselImages = [sfondo_con_zeno, sfondo_con_zeno2];

export const bentoFeatures = [
  {
    id: 1,
    title: "Instant Automation",
    description: "Configurabile in pochi minuti. La nostra infrastruttura si integra istantaneamente con i flussi operativi aziendali preesistenti senza modifiche strutturali.",
    icon: <Cpu className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />,
    iconBg: "bg-emerald-50 border-emerald-100/70",
    gridClass: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-emerald-50/20 via-slate-50/40 to-white min-h-[340px]",
    isMain: true,
    bgImage: automationBg
  },
  {
    id: 2,
    title: "Live Analytics",
    description: "Dashboard real-time.",
    icon: <BarChart3 className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />,
    iconBg: "bg-emerald-50 border-emerald-100/70",
    gridClass: "md:col-span-1 min-h-[158px] bg-gradient-to-br from-slate-50/60 to-white",
    isAnalytics: true,
    bgImage: analyticsBg
  },
  {
    id: 3,
    title: "AI-Based",
    description: "Modelli di visione artificiale intergrati",
    icon: <Layers className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />,
    iconBg: "bg-emerald-50 border-emerald-100/70",
    gridClass: "md:col-span-1 min-h-[158px] bg-gradient-to-br from-slate-50/60 to-white",
    isAiFirst: true,
    bgImage: webcam
  },
  {
    id: 4,
    title: "Global Compliance Engine",
    description: "Validazione immediata e reportistica automatizzata dei dati di tracciabilità in totale conformità con le normative europee vigenti.",
    icon: <Globe className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />,
    iconBg: "bg-emerald-50 border-emerald-100/70",
    gridClass: "md:col-span-2 min-h-[158px] bg-gradient-to-br from-slate-50/40 via-emerald-50/10 to-white",
    isCompliance: true
  }
];

export const tractionMetrics = [
  {
    id: 1,
    targetValue: "96.1%",
    placeholder: "88.8%",
    label: "Accuratezza Visione AI",
    change: "+0.6% live",
    icon: <TrendingUp className="w-4 h-4 text-emerald-600" />,
    description: "Classificazione dei materiali in tempo reale sull'Edge AI."
  },
  {
    id: 2,
    targetValue: "178 t",
    placeholder: "888 t",
    label: "Rifiuti Tracciati",
    change: "+4% vs Q1",
    icon: <Activity className="w-4 h-4 text-emerald-600" />,
    description: "Flussi gestiti ed elaborati dalla piattaforma cloud."
  },
  {
    id: 3,
    targetValue: "100%",
    placeholder: "888%",
    label: "Compliance Normativa",
    change: "UNI EN 14803",
    icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
    description: "Validazione e log immutabili dei conferimenti."
  }
];

export const zenoPackages = [
  {
    id: "starter",
    name: "Zeno One",
    badge: "Entry-level",
    tagline: "Per uffici direzionali e singole sedi",
    description: "Unità compatto-funzionale con Edge AI locale per la tracciabilità diretta e la corretta separazione dei flussi principali di rifiuti.",
    features: [
      "Hardware Edge AI pluri-vano",
      "Riconoscimento e classificazione in tempo reale",
      "Dashboard Cloud Analytics Essential",
      "Reportistica mensile per KPI ambientali",
      "Assistenza tecnica e aggiornamenti base"
    ],
    highlight: false,
    buttonText: "Richiedi Scheda Tecnica",
    icon: <Box className="w-5 h-5 text-slate-700" />
  },
  {
    id: "pro",
    name: "Zeno Industrial",
    badge: "Più Scelto",
    tagline: "Per stabilimenti produttivi e poli logistici",
    description: "Sistema automatizzato multi-vano ad alta capacità con attuazione meccanica diretta, annullando totalmente l'errore umano, pensato per grandi realtà aziendali con necessità di più installazioni e configurazioni.",
    features: [
      "Smistamento meccanico automatico multi-vano",
      "Edge AI ad altissima accuratezza (>96%)",
      "Dashboard Real-time ESG & calcolo TARI",
      "Certificazione e log dati UNI EN 14803",
      "Integrazione API con sistemi gestionali aziendali",
      "Supporto prioritario e manutenzione 24/7"
    ],
    highlight: true,
    buttonText: "Richiedi Preventivo Pro",
    icon: <Building2 className="w-5 h-5 text-emerald-400" />
  },
  {
    id: "enterprise",
    name: "Zeno Enterprise",
    badge: "Su Misura",
    tagline: "Per impianti di riciclo, smart city & utility",
    description: "Infrastruttura personalizzata su larga scala, modelli di Visione Artificiale addestrati su materiali specifici ed integrazione ERP complessa, ideale per realtà con specifche esigenze permettendo di portare l'ecosistema Zeno Dynamics con soluzioni su misura.",
    features: [
      "Architettura hardware personalizzata ad alto volume",
      "Training AI dedicato per scarti industriali speciali",
      "Piattaforma multi-site con ruoli ed autorizzazioni",
      "Export dati automatizzato pronto per Audit CSRD",
      "Dedicated Account Manager e SLA garantiti",
      "Deployment flessibile (On-Premise o Hybrid Cloud)"
    ],
    highlight: false,
    buttonText: "Contatta il Team Enterprise",
    icon: <Factory className="w-5 h-5 text-slate-700" />
  }
];