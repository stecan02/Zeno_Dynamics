'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import "./hero-section.css";
import "./zeno-section.css";
import "./cta-section.css";

export default function Home() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          {/* Background gradient */}
          <div className="hero-bg"></div>
          {/* Accent decoration */}
          <div className="hero-accent top"></div>
          <div className="hero-accent bottom"></div>
          <div className="hero-content">
            <h1 className="hero-title">
              Una nuova<span className="highlight"> gestione dei rifiuti</span> per il tuo business
            </h1>
            <p className="hero-desc">
              Porta innovazione nella tua realtà con una soluzione intelligente e sostenibile...
            </p>
            <div className="hero-btns">
              <button className="hero-btn-primary">Inizia Ora</button>
              <a href="#Prodotto" className="hero-btn-primary">
               Scopri di Più
              </a>
            </div>
            {/* Stats */}
            <div className="stats-grid">
              <div>
                <div className="stats-item-title">200+</div>
                <div className="stats-item-desc">Feedback positivi</div>
              </div>
              <div>
                <div className="stats-item-title">95%</div>
                <div className="stats-item-desc">Tasso di Successo</div>
              </div>
              <div>
                <div className="stats-item-title">5+</div>
                <div className="stats-item-desc">Mesi di R&S</div>
              </div>
            </div>
          </div>
        </section>

        {/* Zeno Banner Section */}
        <section id="Prodotto" className="zeno-section">
          <div className="zeno-container">
           <div className="zeno-header">
            <h2 className="zeno-main-title">Il Nostro Prodotto</h2>
           </div>
       

          <div
              ref={bannerRef}
              className={`banner-wrapper ${isVisible ? "banner-visible" : ""}`}
            >

              {/* CARD PRINCIPALE (SINISTRA - SOPRA) */}
              <div className="banner-card banner-left">
                <div className="banner-content">
                  <h3 className="banner-title">
                    Zeno, lo smart-bin del futuro
                  </h3>

                  <p className="banner-description">
                    Nasce per ridefinire il modo in cui le aziende gestiscono i rifiuti. Un sistema intelligente che unisce automazione e AI per creare un processo efficiente, sostenibile e trasparente.
                  </p>

                  <button className="banner-button">
                    Scopri Zeno →
                  </button>
                </div>
              </div>

              {/* CARD SECONDARIA (DESTRA - SOTTO) */}
              <div className="banner-card banner-right">
                <div className="banner-content">
                  <h3 className="banner-title">
                    Zeno riconosce e smista i rifiuti in autonomia
                  </h3>

                  <p className="banner-description_bis">
                    Il funzionamento è semplice ed intuitivo : gli utenti si avvicinano al cestino, dove nella parte superiore trovano un unico vano di inserimento, in cui possono depositare i rifiuti di vario tipo, dopodichè il gioco è fatto, al resto pensa Zeno...
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section className="zeno-image-section">
  <div className="zeno-image-wrapper">

    {/* IMMAGINE */}
    <div className="zeno-image-container">
      <Image
        src="/prototipo.png"
        alt="Zeno Image"
        width={900}
        height={600}
        className="zeno-image"
      />
    </div>

    {/* BARRA SEPARATRICE */}
    <div className="vertical-divider"></div>

    {/* TESTO A DESTRA */}
    <div className="zeno-info">
      <h2 className="zeno-info-title">
        Perchè proprio Zeno? 
      </h2>

      <p className="zeno-info-text">
        Zeno ridefinisce il concetto di smart-bin grazie a un sistema intelligente capace di riconoscere e smistare più rifiuti simultaneamente, ottimizzando ogni fase della raccolta.
      </p>

      {/* STATS GRID */}
      <div className="stats-grid zeno-stats">
        <div>
          <div className="stats-item-title">AI</div>
          <div className="stats-item-desc">Riconoscimento intelligente</div>
        </div>

        <div>
          <div className="stats-item-title">24/7</div>
          <div className="stats-item-desc">Operatività continua</div>
        </div>

        <div>
          <div className="stats-item-title">Smart</div>
          <div className="stats-item-desc">Monitoraggio avanzato</div>
        </div>
      </div>
    </div>

  </div>
</section>

        {/* CTA Section */}
        <section className="cta-section">
         <div className="cta-container">
          <h2 className="cta-title">Pronto a Iniziare?</h2>
          <p className="cta-description">
          Compila il nostro form e preparati a ricevere il tuo primo Zeno
          </p>
          <button className="cta-button">
          Form
          </button>
          </div>
        </section>
      </main>
    </div>
  );
}
