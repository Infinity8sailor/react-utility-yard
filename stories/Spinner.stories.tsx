import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../src/components/Loading/loading';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['circle', 'dots', 'orbit', 'bars', 'pulse-ring', 'organic', 'sharingan-1', 'sharingan-2', 'sharingan', 'mangekyou-itachi', 'mangekyou-sasuke', 'mangekyou-obito', 'mangekyou-kakashi', 'mangekyou-madara', 'mangekyou-shisui', 'mangekyou-izuna', 'mangekyou-fugaku', 'mangekyou-indra', 'mangekyou-naori', 'mangekyou-naka', 'mangekyou-rai', 'mangekyou-shin', 'mangekyou-baru', 'mangekyou-madara-eternal', 'mangekyou-sasuke-eternal', 'mangekyou-sarada', 'mangekyou-hikari', 'rinnegan', 'sharingan-evolve-1-to-2', 'sharingan-evolve-2-to-3', 'sharingan-evolve-3-to-mangekyou', 'sharingan-evolve-obito-2-to-mangekyou'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
  },
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = { args: {} };
export const Dots: Story = { args: { variant: 'dots' } };

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const AdvancedVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', color: 'var(--ruy-color-accent)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <Spinner variant="circle" size="lg" />
        <span style={{ fontSize: '0.875rem' }}>Circle</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <Spinner variant="orbit" size="lg" />
        <span style={{ fontSize: '0.875rem' }}>Orbit</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <Spinner variant="bars" size="lg" />
        <span style={{ fontSize: '0.875rem' }}>Bars</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <Spinner variant="pulse-ring" size="lg" />
        <span style={{ fontSize: '0.875rem' }}>Pulse Ring</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <Spinner variant="organic" size="lg" />
        <span style={{ fontSize: '0.875rem' }}>Organic</span>
      </div>
    </div>
  ),
};

export const SharinganVariants: Story = {
  render: () => {
    const variants = [
      { id: 'sharingan-1', name: '1-Tomoe' },
      { id: 'sharingan-2', name: '2-Tomoe' },
      { id: 'sharingan', name: '3-Tomoe' },
      { id: 'mangekyou-itachi', name: 'Mangekyou (Itachi)' },
      { id: 'mangekyou-sasuke', name: 'Mangekyou (Sasuke)' },
      { id: 'mangekyou-obito', name: 'Kamui (Obito)' },
      { id: 'mangekyou-kakashi', name: 'Kamui (Kakashi)' },
      { id: 'mangekyou-madara', name: 'Mangekyou (Madara)' },
      { id: 'mangekyou-shisui', name: 'Kotoamatsukami (Shisui)' },
      { id: 'mangekyou-izuna', name: 'Mangekyou (Izuna)' },
      { id: 'mangekyou-fugaku', name: 'Mangekyou (Fugaku)' },
      { id: 'mangekyou-indra', name: 'Mangekyou (Indra)' },
      { id: 'mangekyou-naori', name: 'Mangekyou (Naori)' },
      { id: 'mangekyou-naka', name: 'Mangekyou (Naka)' },
      { id: 'mangekyou-rai', name: 'Mangekyou (Rai)' },
      { id: 'mangekyou-shin', name: 'Mangekyou (Shin)' },
      { id: 'mangekyou-baru', name: 'Mangekyou (Baru)' },
      { id: 'mangekyou-madara-eternal', name: 'Eternal (Madara)' },
      { id: 'mangekyou-sasuke-eternal', name: 'Eternal (Sasuke)' },
      { id: 'mangekyou-sarada', name: 'Mangekyou (Sarada)' },
      { id: 'mangekyou-hikari', name: 'Mangekyou (Hikari)' },
      { id: 'rinnegan', name: 'Rinnegan' },
      { id: 'sharingan-evolve-1-to-2', name: 'Evolve: 1 to 2 Tomoe' },
      { id: 'sharingan-evolve-2-to-3', name: 'Evolve: 2 to 3 Tomoe' },
      { id: 'sharingan-evolve-3-to-mangekyou', name: 'Evolve: 3 to Itachi' },
      { id: 'sharingan-evolve-obito-2-to-mangekyou', name: 'Evolve: Obito 2 to Mangekyou' },
    ];
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem', padding: '2rem', background: '#1c1c1e', borderRadius: '8px' }}>
        {variants.map(v => (
          <div key={v.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
            <Spinner variant={v.id as any} size={64} />
            <span style={{ color: '#fff', fontFamily: 'monospace', fontSize: '12px' }}>{v.name}</span>
          </div>
        ))}
      </div>
    );
  }
};
