import Axios from 'axios';

const getUsersData = (dispatch) => {
    Axios.get("http://localhost:3001/users").then((res) => {
        dispatch({
            type: "GET_USERS",
            payload: res.data
        })
    })
}
export const handleGetUsersDataAsync = () => {
    return (dispatch) => {
        getUsersData(dispatch)
    }
}

export const handlePostUsersDataAsync = (user) =>{
    return (dispatch)=>{
        Axios.post("http://localhost:3001/users",user).then(()=>{
            getUsersData(dispatch)
        })
    }
}
export const handleDeleteUsersDataAsync = (user) =>{
    return (dispatch)=>{
        Axios.delete("http://localhost:3001/users/"+user.id).then(()=>{
            getUsersData(dispatch)
        })
    }
}

export const handleUpdateUsersDataAsync = (user) =>{
    return (dispatch)=>{
        Axios.put("http://localhost:3001/users/"+user.id,user).then(()=>{
            getUsersData(dispatch)
        })
    }
}
