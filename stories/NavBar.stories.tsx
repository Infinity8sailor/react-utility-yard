import type { Meta, StoryObj } from '@storybook/react';
import { NavBar, NavItem } from '../src/components/wrappers/navbar';
import { Button } from '../src/components/Button';
import { Icon } from '../src/components/Icons/icon';

const meta = {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'glass',
    brand: (
      <>
        <Icon name="box" size={24} color="var(--ruy-color-accent)" />
        <span>Utility Yard</span>
      </>
    ),
    children: (
      <>
        <NavItem active>Dashboard</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Team</NavItem>
        <Button variant="solid" size="sm" style={{ marginLeft: '1rem' }}>Log In</Button>
      </>
    )
  },
  decorators: [
    (Story) => (
      <div style={{ height: '300px', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Story />
        <div style={{ padding: '2rem' }}>
          <h1>Page Content</h1>
          <p>The NavBar sits elegantly above the content with its glassmorphic backdrop.</p>
        </div>
      </div>
    )
  ]
};
