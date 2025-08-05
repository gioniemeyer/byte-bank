"use client";
import { Container } from "@mui/material";
import Sidebar from "./sidebarComponents/Sidebar";
import Statement from "./statementComponents/Statement";
import ContentBody from "./mainContent/ContentBody";
import { useResponsive } from "../contexts/ResponsiveContext";

export default function BodyContainer() {
  const { isMobile, isDesktop } = useResponsive();
  const flexDirectionValue = isDesktop ? "row" : "column";
  const alignItemsValue = isDesktop ? "flex-start" : "center";

  return (
    <Container
      fixed
      sx={{
        display: "flex",
        flexDirection: flexDirectionValue,
        width: "100%",
        mx: "auto",
        mb: "30px",
        alignItems: alignItemsValue,
      }}
    >
      {!isMobile && <Sidebar />}
      <ContentBody />

      {!isMobile && <Statement />}
    </Container>
  );
}
