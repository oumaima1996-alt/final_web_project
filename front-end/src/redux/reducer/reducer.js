// import authReducer from './authReducer'
// import {combineReducers} from 'redux'
// const reducer =combineReducers({
//     auth:authReducer
// })
// export default reducer

  
import {combineReducers} from "redux"
import authReducer from "./authReducer"

import categoryReducer from "./categoryReducer"
import {itemReducer} from './itemReducer';
import errorReducer from './errorReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import {profileReducer} from './profileReducer';

export default  combineReducers({
    authReducer, 
   itemReducer,
    error: errorReducer,
    cart: cartReducer,
    profileReducer
   
})