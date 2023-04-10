import { IMovie } from '../components/types';

const _apiBase = 'https://api.themoviedb.org/3';
const _apiKey = '75b017a3a227731c05610048a94948e5';
export const _baseImagePath = 'image.tmdb.org/t/p/w300';

const getResource = async (url: string) => {
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
