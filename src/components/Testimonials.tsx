'use client';

import React from 'react';

interface Review {
  quote: string;
  name: string;
  treatment: string;
  initials: string;
}

export function Testimonials() {
  const reviews: Review[] = [
    {
      quote:
        "Dr. Anmol Arya and Dr. (Col) Parveen Arya are outstanding doctors. The clinic cleanliness, sterilization, and precision are unparalleled. My orthodontic treatment was completed ahead of schedule with perfect alignment.",
      name: 'Gurpreet S.',
      treatment: 'Orthodontics & Aligners',
      initials: 'GS',
    },
    {
      quote:
        'Hands down the best dental clinic near Sector 20 Panchkula / Peer Muchalla. Transparent explanations, painless single-sitting root canal, and very welcoming environment.',
      name: 'Neha M.',
      treatment: 'Rotary Root Canal & Crown',
      initials: 'NM',
    },
    {
      quote:
        'Dr. Anmol is very gentle and skilled with aligners. No hidden charges or unnecessary procedures. I have recommended Arya Dental Care to all my family members.',
      name: 'Rajesh K.',
      treatment: 'Clear Aligners & Preventive Care',
      initials: 'RK',
    },
  ];

  return (
    <section className="section" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="testimonials-header" data-reveal>
          <span className="eyebrow">Verified Reviews · 5.0★ on Google</span>
          <h2 className="h-display h-lg" style={{ marginTop: 16 }}>
            Words from the <span className="italic-serif">chair</span>.
          </h2>
        </div>
        <div className="testimonials-grid" data-stagger>
          {reviews.map((r, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-quote">&ldquo;{r.quote}&rdquo;</p>
              <div className="testimonial-meta">
                <div className="testimonial-avatar">{r.initials}</div>
                <div>
                  <div className="testimonial-name">{r.name}</div>
                  <div className="testimonial-treatment">{r.treatment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
