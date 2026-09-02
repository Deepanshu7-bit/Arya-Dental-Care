'use client';

import React from 'react';
import { Icons, IconName } from './Icons';

interface ServiceItem {
  num: string;
  icon: IconName;
  title: string;
  desc: string;
}

export function Services() {
  const services: ServiceItem[] = [
    {
      num: '01',
      icon: 'Sparkle',
      title: 'Cleaning & Prevention',
      desc: 'Hygienist-led cleanings, sealants, and honest home-care coaching to keep problems small.',
    },
    {
      num: '02',
      icon: 'Tooth',
      title: 'Cosmetic Whitening',
      desc: 'In-chair Zoom and take-home trays, calibrated to your enamel and sensitivity.',
    },
    {
      num: '03',
      icon: 'Aligner',
      title: 'Invisalign & Aligners',
      desc: 'Diamond+ Invisalign provider. Most plans wrap in 6–14 months without a wire in sight.',
    },
    {
      num: '04',
      icon: 'Implant',
      title: 'Implants & Restorations',
      desc: 'Titanium implants, same-day crowns, veneers — matched to your bite and your face.',
    },
    {
      num: '05',
      icon: 'Shield',
      title: 'Root Canal & Endo',
      desc: 'Modern endo means less time in the chair. Numb in a minute, home before lunch.',
    },
    {
      num: '06',
      icon: 'Emergency',
      title: 'Emergency Same-Day',
      desc: "Chipped, broken, throbbing? Call before 11 AM and we'll see you that day.",
    },
  ];

  return (
    <section className="section" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <div className="section-header-title" data-reveal>
            <span className="eyebrow">Services · 01 → 06</span>
            <h2 className="h-display h-lg">
              Everything your smile needs, <span className="italic-serif">under one roof</span>.
            </h2>
          </div>
          <p className="section-header-side" data-reveal>
            From routine cleanings to full-mouth reconstruction, our clinicians handle it in-house — no bouncing between offices, no repeat X-rays, no surprise bills.
          </p>
        </div>

        <div className="services-grid" data-stagger>
          {services.map((s) => {
            const Icon = Icons[s.icon];
            return (
              <div key={s.num} className="service-card group">
                <div className="service-num">{s.num}</div>
                <div className="service-icon">
                  <Icon className="w-full h-full" />
                </div>
                <div className="service-arrow">
                  <Icons.ArrowUp className="w-6 h-6" />
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
