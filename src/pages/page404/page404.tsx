import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './page404.scss';

export default class Page404 extends Component<{}, {}> {
  render() {
    return (
      <div className='page404 container'>
        <h2 className='title'>Page not found!</h2>
        <p>
          Go <Link to='/'>home page</Link>
        </p>
      </div>
    );
  }
}
