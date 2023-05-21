import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputAdornment, IconButton, Input, Typography } from '@mui/material';
import { Search, Clear } from '@mui/icons-material';
import {
  fetchAllFavoriteNotices,
  fetchNoticesByCategory,
  fetchNoticesByOwn,
} from 'redux/notices/noticesOperations';
import { selectCategory } from 'redux/notices/noticesSelectors';
import { useLocation } from 'react-router-dom';

import css from '../NoticesSearch/NoticesSearch.module.css';

const NoticesSearch = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');
  const location = useLocation();
  const categoryIsLoginUser = location.pathname.split('/')[2];
  const category = useSelector(selectCategory);

  const handleClear = useCallback(() => {
    setKeyword('');
    setShowHelperText(false);
  }, []);

  const handleKeywordChange = useCallback(e => {
    setKeyword(e.target.value);
    setShowHelperText(false);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const trimmedKeyword = keyword.trim();

      if (trimmedKeyword === '') {
        setShowHelperText(true);
        return;
      }

      try {
        if (categoryIsLoginUser === 'own') {
          dispatch(fetchNoticesByOwn(trimmedKeyword));
        } else if (categoryIsLoginUser === 'favorite') {
          dispatch(fetchAllFavoriteNotices(trimmedKeyword));
        } else if (category) {
          dispatch(
            fetchNoticesByCategory({
              categoryName: category,
              query: trimmedKeyword,
              page: 1,
            })
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        handleClear();
      }
    },
    [category, categoryIsLoginUser, dispatch, keyword, handleClear]
  );

  const [showHelperText, setShowHelperText] = useState(false);

  return (
    <div className={css.inputContainer}>
      <form onSubmit={handleSubmit}>
        <Input
          value={keyword}
          onChange={handleKeywordChange}
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
              <IconButton type="submit" style={{ color: '#54ADFF' }}>
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
          <Typography
            variant="caption"
            color="error"
            marginLeft="20px"
            fontSize="16px"
          >
            Please enter something.
          </Typography>
        )}
      </form>
    </div>
  );
};

export default React.memo(NoticesSearch);
