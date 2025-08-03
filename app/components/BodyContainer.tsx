"use client";
import { Container } from "@mui/material";
import Sidebar from "./sidebarComponents/Sidebar";
import Statement from "./statementComponents/Statement";
import ContentBody from "./mainContent/ContentBody";
import { useResponsive } from "../contexts/ResponsiveContext";

export default function BodyContainer() {
  const { isMobile } = useResponsive();
  return (
    <Container
      fixed
      sx={{
        display: "flex",
        width: "100%",
        mx: "auto",
      }}
    >
      <Sidebar />
      <ContentBody />

      {!isMobile && <Statement />}
    </Container>
  );
}
