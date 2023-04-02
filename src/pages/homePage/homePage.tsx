import React, { FC } from 'react';

import './homePage.scss';
import { dataGoods } from '../../data/data';
import { IProduct } from '../../components/types';
import CardList from '../../components/cards-list';
import SearchPanel from '../../components/search-panel';

const HomePage: FC = () => {
  const products: IProduct[] = dataGoods.products.slice(0, 8); //get only 8 products

  return (
    <div className='home-page container'>
      <h2 className='page__title'>HomePage</h2>
      <SearchPanel />
      <CardList products={products} />
    </div>
  );
};

export default HomePage;
