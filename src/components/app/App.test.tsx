import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

import * as reduxHooks from 'react-redux';
jest.mock('react-redux');
const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockedUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');
import { initialState } from '../../store/moviesSlice';

describe('test App component', () => {
  test('it renders', () => {
    mockedUseSelector.mockReturnValue(initialState);
    const dispatch = vi.fn();
    mockedUseDispatch.mockReturnValue(dispatch);

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('app')).toBeInTheDocument();
    screen.debug();
  });

  test('renders on a bad page page404', () => {
    render(
      <MemoryRouter initialEntries={['/bad-route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    screen.debug();
  });
});
