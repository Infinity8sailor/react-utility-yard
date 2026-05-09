import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TintedMetadataCard, Tag, Button, StatLabel } from '../src';
import { Cpu, Activity, ExternalLink, Database, Shield } from 'lucide-react';

const meta = {
  title: 'Components/Card/TintedMetadataCard',
  component: TintedMetadataCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TintedMetadataCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tintColor: '#00E5FF',
    style: { width: '400px' },
    headerSlot: (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ padding: '0.5rem', borderRadius: '0.5rem', background: 'rgba(0, 229, 255, 0.2)' }}>
            <Cpu size={16} color="#00E5FF" />
          </div>
          <span style={{ fontWeight: 'bold', color: '#fff', fontSize: '0.875rem' }}>Go-Server Engine</span>
        </div>
        <Tag variant="glass" color="cyan">ACTIVE</Tag>
      </div>
    ),
    footerSlot: (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>
          <Activity size={12} />
          <span>124ms Latency</span>
        </div>
        <Button size="xs" variant="ghost" style={{ fontSize: '10px', fontWeight: 'bold' }}>
          VIEW LOGS <ExternalLink size={10} style={{ marginLeft: '4px' }} />
        </Button>
      </div>
    ),
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, margin: 0 }}>
          Core orchestration engine handling HeartBit rules and real-time user presence synchronization.
        </p>
        <StatLabel label="Rules Processed" value="1,240" trend="+12%" color="#00E5FF" />
      </div>
    ),
  },
};

export const DatabaseCard: Story = {
  args: {
    tintColor: '#00ED64',
    style: { width: '400px' },
    headerSlot: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Database size={16} color="#00ED64" />
            <span style={{ fontWeight: 'bold', color: '#fff', fontSize: '0.875rem' }}>Persistence Layer</span>
        </div>
    ),
    children: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: 'bold', textTransform: 'uppercase' }}>Health</span>
                    <span style={{ fontSize: '10px', color: '#00ED64', fontWeight: 'bold' }}>OPTIMAL</span>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#fff' }}>99.99%</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Shield size={14} color="rgba(0, 237, 100, 0.5)" />
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Encrypted at rest</span>
            </div>
        </div>
    ),
  },
};
