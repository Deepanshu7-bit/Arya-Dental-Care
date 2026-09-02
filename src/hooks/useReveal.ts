'use client';

import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const startCount = (el: HTMLElement) => {
      const targetStr = el.dataset.count;
      if (!targetStr) return;
      const target = parseInt(targetStr, 10);
      if (isNaN(target)) return;

      if (reduce) {
        el.textContent = String(target);
        return;
      }

      const dur = 1200;
      const start = performance.now();

      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(target * eased));
        if (p < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const targetEl = e.target as HTMLElement;
            targetEl.classList.add('in');
            targetEl.querySelectorAll<HTMLElement>('[data-count]').forEach(startCount);
            io.unobserve(targetEl);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px 15% 0px' }
    );

    const observe = () => {
      document
        .querySelectorAll<HTMLElement>('[data-reveal]:not(.in), [data-stagger]:not(.in)')
        .forEach((el) => io.observe(el));
    };

    observe();

    // Safety net for initial viewport or quick scroll
    const safety = setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>('[data-reveal]:not(.in), [data-stagger]:not(.in)')
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 1.25) {
            el.classList.add('in');
            el.querySelectorAll<HTMLElement>('[data-count]').forEach(startCount);
          }
        });
    }, 350);

    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);
}
