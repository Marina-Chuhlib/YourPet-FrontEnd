// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useLocation,useNavigate } from 'react-router-dom';
// import { InputAdornment, IconButton, Input, Typography } from '@mui/material';
// import { Search, Clear } from '@mui/icons-material';

// import { fetchNoticesByCategory } from 'redux/notices/noticesOperations';

// import css from '../NoticesSearch/NoticesSearch.module.css';

// const NoticesSearch = () => {
//   const [keyword, setKeyword] = useState('');
//   const [showHelperText, setShowHelperText] = useState(false);
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const category = location.pathname.split('/')[2];

//   useEffect(() => {
//     if (formSubmitted) {
//       dispatch(fetchNoticesByCategory({ categoryName: category, query: keyword }));
//       setFormSubmitted(false);
//       setKeyword("");
//     }
//   }, [dispatch, category, keyword, formSubmitted]);

// const handleSearch = (e) => {
//   e.preventDefault();
//   if (keyword.trim() === '') {
//     setShowHelperText(true);
//   } else {
//     console.log(`Выполняется поиск в категории ${category} по ключевому слову ${keyword}` );
//     setFormSubmitted(true);
//     const searchParams = new URLSearchParams(location.search);
//     searchParams.set('searchValue', keyword);
//     navigate(`${location.pathname}?${searchParams.toString()}`);
//   }
// };

//   const handleClear = () => {
//     setKeyword('');
//     setShowHelperText(false);
//   };

//   return (
//     <>
//       <div className={css.inputContainer}>
//         <form onSubmit={handleSearch}>
//           <Input
//             value={keyword}
//             onChange={(e) => setKeyword(e.target.value)}
//             placeholder="Search"
//             disableUnderline
//             style={{
//               borderRadius: '20px',
//               backgroundColor: '#FFFFFF',
//               padding: '0px 14px 0px 20px',
//               height: '43px',
//               boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
//             }}
//             inputProps={{
//               className: css.placeholder,
//             }}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton type="submit" style={{ color: '#54ADFF' }}>
//                   <Search />
//                 </IconButton>
//                 {keyword && (
//                   <IconButton onClick={handleClear} style={{ color: '#FFC107' }}>
//                     <Clear />
//                   </IconButton>
//                 )}
//               </InputAdornment>
//             }
//             fullWidth
//           />
//           {showHelperText && (
//             <Typography variant="caption" color="error" marginLeft="20px" fontSize="16px">
//               Please enter something.
//             </Typography>
//           )}
//         </form>
//       </div>
//     </>
//   );
// };

// export default NoticesSearch;

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

