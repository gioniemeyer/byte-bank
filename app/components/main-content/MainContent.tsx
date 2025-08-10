"use client";
import { ResponsiveProvider } from "@/app/contexts/ResponsiveContext";
import { TransactionProvider } from "@/app/contexts/TransactionContext";
import BodyContainer from "../BodyContainer";
import Header from "../header-components/Header";

/** Componente que exibe o conteúdo principal da aplicação. */
export default function MainContent() {
  return (
    <ResponsiveProvider>
      <TransactionProvider>
        <Header />
        <BodyContainer />
      </TransactionProvider>
    </ResponsiveProvider>
  );
}
