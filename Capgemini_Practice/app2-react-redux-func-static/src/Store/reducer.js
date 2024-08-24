const initialState = {
    persons : [
        {
            id : 1,
            fname : "naveen"
        },
        {
            id : 2,
            fname : "naveena"
        }
    ]
}

export const personReducer = (state = initialState,action) =>{
    switch (action.type) {
        case "add_person":
            return {
                ...state,
                persons : [...state.persons,action.payload]
            }
        case "delete_person":
            return {
                persons : state.persons.filter((per) => per.id !== action.payload.id)
            }
        case "update_person":
            return {
                persons : state.persons.map((per)=>{
                    if(per.id === action.payload.id){
                        return action.payload;
                    } return per;
                })
            }
        default:
            return state;
    }
}