"use client";
import { ResponsiveProvider } from "@/app/contexts/ResponsiveContext";
// import { TransactionProvider } from "@/app/contexts/TransactionContext"; // REMOVIDO
import { SidebarProvider } from "@/app/contexts/SidebarContext";
// import RecoilBoundary from "@/app/providers/RecoilBoundary"; // REMOVER AQUI
import BodyContainer from "../BodyContainer";
import Header from "../header-components/Header";

/** Componente que exibe o conteúdo principal da aplicação. */
export default function MainContent() {
  return (
    <ResponsiveProvider>
      <SidebarProvider>
        <Header />
        <BodyContainer />
      </SidebarProvider>
    </ResponsiveProvider>
  );
}
