import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import CentralBox from '../../../app/components/central-components/CentralBox';

const meta = {
  title: 'Components/CentralComponents/CentralBox',
  component: CentralBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'radio',
      options: ['welcome', 'transaction'],
      description: 'Tipo de conteúdo exibido',
    },
  },
  args: {
    content: 'welcome',
  },
} satisfies Meta<typeof CentralBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
  args: { content: 'welcome' },
};

export const Transaction: Story = {
  args: { content: 'transaction' },
};
