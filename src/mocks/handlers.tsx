import { rest } from 'msw';
import { dataMovie } from '../data/dataMovie';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true');

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get('https://api.themoviedb.org/3/trending/movie/week', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [dataMovie, dataMovie, dataMovie],
      })
    );
  }),
  rest.get('https://api.themoviedb.org/3/trending/movie/day', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [dataMovie],
      })
    );
  }),
  rest.get('https://api.themoviedb.org/3/movie/550', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dataMovie));
  }),
  rest.get('https://api.themoviedb.org/3/search/movie', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [dataMovie, dataMovie, dataMovie, dataMovie, dataMovie],
      })
    );
  }),
];
