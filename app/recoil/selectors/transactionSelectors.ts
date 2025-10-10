import { selectorFamily, selector } from "recoil";
import {
  transactionsState,
  type StatementItemInterface,
} from "../atoms/transactionAtoms";

export const transactionByIdSelector = selectorFamily<
  StatementItemInterface | undefined,
  number
>({
  key: "transactionByIdSelector",
  get:
    (id: number) =>
    ({ get }) =>
      get(transactionsState).find((t) => t.id === id),
});

export const transactionsTotalSelector = selector<number>({
  key: "transactionsTotalSelector",
  get: ({ get }) => get(transactionsState).reduce((sum, t) => sum + t.value, 0),
});
