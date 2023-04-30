import { render, screen, fireEvent } from '@testing-library/react';

import Card from './card';
import { dataMovie } from '../../testData/dataMovie';

import * as reduxHooks from 'react-redux';
import * as actions from './../../store/moviesSlice';
jest.mock('react-redux');
const mockedUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('test Card component', () => {
  test('it renders', () => {
    render(<Card item={dataMovie} />);
    expect(screen.getByRole('card-item')).toBeInTheDocument();
  });

  test('it renders title of film "Fight Club", release-year "1999"', () => {
    render(<Card item={dataMovie} />);
    expect(screen.getByText(/Fight Club/i)).toBeInTheDocument();
    expect(screen.getByText(/1999/i)).toBeInTheDocument();
  });

  test('dispatch actions called ', () => {
    const dispatch = jest.fn();
    mockedUseDispatch.mockReturnValue(dispatch);
    const mockedToggleModal = jest.spyOn(actions, 'toggleModal');
    const mockedUpdateMovieId = jest.spyOn(actions, 'updateMovieId');

    render(<Card item={dataMovie} />);

    const button = screen.getByRole('showMoreInfo-button');
    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedToggleModal).toHaveBeenCalledTimes(1);

    expect(mockedUpdateMovieId).toHaveBeenCalledTimes(1);
    expect(mockedUpdateMovieId).toHaveBeenCalledWith(550); //get id=550 from dataMovie
  });
});
