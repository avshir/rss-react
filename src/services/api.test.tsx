import { getTrendingMovies } from './movies-services';

describe('test API component with mws', () => {
  it('receives all requested data from Api "https://api.themoviedb.org/3/trending/movie/week" ', async () => {
    const expectedLength = 3;
    const data = await getTrendingMovies('week');
    console.log('data', data);
    expect(data).toHaveLength(expectedLength);
  });

  it('receives all requested data from Api "https://api.themoviedb.org/3/trending/movie/day" ', async () => {
    const expectedLength = 1;
    const data = await getTrendingMovies('day');
    console.log('data', data);
    expect(data).toHaveLength(expectedLength);
  });
});
