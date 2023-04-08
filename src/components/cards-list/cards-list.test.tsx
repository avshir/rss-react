import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import CardsList from './cards-list';
import { dataMovie } from '../../data/dataMovie';
import { IMovie } from '../types';

describe('test CardsList component', () => {
  const itemsMoke: IMovie[] = [dataMovie, dataMovie];

  test('it renders', async () => {
    render(<CardsList items={itemsMoke} />);

    const cardsList = await waitFor(() => screen.getByTestId('cards-list'));
    expect(cardsList).toBeInTheDocument();
  });
});
