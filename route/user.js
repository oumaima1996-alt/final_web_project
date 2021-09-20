const router=require("express").Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const session = require('express-session');

const Product= require("../model/Products")

const User= require("../model/User")
const {logger, registerRules,loginRules} =require("../middleware/bodyValidator")
const isAuth = require("../middleware/isAuth")



//Register
router.post("/register", registerRules() ,logger, async (req, res)=>{
     const{name, lastname, email,password,  role} =req.body
    try {
    let user = await User.findOne({email})
    if(user){
        return res.status(400).send("user already exist")
        }
        user = new User ({
            name ,
            lastname
            ,email,
            password
            // username:Math.random.toString(),
            
        })
        const salt = 10
        const hashedPassword = await bcrypt.hash(password, salt)
        console.log(hashedPassword)
        user.password=hashedPassword
        await user.save()
        const payload = {
           _id : user._id

        }
        const token = await jwt.sign(payload, process.env.secretOrKey);
        res.status(200).send({msg:"user has been saved", user, token})

    }catch(error){
        console.log(error)
    }
})
//LOGIN

// router.post("/login",loginRules() ,logger, async (req,res)=>{
//     const {email, password} =req.body
//     try{
//         let user = await User.findOne({email})
//         if(!user){
//             res.status(400).send('invalid mail')
//         }
//         const match = await bcrypt.compare(password, user.password)
    
//         if(!match){
//             res.status(400).send('invalid password')
//         }
//         const payload = {
//             _id :user._id
 
//          }
//          const token = await jwt.sign(payload, process.env.secretOrKey)

//         res.status(200).send({msg:"login with success", user:configuser(user), token})
//     }catch(error){
//         console.log(error)
//     }
// })

router.get('/isme',isAuth, (req,res)=>{
    res.status(200).send({user:req.user})
})

//logout 
// router.get('/logout', (req, res, next) => {
//     req.session.destroy();
//     res.redirect('/');
//   });

router.post("/login" , loginRules(), logger, async (req , res )=>{
    const { email , password} = req.body
    try{
       const user = await User.findOne({email})
       if(!user)
       {
        return res.status(400).send({msg : "bad credential email"})
       }
        const isMatch= await bcrypt.compare(password , user.password) ;

        if(!isMatch)
        {
        return res.status(400).send({msg : "bad credential password"})
       
        }

        const payload ={
            _id : user._id
        }
    const token = await jwt.sign(payload , process.env.secretOrkey)
        res.status(200).send({msg : "login Success" , user :configuser(user) ,token})
    }
    catch(error)
    {
        return res.status(500).send({msg : "error server"})
        console.log(error)
    } 
    })
    //get user
    // router.get("/userwithposts/:id", (req, res)=> {
    //     User.find({_id:req.params.id})
    //     .populate("user", "-email -password")
    //     .populate("products")
    //     .then((product)=>res.send({msg:"list of products", product}))
    //     .catch((error)=>console.log(error))
    // })


    router.get('/userwithposts',  (req,res)=>{
   
        User.find()
        .then(user=>res.send(user))
        .catch(error=>console.log(error))

    })
    //delete user

    router.delete('/deleleuserwithpost/:iduser', (req, res)=> {
        Product.deleteMany({user:req.params.iduser}, {new:true})
        .catch((error)=>console.log(error))
        const iduser =req.params.iduser;
        User.deleteOne({_id:iduser})
        .then((user)=>res.send({msg:"user deleted", user}))
        .catch((error)=>console.log(error))
    })

     //edit Profile
 router.put('/updateprofile/:_id',  (req,res)=>{
    const {_id} =req.params
    const {name, email} = req.body
    User.findOneAndUpdate({_id} , {$set:{name,email}})
    .then(profile =>res.send(profile))
    .catch(err=> console.log(err))
})

// //delete profile
// router.delete('/deleteprofile/:_id',   (req, res)=>{
//    const {_id} = req.params
//    User.deleteOne({_id})
//    .then(profile =>res.send(profile))
//    .catch(error=>console.log(error))
   

// })




module.exports =router
const configuser = ({name , email , _id})=>({
    name ,
    email ,
    _id 
})