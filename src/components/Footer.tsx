'use client';

import React from 'react';
import { Icons } from './Icons';

export function Footer() {
  return (
    <footer className="footer">
      {/* Pre-footer Call-to-Action Banner */}
      <div className="footer-cta-banner">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer-cta-inner">
            <div className="footer-cta-text">
              <span className="eyebrow" style={{ display: 'inline-block', marginBottom: 12 }}>
                Accepting New Patients · Panchkula & Tricity
              </span>
              <h3>
                Ready for a <span className="italic-serif accent">calmer</span> kind of dental care?
              </h3>
              <p>
                Consultations are thorough, unhurried, and completely pressure-free. We listen first.
              </p>
            </div>
            <div className="footer-cta-actions">
              <a href="#contact" className="btn btn-primary">
                Book your visit
                <span className="arrow">
                  <Icons.Arrow className="w-4 h-4" />
                </span>
              </a>
              <a href="tel:+917093295399" className="btn btn-secondary">
                <Icons.Phone className="w-4 h-4 text-accent" />
                +91 70932 95399
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information Grid */}
      <div className="footer-main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer-grid">
            {/* Column 1: Brand & Credential Badges */}
            <div className="footer-brand">
              <a href="#top" className="logo">
                <span className="logo-mark">A</span>
                <span>Arya Dental Care</span>
              </a>
              <p>
                Super-speciality, evidence-based dental center at Sector 20 Panchkula barrier. Led by Dr. (Col) Parveen Kumar Arya (35+ yrs Army Dental Corps) & Dr. Anmol Arya (MDS Orthodontist).
              </p>
              <div className="footer-badges">
                <span className="footer-badge">
                  <span className="dot"></span>
                  Army Dental Standards
                </span>
                <span className="footer-badge">
                  <span className="dot"></span>
                  MDS Specialists
                </span>
                <span className="footer-badge">
                  <span className="dot"></span>
                  5.0★ Google Rated
                </span>
              </div>
              <div className="footer-social-links">
                <a
                  href="https://maps.google.com/?cid=2124317734797233900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="Google Maps Location"
                  title="View on Google Maps"
                >
                  <Icons.Pin className="w-4 h-4" />
                </a>
                <a
                  href="tel:+917093295399"
                  className="footer-social-btn"
                  aria-label="Call Us"
                  title="Call Clinic"
                >
                  <Icons.Phone className="w-4 h-4" />
                </a>
                <a
                  href="mailto:aryadentalcare@gmail.com"
                  className="footer-social-btn"
                  aria-label="Email Us"
                  title="Email Clinic"
                >
                  <Icons.Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Practice */}
            <div className="footer-col">
              <div className="footer-col-title">Practice</div>
              <ul>
                <li><a href="#about">About Our Practice</a></li>
                <li><a href="#why">Why Choose Arya</a></li>
                <li><a href="#why">Meet the Clinicians</a></li>
                <li><a href="#testimonials">Patient Testimonials</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
                <li><a href="#contact">Book Consultation</a></li>
              </ul>
            </div>

            {/* Column 3: Treatments */}
            <div className="footer-col">
              <div className="footer-col-title">Treatments</div>
              <ul>
                <li><a href="#services">Braces & Clear Aligners</a></li>
                <li><a href="#services">Rotary Root Canal (Painless)</a></li>
                <li><a href="#services">Dental Implants & Bridges</a></li>
                <li><a href="#services">Single-Day Ceramic Crowns</a></li>
                <li><a href="#services">Cosmetic Teeth Whitening</a></li>
                <li><a href="#services">Pediatric / Child Dental Care</a></li>
                <li><a href="#services">Preventive Teeth Cleaning</a></li>
              </ul>
            </div>

            {/* Column 4: Office Hours & Location */}
            <div className="footer-col">
              <div className="footer-col-title">Office Hours</div>
              <div className="footer-hours-list">
                <div className="footer-hours-row">
                  <span>Mon – Sat</span>
                  <span>10:00 AM – 7:00 PM</span>
                </div>
                <div className="footer-hours-row">
                  <span>Sunday</span>
                  <span>10:00 AM – 2:00 PM</span>
                </div>
                <div className="footer-hours-row">
                  <span>Emergency</span>
                  <span>On-Call Assistance</span>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-line text-xs text-ink-soft">
                <p className="font-semibold text-ink mb-1">Clinic Address</p>
                <p>SCO 13, First Floor, Peer Muchalla</p>
                <p>Adjoining Sector 20 Panchkula Barrier, Zirakpur 140603</p>
                <p className="text-[11px] text-accent mt-0.5">Parking available outside showrooms</p>
              </div>
            </div>

            {/* Column 5: Urgent Care & Patient Helpline */}
            <div className="footer-col">
              <div className="footer-col-title">Patient Helpline</div>
              <div className="footer-emergency-card">
                <div className="footer-emergency-title">
                  <span className="live-dot" />
                  <span>Call or WhatsApp</span>
                </div>
                <p className="text-xs text-ink-soft">
                  Need an urgent consultation or appointment confirmation? Call us directly.
                </p>
                <a href="tel:+917093295399" className="footer-emergency-phone">
                  <Icons.Phone className="w-4 h-4 text-accent" />
                  +91 70932 95399
                </a>
              </div>
              <div className="mt-4 text-xs text-ink-soft">
                <p className="font-medium text-ink">Specialist Leadership:</p>
                <p className="mt-1">Dr. (Col) Parveen Kumar Arya</p>
                <p>Dr. Anmol Arya (MDS Ortho)</p>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Accreditations Row */}
          <div className="footer-bottom">
            <div>
              <p>© 2026 Arya Dental Care. All rights reserved. Peer Muchalla & Sector 20 Panchkula Barrier.</p>
              <p className="text-[11px] text-ink-soft mt-0.5">
                Ex-Army Dental Corps Heritage · Evidence-Based Practice · 5.0★ Google Rating
              </p>
            </div>
            <div className="footer-legal-links">
              <a href="#faq">Privacy Policy</a>
              <a href="#faq">Terms of Service</a>
              <a href="https://maps.google.com/?cid=2124317734797233900" target="_blank" rel="noopener noreferrer">
                Google Maps Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
