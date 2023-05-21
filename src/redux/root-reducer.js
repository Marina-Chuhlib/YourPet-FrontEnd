import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import noticesReducer from './notices/noticesSlice';
import newsSlice from './news/newsSlice';
import friendsReducer from './friends/friends-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  notices: noticesReducer,
  friends: friendsReducer,
  news: newsSlice,
});

export default rootReducer;
