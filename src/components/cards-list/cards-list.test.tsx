import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import CardsList from './cards-list';
import { dataGoods } from '../../data/data';

describe('test CardsList component', () => {
  const products = dataGoods.products.slice(8, 16);

  test('it renders', async () => {
    render(<CardsList products={products} />);

    const cardsList = await waitFor(() => screen.getByTestId('cards-list'));
    expect(cardsList).toBeInTheDocument();
  });
});
