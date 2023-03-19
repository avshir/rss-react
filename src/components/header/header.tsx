import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export default class Header extends Component<{}, {}> {
  render() {
    return (
      <header className='header'>
        <nav className='container'>
          <ul className='nav-menu'>
            <li>
              <Link className='link' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/404'>Page 404</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
