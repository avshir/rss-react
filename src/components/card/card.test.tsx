import { render, screen } from '@testing-library/react';

import Card from './card';
import { dataMovie } from '../../data/dataMovie';

describe('test Card component', () => {
  test('it renders', () => {
    render(<Card item={dataMovie} />);
    expect(screen.getByRole('card-item')).toBeInTheDocument();
  });

  test('it renders title of film "Fight Club"', () => {
    render(<Card item={dataMovie} />);
    expect(screen.getByText(/Fight Club/i)).toBeInTheDocument();
  });

  test('it renders year release of film "Fight Club"', () => {
    render(<Card item={dataMovie} />);
    expect(screen.getByText(/1999/i)).toBeInTheDocument();
  });
});
