import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        username : "Vaibhav Tanwar"
    },
    reducers : {
        login : (state,action) => {
            localStorage.setItem('spicetalksuser',action.payload)
        },
        logout : (state,action)=>{
            localStorage.removeItem('spicetalksuser');
        } 
    }
})

export const {login,logout} = userSlice.actions;
export default userSlice.reducer;