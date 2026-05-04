import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../src/components/Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline', 'glass'] },
    color: { control: 'select', options: ['accent', 'danger', 'success', 'warning', 'neutral'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = { args: { children: 'Tag' } };
export const Accent: Story = { args: { children: 'Feature', color: 'accent' } };
export const Danger: Story = { args: { children: 'Critical', color: 'danger' } };
export const Success: Story = { args: { children: 'Done', color: 'success' } };
export const Warning: Story = { args: { children: 'Review', color: 'warning' } };
export const Outline: Story = { args: { children: 'Outline', variant: 'outline' } };
export const Glass: Story = { args: { children: 'Glass', variant: 'glass' } };
export const Removable: Story = { args: { children: 'Remove me', color: 'accent', onRemove: () => alert('Removed!') } };

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Tag color="accent">Accent</Tag>
      <Tag color="danger">Danger</Tag>
      <Tag color="success">Success</Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="neutral">Neutral</Tag>
      <Tag variant="outline">Outline</Tag>
      <Tag variant="glass">Glass</Tag>
    </div>
  ),
};
