module.exports = {
    getApts: async (req, res) => {
        const db = req.app.get('db')
        const aptArray = await db.appointment.get_appointments()
        if(!aptArray[0]) {
            return res.status(200).send({message: 'There are no appointments'})
        }
        res.status(200).send(aptArray)
    },

    createApt: (req, res) => {
        const {} = req.body
    }
}