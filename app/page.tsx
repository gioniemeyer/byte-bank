import { ResponsiveProvider } from "./contexts/ResponsiveContext";
import { Box, Container } from "@mui/material";
import Header from "./components/headerComponents/Header";
import Sidebar from "./components/sidebarComponents/Sidebar";
import CentralBox from "./components/centralComponents/centralBox";
import Statement from "./components/statementComponents/Statement";

export default function Home() {
  return (
    <ResponsiveProvider>
      <Header />
      <Container fixed>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Sidebar />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CentralBox bgColor="var(--primaryColor)" height="402px" />
            <CentralBox bgColor="var(--backgroundBox)" height="478px" />
          </Box>

          <Statement></Statement>
        </Box>
      </Container>
    </ResponsiveProvider>
  );
}
