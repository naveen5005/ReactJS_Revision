import axios from "axios";

const getDataFromAPI = async (dispatch) =>{
    const { data } = await axios.get("http://localhost:3001/persons");
    console.log(data)
        dispatch({
            type: "GET",
            payload: data
        })
}

export const postDataToApi = (user) =>{
    console.log(user)
    return  async (dispatch) =>{
         await axios.post("http://localhost:3001/persons",user);
         getDataFromAPI(dispatch);
    }   
}

export const handleGetUserAsync = () => {
    return async (dispatch) => {
        getDataFromAPI(dispatch);
    }
}

export const handleDeleteUserAsync = (user) =>{
    console.log(user)
    return  async (dispatch) =>{
         await axios.delete("http://localhost:3001/persons/"+user.id);
         getDataFromAPI(dispatch);
    }   
}

export const handleUpdateUserAsync = (user) =>{
    console.log(user)
    return  async (dispatch) =>{
         await axios.put("http://localhost:3001/persons/"+user.id,user);
         getDataFromAPI(dispatch);
    }   
}