import React, { useState } from 'react';
import { InputAdornment, IconButton, Input } from '@mui/material';
import { Search } from '@mui/icons-material';

import css from '../Notices/Notices.module.css';

const Notices = () => {
  const [keyword, setKeyword] = useState('');

  // const SearchInput = () => {
  //   const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    // Здесь можно выполнить действия при нажатии на кнопку поиска, например, отправить запрос на сервер
    console.log('Выполняется поиск по ключевому слову:', keyword);
  };

  const handleChange = event => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <h2 className={css.title}>Find your favorite pet</h2>
      <div className={css.inputContainer}>
        <Input
          value={keyword}
          onChange={handleChange}
          placeholder="Search"
          disableUnderline
          style={{
            borderRadius: '20px',
            backgroundColor: '#FFFFFF',
            paddingLeft: '20px',
            paddingRight: '14px',
            paddingTop: '10px',
            paddingBottom: '10px',
            boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
          }}
           inputProps={{
            className: css.placeholder, 
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleSearch} style={{ color: '#54ADFF' }}>
                <Search />
              </IconButton>
            </InputAdornment>
          }
          fullWidth
        />
      </div>
    </>
  );
};

export default Notices;
