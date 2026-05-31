'use client';

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import "./zeno-section.css";
import "./unic-section.css"

const UnicSection: React.FC = () => {
const unicRef = useRef(null);
const [unicVisible, setUnicVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setUnicVisible(true);
    },
    { threshold: 0.1 }
  );
  if (unicRef.current) observer.observe(unicRef.current);
  return () => observer.disconnect();
}, []);

  return (
    <>
      <section ref={unicRef} className={`zeno-image-section ${unicVisible ? "show" : ""}`}>
  <div className="zeno-uniq-wrapper">

    {/* TITOLO IN CIMA */}
    <h2 className="zeno-uniq-title">Perché proprio <span className="highlight">Zeno</span>?</h2>

    {/* DUE COLONNE */}
    <div className="zeno-uniq-grid">

      {/* COLONNA SINISTRA — testo + stats */}
      <div className="zeno-uniq-left">
        <p className="zeno-uniq-text">
          Zeno ridefinisce il concetto di smart-bin grazie a un sistema intelligente capace di riconoscere e smistare più rifiuti simultaneamente, ottimizzando ogni fase della raccolta differenziata.
        </p>
        <p className="zeno-uniq-text">
          A differenza dei cestini tradizionali, Zeno non richiede alcuna separazione manuale: pensa a tutto lui, in tempo reale, con una precisione del 96%.
        </p>

        {/* STATS SOTTO IL TESTO */}
        <div className="zeno-uniq-stats">
          <div className="zeno-uniq-stat">
            <div className="stats-item-title">AI</div>
            <div className="stats-item-desc">Riconoscimento intelligente</div>
          </div>
          <div className="zeno-uniq-stat">
            <div className="stats-item-title">24/7</div>
            <div className="stats-item-desc">Operatività continua</div>
          </div>
          <div className="zeno-uniq-stat">
            <div className="stats-item-title">96%</div>
            <div className="stats-item-desc">Precisione di smistamento</div>
          </div>
        </div>
      </div>

      {/* COLONNA DESTRA — immagine */}
      <div className="zeno-uniq-right">
        <Image
          src="/sfondo_con_zeno.png"
          alt="Zeno Image"
          width={600}
          height={500}
          className="zeno-uniq-img"
        />
      </div>

    </div>
  </div>
</section>  
    </>
  );
};

export default UnicSection;