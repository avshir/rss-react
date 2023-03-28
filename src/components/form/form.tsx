import React, { Component, FormEvent } from 'react';

import './form.scss';
import { ICardForm } from '../cardForm/cardForm';
import { FormErrors, errorTextMessage } from './form-utils';
import { feedbackTextValidate, userNameValidate, dateBirthdayValidate } from './formValidate';

type FormProps = {
  addCardForm: (card: ICardForm) => void;
};
type FormState = {
  errors: FormErrors;
  success: string;
};

export default class Form extends Component<FormProps, FormState> {
  state: FormState = {
    errors: {
      userName: '',
      country: '',
      birthday: '',
      feedbackText: '',
      imageSrc: '',
      isConsent: '',
    },
    success: '',
  };

  private formRef = React.createRef<HTMLFormElement>();
  private userNameRef = React.createRef<HTMLInputElement>();
  private birthdayRef = React.createRef<HTMLInputElement>();
  private countryRef = React.createRef<HTMLSelectElement>();
  private feedbackTextRef = React.createRef<HTMLTextAreaElement>();
  private isConsentRef = React.createRef<HTMLInputElement>();
  private imageRef = React.createRef<HTMLInputElement>();

  createCardForm(): ICardForm {
    const genderArr: HTMLInputElement[] = [...this.formRef.current?.['gender']];
    const gender = (genderArr.find((el) => el.checked) as HTMLInputElement).value;

    return {
      userName: this.userNameRef.current?.value || '',
      gender: gender || '',
      birthday: this.birthdayRef.current?.value || '',
      country: this.countryRef.current?.value || '',
      feedbackText: this.feedbackTextRef.current?.value || '',
      isConsentPersonalData: this.isConsentRef.current?.checked,
      imageSrc: this.imageRef.current?.files ? URL.createObjectURL(this.imageRef.current.files[0]) : '',
    };
  }

  validate() {
    const errors: FormErrors = {
      userName: userNameValidate(this.userNameRef.current?.value || '') ? '' : errorTextMessage.userName,
      feedbackText: feedbackTextValidate(this.feedbackTextRef.current?.value || '')
        ? ''
        : errorTextMessage.feedbackText,
      country: this.formRef.current?.['country'].value ? '' : errorTextMessage.country,
      isConsent: this.formRef.current?.['agree-consent-data'].checked ? '' : errorTextMessage.isConsent,
      birthday: dateBirthdayValidate(this.formRef.current?.['date-birthday'].value) ? '' : errorTextMessage.birthday,
      imageSrc: this.imageRef.current?.value ? '' : errorTextMessage.imageSrc,
    };

    this.setState({ errors: errors });

    const isValid = Object.values(errors).every((elem) => !elem);
    return isValid;
  }

  resetErrorsInfo = () => {
    this.setState({
      errors: { userName: '', country: '', birthday: '', feedbackText: '', imageSrc: '', isConsent: '' },
    });
  };

  showSuccessMessage() {
    this.setState({ success: 'Your feedback will be added! Thanks' });

    setTimeout(() => {
      this.setState({ success: '' });
    }, 3000);
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = this.validate();

    if (isValid) {
      const newCardForm = this.createCardForm();
      this.props.addCardForm(newCardForm);

      this.showSuccessMessage();

      if (this.formRef.current) {
        this.formRef.current.reset();
      }
    }
  };

  render() {
    const successMessage = this.state.success ? (
      <div className='form__success-message popup'>
        <div className='popup__content'>{this.state.success}</div>
      </div>
    ) : null;

    return (
      <form
        id='add-card-form'
        role='form'
        className='form'
        action='/'
        method='post'
        onSubmit={this.handleSubmit}
        onChange={this.resetErrorsInfo}
        ref={this.formRef}
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
            ref={this.userNameRef}
          ></input>
          <span className='form__error'>{this.state.errors.userName}</span>
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor='date-birthday'>
            Your birthday
          </label>
          <input className='form__input date' type='date' name='date-birthday' ref={this.birthdayRef}></input>
          <span className='form__error'>{this.state.errors.birthday}</span>
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor='country'>
            Where are you from?
          </label>
          <select className='form__input' name='country' ref={this.countryRef}>
            <option value=''>Choose country</option>
            <option value='Belarus'>Belarus</option>
            <option value='Poland'>Poland</option>
            <option value='Lithuania'>Lithuania</option>
            <option value='France'>France</option>
            <option value='Sweden'>Sweden</option>
          </select>
          <span className='form__error'>{this.state.errors.country}</span>
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
            id='profile'
            name='profile'
            accept='image/*,.pdf'
            ref={this.imageRef}
          ></input>
          <span className='form__error'>{this.state.errors.imageSrc}</span>
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor='feedback'>
            Your feedback
          </label>
          <textarea
            className='form__input form__textarea'
            name='feedback'
            id='feedback'
            ref={this.feedbackTextRef}
          ></textarea>
          <span className='form__error'>{this.state.errors.feedbackText}</span>
        </div>

        <div className='form__item-checkbox'>
          <input
            className='form__input-checkbox'
            type='checkbox'
            name='agree-consent-data'
            ref={this.isConsentRef}
          ></input>
          <label className='form__label-checkbox' htmlFor='agree-consent-data'>
            I consent to my personal data
          </label>
        </div>
        <span className='form__error'>{this.state.errors.isConsent}</span>

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
  }
}
