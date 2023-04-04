import React from 'react';

import './card.scss';
import { IProduct } from '../types';

type CardProps = { product: IProduct };

const Card = (props: CardProps) => {
  const { product } = props;
  const { title, brand, images, price } = product;

  return (
    <article className='card stacked'>
      <div className='image-wrap'>
        <img className='card-image' src={images[0]} alt='image' />
      </div>
      <div className='card-content card-content-wrapper'>
        <div className='card-side card-content-button'>
          <h2 className='card-title'>{title}</h2>
          <div className='card-price'>{price}$</div>
          <cite className='card-subtitle'>{brand}</cite>
          <button className='card-button'>Learn more</button>
        </div>
      </div>
      <span className='tag top-left'>Top</span>
    </article>
  );
};

export default Card;
