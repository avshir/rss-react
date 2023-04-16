import { testCardForm } from '../../testData/testCardForm';
import formReducer, { addCardForm } from '../formSlice';

const initialState = {
  cardsForm: [],
};

describe('test formSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = formReducer(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });

  it('should add new cardForm with "addCardForm" action', () => {
    const action = { type: addCardForm.type, payload: testCardForm };

    const result = formReducer(initialState, action);
    expect(result.cardsForm.length).toBe(1);
    expect(result.cardsForm[0].userName).toBe('Anna Sh');
  });
});
