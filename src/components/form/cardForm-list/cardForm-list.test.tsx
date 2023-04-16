import { render, screen } from '@testing-library/react';

import { testCardsForm } from '../../../testData/testCardsForm';
import CardFormList from './cardForm-list';

describe('test CardFormList component', () => {
  test('render CardFormList', () => {
    render(<CardFormList cardsForm={testCardsForm} />);
    expect(screen.getByTestId('card-form-list')).toBeInTheDocument();
  });

  test('should be render all CardsForm in CardFormList ', () => {
    render(<CardFormList cardsForm={testCardsForm} />);
    expect(screen.getAllByRole('card-form').length).toBe(testCardsForm.length);
  });
});
