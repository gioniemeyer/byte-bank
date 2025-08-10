import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Balance from '../../../app/components/central-components/Balance';

const meta = {
  title: 'Components/CentralComponents/Balance',
  component: Balance,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Balance>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
