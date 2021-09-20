import { GET_PRODUCT, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../action/actionTypes';

const initialState = {
    products: [],
    loading: false
}

export const  itemReducer =(state=initialState , action)=>{

    switch (action.type) {

        case GET_PRODUCT :
        return {...state, products : action.payload}

        default : return state
    }
}

// export default function(state=initialState, action){
//     switch(action.type){
//         case GET_PRODUCT:
//             return{
//                 ...state,
//                 items: action.payload,
//                 loading: false
//             }

//         case ADD_ITEM:
//             return{
//                 ...state,
//                 items: [action.payload, ...state.items]
//             }

//         case DELETE_ITEM:
//             return{
//                 ...state,
//                 items: state.items.filter(item => item._id!==action.payload)                
//             };

//         case UPDATE_ITEM:
//             const { id, data } = action.payload;
//             return{
//                 ...state,
//                 items: state.items.map(item => {
//                     if(item._id===id){
//                         item = data;
//                     }
//                 })
//             }

//         case ITEMS_LOADING:
//             return{
//                 ...state,
//                 loading: true
//             }

//         default:
//             return state;
//     }
// }