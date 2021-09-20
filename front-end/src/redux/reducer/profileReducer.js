import { GET_PROFILE } from "../action/actionTypes"

const initState ={
    profile :[]
}

export const  profileReducer =(state=initState , action)=>{

    switch (action.type) {

        case GET_PROFILE :
        return {...state, profile : action.payload}

        default : return state
    }
}