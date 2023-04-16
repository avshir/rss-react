import React, { FC, useEffect, useState } from 'react';

import './homePage.scss';
import CardList from '../../components/cards-list';
import SearchPanel from '../../components/search-panel';
import { getMovieById, getMoviesBySearch, getTrendingMovies } from '../../services/movies-services';
import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/errorIndicator';
import Modal from '../../components/modal';
import DetailInfo from '../../components/modal/detailInfo';

import { useAppDispatch, useAppSelector } from '../../hook';
import { updateMovies, updateTrendingMovies, updateMovieId, updateMovieById } from './../../store/moviesSlice';

const HomePage: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.searchReducer.searchValue);
  const movies = useAppSelector((state) => state.moviesReducer.movies);
  const trendingMovies = useAppSelector((state) => state.moviesReducer.trendingMovies);
  const movieId = useAppSelector((state) => state.moviesReducer.movieId);

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  useEffect(() => {
    getTrendingMovies('week')
      .then((trendingMovies) => {
        dispatch(updateTrendingMovies(trendingMovies));
        setLoading(false);
      })
      .catch(onError);
  }, [dispatch]);

  useEffect(() => {
    if (searchValue !== '') {
      getMoviesBySearch(searchValue)
        .then((movies) => {
          dispatch(updateMovies(movies));
          setLoading(false);
        })
        .catch(onError);
    }
  }, [dispatch, searchValue]);

  function showDetailInfo(id: number) {
    setLoading(true);
    dispatch(updateMovieId(id));
  }

  useEffect(() => {
    if (isModalOpen && movieId) {
      getMovieById(movieId)
        .then((movie) => {
          dispatch(updateMovieById(movie));
          setLoading(false);
        })
        .catch(onError);
    }
  }, [movieId, isModalOpen, dispatch]);

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
      <SearchPanel />
      {spinner}
      {errorMessage}
      {content}
      {isModalOpen && hasData && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <DetailInfo />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
