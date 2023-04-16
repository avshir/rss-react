import React, { FC } from 'react';

import './formPage.scss';

import Form from '../../components/form';
import CardFormList from '../../components/cardForm-list';

const FormPage: FC = () => {
  return (
    <div className='form-page container' role='form-page'>
      <h2 className='page__title'>Form page</h2>
      <Form />
      <CardFormList />
    </div>
  );
};

export default FormPage;
