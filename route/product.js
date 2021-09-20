const express = require('express')
const router = express.Router()
const Product = require('../model/Products')
const User = require('../model/User')

const path = require('path');
const multer = require('multer');
const shortid =require('shortid')
const slugify = require("slugify")
const {requireSignin, adminMiddleware} = require('../middleware/authRole')
const isAuth = require('../middleware/isAuth')

const jwt = require('jsonwebtoken')



//Set The Storage Engine
const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: function(req, file, cb){
//     cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });
destination:function(req,file,cb){
  cb(null,'./front-end/public/uploads/')
},
filename:function(req, file,cb){
  cb(null, new Date().toISOString().replace(/:/g, ""))
}
})

  const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }

  
   
  });

  function checkFileType(file, cb){
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
  
    if(mimetype && extname){
      return cb(null,true);
    } else {
      cb('Error: Images Only!');
    }
  }

  const fileSizeFormatter = (bytes, decimal)=> {
    if(bytes ==0) {
      return "0 Bytes"
    }
    const dm = decimal ||2;
    const sizes = ["Bytes", "KB","MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
    const index = Math.floor(Math.log(bytes)/Math.log(1000));
    return (
      parseFloat((bytes/Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
    )
  }
  




//const path = require('path')
// const storage = multer.diskStorage({
//   destination:function(req, file, cb) {
//     cb(null,path.join(path.dirname(__dirname), 'uploads') )
//   }, 
//   filename:function(req, file, cb){
//     cb(null,shortid.generate() + '_' + file.originalname)
//   }
// })
// const upload= multer({storage})

//addproduct
router.post('/addproduct/:id',upload.array("files"),(req,res)=>{
    const {title,price,  description, category,   createdBy} =req.body
    let filesArray = [];
  // if (req.files.length > 0) {
  //   files = req.files.map((file) => {
  //     return {files : file.location};
  //   });
  // }

  req.files.forEach((element)=>{
    const file = {
      fileSize:fileSizeFormatter(element.size,2),
      files:element.filename,
    };
    filesArray.push(file)
  }
  )
    const newProduct = new Product({
      title :req.body.title,
      price :req.body.price, 
      description :req.body.description,
      category :req.body.category,
      files : filesArray, 

      // producPictures,
      user:req.params.id
    });
    newProduct.save()
    User.findOneAndUpdate(
      {_id:req.params.id},
      {$push: {products:newProduct._id}},
      {new:true}
    )
    .then(product=>res.send(product))
    .catch(error=>console.log(error))
    
})
//get product
router.get('/getproduct', (req,res)=>{
   
        Product.find()
        .then(product=>res.send(product))
        .catch(error=>console.log(error))

    })

//edit product
router.put("/updateproduct/:id", upload.array("files"), (req ,res)=>{
  let filesArray = [];
  req.files.forEach((element)=>{
    const file = {
      fileSize:fileSizeFormatter(element.size,2),
      files:element.filename,
    };
    filesArray.push(file)
  }
  )
//     const {_id}= req.params
//     const {title,price, description , category, files} = req.body
//     Product.findOneAndUpdate({_id} , {$set:{title,price, description , category, files }})
//    .then(product =>res.send(product))
//    .catch(err=> console.log(err))
// })
Product.findById(req.params.id).then((product)=>{
  product.title = req.body.title;
  product.price = req.body.price;
  product.description = req.body.description;
  product.category = req.body.category;
  product.files = filesArray;


product.save()
.then((product)=>res.send({msg:"post updated", product}))
.catch((error)=>console.log(error))



}
)
})
//delete products

router.delete('/deleteproduct/:idproduct/:iduser' ,  (req , res)=>{
    const idproduct =  req.params.idproduct 
 
    Product.deleteOne({_id:idproduct})
    // .then(product =>res.send(product))
    .catch((err)=> console.log(err))

    User.findByIdAndUpdate(
      { _id:req.params.iduser},
      {$pull:{products:req.params.idproduct}},
      {new:true})
      .then((user)=> 
      res.send({msg: "product deleted Successfully", user}))
      .catch((error)=>console.log(error))
 
 })
 



module.exports =router
