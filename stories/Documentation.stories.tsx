import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { 
  Card, CardHeader, CardTitle, CardBody, 
  Surface, Tag, NavBar, NavItem, Button 
} from '../src/index';

const meta = {
  title: 'Showcase/Documentation',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const LibraryBriefing: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', background: 'var(--ruy-bg-base)', color: 'var(--ruy-text-primary)', paddingBottom: '5rem' }}>
      <NavBar brand={<div style={{fontWeight: '900', fontSize: '1.5rem'}}>RUY <span style={{color: 'var(--ruy-accent)'}}>DOCS</span></div>} sticky>
        <NavItem href="#">Overview</NavItem>
        <NavItem href="#">Philosophy</NavItem>
        <NavItem href="#">Tokens</NavItem>
      </NavBar>

      <div style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 2rem' }}>
        <section style={{ marginBottom: '6rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-2px' }}>
            Core Philosophy
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--ruy-text-secondary)', lineHeight: 1.7, marginBottom: '3rem' }}>
            React Utility Yard (RUY) is designed for high-end administrative dashboards where visual depth and technical precision meet. 
            Our architecture follows three non-negotiable principles:
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <Card variant="glass">
              <CardHeader>
                <div style={{ color: 'var(--ruy-accent)', marginBottom: '1rem' }}><LucideIcons.Layers size={32} /></div>
                <CardTitle>Surface-First Layering</CardTitle>
              </CardHeader>
              <CardBody>
                Depth isn't just about shadows. In RUY, depth is achieved by modifying surface opacity and saturation. 
                Successive layers become darker/more opaque in Dark mode and lighter/more frosted in Light mode.
              </CardBody>
            </Card>

            <Card variant="glass">
              <CardHeader>
                <div style={{ color: 'var(--ruy-success)', marginBottom: '1rem' }}><LucideIcons.Zap size={32} /></div>
                <CardTitle>Vibrant Minimalism</CardTitle>
              </CardHeader>
              <CardBody>
                We avoid "flat" design. Every component utilizes high-saturation accents and subtle linear gradients to feel 
                alive and interactive, even when idle.
              </CardBody>
            </Card>

            <Card variant="glass">
              <CardHeader>
                <div style={{ color: 'var(--ruy-purple)', marginBottom: '1rem' }}><LucideIcons.Monitor size={32} /></div>
                <CardTitle>Hardware Acceleration</CardTitle>
              </CardHeader>
              <CardBody>
                Built for the modern web. We lean heavily into <code>backdrop-filter</code> and GPU-accelerated transforms 
                to ensure the "glass" look is performant and fluid.
              </CardBody>
            </Card>
          </div>
        </section>

        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Terminology & Sizing</h2>
          <Surface style={{ padding: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Size Scale</h3>
                <p style={{ color: 'var(--ruy-text-secondary)', marginBottom: '2rem' }}>
                  Standardized terminology used across all components for width, height, and font-scaling.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <Tag size="xs" color="slate">XS - Extra Small</Tag>
                  <Tag size="sm" color="slate">SM - Small</Tag>
                  <Tag size="md" color="accent">MD - Medium (Default)</Tag>
                  <Tag size="lg" color="slate">LG - Large</Tag>
                  <Tag size="lg" color="slate" style={{ height: '3rem' }}>XL - Extra Large</Tag>
                </div>
              </div>
              <div style={{ borderLeft: '1px solid var(--ruy-border-color)', paddingLeft: '4rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Component Variants</h3>
                <ul style={{ color: 'var(--ruy-text-secondary)', lineHeight: 2 }}>
                  <li><strong>Solid</strong>: Opaque backgrounds for high-contrast grounding.</li>
                  <li><strong>Glass</strong>: Transparent frosted effect for layering.</li>
                  <li><strong>Ghost</strong>: Background-less items for subtle actions.</li>
                  <li><strong>Outline</strong>: Border-only items for secondary focus.</li>
                </ul>
              </div>
            </div>
          </Surface>
        </section>

        <section>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--ruy-danger)' }}>Known Limitations</h2>
          <div style={{ background: 'var(--ruy-danger-muted)', border: '1px solid var(--ruy-danger)', borderRadius: 'var(--ruy-radius-lg)', padding: '2rem' }}>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: 1.8 }}>
              <li><strong>Backdrop Filter Support</strong>: Requires modern browsers (Safari, Chrome, Firefox 103+). 
                  Falls back to semi-opaque backgrounds on older versions.</li>
              <li><strong>Performance Cost</strong>: Stacking more than 5-6 heavy blur layers can impact GPU performance 
                  on integrated graphics or mobile hardware.</li>
              <li><strong>Contrast Ratio</strong>: Some vibrant glass combinations may require careful background selection 
                  to maintain AAA accessibility.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
};
