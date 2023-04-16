import { fireEvent, render, screen } from '@testing-library/react';
import SearchPanel from './search-panel';

import * as reduxHooks from 'react-redux';

jest.mock('react-redux');
const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector');

describe('test SearchPanel component', () => {
  test('should contains input', () => {
    render(<SearchPanel />);
    expect(screen.getByRole('search-input')).toBeInTheDocument();
  });

  test('value of input changes by user', () => {
    render(<SearchPanel />);
    const input = screen.getByRole('search-input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'some text for test' } });
    expect(input.value).toBe('some text for test');
  });

  test('should contains input value from store', () => {
    mockedUseSelector.mockReturnValue('hello');
    render(<SearchPanel />);
    const input = screen.getByRole('search-input') as HTMLInputElement;
    expect(input.value).toBe('hello');
  });
});
