"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { statementMock, StatementItemInterface } from "../mocks/statementMock"

type TransactionContextType = {
  transactions: StatementItemInterface[];
  addTransaction: (transaction: Omit<StatementItemInterface, "id">) => void;
};

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<StatementItemInterface[]>(statementMock);

  const addTransaction = (newTx: Omit<StatementItemInterface, "id">) => {
    const nextId =   transactions.length > 0 ? Math.max(...transactions.map(t => t.id ?? 0)) + 1 : 1;
    setTransactions(prev => [...prev, { ...newTx, id: nextId }]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (!context) throw new Error("useTransactions must be used inside TransactionProvider");
  return context;
};