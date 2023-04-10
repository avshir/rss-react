import React from 'react';

import './card.scss';
import { IMovie } from '../types';
import { _baseImagePath } from '../../services/movies-services';

type CardProps = {
  item: IMovie;
  setIsModalOpen: (newValue: boolean) => void;
  showDetailInfo: (info: string[]) => void;
};

const Card = ({ item, setIsModalOpen, showDetailInfo }: CardProps) => {
  const { title, original_title, poster_path, vote_average, release_date, overview } = item;
  const baseImagePath = _baseImagePath;
  const yearRelease: string = release_date.slice(0, 4);

  const showMoreInfo = () => {
    setIsModalOpen(true);
    showDetailInfo([overview, title]);
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
