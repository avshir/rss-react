import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Page404 from './page404';

describe('test Page404 component', () => {
  test('it renders', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <Page404 />
      </MemoryRouter>
    );
    screen.debug();

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
