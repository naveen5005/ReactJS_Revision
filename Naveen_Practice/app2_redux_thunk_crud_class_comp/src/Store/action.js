import Axios from 'axios';

const handleGetUsers = (dispatch) => {
    Axios.get("http://localhost:3001/users").then(({ data }) => {
        dispatch({
            type: "GET_USERS",
            payload: data,
        });
    });
}
export const handleGetUsersAsyncActions = () => {
    return (dispatch) => {
       handleGetUsers(dispatch);
    }
}

export const handleDeleteUserAsyncActions = (user) => {
    return (dispatch) =>{
        Axios.delete("http://localhost:3001/users/"+user.id).then(()=>{
        handleGetUsers(dispatch);
    })
    }
}

export const handlePostUserAsyncActions = (user) => {
    return (dispatch) => {
        Axios.post("http://localhost:3001/users/",user).then(()=>{
            handleGetUsers(dispatch)
        })
    }
}

export const handlePutUserAsyncActions = (user) => {
    return (dispatch) =>{
        Axios.put("http://localhost:3001/users/"+user.id, user).then(()=>{
        handleGetUsers(dispatch);
    })
    }
}