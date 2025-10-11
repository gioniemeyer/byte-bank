// store.ts
import { configureStore } from "@reduxjs/toolkit";
import transactionTypesReducer from "../features/transactionTypes/transactionTypeSlice";

const store = configureStore({
  reducer: {
    transactionTypes: transactionTypesReducer,
  },
});

export default store;
