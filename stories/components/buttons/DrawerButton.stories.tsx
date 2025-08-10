import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DrawerButton from "../../../app/components/buttons/DrawerButton";
import "../../../app/globals.css";

const meta: Meta<typeof DrawerButton> = {
  title: "Components/Buttons/DrawerButton",
  component: DrawerButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "The DrawerButton is visible only on mobile screens and opens the SidebarList when clicked. The SidebarList can be closed, triggering a close action back to the DrawerButton.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      description: "Optional click handler",
      table: {
        type: { summary: "() => void" },
        defaultValue: { summary: "-" },
      },
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof DrawerButton>;

export const Default: Story = {
  args: {},
};
