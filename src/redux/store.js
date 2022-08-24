import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {listSlice} from './listSlice';
import {userSlice} from './userSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: {
    listReducer: listSlice.reducer,
    userReducer: persistReducer(persistConfig, userSlice.reducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const getListItemById = targetId =>
  store.getState().listReducer.list.find(({id}) => id === targetId);

export const persistor = persistStore(store);
