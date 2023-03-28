import { render, screen } from '@testing-library/react';

import AboutPage from './aboutPage';

describe('test AboutPage component', () => {
  test('it renders', () => {
    render(<AboutPage />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });
});
