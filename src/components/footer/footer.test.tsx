import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './footer';

describe('test Header component', () => {
  test('it renders', () => {
    render(<Footer />);
    expect(screen.getByText(/avshir/i)).toBeInTheDocument();
  });
});
