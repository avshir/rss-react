import { render, screen } from '@testing-library/react';

import FormPage from './formPage';

describe('test FormPage component', () => {
  test('renders FormPage', () => {
    render(<FormPage />);
    expect(screen.getByRole('form-page')).toBeInTheDocument();
  });

  test('renders Form on FormPage', () => {
    render(<FormPage />);
    expect(screen.getByText(/Add feedback/i)).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  test('render CardFormList on FormPage', () => {
    render(<FormPage />);
    expect(screen.getByTestId('card-form-list')).toBeInTheDocument();
  });
});
