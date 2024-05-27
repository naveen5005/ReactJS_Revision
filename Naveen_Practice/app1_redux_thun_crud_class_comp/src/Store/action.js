import Axios from 'axios';

const handlegetUsersAsyncAction = (dispatch) => {
    Axios.get("http://localhost:3001/users").then(({ data }) => {
        dispatch({
            type: "GET_USERS",
            payload: data
        });
    });
}
export const handleGetUsersAsyncActions = () => {
    return (dispatch) => {
        handlegetUsersAsyncAction(dispatch);
    }
}

export const handleDeleteUsersAsyncActions = (user) => {
    return (dispatch) => {
        Axios.delete("http://localhost:3001/users/" + user.id).then(() => {
            handlegetUsersAsyncAction(dispatch);
        })
    }
}

export const handlePostUsersAsyncActions = (user) => {
    return (dispatch) => {
        Axios.post("http://localhost:3001/users/", user).then(() => {
            handlegetUsersAsyncAction(dispatch);
        })
    }
}

export const handlePutUsersAsyncActions = (user) => {
    return (dispatch) => {
        Axios.put("http://localhost:3001/users/" + user.id,user).then(() => {
            handlegetUsersAsyncAction(dispatch);
        })
    }
}