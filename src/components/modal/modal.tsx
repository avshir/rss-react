import React, { MouseEvent, ReactElement } from 'react';

import './modal.scss';

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (newValue: boolean) => void;
  children: ReactElement;
};

const Modal = ({ setIsModalOpen, children }: ModalProps) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const unCloseModal = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
  };

  return (
    <div className='modal' onClick={closeModal} data-testid='modal'>
      <div className='modal__content' onClick={unCloseModal} data-testid='content-modal'>
        <div className='modal__close-btn btn btn--round' onClick={closeModal} data-testid='close-modal'>
          X
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
