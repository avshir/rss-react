import React, { ChangeEvent, KeyboardEvent, useRef } from 'react';
import { useAppSelector, useAppDispatch } from './../../hook';
import { updateSearchValue } from '../../store/searchSlice';

import './search-panel.scss';

const SearchPanel: React.FC = () => {
  const searchValue = useAppSelector((state) => state.searchReducer.searchValue);
  const dispatch = useAppDispatch();
  const searchRef = useRef<string>(searchValue);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newSearchValue = e.target.value.trimStart();
    searchRef.current = newSearchValue;
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      dispatch(updateSearchValue(searchRef.current));
    }
  };

  const searchText = 'Type here to search and press Enter...';

  return (
    <input
      type='text'
      className='search-panel search-input btn--border'
      placeholder={searchText}
      defaultValue={searchValue}
      onChange={(e) => onSearchChange(e)}
      onKeyDown={handleKeyDown}
      role='search-input'
    />
  );
};

export default SearchPanel;
