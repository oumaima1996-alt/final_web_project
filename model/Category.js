// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const categorySchema = new Schema({
//     name : {
//         type : String
      
//     }, 
//     createdBy : {type:Schema.Types.ObjectId, ref:"user"}, 

    
//     date: {
//         type: Date,
//         default: Date.now
//     }
// })
// module.exports = mongoose.model('category',categorySchema )

const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
    },
    categoryImage: { type: String },
    parentId: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
     
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);