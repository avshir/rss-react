import React, { Component } from 'react';

import './form.scss';

type FormProps = {};
type FormState = {};

export default class Form extends Component<FormProps, FormState> {
  render() {
    return (
      <form id='add-card-form' className='form' action='/' method='post'>
        <h3 className='form__title'>Add feedback</h3>

        <div className='form__item'>
          <label className='form__label' htmlFor='user-name'>
            Your name
          </label>
          <input className='form__input user-name' type='text' placeholder='Name' id='user-name'></input>
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor='date-birthday'>
            Your birthday
          </label>
          <input className='form__input date' type='date' id='date-birthday'></input>
        </div>

        <div className='form__item'>
          <label className='form__label' htmlFor='country-list'>
            Where are you from?
          </label>
          <select className='form__input' name='country' id='country-list'>
            <option value='select-title' disabled>
              country
            </option>
            <option value='belarus'>Belarus</option>
            <option value='poland'>Poland</option>
            <option value='lithuania'>Lithuania</option>
            <option value='france'>France</option>
            <option value='sweden'>Sweden</option>
          </select>
        </div>

        <div className='form__radio'>
          <div className='form__radio-item'>
            <input className='form__radio-input' type='radio' name='gender' value='female' id='female' checked />
            <label htmlFor='female'>female</label>
          </div>
          <div className='form__radio-item'>
            <input className='form__radio-input' type='radio' name='gender' value='male' id='male' />
            <label htmlFor='male'>male</label>
          </div>
        </div>

        <div className='form__item'>
          <label className='form__label' htmlFor='profile'>
            Profile picture
          </label>
          <input className='form__input user-image' type='file' id='profile'></input>
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor='feedback'>
            Your feedback
          </label>
          <textarea className='form__input form__textarea' name='feedback' id='feedback'></textarea>
        </div>

        <div className='form__item-checkbox'>
          <input className='form__input-checkbox' type='checkbox' id='agree-consent-data'></input>
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

        <input type='hidden' name='tracking-code' value='1'></input>
      </form>
    );
  }
}
