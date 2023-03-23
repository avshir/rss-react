import { Component } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header';

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />

        <main className='container main'>
          <Outlet />
        </main>
      </>
    );
  }
}
