const {getJobs,getJob,createJob,updateJob,deleteJob} = require("../controllers/jobs")
const express=require("express")
const jobsRouter = express.Router()

router.get("/",getJobs)
router.get("/:id",getJob)
router.post("/:id",createJob)
router.patch("/:id",updateJob)
router.delete("/:id",deleteJob)

module.exports = jobsRouter