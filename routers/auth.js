const {login,register} = require("../controllers/auth")

const express=require("express")
const authRouter = express.Router()

router.post("/login",login)
router.post("/register",register)

module.exports = authRouter