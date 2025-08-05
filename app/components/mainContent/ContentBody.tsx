"use client";
import { Box } from "@mui/material";
import CentralBox from "../centralComponents/centralBox";
import Statement from "../statementComponents/Statement";
import { useResponsive } from "@/app/contexts/ResponsiveContext";

export default function ContentBody() {
  const { isMobile } = useResponsive();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mx: isMobile ? "0px" : "10px",
      }}
    >
      <CentralBox content="welcome" />
      <CentralBox content="transaction" />
      {isMobile && <Statement />}
    </Box>
  );
}
