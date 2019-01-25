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
    const {cust_first, cust_last, cust_address, cust_city, cust_state, cust_phone, cust_email, apt_date, apt_type} = req.body;
    const db = req.app.get("db");
    await db.appointment.update_appointment(
      {cust_first, cust_last, cust_address, cust_city, cust_state, cust_phone, cust_email, apt_date, apt_type, id}
    );
  }
};
