import {configureStore} from '@reduxjs/toolkit';
import  jwtAuthReducer  from '../jwtAuth';
import userReducer from '../userSlice';
import codeIntakeReducer from '../codeIntakeSlice';

export const store = configureStore({
    reducer: {
        auth: jwtAuthReducer,
        user: userReducer,
        code: codeIntakeReducer
    }
    
})


