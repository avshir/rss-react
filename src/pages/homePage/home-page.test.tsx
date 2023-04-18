import React from 'react';
import { screen, render } from '@testing-library/react';

import HomePage from './homePage';
import DetailInfo from '../../components/modal/detailInfo';
import { dataMovie } from '../../testData/dataMovie';

import * as reduxHooks from 'react-redux';
jest.mock('react-redux');
const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockedUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

import { initialState } from '../../store/moviesSlice';

describe('test HomePage component', () => {
  test('it renders with empty list movies', () => {
    const dispatch = jest.fn();
    mockedUseDispatch.mockReturnValue(dispatch);
    mockedUseSelector.mockReturnValue(initialState);

    render(<HomePage />);
    expect(screen.getByRole('home-page')).toBeInTheDocument();
  });

  test('show spinner component', async () => {
    const dispatch = jest.fn();
    mockedUseDispatch.mockReturnValue(dispatch);
    mockedUseSelector.mockReturnValue(initialState);

    const { findByTestId } = render(<HomePage />);
    expect(await findByTestId('spinner')).toBeInTheDocument();
  });

  test('render detail-info on Home Page ', async () => {
    mockedUseSelector.mockReturnValue(dataMovie);

    render(<DetailInfo info={dataMovie} />);
    const item = screen.getByTestId('detail-info');
    expect(item).toBeInTheDocument();
  });

  test('dispatch actions called ', async () => {
    mockedUseSelector.mockReturnValue(initialState);
    const dispatch = jest.fn();
    mockedUseDispatch.mockReturnValue(dispatch);

    render(<HomePage />);
    expect(dispatch).toHaveBeenCalled();
  });
});
