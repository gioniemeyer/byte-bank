"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { statementMock, StatementItemInterface } from "../mocks/statement-mock";

type TransactionContextType = {
  transactions: StatementItemInterface[];
  editTransaction: (
    id: string,
    updated: Omit<StatementItemInterface, "id">
  ) => void;
  deleteTransaction: (id: string) => void;
  editingId: string | null;
  setEditingId: (id: string | null) => void;
};

const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined
);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] =
    useState<StatementItemInterface[]>(statementMock);
  const [editingId, setEditingId] = useState<string | null>(null);

  const editTransaction = (
    id: string,
    updated: Omit<StatementItemInterface, "id">
  ) => {
    setTransactions((prev) =>
      prev.map((tx) => (tx.id === id ? { ...updated, id } : tx))
    );
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((tx) => tx.id !== id));
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        editTransaction,
        deleteTransaction,
        editingId,
        setEditingId,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (!context)
    throw new Error("useTransactions must be used inside TransactionProvider");
  return context;
};
