import React from 'react';

import './card.scss';
import { IMovie } from '../types';
import { _baseImagePath } from '../../services/movies-services';

import { useAppDispatch } from '../../hook';
import { toggleModal, updateMovieId } from './../../store/moviesSlice';

type CardProps = {
  item: IMovie;
};

const Card = ({ item }: CardProps) => {
  const { id, title, original_title, poster_path, vote_average, release_date } = item;
  const baseImagePath = _baseImagePath;
  const yearRelease: string = release_date.slice(0, 4);

  const dispatch = useAppDispatch();

  const showMoreInfo = () => {
    dispatch(toggleModal());
    dispatch(updateMovieId(id));
  };

  return (
    <article className='card-item' role='card-item'>
      <div className='card-item__image'>
        <img src={`https://${baseImagePath}${poster_path}`} alt='poster of film' />
      </div>
      <div className='card-item__content'>
        <div className='card-item__title-container'>
          <h2 className='card-item__title'>
            {original_title ? original_title : title}
            <span className='card-item__year'>{`, ${yearRelease}`}</span>
          </h2>
        </div>
        <button className='card-item__button btn' onClick={showMoreInfo} role='showMoreInfo-button'>
          Learn more
        </button>
      </div>
      <span className='tag top-left'>{vote_average}</span>
    </article>
  );
};

export default Card;
