import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import DrawerButton from '../../../app/components/buttons/DrawerButton';

const meta: Meta<typeof DrawerButton> = {
  title: 'Components/Buttons/DrawerButton',
  component: DrawerButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DrawerButton>;

export const Default: Story = {
  args: {},
};
