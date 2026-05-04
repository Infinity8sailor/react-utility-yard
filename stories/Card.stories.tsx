import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from '../src/components/Card';
import { Button } from '../src/components/Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultGlass: Story = {
  args: {
    variant: 'glass',
    hoverable: true,
    style: { width: '350px' },
    children: (
      <>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardBody>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Name</label>
              <input 
                placeholder="Name of your project" 
                style={{ 
                  padding: '0.5rem', 
                  borderRadius: 'var(--ruy-radius-md)', 
                  border: '1px solid var(--ruy-border-base)',
                  background: 'transparent',
                  color: 'inherit'
                }} 
              />
            </div>
          </div>
        </CardBody>
        <CardFooter style={{ justifyContent: 'space-between' }}>
          <Button variant="ghost">Cancel</Button>
          <Button variant="solid">Deploy</Button>
        </CardFooter>
      </>
    ),
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    style: { width: '350px' },
    children: (
      <>
        <CardHeader>
          <CardTitle>Solid Variant</CardTitle>
          <CardDescription>Opaque background for dense layouts.</CardDescription>
        </CardHeader>
        <CardBody>
          <p style={{ margin: 0 }}>This variant does not use the glassmorphic blur and is totally opaque.</p>
        </CardBody>
      </>
    ),
  },
};
