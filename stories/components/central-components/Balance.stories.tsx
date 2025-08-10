import { ResponsiveProvider } from "@/app/contexts/ResponsiveContext";
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

export const EyeIconDesktop = () => {
  return (
    <div
      style={{
        background: "#004D61",
        width: "10vw",
        minHeight: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 12C2.73 7.61 7.11 4.5 12 4.5C16.89 4.5 21.27 7.61 23 12C21.27 16.39 16.89 19.5 12 19.5C7.11 19.5 2.73 16.39 1 12Z"
            stroke="var(--secondaryColor)"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="12"
            cy="12"
            r="3.5"
            stroke="var(--secondaryColor)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export const EyeIconMobile = () => {
  return (
    <div
      style={{
        background: "#004D61",
        width: "10vw",
        minHeight: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 12C2.73 7.61 7.11 4.5 12 4.5C16.89 4.5 21.27 7.61 23 12C21.27 16.39 16.89 19.5 12 19.5C7.11 19.5 2.73 16.39 1 12Z"
            stroke="var(--primaryTextColor)"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="12"
            cy="12"
            r="3.5"
            stroke="var(--primaryTextColor)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};
