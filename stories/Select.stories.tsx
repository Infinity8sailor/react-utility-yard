import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../src/components/Select';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
  },
};
export default meta;
type Story = StoryObj<typeof Select>;

const fruits = ['Apple', 'Banana', 'Cherry', 'Dragon Fruit', 'Elderberry'];

export const Default: Story = { args: { options: fruits, placeholder: 'Pick a fruit...' } };
export const WithTitle: Story = { args: { options: fruits, title: 'Fruit', placeholder: 'Select...' } };
export const Small: Story = { args: { options: fruits, size: 'sm', placeholder: 'Small select' } };

export const ObjectOptions: Story = {
  args: {
    options: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'svelte', label: 'Svelte' },
      { value: 'angular', label: 'Angular' },
    ],
    placeholder: 'Framework...',
  },
};

export const Controlled: Story = {
  render: () => {
    const [val, setVal] = useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Select options={fruits} value={val} onChange={setVal} placeholder="Pick..." />
        <span style={{ fontSize: '0.75rem', color: 'var(--ruy-text-muted)' }}>Selected: {val || 'none'}</span>
      </div>
    );
  },
};
