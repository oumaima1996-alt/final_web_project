// //const express = require('express')
// const mongoose = require('mongoose')
// require("dotenv").config({path:"./config/.env"})
// module.exports  = async function(){
//     try{
//         await mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology:true, useNewUrlParser: true } )
//         console.log("databse is connected")

//     }catch(err){
//         console.log(err)
//     }
// }
const mongoose = require("mongoose")
require("dotenv").config({ path : './config/.env'} )
module.exports = async function() {
    try{
    await mongoose.connect(process.env.Mongo_URI , { useNewUrlParser: true , useUnifiedTopology: true } )
    console.log("the database is connected")

    }catch(error)
    {
        console.log(error , "error connection to database")
    } 
} 