import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import moviesReducer from './moviesSlice';

const store = configureStore({
  reducer: {
    searchReducer: searchReducer,
    moviesReducer: moviesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
