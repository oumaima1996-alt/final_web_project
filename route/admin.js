const router=require("express").Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const session = require('express-session');


 const User= require("../model/User")
const {logger, registerRules,loginRules} =require("../middleware/bodyValidator")
const isAuth = require("../middleware/isAuth")


//Register
router.post("/register", registerRules() ,logger, async (req, res)=>{
     const{name, lastname, email,password, role} =req.body
    try {
    let admin = await User.findOne({email})
    if(admin){
        return res.status(400).send("admin already exist")
        }
        admin = new User ({
            name ,
            lastname
            ,email,
            password, 
            // username:Math.random.toString(),
            


            role:"admin" 
        })
        const salt = 10
        const hashedPassword = await bcrypt.hash(password, salt)
        console.log(hashedPassword)
        admin.password=hashedPassword
        await admin.save()
        const payload = {
           _id : admin._id

        }
        const token = await jwt.sign(payload, process.env.secretOrKey);
        res.status(200).send({msg:"admin has been saved", admin, token})

    }catch(error){
        console.log(error)
    }
})
//LOGIN

router.post("/login",loginRules() ,logger,  async (req,res)=>{
    const {email, password} =req.body
    try{
        let admin = await User.findOne({email})
        if(!admin && admin.role !== "admin"){
            res.status(400).send('invalid mail')
        }
        const match = await bcrypt.compare(password, admin.password)
    
        if(!match){
            res.status(400).send('invalid password')
        }
        const payload = {
            _id :admin._id
 
         }
         const token = await jwt.sign(payload, process.env.secretOrKey)

        res.status(200).send({msg:"login with success", admin:configuser(admin), token})
    }catch(error){
        console.log(error)
    }
})

router.get('/isme',isAuth, (req,res)=>{
    res.status(200).send({user:req.user})
})

//logout 
exports.signout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({
      message: "Signout successfully...!",
    });
  };
module.exports =router
const configuser = ({name,email, _id})=>({
    name, email, _id
})



//const User = require("../../models/user");



// const express = require('express');
// const { signup, signin, signout } = require('../middleware/authRole');
// const {logger, registerRules,loginRules} =require("../middleware/bodyValidator")
// const { requireSignin } = require('../middleware/authRole');
// const router = express.Router();


// router.post('/admin/signup', registerRules,logger, signup);
// router.post('/admin/signin', loginRules, logger, signin);
// router.post('/admin/signout', signout)


module.exports = router;