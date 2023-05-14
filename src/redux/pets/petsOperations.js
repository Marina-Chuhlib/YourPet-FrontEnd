import { createAsyncThunk } from '@reduxjs/toolkit';
import * as App from '../../shared/services/App/pets';

export const fetchAllPets = createAsyncThunk(
  'pets/fetch-all',
  async (_, thunkApi) => {
    try {
      const data = await App.getAllPets();
      return data;
    } catch ({ response }) {
      return thunkApi.rejectWithValue(response.data);
    }
  }
);
export const fetchAddPet = createAsyncThunk(
  'pets/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await App.addPet(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchDeletePet = createAsyncThunk(
  'pets/delete',
  async (id, { rejectWithValue }) => {
    try {
      await App.deletePet(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
