import { createSlice } from "@reduxjs/toolkit"


const userDataSlice = createSlice({
    name: "userData",
    initialState: {userData:[]},
    reducers:{
        ADD(state , action){
           state.userData = action.payload;
        },
        CLEAR(state){
            state =null;
        }
    }
})

export const userActions = userDataSlice.actions

export default userDataSlice.reducer





