import axios from 'axios';

// const { REACT_APP_BASE_URL } = process.env;

// const instance = axios.create({
//   baseURL: REACT_APP_BASE_URL,
// });

const instance = axios.create({
  baseURL: 'https://yourpet-backend-3yf8.onrender.com/api',
});

export const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const register = async data => {
  const { data: result } = await instance.post('/auth/register', data);
  if (result) {
    const { email, password } = data;
    const { data: result } = await instance.post('/auth/login', {
      email,
      password,
    });
    setToken(result.accessToken);
    return result;
  }
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/auth/login', data);
  await setToken(result.accessToken);
  return result;
};

export const getCurrent = async token => {
  try {
    setToken(token);

    const { data } = await instance.get('/auth/current');
    console.log(data, 'data APP');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post('/auth/logout');
  setToken();
  return data;
};

export default instance;
