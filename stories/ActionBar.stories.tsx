import type { Meta, StoryObj } from '@storybook/react';
import { ActionBar } from '../src/components/ActionBar';
import { useState } from 'react';

const meta: Meta<typeof ActionBar> = {
  title: 'Components/ActionBar',
  component: ActionBar,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ActionBar>;

export const ViewMode: Story = { args: { isEdit: false, editLabel: 'Edit Profile' } };
export const EditMode: Story = { args: { isEdit: true } };

export const Interactive: Story = {
  render: () => {
    const [editing, setEditing] = useState(false);
    return (
      <ActionBar
        isEdit={editing}
        editLabel="Edit"
        onEdit={() => setEditing(true)}
        onSave={() => { console.log('Saved!'); setEditing(false); }}
        onCancel={() => setEditing(false)}
      />
    );
  },
};
