import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  Sparkle: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3v18M3 12h18M6.5 6.5l11 11M17.5 6.5l-11 11" />
    </svg>
  ),
  Tooth: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3c-3.5 0-6 2.5-6 6 0 3 1 4 1.5 7s0.5 5 2 5 1.5-3 2.5-3 1 3 2.5 3 1.5-2 2-5 1.5-4 1.5-7c0-3.5-2.5-6-6-6z" />
      <path d="M9 8c1-1 4-1 6 0" />
    </svg>
  ),
  Aligner: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 8c0-2 2-3 4-3s3 1 4 1 2-1 4-1 4 1 4 3-1 4-2 6-2 5-6 5-5-3-6-5-2-4-2-6z" />
      <path d="M9 9v3M12 9v3M15 9v3" />
    </svg>
  ),
  Implant: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3l3 4h-6l3-4z" />
      <rect x="10" y="7" width="4" height="3" />
      <path d="M11 10v5M13 10v5M10 15h4l-1 5h-2l-1-5z" />
    </svg>
  ),
  Shield: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  Emergency: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6M12 16v0.5" />
    </svg>
  ),
  Kids: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="9" r="4" />
      <path d="M9 9h0.5M14.5 9h0.5M10 12c1 1 3 1 4 0" />
      <path d="M6 21c0-4 3-6 6-6s6 2 6 6" />
    </svg>
  ),
  Tech: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 22h8M12 18v4" />
      <circle cx="12" cy="11" r="3" />
    </svg>
  ),
  Heart: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 20s-7-4.5-9-9c-1.5-3.5 1-7 4-7 2 0 3 1 5 3 2-2 3-3 5-3 3 0 5.5 3.5 4 7-2 4.5-9 9-9 9z" />
    </svg>
  ),
  Doctor: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="7" r="4" />
      <path d="M4 21c0-4.5 3.5-8 8-8s8 3.5 8 8" />
      <path d="M12 13v3M10 16h4" />
    </svg>
  ),
  Clock: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  Wallet: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 10h18M16 15h2" />
    </svg>
  ),
  Arrow: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  ArrowUp: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" {...props}>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  ),
  Plus: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Menu: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  Close: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  Phone: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 20 20 0 0 1-8.6-3 20 20 0 0 1-6-6A20 20 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2L8 9.8a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2-.5c.9.3 1.9.5 2.8.6a2 2 0 0 1 1.7 2z" />
    </svg>
  ),
  Mail: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  ),
  Pin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s-8-7-8-13a8 8 0 1 1 16 0c0 6-8 13-8 13z" />
      <circle cx="12" cy="9" r="3" />
    </svg>
  ),
  Chat: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
};

export type IconName = keyof typeof Icons;
