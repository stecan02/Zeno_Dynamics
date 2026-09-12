import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building2, 
  Sparkles,
  ArrowUpRight,
  Copy,
  Check,
  Zap,
  Terminal,
  Calendar,
  ShieldCheck
} from 'lucide-react'

// Definizione argomenti posizionata all'esterno
const topicDetails = {
  demo: {
    label: 'Richiesta Demo',
    icon: Zap,
    desc: 'Prova dal vivo le funzionalità di Zeno',
    placeholder: 'Indica la data ideale per la demo, il numero di partecipanti e i tipi di rifiuti/materiali che ti interessa analizzare...',
    buttonText: 'Richiedi Demo Live'
  },
  quote: {
    label: 'Preventivo HW/AI',
    icon: Sparkles,
    desc: 'Quotazione personalizzata per il tuo impianto',
    placeholder: 'Descrivi i volumi stimati, i requisiti dell\'hardware, componenti integrabili ed eventuali personalizzazioni richieste...',
    buttonText: 'Richiedi Quotazione Personalizzata'
  },
  tech: {
    label: 'Supporto Tecnico',
    icon: Terminal,
    desc: 'Assistenza su modelli YOLO e integrazione',
    placeholder: 'Descrivi l\'anomalia riscontrata, il modello YOLO in uso o la configurazione hardware/software attuale...',
    buttonText: 'Invia Richiesta Tecnica'
  },
  partner: {
    label: 'Partnership',
    icon: Building2,
    desc: 'Opportunità di collaborazione commerciale',
    placeholder: 'Raccontaci della tua azienda, dei canali distributivi o delle sinergie tecnologiche che desideri esplorare...',
    buttonText: 'Invia Proposta Partnership'
  }
}

