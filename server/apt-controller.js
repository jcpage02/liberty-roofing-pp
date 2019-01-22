module.exports = {
  getApts: async (req, res) => {
    const db = req.app.get("db");
    const aptArray = await db.appointment.get_appointments();
    if (!aptArray[0]) {
      return res.status(200).send({ message: "There are no appointments" });
    }
    res.status(200).send(aptArray);
  },

  createApt: async (req, res) => {
    const {
      firstName,
      lastName,
      address,
      city,
      state,
      phone,
      email,
      images,
      date,
      type
    } = req.body;
    const db = req.app.get("db");
    const aptArray = await db.appointment.add_appointment({
      firstName,
      lastName,
      address,
      city,
      state,
      phone,
      email,
      images,
      date,
      type
    });
    res.status(200).send(aptArray);
  },

  deleteApt: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    await db.appointment.delete_appointment({ id });
    res.status(200).send("Appointment deleted");
  },

  updateApt: async (req, res) => {
    const { id } = req.params;
    const {first, last, address, city, state, phone, email, date, type} = req.body;
    const db = req.app.get("db");
    await db.appointment.update_appointment(
      { id },
      { first, last, address, city, state, phone, email, date, type }
    );
  }
};
