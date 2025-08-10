import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Transaction from '../../../app/components/central-components/Transaction';

const meta = {
  title: 'Components/CentralComponents/Transaction',
  component: Transaction,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Transaction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
