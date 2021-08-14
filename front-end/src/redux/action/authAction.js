import axios from 'axios'
import {LOGIN_USER ,
    LOGOUT,
    GET_AUTH_USER,
    REGISTER_USER ,
    AUTH_ERROR,
    SET_LOADING} from "../action/actionTypes"


     export const register = (formdata) =>async(dispatch) =>{
         try {
            const  res = await axios.post('/user/register', formdata)
            dispatch({
                type : REGISTER_USER, 
                payload : res.data
            })
         }
         catch(error) {
             console.log(error)
             dispatch ({
                type : AUTH_ERROR
            })

         }
     }


     export const login = (formdata) =>async(dispatch) =>{
        try {
           const  res = await axios.post('/user/login', formdata)
           dispatch({
               type : LOGIN_USER, 
               payload : res.data
           })
        }
        catch(error) {
            console.log(error)
            dispatch ({
                type : AUTH_ERROR
            })

        }
    }


    export const getAuthUser = () => async (dispatch) => {
        dispatch(setLoading())
        try {
         const option = {
             headers :{
                authorization : localStorage.getItem("token") 
             }
            
         }

              const res = await axios.get("/user/isme" , option)
              dispatch ({
                  type : GET_AUTH_USER ,
                  payload : res.data ,
              })
        }catch(error){
          console.log(error)
          dispatch({
              type : AUTH_ERROR
          })
        }
    }

    export const logout =() =>async(dispatch)=>{
        dispatch({
            type : LOGOUT
        })
    }
    export const setLoading =() =>async(dispatch)=>{
        dispatch({
            type : SET_LOADING
        })
    }