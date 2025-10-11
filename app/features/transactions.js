import { createSelector, createSlice } from "@reduxjs/toolkit";

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
        id: state.transactions.length + 1,
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
