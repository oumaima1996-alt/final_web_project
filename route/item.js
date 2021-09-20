// const express = require('express')
// const router = express.Router()
// const Item = require('../model/Item')
// const path = require('path');
// const multer = require('multer');
// const shortid =require('shortid')
// const slugify = require("slugify")
// const {requireSignin, adminMiddleware} = require('../middleware/authRole')

// const jwt = require('jsonwebtoken')



// //Set The Storage Engine
// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: function(req, file, cb){
//     cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

//   const upload = multer({
//     storage: storage,
//     limits:{fileSize: 1000000},
//   fileFilter: function(req, file, cb){
//     checkFileType(file, cb);
//   }

  
   
//   });

//   function checkFileType(file, cb){
//     // Allowed ext
//     const filetypes = /jpeg|jpg|png|gif/;
//     // Check ext
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     // Check mime
//     const mimetype = filetypes.test(file.mimetype);
  
//     if(mimetype && extname){
//       return cb(null,true);
//     } else {
//       cb('Error: Images Only!');
//     }
//   }
  




// //const path = require('path')
// // const storage = multer.diskStorage({
// //   destination:function(req, file, cb) {
// //     cb(null,path.join(path.dirname(__dirname), 'uploads') )
// //   }, 
// //   filename:function(req, file, cb){
// //     cb(null,shortid.generate() + '_' + file.originalname)
// //   }
// // })
// // const upload= multer({storage})

// //addproduct
// router.post('/additem',upload.array("imageProducts"),(req,res)=>{
//     const {title, description,category, price} =req.body
//     // let imageProducts = [];

//     // if (req.files.length > 0) {
//     //   imageProducts = req.files.map((file) => {
//     //     return { img: file.location };
//     //   });
//     // }
//     // res.status(200).json({file:req.file, body:req.file})
//     const newItem = new Item({
//      title,
//      description, 
//      category,
//       price,
       
//     });
//     newItem.save()
//     .then(item=>res.send(item))
//     .catch(error=>console.log(error))
    
// })
// //get product
// router.get('/getitem', (req,res)=>{
   
//         Product.find()
//         .then(product=>res.send(product))
//         .catch(error=>console.log(error))

//     })

// //edit product
// router.put('/updateitem/:_id' , (req , res)=>{
//     const {_id}= req.params
//     const {name , category , stock } = req.body
//     Product.findOneAndUpdate({_id} , {$set:{name , category , stock}})
//    .then(product =>res.send(product))
//    .catch(err=> console.log(err))
// })

// //delete products

// router.delete('/deleteitem/:_id' ,  (req , res)=>{
//     const {_id} =  req.params 
 
//     Product.deleteOne({_id})
//     .then(product =>res.send(product))
//     .catch(err=> console.log(err))
 
//  })
 
// //  function authEditProduct(req,res,next){
// //    if(!canEditProduct(req.user = req.product)){
// //      res.status(401)
// //      return res.send('you are not allowed')
// //    }
// //    next()
// //  }
// //  function authDeleteProduct(req,res,next){
// //   if(!canDeleteProduct(req.user = req.product)){
// //     res.status(401)
// //     return res.send('you are not allowed')
// //   }
// //   next()
// //  }



// module.exports =router
