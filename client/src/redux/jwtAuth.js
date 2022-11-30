import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    isLoggedIn: false
}
const jwtAuthSlice = createSlice({
    name: "AUTH",
    initialState,
    reducers: {
        signedIn: (state) => {
            state.isLoggedIn = true;            
        }
    }
}); 



export default jwtAuthSlice.reducer;