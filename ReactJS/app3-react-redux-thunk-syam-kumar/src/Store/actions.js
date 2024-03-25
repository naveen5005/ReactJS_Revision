import Axios from 'axios'


const handleUserGetData = (dispatch) => {
    Axios.get("http://localhost:3001/users").then((res) => {
        dispatch({
            type: "GET_USERS",
            payload: res.data
        })
    })
}
export const handleGetUserAsync = () => {
    return (dispatch) => {
        handleUserGetData(dispatch)
    }
}

export const handleDeleteUserAsync = (user) => {
    return (dispatch) => {
        Axios.delete("http://localhost:3001/users/" + user.id).then(() => {
            handleUserGetData(dispatch)
        })
    }
}

export const handleCreateUserAsync = (user) =>{
    return (dispatch)=>{
        Axios.post("http://localhost:3001/users/",user).then(()=>{
            handleUserGetData(dispatch)
        })
    }
}

export const handleUpdateUserAsync = (user) =>{
    return (dispatch) =>{
        Axios.put("http://localhost:3001/users/"+user.id,user).then(()=>{
            handleUserGetData(dispatch);
        })
    }
}