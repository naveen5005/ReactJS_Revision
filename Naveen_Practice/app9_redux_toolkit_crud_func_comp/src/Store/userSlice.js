import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from 'axios';

const initialState = {
    users :[]
}
export const handleGetUserAsync = createAsyncThunk("users/handleGetUserAync",()=>{
   const userData = Axios.get("http://localhost:3001/users").then((res)=>{
        return res.data;
    });
    return userData;
})
export const handlePostUserAsync = createAsyncThunk("users/handlePostUserAsync",(user)=>{
    Axios.post("http://localhost:3001/users",user);
});
export const handleDeleteUserAsync = createAsyncThunk("users/handleDeleteUserAsync",(user)=>{
    Axios.delete("http://localhost:3001/users/"+user.id);
});
export const handleUpdateUserAsync = createAsyncThunk("users/handleUpdateUserAsync",(user)=>{
    Axios.put("http://localhost:3001/users/"+user.id,user);
})
export const userSlice = createSlice({
    name : 'users',
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(handleGetUserAsync.fulfilled,(state,action)=>{
            state.users = action.payload;
        });
        builder.addCase(handleGetUserAsync.rejected,(state,action)=>{
            state.users =[];
        });
        builder.addCase(handlePostUserAsync.fulfilled,()=>{
            console.log("user added successfully...!!!!")
        });
        builder.addCase(handleDeleteUserAsync.fulfilled,()=>{
            console.log("user deleted successfully...!!!!")
        });
        builder.addCase(handleUpdateUserAsync.fulfilled,()=>{
            console.log("user updated successfully...!!!!")
        });
    }
})

export default userSlice.reducer;