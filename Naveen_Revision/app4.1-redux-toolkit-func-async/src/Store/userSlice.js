import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    users : []
}

export const handleGetUsersAsyncData = createAsyncThunk("handleGetUsersAsyncData/users",()=>{
    const response =  axios.get("http://localhost:3001/users").then((res)=>{
        return res.data;
    });
    return response;
});
export const handleDeleteUserAsyncData = createAsyncThunk("handleDeleteUserAsyncData/users",(user)=>{
    console.log(user)
    axios.delete("http://localhost:3001/users/"+user.id);
});
export const handlePostUSerAsyncData = createAsyncThunk("handlePostUSerAsyncData/users",(user)=>{
    axios.post("http://localhost:3001/users",user);
});
export const handleUpdateUserAsyncData = createAsyncThunk("handleUpdateUserAsyncData/users",(user)=>{
    axios.put("http://localhost:3001/users/"+user.id,user);
})
const userSlicer = createSlice({
    name : "users",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(handleGetUsersAsyncData.fulfilled,(state,action)=>{
            state.users = action.payload
        });
    }
})

export default userSlicer.reducer;