 'use client';
      
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import "./services.css";
import "./hero-section.css";
      
const ServiceSection: React.FC = () => {
const bannerRef = useRef<HTMLDivElement>(null);
const [isVisible, setIsVisible] = useState(false);
const images = ["/zeno_real6.png", "/zeno_real.png"];
const [currentIndex, setCurrentIndex] = useState(0);
const sectionRef = useRef(null);
const [visible, setVisible] = useState(false); 
const [serviceVisible, setServiceVisible] = useState(false);
      
      
useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              setServiceVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
          );
          if (sectionRef.current) observer.observe(sectionRef.current);
          return () => observer.disconnect();
        }, []);
      
return (
      <>
              {/* Services Section */}
              <div className="services-wrapper">
        <section
          ref={sectionRef}
          className={`services-hero ${serviceVisible ? "show" : ""}`}
        >
          <h1 className="services-title">
            La gamma <span className="highlight">Zeno Dynamics</span>
          </h1>
          <p className="services-description">
            Uno stack di soluzioni digitali per una gestione intelligente dei rifiuti.
          </p>
        </section>

        <section className="services-list">

          <div className="services-col-left">
            <div className="service-item-big-wrapper">
              <div className="service-item-big-inner">
                <div className="service-item-big service-item-big-front">
                  <h2 className="service-title-big">Zeno One</h2>
                  <img src="/primo_piano.png" alt="Zeno One" className="service-item-big-img" />
                </div>
                <div className="service-item-big service-item-big-back">
                  <h2 className="service-title-back">Zeno One</h2>
                  <p className="service-description-back">
                    Un sistema smart di nuova generazione con vano di inserimento e smistamento simultaneo nei quattro scomparti interni da 40L.<br />
                    Dotato di display touch e intelligenza artificiale per il riconoscimento automatico dei rifiuti.
                  </p>
                  <div className="service-tags">
                    <span className="service-tag">AI Recognition</span>
                    <span className="service-tag">Smart Sorting</span>
                    <span className="service-tag">Real-time</span>
                    <span className="service-tag">96% accuracy</span>
                    <span className="service-tag">IoT</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-item">
              <div></div>
            </div>
          </div>

          <div className="services-col-right">
            <div className="service-item flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h2 className="service-title"><span className="highlight">W-Bag</span></h2>
                  <img src="/W-bag.png" alt="W-Bag" className="service-item-float-img" />
                </div>
                <div className="flip-card-back">
                  <h2 className="service-title-back">W-Bag</h2>
                  <p className="service-description-back">
                    La nostra linea di consumabili smart progettata per integrarsi perfettamente con Zeno One.
                  </p>
                  <div className="service-tags">
                    <span className="service-tag">Eco-friendly</span>
                    <span className="service-tag">Smart Design</span>
                    <span className="service-tag">Recyclable</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-item flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h2 className="service-title-bis"><span className="highlight">Kore</span></h2>
                  <img src="/dash.png" alt="dash" className="service-item-float-img-bis" />
                </div>
                <div className="flip-card-back">
                  <h2 className="service-title-back">Kore</h2>
                  <p className="service-description-back">
                    Una piattaforma centralizzata per monitorare KPI, analizzare performance operative e generare report strategici in tempo reale.  
                  </p>
                  <div className="service-tags">
                    <span className="service-tag">KPI & Insight</span>
                    <span className="service-tag">Real-time Analytics</span>
                    <span className="service-tag">E-Reporting</span>
                    <span className="service-tag">Data-driven</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        </div>
        </>
        );
      }

export default ServiceSection;