import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/components/input/input';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass'] },
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: 'Enter text...', label: 'Label' } };
export const WithHelper: Story = { args: { placeholder: 'Email', label: 'Email Address', helperText: 'We won\'t share this' } };
export const WithError: Story = { args: { placeholder: 'Email', label: 'Email', error: 'Invalid email address', value: 'bad@' } };
export const Glass: Story = { args: { placeholder: 'Glass input...', variant: 'glass', label: 'Glass Variant' } };
export const Small: Story = { args: { placeholder: 'Small', size: 'sm' } };
export const Large: Story = { args: { placeholder: 'Large', size: 'lg' } };

export const Interactive: Story = {
  render: () => {
    const [val, setVal] = useState('');
    return (
      <Input
        label="Search"
        placeholder="Type something..."
        value={val}
        onChange={(e) => setVal(e.target.value)}
        helperText={`${val.length} characters`}
      />
    );
  },
};
