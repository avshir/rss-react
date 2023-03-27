import React, { Component, FormEvent } from 'react';

import './form.scss';
import { ICardForm } from '../cardForm/cardForm';

type FormProps = {
  addCardForm: (card: ICardForm) => void;
};
type FormState = {};

export default class Form extends Component<FormProps, FormState> {
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

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCardForm = this.createCardForm();
    this.props.addCardForm(newCardForm);

    alert('Your feedback will be added! Thanks');

    if (this.formRef.current) {
      this.formRef.current.reset();
    }
  };

  render() {
    return (
      <form
        id='add-card-form'
        role='form'
        className='form'
        action='/'
        method='post'
        onSubmit={this.handleSubmit}
        ref={this.formRef}
      >
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
            required
          ></input>
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor='date-birthday'>
            Your birthday
          </label>
          <input className='form__input date' type='date' id='date-birthday' ref={this.birthdayRef} required></input>
        </div>

        <div className='form__item'>
          <label className='form__label' htmlFor='country'>
            Where are you from?
          </label>
          <select className='form__input' name='country' ref={this.countryRef} required>
            <option value='select-title' disabled>
              country
            </option>
            <option value='Belarus'>Belarus</option>
            <option value='Poland'>Poland</option>
            <option value='Lithuania'>Lithuania</option>
            <option value='France'>France</option>
            <option value='Sweden'>Sweden</option>
          </select>
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
            required
          ></input>
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
            required
          ></textarea>
        </div>

        <div className='form__item-checkbox'>
          <input
            className='form__input-checkbox'
            type='checkbox'
            id='agree-consent-data'
            ref={this.isConsentRef}
            required
          ></input>
          <label className='form__label-checkbox' htmlFor='agree-consent-data'>
            I consent to my personal data
          </label>
        </div>

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
