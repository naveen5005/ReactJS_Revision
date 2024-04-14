import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Axios from 'axios'

const initialState = {
    users : []
}

export const handleGetUsersAsyncAction = createAsyncThunk("users/handleGetUsersAsyncAction",()=>{
   const usersDetails= Axios.get("http://localhost:3001/users").then((res)=>{
        return res.data
    })
    return usersDetails
})

export const handlePostUSersAsyncAction = createAsyncThunk("users/handlePostUSersAsyncAction",(user)=>{
    Axios.post("http://localhost:3001/users",user);
})

export const handleDeleteUsersAsyncAction = createAsyncThunk("users/handleDeleteUsersAsyncAction",(user)=>{
    Axios.delete("http://localhost:3001/users/"+user.id);
})
export const handleUpdateUsersAsyncAction = createAsyncThunk("users/handleUpdateUsersAsyncAction",(user)=>{
    Axios.put("http://localhost:3001/users/"+user.id,user);
})
export const userSlicer = createSlice({
    name :'users',
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(handleGetUsersAsyncAction.fulfilled,(state,action)=>{
            state.users = action.payload;
        });
        builder.addCase(handleGetUsersAsyncAction.rejected,()=>{
            throw Error("GET API is getting rejected...!!!");
        });
        builder.addCase(handlePostUSersAsyncAction.fulfilled,()=>{
            console.log("New User added successfully...!!!");
        });
        builder.addCase(handlePostUSersAsyncAction.rejected,()=>{
            throw Error("POST API is getting rejected...!!!");
        });
        builder.addCase(handleDeleteUsersAsyncAction.fulfilled,()=>{
            console.log("User Deleted successfully...!!!!");
        });
        builder.addCase(handleDeleteUsersAsyncAction.rejected,()=>{
            throw Error("DELETE API is getting rejected...!!!");
        });
        builder.addCase(handleUpdateUsersAsyncAction.fulfilled,()=>{
            console.log("Existing user updated successfully...!!!");
        });
        builder.addCase(handleUpdateUsersAsyncAction.rejected,()=>{
            throw Error("PUT API is getting rejected...!!!");
        });
    }
})

export default userSlicer.reducer