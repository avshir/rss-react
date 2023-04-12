import React, { FC, useEffect, useState } from 'react';

import './homePage.scss';
import { IMovie } from '../../components/types';
import CardList from '../../components/cards-list';
import SearchPanel from '../../components/search-panel';
import { getMovieById, getMoviesBySearch, getTrendingMovies } from '../../services/movies-services';
import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/errorIndicator';
import Modal from '../../components/modal';
import DetailInfo from '../../components/detailInfo';

const HomePage: FC = () => {
  const initSearchValue: string = localStorage.getItem('searchValue') || '';
  const [searchValue, setSearchValue] = useState<string>(initSearchValue);
  const [trendingMovies, setTrendingMovies] = useState<IMovie[]>([]);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [detailInfo, setDetailInfo] = useState<IMovie | null>(null);
  const [movieId, setMovieId] = useState<number | null>(null);

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

  useEffect(() => {
    if (searchValue !== '') {
      getMoviesBySearch(searchValue)
        .then((movies) => {
          setMovies(movies);
          setLoading(false);
        })
        .catch(onError);
    }
  }, [searchValue]);

  const updateSearchValue = (newValue: string) => {
    setSearchValue(newValue);
  };

  function showDetailInfo(id: number) {
    setLoading(true);
    setMovieId(id);
  }

  useEffect(() => {
    if (isModalOpen && movieId) {
      getMovieById(movieId)
        .then((movie) => {
          setDetailInfo(movie);
          setLoading(false);
        })
        .catch(onError);
    }
  }, [movieId, isModalOpen]);

  const hasData = !(loading || error);
  const errorMessage = error ? <ErrorIndicator /> : null;
  const spinner = loading ? <Spinner /> : null;

  const searchedMovies = searchValue !== '' ? movies : trendingMovies;
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
      {isModalOpen && hasData && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <DetailInfo info={detailInfo} />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
