import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

// export const THEME_LIGHT = 'light';
// export const THEME_DARK = 'dark';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

// export const useTheme = () => useContext(ThemeContext);
