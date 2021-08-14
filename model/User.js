const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    name : {
        type:String,
        required: true,
        trim : true, 
        min:3, 
        max:30
    },
    lastname : {
        type:String,
        required:true, 
        trim:true, 
        min : 3, 
        max:30},
        username : {
            type:String,
            
            trim:true, 
            unique:true, 
            index:true,
            lowercase:true
        }, 
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
     profilePicture : {type:String}
     

    
   
    })
module.exports = mongoose.model("user",userSchema )