import React from 'react';

import './cards-list.scss';

import Card from '../card';
import { IProduct } from '../types';

type CardListProps = {
  products: IProduct[];
};

const CardList = ({ products }: CardListProps) => {
  const cards = products.map((product) => {
    const { id } = product;

    return (
      <li key={id} className='cards-list__item'>
        <Card product={product} />
      </li>
    );
  });

  return (
    <ul className='cards-list' data-testid='cards-list'>
      {cards}
    </ul>
  );
};

export default CardList;
