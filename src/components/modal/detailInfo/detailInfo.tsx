import React from 'react';

import './detailInfo.scss';
import { useAppSelector } from '../../../hook';

const DetailInfo: React.FC = () => {
  const movieById = useAppSelector((state) => state.moviesReducer.movieById);
  const { overview, title, homepage } = movieById!;

  return (
    <div className='detail-info' data-testid='detail-info'>
      <h3 className='detail-info__title'>{title}</h3>
      <div className='detail-info__subtitle'>overview</div>
      <p>{overview}</p>
      {homepage && (
        <a className='detail-info__homepage btn btn--col-5' href={homepage}>
          Homepage movie
        </a>
      )}
    </div>
  );
};

export default DetailInfo;
