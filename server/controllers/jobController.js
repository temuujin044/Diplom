import Job from "../models/Job.js"



// Get All Jobs
export const getJobs = async (req, res) => {
    try {

        const jobs = await Job.find({ visible: true })
            .populate({ path: 'companyId', select: '-password' })

        res.json({ success: true, jobs })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// Get Single Job Using JobID
export const getJobById = async (req, res) => {
    try {

        const { id } = req.params

        const job = await Job.findById(id)
            .populate({
                path: 'companyId',
                select: '-password'
            })

        if (!job) {
            return res.json({
                success: false,
                message: 'Job not found'
            })
        }

        res.json({
            success: true,
            job
        })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="aab9e9ae-db58-5edc-9f77-78e83aff1ced")}catch(e){}}();
//# debugId=aab9e9ae-db58-5edc-9f77-78e83aff1ced
