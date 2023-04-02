import React, { FC, ChangeEvent, useState, useEffect, useRef } from 'react';

import './search-panel.scss';

const SearchPanel: FC = () => {
  const initSearchValue: string = localStorage.getItem('searchValue') || '';
  const [searchValue, setSearchValue] = useState(initSearchValue);
  const searchRef = useRef<string>(searchValue);

  useEffect(() => {
    //like componentWillUnmount
    return function saveToLS() {
      const currentSearchValue = searchRef?.current || '';
      localStorage.setItem('searchValue', currentSearchValue);
    };
  }, []);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newSearchValue = e.target.value.trimStart();
    setSearchValue(newSearchValue);
    searchRef.current = newSearchValue;
  };

  const searchText = 'Type here to search...';

  return (
    <input
      type='text'
      className='search-panel search-input btn--border'
      placeholder={searchText}
      value={searchValue}
      onChange={(e) => onSearchChange(e)}
      role='search-input'
    />
  );
};

export default SearchPanel;
