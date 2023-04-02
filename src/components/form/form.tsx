import React, { FC, useState, useRef, FormEvent } from 'react';

import './form.scss';
import { ICardForm } from '../cardForm/cardForm';
import { FormErrors, errorTextMessage } from './form-utils';
import { feedbackTextValidate, userNameValidate, dateBirthdayValidate } from './formValidate';

type FormProps = {
  addCardForm: (card: ICardForm) => void;
};

const Form: FC<FormProps> = (props: FormProps) => {
  const [errors, setErrors] = useState<FormErrors>({
    userName: '',
    country: '',
    birthday: '',
    feedbackText: '',
    imageSrc: '',
    isConsent: '',
  });
  const [success, setSuccess] = useState('');

  const formRef = useRef<HTMLFormElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const birthdayRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  const feedbackTextRef = useRef<HTMLTextAreaElement>(null);
  const isConsentRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const createCardForm = (): ICardForm => {
    const genderArr: HTMLInputElement[] = [...formRef.current?.['gender']];
    const gender = (genderArr.find((el) => el.checked) as HTMLInputElement).value;

    return {
      userName: userNameRef.current?.value || '',
      gender: gender || '',
      birthday: birthdayRef.current?.value || '',
      country: countryRef.current?.value || '',
      feedbackText: feedbackTextRef.current?.value || '',
      isConsentPersonalData: isConsentRef.current?.checked,
      imageSrc: imageRef.current?.files ? URL.createObjectURL(imageRef.current.files[0]) : '',
    };
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {
      userName: userNameValidate(userNameRef.current?.value || '') ? '' : errorTextMessage.userName,
      feedbackText: feedbackTextValidate(feedbackTextRef.current?.value || '') ? '' : errorTextMessage.feedbackText,
      country: formRef.current?.['country'].value ? '' : errorTextMessage.country,
      isConsent: formRef.current?.['agree-consent-data'].checked ? '' : errorTextMessage.isConsent,
      birthday: dateBirthdayValidate(formRef.current?.['date-birthday'].value) ? '' : errorTextMessage.birthday,
      imageSrc: imageRef.current?.value ? '' : errorTextMessage.imageSrc,
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((elem) => !elem);
    return isValid;
  };

  const resetErrorsInfo = () => {
    const clearErrors = { userName: '', country: '', birthday: '', feedbackText: '', imageSrc: '', isConsent: '' };
    setErrors(clearErrors);
  };

  const showSuccessMessage = () => {
    setSuccess('Your feedback will be added! Thanks');

    setTimeout(() => {
      setSuccess('');
    }, 3000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validate();

    if (isValid) {
      const newCardForm = createCardForm();
      props.addCardForm(newCardForm);

      showSuccessMessage();

      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  const successMessage = success ? (
    <div className='form__success-message popup'>
      <div className='popup__content'>{success}</div>
    </div>
  ) : null;

  return (
    <form
      id='add-card-form'
      role='form'
      className='form'
      action='/'
      method='post'
      onSubmit={handleSubmit}
      onChange={resetErrorsInfo}
      ref={formRef}
    >
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
          name='userName'
          ref={userNameRef}
          role='user-name'
        ></input>
        <span className='form__error'>{errors.userName}</span>
      </div>
      <div className='form__item'>
        <label className='form__label' htmlFor='date-birthday'>
          Your birthday
        </label>
        <input
          className='form__input date'
          type='date'
          name='date-birthday'
          ref={birthdayRef}
          role='date-birthday'
        ></input>
        <span className='form__error'>{errors.birthday}</span>
      </div>
      <div className='form__item'>
        <label className='form__label' htmlFor='country'>
          Where are you from?
        </label>
        <select className='form__input' name='country' ref={countryRef} role='select-country'>
          <option value=''>Choose country</option>
          <option value='Belarus'>Belarus</option>
          <option value='Poland'>Poland</option>
          <option value='Lithuania'>Lithuania</option>
          <option value='France'>France</option>
          <option value='Sweden'>Sweden</option>
        </select>
        <span className='form__error'>{errors.country}</span>
      </div>
      <div className='form__radio'>
        <div className='form__radio-item'>
          <input className='form__radio-input' type='radio' name='gender' defaultValue='female' defaultChecked />
          <label htmlFor='female'>female</label>
        </div>
        <div className='form__radio-item'>
          <input className='form__radio-input' type='radio' name='gender' defaultValue='male' />
          <label htmlFor='male'>male</label>
        </div>
      </div>
      <div className='form__item'>
        <label className='form__label' htmlFor='profile'>
          Profile picture
        </label>
        <input
          className='form__input user-image'
          type='file'
          name='profile'
          accept='image/*,.pdf'
          ref={imageRef}
          role='profile'
        ></input>
        <span className='form__error'>{errors.imageSrc}</span>
      </div>
      <div className='form__item'>
        <label className='form__label' htmlFor='feedback'>
          Your feedback
        </label>
        <textarea className='form__input form__textarea' name='feedback' ref={feedbackTextRef}></textarea>
        <span className='form__error'>{errors.feedbackText}</span>
      </div>

      <div className='form__item-checkbox'>
        <input className='form__input-checkbox' type='checkbox' name='agree-consent-data' ref={isConsentRef}></input>
        <label className='form__label-checkbox' htmlFor='agree-consent-data'>
          I consent to my personal data
        </label>
      </div>
      <span className='form__error'>{errors.isConsent}</span>

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
