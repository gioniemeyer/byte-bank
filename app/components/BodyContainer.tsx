"use client";
import { useResponsive } from "../contexts/ResponsiveContext";
import { Box, Container } from "@mui/material";
import CentralBox from "./centralComponents/centralBox";
import Sidebar from "./sidebarComponents/Sidebar";
import Statement from "./statementComponents/Statement";

export default function BodyContainer() {
  const { isTablet, isDesktop } = useResponsive();

  const containerWidth = isDesktop ? "1200px" : isTablet ? "600px" : "312px";

  return (
    <Container
      fixed
      sx={{
        width: containerWidth,
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column", // mobile
            sm: "column", // tablet
            md: "row", // desktop
          },
          width: containerWidth,
          alignItems: "flex-start", // centraliza horizontalmente os itens do flex
          justifyContent: "space-between", // centraliza verticalmente os itens do flex
        }}
      >
        <Sidebar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CentralBox
            bgColor="var(--primaryColor)"
            height="402px"
            content="welcome"
          />
          <CentralBox
            bgColor="var(--backgroundBox)"
            height="478px"
            content="transaction"
          />
        </Box>

        <Statement />
      </Box>
    </Container>
  );
}
