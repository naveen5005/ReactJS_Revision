import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users :[
        {
            id : 1,
            uname : "naveen@gmail.com",
            pwd : "123"
        },
        {
            id : 2,
            uname : "syam@gmail.com",
            pwd : "123"
        }
    ],
    userInfo : {
        email : "",
        authToken : ""
    }
}
export const userSlice = createSlice({
    name : "users",
    initialState,
    reducers : {
        addUser : (state,action) =>{
            state.users.push(action.payload);
        },
        deleteUser : (state,action) =>{
            state.users = state.users.filter((user)=>user.id !== action.payload.id);
        },
        updateUser : (state,action) =>{
            // console.log(action)
            state.users = state.users.map((user)=>{
                if(user.id === action.payload.id){
                    return action.payload;
                }
                return user;
            })
        },
        userInfoDetails : (state,action) =>{
            state.userInfo.authToken = action.payload
        },
        userEmailInfo : (state,action) =>{
            state.userInfo.email = action.payload
        }
    }
});

export const {addUser,deleteUser,updateUser,userInfoDetails,userEmailInfo} = userSlice.actions;
export default userSlice.reducer