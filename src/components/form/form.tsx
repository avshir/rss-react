import React, { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import './form.scss';
import { ICardForm } from '../cardForm/cardForm';
import { errorTextMessage } from './form-utils';

type FormProps = {
  addCardForm: (card: ICardForm) => void;
};

type FormValues = {
  userName: string;
  country: string;
  birthday: string;
  feedbackText: string;
  image: FileList;
  isConsentPersonalData: boolean;
  gender: string;
};

const Form: FC<FormProps> = (props: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ mode: 'onSubmit' });

  const [success, setSuccess] = useState('');

  const showSuccessMessage = () => {
    setSuccess('Your feedback will be added! Thanks');

    setTimeout(() => {
      setSuccess('');
    }, 3000);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { image, ...dataLast } = data;
    const imageSrc: string = URL.createObjectURL(image[0]);
    const newCardForm: ICardForm = { imageSrc, ...dataLast };

    props.addCardForm(newCardForm);

    showSuccessMessage();
    reset();
  };

  const successMessage = success ? (
    <div className='form__success-message popup'>
      <div className='popup__content'>{success}</div>
    </div>
  ) : null;

  return (
    <form id='add-card-form' role='form' className='form' action='/' method='post' onSubmit={handleSubmit(onSubmit)}>
      {successMessage}

      <h3 className='form__title'>Add feedback</h3>
      <div className='form__item'>
        <label className='form__label' htmlFor='userName'>
          Your name
        </label>
        <input
          className='form__input user-name'
          type='text'
          placeholder='Name'
          {...register('userName', { required: true, minLength: 3, maxLength: 20 })}
          role='user-name'
        ></input>
        {errors.userName && <span className='form__error'>{errorTextMessage.userName}</span>}
      </div>

      <div className='form__item'>
        <label className='form__label' htmlFor='birthday'>
          Your birthday
        </label>
        <input
          className='form__input date'
          type='date'
          {...register('birthday', { required: true })}
          role='date-birthday'
        ></input>
        {errors.birthday && <span className='form__error'>{errorTextMessage.birthday}</span>}
      </div>

      <div className='form__item'>
        <label className='form__label' htmlFor='country'>
          Where are you from?
        </label>
        <select className='form__input' {...register('country', { required: true })} role='select-country'>
          <option value=''>Choose country</option>
          <option value='Belarus'>Belarus</option>
          <option value='Poland'>Poland</option>
          <option value='Lithuania'>Lithuania</option>
          <option value='France'>France</option>
          <option value='Sweden'>Sweden</option>
        </select>
        {errors.country && <span className='form__error'>{errorTextMessage.country}</span>}
      </div>

      <div className='form__radio'>
        <div className='form__radio-item'>
          <input
            className='form__radio-input'
            type='radio'
            defaultValue='female'
            defaultChecked
            {...register('gender')}
          />
          <label htmlFor='female'>female</label>
        </div>
        <div className='form__radio-item'>
          <input className='form__radio-input' type='radio' defaultValue='male' {...register('gender')} />
          <label htmlFor='male'>male</label>
        </div>
      </div>

      <div className='form__item'>
        <label className='form__label' htmlFor='image'>
          Profile picture
        </label>
        <input
          className='form__input user-image'
          type='file'
          accept='image/*,.pdf'
          {...register('image', { required: true })}
          role='profile'
        ></input>
        {errors.image && <span className='form__error'>{errorTextMessage.imageSrc}</span>}
      </div>

      <div className='form__item'>
        <label className='form__label' htmlFor='feedbackText'>
          Your feedback
        </label>
        <textarea
          role='textarea'
          className='form__input form__textarea'
          {...register('feedbackText', { required: true, minLength: 5, maxLength: 50 })}
        ></textarea>
        {errors.feedbackText && <span className='form__error'>{errorTextMessage.feedbackText}</span>}
      </div>

      <div className='form__item-checkbox'>
        <input
          className='form__input-checkbox'
          type='checkbox'
          {...register('isConsentPersonalData', { required: true })}
        ></input>
        <label className='form__label-checkbox' htmlFor='isConsentPersonalData'>
          I consent to my personal data
        </label>
      </div>
      {errors.isConsentPersonalData && <span className='form__error'>{errorTextMessage.isConsent}</span>}

      <div className='form__wrapper'>
        <button className='btn' type='submit'>
          Submit
        </button>
        <button className='btn btn--col-5' type='reset'>
          Reset
        </button>
      </div>
    </form>
  );
};

export default Form;
