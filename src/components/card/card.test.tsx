import { render, screen } from '@testing-library/react';

import Card from './card';

describe('test Card component', () => {
  const product = {
    id: 22,
    title: 'Elbow Macaroni - 400 gm',
    description: 'Product details of Bake Parlor Big Elbow Macaroni - 400 gm',
    price: 14,
    discountPercentage: 15.58,
    rating: 4.57,
    stock: 146,
    brand: 'Bake Parlor Big',
    category: 'groceries',
    thumbnail: 'https://i.dummyjson.com/data/products/22/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/22/1.jpg',
      'https://i.dummyjson.com/data/products/22/2.jpg',
      'https://i.dummyjson.com/data/products/22/3.jpg',
    ],
  };

  test('it renders', () => {
    render(<Card product={product} />);
    expect(screen.getByText(/Elbow Macaroni/i)).toBeInTheDocument();
  });
});
