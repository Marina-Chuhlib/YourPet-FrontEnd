import WorkDaysDropdown from '../WorkDaysDropdown/WorkDaysDropdown';

import { CardHeader, Box, CardMedia, Typography } from '@mui/material';
import css from './OurFriendsItem.module.css';

const OurFriendsItem = ({
  _id,
  url,
  title,
  imageUrl,
  workDays,
  address,
  addressUrl,
  email,
  phone,
}) => {
  return (
    <li key={_id} className={css.cardItem}>
      <CardHeader
        title={
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={css.friendLink}
          >
            {title}
          </a>
        }
      />
      <Box sx={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <CardMedia
          sx={{ width: 146, height: 104, objectFit: 'cover' }}
          className={css.customCardMedia}
          image={imageUrl}
          title={title}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          {!workDays && (
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              className={css.customTypography}
            >
              <strong>Time:</strong> <br /> day and night
            </Typography>
          )}
          {workDays && <WorkDaysDropdown workDays={workDays} />}
          <Typography
            variant="body1"
            component="p"
            gutterBottom
            className={css.customTypography}
            sx={{
              '&:hover': {
                color: '#54ADFF',
              },
              ...(address
                ? {}
                : {
                    '&:hover': {
                      color: 'inherit',
                    },
                  }),
            }}
          >
            <strong>Address:</strong>
            <br />
            {address ? (
              <a href={addressUrl} target="_blank" rel="noreferrer">
                {address}
              </a>
            ) : (
              'website only'
            )}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            gutterBottom
            className={css.customTypography}
            sx={{
              '&:hover': {
                color: '#54ADFF',
              },
              ...(email
                ? {}
                : {
                    '&:hover': {
                      color: 'inherit',
                    },
                  }),
            }}
          >
            <strong>Email:</strong> <br />
            {email ? <a href={`mailto:${email}`}>{email}</a> : 'website only'}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            gutterBottom
            className={css.customTypography}
            sx={{
              '&:hover': {
                color: '#54ADFF',
              },
              ...(phone
                ? {}
                : {
                    '&:hover': {
                      color: 'inherit',
                    },
                  }),
            }}
          >
            <strong>Phone:</strong> <br />
            {phone ? <a href={`tel:${phone}`}>{phone}</a> : 'email only'}
          </Typography>
        </Box>
      </Box>
    </li>
  );
};

export default OurFriendsItem;