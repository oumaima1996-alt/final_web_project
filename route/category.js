const Category = require("../model/Category")
const slugify = require('slugify')
const mongoose = require('mongoose')
const router = require('express').Router()
 
const {requireSignin, adminMiddleware} = require('../middleware/authRole')

router.post('/createCategory', (req, res)=> {
      const {name, slug, createdBy} = req.body
    const newCategory = new Category({
        name , 
       slug :slugify(name),

       
    })
    newCategory.save()
    .then(category => res.send(category))
    .catch(error=>console.log(error))

})


// router.post('/addcategory',requireSignin,(req,res)=>{
//     const {name,  createdBy} =req.body
//     // res.status(200).json({file:req.file, body:req.file})
//     const newCategory = new Category({
//       name ,
//       createdBy: req.user._id,
//     });
//     newCategory.save()
//     .then(category=>res.send(category))
//     .catch(error=>console.log(error))
    
// })



//get category 
router.get('/getcategory', (req,res)=>{
   
    Product.find()
    .then(category=>res.send(categoryt))
    .catch(error=>console.log(error))

})

//edit product

router.put('/updatecategory/:_id' , (req , res)=>{
    const {_id}= req.params
    const {name} = req.body
    Category.findOneAndUpdate({_id} , {$set:{name}})
   .then(category =>res.send(category))
   .catch(err=> console.log(err))
})

//delete category


router.delete('/deletecategory/:_id' ,  (req , res)=>{
    const {_id} =  req.params 
 
    Category.deleteOne({_id})
    .then(category =>res.send(category))
    .catch(err=> console.log(err))
 
 })

module.exports = router 


