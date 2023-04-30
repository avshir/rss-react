import searchReducer, { updateSearchValue } from '../searchSlice';

const initialState = {
  searchValue: '',
};

describe('test searchSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = searchReducer(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });

  it('should add new search value with "updateSearchValue" action', () => {
    const action = { type: updateSearchValue.type, payload: 'test value' };

    const result = searchReducer(initialState, action);
    expect(result.searchValue).toBe('test value');
  });
});
