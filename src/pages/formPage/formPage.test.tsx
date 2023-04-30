import { render, screen } from '@testing-library/react';

import FormPage from './formPage';

import * as reduxHooks from 'react-redux';
import { testCardsForm } from '../../testData/testCardsForm';
jest.mock('react-redux');
const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector');

describe('test FormPage component', () => {
  test('renders FormPage with empty state for CardFormList', () => {
    mockedUseSelector.mockReturnValue([]);
    render(<FormPage />);
    expect(screen.getByRole('form-page')).toBeInTheDocument();
  });

  test('renders Form on FormPage', () => {
    mockedUseSelector.mockReturnValue([]);
    render(<FormPage />);
    expect(screen.getByText(/Add feedback/i)).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  test('render CardFormList on FormPage with empty state for CardFormList', () => {
    mockedUseSelector.mockReturnValue([]);
    render(<FormPage />);
    expect(screen.getByTestId('card-form-list')).toBeInTheDocument();
  });

  test('render CardFormList on FormPage with data testCardsForm', () => {
    mockedUseSelector.mockReturnValue(testCardsForm);
    render(<FormPage />);
    expect(screen.getByTestId('card-form-list')).toBeInTheDocument();
    expect(screen.getAllByRole('card-form').length).toBe(testCardsForm.length);
  });
});
