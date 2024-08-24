const initialState ={
    users : []
}

export const userReducer = (state = initialState,action) =>{
    switch (action.type) {
        case "get_users":
            return {
                ...state,
                users : action.payload
            }
        default:
            return state;
    }
}