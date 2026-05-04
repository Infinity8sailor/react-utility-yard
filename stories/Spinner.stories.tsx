import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../src/components/Loading/loading';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['circle', 'dots'] },
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
