const initialState = {
    userLogins : []
}

export const userLoginsReducer = (state = initialState,action) =>{
    switch (action.type) {
        case "get_user_logins":
            return {
                ...state,
                userLogins : action.payload
            }
    
        default:
            return state;
    }
}