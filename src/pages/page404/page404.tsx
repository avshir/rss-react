import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './page404.scss';

export default class Page404 extends Component<{}, {}> {
  render() {
    return (
      <div className='page-404'>
        <div className='container'>
          <h2 className='page-404__title'>Page not found!</h2>
          <p className='page-404__number'>404</p>
          <p>
            Go to&nbsp;
            <Link className='page-404__link' to='/'>
              home page
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
