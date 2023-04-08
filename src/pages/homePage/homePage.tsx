import React, { FC, useEffect, useState } from 'react';

import './homePage.scss';
import { IMovie } from '../../components/types';
import CardList from '../../components/cards-list';
import SearchPanel from '../../components/search-panel';
import { getTrendingMovies } from '../../services/movies-services';
import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/errorIndicator';

const HomePage: FC = () => {
  const initSearchValue: string = localStorage.getItem('searchValue') || '';
  const [searchValue, setSearchValue] = useState<string>(initSearchValue);
  const [trendingMovies, setTrendingMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  useEffect(() => {
    getTrendingMovies('week')
      .then((trendingMovies) => {
        setTrendingMovies(trendingMovies);
        setLoading(false);
        // console.log('useEffect: trendingMovies', trendingMovies);
      })
      .catch(onError);
  }, []);

  const updateSearchValue = (newValue: string) => {
    setSearchValue(newValue);
  };

  const search = (arr: IMovie[], searchElem: string) => {
    if (searchElem === '') {
      return arr;
    } else {
      const filteredArr = arr.filter((el) => el.title.toLowerCase().search(searchElem.toLowerCase()) !== -1);

      return filteredArr;
    }
  };

  const hasData = !(loading || error);
  const errorMessage = error ? <ErrorIndicator /> : null;
  const spinner = loading ? <Spinner /> : null;

  const searchedMovies = search(trendingMovies, searchValue);
  const content = hasData ? <CardList items={searchedMovies} /> : null;

  return (
    <div className='home-page container'>
      <h2 className='page__title'>HomePage</h2>
      <SearchPanel updateSearchValue={updateSearchValue} />
      {spinner}
      {errorMessage}
      {content}
    </div>
  );
};

export default HomePage;
