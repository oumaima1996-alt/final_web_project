const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectID = require('mongodb').ObjectID;
const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    postDate: {
        type: Date,
        default: Date.now
    }, 
    
    // category : {type:Schema.Types.ObjectId, ref:"category"},
    review : [ {type:Schema.Types.ObjectId, ref:"user"}], 
      createdBy : {type:Schema.Types.ObjectId, ref:"user"}, 
      updatedAt :Date, 
      user : {type:Schema.Types.ObjectId, ref:"user"}, 
      files : [Object], 
      fileSize : {
          type:String
          
      }, 
    //   productPictures: [
    //     { img: { type: String } }
    // ],

 
})
module.exports = mongoose.model("product",productSchema )
