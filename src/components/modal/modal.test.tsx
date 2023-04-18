import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './modal';

import * as reduxHooks from 'react-redux';
import * as actions from './../../store/moviesSlice';
jest.mock('react-redux');
const mockedUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('test Modal', () => {
  it('render modal', () => {
    render(
      <Modal>
        <p>test</p>
      </Modal>
    );
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });

  it('render Modal with "children" content', () => {
    const children = <p>test</p>;
    render(<Modal>{children}</Modal>);
    const content = screen.getByText('test');
    expect(content).toBeInTheDocument();
  });

  it('render close-modal button in Modal', () => {
    render(
      <Modal>
        <p>test</p>
      </Modal>
    );
    const closeButton = screen.getByTestId('close-modal');
    expect(closeButton).toBeInTheDocument();
  });

  it('onClick by "close-modal" dispatch "toggleModal"', () => {
    const dispatch = jest.fn();
    mockedUseDispatch.mockReturnValue(dispatch);
    const mockedToggleModal = jest.spyOn(actions, 'toggleModal');

    render(
      <Modal>
        <p>test</p>
      </Modal>
    );

    const closeButton = screen.getByTestId('close-modal');
    fireEvent.click(closeButton);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedToggleModal).toHaveBeenCalledTimes(1);
  });
});
