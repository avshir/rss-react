import React, { FC, useEffect, useState } from 'react';

import './homePage.scss';
import { IMovie } from '../../components/types';
import CardList from '../../components/cards-list';
import SearchPanel from '../../components/search-panel';
import { getTrendingMovies } from '../../services/movies-services';
import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/errorIndicator';
import Modal from '../../components/modal';
import DetailInfo from '../../components/detailInfo';

const HomePage: FC = () => {
  const initSearchValue: string = localStorage.getItem('searchValue') || '';
  const [searchValue, setSearchValue] = useState<string>(initSearchValue);
  const [trendingMovies, setTrendingMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [detailInfo, setDetailInfo] = useState<string[]>([]);

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  useEffect(() => {
    getTrendingMovies('week')
      .then((trendingMovies) => {
        setTrendingMovies(trendingMovies);
        setLoading(false);
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

  const showDetailInfo = (info: string[]) => {
    setDetailInfo(info);
  };

  const hasData = !(loading || error);
  const errorMessage = error ? <ErrorIndicator /> : null;
  const spinner = loading ? <Spinner /> : null;

  const searchedMovies = search(trendingMovies, searchValue);
  const content = hasData ? (
    <CardList items={searchedMovies} setIsModalOpen={setIsModalOpen} showDetailInfo={showDetailInfo} />
  ) : null;

  return (
    <div className='home-page container' data-testid='apiCall' role='home-page'>
      <h2 className='page__title'>HomePage</h2>
      <SearchPanel updateSearchValue={updateSearchValue} />
      {spinner}
      {errorMessage}
      {content}
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <DetailInfo info={detailInfo} />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
