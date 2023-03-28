import React, { Component } from 'react';

import './cards-list.scss';

import Card from '../card';
import { IProduct } from '../types';

type CardListProps = {
  products: IProduct[];
};
type CardListState = {};

export default class CardList extends Component<CardListProps, CardListState> {
  cards = this.props.products.slice(0, 8).map((product) => {
    const { id } = product;

    return (
      <li key={id} className='cards-list__item'>
        <Card product={product} />
      </li>
    );
  });

  render() {
    return (
      <ul className='cards-list' data-testid='cards-list'>
        {this.cards}
      </ul>
    );
  }
}
