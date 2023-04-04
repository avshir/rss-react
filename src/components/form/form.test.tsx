import { render, screen, fireEvent } from '@testing-library/react';

import Form from './form';

describe('test Form component', () => {
  test('render Form', () => {
    render(
      <Form
        addCardForm={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  test('should contain input type="text" field "userName"', () => {
    render(
      <Form
        addCardForm={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('user-name')).toBeInTheDocument();
  });

  test('value of input type="text" field "userName" changes by user', () => {
    render(
      <Form
        addCardForm={() => {
          throw new Error();
        }}
      />
    );
    const input = screen.getByRole('user-name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Anna' } });
    expect(input.value).toBe('Anna');
  });

  test('should contain input type="date" field "date-birthday"', () => {
    render(
      <Form
        addCardForm={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('date-birthday')).toBeInTheDocument();
  });

  test('should contain 1 select name="country"', () => {
    render(
      <Form
        addCardForm={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('select-country')).toBeInTheDocument();
  });

  test('should contain select name="country" with 6 option field', () => {
    render(
      <Form
        addCardForm={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getAllByRole('option').length).toBe(6);
  });

  test('should contain 2 input type="radio" field name="gender"', () => {
    render(
      <Form
        addCardForm={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getAllByRole('radio').length).toBe(2);
  });

  test('should contain 1 input type="file" field name="profile"', () => {
    render(
      <Form
        addCardForm={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('profile')).toBeInTheDocument();
  });

  test('should contain 1 textarea name="feedback"', () => {
    render(
      <Form
        addCardForm={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('textarea')).toBeInTheDocument();
  });

  test('should contain 1 input type="checkbox" name="agree-consent-data"', () => {
    render(
      <Form
        addCardForm={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  test('should contain 2 buttons: Submit and Reset', () => {
    render(
      <Form
        addCardForm={() => {
          throw new Error();
        }}
      />
    );
    expect(screen.getAllByRole('button').length).toBe(2);
  });
});
