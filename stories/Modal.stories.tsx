import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ConfirmModal } from '../src/components/Modal';
import { Button } from '../src/components/Button';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal isOpen={open} onClose={() => setOpen(false)} title="Modal Title">
          <p style={{ color: 'var(--ruy-text-secondary)', fontSize: '0.875rem' }}>
            This is a glass-styled modal with accent bar, keyboard support, and backdrop click to close.
          </p>
        </Modal>
      </>
    );
  },
};

export const Confirm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)} color="danger">Delete Item</Button>
        <ConfirmModal
          isOpen={open}
          title="Delete Item?"
          message="This action cannot be undone. The item will be permanently deleted."
          isDanger
          onConfirm={() => console.log('Confirmed!')}
          onCancel={() => setOpen(false)}
        />
      </>
    );
  },
};
