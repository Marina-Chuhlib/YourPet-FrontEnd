import { useState } from 'react';

import { Typography } from '@mui/material';
import css from './WorkDaysDropdown.module.css';

const WorkDaysDropdown = ({ workDays }) => {
  const [showSchedule, setShowSchedule] = useState(false);

  const [defaultTime] = useState(getDefaultTime());

  function getDefaultTime() {
    if (workDays && workDays.length > 0) {
      const firstWorkDay = workDays[0];
      const from = firstWorkDay.from ? firstWorkDay.from : '11:00';
      const to = firstWorkDay.to ? firstWorkDay.to : '16:00';
      return `${from} - ${to}`;
    } else {
      return 'Default time range';
    }
  }

  const handleTypographyClick = () => {
    setShowSchedule(!showSchedule);
  };

  const handleScheduleClick = e => {
    e.stopPropagation();
  };

  const daysOfWeek = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  return (
    <div>
      <Typography
        variant="body1"
        component="p"
        gutterBottom
        onClick={handleTypographyClick}
        className={css.customTypography}
        sx={{
          '&:hover': {
            color: '#54ADFF',
            cursor: 'pointer',
          },
        }}
      >
        <strong>Time:</strong> <br /> {defaultTime}
      </Typography>
      {showSchedule && (
        <div onClick={handleScheduleClick} className={css.timeBox}>
          {workDays.length > 0 ? (
            <ul className={css.timeList}>
              {workDays.map((day, index) => (
                <li key={index} className={css.timeItem}>
                  <strong>{daysOfWeek[index]}</strong> {day.from}-{day.to}
                </li>
              ))}
            </ul>
          ) : (
            <div>No working hours available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkDaysDropdown;
