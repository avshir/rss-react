import React, { Component } from 'react';

import { ICardForm } from '../cardForm/cardForm';
import CardForm from '../cardForm';

import './cardForm-list.scss';

type CardFormListProps = {
  cardsForm: ICardForm[];
};
type CardFormListState = {};

export default class CardFormList extends Component<CardFormListProps, CardFormListState> {
  render() {
    const cards = this.props.cardsForm.map((card) => {
      const { id } = card;

      return (
        <li key={id} className='cards-list__item'>
          <CardForm card={card} />
        </li>
      );
    });

    return (
      <ul className='card-form-list' data-testid='card-form-list'>
        {cards}
      </ul>
    );
  }
}
