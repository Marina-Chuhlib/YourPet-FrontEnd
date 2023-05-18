import React, { useState } from 'react';
import { Button, Menu, MenuItem, Checkbox, Grid } from '@mui/material';

import css from '../Filter/Filter.module.css';
import FilterIcon from 'icons/FilterIcon';

const Filter = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [ageFilters, setAgeFilters] = useState([]);
  const [genderFilters, setGenderFilters] = useState([]);
  const [isAgeMenuOpen, setAgeMenuOpen] = useState(false);
  const [isGenderMenuOpen, setGenderMenuOpen] = useState(false);

  const handleButtonClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuToggle = menuType => {
    switch (menuType) {
      case 'age':
        setAgeMenuOpen(prevState => !prevState);
        break;
      case 'gender':
        setGenderMenuOpen(prevState => !prevState);
        break;
      default:
        break;
    }
  };

  const handleFilterChange = (event, filter, type) => {
    switch (type) {
      case 'age':
        setAgeFilters(prevFilters =>
          prevFilters.includes(filter)
            ? prevFilters.filter(f => f !== filter)
            : [...prevFilters, filter]
        );
        break;
      case 'gender':
        setGenderFilters(prevFilters =>
          prevFilters.includes(filter)
            ? prevFilters.filter(f => f !== filter)
            : [...prevFilters, filter]
        );
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleButtonClick}
        className={css.filterButton}
        endIcon={<FilterIcon color="#54ADFF" className={css.filterIcon} />}
        style={{
          borderRadius: '40px',
          borderWidth: '2px',
          borderColor: '#54ADFF',
          color: '#54ADFF',
          textTransform: 'none',
        }}
      >
        Filter
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleMenuToggle('age')}>
          <Grid container direction="column">
            <Grid item>By age</Grid>
            {isAgeMenuOpen && (
              <Grid container item direction="column">
                <Grid item onClick={event => event.stopPropagation()}>
                  <Checkbox
                    checked={ageFilters.includes('3-12 m')}
                    onClick={event =>
                      handleFilterChange(event, '3-12 m', 'age')
                    }
                  />
                  3-12 m
                </Grid>
                <Grid item onClick={event => event.stopPropagation()}>
                  <Checkbox
                    checked={ageFilters.includes('1 year')}
                    onClick={event =>
                      handleFilterChange(event, '1 year', 'age')
                    }
                  />
                  1 year
                </Grid>
                <Grid item onClick={event => event.stopPropagation()}>
                  <Checkbox
                    checked={ageFilters.includes('2 year')}
                    onClick={event =>
                      handleFilterChange(event, '2 year', 'age')
                    }
                  />
                  2 year
                </Grid>
              </Grid>
            )}
          </Grid>
        </MenuItem>
        <MenuItem onClick={() => handleMenuToggle('gender')}>
          <Grid container direction="column">
            <Grid item>By gender</Grid>
            {isGenderMenuOpen && (
              <Grid container item direction="column">
                <Grid item onClick={event => event.stopPropagation()}>
                  <Checkbox
                    checked={genderFilters.includes('female')}
                    onClick={event =>
                      handleFilterChange(event, 'female', 'gender')
                    }
                  />
                  female
                </Grid>
                <Grid item onClick={event => event.stopPropagation()}>
                  <Checkbox
                    checked={genderFilters.includes('male')}
                    onClick={event =>
                      handleFilterChange(event, 'male', 'gender')
                    }
                  />
                  male
                </Grid>
              </Grid>
            )}
          </Grid>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Filter;
