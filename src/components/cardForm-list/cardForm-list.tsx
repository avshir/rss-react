import React, { FC } from 'react';

import { ICardForm } from '../cardForm/cardForm';
import CardForm from '../cardForm';

import './cardForm-list.scss';

type CardFormListProps = {
  cardsForm: ICardForm[];
};

const CardFormList: FC<CardFormListProps> = (props: CardFormListProps) => {
  const cards = props.cardsForm.map((card) => {
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
};

export default CardFormList;
