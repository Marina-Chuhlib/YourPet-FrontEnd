
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputAdornment, IconButton, Input, Typography } from '@mui/material';
import { Search, Clear } from '@mui/icons-material';

import css from '../NoticesSearch/NoticesSearch.module.css';
import { fetchNoticesByCategory } from 'redux/notices/noticesOperations';
import { selectCategory } from 'redux/notices/noticesSelectors';


const NoticesSearch = () => {
  const dispatch = useDispatch();
  const [tempKeyword, setTempKeyword] = useState('');
  const [showHelperText, setShowHelperText] = useState(false);
  const category = useSelector(selectCategory);

  const handleClear = () => {
    setTempKeyword('');
    setShowHelperText(false);
  };

  const handleKeywordChange = (e) => {
    setTempKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tempKeyword.trim() === '') {
      setShowHelperText(true);
    } else {
      console.log(`Выполняется поиск в категории ${category} по ключевому слову ${tempKeyword}`);
      dispatch(fetchNoticesByCategory({ categoryName: category, query: tempKeyword.trim() }));
      setTempKeyword('');
      setShowHelperText(false);
    }
  };

  return (
    <>
      <div className={css.inputContainer}>
        <form onSubmit={handleSubmit}>
          <Input
            value={tempKeyword}
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
                {tempKeyword && (
                  <IconButton onClick={handleClear} style={{ color: '#FFC107' }}>
                    <Clear />
                  </IconButton>
                )}
              </InputAdornment>
            }
            fullWidth
          />
          {showHelperText && (
            <Typography variant="caption" color="error" marginLeft="20px" fontSize="16px">
              Please enter something.
            </Typography>
          )}
        </form>
      </div>
    </>
  );
};

export default NoticesSearch;

