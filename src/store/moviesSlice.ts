import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from '../components/types';

type moviesState = {
  movies: IMovie[];
  trendingMovies: IMovie[];
  movieId: number | null;
  movieById: IMovie | null;
};

const initialState: moviesState = {
  movies: [],
  trendingMovies: [],
  movieId: null,
  movieById: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    updateMovies(state, action: PayloadAction<IMovie[]>) {
      state.movies = action.payload;
    },
    updateTrendingMovies(state, action: PayloadAction<IMovie[]>) {
      state.trendingMovies = action.payload;
    },
    updateMovieId(state, action: PayloadAction<number>) {
      state.movieId = action.payload;
    },
    updateMovieById(state, action: PayloadAction<IMovie>) {
      state.movieById = action.payload;
    },
  },
});

export const { updateMovies, updateTrendingMovies, updateMovieId, updateMovieById } = moviesSlice.actions;

export default moviesSlice.reducer;
