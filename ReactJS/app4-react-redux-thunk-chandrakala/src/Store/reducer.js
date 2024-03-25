const initialState = {
    users:[],
    products:[],
    cards:[],
}
export const reducer = (state =initialState,action) =>{
    switch (action.type) {
        case "GET":
            return{
                ...state,
                users : action.payload,
            }
    
        default:
            return state;
    }
}