import React, { FC, useEffect } from 'react';

import './homePage.scss';
import CardList from '../../components/cards-list';
import SearchPanel from '../../components/search-panel';
import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/errorIndicator';
import Modal from '../../components/modal';
import DetailInfo from '../../components/modal/detailInfo';

import { useAppDispatch, useAppSelector } from '../../hook';
import { fetchTrendingMovies, fetchMoviesBySearch, fetchMovieById } from './../../store/moviesSlice';

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.searchReducer.searchValue);
  const { movies, trendingMovies, movieId, movieById, isModalOpen, loading, error } = useAppSelector(
    (state) => state.moviesReducer
  );

  useEffect(() => {
    dispatch(fetchTrendingMovies('week'));
  }, [dispatch]);

  useEffect(() => {
    if (searchValue !== '') {
      dispatch(fetchMoviesBySearch(searchValue));
    }
  }, [dispatch, searchValue]);

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieById(movieId));
    }
  }, [dispatch, movieId]);

  const hasData = !(loading || error);
  const errorMessage = error ? <ErrorIndicator /> : null;
  const spinner = loading ? <Spinner /> : null;

  const searchedMovies = searchValue !== '' ? movies : trendingMovies;
  const content = hasData ? <CardList items={searchedMovies} /> : null;

  return (
    <div className='home-page container' data-testid='apiCall' role='home-page'>
      <h2 className='page__title'>HomePage</h2>
      <SearchPanel />
      {spinner}
      {errorMessage}
      {content}
      {isModalOpen && hasData && (
        <Modal>
          <DetailInfo info={movieById} />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
