import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false
}
export const jwtAuthSlice = createSlice({
    name: "AUTH",
    initialState,
    reducers: {
        signedIn: (state) => {
            state.isLoggedIn = true;            
        }
    }
}); 
 
export const {signedIn} = jwtAuthSlice.actions
export default jwtAuthSlice.reducer;