import { configureStore } from "@reduxjs/toolkit";
import postsReducer  from "./slices/postSlice";
import commentsReducer  from "./slices/commentSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
    },
});

console.log("store.js: Store configured", store ? "successfully" : "failed");

export default store;
