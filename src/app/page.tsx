'use client';

import React, { useEffect } from 'react';
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
import { useReveal } from '@/hooks/useReveal';

export default function Home() {
  // Permanent settings: Serene (A), Navy palette, Light mode only, Animations enabled
  useEffect(() => {
    const body = document.body;
    body.setAttribute('data-variant', 'A');
    body.setAttribute('data-palette', 'A-navy');
    body.setAttribute('data-dark', 'false');
    body.setAttribute('data-anim', 'true');
    body.setAttribute('data-font-pairing', 'editorial');
  }, []);

  // Initialize intersection observer for reveal and counter animations
  useReveal();

  return (
    <>
      <Header variant="A" />
      <main id="main">
        <Hero variant="A" />
        <TrustBar />
        <Services />
        <About />
        <Why />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
