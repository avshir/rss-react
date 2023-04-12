import { getMovieById, getMoviesBySearch, getTrendingMovies } from './movies-services';

describe('test API component with mws', () => {
  it('receives all requested data from Api "https://api.themoviedb.org/3/trending/movie/week" ', async () => {
    const expectedLength = 3;
    const data = await getTrendingMovies('week');
    expect(data).toHaveLength(expectedLength);
  });

  it('receives all requested data from Api "https://api.themoviedb.org/3/trending/movie/day" ', async () => {
    const expectedLength = 1;
    const data = await getTrendingMovies('day');
    expect(data).toHaveLength(expectedLength);
  });

  it('receive requested movie-data from Api "https://api.themoviedb.org/3/movie/550" ', async () => {
    const movie = await getMovieById(550);
    expect(movie).toBeTruthy();
  });

  it('receives all requested data from Api "https://api.themoviedb.org/3/search/movie" ', async () => {
    const expectedLength = 5;
    const data = await getMoviesBySearch('avatar');
    expect(data).toHaveLength(expectedLength);
  });
});
