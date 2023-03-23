import React, { Component, ChangeEvent } from 'react';

import './search-panel.scss';

type SearchPanelProps = {};
type SearchPanelState = { searchValue: string };

export default class SearchPanel extends Component<SearchPanelProps, SearchPanelState> {
  state = {
    searchValue: localStorage.getItem('searchValue') || '',
  };

  componentDidMount() {
    this.getSearchValue();
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  getSearchValue(): void {
    const searchValueLS = localStorage.getItem('searchValue') || '';
    if (searchValueLS) {
      this.setState({
        searchValue: searchValueLS,
      });
    }
  }

  onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newSearchValue = e.target.value.trimStart();
    this.setState({
      searchValue: newSearchValue,
    });
  };

  render() {
    const searchText = 'Type here to search...';

    return (
      <input
        type='text'
        className='search-panel search-input'
        placeholder={searchText}
        value={this.state.searchValue}
        onChange={this.onSearchChange}
      />
    );
  }
}
