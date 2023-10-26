import { configureStore } from '@reduxjs/toolkit';
import ideasReducer from './IdeaSlice';

export const store = configureStore({
  reducer: {
    ideas: ideasReducer,
  },
});
