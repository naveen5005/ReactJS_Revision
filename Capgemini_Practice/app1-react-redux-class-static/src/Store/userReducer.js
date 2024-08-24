const initialState = {
    users: [
        {
            "fname": "Naveen Babu",
            "gender": "Male",
            "areasOfInterest": [
                "REACTJS"
            ],
            "state": "AP",
            "id": 1
        },
        {
            "fname": "naveen",
            "gender": "Others",
            "areasOfInterest": [
                "BOOTSTRAP",
                "HTML"
            ],
            "state": "AP",
            "id": 4
        }
    ]
}

export const userReducer = (state = initialState,action)=>{
    console.log(action)
    switch (action.type) {
        case "add_user":
            return {
                ...state,
                users : [...state.users,action.payload]
            }
        case "delete_user":
            return{
                users : state.users.filter((usr)=>usr.id !== action.payload.id)
            }
        case "update_user":
            return {
                users : state.users.map((usr)=>{
                    if(usr.id === action.payload.id){
                        return action.payload
                    } return usr;
                })
            }
        default:
            return state;
    }
}