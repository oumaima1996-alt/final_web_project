const express = require('express')
const router = express.Router()
const Profile = require('../model/Profile')
const {requireSignin, adminMiddleware} = require('../middleware/authRole')



//add profile
router.post('/addprofile', (req,res)=>{
    const {fullname, aboutme,location,facebook,twitter,website,Gender,Phone} =req.body
    const newProfile = new Profile( {
        fullname, aboutme,
        location,
        facebook,twitter,
        website,Gender,Phone
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
     const {fullname, abboutme,location,facebook,twitter,website,Gender,Phone} = req.body
     Profile.findOneAndUpdate({_id} , {$set:{fullname, abboutme,location,facebook,twitter,website,Gender,Phone}})
     .then(profile =>res.send(profile))
     .catch(err=> console.log(err))
})

//delete profile
router.delete('/deleteprofile/:_id',   (req, res)=>{
    const {_id} = req.params
    Profile.deleteOne({_id})
    .then(profile =>res.send(profile))
    .catch(error=>console.log(error))
    

})
module.exports =router
