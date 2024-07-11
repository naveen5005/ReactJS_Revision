import Axios from "axios";

const handleDataFromServer = (dispatch) => {
    Axios.get("http://localhost:3001/users").then(({data})=>{
        dispatch({
            type : "GET_USERS",
            payload : data
        })
    })
}

export const handleGetUsersAsyncAction = () =>{
    return (dispatch)=>{
        handleDataFromServer(dispatch);
    }
}

export const handlePostUserAsyncAction = (user) =>{
    return (dispatch)=>{
        Axios.post("http://localhost:3001/users",user).then(()=>{
            handleDataFromServer(dispatch);
        })
    }
}

export const handleDeleteUserAsyncAction = (user) =>{
    return (dispatch)=>{
        Axios.delete("http://localhost:3001/users/"+user.id).then(()=>{
            handleDataFromServer(dispatch);
        })
    }
}

export const handleUpdateUserAsyncAction = (user) =>{
    return (dispatch)=>{
        Axios.put("http://localhost:3001/users/"+user.id,user).then(()=>{
            handleDataFromServer(dispatch);
        })
    }
}