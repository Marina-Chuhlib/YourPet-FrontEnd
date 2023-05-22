import { Stack, Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function PaginationLine({ totalPages, onChange, currentPage }) {
  const handlePageChange = (event, page) => {
    onChange(page);
  };

  return (
    <Stack spacing={2}>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={currentPage}
          color="primary"
          variant="outlined"
          onChange={handlePageChange}
          sx={{ marginX: 'auto' }}
          renderItem={item => (
            <PaginationItem
              icons={{
                previous: <ArrowBackIcon />,
                next: <ArrowForwardIcon />,
              }}
              component="button"
              onClick={e => handlePageChange(e, item.page)}
              {...item}
            />
          )}
        />
      )}
    </Stack>
  );
}

export default PaginationLine;
