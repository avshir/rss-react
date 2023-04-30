import React, { FC } from 'react';

import CardForm from '../cardForm';
import { useAppSelector } from '../../../hook';

import './cardForm-list.scss';

const CardFormList: FC = () => {
  const cardsForm = useAppSelector((state) => state.formReducer.cardsForm);

  const cards = cardsForm.map((card) => {
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
