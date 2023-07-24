const { createUser } = require("../controllers/usersController");

const getUserHandler = (req, res) => {
  const { name } = req.query;
  if (name) res.send(`Quiero buscar todos los que se llamen ${name}`);
  else res.send("Quiero enviar todos los usuarios");
};

const getUsersHandler = (req, res) => {
  const { id } = req.params;
  res.send(`Envia el detalle del usuario por ID ${id}`);
};

const createUsersHandler = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newUser = await createUser(name, email, phone);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUserHandler,
  getUsersHandler,
  createUsersHandler,
};
