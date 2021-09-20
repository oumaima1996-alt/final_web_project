import { GET_PROFILE } from "./actionTypes"
import axios from 'axios'
export const getProfile=()=>dispatch=>{
    axios.get('/profile/getprofile')
    .then( res=>dispatch({type:GET_PROFILE , payload:res.data}))
    .then(res=>console.log("res" ,res))
    .catch(err=>console.log(err))
}

export const addProfile =(newContact)=> dispatch=>{
    axios.post('/profile/addprofile' ,newContact)
    .then( res=>dispatch(getProfile()))
    .catch(err=>console.log(err))

}

export const deleteProfile =(idcontact)=> dispatch=>{
    axios.delete(`/delete/deleteprofile/${idcontact}`)
    .then( res=>dispatch(getProfile()))
    .catch(err=>console.log(err))
}

export const putProfile=(idContact , updatedContact)=>dispatch=>{
    axios.put(`/api/example/updateuser/${idContact}`,updatedContact)
    .then( res=>dispatch(getProfile()))
    .catch(err=>console.log(err))
}