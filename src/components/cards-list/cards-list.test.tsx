import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import CardsList from './cards-list';
import { dataMovie } from '../../data/dataMovie';
import { IMovie } from '../types';

describe('test CardsList component', () => {
  const itemsMoke: IMovie[] = [dataMovie, dataMovie];
  const mockFunction = jest.fn();

  test('it renders', async () => {
    render(<CardsList items={itemsMoke} setIsModalOpen={mockFunction} showDetailInfo={mockFunction} />);

    const cardsList = await waitFor(() => screen.getByTestId('cards-list'));
    expect(cardsList).toBeInTheDocument();
  });

  test('should be render all Card in CardsList ', () => {
    render(<CardsList items={itemsMoke} setIsModalOpen={mockFunction} showDetailInfo={mockFunction} />);
    expect(screen.getAllByRole('card-item').length).toBe(itemsMoke.length);
  });
});
