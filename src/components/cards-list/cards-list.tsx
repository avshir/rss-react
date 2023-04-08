import React from 'react';

import './cards-list.scss';

import Card from '../card';
import { IMovie } from '../types';

type CardListProps = {
  items: IMovie[];
};

const CardList = ({ items }: CardListProps) => {
  const cards = items.map((item) => {
    const { id } = item;

    return (
      <li key={id} className='cards-list__item'>
        <Card item={item} />
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
