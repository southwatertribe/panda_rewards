import {configureStore} from '@reduxjs/toolkit';
import  jwtAuthReducer  from '../jwtAuth';

export const store = configureStore({
    reducer: {
        auth: jwtAuthReducer 
    },
    
})


