'use client';

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import "./services.css";
import "@/app/hero-section.css";
import { Brain, Trash2, ShoppingBag } from "lucide-react";

export default function Services() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar />

      <section
        ref={sectionRef}
        className={`services-hero ${visible ? "show" : ""}`}
      >
        <h1 className="services-title">
          Our Services
        </h1>

        <p className="services-description">
          Discover how technology and sustainability come together to transform
          waste management into a smart, efficient and scalable solution.
        </p>
      </section>

      <section className="services-list">
        <div className="service-item">
          <div className="service-icon">
           <Brain size={28} /> 
          </div>
            <h2 className="service-title">Data Analytics services</h2>
            <p className="service-description">
                We provide advanced data analytics to help businesses understand
                their waste patterns and identify opportunities for improvement.
            </p>
            <button className="banner-button">
              Scopri i nostri servizi →
            </button>
          </div>

        <div className="service-item">
          <div className="service-icon">
           <Trash2 size={28} /> 
          </div>
            <h2 className="service-title">Smart Waste Bin</h2>
            <p className="service-description">
                Our smart waste bins are equipped with sensors that monitor fill
                levels in real-time. This allows for optimized collection routes and
                reduced operational costs.
            </p>
        </div>

        <div className="service-item">
          <div className="service-icon">
           <ShoppingBag size={28} /> 
          </div>
            <h2 className="service-title">W-Bag Line</h2>
            <p className="service-description">
                Kore is our mobile app that allows users to track their waste
                management performance, receive notifications and access support.
            </p>
        </div>
        </section>
    </div>
  );
}