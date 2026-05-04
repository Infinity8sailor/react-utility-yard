import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from '../src/components/wrappers/sidebar';
import { Button } from '../src/components/Button';
import { Tag } from '../src/components/Tag';

const meta = {
  title: 'Components/SideBar',
  component: SideBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoList = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1rem' }}>
    <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Dashboard</Button>
    <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Analytics</Button>
    <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Settings</Button>
    <div style={{ marginTop: '1rem' }}>
      <Tag color="indigo">v2.0.0</Tag>
    </div>
  </div>
);

const DemoContent = () => (
  <div style={{ padding: '2rem' }}>
    <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Main Content Area</h1>
    <p style={{ opacity: 0.8, lineHeight: 1.6, maxWidth: '600px' }}>
      This is the main application content. The sidebar pushes this content or overlays it depending on the CSS layout.
      In the glassmorphic theme, the sidebar has a frosted backdrop blur and integrates perfectly with the background.
    </p>
    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
      <div style={{ height: '200px', width: '300px', borderRadius: '1rem', background: 'var(--ruy-glass-bg)', backdropFilter: 'blur(10px)', border: '1px solid var(--ruy-glass-border)' }} />
      <div style={{ height: '200px', width: '300px', borderRadius: '1rem', background: 'var(--ruy-glass-bg)', backdropFilter: 'blur(10px)', border: '1px solid var(--ruy-glass-border)' }} />
    </div>
  </div>
);

export const Default: Story = {
  args: {
    title: 'Admin Menu',
    sideBar_list: <DemoList />,
    children: <DemoContent />,
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', width: '100vw', display: 'flex', overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
};

export const RightSide: Story = {
  args: {
    title: 'Inspector',
    side: 'right',
    sideBar_list: <DemoList />,
    children: <DemoContent />,
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', width: '100vw', display: 'flex', overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomToggleIcon: Story = {
  args: {
    title: 'Profile Menu',
    sideBar_list: <DemoList />,
    children: <DemoContent />,
    toggleIcon: (
      <img 
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
        alt="avatar" 
        style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'white' }} 
      />
    )
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', width: '100vw', display: 'flex', overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
};
