const { validateUser } = require("../middlewares/midUser");
const { Router } = require("express");
const {
  getUserHandler,
  getUsersHandler,
  createUsersHandler,
} = require("../handlers/usersHandlers");

const usersRouter = Router();

usersRouter.get("/", getUserHandler);

usersRouter.get("/:id", getUsersHandler);

usersRouter.post("/", validateUser, createUsersHandler);

module.exports = usersRouter;
