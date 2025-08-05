'use client';

import { ResponsiveProvider } from "@/app/contexts/ResponsiveContext";
import { Box, Container } from "@mui/material";
import Header from "../headerComponents/Header";
import Sidebar from "../sidebarComponents/Sidebar";
import CentralBox from "../centralComponents/centralBox";
import Statement from "../statementComponents/Statement";
import { TransactionProvider } from "@/app/contexts/TransactionContext";

export default function MainContent() {
	return (
		<ResponsiveProvider>
      <TransactionProvider>
        <Header />
        <Container fixed>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column", // mobile
                sm: "column", // tablet
                md: "row",    // desktop
              }
            }}
          >
            <Sidebar />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <CentralBox bgColor="var(--primaryColor)" height="402px" content="welcome" />
              <CentralBox bgColor="var(--backgroundBox)" height="478px" content="transaction" />
            </Box>

            <Statement />
          </Box>
        </Container>
      </TransactionProvider>
		</ResponsiveProvider>
	);
}
