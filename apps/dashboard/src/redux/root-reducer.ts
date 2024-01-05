import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { persistReducer } from 'redux-persist';
import storage from '@session/storage';

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: [ "isAuthenticated", "user", "session" ],
};

const rootReducer = combineReducers({
  auth: persistReducer({
    ...authPersistConfig,
  }, authReducer)
});


export default rootReducer
