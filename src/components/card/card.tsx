import React from 'react';

import './card.scss';
import { IMovie } from '../types';

type CardProps = { item: IMovie };

const Card = ({ item }: CardProps) => {
  const { title, original_title, poster_path, vote_average, release_date } = item;
  const baseImagePath = 'image.tmdb.org/t/p/w300';
  const yearRelease: string = release_date.slice(0, 4);

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
        <button className='card-item__button btn'>Learn more</button>
      </div>
      <span className='tag top-left'>{vote_average}</span>
    </article>
  );
};

export default Card;
