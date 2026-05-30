import React from "react";
import "./cta-section.css";

interface CtaSectionProps {
  ctaVisible: boolean;
}

const CtaSection: React.FC<CtaSectionProps> = ({ ctaVisible }) => (
    <section className={`cta-section ${ctaVisible ? "show" : ""}`}>
        <section id="Form" className="cta-section">
          <div className="cta-container">
            <h2 className="cta-title">Pronto a Iniziare?</h2>
            <p className="cta-description">
              Compila il nostro form e preparati a ricevere il tuo primo Zeno
            </p>
            <a href="./contatti" className="cta-button">Contattaci</a>
          </div>
        </section>
    </section>
);

export default CtaSection;
