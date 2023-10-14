require("dotenv").config()
const express = require("express")
const app = express()
const connectDB = require("./db/connect")
const notFound = require("./middleware/not-found")
const errorHandler = require("./middleware/error-handler")
require("express-async-errors")
const router = require("./routers/objects")

app.use(express.json())
//app.use("./public")
app.use("/api/v1/objects",router)
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