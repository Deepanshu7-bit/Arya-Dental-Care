'use client';

import React from 'react';
import { Icons, IconName } from './Icons';

interface Pillar {
  icon: IconName;
  title: string;
  desc: string;
}

export function Why() {
  const pillars: Pillar[] = [
    {
      icon: 'Shield',
      title: 'Army-Grade Sterilization',
      desc: 'B-class vacuum autoclave sterilization and single-use disposables following strict Army Dental Corps protocols to guarantee zero cross-infection.',
    },
    {
      icon: 'Doctor',
      title: 'MDS Specialist Team',
      desc: 'Super-speciality care guided by Dr. (Col) Parveen Kumar Arya (35+ yrs Army Dental Corps) and Dr. Anmol Arya (MDS Orthodontist, ACDS alumnus).',
    },
    {
      icon: 'Tech',
      title: 'Digital & Painless Tech',
      desc: 'Modern rotary endodontics for painless root canals, low-radiation digital imaging, and customized clear aligners for precise smile design.',
    },
    {
      icon: 'Heart',
      title: 'Transparent & Ethical Care',
      desc: 'Evidence-based advice with written treatment estimates before starting. No unnecessary procedures, no hidden costs — honest dentistry.',
    },
  ];

  return (
    <section className="section why-section" id="why">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <div className="section-header-title" data-reveal>
            <span className="eyebrow">Why Arya</span>
            <h2 className="h-display h-lg">
              Four things we <span className="italic-serif">refuse</span> to compromise on.
            </h2>
          </div>
          <p className="section-header-side" data-reveal>
            The details that separate a good dental visit from a memorable one. This is where we invest, because our patients told us it&apos;s where it matters.
          </p>
        </div>
        <div className="why-grid" data-stagger>
          {pillars.map((p, i) => {
            const Icon = Icons[p.icon];
            return (
              <div key={i} className="why-card">
                <div className="why-card-icon">
                  <Icon className="w-full h-full" />
                </div>
                <h3 className="why-card-title">{p.title}</h3>
                <p className="why-card-desc">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
