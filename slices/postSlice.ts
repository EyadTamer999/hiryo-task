import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Post from '../types/Post';

const initialState: Post[] = [];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      return action.payload;
      },
  },
});

export const { setPosts } = postSlice.actions;

//selectors
export const selectPosts = (state: { posts: Post[] }) => state.posts;
export const selectPostById = (postId: number) => (state: { posts: Post[] }) => state.posts.find((post) => post.id === postId);

export default postSlice.reducer;



