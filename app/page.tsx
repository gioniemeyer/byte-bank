"use client";
import MainContent from "./components/main-content/MainContent";
import { Provider } from "react-redux";
import store from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <MainContent />
    </Provider>
  );
}