export function ContactPage() {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Legge il parametro 'topic' dall'URL (?topic=tech)
  const initialTopicParam = searchParams.get('topic')
  const defaultTopic = (initialTopicParam && topicDetails[initialTopicParam]) ? initialTopicParam : 'demo'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: defaultTopic,
    message: '',
    privacy: false
  })

  // Sincronizza lo stato se l'URL cambia mentre si è già sulla pagina
  useEffect(() => {
    const topicParam = searchParams.get('topic')
    if (topicParam && topicDetails[topicParam]) {
      setFormData(prev => ({ ...prev, topic: topicParam }))
    }
  }, [searchParams])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copiedField, setCopiedField] = useState(null)
  const [error, setError] = useState(null)
  const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL

  const loadCalendlyScript = () => {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') return reject(new Error('No window'))
      if (window.Calendly) return resolve(window.Calendly)

      const existing = document.querySelector('script[data-calendly]')
      if (existing) {
        existing.addEventListener('load', () => resolve(window.Calendly))
        existing.addEventListener('error', () => reject(new Error('Calendly script failed to load')))
        return
      }

      const s = document.createElement('script')
      s.src = 'https://assets.calendly.com/assets/external/widget.js'
      s.async = true
      s.setAttribute('data-calendly', 'true')
      s.onload = () => resolve(window.Calendly)
      s.onerror = () => reject(new Error('Calendly script failed to load'))
      document.body.appendChild(s)
    })
  }

  const openCalendly = async () => {
    if (!CALENDLY_URL) {
      alert('Nessun URL Calendly configurato. Aggiungi VITE_CALENDLY_URL al file .env')
      return
    }

    try {
      await loadCalendlyScript()
      if (window.Calendly && window.Calendly.initPopupWidget) {
        window.Calendly.initPopupWidget({ url: CALENDLY_URL })
      } else {
        window.open(CALENDLY_URL, '_blank')
      }
    } catch (e) {
      // Fallback: apri in nuova scheda
      window.open(CALENDLY_URL, '_blank')
    }
  }

  const currentTopicInfo = topicDetails[formData.topic] || topicDetails.demo

  const copyToClipboard = (text, fieldName) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
      setCopiedField(fieldName)
      setTimeout(() => setCopiedField(null), 2000)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      if (FORMSPREE_ENDPOINT) {
        const payload = {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          topic: formData.topic,
          message: formData.message
        }

        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })

        if (!res.ok) {
          throw new Error(`Invio fallito: ${res.status}`)
        }

      } else {
        const subject = encodeURIComponent(`${topicDetails[formData.topic]?.label || 'Contatto'} - ${formData.company || formData.name}`)
        const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\nAzienda: ${formData.company}\nTopic: ${formData.topic}\n\n${formData.message}`)
        window.location.href = `mailto:info@zenodynamicslab.com?subject=${subject}&body=${body}`
      }

      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        topic: 'demo',
        message: '',
        privacy: false
      })

    } catch (err) {
      console.error(err)
      setError('Si è verificato un errore durante l\'invio. Riprovare più tardi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative w-full py-6 sm:py-12 px-2 sm:px-6 lg:px-8 font-sans">
      
      {/* Box Scuro Arrotondato Principale - Padding interno aumentato (px-6 py-10 sm:p-12 lg:p-20) */}
      <div className="max-w-[1380px] mx-auto space-y-10 sm:space-y-12 relative z-10 rounded-2xl sm:rounded-[2.5rem] border border-slate-800/80 bg-slate-950 px-6 py-10 sm:p-12 lg:p-20 shadow-[0_30px_80px_rgba(15,23,42,0.65)] overflow-hidden text-slate-100">
        
        {/* Visual Tech Background Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Header Sezione */}
        <div className="text-center space-y-3 max-w-3xl mx-auto relative z-10">
          <h1 className="text-3xl sm:text-6xl font-black tracking-tight text-white break-words">
            Progettiamo insieme la <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">soluzione perfetta</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Hai domande sulle nostre soluzioni hardware o sui modelli di Computer Vision? Seleziona l'argomento e invia la tua richiesta.
          </p>
        </div>

        {/* Grid Principale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start relative z-10">
          
          {/* Main Form Box - Padding interno aumentato (p-6 sm:p-12) */}
          <div className="lg:col-span-7 bg-slate-900/60 border-2 border-slate-800/90 p-6 sm:p-12 backdrop-blur-2xl shadow-2xl relative overflow-hidden rounded-2xl sm:rounded-[2rem]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-[2rem] pointer-events-none" />

            {isSubmitted ? (
              <div className="py-16 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">Messaggio inviato con successo!</h3>
                <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Un nostro ingegnere prenderà in carico la tua richiesta e ti fornirà un riscontro dettagliato.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-full transition-all border border-slate-700 hover:border-slate-600 cursor-pointer"
                >
                  Invia un'altra richiesta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-3 rounded-lg bg-rose-900/40 border border-rose-700 text-rose-200 text-sm">
                    {error}
                  </div>
                )}
                
                {/* 01. Selezione Argomento */}
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                    01. Seleziona Argomento
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.keys(topicDetails).map((key) => {
                      const item = topicDetails[key]
                      const Icon = item.icon
                      const isSelected = formData.topic === key
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setFormData(p => ({ ...p, topic: key }))}
                          className={`p-4 border-2 transition-all duration-200 cursor-pointer flex items-start gap-3 text-left rounded-2xl ${
                            isSelected
                              ? 'bg-emerald-500/10 border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-500/10'
                              : 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                          }`}
                        >
                          <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-slate-200">{item.label}</div>
                            <div className="text-[10px] text-slate-400 line-clamp-1">{item.desc}</div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 02. Dettagli Utente */}
                <div className="space-y-3 pt-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                    02. I tuoi dati
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-slate-300 block">
                        Nome e Cognome <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Mario Rossi"
                        className="w-full h-11 px-4 bg-slate-950/80 border border-slate-800 text-slate-200 placeholder:text-slate-600 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-inner rounded-2xl"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-slate-300 block">
                        Email Aziendale <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="mario@azienda.it"
                        className="w-full h-11 px-4 bg-slate-950/80 border border-slate-800 text-slate-200 placeholder:text-slate-600 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-inner rounded-2xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-xs font-medium text-slate-300 block">
                      Azienda / Organizzazione
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="es. Acme Corp S.r.l."
                      className="w-full h-11 px-4 bg-slate-950/80 border border-slate-800 text-slate-200 placeholder:text-slate-600 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-inner rounded-2xl"
                    />
                  </div>
                </div>

                {/* 03. Textarea */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between items-center">
                    <label htmlFor="message" className="text-xs font-medium text-slate-300 block">
                      Messaggio <span className="text-emerald-400">*</span>
                    </label>
                    <span className="text-[10px] font-mono text-slate-500">
                      {formData.message.length} / 500
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={500}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={currentTopicInfo.placeholder}
                    className="w-full p-4 bg-slate-950/80 border border-slate-800 text-slate-200 placeholder:text-slate-600 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none shadow-inner rounded-2xl"
                  />
                </div>

                {/* Checkbox Privacy */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-0.5 h-4 w-4 rounded border-slate-800 bg-slate-950 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-950 cursor-pointer shrink-0"
                  />
                  <label htmlFor="privacy" className="text-[11px] text-slate-400 leading-normal cursor-pointer">
                    Ho letto e accetto l'informativa sulla <a href="#privacy" className="text-slate-200 underline underline-offset-2 hover:text-emerald-400 transition-colors">Privacy Policy</a>.
                  </label>
                </div>

                {/* Botton Invia */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 hover:opacity-95 text-slate-950 font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20 text-xs sm:text-sm active:scale-[0.99] rounded-2xl disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-slate-950" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Elaborazione richiesta...
                    </span>
                  ) : (
                    <>
                      <span>{currentTopicInfo.buttonText}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Destra */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Call Scheduler Banner */}
            <div className="p-6 sm:p-8 bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/30 relative overflow-hidden group shadow-xl rounded-2xl sm:rounded-[2rem]">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Calendar className="w-24 h-24 text-emerald-400" />
              </div>
              <div className="space-y-3 relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider">
                  <Zap className="w-3 h-3" />
                  Preferisci parlare a voce?
                </div>
                <h3 className="text-base font-bold text-white">Prenota una Demo di 15 min</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Scegli uno slot sul calendario del nostro team di ingegneria per una sessione 1-on-1.
                </p>
                <a
                  href="#book-call"
                  onClick={(e) => { e.preventDefault(); openCalendly(); }}
                  className="inline-flex items-center gap-2 pt-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Apri Calendario Disponibilità</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Click-to-Copy Contacts */}
            <div className="space-y-4">
              {/* Email Card */}
              <div 
                onClick={() => copyToClipboard('info@zenodynamicslab.com', 'email')}
                className="group p-5 bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer flex items-center justify-between gap-3 rounded-2xl"
              >
                <div className="flex min-w-0 items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-mono">Email Ufficiale</span>
                    <span className="block break-all text-xs font-semibold text-slate-200">info@zenodynamicslab.com</span>
                  </div>
                </div>
                <div className="text-slate-500 group-hover:text-slate-300">
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </div>
              </div>

              {/* Phone Card */}
              <div 
                onClick={() => copyToClipboard('+39 388 783 5574 / +39 331 409 9819', 'phone')}
                className="group p-5 bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer flex items-center justify-between gap-3 rounded-2xl"
              >
                <div className="flex min-w-0 items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-mono">Telefono HQ</span>
                    <span className="text-xs font-semibold text-slate-200 flex flex-wrap gap-x-2">
                      <span>+39 388 783 5574</span>
                      <span>+39 331 409 9819</span>
                    </span>
                  </div>
                </div>
                <div className="text-slate-500 group-hover:text-slate-300">
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </div>
              </div>
            </div>

            {/* Tech HQ & Guarantees */}
            <div className="p-7 bg-slate-900/30 border border-slate-800/80 space-y-4 text-xs rounded-3xl">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">Sede Operativa</span>
                  <span className="text-slate-400 text-[11px]">Scandiano (RE), Emilia-Romagna — Italia</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">Orari</span>
                  <span className="text-slate-400 text-[11px]">Lunedì - Sabato, 08:00 - 22:00 CEST</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA & Riservatezza garantita su ogni progetto</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}