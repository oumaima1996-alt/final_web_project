
const mongoose =require("mongoose")
const Schema = mongoose.Schema
const profileSchema = new Schema ({
   
//     // }
//    location: {
//        type:String, 
//        required:true
//    },
//    facebook:{
//        type:String, 
//        required:true
//    }, 
//    twitter : {
//        type:String, 
//        required:true
//    },
//    website : {
//        type : String, 
//        required :true

//    },
//    Gender : {
//        type:String
      
//    },
//    Phone: {
//        type : String, 
//        required:true

//    }, 
//    user : {type:Schema.Types.ObjectId, ref:"user"}

name : {
    type:String,
    required: true
     
    // min:3, 
    // max:30
},
lastname : {
    type:String
    
    
    
     },
     
email : {
    type:String,
    required:true
 },
 password:{
     type:String,
     required:true  
 }, 

 
 user : [
    { type:Schema.Types.ObjectId, 
     ref:"product"},
 ],
 



})

module.exports = mongoose.model("profile",profileSchema )