import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline', 'ghost', 'glass'] },
    color: { control: 'select', options: ['accent', 'danger', 'success', 'neutral'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = { args: { children: 'Button' } };
export const Accent: Story = { args: { children: 'Save Changes', variant: 'solid', color: 'accent' } };
export const Danger: Story = { args: { children: 'Delete', variant: 'solid', color: 'danger' } };
export const Success: Story = { args: { children: 'Approve', variant: 'solid', color: 'success' } };
export const Outline: Story = { args: { children: 'Cancel', variant: 'outline', color: 'accent' } };
export const Ghost: Story = { args: { children: 'Skip', variant: 'ghost' } };
export const Glass: Story = { args: { children: 'Glass Button', variant: 'glass' } };
export const Loading: Story = { args: { children: 'Saving...', loading: true } };
export const Small: Story = { args: { children: 'Small', size: 'sm' } };
export const Large: Story = { args: { children: 'Large Action', size: 'lg' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="solid" color="accent">Solid</Button>
      <Button variant="solid" color="danger">Danger</Button>
      <Button variant="solid" color="success">Success</Button>
      <Button variant="outline" color="accent">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="glass">Glass</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="md">MD</Button>
      <Button size="lg">LG</Button>
    </div>
  ),
};
