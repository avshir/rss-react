import React, { Component } from 'react';

import './homePage.scss';
import { dataGoods } from '../../data/data';
import { IProduct } from '../../components/types';
import CardList from '../../components/cards-list';
import SearchPanel from '../../components/search-panel';

type HomePageProps = {};
type HomePageState = {};

export default class HomePage extends Component<HomePageProps, HomePageState> {
  render() {
    const products: IProduct[] = dataGoods.products;

    return (
      <div className='home-page container '>
        <h2 className='title'>HomePage</h2>
        <SearchPanel />
        <CardList products={products} />
      </div>
    );
  }
}
