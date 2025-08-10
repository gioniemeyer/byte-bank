import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Welcome from '../../../app/components/central-components/Welcome';

const meta = {
  title: 'Components/CentralComponents/Welcome',
  component: Welcome,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Welcome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
