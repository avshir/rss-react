import React from 'react';
import { screen, render } from '@testing-library/react';

import { server } from './../../mocks/server';
import { rest } from 'msw';

import HomePage from './homePage';
import DetailInfo from '../../components/detailInfo';
import { dataMovie } from '../../data/dataMovie';

describe('test HomePage component', () => {
  test('it renders', () => {
    render(<HomePage />);
    expect(screen.getByRole('home-page')).toBeInTheDocument();
  });

  test('show spinner component', async () => {
    const { findByTestId } = render(<HomePage />);
    expect(await findByTestId('spinner')).toBeInTheDocument();
  });

  test('render cards from mocks API ', async () => {
    render(<HomePage />);
    const expectedLength = 3; //length arrMovies in mock API in mocks/server.tsx
    const movies = await screen.findAllByRole('card-item');
    expect(movies).toHaveLength(expectedLength);
  });

  test('render error ', async () => {
    server.use(
      rest.get('https://api.themoviedb.org/3/trending/movie/week', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<HomePage />);
    const error = await screen.findByTestId('error-indicator');
    expect(error).toBeInTheDocument();
  });

  test('render detail-info on Home Page ', async () => {
    render(<DetailInfo info={dataMovie} />);
    const item = screen.getByTestId('detail-info');
    expect(item).toBeInTheDocument();
  });
});
