import React, { Component } from 'react';

import './formPage.scss';

import Form from '../../components/form';
import { ICardForm } from '../../components/cardForm/cardForm';
import CardFormList from '../../components/cardForm-list';

type FormPageProps = {};
type FormPageState = {
  cardsForm: ICardForm[];
};

export default class FormPage extends Component<FormPageProps, FormPageState> {
  cardId = 1;

  state = {
    cardsForm: [],
  };

  addCardForm = (card: ICardForm): void => {
    const newCard = this.createCard(card);

    this.setState(({ cardsForm }) => {
      const newArr = [...cardsForm];
      newArr.push(newCard);

      return {
        cardsForm: newArr,
      };
    });
  };

  createCard(cardData: ICardForm) {
    const { userName, gender, birthday, country, isConsentPersonalData, feedbackText, imageSrc } = cardData;

    return {
      userName: userName,
      gender: gender,
      birthday: birthday,
      country: country,
      isConsentPersonalData,
      feedbackText,
      imageSrc,
      id: this.cardId++,
    };
  }

  render() {
    const { cardsForm } = this.state;

    return (
      <div className='form-page container'>
        <h2 className='page__title'>Form page</h2>
        <Form addCardForm={this.addCardForm} />
        <CardFormList cardsForm={cardsForm} />
      </div>
    );
  }
}
