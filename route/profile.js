const express = require('express')
const router = express.Router()
const Profile = require('../model/Profile')
const User = require('../model/User')

const {requireSignin, adminMiddleware} = require('../middleware/authRole')



//add profile
router.post('/addprofile', (req,res)=>{
    const {name, lastname, email, password} =req.body
    const newProfile = new User( {
        name,
        lastname,
        email, password
    })
    newProfile.save()
    .then(profile=>res.send(profile))
    .catch(error=>console.log(error))
})


 // get Profile
 router.get('/getprofile', (req, res)=>{
     Profile.find()
     .then(profile =>res.send(profile))
     .catch(error=>console.log(error))
 })
 //edit Profile
 router.put('/updateprofile/:_id', (req,res)=>{
     const {_id} =req.params
     const {name, lastname,email,password} = req.body
     User.findOneAndUpdate({_id} , {$set:{name,lastname,email,password}})
     .then(profile =>res.send(profile))
     .catch(err=> console.log(err))
})

//delete profile
router.delete('/deleteprofile/:_id',   (req, res)=>{
    const {_id} = req.params
    User.deleteOne({_id})
    .then(profile =>res.send(profile))
    .catch(error=>console.log(error))
    

})
module.exports =router
