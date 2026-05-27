'use client';

import React, { useState, useEffect } from "react";
import "./hero-section.css";

const HeroSection: React.FC = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <section className={`hero-section ${heroVisible ? "show" : ""}`}>
      <div className="hero-bg"></div>
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
          <a href="#Form" className="hero-btn-primary">Inizia ora</a>
          <a href="#Prodotto" className="hero-btn-primary">Scopri di Più</a>
        </div>
        <div className="stats-grid">
          <div>
            <div className="stats-item-title">200+</div>
            <div className="stats-item-desc">Feedback positivi</div>
          </div>
          <div>
            <div className="stats-item-title">96%</div>
            <div className="stats-item-desc">Tasso di Successo</div>
          </div>
          <div>
            <div className="stats-item-title">5+</div>
            <div className="stats-item-desc">Mesi di R&S</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;