mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectID = require('mongodb').ObjectID;
const commentSchema =new Schema ({
    content : {
        type:String
        

    },


    user : {type:Schema.Types.ObjectId, ref:"user"}


})
module.exports = mongoose.model("comment",commentSchema )