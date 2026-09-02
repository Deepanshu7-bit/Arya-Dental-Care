'use client';

import React, { useState } from 'react';

export interface TweaksState {
  variant: 'A' | 'B';
  palette: string;
  fontPairing: 'editorial' | 'modern' | 'classic';
  dark: boolean;
  animations: boolean;
}

interface TweaksPanelProps {
  tweaks: TweaksState;
  onChange: <K extends keyof TweaksState>(key: K, value: TweaksState[K]) => void;
}

export function TweaksPanel({ tweaks, onChange }: TweaksPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  const paletteOptions =
    tweaks.variant === 'A'
      ? [
          { value: 'A-teal', label: 'Teal', color: '#2a6a5e' },
          { value: 'A-navy', label: 'Navy', color: '#1e3a5f' },
          { value: 'A-plum', label: 'Plum', color: '#6b3a5c' },
        ]
      : [
          { value: 'B-terra', label: 'Terracotta', color: '#c4593a' },
          { value: 'B-ochre', label: 'Ochre', color: '#b8863e' },
          { value: 'B-sage', label: 'Sage', color: '#6d8a5f' },
        ];

  return (
    <aside aria-label="Design Controls" className="fixed bottom-5 right-5 z-50 font-sans text-xs">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full shadow-xl bg-surface/90 text-ink backdrop-blur-md border border-line hover:border-accent transition-all duration-200 hover:scale-105 active:scale-95 group cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="font-medium tracking-wide">Customize Theme</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-accent font-semibold ml-1">
            {tweaks.variant === 'A' ? 'Serene' : 'Warm'}
          </span>
        </button>
      ) : (
        <div className="w-72 max-h-[85vh] flex flex-col bg-surface/95 text-ink backdrop-blur-xl border border-line rounded-2xl shadow-2xl overflow-hidden transition-all animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-line bg-surface/50">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="font-semibold tracking-wide text-sm">Theme Controls</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-ink-soft hover:text-ink hover:bg-line/40 rounded-lg transition-colors"
              aria-label="Close panel"
            >
              ✕
            </button>
          </div>

          <div className="p-4 space-y-4 overflow-y-auto">
            {/* Variant Switcher */}
            <div>
              <label className="block text-[11px] font-semibold text-ink-soft uppercase tracking-wider mb-2">
                Style Variation
              </label>
              <div className="grid grid-cols-2 gap-1.5 bg-line/20 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => {
                    onChange('variant', 'A');
                    if (!tweaks.palette.startsWith('A-')) {
                      onChange('palette', 'A-teal');
                    }
                  }}
                  className={`py-1.5 text-center font-medium rounded-lg transition-all ${
                    tweaks.variant === 'A'
                      ? 'bg-surface text-ink shadow-sm font-semibold'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  Serene (A)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onChange('variant', 'B');
                    if (!tweaks.palette.startsWith('B-')) {
                      onChange('palette', 'B-terra');
                    }
                  }}
                  className={`py-1.5 text-center font-medium rounded-lg transition-all ${
                    tweaks.variant === 'B'
                      ? 'bg-surface text-ink shadow-sm font-semibold'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  Warm (B)
                </button>
              </div>
            </div>

            {/* Accent Palette */}
            <div>
              <label className="block text-[11px] font-semibold text-ink-soft uppercase tracking-wider mb-2">
                Accent Palette
              </label>
              <div className="grid grid-cols-3 gap-2">
                {paletteOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => onChange('palette', opt.value)}
                    className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all ${
                      tweaks.palette === opt.value
                        ? 'border-accent bg-accent-soft/30 font-semibold'
                        : 'border-line hover:border-accent/40 bg-surface'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-black/10 shadow-sm"
                      style={{ backgroundColor: opt.color }}
                    />
                    <span className="text-[11px]">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Typography Pairing */}
            <div>
              <label className="block text-[11px] font-semibold text-ink-soft uppercase tracking-wider mb-2">
                Typography
              </label>
              <select
                value={tweaks.fontPairing}
                onChange={(e) =>
                  onChange('fontPairing', e.target.value as TweaksState['fontPairing'])
                }
                className="w-full px-3 py-2 bg-surface border border-line rounded-xl text-ink text-xs focus:outline-none focus:border-accent"
              >
                <option value="editorial">Editorial serif (Fraunces)</option>
                <option value="modern">Modern serif (Instrument)</option>
                <option value="classic">Classic (Fraunces / Playfair)</option>
              </select>
            </div>

            {/* Display Toggles */}
            <div className="pt-2 border-t border-line space-y-2.5">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-ink font-medium">Dark mode</span>
                <input
                  type="checkbox"
                  checked={tweaks.dark}
                  onChange={(e) => onChange('dark', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-line peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent relative" />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-ink font-medium">Animations</span>
                <input
                  type="checkbox"
                  checked={tweaks.animations}
                  onChange={(e) => onChange('animations', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-line peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent relative" />
              </label>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
