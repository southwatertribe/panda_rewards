import {configureStore} from '@reduxjs/toolkit';
import  jwtAuthReducer  from '../jwtAuth';
import userSliceReducer from '../userSlice';

export const store = configureStore({
    reducer: {
        auth: jwtAuthReducer,
        user: userSliceReducer
    },
    
})


