import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
    // Add reducers here
    },
});

console.log("store.js: Store configured", store ? "successfully" : "failed");

export default store;
