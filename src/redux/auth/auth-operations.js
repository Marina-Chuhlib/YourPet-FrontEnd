import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://yourpet-backend-3yf8.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      token.set(data.user.token);
      return data;
    } catch (error) {
      const errorData = error.response.data;
      let errorMessage = '';
      if (errorData.name) {
        errorMessage = `Email already exists in database`;
      } else {
        errorMessage = errorData.message;
      }
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue();
    }
  }
);
