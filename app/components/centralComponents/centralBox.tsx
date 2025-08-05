"use client";
import { Box } from "@mui/material";
import Welcome from "./Welcome";
import Transaction from "./Transaction";
import { useResponsive } from "@/app/contexts/ResponsiveContext";

interface CentralBoxProps {
  content: string;
}

export default function CentralBox({ content }: CentralBoxProps) {
  const { isTablet, isDesktop } = useResponsive();

  return (
    <Box
      sx={{
        width: isDesktop ? "690px" : isTablet ? "600px" : "312px",
        position: "relative",
        top: isDesktop ? "24px" : "48px",
        mb: 3,
        borderRadius: "8px",
        backgroundColor:
          content === "welcome"
            ? "var(--primaryColor)"
            : "var(--backgroundBox)",
      }}
    >
      {content === "welcome" && <Welcome />}
      {content === "transaction" && <Transaction />}
    </Box>
  );
}
