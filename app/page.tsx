import { ResponsiveProvider } from "./contexts/ResponsiveContext";
import { Container } from "@mui/material";
import Header from "./components/headerComponents/Header";
import Sidebar from "./components/sidebarComponents/Sidebar";

export default function Home() {
  return (
    <ResponsiveProvider>
      <Header />
      <Container fixed>
        <Sidebar />
      </Container>
    </ResponsiveProvider>
  );
}
