const express = require("express")
const router = express.Router()

const {getObjects} = require("../controllers/objects")

router.get("/",getObjects)

module.exports = router
