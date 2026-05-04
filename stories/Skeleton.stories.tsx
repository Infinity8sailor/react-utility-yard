import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../src/components/Loading/skeleton';
import { Card, CardBody, CardHeader } from '../src/components/Card';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'text',
    width: 250,
  },
};

export const CardProfileSkeleton: Story = {
  render: () => (
    <Card variant="glass" style={{ width: '300px' }}>
      <CardHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Skeleton variant="circle" width={48} height={48} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Skeleton variant="text" width="60%" height="1.2rem" />
            <Skeleton variant="text" width="40%" height="0.8rem" />
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Skeleton variant="text" />
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="95%" />
          <Skeleton variant="text" width="60%" />
        </div>
      </CardBody>
    </Card>
  )
};

export const RectangularImage: Story = {
  args: {
    variant: 'rect',
    width: 300,
    height: 150,
  },
};
