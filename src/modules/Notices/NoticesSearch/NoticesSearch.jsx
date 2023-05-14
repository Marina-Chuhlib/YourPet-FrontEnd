import React, { useState } from 'react';
import { InputAdornment, IconButton, Input,Typography } from '@mui/material';
import { Search, Clear } from '@mui/icons-material';

import css from "../NoticesSearch/NoticesSearch.module.css"

const NoticesSearch = () => {
  const [keyword, setKeyword] = useState('');
   const [showHelperText, setShowHelperText] = useState(false);

  // const SearchInput = () => {
  //   const [keyword, setKeyword] = useState('');

    const handleSearch = () => {
    if (keyword.trim() === '') {
      // Если поле пустое, показываем вспомогательный текст
      setShowHelperText(true);
    } else {
      console.log('Выполняется поиск по ключевому слову:', keyword);
    }
  };

   const handleChange = (event) => {
    const value = event.target.value;
    setKeyword(value);
    setShowHelperText(false);
  };

   const handleClear = () => {
    setKeyword('');
    setShowHelperText(false); 
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
            padding: "0px 14px 0px 20px",
            height:"43px",
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
              {keyword && (
                <IconButton onClick={handleClear} style={{color:"#FFC107"}}>
                  <Clear />
                </IconButton>
              )}
            </InputAdornment>
          }
          fullWidth
        />
        {showHelperText && (
          <Typography variant="caption" color="error" marginLeft="20px">
            Please enter something.
          </Typography>
        )}
      </div>
    </>
  );
};

export default NoticesSearch;

