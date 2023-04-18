import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import CardsList from './cards-list';
import { dataMovie } from '../../testData/dataMovie';
import { IMovie } from '../types';

jest.mock('react-redux');

describe('test CardsList component', () => {
  const itemsMoke: IMovie[] = [dataMovie];

  test('it renders', async () => {
    render(<CardsList items={itemsMoke} />);

    const cardsList = await waitFor(() => screen.getByTestId('cards-list'));
    expect(cardsList).toBeInTheDocument();
  });

  test('should be render all Card in CardsList ', () => {
    render(<CardsList items={itemsMoke} />);
    expect(screen.getAllByRole('card-item').length).toBe(itemsMoke.length);
  });
});
