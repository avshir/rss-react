import React from 'react';
import { screen, render } from '@testing-library/react';

import { server } from './../../mocks/server';
import { rest } from 'msw';

import HomePage from './homePage';
import DetailInfo from '../../components/modal/detailInfo';
import { dataMovie } from '../../testData/dataMovie';

import * as reduxHooks from 'react-redux';
jest.mock('react-redux');
const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector');
import { moviesState } from '../../store/moviesSlice';

const initialState: moviesState = {
  movies: [],
  trendingMovies: [],
  movieId: null,
  movieById: null,
};

describe('test HomePage component', () => {
  test('it renders with empty list movies', () => {
    mockedUseSelector.mockReturnValue(initialState);
    render(<HomePage />);
    expect(screen.getByRole('home-page')).toBeInTheDocument();
  });

  test('show spinner component', async () => {
    const { findByTestId } = render(<HomePage />);
    expect(await findByTestId('spinner')).toBeInTheDocument();
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
    mockedUseSelector.mockReturnValue(dataMovie);
    render(<DetailInfo />);
    const item = screen.getByTestId('detail-info');
    expect(item).toBeInTheDocument();
  });
});
