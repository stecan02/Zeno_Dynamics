'use client';

import React, { useRef, useState, useEffect } from "react";
import "./form-section.css";

const FormSection: React.FC = () => {
const formRef = useRef(null);
const [formVisible, setFormVisible] = useState(false);
const [formData, setFormData] = useState({
  nome: "",
  email: "",
  azienda: "",
  messaggio: "",
});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/contatti", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    alert("Messaggio inviato!");
  } else {
    alert("Errore nell'invio");
  }
};

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFormVisible(true);
      },
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="Form"
      ref={formRef}
      className={`form-section ${formVisible ? "show" : ""}`}
    >
      <div className="form-container">

        {/* SINISTRA */}
        <div className="sx-item">

          <h2 className="sx-title">
            Progettiamo insieme la soluzione perfetta
          </h2>
          <p className="sx-description">
            Compila il form e scopri come Zeno Dynamics può aiutare 
            la tua azienda ad automatizzare e ottimizzare la raccolta rifiuti.
          </p>
        </div>

        {/* DESTRA */}
        <div className="dx-item">
          <form className="contact-form"  onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Nome</label>
              <input
  type="text"
  placeholder="Il tuo nome"
  value={formData.nome}
  onChange={(e) =>
    setFormData({ ...formData, nome: e.target.value })
  }
/>
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
  type="email"
  placeholder="email@azienda.com"
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
/>
            </div>

            <div className="input-group">
              <label>Azienda</label>
              <input
  type="text"
  placeholder="Nome azienda"
  value={formData.azienda}
  onChange={(e) =>
    setFormData({ ...formData, azienda: e.target.value })
  }
/>
            </div>

            <div className="input-group">
              <label>Messaggio</label>
              <textarea
  rows={1}
  placeholder="Parlaci delle tue esigenze..."
  value={formData.messaggio}
  onChange={(e) =>
    setFormData({ ...formData, messaggio: e.target.value })
  }
/>
            </div>

            <button type="submit" className="submit-btn">
              Invia richiesta →
            </button>

          </form>
        </div>

      </div>

      <div className="form-container2">
       <div className="contact-card">
    <h3 className="contact-title">Sede legale</h3>
    <p className="contact-descr">
      <a href="https://maps.google.com/?q=Via Guareschi 2, 42019 Scandiano (RE) - Italia" target="_blank" rel="noopener noreferrer">
        Via Guareschi 2, 42019 Scandiano (RE) - Italia
      </a>
    </p>
  </div>
       <div className="contact-card">
    <h3 className="contact-title">Email</h3>
    <p className="contact-descr"><a href="mailto:info@zenodynamicslab.com">info@zenodynamicslab.com</a></p>
  </div>

  <div className="contact-card">
    <h3 className="contact-title">Telefono</h3>
    <p className="contact-descr">+39 388 783 5574<br></br>+39 331 409 9819</p>
  </div>
      </div>
    </section>
  );
};

export default FormSection;