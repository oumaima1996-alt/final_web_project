// import axios from 'axios';
// import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEMS_LOADING } from './actionTypes';
// import { returnErrors } from './errorActions';

// export const getItems = () => dispatch => {
//     dispatch(setItemsLoading());
//     axios.get('/item/getitem')
//         .then(res => dispatch({
//             type: GET_ITEMS,
//             payload: res.data
//         }))
//         .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
// }

// export const addItem = (item) => (dispatch) => {
//     axios.post('item/additem', item)
//         .then(res => dispatch({
//             type: ADD_ITEM,
//             payload: res.data
//         }))
//         .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
// }

// export const deleteItem = (id) => (dispatch) => {
//     axios.delete(`item/deleteitem/${id}`)
//         .then(res => dispatch({
//             type: DELETE_ITEM,
//             payload: id
//         }))
//         .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
// }

// export const updateItem = (id, item) => (dispatch) => {
//     axios.put(`item/updateitem/${id}`, item)
//         .then(res => dispatch({
//             type: UPDATE_ITEM,
//             payload: Promise.all([id, res.data])
//         }))
//         .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
// }

// export const setItemsLoading = () => {
//     return{
//         type: ITEMS_LOADING
//     }
// }


import { GET_PRODUCT, ADD_PRODUCT } from "./actionTypes"
import axios from 'axios'
export const getitem=()=>(dispatch)=>{
    axios.get(`/product/getproduct`)
    .then( res=>dispatch({type:GET_PRODUCT , payload:res.data}))
    // .then(res=>console.log("res" ,res))
    .catch(err=>console.log(err))
}

// export const addItem =(newProduct)=> dispatch=>{
//     axios.post(`/product/addproduct` ,newProduct)
//     // .then( res=>dispatch(getitem()))
//     .then((res)=>console.log(res.data.msg))
//     .catch(err=>console.log(err))

// }

export const addItem= (id, newProduct) =>(dispatch)=> {
    axios.post(`/product/addproduct/${id}`, newProduct)
      
     .then((res)=>console.log(res.data.msg))
     .catch((error)=>console.log(error))
     
    
  };

export const deleteProduct =( idproduct,idUser)=> (dispatch)=>{
    axios.delete(`/product/deleteproduct/${idproduct}/${idUser}`)
    // .then( res=>dispatch(getitem()))
    .then((res)=>console.log(res.data.msg))
    .catch(err=>console.log(err))
}

export const updateProduct=(id , updatedProduct)=>(dispatch)=>{
    axios.put(`/product/updateproduct/${id}`,updatedProduct)
    .then((res)=>console.log(res.data.msg))
    .catch((err)=>console.log(err))
}
