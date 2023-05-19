import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, Checkbox, Grid, Icon, createTheme, ThemeProvider } from '@mui/material';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import css from '../Filter/Filter.module.css';
import FilterIcon from 'icons/FilterIcon';

const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#54adff',
          '&.Mui-checked': {
            color: '#54adff',
          },
        },
      },
    },
  },
});

const Filter = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [ageFilters, setAgeFilters] = useState([]);
  const [genderFilters, setGenderFilters] = useState([]);
  const [isAgeMenuOpen, setAgeMenuOpen] = useState(false);
  const [isGenderMenuOpen, setGenderMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuToggle = (menuType) => {
    switch (menuType) {
      case 'age':
        setAgeMenuOpen((prevState) => !prevState);
        break;
      case 'gender':
        setGenderMenuOpen((prevState) => !prevState);
        break;
      default:
        break;
    }
  };

  const handleFilterChange = (event, filter, type) => {
    switch (type) {
      case 'age':
        setAgeFilters((prevFilters) =>
          prevFilters.includes(filter)
            ? prevFilters.filter((f) => f !== filter)
            : [...prevFilters, filter]
        );
        break;
      case 'gender':
        setGenderFilters((prevFilters) =>
          prevFilters.includes(filter)
            ? prevFilters.filter((f) => f !== filter)
            : [...prevFilters, filter]
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const iconColor = isHovered ? '#fef9f9' : '#54adff';

  return (
    <ThemeProvider theme={theme}>
      <div>
        {isMobile ? (
          <button
            onClick={handleButtonClick}
            className={css.filterButtonMobile}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FilterIcon color={iconColor} />
          </button>
        ) : (
          <button
            onClick={handleButtonClick}
            className={css.filterButton}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Filter <FilterIcon color={iconColor} />
          </button>
        )}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <p className={css.title}>Filters</p>
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
                width: '136px',
                marginRight: '8px',
                marginLeft: '8px',
              }}
            >
              <Grid
                item
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Icon
                  component={
                    isAgeMenuOpen ? KeyboardArrowUpOutlinedIcon : KeyboardArrowDownOutlinedIcon
                  }
                />
                By age
              </Grid>
              {isAgeMenuOpen && (
                <Grid container item direction="column">
                  <Grid item onClick={(event) => event.stopPropagation()}>
                    <Checkbox
                      checked={ageFilters.includes('3-12 m')}
                      onClick={(event) => handleFilterChange(event, '3-12 m', 'age')}
                      sx={{
                        '& .MuiSvgIcon-root': {
                          color: '#54adff',
                        },
                        '&.Mui-checked': {
                          '& .MuiIconButton-root': {
                            background: 'transparent',
                            borderColor: '#54adff',
                          },
                          '& .MuiIconButton-label': {
                            color: '#54adff',
                          },
                        },
                      }}
                    />
                    3-12 m
                  </Grid>
                  <Grid item onClick={(event) => event.stopPropagation()}>
                    <Checkbox
                      checked={ageFilters.includes('1 year')}
                      onClick={(event) => handleFilterChange(event, '1 year', 'age')}
                      sx={{
                        '& .MuiSvgIcon-root': {
                          color: '#54adff',
                        },
                        '&.Mui-checked': {
                          '& .MuiIconButton-root': {
                            background: 'transparent',
                            borderColor: '#54adff',
                          },
                          '& .MuiIconButton-label': {
                            color: '#54adff',
                          },
                        },
                      }}
                    />
                    1 year
                  </Grid>
                  <Grid item onClick={(event) => event.stopPropagation()}>
                    <Checkbox
                      checked={ageFilters.includes('2 year')}
                      onClick={(event) => handleFilterChange(event, '2 year', 'age')}
                      sx={{
                        '& .MuiSvgIcon-root': {
                          color: '#54adff',
                        },
                        '&.Mui-checked': {
                          '& .MuiIconButton-root': {
                            background: 'transparent',
                            borderColor: '#54adff',
                          },
                          '& .MuiIconButton-label': {
                            color: '#54adff',
                          },
                        },
                      }}
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
                width: '136px',
                marginRight: '8px',
                marginLeft: '8px',
              }}
            >
              <Grid
                item
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Icon
                  component={
                    isGenderMenuOpen ? KeyboardArrowUpOutlinedIcon : KeyboardArrowDownOutlinedIcon
                  }
                />
                By gender
              </Grid>
              {isGenderMenuOpen && (
                <Grid container item direction="column">
                  <Grid item onClick={(event) => event.stopPropagation()}>
                    <Checkbox
                      checked={genderFilters.includes('Male')}
                      onClick={(event) => handleFilterChange(event, 'Male', 'gender')}
                      sx={{
                        '& .MuiSvgIcon-root': {
                          color: '#54adff',
                        },
                        '&.Mui-checked': {
                          '& .MuiIconButton-root': {
                            background: 'transparent',
                            borderColor: '#54adff',
                          },
                          '& .MuiIconButton-label': {
                            color: '#54adff',
                          },
                        },
                      }}
                    />
                    Male
                  </Grid>
                  <Grid item onClick={(event) => event.stopPropagation()}>
                    <Checkbox
                      checked={genderFilters.includes('Female')}
                      onClick={(event) => handleFilterChange(event, 'Female', 'gender')}
                      sx={{
                        '& .MuiSvgIcon-root': {
                          color: '#54adff',
                        },
                        '&.Mui-checked': {
                          '& .MuiIconButton-root': {
                            background: 'transparent',
                            borderColor: '#54adff',
                          },
                          '& .MuiIconButton-label': {
                            color: '#54adff',
                          },
                        },
                      }}
                    />
                    Female
                  </Grid>
                </Grid>
              )}
            </Grid>
          </MenuItem>
        </Menu>
      </div>
    </ThemeProvider>
  );
};

export default Filter;
