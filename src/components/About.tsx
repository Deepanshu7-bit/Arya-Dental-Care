'use client';

import React from 'react';
import Image from 'next/image';

export function About() {
  return (
    <section className="section" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="about-grid">
          <div className="about-visual" data-reveal="left">
            <Image
              src="/assets/clinic-interior.jpg"
              alt="Inside Arya Dental Clinic"
              width={600}
              height={750}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="about-visual-badge">Sector 20· Peer Muchalla</div>
          </div>
          <div className="about-content" data-reveal="right">
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: 16 }}>
              About Arya Dental Care
            </span>
            <h2 className="h-display h-lg">
              Evidence-based dentistry backed by <span className="italic-serif">35+ years</span> of clinical excellence.
            </h2>
            <p style={{ marginTop: 24 }}>
              Located right at the Sector 20 Panchkula barrier in Peer Muchalla (Zirakpur), Arya Dental Care is a super-speciality center founded on clinical discipline, honest advice, and patient-first care.
            </p>
            <p>
              Operated under the guidance of <strong>Dr. (Col) Parveen Kumar Arya</strong> (Ex-Army Dental Corps with 35+ years of distinguished experience) and managed by <strong>Dr. Anmol Arya</strong> (BDS, MDS Orthodontist, alumnus of Army College of Dental Sciences), we enforce strict hospital-grade B-class autoclave sterilization and modern digital techniques for every procedure.
            </p>
            <div className="about-stats" data-stagger>
              <div>
                <div className="stat-num">
                  <span className="count" data-count="35">
                    0
                  </span>
                  +
                </div>
                <div className="stat-label">Years clinical heritage</div>
              </div>
              <div>
                <div className="stat-num">
                  <span className="count" data-count="10">
                    0
                  </span>
                  k+
                </div>
                <div className="stat-label">Tricity patients treated</div>
              </div>
              <div>
                <div className="stat-num">
                  <span className="count" data-count="100">
                    0
                  </span>
                  %
                </div>
                <div className="stat-label">Hospital sterilization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
