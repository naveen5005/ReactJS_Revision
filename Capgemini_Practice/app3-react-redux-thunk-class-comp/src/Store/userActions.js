import axios from 'axios';

const handleGetUserData = (dispatch) => {
    axios.get("http://localhost:3001/users").then(({data})=>{
        dispatch({
            type : "get_users",
            payload : data
        })
    })
}
export const handleGetUsersDataAsync = () => {
    return (dispatch) =>{
        handleGetUserData(dispatch)
    }
}

export const handleDeleteUserDataAsync = (user) => {
    return (dispatch) => {
        axios.delete("http://localhost:3001/users/"+user.id).then(()=>{
            handleGetUserData(dispatch);
        })
    }
}

export const handleAddUserDataAsync = (user) => {
    return (dispatch) => {
        axios.post("http://localhost:3001/users",user).then(()=>{
            handleGetUserData(dispatch);
        })
    }
}

export const handleUpdateUserDataAsync = (user) => {
    return (dispatch) => {
        axios.put("http://localhost:3001/users/"+user.id,user).then(()=>{
            handleGetUserData(dispatch);
        })
    }
}