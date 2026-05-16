import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { GlassyText, ThemeProvider, Surface, Button, useTheme } from '../src/index';
import * as LucideIcons from 'lucide-react';

const meta = {
  title: 'Showcase/GlassyText',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const SectionHeader = ({ num, title, desc }: { num: string; title: string; desc: string }) => (
  <div style={{ marginBottom: '2rem' }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
      <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--ruy-accent)', opacity: 0.5 }}>{num}</span>
      <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0, color: 'var(--ruy-text-primary)' }}>{title}</h2>
    </div>
    <p style={{ color: 'var(--ruy-text-muted)', margin: '0.5rem 0 0', fontSize: '0.875rem', maxWidth: '600px' }}>{desc}</p>
  </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontSize: '9px', fontFamily: 'monospace', color: 'var(--ruy-text-muted)', display: 'block', textAlign: 'center', marginTop: '8px', opacity: 0.5 }}>
    {children}
  </span>
);

const ThemeBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', padding: '0.75rem 1rem', borderRadius: 'var(--ruy-radius-sm)', background: 'var(--ruy-bg-surface)', border: '1px solid var(--ruy-border-color)' }}>
      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ruy-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Current: {theme}
      </span>
      <Button variant="outline" size="sm" onClick={toggleTheme} leftIcon={theme === 'dark' ? <LucideIcons.Sun size={14} /> : <LucideIcons.Moon size={14} />}>
        Switch to {theme === 'dark' ? 'Light' : 'Dark'}
      </Button>
    </div>
  );
};

