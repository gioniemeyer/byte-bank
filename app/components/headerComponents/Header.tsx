"use client";
import { AppBar, Box } from "@mui/material";
import UserComponent from "./userComponent";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import DrawerButton from "../buttons/DrawerButton";

export default function Header() {
  const { isMobile } = useResponsive();
  const justifyContentValue = isMobile ? "space-between" : "center";
  const headerContainerWidthValue = isMobile ? "95%" : "80%";

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
          width: headerContainerWidthValue,
          display: "flex",
          alignItems: "center",
          justifyContent: justifyContentValue,
          mx: "auto",
        }}
      >
        {isMobile && <DrawerButton />}
        <UserComponent />
      </Box>
    </AppBar>
  );
}
