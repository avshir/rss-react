import * as toolkitRaw from '@reduxjs/toolkit';
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { configureStore } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

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
