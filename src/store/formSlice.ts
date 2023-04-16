import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardForm } from '../components/cardForm/cardForm';

type formState = {
  cardsForm: ICardForm[];
};

const initialState: formState = {
  cardsForm: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCardForm(state, action: PayloadAction<ICardForm>) {
      state.cardsForm = [...state.cardsForm, action.payload];
    },
  },
});

export const { addCardForm } = formSlice.actions;

export default formSlice.reducer;
