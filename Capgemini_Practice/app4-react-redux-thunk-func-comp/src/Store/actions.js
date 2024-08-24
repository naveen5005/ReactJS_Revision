import axios from 'axios';

const handleGetUserLoginDetails = (dispatch) => {
    axios.get("http://localhost:3001/usersLoginDetails").then(({ data }) => {
        dispatch({
            type: "get_user_logins",
            payload: data
        })
    })
}
export const handleGetUserLoginsAsyncData = () => {
    return (dispatch) => {
        handleGetUserLoginDetails(dispatch);
    }
}
export const handlePostUserLoginAsyncData = (user) => {
    return (dispatch) => {
        axios.post("http://localhost:3001/usersLoginDetails", user).then(() => {
            handleGetUserLoginDetails(dispatch);
        })
    }
}
export const handleDeleteUserLoginAsyncData = (user) => {
    return (dispatch) => {
        axios.delete("http://localhost:3001/usersLoginDetails/" + user.id).then(() => {
            handleGetUserLoginDetails(dispatch);
        })
    }
}

export const handleUpdateUserLoginAsyncData = (user) => {
    return (dispatch) => {
        axios.put("http://localhost:3001/usersLoginDetails/" + user.id,user).then(()=>{
            handleGetUserLoginDetails(dispatch);
        })
    }
}