const express = require('express')
var cookieParser = require('cookie-parser');
const connectDB = require('./config/connectDB')
const cors = require('cors')
//routes
const userRouter = require('./route/user')
const adminRouter = require('./route/admin')
const categoryRouter = require('./route/category')

const productRouter = require('./route/product')
const profileRouter = require('./route/profile')
const commentRouter = require('./route/comment')
const cardRouter = require('./route/card')
const itemRouter = require('./route/item')

const app = express()
app.use(express.json()) // this is used to read the data that come from thr front end to the back end
//mongoodb connect
connectDB()




//app.use("/api/authentification/", router)
app.use(cors())
app.use('/uploads', express.static('uploads'));
app.use("/user", userRouter)
app.use("/admin", adminRouter)
app.use("/category", categoryRouter)

app.use("/product", productRouter)
app.use("/profile", profileRouter)
app.use("/comment", commentRouter)
app.use("/card", cardRouter)
// app.use("/item", itemRouter)

//port connection
const port = process.env.PORT || 5000
app.listen(port , (err)=>{
    err ? console.log(err) : console.log(`the server is runing on port ${port}`)
}) 