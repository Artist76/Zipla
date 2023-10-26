import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const ideasSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {
    addIdea: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addIdea } = ideasSlice.actions;
export default ideasSlice.reducer;
