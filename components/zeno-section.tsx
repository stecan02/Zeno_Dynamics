'use client';

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import "./zeno-section.css";

const images = ["/zeno_real6.png", "/zeno_real.png"];

const ZenoSection: React.FC = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const bannerRef = useRef<HTMLDivElement>(null);
const [bannerVisible, setBannerVisible] = useState(false);
const sectionRef = useRef(null);
const [sectionVisible, setSectionVisible] = useState(false);
const zenoRef = useRef(null);
const [zenoVisible, setZenoVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setBannerVisible(true);
        else setBannerVisible(false);
      },
      { threshold: 0.1 }
    );
    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setZenoVisible(true);
      },
      { threshold: 0.1 }
    );
    if (zenoRef.current) observer.observe(zenoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="Prodotto" ref={zenoRef} className={`zeno-section ${zenoVisible ? "show" : ""}`}>
        <div className="zeno-container">
          <div className="zeno-header">
            <div className="zeno-header-content">

              <div className="zeno-carousel">
                <div
                  className="zeno-carousel-track"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`Zeno ${i}`}
                      width={400}
                      height={300}
                      className="zeno-carousel-image"
                    />
                  ))}
                </div>
                <div className="zeno-dots">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      className={`zeno-dot ${i === currentIndex ? "active" : ""}`}
                      onClick={() => setCurrentIndex(i)}
                    />
                  ))}
                </div>
              </div>

              <div className="zeno-side">
                <h2 className="zeno-main-title">
                  <span className="highlight">Zeno</span>, l'era della gestione rifiuti 2.0
                </h2>
                <div className="zeno-side-text">
                  Nasce per ridefinire il modo in cui le aziende gestiscono i rifiuti. Un sistema intelligente che unisce automazione e AI per creare un processo efficiente, sostenibile e trasparente.
                </div>
                <div className="zeno-side-button">
                  <button className="zeno-side-btn">Scopri i nostri servizi →</button>
                </div>
              </div>

            </div>
          </div>

          <div
            ref={bannerRef}
            className={`banner-wrapper ${bannerVisible ? "banner-visible" : ""}`}
          >
            <div className="banner-card banner-left">
              <div className="banner-content">
                <h3 className="banner-title">Lo smart-bin del futuro per il tuo business</h3>
                <p className="banner-description">
                  Dotato di un sistema di riconoscimento intelligente con una precisione del 96%, Zeno è in grado di identificare e smistare più rifiuti contemporaneamente.
                </p>
                <button className="banner-button">I tuoi vantaggi →</button>
              </div>
            </div>

            <div className="banner-card banner-right">
              <div className="banner-content">
                <h3 className="banner-title">Riconosce e smista i rifiuti in autonomia</h3>
                <p className="banner-description_bis">
                  Il funzionamento è semplice ed intuitivo: gli utenti si avvicinano al cestino, dove nella parte superiore trovano un unico vano di inserimento, in cui possono depositare i rifiuti di vario tipo, dopodichè il gioco è fatto, al resto pensa Zeno...
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="zeno-image-section">
        <div className="zeno-image-wrapper">
          <div className="zeno-image-container">
            <Image
              src="/prototipo.png"
              alt="Zeno Image"
              width={900}
              height={600}
              className="zeno-image"
            />
          </div>
          <div className="vertical-divider"></div>
          <div className="zeno-info">
            <h2 className="zeno-info-title">Perchè proprio Zeno?</h2>
            <p className="zeno-info-text">
              Zeno ridefinisce il concetto di smart-bin grazie a un sistema intelligente capace di riconoscere e smistare più rifiuti simultaneamente, ottimizzando ogni fase della raccolta.
            </p>
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

      
    </>
  );
};

export default ZenoSection;