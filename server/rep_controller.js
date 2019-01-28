module.exports = {
    getReps: async (req, res) => {
        const db = req.app.get('db')
        const repArray = await db.rep.get_reps()
        if(!repArray[0]) {
            return res.status(200).send({message: 'There are no Reps'})
        }
        res.status(200).send(repArray)
    }
}