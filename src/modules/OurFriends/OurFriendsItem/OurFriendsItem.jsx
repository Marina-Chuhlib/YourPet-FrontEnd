import PropTypes from 'prop-types';

import WorkDaysDropdown from '../WorkDaysDropdown/WorkDaysDropdown';

import { useTranslation } from 'react-i18next';

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
  
const { t } = useTranslation();

  return (
    <li key={_id} className={css.cardItem}>
      <CardHeader
        sx={{ padding: 0 }}
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
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <CardMedia
          sx={{ width: 146, height: 104, backgroundSize: 'contain' }}
          className={css.customCardMedia}
          image={imageUrl}
          title={title}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {!workDays && (
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              className={css.customTypography}
            >
              <strong>{t("Time")}:</strong> <br /> {t("day and night")}
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
            <strong>{t("Address")}:</strong>
            <br />
            {address ? (
              <a href={addressUrl} target="_blank" rel="noreferrer">
                {address}
              </a>
            ) : (
              t('website only')
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
            <strong>{t("Email")}:</strong> <br />
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
            <strong>{t("Phone")}:</strong> <br />
            {phone ? <a href={`tel:${phone}`}>{phone}</a> : 'email only'}
          </Typography>
        </Box>
      </Box>
    </li>
  );
};

OurFriendsItem.propTypes = {
  _id: PropTypes.objectOf(PropTypes.string.isRequired),
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  workDays: PropTypes.arrayOf(PropTypes.object),
  address: PropTypes.string,
  addressUrl: PropTypes.string,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string,
};

export default OurFriendsItem;
