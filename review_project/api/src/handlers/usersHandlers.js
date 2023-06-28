const getUserHandler = (req, res) => {
  res.send("NIY: Esta Ruta trae La Info de todos los Usiarios");
};

const getUsersHandler = (req, res) => {
  const { id } = req.params;
  res.send(`Envia el detalle del usuario por ID ${id}`);
};

const createUsersHandler = (req, res) => {
  res.send("NIY: Esta Ruta crea un nuevo usuario");
};

module.exports = {
  getUserHandler,
  getUsersHandler,
  createUsersHandler,
};
