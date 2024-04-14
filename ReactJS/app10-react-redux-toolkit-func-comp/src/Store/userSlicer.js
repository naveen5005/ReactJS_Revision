import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios';

const initialState = {
    users : []
}

export const handleGetUserAsyncAction = createAsyncThunk("users/handleGetUserAsyncAction",()=>{
    const userDetails = Axios.get("http://localhost:3001/users").then((res)=>{
        return res.data;
    })
    return userDetails;
});
export const handlePostUserAsyncAction = createAsyncThunk("users/handlePostUserAsyncAction",(user)=>{
    Axios.post("http://localhost:3001/users",user);
});
export const handleDeleteUserAsyncAction = createAsyncThunk("users/handleDeleteUserAsyncAction",(user)=>{
    Axios.delete("http://localhost:3001/users/"+user.id);
});
export const handleUpdateUserAsyncAction = createAsyncThunk("users/handleUpdateUserAsyncAction",(user)=>{
    Axios.put("http://localhost:3001/users/"+user.id,user);
});

export const userSlicer = createSlice({
    name : "users",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(handleGetUserAsyncAction.fulfilled,(state,action)=>{
            state.users = action.payload;
        });
        builder.addCase(handleGetUserAsyncAction.rejected,()=>{
            throw Error("GET API is getting rejected...!!!");
        });
        builder.addCase(handlePostUserAsyncAction.fulfilled,()=>{
            console.log("New User Added Successfully...!!!");
        });
        builder.addCase(handlePostUserAsyncAction.rejected,()=>{
            throw Error("POST APIis getting rejected...!!!");
        });
        builder.addCase(handleDeleteUserAsyncAction.fulfilled,()=>{
            console.log("User Deleted successfully...!!!");
        });
        builder.addCase(handleDeleteUserAsyncAction.rejected,()=>{
            throw Error("DELETE API is getting rejected...!!!");
        });
        builder.addCase(handleUpdateUserAsyncAction.fulfilled,()=>{
            console.log("Existing user updated successfully...!!!");
        });
        builder.addCase(handleUpdateUserAsyncAction.rejected,()=>{
            throw Error("PUT API us getting rejected...!!!");
        });
    }
})

export default userSlicer.reducer;