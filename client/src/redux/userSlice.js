import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        
    }
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
    getUserSuccess: (state, {payload})=> {
            state.user = payload
        }
    }

})

export const {getUserSuccess} = userSlice.actions
export default userSlice.reducer;