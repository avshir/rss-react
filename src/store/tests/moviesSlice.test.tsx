import { dataMovie } from '../../testData/dataMovie';
import moviesReducer, {
  updateMovies,
  updateTrendingMovies,
  updateMovieId,
  updateMovieById,
  moviesState,
} from '../moviesSlice';

const initialState: moviesState = {
  movies: [],
  trendingMovies: [],
  movieId: null,
  movieById: null,
};

describe('test moviesSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = moviesReducer(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });

  it('should add movies with "updateMovies" action', () => {
    const action = { type: updateMovies.type, payload: [dataMovie] };

    const result = moviesReducer(initialState, action);
    expect(result.movies.length).toBe(1);
    expect(result.movies[0].title).toBe('Fight Club');
  });

  it('should add trendingMovies with "updateTrendingMovies" action', () => {
    const action = { type: updateTrendingMovies.type, payload: [dataMovie] };

    const result = moviesReducer(initialState, action);
    expect(result.trendingMovies.length).toBe(1);
    expect(result.trendingMovies[0].id).toBe(550);
  });

  it('should add movieId with "updateMovieId" action', () => {
    const action = { type: updateMovieId.type, payload: 355 };

    const result = moviesReducer(initialState, action);
    expect(result.movieId).toBe(355);
  });

  it('should add movie by id with "updateMovieById" action', () => {
    const action = { type: updateMovieById.type, payload: dataMovie };

    const result = moviesReducer(initialState, action);
    expect(result.movieById).toBe(dataMovie);
    expect(result.movieById?.title).toBe('Fight Club');
  });
});
