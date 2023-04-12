import React from 'react';

import './errorIndicator.scss';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator' data-testid='error-indicator'>
      <span className='error-indicator__title'>Ups!</span>
      <span>something has gone wrong...</span>
    </div>
  );
};

export default ErrorIndicator;
