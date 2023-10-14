const {getJobs,getJob,createJob,updateJob,deleteJob} = require("../controllers/jobs")
const express=require("express")
const jobsRouter = express.Router()

jobsRouter.get("/",getJobs)
jobsRouter.get("/:id",getJob)
jobsRouter.post("/:id",createJob)
jobsRouter.patch("/:id",updateJob)
jobsRouter.delete("/:id",deleteJob)

module.exports = jobsRouter