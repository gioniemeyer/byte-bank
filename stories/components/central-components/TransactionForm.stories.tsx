import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TransactionForm from '../../../app/components/central-components/TransactionForm';

const meta = {
  title: 'Components/CentralComponents/TransactionForm',
  component: TransactionForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TransactionForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
