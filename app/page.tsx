import { ResponsiveProvider } from "./contexts/ResponsiveContext";
import { Box, Container } from "@mui/material";
import Header from "./components/headerComponents/Header";
import Sidebar from "./components/sidebarComponents/Sidebar";
import CentralBox from "./components/centralComponents/centralBox";

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
        </Box>
      </Container>
    </ResponsiveProvider>
  );
}
