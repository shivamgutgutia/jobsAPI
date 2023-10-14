require("dotenv").config()
const express = require("express")
const app = express()
const connectDB = require("./db/connect")
const notFound = require("./middleware/not-found")
const errorHandler = require("./middleware/error-handler")
require("express-async-errors")
const authRouter = require("./routers/auth")
const jobsRouter = require("./routers/jobs")
const auth = require("./middleware/auth")

const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');



app.use(express.json())
app.use(helmet)
app.use(cors)
app.use(xss)
app.use(rateLimiter({
    windowMs:15*60*1000,
    max:100
}))

//app.use("./public")
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/jobs",auth,jobsRouter)
app.use(notFound)
app.use(errorHandler)


const port = process.env.PORT || 3000

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening on port ${port}`))
    }catch(err){
        console.log(err)
    }
}
start()