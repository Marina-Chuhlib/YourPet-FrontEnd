import { Stack, Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useState, useEffect } from 'react';
import {
  selectAllNews,
  selectAllNewsTotalPages,
  selectAllNewsPage,
} from '../../../redux/news/newsSelectors';
import { useSelector } from 'react-redux';

const PaginationLine = ({ totalPages, onChange }) => {
  // const [currentPage, setPage] = useState(1);

  // useEffect(() => {}, []);
  const currentPage = useSelector(selectAllNewsPage);
  console.log(currentPage);

  const currentPageInt = Number(currentPage);
  const handlePageChange = (event, page) => {
    onChange(page);
  };
  // const handlePageChange = (event, page) => {
  //   onPageChange(page);
  // };

  return (
    <Stack spacing={2}>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={currentPageInt}
          color="primary"
          variant="outlined"
          onChange={handlePageChange}
          sx={{ marginX: 'auto' }}
          renderItem={item => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              component="button"
              // onClick={onClick}
              onClick={e => handlePageChange(e, item.page)}
              {...item}
            />
          )}
        />
      )}
    </Stack>
  );
};

export default PaginationLine;

//count- total page
//page-current page
