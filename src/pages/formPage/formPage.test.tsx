import { render, screen } from '@testing-library/react';

import FormPage from './formPage';
import CardForm, { ICardForm } from '../../components/cardForm/cardForm';

export const testCardForm: ICardForm = {
  id: 100,
  userName: 'Anna Sh',
  gender: 'female',
  birthday: '21.02.2222',
  country: 'Belarus',
  isConsentPersonalData: true,
  feedbackText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
  imageSrc: 'https://i.dummyjson.com/data/products/25/thumbnail.jpg',
};

describe('test FormPage component', () => {
  test('FormPage renders', () => {
    render(<FormPage />);
    expect(screen.getByText(/Add feedback/i)).toBeInTheDocument();
  });

  test('cardForm renders', () => {
    render(<CardForm card={testCardForm} />);
    expect(screen.getByText(/Birthday/i)).toBeInTheDocument();
  });
});
