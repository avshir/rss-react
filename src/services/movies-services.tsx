import { IMovie } from '../components/types';

const _apiBase = 'https://api.themoviedb.org/3';
const _apiKey = '75b017a3a227731c05610048a94948e5';
export const _baseImagePath = 'image.tmdb.org/t/p/w300';
const _lang = 'en-US';

export const getResource = async (url: string) => {
  const res = await fetch(`${_apiBase}${url}?api_key=${_apiKey}`);

  //handle all answers, except 200 ok
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`);
  }
  return await res.json();
};

export const getTrendingMovies = async (time: 'week' | 'day'): Promise<IMovie[]> => {
  const res = await getResource(`/trending/movie/${time}`);
  const trendingMovies: IMovie[] = res.results;
  return trendingMovies;
};

export const getMovieById = async (movie_id: number): Promise<IMovie> => {
  const res = await getResource(`/movie/${movie_id}`);
  const movie: IMovie = res;
  return movie;
};

//https://api.themoviedb.org/3/search/movie?api_key=75b017a3a227731c05610048a94948e5&query=avatar&page=1&include_adult=false
export const getMoviesBySearch = async (searchText: string): Promise<IMovie[]> => {
  const res = await fetch(
    `${_apiBase}/search/movie?api_key=${_apiKey}&language=${_lang}&query=${searchText}}&include_adult=false`
  );

  //handle all answers, except 200 ok
  if (!res.ok) {
    throw new Error(`Could not fetch ${searchText} movies, received ${res.status}`);
  }
  const data = await res.json();
  const movies: IMovie[] = await data.results;
  return movies;
};
