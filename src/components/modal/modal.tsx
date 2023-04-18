import React, { MouseEvent, ReactElement } from 'react';
import { useAppDispatch } from '../../hook';
import { toggleModal } from './../../store/moviesSlice';

import './modal.scss';

type ModalProps = {
  children: ReactElement;
};

const Modal = ({ children }: ModalProps) => {
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(toggleModal());
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
