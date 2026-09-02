'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Why } from '@/components/Why';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { TweaksPanel, TweaksState } from '@/components/TweaksPanel';
import { useReveal } from '@/hooks/useReveal';

export default function Home() {
  const [tweaks, setTweaks] = useState<TweaksState>({
    variant: 'A',
    palette: 'A-teal',
    fontPairing: 'editorial',
    dark: false,
    animations: true,
  });

  // Apply variant, palette, dark, animations, and font-pairing to body
  useEffect(() => {
    const body = document.body;
    body.setAttribute('data-variant', tweaks.variant);
    body.setAttribute('data-palette', tweaks.palette);
    body.setAttribute('data-dark', String(tweaks.dark));
    body.setAttribute('data-anim', String(tweaks.animations));
    body.setAttribute('data-font-pairing', tweaks.fontPairing);
  }, [tweaks]);

  // Ensure palette matches variant when variant changes
  useEffect(() => {
    if (tweaks.variant === 'A' && !tweaks.palette.startsWith('A-')) {
      setTweaks((prev) => ({ ...prev, palette: 'A-teal' }));
    }
    if (tweaks.variant === 'B' && !tweaks.palette.startsWith('B-')) {
      setTweaks((prev) => ({ ...prev, palette: 'B-terra' }));
    }
  }, [tweaks.variant, tweaks.palette]);

  // Initialize intersection observer for reveal and counter animations
  useReveal();

  const handleTweakChange = <K extends keyof TweaksState>(key: K, value: TweaksState[K]) => {
    setTweaks((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <Header variant={tweaks.variant} />
      <main id="main">
        <Hero variant={tweaks.variant} />
        <TrustBar />
        <Services />
        <About />
        <Why />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <TweaksPanel tweaks={tweaks} onChange={handleTweakChange} />
    </>
  );
}
