import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type searchState = {
  searchValue: string;
};

const initialState: searchState = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { updateSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
