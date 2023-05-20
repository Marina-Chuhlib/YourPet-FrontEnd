import { Stack, Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PaginationNotices = ({
  totalPages,
  currentCategory,
  ownCurrentPage,
  favoriteCurrentPage,
    onPageChange,
  currentPage
}) => {
    const currentPageInit =
        currentCategory === 'own'
            ? ownCurrentPage
            : currentCategory === 'favorite'
                ? favoriteCurrentPage
                : currentPage;

  const handlePageChange = (event, page) => {
    onPageChange(page);
  };

  return (
    <Stack spacing={2}>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={currentPageInit}
          color="primary"
          variant="outlined"
          onChange={handlePageChange}
          sx={{ marginX: 'auto' }}
          renderItem={item => (
            <PaginationItem
              icon={
                item.type === 'previous' ? (
                  <ArrowBackIcon />
                ) : (
                  <ArrowForwardIcon />
                )
              }
              component="button"
              onClick={e => handlePageChange(e, item.page)}
              selected={item.page === currentPage}
              {...item}
            />
          )}
        />
      )}
    </Stack>
  );
};

export default PaginationNotices;
