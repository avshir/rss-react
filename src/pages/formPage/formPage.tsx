import React, { Component } from 'react';

import './formPage.scss';

import Form from '../../components/form';
type FormPageProps = {};
type FormPageState = {};

export default class FormPage extends Component<FormPageProps, FormPageState> {
  render() {
    return (
      <div className='form-page container'>
        <Form />
      </div>
    );
  }
}
