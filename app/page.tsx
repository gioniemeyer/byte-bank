import Header from "./components/headerComponents/Header";
import { ResponsiveProvider } from "./contexts/ResponsiveContext";

export default function Home() {
  return (
    <ResponsiveProvider>
      <Header />
    </ResponsiveProvider>
  );
}