const ShowcaseContent = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div style={{ minHeight: '100vh', background: 'transparent', padding: '3rem', color: 'var(--ruy-text-primary)' }}>
      
      {/* Hero */}
      <div style={{ marginBottom: '2rem', maxWidth: '800px' }}>
        <GlassyText variant="vibrant" depth="high" padding="sm" radius="sm">
          <span style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-1px', color: 'var(--ruy-text-primary)' }}>GlassyText</span>
        </GlassyText>
        <p style={{ color: 'var(--ruy-text-secondary)', marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
          A universal glassy wrapper — 4 props, all with sensible defaults.
        </p>
      </div>

      <ThemeBar />

      {/* ── LAYER ANATOMY ── */}
      <section style={{ marginBottom: '4rem' }}>
        <SectionHeader num="00" title="Layer Anatomy" desc="GlassyText is a single frosted glass div wrapping your content." />
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Exploded view */}
          <div style={{ position: 'relative', width: '340px', height: '200px' }}>
            {/* Layer 0: Background */}
            <div style={{
              position: 'absolute', left: 0, top: 0, width: '320px', height: '160px',
              background: isDark 
                ? 'linear-gradient(135deg, #1e1b4b, #312e81)' 
                : 'linear-gradient(135deg, #e0e7ff, #c7d2fe)',
              borderRadius: '12px',
              border: `2px dashed ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
            }}>
              <span style={{ position: 'absolute', top: '6px', left: '10px', fontSize: '9px', fontWeight: 800, color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)', fontFamily: 'monospace' }}>
                ① BACKGROUND
              </span>
            </div>
            {/* Layer 1: Glass card */}
            <div style={{
              position: 'absolute', left: '35px', top: '40px', width: '220px', height: '55px',
              background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
              backdropFilter: 'blur(12px) saturate(150%)',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ position: 'absolute', top: '-18px', left: '0px', fontSize: '9px', fontWeight: 800, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>
                ② GLASS CARD
              </span>
              <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--ruy-text-primary)', letterSpacing: '0.1em' }}>
                ③ CONTENT
              </span>
            </div>
            {/* Actual rendered result */}
            <div style={{ position: 'absolute', left: '20px', top: '120px' }}>
              <span style={{ fontSize: '9px', fontWeight: 700, color: 'var(--ruy-text-muted)', fontFamily: 'monospace', display: 'block', marginBottom: '8px' }}>
                Rendered result ↓
              </span>
              <GlassyText variant="vibrant" depth="mid" padding="sm">
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ruy-text-primary)' }}>Hello World</span>
              </GlassyText>
            </div>
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '360px' }}>
            {[
              { n: '①', label: 'Background', desc: 'Your app wallpaper, gradient, or dynamic image.' },
              { n: '②', label: 'Glass Card', desc: 'Single frosted div with backdrop-filter (blur + saturate). Border, bg tint, and glow set by variant + depth.' },
              { n: '③', label: 'Content', desc: 'Your children — any React node. Text, icons, metrics, whatever you pass in.' },
            ].map(({ n, label, desc }) => (
              <div key={label} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '14px', lineHeight: 1, flexShrink: 0, marginTop: '2px' }}>{n}</span>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--ruy-text-primary)', display: 'block' }}>{label}</span>
                  <span style={{ fontSize: '10px', color: 'var(--ruy-text-muted)', lineHeight: 1.5 }}>{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 1. VARIANTS ── */}
      <section style={{ marginBottom: '4rem' }}>
        <SectionHeader num="01" title="Variant" desc="The primary stylistic dimension. Same depth and padding across all three." />
        <Surface padding="lg" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
          {(['vibrant', 'minimal', 'frosted'] as const).map(v => (
            <div key={v} style={{ textAlign: 'center' }}>
              <GlassyText variant={v} depth="mid" padding="sm">
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ruy-text-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{v}</span>
              </GlassyText>
              <Label>variant="{v}"</Label>
            </div>
          ))}
        </Surface>
      </section>

      {/* ── 2. DEPTH ── */}
      <section style={{ marginBottom: '4rem' }}>
        <SectionHeader num="02" title="Depth" desc="Three elevation levels: low (flat), mid (balanced), high (dramatic)." />
        <Surface padding="lg" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'flex-end' }}>
          {(['low', 'mid', 'high'] as const).map(d => (
            <div key={d} style={{ textAlign: 'center' }}>
              <GlassyText variant="vibrant" depth={d} padding="sm">
                <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--ruy-text-primary)', textTransform: 'uppercase' }}>{d}</span>
              </GlassyText>
              <Label>depth="{d}"</Label>
            </div>
          ))}
        </Surface>
      </section>

      {/* ── 3. RADIUS ── */}
      <section style={{ marginBottom: '4rem' }}>
        <SectionHeader num="03" title="Radius" desc="Three shapes: sharp (none), subtle rounding (sm), pill (full)." />
        <Surface padding="lg" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
          {(['none', 'sm', 'full'] as const).map(r => (
            <div key={r} style={{ textAlign: 'center' }}>
              <GlassyText variant="vibrant" depth="mid" padding="sm" radius={r}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ruy-text-primary)' }}>SHAPE</span>
              </GlassyText>
              <Label>radius="{r}"</Label>
            </div>
          ))}
        </Surface>
      </section>

      {/* ── 4. PADDING ── */}
      <section style={{ marginBottom: '4rem' }}>
        <SectionHeader num="04" title="Padding" desc="Three spacing levels: compact (chip), sm (default), lg (card)." />
        <Surface padding="lg" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
          {(['compact', 'sm', 'lg'] as const).map(p => (
            <div key={p} style={{ textAlign: 'center' }}>
              <GlassyText variant="minimal" depth="mid" padding={p}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ruy-text-primary)' }}>Text</span>
              </GlassyText>
              <Label>padding="{p}"</Label>
            </div>
          ))}
        </Surface>
      </section>

      {/* ── 5. LONG PARAGRAPHS ── */}
      <section style={{ marginBottom: '4rem' }}>
        <SectionHeader num="05" title="Long Content" desc="Proving it scales beyond chips — paragraphs, headings, multi-line blocks." />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start' }}>
          <GlassyText variant="minimal" depth="low" padding="sm">
            <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--ruy-text-secondary)', margin: 0, maxWidth: '600px' }}>
              The GlassyText component acts as a universal visibility shield. When your application uses dynamic wallpapers or shifting gradient backgrounds, standard text and UI elements can become unreadable. This wrapper ensures content stays legible by creating a subtle frosted-glass barrier between the content and whatever chaos lies behind it.
            </p>
          </GlassyText>

          <GlassyText variant="vibrant" depth="mid" padding="sm">
            <div style={{ maxWidth: '700px' }}>
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', fontWeight: 800, color: 'var(--ruy-text-primary)' }}>Why Glassy Wrappers Matter</h3>
              <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'var(--ruy-text-secondary)', margin: 0 }}>
                Modern interfaces increasingly rely on translucent surfaces layered over dynamic backgrounds — think iOS Control Center, Windows 11 widgets, or macOS Notification Center. The challenge is maintaining readability when the background shifts from a dark photo to a bright sunrise. GlassyText solves this by adaptively tinting its frosted layer based on the active theme, ensuring consistent contrast without the developer manually adjusting colors.
              </p>
            </div>
          </GlassyText>

          <GlassyText variant="frosted" depth="mid" padding="lg">
            <div style={{ maxWidth: '750px' }}>
              <h3 style={{ margin: '0 0 0.75rem', fontSize: '1rem', fontWeight: 700, color: 'var(--ruy-text-primary)' }}>Technical Architecture</h3>
              <p style={{ fontSize: '12px', lineHeight: 1.8, color: 'var(--ruy-text-secondary)', margin: '0 0 0.75rem' }}>
                Under the hood, GlassyText is a single div with backdrop-filter applied. The blur and saturation values are determined by the variant prop, while the shadow intensity scales with depth. No nested wrappers, no ghost layers — just one frosted surface.
              </p>
              <p style={{ fontSize: '12px', lineHeight: 1.8, color: 'var(--ruy-text-secondary)', margin: 0 }}>
                All color values are computed at render time based on the active theme — dark mode uses white-tinted overlays, light mode uses black-tinted overlays with slightly higher opacity to compensate for the brighter base. If you need an additional background layer, compose GlassyText inside a Card or Surface component.
              </p>
            </div>
          </GlassyText>
        </div>
      </section>

      {/* ── 6. COMPOSITIONS ── */}
      <section style={{ marginBottom: '4rem' }}>
        <SectionHeader num="06" title="Compositions" desc="Status badges, metrics, tag groups — real-world usage patterns." />
        <Surface padding="lg" style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'center' }}>
          <GlassyText variant="minimal" depth="low" padding="compact" radius="full">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
              <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ruy-text-muted)' }}>Connected</span>
            </div>
          </GlassyText>
          <GlassyText variant="vibrant" depth="high" padding="sm">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
              <span style={{ fontSize: '28px', fontWeight: 900, color: 'var(--ruy-text-primary)' }}>12.4</span>
              <span style={{ fontSize: '8px', fontWeight: 800, color: 'var(--ruy-text-muted)', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '4px' }}>ms latency</span>
            </div>
          </GlassyText>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['React', 'TypeScript', 'CSS'].map(t => (
              <GlassyText key={t} variant="frosted" depth="low" padding="compact">
                <span style={{ fontSize: '9px', fontWeight: 600, color: 'var(--ruy-text-muted)' }}>{t}</span>
              </GlassyText>
            ))}
          </div>
          <GlassyText variant="vibrant" depth="high" padding="compact" radius="none">
            <span style={{ fontSize: '10px', fontWeight: 900, color: '#fbbf24' }}>⚠ DEGRADED</span>
          </GlassyText>
          <GlassyText variant="vibrant" depth="high" padding="compact" radius="none">
            <span style={{ fontSize: '9px', fontWeight: 900, color: 'var(--ruy-red)' }}>CRITICAL</span>
          </GlassyText>
        </Surface>
      </section>

      {/* ── 7. DYNAMIC BG TEST ── */}
      <section style={{ marginBottom: '4rem' }}>
        <SectionHeader num="07" title="Dynamic Background Visibility" desc="Same component stays visible on any wallpaper color." />
        <div style={{ borderRadius: 'var(--ruy-radius-sm)', overflow: 'hidden', border: '1px solid var(--ruy-border-color)' }}>
          {[
            { bg: 'linear-gradient(135deg, #064e3b, #065f46)', label: 'Dark Forest' },
            { bg: 'linear-gradient(135deg, #7c2d12, #9a3412)', label: 'Warm Rust' },
            { bg: 'linear-gradient(135deg, #1e1b4b, #312e81)', label: 'Deep Indigo' },
            { bg: 'linear-gradient(135deg, #fbbf24, #f59e0b)', label: 'Hot Yellow' },
            { bg: 'linear-gradient(135deg, #be123c, #e11d48)', label: 'Rose Fire' },
            { bg: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', label: 'Light Mode' },
          ].map(({ bg, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 2rem', background: bg }}>
              <GlassyText variant="minimal" depth="mid" padding="compact">
                <span style={{ fontSize: '11px', fontWeight: 600, color: isDark ? 'white' : '#0f172a' }}>{label}</span>
              </GlassyText>
              <div style={{ display: 'flex', gap: '8px' }}>
                <GlassyText variant="vibrant" depth="mid" padding="compact" radius="full">
                  <span style={{ fontSize: '9px', fontWeight: 800, color: isDark ? 'white' : '#0f172a' }}>ACTIVE</span>
                </GlassyText>
                <GlassyText variant="frosted" depth="low" padding="compact">
                  <span style={{ fontSize: '9px', fontWeight: 600, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>v2.4</span>
                </GlassyText>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. PARAGRAPHS ON GRADIENTS ── */}
      <section style={{ marginBottom: '4rem' }}>
        <SectionHeader num="08" title="Paragraphs on Gradients" desc="Long text blocks on varied gradient backgrounds." />
        {[
          { bg: 'linear-gradient(135deg, #0c0a1a 0%, #1a1145 50%, #2d1b69 100%)', fg: 'rgba(255,255,255,0.7)' },
          { bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fbbf24 100%)', fg: 'rgba(0,0,0,0.7)' },
        ].map(({ bg, fg }, i) => (
          <div key={i} style={{ padding: '3rem', background: bg }}>
            <GlassyText variant={i === 0 ? 'vibrant' : 'minimal'} depth="mid" padding="sm">
              <p style={{ fontSize: '13px', lineHeight: 1.8, color: fg, margin: 0, maxWidth: '700px' }}>
                {i === 0 
                  ? "In deep indigo twilight, dashboard elements float above the abyss. This paragraph demonstrates how GlassyText maintains perfect readability even on the darkest, most saturated backgrounds. The frosted glass barrier catches just enough ambient light to outline the text container without overwhelming the content."
                  : "Against blazing amber sunlight, the same component inverts its approach. Instead of catching light, it anchors against brightness — creating a soft dark-tinted frost that separates text from the hot background. Zero configuration required."
                }
              </p>
            </GlassyText>
          </div>
        ))}
      </section>

      {/* ── 9. CONSTELLATION ── */}
      <section>
        <SectionHeader num="09" title="Constellation" desc="Freeform scatter — how a real dashboard might use GlassyText." />
        <Surface padding="xl" style={{ minHeight: '200px', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
          <GlassyText variant="vibrant" depth="high" padding="compact" radius="none">
            <span style={{ fontSize: '9px', fontWeight: 900, color: 'var(--ruy-red)' }}>CRITICAL_OVERRIDE</span>
          </GlassyText>
          <GlassyText variant="minimal" depth="mid" padding="compact" radius="full">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 8px #22d3ee' }} />
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#22d3ee' }}>CORE_LINK</span>
            </div>
          </GlassyText>
          <GlassyText variant="frosted" depth="low" padding="compact">
            <span style={{ fontSize: '9px', fontFamily: 'monospace', color: 'var(--ruy-text-muted)' }}>0x82...F1</span>
          </GlassyText>
          <GlassyText variant="vibrant" depth="mid" padding="compact">
            <span style={{ fontSize: '10px', fontWeight: 900, color: '#fb923c' }}>VIVID CORE</span>
          </GlassyText>
          <GlassyText variant="vibrant" depth="high" padding="sm">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
              <span style={{ fontSize: '7px', fontWeight: 900, color: 'var(--ruy-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Latency</span>
              <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ruy-text-primary)', marginTop: '2px' }}>12.4ms</span>
            </div>
          </GlassyText>
        </Surface>
      </section>

      <footer style={{ marginTop: '4rem', textAlign: 'center', opacity: 0.3 }}>
        <p style={{ color: 'var(--ruy-text-muted)' }}>GlassyText — React Utility Yard</p>
      </footer>
    </div>
  );
};

export const FullShowcase: Story = {
  name: 'GlassyText Variations',
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <ShowcaseContent />
    </ThemeProvider>
  ),
};
