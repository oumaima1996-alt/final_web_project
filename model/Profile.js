
const mongoose =require("mongoose")
const Schema = mongoose.Schema
const profileSchema = new Schema ({
    fullname : {
        type : String, 
        required :true
    }, 
    aboutme : {
        type:String
        
    }, 
    // bithdate : {
    //     type :Date, 
    //     required :true
    // }, 
    // image : { data : Buffer, contentType:String

    // }
   location: {
       type:String, 
       required:true
   },
   facebook:{
       type:String, 
       required:true
   }, 
   twitter : {
       type:String, 
       required:true
   },
   website : {
       type : String, 
       required :true

   },
   Gender : {
       type:String
      
   },
   Phone: {
       type : String, 
       required:true

   }, 
   user : {type:Schema.Types.ObjectId, ref:"user"}
})

module.exports = mongoose.model("profile",profileSchema )