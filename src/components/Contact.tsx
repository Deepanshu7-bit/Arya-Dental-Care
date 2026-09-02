'use client';

import React, { useState } from 'react';
import { Icons } from './Icons';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <div className="section-header-title" data-reveal>
            <span className="eyebrow">Book a visit</span>
            <h2 className="h-display h-lg">
              Let&apos;s start with a <span className="italic-serif">hello</span>.
            </h2>
          </div>
          <p className="section-header-side" data-reveal>
            Send us a note or call directly. New-patient consultations are always free — and we&apos;ll follow up within one business day.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Form inside a balanced container card */}
          <div className="contact-form-card" data-stagger>
            <div>
              <h3 className="h-display text-2xl mb-1.5">Request an Appointment</h3>
              <p className="text-sm text-ink-soft mb-6">
                Tell us about your visit and we&apos;ll confirm your slot quickly.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="firstName">First name</label>
                  <input id="firstName" className="form-input" type="text" placeholder="Jamie" required />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="lastName">Last name</label>
                  <input id="lastName" className="form-input" type="text" placeholder="Rivera" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input id="email" className="form-input" type="email" placeholder="hello@example.com" required />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="phone">Phone</label>
                  <input id="phone" className="form-input" type="tel" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="reason">What brings you in?</label>
                <select id="reason" className="form-select" defaultValue="">
                  <option value="" disabled>Choose a service</option>
                  <option>New-patient comprehensive exam</option>
                  <option>Routine cleaning & prevention</option>
                  <option>Cosmetic teeth whitening</option>
                  <option>Invisalign & aligners consultation</option>
                  <option>Emergency / same-day care</option>
                  <option>Something else</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="notes">Anything we should know?</label>
                <textarea
                  id="notes"
                  className="form-textarea"
                  placeholder="Anxious about visits, specific concern, preferred morning/afternoon times..."
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary mt-2"
                style={{ justifySelf: 'start', alignSelf: 'flex-start' }}
              >
                {submitted ? "Thanks — we'll be in touch!" : 'Send request'}
                <span className="arrow">
                  <Icons.Arrow className="w-4 h-4" />
                </span>
              </button>
            </form>
          </div>

          {/* Right Column: Unified Contact Info & Interactive Map Card */}
          <div className="contact-info-col" data-stagger>
            {/* Unified Contact Information Card */}
            <div className="contact-unified-card">
              <div className="contact-item-row">
                <div className="contact-icon-box">
                  <Icons.Pin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="contact-info-label">Clinic Location</div>
                  <div className="contact-info-value">SCO 13, First Floor</div>
                  <div className="contact-info-sub">
                    Adjoining Sector 20 Panchkula Barrier, Peer Muchalla, Zirakpur 140603
                  </div>
                </div>
              </div>

              <div className="contact-divider" />

              <div className="contact-item-row">
                <div className="contact-icon-box">
                  <Icons.Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="contact-info-label">Call or WhatsApp</div>
                  <a href="tel:+917093295399" className="contact-info-value hover:text-accent transition-colors block">
                    +91 70932 95399
                  </a>
                  <div className="contact-info-sub">
                    Mon–Sat: 10:00 AM – 7:00 PM · Sun: 10:00 AM – 2:00 PM
                  </div>
                </div>
              </div>

              <div className="contact-divider" />

              <div className="contact-item-row">
                <div className="contact-icon-box">
                  <Icons.Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="contact-info-label">Email us</div>
                  <a href="mailto:aryadentalcare@gmail.com" className="contact-info-value hover:text-accent transition-colors block">
                    aryadentalcare@gmail.com
                  </a>
                  <div className="contact-info-sub">Quick confirmation within clinic hours</div>
                </div>
              </div>
            </div>

            {/* Real Interactive Google Map Card */}
            <div className="contact-map-card flex flex-col group relative overflow-hidden">
              <div className="relative w-full flex-grow min-h-[220px]">
                <iframe
                  title="Arya Dental Care Google Maps Location"
                  src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sArya+Dental+Care,+SCO+13,+Peer+Muchalla,+Zirakpur!6i15"
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[220px] border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Action Bar for Directions */}
              <a
                href="https://maps.google.com/?cid=2124317734797233900"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface/95 backdrop-blur-md border-t border-line flex items-center justify-between transition-colors hover:bg-surface-2"
                title="Open Arya Dental Care in Google Maps"
              >
                <div className="flex items-center gap-2.5 text-xs text-ink">
                  <Icons.Pin className="w-4 h-4 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">Arya Dental Care · SCO 13</span>
                    <span className="text-[11px] text-ink-soft">Peer Muchalla / Sector 20 Barrier</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-accent flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Get Directions →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
