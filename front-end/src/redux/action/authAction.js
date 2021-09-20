import axios from 'axios'
import {LOGIN_USER ,
    LOGOUT,
    GET_AUTH_USER,
    REGISTER_USER ,
    AUTH_ERROR,
    SET_LOADING,
    GET_USER} from "../action/actionTypes"


     export const register = (formdata) =>async(dispatch) =>{
         dispatch(setLoading())
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
        dispatch(setLoading())

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

    // export const getUsers=(id)=>dispatch=>{
    //     axios.get(`/user/userwithposts/${id}`)
    //     .then( res=>dispatch({type:GET_USER , payload:res.data}))
    //     // .then(res=>console.log("res" ,res))
    //     .catch(err=>console.log(err))
    // }

    export const getUsers=()=>dispatch=>{
        axios.get(`/user/userwithposts`)
        .then( res=>dispatch({type:GET_USER , payload:res.data}))
        // .then(res=>console.log("res" ,res))
        .catch(err=>console.log(err))
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
    export const deleteUsers = (idUser) =>(dispatch)=> {
        axios.delete(`/user/deleleuserwithpost/${idUser}`)
        // .then((res)=>dispatch(getUsers()))
        .then((res)=>console.log(res.data.msg))

        .catch((error)=>console.log(error))
    }

    export const updateUser=(id , updatedProfile)=>(dispatch)=>{
        axios.put(`/user/updateprofile/${id}`,updatedProfile)
        .then((res)=>console.log(res.data.msg))
        .catch((err)=>console.log(err))
    }