const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectID = require('mongodb').ObjectID;
const productSchema = new Schema({
    name : {
        type:String
       

    },


    price : {
        type:Number
       
    },
    slug: {
        type: String,
        required: true,
        unique: true,
      }
   
    ,
    offer : {type:Number}, 
    imageProducts:[{img: {type: String}}], 
    date: {
        type: Date,
        default: Date.now
    }, 
    // category : {type:Schema.Types.ObjectId, ref:"category"},
    review : [ {type:Schema.Types.ObjectId, ref:"user"}], 
      createdBy : {type:Schema.Types.ObjectId, ref:"user"}, 
      updatedAt :Date


})
module.exports = mongoose.model("product",productSchema )
