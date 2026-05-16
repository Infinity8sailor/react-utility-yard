import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { GlassyText } from '../src';

const meta = {
  title: 'Components/GlassyText',
  component: GlassyText,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark-gradient',
      values: [
        { name: 'dark-gradient', value: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)' },
        { name: 'warm-dark', value: 'linear-gradient(135deg, #1c1917 0%, #292524 100%)' },
        { name: 'chaotic', value: 'linear-gradient(135deg, #064e3b 0%, #7c2d12 50%, #1e1b4b 100%)' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['vibrant', 'minimal', 'frosted'],
    },
    depth: {
      control: 'radio',
      options: ['low', 'mid', 'high'],
    },
    padding: {
      control: 'radio',
      options: ['compact', 'sm', 'lg'],
    },
    radius: {
      control: 'radio',
      options: ['none', 'sm', 'full'],
    },
  },
} satisfies Meta<typeof GlassyText>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Interactive Playground ──────────────────────────────

export const Playground: Story = {
  args: {
    variant: 'minimal',
    depth: 'mid',
    padding: 'compact',
    radius: 'sm',
    children: 'Hello World',
  },
};

// ── Variants ────────────────────────────────────────────

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    depth: 'mid',
    padding: 'sm',
    children: 'System Terminal Active',
  },
};

export const Vibrant: Story = {
  args: {
    variant: 'vibrant',
    depth: 'high',
    padding: 'sm',
    children: 'Priority Notification',
  },
};

export const Frosted: Story = {
  args: {
    variant: 'frosted',
    depth: 'low',
    padding: 'lg',
    radius: 'full',
    children: 'Deep Space Protocol',
  },
};

// ── All Variants Side by Side ───────────────────────────

export const VariantComparison: Story = {
  name: 'All Variants',
  args: {
    children: 'Variant Comparison',
  },
  render: () => (
    <div style={{
      display: 'flex', gap: '2rem', padding: '3rem', alignItems: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', borderRadius: '1rem',
    }}>
      {(['vibrant', 'minimal', 'frosted'] as const).map(v => (
        <GlassyText key={v} variant={v} depth="mid" padding="sm">
          <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{v}</span>
        </GlassyText>
      ))}
    </div>
  ),
};

// ── Depth Scale ─────────────────────────────────────────

export const DepthScale: Story = {
  name: 'Depth — Low / Mid / High',
  args: {
    children: 'Depth Scale',
  },
  render: () => (
    <div style={{
      display: 'flex', gap: '2rem', padding: '3rem', alignItems: 'flex-end',
      background: '#0f172a', borderRadius: '1rem',
    }}>
      {(['low', 'mid', 'high'] as const).map(d => (
        <div key={d} style={{ textAlign: 'center' }}>
          <GlassyText variant="vibrant" depth={d} padding="sm">
            <span style={{ fontSize: '12px', fontWeight: 800, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase' }}>{d}</span>
          </GlassyText>
          <span style={{ display: 'block', fontSize: '9px', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace', marginTop: '8px' }}>depth="{d}"</span>
        </div>
      ))}
    </div>
  ),
};

// ── Radius ──────────────────────────────────────────────

export const RadiusOptions: Story = {
  name: 'Radius — None / Sm / Full',
  args: {
    children: 'Radius Options',
  },
  render: () => (
    <div style={{
      display: 'flex', gap: '2rem', padding: '3rem', alignItems: 'center',
      background: '#0f172a', borderRadius: '1rem',
    }}>
      {(['none', 'sm', 'full'] as const).map(r => (
        <div key={r} style={{ textAlign: 'center' }}>
          <GlassyText variant="vibrant" depth="mid" padding="sm" radius={r}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>SHAPE</span>
          </GlassyText>
          <span style={{ display: 'block', fontSize: '9px', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace', marginTop: '8px' }}>radius="{r}"</span>
        </div>
      ))}
    </div>
  ),
};

// ── Padding ─────────────────────────────────────────────

export const PaddingOptions: Story = {
  name: 'Padding — Compact / Sm / Lg',
  args: {
    children: 'Padding Options',
  },
  render: () => (
    <div style={{
      display: 'flex', gap: '2rem', padding: '3rem', alignItems: 'center',
      background: '#0f172a', borderRadius: '1rem',
    }}>
      {(['compact', 'sm', 'lg'] as const).map(p => (
        <div key={p} style={{ textAlign: 'center' }}>
          <GlassyText variant="minimal" depth="mid" padding={p}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>Text</span>
          </GlassyText>
          <span style={{ display: 'block', fontSize: '9px', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace', marginTop: '8px' }}>padding="{p}"</span>
        </div>
      ))}
    </div>
  ),
};

// ── Real-World Compositions ─────────────────────────────

export const Compositions: Story = {
  name: 'Real-World Usage',
  args: {
    children: 'Compositions',
  },
  render: () => (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: '2rem', padding: '3rem',
      background: '#0f172a', borderRadius: '1rem', alignItems: 'center',
    }}>
      {/* Status badge */}
      <GlassyText variant="minimal" depth="low" padding="compact" radius="full">
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
          <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>Connected</span>
        </div>
      </GlassyText>

      {/* Metric */}
      <GlassyText variant="vibrant" depth="high" padding="sm">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
          <span style={{ fontSize: '24px', fontWeight: 900, color: 'rgba(255,255,255,0.9)' }}>12.4</span>
          <span style={{ fontSize: '8px', fontWeight: 800, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '4px' }}>ms latency</span>
        </div>
      </GlassyText>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '6px' }}>
        {['React', 'TypeScript', 'CSS'].map(t => (
          <GlassyText key={t} variant="frosted" depth="low" padding="compact">
            <span style={{ fontSize: '9px', fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>{t}</span>
          </GlassyText>
        ))}
      </div>

      {/* Alert badge */}
      <GlassyText variant="vibrant" depth="high" padding="compact" radius="none">
        <span style={{ fontSize: '9px', fontWeight: 900, color: '#fbbf24' }}>⚠ DEGRADED</span>
      </GlassyText>
    </div>
  ),
};

// ── Dynamic Background Visibility ───────────────────────

export const DynamicBackground: Story = {
  name: 'Visibility on Any Background',
  args: {
    children: 'Dynamic Background',
  },
  render: () => (
    <div style={{ borderRadius: '1rem', overflow: 'hidden' }}>
      {[
        { bg: 'linear-gradient(135deg, #064e3b, #065f46)', label: 'Dark Forest' },
        { bg: 'linear-gradient(135deg, #7c2d12, #9a3412)', label: 'Warm Rust' },
        { bg: 'linear-gradient(135deg, #1e1b4b, #312e81)', label: 'Deep Indigo' },
        { bg: 'linear-gradient(135deg, #fbbf24, #f59e0b)', label: 'Hot Yellow' },
        { bg: 'linear-gradient(135deg, #be123c, #e11d48)', label: 'Rose Fire' },
      ].map(({ bg, label }) => (
        <div key={label} style={{
          padding: '1.25rem 2rem', background: bg,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <GlassyText variant="minimal" depth="mid" padding="compact">
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'white' }}>{label}</span>
          </GlassyText>
          <GlassyText variant="vibrant" depth="mid" padding="compact" radius="full">
            <span style={{ fontSize: '9px', fontWeight: 800, color: 'white' }}>ACTIVE</span>
          </GlassyText>
        </div>
      ))}
    </div>
  ),
};
