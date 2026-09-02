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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
          <a href="#top" className="logo">
            <span className="logo-mark">A</span>
            <span>Arya Dental Care</span>
          </a>

          {/* Unboxed Clean Navigation with Engaging Micro-Icons */}
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

          {/* Action CTA */}
          <div className="header-actions">
            <a href="#contact" className="btn btn-primary header-cta">
              Book appointment
              <span className="arrow">
                <Icons.Arrow className="w-4 h-4" />
              </span>
            </a>
            <button
              className="menu-btn"
              aria-label="Menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <Icons.Close className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map(({ label, href, icon }) => {
          const IconComp = Icons[icon];
          return (
            <a
              key={label}
              href={href}
              className="flex items-center gap-3 text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <IconComp className="w-6 h-6 text-accent" />
              <span>{label}</span>
            </a>
          );
        })}
        <a
          href="#contact"
          className="btn btn-primary"
          style={{ marginTop: 20, alignSelf: 'flex-start' }}
          onClick={() => setMenuOpen(false)}
        >
          Book appointment
          <span className="arrow">
            <Icons.Arrow className="w-4 h-4" />
          </span>
        </a>
      </div>
    </>
  );
}
