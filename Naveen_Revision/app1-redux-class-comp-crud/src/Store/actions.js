
 const handleGetUsersDataFromServer = (dispatch) => {
    fetch("http://localhost:3001/users",{
        method : "GET",
        body: null,
        headers : {'Content-Type' : 'application/json'}
    }).then((res)=>{
        return res.json();
    }).then((data)=>{
        dispatch({
            type: "GET_USERS",
            payload: data,
          });
    })
}
export const handleGetUsersAsyncActions = () =>{
    return (dispatch) =>{
        handleGetUsersDataFromServer(dispatch);
    }
}

export const handlePostUserAsyncActions = (user) =>{
    return (dispatch) =>{
        fetch("http://localhost:3001/users/",{
            method : "POST",
            headers : {'Content-Type' : 'application/json'},
            body: JSON.stringify(user)
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data)
            handleGetUsersDataFromServer(dispatch);
        })
    }
}

export const handleDeleteUserAsyncActions = (user) =>{
    return (dispatch) => {
        fetch("http://localhost:3001/users/"+user.id,{
            method : "DELETE",
            headers : {'Content-Type' : 'application/json'},
            body: null
        }).then(()=>{
            handleGetUsersDataFromServer(dispatch);
        })
    }
}

export const handleUpdateUserAsyncActions = (user) =>{
    return (dispatch) => {
        fetch("http://localhost:3001/users/"+user.id,{
            method : "PUT",
            headers : {'Content-Type' : 'application/json'},
            body: JSON.stringify(user)
        }).then(()=>{
            handleGetUsersDataFromServer(dispatch);
        })
    }
}