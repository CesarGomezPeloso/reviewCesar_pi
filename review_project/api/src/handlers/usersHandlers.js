const getUserHandler = (req, res) => {
  const { name } = req.query;
  if (name) res.send(`Quiero buscar todos los que se llamen ${name}`);
  else res.send("Quiero enviar todos los usuarios");
};

const getUsersHandler = (req, res) => {
  const { id } = req.params;
  res.send(`Envia el detalle del usuario por ID ${id}`);
};

const createUsersHandler = (req, res) => {
  const { name, email, phone } = req.body;
  res.send(`Estoy por crear un usuario con estos datos:
    name: ${name},
    email:${email},
    phone:${phone} 
  `);
};

module.exports = {
  getUserHandler,
  getUsersHandler,
  createUsersHandler,
};
