import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-redux');

describe('test App component', () => {
  test('it renders', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
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
