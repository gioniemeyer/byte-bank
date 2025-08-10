"use client";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import { Box } from "@mui/material";
import SidebarList from "./SidebarList";

/** Sidebar component */
export default function Sidebar() {
  const { isTablet, isDesktop } = useResponsive();

  return isDesktop ? (
    <Box
      sx={{
        width: "180px",
        height: "904px",
        position: "relative",
        top: "24px",
        borderRadius: "8px",
        backgroundColor: "var(--primaryTextColor)",
      }}
    >
      <SidebarList />
    </Box>
  ) : isTablet ? (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        top: "24px",
      }}
    >
      <SidebarList />
    </Box>
  ) : null;
}
