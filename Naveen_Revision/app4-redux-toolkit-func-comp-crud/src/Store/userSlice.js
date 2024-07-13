import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';

const initialState = {
    users : []
}

export const handleGetUsersAsyncData = createAsyncThunk("handleGetUsersAsyncData/users",()=>{
    const userDetails =Axios.get("http://localhost:3001/users").then((res)=>{
        return res.data;
    })
    return userDetails;
})
export const handlePostUserAsyncData = createAsyncThunk("handlePostUserAsyncData/users",(user)=>{
    Axios.post("http://localhost:3001/users",user);
})
export const handleDeleteUserAsyncData = createAsyncThunk("handleDeleteUserAsyncAction/users",(user)=>{
    Axios.delete("http://localhost:3001/users/"+user.id);
})
export const handleUpdateUserAsyncData = createAsyncThunk("handleUpdateUserAsyncData/users",(user)=>{
    Axios.put("http://localhost:3001/users/"+user.id,user);
})
export const userSlice = createSlice({
    name : "users",
    initialState,
    extraReducers : (builder) =>{
        builder.addCase(handleGetUsersAsyncData.fulfilled,((state,action)=>{
            state.users = action.payload;
        }));
        builder.addCase(handlePostUserAsyncData.fulfilled,()=>{
            console.log("new user added successfully...!!!");
        });
        builder.addCase(handleDeleteUserAsyncData.fulfilled,()=>{
            console.log("User deleted successfully...!!!");
        });
        builder.addCase(handleUpdateUserAsyncData.fulfilled,()=>{
            console.log("User updated successfully...!!!!");
        });
    }
})

export default userSlice.reducer;