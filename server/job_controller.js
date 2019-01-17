module.exports = {
    getActive: async (req, res) => {
        const db = req.app.get('db')
        const jobArray = await db.job.get_active_jobs()
        if(!jobArray[0]) {
            return res.status(200).send({message: 'There are no active jobs'})
        }
        // const { job_price, job_date, job_address, job_city, job_state, job_zip, job_ecd, cust_first, cust_last, cust_phone, cust_email, crew_name, crew_head, crew_phone } = jobArray[0]
        res.status(200).send(jobArray)
    },
    createJob: async (req, res) => {
        const db = req.app.get('db')
        const {price, date, } = req.body
        const jobArray = await db.job.add_jobs()
    }
}