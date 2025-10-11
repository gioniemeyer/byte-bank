import { createSelector, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = {
  transactions: [],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push({
        ...action.payload,
        id: uuid(),
      });
    },
  },
});

export const selectCurrentBalance = createSelector(
  (state) => state.transactions.transactions,
  (transactions) =>
    transactions.reduce((acc, transaction) => acc + transaction.value, 0)
);

export const { addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
