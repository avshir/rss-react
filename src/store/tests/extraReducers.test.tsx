import moviesReducer, { initialState, fetchTrendingMovies, fetchMoviesBySearch, fetchMovieById } from '../moviesSlice';
import { dataMovie } from '../../testData/dataMovie';

describe('test extraReducers', () => {
  const mockData = [dataMovie];

  it('should change status with "fetchTrendingMovies.pending" action', () => {
    const state = moviesReducer(initialState, fetchTrendingMovies.pending('', 'week'));
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should fetch trendingMovies with "fetchTrendingMovies.fulfilled" action', () => {
    const action = { type: fetchTrendingMovies.fulfilled.type, payload: mockData };
    const state = moviesReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
    expect(state.trendingMovies).toBe(mockData);
  });

  it('should change status with "fetchMoviesBySearch.pending" action', () => {
    const action = { type: fetchMoviesBySearch.pending.type };
    const state = moviesReducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should fetch movies with "fetchMoviesBySearch.fulfilled" action', () => {
    const action = { type: fetchMoviesBySearch.fulfilled.type, payload: mockData };
    const state = moviesReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
    expect(state.movies).toBe(mockData);
  });

  it('should return status with "fetchMovieById.pending" action', () => {
    const action = { type: fetchMovieById.pending.type };
    const state = moviesReducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
    expect(state.movieById).toBeNull();
  });

  it('should fetch movieById with "fetchMovieById.fulfilled" action', () => {
    const action = { type: fetchMovieById.fulfilled.type, payload: dataMovie };
    const state = moviesReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
    expect(state.movieById).toBe(dataMovie);
    expect(state.movieById?.title).toBe('Fight Club');
  });

  it('should update state.error with "fetchMovieById.rejected" action', () => {
    const action = { type: fetchMovieById.rejected.type, payload: 'Server Error' };
    const state = moviesReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.movieById).toBeNull();
    expect(state.error).toBe('Server Error');
  });
});
