import {configureStore} from '@reduxjs/toolkit';
import  jwtAuthReducer  from '../jwtAuth';
import userReducer from '../userSlice';
import codeIntakeReducer from '../codeIntakeSlice';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session'

import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'counter',
    storage: storageSession
};

const reducers = combineReducers({
    auth: jwtAuthReducer,
    user: userReducer,
    code: codeIntakeReducer});

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: {persistedReducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})


