import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from 'axios';

const initialState = {
    users :[],
    persons :[]
}
export const handleGetUserAsyncData = createAsyncThunk("users/handleGetUserAsyncData",()=>{
    const usersData = Axios.get("http://localhost:3001/users").then((res)=>{
        return res.data;
    });
    return usersData;
})
export const handlePostUserAsyncData = createAsyncThunk("users/handlePostUserAsyncData",(user)=>{
    Axios.post("http://localhost:3001/users",user);
})
export const handleDeleteUserAsyncData = createAsyncThunk("users/handleDeleteUserAsyncData",(user)=>{
    Axios.delete("http://localhost:3001/users/"+user.id);
})
export const handlePutUserAsyncData = createAsyncThunk("users/handlePutUserAsyncData",(user)=>{
    Axios.put("http://localhost:3001/users/"+user.id,user);
})
export const userSlice = createSlice({
    name : "users",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(handleGetUserAsyncData.fulfilled,(state,action)=>{
            state.users = action.payload;
        });
        builder.addCase(handleGetUserAsyncData.rejected, () => {
            throw Error("GET API is getting rejected...!!!");
        });
        builder.addCase(handlePostUserAsyncData.fulfilled,()=>{
            console.log("New User added successfully...!!!");
        });
        builder.addCase(handlePostUserAsyncData.rejected, () => {
            throw Error("POST API is getting rejected...!!!");
        });
        builder.addCase(handleDeleteUserAsyncData.fulfilled,()=>{
            console.log("User Deleted successfully...!!!");
        });
        builder.addCase(handleDeleteUserAsyncData.rejected, () => {
            throw Error("Delete API is getting rejected...!!!");
        });
        builder.addCase(handlePutUserAsyncData.fulfilled,()=>{
            console.log("Existing user updated successfully...!!!");
        });
        builder.addCase(handlePutUserAsyncData.rejected,()=>{
            throw Error("Put API is getting rejected...!!!");
        })
    }
})

export default userSlice.reducer;