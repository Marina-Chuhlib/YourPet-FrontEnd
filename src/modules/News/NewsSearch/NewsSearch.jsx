import React, { useEffect, useState, useCallback } from 'react';
import { InputAdornment, IconButton, Input, Typography } from '@mui/material';
import { Search, Clear } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { fetchFilteredNews } from 'redux/news/newsOperation';

import css from '../NewsSearch/NewsSearch.module.css';

const NewsSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [showHelperText, setShowHelperText] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = useCallback(
    e => {
      e.preventDefault();
      if (keyword.trim() === '') {
        setShowHelperText(true);
      } else {
        setSubmitted(true);
        // console.log('Выполняется поиск по ключевому слову:', keyword);
      }
    },
    [keyword]
  );

  const handleChange = useCallback(event => {
    const value = event.target.value;
    setKeyword(value);
    setShowHelperText(false);
    setSubmitted(false);
  }, []);

  const handleClear = useCallback(() => {
    setKeyword('');
    setShowHelperText(false);
    setSubmitted(false);
  }, []);

  useEffect(() => {
    if (submitted) {
      dispatch(fetchFilteredNews(keyword));
      setSubmitted(false);
      setKeyword('');
    }
  }, [submitted, keyword, dispatch]);

  return (
    <>
      <div className={css.inputContainer}>
        <form onSubmit={handleSearch}>
          <Input
            value={keyword}
            onChange={handleChange}
            placeholder="Search"
            disableUnderline
            style={{
              borderRadius: '20px',
              backgroundColor: '#FFFFFF',
              padding: '0px 14px 0px 20px',
              height: '43px',
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
                  <IconButton onClick={handleClear} style={{ color: '#FFC107' }}>
                    <Clear />
                  </IconButton>
                )}
              </InputAdornment>
            }
            fullWidth
          />
          {showHelperText && (
            <Typography variant="caption" color="error" marginLeft="40px" fontSize="16px">
              Please enter something.
            </Typography>
          )}
        </form>
      </div>
    </>
  );
};

export default NewsSearch;
