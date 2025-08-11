import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import EditButton from "../../../app/components/buttons/EditButton";
import "../../../app/globals.css";

const meta: Meta<typeof EditButton> = {
  title: "Components/Buttons/EditButton",
  component: EditButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["edit", "delete"],
      description: "Button type: edit or delete",
    },
    editing: {
      control: { type: "boolean" },
      description: "Applies editing style (secondary backgroundColor)",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof EditButton>;

export const EditPrimary: Story = {
  args: {
    type: "edit",
    editing: false, // primaryColor
  },
  render: (args) => <EditButton type={args.type} editing={!!args.editing} />,
};

export const EditSecondary: Story = {
  args: {
    type: "edit",
    editing: true, // secondaryColor
  },
  render: (args) => <EditButton type={args.type} editing={!!args.editing} />,
};

export const DeletePrimary: Story = {
  args: {
    type: "delete",
    editing: false, // primaryColor
  },
  render: (args) => <EditButton type={args.type} editing={!!args.editing} />,
};

export const DeleteSecondary: Story = {
  args: {
    type: "delete",
    editing: true, // secondaryColor
  },
  render: (args) => <EditButton type={args.type} editing={!!args.editing} />,
};
