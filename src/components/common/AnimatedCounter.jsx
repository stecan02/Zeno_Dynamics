import { useState, useEffect } from "react";

export function AnimatedCounter({ value, duration = 1600, placeholder = "888.8" }) {
  const [count, setCount] = useState("0");

  useEffect(() => {
    const numericMatch = String(value).match(/^([+-]?)([0-9]+(?:\.[0-9]+)?)(.*)$/);

    if (!numericMatch) {
      setCount(value);
      return;
    }

    const sign = numericMatch[1] === "-" ? -1 : 1;
    const numericPart = numericMatch[2];
    const target = sign * parseFloat(numericPart);
    const suffix = numericMatch[3] || "";
    const isDecimal = numericPart.includes(".");
    let startTime = null;
    let animationFrameId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progressPercentage, 3);
      const currentCount = easeProgress * target;

      if (isDecimal) {
        setCount(currentCount.toFixed(1) + suffix);
      } else {
        setCount((target < 0 ? Math.ceil(currentCount) : Math.floor(currentCount)) + suffix);
      }

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [value, duration]);

  return (
    <div className="relative inline-block font-mono font-bold tracking-tight select-none">
      <span className="text-slate-100 dark:text-slate-800/30 select-none opacity-80" aria-hidden="true">
        {placeholder}
      </span>
      <span className="absolute left-0 top-0 z-10 text-slate-900 bg-gradient-to-r from-slate-900 via-emerald-950 to-emerald-700 bg-clip-text text-transparent">
        {count}
      </span>
    </div>
  );
}