import { render, screen } from '@testing-library/react';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');
const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector');

import { testCardsForm } from '../../../testData/testCardsForm';
import CardFormList from './cardForm-list';

describe('test CardFormList component', () => {
  test('should create CardFormList with empty list', () => {
    mockedUseSelector.mockReturnValue([]);
    render(<CardFormList />);
    expect(screen.getByTestId('card-form-list')).toBeInTheDocument();
  });

  test('should create CardFormList with data testCardsForm', () => {
    mockedUseSelector.mockReturnValue(testCardsForm);
    render(<CardFormList />);
    expect(screen.getAllByRole('card-form').length).toBe(testCardsForm.length);
  });
});
