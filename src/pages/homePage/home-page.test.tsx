import React from 'react';
import { screen, render } from '@testing-library/react';

import HomePage from './homePage';

describe('test HomePage component', () => {
  test('it renders', () => {
    render(<HomePage />);
    expect(screen.getByRole('home-page')).toBeInTheDocument();
  });

  test('show spinner component', async () => {
    const { findByTestId } = render(<HomePage />);
    expect(await findByTestId('spinner')).toBeInTheDocument();
  });
});
