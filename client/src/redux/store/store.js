import {configureStore} from '@reduxjs/toolkit';
import  jwtAuthSlice  from '../jwtAuth';

export const store = configureStore({
    reducer: {
        auth: jwtAuthSlice 
    },
    
})


