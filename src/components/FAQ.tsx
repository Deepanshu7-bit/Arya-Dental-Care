'use client';

import React, { useState } from 'react';
import { Icons } from './Icons';

interface FAQItem {
  q: string;
  a: string;
}

export function FAQ() {
  const faqs: FAQItem[] = [
    {
      q: 'What happens at my first visit?',
      a: 'A conversation before anything else. We do a full exam, digital X-rays, and gum measurements — then sit down with you to walk through what we found. No pressure to book treatment on day one. Most first visits run about 75 minutes.',
    },
    {
      q: 'Do you take my insurance?',
      a: "We're in-network with Delta Dental, Cigna, Aetna, MetLife, Guardian, and most PPO plans. We'll verify your benefits before your appointment and give you a written estimate — no surprises at checkout.",
    },
    {
      q: 'What if I don&apos;t have insurance?',
      a: 'Our in-house Arya Membership is $39/month for adults ($22 for kids) and covers two cleanings, exams, X-rays, and 15% off any treatment. Most patients save 30–40% versus paying out of pocket.',
    },
    {
      q: "I'm anxious about the dentist — what are my options?",
      a: 'You\'re not alone; about a third of our patients tell us the same thing. We offer nitrous oxide at no extra cost, oral sedation for longer procedures, and something we call "quiet chair" — no small talk, headphones on, we go at your pace.',
    },
    {
      q: 'Do you see kids?',
      a: 'Yes — we see children starting around age 3. Our two pediatric-trained hygienists specialize in making early visits feel like a game. First visit for kids is free.',
    },
    {
      q: 'What counts as a dental emergency?',
      a: "Chipped or broken teeth, severe pain, lost crowns, and infections. Call us before 11 AM and we'll almost always see you the same day. After hours: our on-call clinician answers our main line.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section className="section" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="faq-grid">
          <div data-reveal>
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: 16 }}>
              Frequently asked
            </span>
            <h2 className="h-display h-lg">
              Questions, <span className="italic-serif">answered</span> before you ask.
            </h2>
            <p className="lede" style={{ marginTop: 24 }}>
              Still curious? Call or WhatsApp us at{' '}
              <a href="tel:+917093295399" className="text-accent font-semibold hover:underline">
                +91 70932 95399
              </a>{' '}
              — a real human replies, usually within an hour.
            </p>
          </div>
          <div className="faq-list" data-stagger>
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${openIdx === i ? 'open' : ''}`}>
                <button
                  className="faq-q"
                  onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                  aria-expanded={openIdx === i}
                >
                  <span>{f.q}</span>
                  <span className="faq-q-icon">
                    <Icons.Plus className="w-5 h-5" />
                  </span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
