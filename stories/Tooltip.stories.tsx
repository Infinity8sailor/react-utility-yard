import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../src/components/Tooltip';
import { Button } from '../src/components/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: { position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] } },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="This is a tooltip" position="top">
      <Button variant="ghost">Hover me</Button>
    </Tooltip>
  ),
};

export const AllPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', padding: '3rem', flexWrap: 'wrap' }}>
      <Tooltip content="Top" position="top"><Button variant="outline" color="neutral">Top</Button></Tooltip>
      <Tooltip content="Bottom" position="bottom"><Button variant="outline" color="neutral">Bottom</Button></Tooltip>
      <Tooltip content="Left" position="left"><Button variant="outline" color="neutral">Left</Button></Tooltip>
      <Tooltip content="Right" position="right"><Button variant="outline" color="neutral">Right</Button></Tooltip>
    </div>
  ),
};
