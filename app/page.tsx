import { ResponsiveProvider } from "./contexts/ResponsiveContext";
import Header from "./components/headerComponents/Header";
import BodyContainer from "./components/BodyContainer";

export default function Home() {
  return (
    <ResponsiveProvider>
      <Header />
      <BodyContainer />
    </ResponsiveProvider>
  );
}
