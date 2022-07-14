import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts';
import { authReducer } from './auth';
import filterReducer from '../redux/filterSlice'



const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);



// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { contactsReducer } from './contacts';
// import { authReducer } from './auth';
// import filterReducer from '../redux/filterSlice'



// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import { contactsApi } from './api/contactsApi';
// import { usersApi } from './api/usersApi';
// import { filterReducer, tokenReducer } from "./reduce/filter";
// import { tokenReducer } from "./slice/items";

// export const store = configureStore({
//   reducer: {
//     filter: filterReducer,
//     token: tokenReducer,
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     [usersApi.reducerPath]: usersApi.reducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactsApi.middleware,
//     usersApi.middleware,
//   ],
// });





// import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { contactsApi } from './api/contactsApi';
// import { usersApi } from './api/usersApi';
// import { filterReducer} from "./reduce/filter";
// import { tokenReducer } from "./slice/items";
// import {authSlice } from './slice/items'

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const persistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ['token'],
// };

// // const persistedReducer = persistReducer(persistConfig, tokenReducer);
// const persistedReducer = persistReducer(persistConfig, authSlice.reducer);


// export const store = configureStore({
//   reducer: {
//     token: persistedReducer,
//     filter: filterReducer,
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     [usersApi.reducerPath]: usersApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>[
//     ...getDefaultMiddleware(
//       {serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       }}),
//     contactsApi.middleware,
//     usersApi.middleware,
//     ]
// });

// export const persistor = persistStore(store);