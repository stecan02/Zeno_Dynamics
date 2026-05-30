'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ZenoSection from "@/components/zeno-section";
import ServiceSection from "@/components/services";
import FormSection from "@/components/form-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";


export default function Home() {
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <main>

        <FormSection/>
        {/* CTA Section */}
        
        
      </main>
      <Footer />
    </div>
  );
}