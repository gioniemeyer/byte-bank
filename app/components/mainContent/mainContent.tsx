"use client";

import { ResponsiveProvider } from "@/app/contexts/ResponsiveContext";
import Header from "../headerComponents/Header";
import { TransactionProvider } from "@/app/contexts/TransactionContext";
import BodyContainer from "../BodyContainer";

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
