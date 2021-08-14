const express = require('express')
const router = express.Router()
const Comment = require('../model/Comments')
//const {authRole, canEdit} = require("../middleware/authRole")

//Comments 

//add comments
router.post('/addcomment', (req,res)=>{
    const {content} =req.body
    const newComment = new Comment( {
        content
    })
    newComment.save()
    .then(comment=>res.send(comment))
    .catch(error=>console.log(error))
})

//get comment 
router.get('/getcomment', (req,res)=>{
    Comment.find()
    .then(comment =>res.send(comment))
    .then(error =>console.log(error))
})
//edit comment
router.put("/updatecomment/:_id", (req,res)=>{
    const {_id} = req.params
    const {content} =req.body
    Comment.findOneAndUpdate({_id},{$set:{content}})
    .then(comment =>res.send(comment))
    .then(error=>console.log(error))

})
//delete comment
router.delete('/deletecomment/:_id', (req,res)=>{
    const {_id} = req.params
    Comment.deleteOne({_id})
    .then(comment=>res.send(comment))
    .then(error=>console.log(error))
})


module.exports =router