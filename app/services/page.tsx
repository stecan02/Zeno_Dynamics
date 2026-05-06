'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";

export default function Services() {
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
      </main>
    </div>
  );
}
