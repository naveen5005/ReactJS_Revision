import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users :[]
}

export const handleGetUsersAsyncActions = createAsyncThunk("handleGetUsersAsyncActions/users",()=>{
    const userDetails = fetch("http://localhost:3001/users",{
        method:"GET",
        body:null,
        headers : {'Content-Type':'application/json'},
    }).then((res)=>{
        return res.json();
    }).then((data)=>{
        return data
    });
    return userDetails;
});
export const handlePostUserAsyncActions = createAsyncThunk("handlePostUserAsyncActions/users",(user)=>{
    fetch("http://localhost:3001/users",{
        method:"POST",
        body:JSON.stringify(user),
        headers : {'Content-Type':'application/json'},
    });
})
export const handleDeleteUserAsyncActions = createAsyncThunk("handleDeleteUserAsyncActions/users",(user)=>{
    fetch("http://localhost:3001/users/"+user.id,{
        method:"DELETE",
        body:null,
        headers : {'Content-Type':'application/json'},
    });
})
export const handlePutUserAsyncActions = createAsyncThunk("handlePutUserAsyncActions/users",(user)=>{
    fetch("http://localhost:3001/users/"+user.id,{
        method:"PUT",
        body:JSON.stringify(user),
        headers : {'Content-Type':'application/json'},
    });
})
export const userSlice = createSlice({
    name : "users",
    initialState,
    extraReducers : (builder) =>{
        builder.addCase(handleGetUsersAsyncActions.fulfilled,(state,action)=>{
            state.users = action.payload;
        });
        builder.addCase(handlePostUserAsyncActions.fulfilled,()=>{
            console.log("user added successfully...!!!");
        });
        builder.addCase(handleDeleteUserAsyncActions.fulfilled,()=>{
            console.log("user deleted successfully...!!!");
        });
        builder.addCase(handlePutUserAsyncActions.fulfilled,()=>{
            console.log("user updated successfully...!!!");
        })
    }
})

export default userSlice.reducer