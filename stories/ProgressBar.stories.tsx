import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '../src/components/Loading/progress';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
  }
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Linear: Story = {
  args: {
    variant: 'linear',
    value: 65,
    showLabel: true,
  },
  decorators: [
    (Story) => <div style={{ width: '400px' }}><Story /></div>
  ]
};

export const LinearIndeterminate: Story = {
  args: {
    variant: 'linear',
    indeterminate: true,
  },
  decorators: [
    (Story) => <div style={{ width: '400px' }}><Story /></div>
  ]
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    value: 75,
    showLabel: true,
    size: 80,
    thickness: 8,
  },
};

export const CircularIndeterminate: Story = {
  args: {
    variant: 'circular',
    indeterminate: true,
    size: 60,
    thickness: 6,
  },
};
