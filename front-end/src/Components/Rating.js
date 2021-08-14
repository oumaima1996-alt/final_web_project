// import React from 'react'

//  const  Rating =({setRate , rate}) =>{
//     const array = (x)=>{
//         let star = [] ;
//         for(let i = 1 ; i <= 5 ; i++)
//         {
//             if (i <= x)
//             {
//               star.push(
                  
//                     <span style={{fontSize:"200% " , color: "yellow" , cursor:"pointer"}}
//                     key={i}
//                     onClick={()=>setRate(i)}
//                     >
//                        ★
                        
//                         </span>

//               )
//             }
//             else {
//                 star.push(
//                     <span style={{fontSize:"200% "  , color:"yellow" , cursor:"pointer"}}
//                     key={i}
//                     onClick={()=>setRate(i)}>
//                       ☆
//                     </span>
//                 )
//             }
//         }
//         return star
//     }

//     return (
//         <div>
//          {array(rate)} 
//         </div>
//     )
// }
// Rating.defaultProps ={
//     setRate : () =>{} ,
//     rate : 0 ,
// }
// export default Rating ;