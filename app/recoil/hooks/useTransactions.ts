import { useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  transactionsState,
  editingIdState,
  transactionTypesState,
  type StatementItemInterface,
  type TransactionType,
} from "../atoms/transactionAtoms";

export type NewTransaction = Omit<StatementItemInterface, "id">;
export type EditPayload = Omit<StatementItemInterface, "id">;

export function useTransactions() {
  const [transactions, setTransactions] = useRecoilState(transactionsState);
  const [editingId, setEditingId] = useRecoilState(editingIdState);
  const transactionTypes = useRecoilValue(transactionTypesState);
  const setTransactionsOnly = useSetRecoilState(transactionsState);

  // Hidratar com mock
  const loadMockTransactions = useCallback(
    (mock: StatementItemInterface[]) => {
      setTransactionsOnly(mock);
    },
    [setTransactionsOnly]
  );

  const addTransaction = useCallback(
    (transaction: NewTransaction) => {
      const nextId =
        transactions.length > 0
          ? Math.max(...transactions.map((t) => t.id ?? 0)) + 1
          : 1;
      setTransactions((prev) => [...prev, { ...transaction, id: nextId }]);
    },
    [transactions, setTransactions]
  );

  const editTransaction = useCallback(
    (id: number, updated: EditPayload) => {
      setTransactions((prev) =>
        prev.map((tx) => (tx.id === id ? { ...updated, id } : tx))
      );
    },
    [setTransactions]
  );

  const deleteTransaction = useCallback(
    (id: number) => {
      setTransactions((prev) => prev.filter((tx) => tx.id !== id));
    },
    [setTransactions]
  );

  return {
    // Estado
    transactions,
    editingId,
    setEditingId,
    transactionTypes,

    // Operações
    addTransaction,
    editTransaction,
    deleteTransaction,

    // Utilitário (mock)
    loadMockTransactions,
  };
}
