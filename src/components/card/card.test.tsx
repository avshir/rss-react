import { render, screen } from '@testing-library/react';

import Card from './card';
import { dataMovie } from '../../data/dataMovie';

describe('test Card component', () => {
  const mockFunction = jest.fn();

  test('it renders', () => {
    render(<Card item={dataMovie} setIsModalOpen={mockFunction} showDetailInfo={mockFunction} />);
    expect(screen.getByRole('card-item')).toBeInTheDocument();
  });

  test('it renders title of film "Fight Club", release-year "1999"', () => {
    render(<Card item={dataMovie} setIsModalOpen={mockFunction} showDetailInfo={mockFunction} />);
    expect(screen.getByText(/Fight Club/i)).toBeInTheDocument();
    expect(screen.getByText(/1999/i)).toBeInTheDocument();
  });
});
