const getJobs = async(req,res)=>{
    res.end("Get all jobs")
}

const getJob = async(req,res)=>{
    res.end("Get a jobs")
}
const createJob = async(req,res)=>{
    res.end("Job created")
}
const updateJob = async(req,res)=>{
    res.end("Job Updated")
}
const deleteJob = async(req,res)=>{
    res.end("Job deleted")
}

module.exports = {
    getJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}