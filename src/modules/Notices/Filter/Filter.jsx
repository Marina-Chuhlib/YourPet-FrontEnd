import React, { useState } from 'react';
import { Menu, MenuItem, Checkbox, Grid, Icon } from '@mui/material';
// import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import css from '../Filter/Filter.module.css';
import FilterIcon from 'icons/FilterIcon';

const Filter = () => {
  const [isHovered, setIsHovered] = useState(false);
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

  const iconColor = isHovered ? '#fef9f9' : '#54adff';

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className={css.filterButton}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Filter <FilterIcon color={iconColor} className={css.filterIcon} />
      </button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem
          onClick={() => handleMenuToggle('age')}
          style={{
            padding: '0',
            color: '#54ADFF',
            fontFamily: 'Inter',
            fontSize: '14px',
            lineHeight: '130%',
          }}
        >
          <Grid
            container
            direction="column"
            style={{
              backgroundColor: '#CCE4FB',
              borderRadius: '20px',
              padding: '8px 22px 8px 8px',
              marginBottom: '8px',
            }}
          >
            <Grid
              item
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}
            >
              <Icon component={KeyboardArrowDownOutlinedIcon} />
              By age
            </Grid>
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
        <MenuItem
          onClick={() => handleMenuToggle('gender')}
          style={{
            padding: '0',
            color: '#54ADFF',
            fontFamily: 'Inter',
            fontSize: '14px',
            lineHeight: '130%',
          }}
        >
          <Grid
            container
            direction="column"
            style={{
              backgroundColor: '#CCE4FB',
              borderRadius: '20px',
              padding: '8px 22px 8px 8px',
            }}
          >
            <Grid
              item
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}
            >
              <Icon component={KeyboardArrowDownOutlinedIcon} />
              By gender
            </Grid>
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
