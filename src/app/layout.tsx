import type { Metadata } from 'next';
import { Fraunces, Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arya Dental Care · Super-Speciality Dental Clinic | Panchkula & Peer Muchalla',
  description:
    'Super-speciality dental clinic in Peer Muchalla adjoining Sector 20 Panchkula. Led by Dr. Anmol Arya (MDS Orthodontics) and Dr. (Col) Parveen Kumar Arya (Ex-Army Dental Corps, 35+ yrs exp). Advanced implants, braces, aligners & hospital-grade sterilization.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        data-variant="A"
        data-palette="A-navy"
        data-dark="false"
        data-anim="true"
        data-font-pairing="editorial"
        className={`${fraunces.variable} ${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
