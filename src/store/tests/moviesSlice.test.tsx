import moviesReducer, { updateMovieId, initialState, toggleModal } from '../moviesSlice';

describe('test moviesSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = moviesReducer(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });

  it('should add movieId with "updateMovieId" action', () => {
    const action = { type: updateMovieId.type, payload: 355 };

    const result = moviesReducer(initialState, action);
    expect(result.movieId).toBe(355);
  });

  it('should toggle status isModalOpen with "toggleModal" action', () => {
    const action = { type: toggleModal.type };

    const result = moviesReducer(initialState, action);
    expect(result.isModalOpen).toBe(true);
  });
});
