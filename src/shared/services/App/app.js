import axios from 'axios';

// const { REACT_APP_BASE_URL } = process.env;

// const instance = axios.create({
//   baseURL: REACT_APP_BASE_URL,
// });

const instance = axios.create({
  baseURL: 'https://yourpet-backend-3yf8.onrender.com/api',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const register = async data => {
  const { data: result } = await instance.post('/auth/register', data);
  setToken(result.token);
  return result;
};

export default instance;
