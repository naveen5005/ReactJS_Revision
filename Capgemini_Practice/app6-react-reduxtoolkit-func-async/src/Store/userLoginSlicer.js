import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    userLogins: []
}
export const handleGetUserLoginAsyncAction = createAsyncThunk("handleGetUserLoginAsyncAction/userLogin", () => {
    const userLoginDetails =axios.get("http://localhost:3001/usersLoginDetails").then((res)=>{
        return res.data;
    });
    return userLoginDetails;
})
export const handleAddUserLoginAsyncAction = createAsyncThunk("handleAddUserLoginAsyncAction/userLogin",(user)=>{
    axios.post("http://localhost:3001/usersLoginDetails",user)
})
export const handleDeleteUserLoginAsyncAction = createAsyncThunk("handleDeleteUserLoginAsyncAction/userLogin",(user) => {
    axios.delete("http://localhost:3001/usersLoginDetails/"+user.id)
})
export const handleUpdateUserLoginAsyncAction = createAsyncThunk("handleUpdateUserLoginAsyncAction/userLogin",(user)=>{
    axios.put("http://localhost:3001/usersLoginDetails/"+user.id,user);
})
const userLoginSlicer = createSlice({
    name: "userLoginDetails",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(handleGetUserLoginAsyncAction.fulfilled,(state,action)=>{
            state.userLogins = action.payload
        });
        builder.addCase(handleAddUserLoginAsyncAction.fulfilled,()=>{
            
        });
        builder.addCase(handleDeleteUserLoginAsyncAction.fulfilled,()=>{

        });
        builder.addCase(handleUpdateUserLoginAsyncAction.fulfilled,()=>{

        });
    }
})

export default userLoginSlicer.reducer;