// import authReducer from './authReducer'
// import {combineReducers} from 'redux'
// const reducer =combineReducers({
//     auth:authReducer
// })
// export default reducer

  
import {combineReducers} from "redux"
import authReducer from "./authReducer"

import categoryReducer from "./categoryReducer"
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

export default  combineReducers({
    authReducer, 
    item: itemReducer,
    error: errorReducer,
    cart: cartReducer
    
   
})