import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import moviesReducer from './moviesSlice';
import formReducer from './formSlice';

const store = configureStore({
  reducer: {
    searchReducer: searchReducer,
    moviesReducer: moviesReducer,
    formReducer: formReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
