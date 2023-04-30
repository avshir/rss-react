import { render, screen } from '@testing-library/react';

import ErrorIndicator from './errorIndicator';

describe('test ErrorIndicator', () => {
  test('should render', () => {
    render(<ErrorIndicator />);
    expect(screen.getByTestId('error-indicator')).toBeInTheDocument();
  });
});
