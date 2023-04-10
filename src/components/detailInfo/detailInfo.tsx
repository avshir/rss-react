import React from 'react';

import './detailInfo.scss';

type DetailInfoProps = {
  info: string[];
};

const DetailInfo = ({ info }: DetailInfoProps) => {
  const [overview, title] = info;
  return (
    <div className='detail-info'>
      <h3 className='detail-info__title'>{title}</h3>
      <div className='detail-info__subtitle'>overview</div>
      <p>{overview}</p>
    </div>
  );
};

export default DetailInfo;
