import React, { Component, ChangeEvent } from 'react';

import './search-panel.scss';

type SearchPanelProps = {};
type SearchPanelState = { searchValue: string };

export default class SearchPanel extends Component<SearchPanelProps, SearchPanelState> {
  state = {
    searchValue: '',
  };

  onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newSearchValue = e.target.value.trimStart();
    this.setState({
      searchValue: newSearchValue,
    });

    localStorage.setItem('searchValue', this.state.searchValue);
  };

  render() {
    const searchText = 'Type here to search...';
    const searchValueLS = localStorage.getItem('searchValue') || '';

    return (
      <input
        type='text'
        className='search-panel search-input'
        placeholder={searchText}
        value={this.state.searchValue || searchValueLS}
        onChange={this.onSearchChange}
      />
    );
  }
}
