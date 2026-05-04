import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { 
  Timeline, TimelineNode,
  MediaCard, CardBody,
  BentoGrid, BentoGridItem,
  AsymmetricCard,
  CompanionAnchor,
  Surface, Button, Tag, ThemeProvider,
  NavBar, NavItem, Input
} from '../src/index';

const meta = {
  title: 'Showcase/RUY 3.0 Expansion',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const NewComponents: Story = {
  render: () => (
    <ThemeProvider theme="dark">
      <div style={{ minHeight: '100vh', background: 'var(--ruy-bg-base)', padding: '4rem 2rem', color: 'var(--ruy-text-primary)' }}>
        
        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-1px' }}>RUY 3.0 Experimental</h1>
        <p style={{ color: 'var(--ruy-text-secondary)', marginBottom: '4rem', fontSize: '1.25rem', maxWidth: '800px' }}>
          Showcasing the newest non-symmetrical, dynamic, and travel-inspired components introduced in version 3.0.
        </p>

        {/* 1. Bento Grid - Advanced Use Cases */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>1. Bento Grid: Logic & Spacing</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--ruy-text-secondary)', borderLeft: '4px solid var(--ruy-accent)', paddingLeft: '1rem' }}>
            <strong>How it works:</strong> The Bento Grid uses a CSS Grid back-end with responsive column overrides. By using <code>colSpan</code> and <code>rowSpan</code>, you can create hierarchical layouts where primary information takes up more "visual weight."
          </p>
          
          <BentoGrid columns={6} gap="1rem">
            {/* Example A: Hero Feature */}
            <BentoGridItem colSpan={4} rowSpan={2}>
              <MediaCard 
                imageUrl="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop"
                aspectRatio="21/9"
              >
                <CardBody>
                  <Tag color="accent">AI Powered</Tag>
                  <h3 style={{ fontSize: '1.75rem', margin: '0.5rem 0' }}>Global Route Optimization</h3>
                  <p>Our new engine calculates the fastest, most scenic routes across 40+ countries in real-time.</p>
                </CardBody>
              </MediaCard>
            </BentoGridItem>

            {/* Example B: Status Tiles */}
            <BentoGridItem colSpan={2}>
              <Surface variant="light" padding="md">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <LucideIcons.Globe size={24} color="var(--ruy-accent)" />
                  <div>
                    <h4 style={{ margin: 0 }}>Servers</h4>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--ruy-success)' }}>99.9% Uptime</p>
                  </div>
                </div>
              </Surface>
            </BentoGridItem>

            <BentoGridItem colSpan={2}>
              <Surface variant="light" padding="md">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <LucideIcons.Users size={24} color="var(--ruy-accent)" />
                  <div>
                    <h4 style={{ margin: 0 }}>Active Users</h4>
                    <p style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold' }}>12,842</p>
                  </div>
                </div>
              </Surface>
            </BentoGridItem>

            {/* Example C: Content Stream */}
            {[1, 2, 3].map(i => (
              <BentoGridItem key={i} colSpan={2}>
                <Surface padding="sm" radius="lg">
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--ruy-bg-surface-hover)' }} />
                    <div style={{ fontSize: '0.875rem' }}>Update #{i} complete.</div>
                  </div>
                </Surface>
              </BentoGridItem>
            ))}
          </BentoGrid>
        </section>

        {/* 2. Timelines - Data Driven Examples */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>2. Timelines: Flow & Hierarchy</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--ruy-text-secondary)', borderLeft: '4px solid var(--ruy-accent)', paddingLeft: '1rem' }}>
            <strong>How it works:</strong> The Timeline component uses a relative positioning system to anchor nodes to a central "Spine." The spine's glow is controlled via CSS variables, making it reactive to the current accent color.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
            {/* Example A: Delivery Tracker */}
            <div>
              <h4 style={{ marginBottom: '1.5rem' }}>Package Journey</h4>
              <Timeline>
                <TimelineNode icon={<LucideIcons.Package size={12} />} variant="success">
                  <span style={{ fontSize: '0.8rem' }}>Ordered (June 12)</span>
                </TimelineNode>
                <TimelineNode icon={<LucideIcons.Truck size={12} />} variant="primary">
                  <span style={{ fontSize: '0.8rem' }}>In Transit (June 14)</span>
                </TimelineNode>
                <TimelineNode icon={<LucideIcons.MapPin size={12} />} variant="neutral">
                  <span style={{ fontSize: '0.8rem', color: 'var(--ruy-text-muted)' }}>Arriving Today</span>
                </TimelineNode>
              </Timeline>
            </div>

            {/* Example B: Task Wizard */}
            <div>
              <h4 style={{ marginBottom: '1.5rem' }}>Setup Progress</h4>
              <Timeline glow={false}>
                <TimelineNode icon="1" variant="success">
                  <span style={{ fontSize: '0.8rem' }}>Profile Data</span>
                </TimelineNode>
                <TimelineNode icon="2" variant="primary">
                  <span style={{ fontSize: '0.8rem' }}>Connect Bank</span>
                </TimelineNode>
                <TimelineNode icon="3" variant="neutral">
                  <span style={{ fontSize: '0.8rem', color: 'var(--ruy-text-muted)' }}>Start Trading</span>
                </TimelineNode>
              </Timeline>
            </div>

            {/* Example C: Error History */}
            <div>
              <h4 style={{ marginBottom: '1.5rem' }}>System Health</h4>
              <Timeline>
                <TimelineNode icon={<LucideIcons.XCircle size={12} />} variant="danger">
                  <div style={{ fontSize: '0.8rem' }}>
                    <strong>API Failure</strong>
                    <p style={{ margin: 0, fontSize: '0.7rem', opacity: 0.7 }}>Endpoint /auth returned 500</p>
                  </div>
                </TimelineNode>
                <TimelineNode icon={<LucideIcons.RefreshCw size={12} />} variant="warning">
                  <span style={{ fontSize: '0.8rem' }}>Auto-Restarting...</span>
                </TimelineNode>
              </Timeline>
            </div>
          </div>
        </section>

        {/* 3. Asymmetric Cards - Creative Variants */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>3. Asymmetric Cards: Beyond Rectangles</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--ruy-text-secondary)', borderLeft: '4px solid var(--ruy-accent)', paddingLeft: '1rem' }}>
            <strong>How it works:</strong> We use <code>clip-path</code> (Cyberpunk) and complex <code>border-radius</code> (Organic) properties. These break the standard "box" feel while maintaining full glassmorphism and background-blur support.
          </p>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            {/* Example A: Side-Menu HUD */}
            <AsymmetricCard shape="cyberpunk" style={{ width: '250px', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--ruy-accent)', letterSpacing: '2px', marginBottom: '1.5rem' }}>COMMAND_CENTER</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Button variant="ghost" size="sm" style={{ justifyContent: 'flex-start' }}>01. OVERVIEW</Button>
                <Button variant="ghost" size="sm" style={{ justifyContent: 'flex-start' }}>02. DATABASE</Button>
                <Button variant="ghost" size="sm" style={{ justifyContent: 'flex-start' }}>03. NETWORK</Button>
              </div>
            </AsymmetricCard>

            {/* Example B: Floating Notice */}
            <AsymmetricCard shape="organic" style={{ flex: 1, background: 'rgba(99,102,241,0.1)', borderColor: 'var(--ruy-accent)' }}>
              <h3>Did you know?</h3>
              <p>Organic shapes feel more natural and less "industrial." They are excellent for tips, notifications, and user-centric content where you want to reduce visual friction.</p>
              <Button variant="glass" size="sm">Got it!</Button>
            </AsymmetricCard>

            {/* Example C: Mini-HUD */}
            <AsymmetricCard shape="cyberpunk" style={{ width: '200px', borderLeft: 'none', borderRight: '4px solid var(--ruy-accent)' }}>
              <div style={{ textAlign: 'right' }}>
                <h2 style={{ margin: 0, fontSize: '2.5rem' }}>84%</h2>
                <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.6 }}>CORE_TEMP</p>
              </div>
            </AsymmetricCard>
          </div>
        </section>

        {/* 4. Companion System - Interactive Anchors */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>4. Companion System: Interactive Mascots</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--ruy-text-secondary)', borderLeft: '4px solid var(--ruy-accent)', paddingLeft: '1rem' }}>
            <strong>How it works:</strong> The <code>CompanionAnchor</code> wraps any element and tracks its mouse events. It uses Framer Motion's <code>AnimatePresence</code> (internally) or simple state transitions to trigger animations on a floating "Anchor Point."
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            {/* Example A: Helpful Assistant */}
            <Surface padding="xl" style={{ textAlign: 'center' }}>
              <CompanionAnchor 
                anchor="top-left" 
                companionSize={100}
                idleImageUrl="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z6Z3R5Z3R5Z3R5Z3R5Z3R5Z3R5Z3R5Z3R5Z3R5Z3R5JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/h8p5m9KvxzM9B9B0A9/giphy.gif"
              >
                <div style={{ padding: '2rem', border: '1px solid var(--ruy-border-color)', borderRadius: 'var(--ruy-radius-xl)' }}>
                  <h4>Interactive Guide</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--ruy-text-secondary)' }}>Hover this surface to see the companion react. It provides a friendly interface for onboarding flows.</p>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CompanionAnchor>
            </Surface>

            {/* Example B: Interactive Form */}
            <Surface padding="xl">
              <h4 style={{ marginBottom: '1.5rem' }}>Login Shield</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <CompanionAnchor anchor="top-right" companionSize={40} offset={{ x: -10, y: 10 }}>
                  <Input placeholder="Username" block />
                </CompanionAnchor>
                <CompanionAnchor anchor="top-right" companionSize={40} offset={{ x: -10, y: 10 }}>
                  <Input type="password" placeholder="Password" block />
                </CompanionAnchor>
                <Button block>Authenticate</Button>
              </div>
            </Surface>
          </div>
        </section>

      </div>
    </ThemeProvider>
  )
};
