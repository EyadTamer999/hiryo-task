import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Comment from '../types/Comment';

const initialState: Comment[] = [];

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state, action: PayloadAction<Comment[]>) {
      return action.payload;
      },
  },
});

export const { setComments } = commentSlice.actions;

//selectors
export const selectComments = (state: { comments: Comment[] }) => state.comments;

export default commentSlice.reducer;
