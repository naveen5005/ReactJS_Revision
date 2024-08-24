import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLogins : [
        {
            "id": 1,
            "uname": "bellamnaveen314@gmail.com",
            "pwd": "12345"
          },
          {
            "id": 2,
            "uname": "kiran@gmail.com",
            "pwd": "12345"
          },
    ]
}


const userLoginSlicer = createSlice({
    name : "userLogins",
    initialState,
    reducers : {
        handleAddLogin : (state,action) => {
            state.userLogins.push(action.payload);
        },
        handleDeleteLogin : (state,action) => {
            console.log(action)
            state.userLogins = state.userLogins.filter((user)=>user.id !== action.payload.id);
        },
        handleUpdateLogin : (state,action) => {
            state.userLogins = state.userLogins.map((user)=>{
                if(user.id === action.payload.id){
                    return action.payload;
                } return user;
            })
        }
    }
})

export const {handleAddLogin, handleDeleteLogin, handleUpdateLogin} = userLoginSlicer.actions
export default userLoginSlicer.reducer;