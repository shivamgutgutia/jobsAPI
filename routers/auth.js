const {login,register} = require("../controllers/auth")

const express=require("express")
const authRouter = express.Router()

authRouter.post("/login",login)
authRouter.post("/register",register)

module.exports = authRouter