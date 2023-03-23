import React, { Component } from 'react';

import './card.scss';
import { IProduct } from '../types';

type CardProps = { product: IProduct };
type CardState = {};

export default class Card extends Component<CardProps, CardState> {
  render() {
    const { product } = this.props;
    const { title, brand, images, price } = product;

    return (
      <article className='card stacked'>
        <div className='image-wrap'>
          <img className='card-image' src={images[0]} alt='image' />
        </div>
        <div className='card-content card-content-wrapper'>
          <div className='card-side card-content-Button'>
            <h2 className='card-title'>{title}</h2>
            <div className='card-price'>{price}$</div>
            <cite className='card-subtitle'>{brand}</cite>
            <button className='card-button'>Learn more</button>
          </div>
        </div>
        <span className='tag topLeft'>Top</span>
      </article>
    );
  }
}
