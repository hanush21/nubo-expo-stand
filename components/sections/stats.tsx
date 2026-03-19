"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/shared/lib/language-context";

/** Parses "10+", "+50", "1", "ES · EU" → { num, prefix, suffix } */
function parseStatValue(value: string) {
  const m = value.match(/^([+]?)(\d+)([^0-9]*)$/);
  if (m) return { num: parseInt(m[2]), prefix: m[1], suffix: m[3].trim() };
  return { num: null, prefix: "", suffix: value };
}

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf: number;
    let start: number | null = null;

    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return count;
}

function StatItem({
  stat,
  isActive,
  hasBorder,
  delay,
}: {
  stat: { value: string; label: string; sub: string };
  isActive: boolean;
  hasBorder: boolean;
  delay: number;
}) {
  const { num, prefix, suffix } = parseStatValue(stat.value);
  const count = useCountUp(num ?? 0, isActive);

  return (
    <div
      className={`text-center transition-all duration-700 ${
        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${hasBorder ? "lg:border-r lg:border-white/10" : ""}`}
      style={{ transitionDelay: isActive ? `${delay}ms` : "0ms" }}
    >
      <div className="text-3xl lg:text-4xl font-black text-[#F26522] mb-1 tracking-tight">
        {num !== null ? (
          <>
            {prefix}
            {isActive ? count : 0}
            {suffix}
          </>
        ) : (
          stat.value
        )}
      </div>
      <div className="text-sm font-semibold text-white mb-0.5">{stat.label}</div>
      <div className="text-xs text-white/40">{stat.sub}</div>
    </div>
  );
}

export function Stats() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#2B2B2B] py-14 lg:py-16">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {t.stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              isActive={isActive}
              hasBorder={index < t.stats.length - 1}
              delay={index * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
