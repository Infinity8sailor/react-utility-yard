import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabList, Tab, TabPanel } from '../src/components/Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Underline: Story = {
  args: {
    defaultValue: 'tab1',
    variant: 'underline',
    children: (
      <>
        <TabList>
          <Tab value="tab1">Overview</Tab>
          <Tab value="tab2">Analytics</Tab>
          <Tab value="tab3">Settings</Tab>
          <Tab value="tab4" disabled>Disabled</Tab>
        </TabList>
        <TabPanel value="tab1">
          <p>This is the overview panel. Underline tabs are great for wide spaces and standard app navigation.</p>
        </TabPanel>
        <TabPanel value="tab2">
          <p>This is the analytics panel. It is animated smoothly using Framer Motion.</p>
        </TabPanel>
        <TabPanel value="tab3">
          <p>Settings panel. Configure your preferences here.</p>
        </TabPanel>
      </>
    ),
  },
};

export const Pills: Story = {
  args: {
    defaultValue: 'daily',
    variant: 'pills',
    children: (
      <>
        <TabList>
          <Tab value="daily">Daily</Tab>
          <Tab value="weekly">Weekly</Tab>
          <Tab value="monthly">Monthly</Tab>
        </TabList>
        <TabPanel value="daily">
          <p>Daily stats overview. Notice the pill indicator sliding between options.</p>
        </TabPanel>
        <TabPanel value="weekly">
          <p>Weekly progress report.</p>
        </TabPanel>
        <TabPanel value="monthly">
          <p>Monthly roll-up and trends.</p>
        </TabPanel>
      </>
    ),
  },
};
