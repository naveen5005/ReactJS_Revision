import Axios from 'axios';

const getUsersData = (dispatch) =>{
    Axios.get("http://localhost:3001/users").then((res)=>{
            dispatch({
                type: "GET_USERS",
                payload : res.data
            })
        })
}
export const handleGetUsersDataAsync = ()=>{
    return  (dispatch)=>{
        getUsersData(dispatch)
    }
}

export const handleDeleteUserDataAsync = (user) =>{
    return (dispatch)=>{
        Axios.delete("http://localhost:3001/users/"+user.id).then(()=>{
            getUsersData(dispatch);
        })
    }
}
export const handlePostUserDataAsync = (user) =>{
    return (dispatch)=>{
        Axios.post("http://localhost:3001/users/",user).then(()=>{
            getUsersData(dispatch)
        })
    }
}

export const handlePutUserDataAsync = (user) =>{
    return (dispatch)=>{
        Axios.put("http://localhost:3001/users/"+user.id,user).then(()=>{
            getUsersData(dispatch)
        })
    }
}