import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import { IMovie } from '../components/types';
import { getMovieById, getMoviesBySearch, getTrendingMovies } from '../services/movies-services';

type timeByTrendingMovies = 'week' | 'day';

export const fetchTrendingMovies = createAsyncThunk<IMovie[], timeByTrendingMovies, { rejectValue: string }>(
  'movies/fetchTrendingMovies',
  async function (time, { rejectWithValue }) {
    try {
      const trendingMovies = await getTrendingMovies(time);
      return trendingMovies;
    } catch (err) {
      console.log('error in fetchTrendingMovies: ', (err as Error).message);
      return rejectWithValue('fetchTrendingMovies do not work!');
    }
  }
);

export const fetchMoviesBySearch = createAsyncThunk<IMovie[], string, { rejectValue: string }>(
  'movies/fetchMoviesBySearch',
  async function (searchValue, { rejectWithValue }) {
    try {
      const movies = await getMoviesBySearch(searchValue);
      return movies;
    } catch (err) {
      console.log('error in fetchMoviesBySearch: ', (err as Error).message);
      return rejectWithValue('fetchMoviesBySearch do not work!');
    }
  }
);

export const fetchMovieById = createAsyncThunk<IMovie, number, { rejectValue: string }>(
  'movies/fetchMovieById',
  async function (movie_id, { rejectWithValue }) {
    try {
      const movieById = await getMovieById(movie_id);
      return movieById;
    } catch (err) {
      console.log('error in fetchMovieById: ', (err as Error).message);
      return rejectWithValue('fetchMovieById do not work!');
    }
  }
);

export type moviesState = {
  movies: IMovie[];
  trendingMovies: IMovie[];
  movieId: number | null;
  movieById: IMovie | null;
  isModalOpen: boolean;
  loading: boolean;
  error: string | null;
};

export const initialState: moviesState = {
  movies: [],
  trendingMovies: [],
  movieId: null,
  movieById: null,
  isModalOpen: false,
  loading: true,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    updateMovieId(state, action: PayloadAction<number>) {
      state.movieId = action.payload;
    },
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.trendingMovies = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchMoviesBySearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMoviesBySearch.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.movieById = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
        state.isModalOpen = false;
        console.log(state.error);
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const { updateMovieId, toggleModal } = moviesSlice.actions;

export default moviesSlice.reducer;
