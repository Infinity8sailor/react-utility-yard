import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Surface } from '../src/components/wrappers/surface';
import { Button, Input, Card, CardHeader, CardTitle, CardBody } from '../src/index';

const meta = {
  title: 'Components/Surface',
  component: Surface,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Surface>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heavy: Story = {
  args: {
    variant: 'heavy',
    padding: 'lg',
    radius: '2xl',
    children: (
      <div style={{ color: 'var(--ruy-text-primary)' }}>
        <h2 style={{ fontSize: '2rem', margin: '0 0 1rem 0' }}>Grounding Surface</h2>
        <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
          The Surface component acts as a base layer for layouts, providing a heavily blurred background that protects inner components from harsh wallpapers.
        </p>
        <Card variant="glass">
          <CardHeader><CardTitle>Inner Component</CardTitle></CardHeader>
          <CardBody style={{ display: 'flex', gap: '1rem' }}>
            <Input placeholder="Text..." />
            <Button>Action</Button>
          </CardBody>
        </Card>
      </div>
    ),
  },
};

export const Light: Story = {
  args: {
    ...Heavy.args,
    variant: 'light',
  },
};
