import { atom } from "recoil";

export type TransactionType = "Depósito" | "Transferência";

export interface StatementItemInterface {
  id: number;
  date: string; // ISO string
  type: TransactionType;
  value: number;
}

// Catálogo de tipos (Depósito, Transferência)
export const transactionTypesState = atom<TransactionType[]>({
  key: "transactionTypesState",
  default: ["Depósito", "Transferência"],
});

// Lista de transações
export const transactionsState = atom<StatementItemInterface[]>({
  key: "transactionsState",
  default: [],
});

// ID em edição (substitui editingId do Context)
export const editingIdState = atom<number | null>({
  key: "editingIdState",
  default: null,
});
