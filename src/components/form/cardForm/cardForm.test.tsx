import { render, screen } from '@testing-library/react';

import CardForm from './cardForm';
import { testCardForm } from '../../../testData/testCardForm';

describe('test CardForm component', () => {
  test('CardForm renders', () => {
    render(<CardForm card={testCardForm} />);
    expect(screen.getByRole('card-form')).toBeInTheDocument();
  });

  test('CardForm should have a field: userName', () => {
    render(<CardForm card={testCardForm} />);
    expect(screen.getByText(testCardForm.userName)).toBeInTheDocument();
  });

  test('CardForm should have a field: country', () => {
    render(<CardForm card={testCardForm} />);
    expect(screen.getByText(testCardForm.country)).toBeInTheDocument();
  });

  test('CardForm should have a field: birthday', () => {
    render(<CardForm card={testCardForm} />);
    expect(screen.getByText(testCardForm.birthday)).toBeInTheDocument();
  });

  test('CardForm should have a field: gender', () => {
    render(<CardForm card={testCardForm} />);
    expect(screen.getByText(testCardForm.gender)).toBeInTheDocument();
  });

  test('CardForm should have a field: isConsentPersonalData (Yes or No)', () => {
    render(<CardForm card={testCardForm} />);
    const isConsent = testCardForm.isConsentPersonalData ? 'Yes' : 'No';
    expect(screen.getByText(isConsent)).toBeInTheDocument();
  });

  test('CardForm should have a field: feedbackText', () => {
    render(<CardForm card={testCardForm} />);
    expect(screen.getByText(testCardForm.feedbackText)).toBeInTheDocument();
  });

  test('CardForm should have an image', () => {
    render(<CardForm card={testCardForm} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', testCardForm.imageSrc);
  });
});
