const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    name : {
        type:String,
        required: true
         
        // min:3, 
        // max:30
    },
    lastname : {
        type:String
        
        
        // min : 3, 
         },
        // username : {
        //     type:String,
            
             
        //     unique:true, 
        //     index:true,
        //     lowercase:true
        // }, 
    email : {
        type:String,
        required:true
     },
     password:{
         type:String,
         required:true  
     },
     role:{
         type:String, 
         num : ['user', "admin"], 
         default : "user"
     },
     phoneNumber : {type:String}, 
     profilePicture : {type:String},
     products : [
        { type:Schema.Types.ObjectId, 
         ref:"product"},
     ],
     

    
   
    })
module.exports = mongoose.model("user",userSchema )