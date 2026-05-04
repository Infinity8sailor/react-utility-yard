import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownItem, DropdownDivider } from '../src/components/wrappers/dropdown';
import { Button } from '../src/components/Button';
import { Icon } from '../src/components/Icons/icon';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Options <Icon name="chevron-down" size={16} style={{ marginLeft: 8 }} /></Button>,
    children: (
      <>
        <DropdownItem icon={<Icon name="user" size={16} />}>Profile</DropdownItem>
        <DropdownItem icon={<Icon name="settings" size={16} />}>Settings</DropdownItem>
        <DropdownDivider />
        <DropdownItem icon={<Icon name="log-out" size={16} />} danger>Logout</DropdownItem>
      </>
    )
  },
};
