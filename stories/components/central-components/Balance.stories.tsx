import { ResponsiveProvider } from "@/app/contexts/ResponsiveContext";
import EyeIconDesktopSVG from "../../assets/vectors/eye-icon-desktop.svg";
import EyeIconMobileSVG from "../../assets/vectors/eye-icon-mobile.svg";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Balance from "../../../app/components/central-components/Balance";
import "../../../app/globals.css";

const meta: Meta<typeof Balance> = {
  title: "Components/CentralComponents/Balance",
  component: Balance,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Component that displays the user's account balance, with an eye icon to toggle the balance visibility.\n\n- The eye icon will use the color "<span style='color:#ff5031'>secondaryColor (ff5031)</span>" for desktop versions and \"primaryTextColor (white)\" for other versions.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      description:
        "When clicking the eye icon: hides or reveals the balance value.",
      table: {
        type: { summary: "() => void" },
        defaultValue: { summary: "-" },
      },
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Balance>;

export const Default: Story = {
  render: () => (
    <>
      <style>
        {`
          .balance-story-wrapper .MuiBox-root {
            top: 0 !important;
            right: 0 !important;
            position: relative !important;
          }
        `}
      </style>
      <div
        className="balance-story-wrapper"
        style={{
          background: "#004D61",
          width: "30vw",
          minHeight: "40vh",
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ResponsiveProvider>
          <Balance />
        </ResponsiveProvider>
      </div>
    </>
  ),
};