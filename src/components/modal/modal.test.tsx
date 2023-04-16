import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './modal';

const foo = jest.fn();

describe('test Modal', () => {
  it('render modal', () => {
    render(
      <Modal isModalOpen={false} setIsModalOpen={foo}>
        <p>test</p>
      </Modal>
    );
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });

  it('render close-modal button in Modal', () => {
    render(
      <Modal isModalOpen={false} setIsModalOpen={foo}>
        <p>test</p>
      </Modal>
    );
    const closeButton = screen.getByTestId('close-modal');
    expect(closeButton).toBeInTheDocument();
  });

  it('onClick by "close-modal" call function ', () => {
    render(
      <Modal isModalOpen={false} setIsModalOpen={foo}>
        <p>test</p>
      </Modal>
    );
    const closeButton = screen.getByTestId('close-modal');
    fireEvent.click(closeButton);
    expect(foo).toHaveBeenCalledTimes(1);
  });
});
