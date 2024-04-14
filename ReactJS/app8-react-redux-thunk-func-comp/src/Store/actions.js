import Axios from 'axios'


const handleGetData = (dispatch) =>{
    Axios.get("http://localhost:3001/users").then((res)=>{
        dispatch({
            type : "GET_USERS",
            payload : res.data
        })
    })
}
export const handleGetUserAsynAction = () => {
    return (dispatch)=>{
        handleGetData(dispatch)
    }
}

export const handlePostUserAsynAction = (user) => {
    return (dispatch) => {
        Axios.post("http://localhost:3001/users",user).then(()=>{
            handleGetData(dispatch)
        })
    }
}

export const handleUpdateUserAsyncAction = (user) => {
    return (dispatch) => {
        Axios.put("http://localhost:3001/users/"+user.id , user).then(()=>{
            handleGetData(dispatch)
        })
    }
}

export const handleDeleteUserAsyncAction = (user) => {
    return (dispatch) => {
        Axios.delete("http://localhost:3001/users/"+user.id).then(()=>{
            handleGetData(dispatch)
        })
    }
}

