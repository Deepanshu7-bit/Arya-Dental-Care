'use client';

import React from 'react';

export function TrustBar() {
  const items = [
    'ADA Certified',
    'Delta Dental',
    'Cigna PPO',
    'Invisalign Diamond+',
    'Aetna',
    'MetLife',
    'Sleep Apnea Trust',
    'Guardian',
  ];
  // Quadruple items to ensure smooth infinite marquee across any screen width
  const looped = [...items, ...items, ...items, ...items];

  return (
    <section className="trust-bar" data-reveal>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="trust-bar-label">
          <span className="eyebrow">
            Trusted by families across the Bay · Partnered with
          </span>
        </div>
      </div>
      <div className="trust-marquee">
        {looped.map((item, i) => (
          <div key={i} className="trust-item">
            <span>{item}</span>
            <span className="sep"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
