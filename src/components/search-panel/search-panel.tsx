import React, { ChangeEvent, KeyboardEvent, useState, useEffect, useRef } from 'react';

import './search-panel.scss';

type SearchPanelProps = {
  updateSearchValue: (searchValue: string) => void;
};

const SearchPanel = ({ updateSearchValue }: SearchPanelProps) => {
  const initSearchValue: string = localStorage.getItem('searchValue') || '';
  const [searchValue, setSearchValue] = useState(initSearchValue);
  const searchRef = useRef<string>(searchValue);

  useEffect(() => {
    //like componentWillUnmount
    return function saveToLS() {
      localStorage.setItem('searchValue', searchRef.current);
    };
  }, []);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newSearchValue = e.target.value.trimStart();
    setSearchValue(newSearchValue);
    searchRef.current = newSearchValue;
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      updateSearchValue(searchValue);
    }
  };

  const searchText = 'Type here to search and press Enter...';

  return (
    <input
      type='text'
      className='search-panel search-input btn--border'
      placeholder={searchText}
      value={searchValue}
      onChange={(e) => onSearchChange(e)}
      onKeyDown={handleKeyDown}
      role='search-input'
    />
  );
};

export default SearchPanel;
