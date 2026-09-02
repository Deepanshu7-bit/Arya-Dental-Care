'use client';

import React from 'react';
import Image from 'next/image';
import { Icons } from './Icons';

interface HeroProps {
  variant: 'A' | 'B';
}

export function Hero({ variant }: HeroProps) {
  const bgImage = variant === 'A' ? '/assets/clinic-wide.jpg' : '/assets/clinic-interior.jpg';

  return (
    <section className="hero" id="top">
      {/* Background Photo & Rich Gradient Overlay */}
      <div className="hero-bg-photo" aria-hidden="true">
        <Image
          src={bgImage}
          alt="Arya Dental Clinic Backdrop"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-bg-overlay" />
      </div>

      {/* Ambient Motifs */}
      {variant === 'B' && <div className="hero-bg-motif m1"></div>}
      {variant === 'B' && <div className="hero-bg-motif m2"></div>}
      {variant === 'A' && <div className="hero-bg-motif"></div>}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="hero-grid-with-bg">
          {/* Main Hero Copy & Actions */}
          <div className="hero-content-col">
            <div className="hero-eyebrow" data-reveal>
              <span className="dot"></span>
              <span className="eyebrow">Super-Speciality Care · Sector 20, Panchkula</span>
            </div>
            <h1 className="h-display h-xl hero-title" data-reveal>
              {variant === 'A' ? (
                <>
                  Dentistry, <span className="italic-serif accent">quietly</span> reimagined for the modern smile.
                </>
              ) : (
                <>
                  A calmer kind of <span className="italic-serif accent">dental care</span>.
                </>
              )}
            </h1>
            <p className="lede hero-lede" data-reveal>
              {variant === 'A'
                ? 'Evidence-based dentistry in Panchkula, combining 35+ years of clinical heritage with gentle, patient-first care.'
                : 'Comprehensive dental care in Panchkula, guided by 35+ years of clinical excellence and gentle specialists.'}
            </p>
            <div className="hero-actions" data-reveal>
              <a href="#contact" className="btn btn-primary">
                Book your visit
                <span className="arrow">
                  <Icons.Arrow className="w-4 h-4" />
                </span>
              </a>
              <a href="#services" className="btn btn-secondary">
                Explore treatments
              </a>
            </div>
          </div>

          {/* Right Visual Column: Vertically Centered with Headline */}
          <div className="w-full flex items-center justify-center" data-reveal="scale">
            {variant === 'A' ? (
              /* ============================================================ */
              /* THE BOUNCING ORBITALS & CLINIC EMBLEM IN THE FIRST THEME (SERENE A) */
              /* ============================================================ */
              <div className="hero-vector-warm">
                {/* Organic Morphing Radiant Backdrop */}
                <div className="warm-blob-backdrop" />

                {/* Central Emblem / Clinic Portal */}
                <div className="hero-portal-emblem relative z-10 w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-2 sm:p-2.5 bg-surface/85 backdrop-blur-md border-2 border-accent/40 shadow-2xl flex items-center justify-center overflow-hidden group">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src="/assets/patient-smile.jpg"
                      alt="Healthy Happy Smile at Arya Dental Care"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Bouncing Orbital Badge 1: Same-Day Crowns (Top Left) */}
                <div className="bouncing-badge-1 orbital-badge top-left z-20">
                  <span className="badge-emoji">⚡</span>
                  <div>
                    <div className="badge-title">Same-Day Crowns</div>
                    <div className="badge-subtitle">Digital Ceramic</div>
                  </div>
                </div>

                {/* Bouncing Orbital Badge 2: MDS Orthodontics (Top Right) */}
                <div className="bouncing-badge-2 orbital-badge top-right z-20">
                  <span className="badge-emoji">💎</span>
                  <div>
                    <div className="badge-title">MDS Orthodontist</div>
                    <div className="badge-subtitle">Braces & Aligners</div>
                  </div>
                </div>

                {/* Bouncing Orbital Badge 3: Army-Grade Hygiene (Bottom Left) */}
                <div className="bouncing-badge-3 orbital-badge bottom-left z-20">
                  <span className="badge-emoji">🛡️</span>
                  <div>
                    <div className="badge-title">Army-Grade Hygiene</div>
                    <div className="badge-subtitle">B-Class Autoclave</div>
                  </div>
                </div>

                {/* Bouncing Orbital Badge 4: Satisfaction Rating (Bottom Right) */}
                <div className="bouncing-badge-4 orbital-badge bottom-right z-20">
                  <span className="badge-emoji">⭐</span>
                  <div>
                    <div className="badge-title">5.0★ on Google</div>
                    <div className="badge-subtitle">100% 5-Star Reviews</div>
                  </div>
                </div>
              </div>
            ) : (
              /* ============================================================ */
              /* PRECISION BOTANICAL SCULPTURE IN THE SECOND THEME (WARM B)   */
              /* ============================================================ */
              <div className="hero-vector-serene">
                {/* Rotating Geometric Alignment Rings */}
                <div className="serene-outer-ring" />
                <div className="serene-inner-ring" />
                <div className="serene-glow-sphere" />

                {/* Floating Tech Precision Badge Top */}
                <div className="absolute top-2 left-2 z-20 px-3.5 py-1.5 rounded-full bg-surface/90 backdrop-blur-md border border-line shadow-lg flex items-center gap-2 text-xs font-medium text-ink transition-transform duration-300 hover:scale-105">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>Digital Radiography · High Precision</span>
                </div>

                {/* Central Precision Botanical Smile Sculpture */}
                <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                  <svg viewBox="0 0 280 280" className="w-full h-full drop-shadow-2xl" fill="none">
                    <defs>
                      <linearGradient id="sculptureGrad" x1="20" y1="20" x2="260" y2="260" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="var(--accent-2, #3b82f6)" stopOpacity="0.75" />
                        <stop offset="100%" stopColor="var(--surface)" stopOpacity="0.95" />
                      </linearGradient>
                      <linearGradient id="glowRay" x1="140" y1="30" x2="140" y2="250" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>

                    <circle cx="140" cy="140" r="120" stroke="url(#glowRay)" strokeWidth="2" strokeDasharray="6 8" />
                    <line x1="140" y1="20" x2="140" y2="260" stroke="var(--line)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                    <line x1="20" y1="140" x2="260" y2="140" stroke="var(--line)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

                    <path
                      d="M 60 145 C 90 205, 190 205, 220 145 C 200 185, 80 185, 60 145 Z"
                      fill="url(#sculptureGrad)"
                    />
                    <path
                      d="M 140 70 C 115 70, 95 90, 95 125 C 95 155, 110 185, 120 210 C 126 225, 134 225, 137 200 C 139 185, 141 185, 143 200 C 146 225, 154 225, 160 210 C 170 185, 185 155, 185 125 C 185 90, 165 70, 140 70 Z"
                      fill="var(--surface)"
                      stroke="var(--accent)"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 75 120 Q 140 170 205 120"
                      stroke="var(--accent)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="75" cy="120" r="4" fill="var(--accent)" />
                    <circle cx="140" cy="155" r="5" fill="var(--accent)" />
                    <circle cx="205" cy="120" r="4" fill="var(--accent)" />
                  </svg>
                </div>

                {/* Floating Comfort Badge Bottom */}
                <div className="absolute bottom-2 right-2 z-20 px-4 py-2 rounded-2xl bg-surface/95 backdrop-blur-md border border-line shadow-xl flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                  <div className="w-8 h-8 rounded-xl bg-accent-soft text-accent flex items-center justify-center font-bold text-sm">
                    ✦
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-ink">Painless Dental Tech</div>
                    <div className="text-[11px] text-ink-soft">Rotary endodontics & gentle care</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hero Trust Bar: Balanced and Spanning Underneath */}
        <div className="hero-trust mt-10 pt-8 border-t border-line" data-stagger>
          <div className="hero-trust-item">
            <strong>10,000+</strong>
            <span>happy patients in Tricity</span>
          </div>
          <div className="hero-trust-item">
            <strong>5.0★</strong>
            <span>on Google (Verified reviews)</span>
          </div>
          <div className="hero-trust-item">
            <strong>35+ yrs</strong>
            <span>Army & clinical heritage</span>
          </div>
        </div>
      </div>
    </section>
  );
}
