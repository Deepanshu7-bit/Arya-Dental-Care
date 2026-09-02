'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  const menuRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on click outside or escape key or desktop resize
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth > 820) setMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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

        {/* Action CTA & Mobile Menu Toggle */}
        <div className="header-actions">
          <a href="#contact" className="btn btn-primary header-cta">
            Book appointment
            <span className="arrow">
              <Icons.Arrow className="w-4 h-4" />
            </span>
          </a>
          <button
            ref={menuBtnRef}
            className={`menu-btn ${menuOpen ? 'active' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <Icons.Close className="w-5 h-5" /> : <Icons.Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Compact Floating Glass Dropdown Menu */}
      <div
        ref={menuRef}
        className={`mobile-dropdown ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-dropdown-links">
          {navItems.map(({ label, href, icon }) => {
            const IconComp = Icons[icon];
            return (
              <a
                key={label}
                href={href}
                className="mobile-dropdown-link"
                onClick={() => setMenuOpen(false)}
              >
                <div className="mobile-dropdown-icon">
                  <IconComp className="w-4 h-4 text-accent" />
                </div>
                <span>{label}</span>
              </a>
            );
          })}
        </div>

        <div className="mobile-dropdown-footer">
          <a
            href="#contact"
            className="btn btn-primary w-full justify-center text-xs py-2.5"
            onClick={() => setMenuOpen(false)}
          >
            Book appointment
            <span className="arrow">
              <Icons.Arrow className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
