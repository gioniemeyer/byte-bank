"use client";
import { AppBar, Box, Breadcrumbs } from "@mui/material";
import UserComponent from "./userComponent";
import { useResponsive } from "@/app/contexts/ResponsiveContext";

export default function Header() {
  const { isMobile } = useResponsive();
  const justifyContentValue = isMobile ? "space-between" : "center";

  return (
    <AppBar
      position="static"
      sx={{
        background: "var(--primaryColor)",
        color: "var(--primaryTextColor)",
        height: "96px",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: justifyContentValue,
          mx: "auto",
        }}
      >
        {isMobile && <Breadcrumbs />}
        <UserComponent />
      </Box>
    </AppBar>
  );
}
