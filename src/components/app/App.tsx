import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import HomePage from '../../pages/homePage';
import AboutPage from '../../pages/aboutPage';
import FormPage from '../../pages/formPage';
import Page404 from '../../pages/page404';

import Layout from '../layout';

export default class App extends Component<{}, {}> {
  render() {
    return (
      <div className='App wrapper' role='app'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/form' element={<FormPage />}></Route>
            <Route path='/404' element={<Page404 />}></Route>
            <Route path='*' element={<Page404 />}></Route>
          </Route>
        </Routes>
      </div>
    );
  }
}
