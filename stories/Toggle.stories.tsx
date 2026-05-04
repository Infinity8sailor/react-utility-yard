import type { Meta, StoryObj } from '@storybook/react';
import { ToggleSwitch } from '../src/components/Button/toggle';
import { useState } from 'react';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = { args: { label: 'Dark Mode' } };
export const Checked: Story = { args: { checked: true, label: 'Enabled' } };
export const Small: Story = { args: { size: 'sm', label: 'Small' } };
export const Large: Story = { args: { size: 'lg', label: 'Large' } };

export const Interactive: Story = {
  render: () => {
    const [on, setOn] = useState(false);
    return <ToggleSwitch checked={on} onChange={setOn} label={on ? 'ON' : 'OFF'} />;
  },
};

export const AllSizes: Story = {
  render: () => {
    const [values, setValues] = useState([false, true, false]);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <ToggleSwitch size="sm" checked={values[0]} onChange={(v) => setValues([v, values[1], values[2]])} label="Small" />
        <ToggleSwitch size="md" checked={values[1]} onChange={(v) => setValues([values[0], v, values[2]])} label="Medium" />
        <ToggleSwitch size="lg" checked={values[2]} onChange={(v) => setValues([values[0], values[1], v])} label="Large" />
      </div>
    );
  },
};
