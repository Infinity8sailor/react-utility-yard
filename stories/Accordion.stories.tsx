import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from '../src/components/wrappers/accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AccordionItem id="item-1" title="Is it accessible?">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionItem>
        <AccordionItem id="item-2" title="Is it styled?">
          Yes. It comes with default styles that matches the other components' aesthetic.
        </AccordionItem>
        <AccordionItem id="item-3" title="Is it animated?">
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionItem>
      </>
    )
  },
  decorators: [
    (Story) => <div style={{ width: '500px' }}><Story /></div>
  ]
};

export const TransparentVariant: Story = {
  args: {
    allowMultiple: true,
    children: (
      <>
        <AccordionItem id="t-1" title="Section One" variant="transparent">
          Content for section one.
        </AccordionItem>
        <AccordionItem id="t-2" title="Section Two" variant="transparent">
          Content for section two.
        </AccordionItem>
      </>
    )
  },
  decorators: [
    (Story) => <div style={{ width: '500px' }}><Story /></div>
  ]
};
