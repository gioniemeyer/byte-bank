"use client";
import { AppBar, Box, Container } from "@mui/material";
import UserComponent from "./userComponent";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import DrawerButton from "../buttons/DrawerButton";

export default function Header() {
  const { isMobile } = useResponsive();
  const justifyContentValue = isMobile ? "space-between" : "right";

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
      <Container fixed>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: justifyContentValue,
          }}
        >
          {isMobile && <DrawerButton />}
          <UserComponent />
        </Box>
      </Container>
    </AppBar>
  );
}
