import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import EditButton from '../../../app/components/buttons/EditButton';

const meta: Meta<typeof EditButton> = {
  title: 'Components/Buttons/EditButton',
  component: EditButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['edit', 'delete'],
      description: 'Tipo do botão: edit ou delete',
    },
  },
};

export default meta;
type Story = StoryObj<typeof EditButton>;

export const Edit: Story = {
  args: {
    type: 'edit',
  },
};

export const Delete: Story = {
  args: {
    type: 'delete',
  },
};
