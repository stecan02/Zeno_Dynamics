import { Routes, Route } from "react-router-dom"
import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { HeroSection } from "./components/sections/HeroSection"
import { FeaturesSection } from "./components/sections/FeaturesSection"
import { TractionSection } from "./components/sections/TractionSection"
import { DarkSection } from "./components/sections/DarkSection"
import { BenefitsSection } from "./components/sections/BenefitsSection"
import { PackagesSection } from "./components/sections/PackagesSection"
import { RentalSection } from "./components/sections/RentalSection" // <-- Importa la nuova sezione
import { ContactPage } from "./pages/ContactPage"
import { ServicesPage } from "./pages/ServicesPage"
import { AboutPage } from "./pages/AboutPage"

// Componente per la Home
function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-8 pb-24 md:py-32 space-y-32">
      <HeroSection />
      <FeaturesSection />
      <TractionSection />
      <DarkSection />
      <BenefitsSection />
      <PackagesSection />
      <RentalSection /> {/* <-- Posizionata dopo i pacchetti */}
    </main>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden flex flex-col justify-between">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contatti" element={
          <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 w-full">
            <ContactPage />
          </main>
        } />
        <Route path="/servizi" element={
          <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 w-full">
            <ServicesPage />
          </main>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Home" element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  )
}