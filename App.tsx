import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";
import AppContent from "./AppContent";

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
