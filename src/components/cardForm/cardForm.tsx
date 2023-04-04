import React, { FC } from 'react';

import './cardForm.scss';

export interface ICardForm {
  id?: number;
  userName: string;
  gender: string;
  birthday: string;
  country: string;
  feedbackText: string;
  isConsentPersonalData?: boolean;
  imageSrc?: string;
}

type CardFormProps = { card: ICardForm };

const CardForm: FC<CardFormProps> = (props: CardFormProps) => {
  const { card } = props;
  const { userName, gender, birthday, country, isConsentPersonalData, feedbackText, imageSrc } = card;

  return (
    <div className='card' role='card-form'>
      <div className='card__img'>
        <div className='card__img-wrapper'>
          <img src={imageSrc} alt='image profile' />
        </div>
      </div>
      <div className='card__main-info'>
        <div className='card__title'>{userName}</div>
        <div className='card__country'>{country}</div>
      </div>

      <div className='card__second-info'>
        <div className='card__item'>
          <span>Birthday: </span>
          {birthday}
        </div>
        <div className='card__item'>{gender}</div>
      </div>

      <div className='card__info'>
        <p className='card__feedback-text'>{feedbackText}</p>
      </div>
      <div className='card__consent-data'>
        Do you consent to my personal data? <span>{isConsentPersonalData ? 'Yes' : 'No'}</span>
      </div>
    </div>
  );
};

export default CardForm;
