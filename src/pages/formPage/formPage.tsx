import React, { FC, useState } from 'react';

import './formPage.scss';

import Form from '../../components/form';
import { ICardForm } from '../../components/cardForm/cardForm';
import CardFormList from '../../components/cardForm-list';

const FormPage: FC = () => {
  let cardId = 1;
  const [cardsForm, setCardsForm] = useState<ICardForm[]>([]);

  const addCardForm = (card: ICardForm): void => {
    const newCard = createCard(card);

    setCardsForm((prevCardsForm) => {
      const newArr = [...prevCardsForm];
      newArr.push(newCard);

      return newArr;
    });
  };

  const createCard = (cardData: ICardForm) => {
    const { userName, gender, birthday, country, isConsentPersonalData, feedbackText, imageSrc } = cardData;

    return {
      userName: userName,
      gender: gender,
      birthday: birthday,
      country: country,
      isConsentPersonalData,
      feedbackText,
      imageSrc,
      id: cardId++,
    };
  };

  return (
    <div className='form-page container' role='form-page'>
      <h2 className='page__title'>Form page</h2>
      <Form addCardForm={addCardForm} />
      <CardFormList cardsForm={cardsForm} />
    </div>
  );
};

export default FormPage;
