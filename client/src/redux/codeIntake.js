import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    code: {
        
    }
}

export const codeIntakeSlice = createSlice({
    name: "CODE",
    initialState: initialState,
    reducers:{
        getCodeEntry: (state, {payload})=> {
                state.code = payload
            }
        }
})

export const {getCodeEntry} = codeIntakeSlice.actions
export default codeIntakeSlice.reducer;