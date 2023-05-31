import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;

const defaultTheme = isDarkTheme ? 'dark' : 'light';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || defaultTheme
  );

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  localStorage.setItem('theme', theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
