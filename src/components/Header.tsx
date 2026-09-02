'use client';

import React, { useState, useEffect } from 'react';
import { Icons, IconName } from './Icons';

interface HeaderProps {
  variant?: 'A' | 'B';
}

interface NavItem {
  label: string;
  href: string;
  icon: IconName;
}

export function Header({ variant: _variant }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scrolling when mobile menu is open & listen for escape / desktop resize
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 820) setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  const navItems: NavItem[] = [
    { label: 'Services', href: '#services', icon: 'Tooth' },
    { label: 'About', href: '#about', icon: 'Heart' },
    { label: 'Doctors', href: '#why', icon: 'Doctor' },
    { label: 'FAQ', href: '#faq', icon: 'Chat' },
    { label: 'Contact', href: '#contact', icon: 'Pin' },
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 header-inner">
          {/* Logo with clean branding */}
          <a href="#top" className="logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-mark">A</span>
            <span className="logo-text">Arya Dental Care</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav">
            {navItems.map(({ label, href, icon }) => {
              const IconComp = Icons[icon];
              return (
                <a key={label} className="nav-link" href={href}>
                  <IconComp className="nav-link-icon" />
                  <span>{label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Buttons */}
          <div className="header-actions">
            <a href="#contact" className="btn btn-primary header-cta">
              Book appointment
              <span className="arrow">
                <Icons.Arrow className="w-4 h-4" />
              </span>
            </a>
            <button
              className="menu-btn"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <Icons.Close className="w-5 h-5" /> : <Icons.Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with backdrop */}
      <div
        className={`mobile-menu-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-nav-links">
            {navItems.map(({ label, href, icon }) => {
              const IconComp = Icons[icon];
              return (
                <a
                  key={label}
                  href={href}
                  className="mobile-nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="mobile-nav-icon-wrap">
                    <IconComp className="w-5 h-5 text-accent" />
                  </div>
                  <span>{label}</span>
                </a>
              );
            })}
          </div>

          <div className="mobile-menu-actions">
            <a
              href="#contact"
              className="btn btn-primary w-full justify-center text-sm py-3"
              onClick={() => setMenuOpen(false)}
            >
              Book appointment
              <span className="arrow">
                <Icons.Arrow className="w-4 h-4" />
              </span>
            </a>
            <a
              href="tel:+917093295399"
              className="btn btn-secondary w-full justify-center text-sm py-3"
              onClick={() => setMenuOpen(false)}
            >
              <Icons.Phone className="w-4 h-4 text-accent" />
              <span>Call +91 70932 95399</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
