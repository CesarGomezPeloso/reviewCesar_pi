const { Router } = require("express");
const postsRouter = Router();

postsRouter.get("/", (req, res) => {
  res.send("NIY: Estoy en posts");
});

postsRouter.post("/", (req, res) => {
  res.send("NIY: Estoy en la creacion de posts");
});

// postsRouter.get("/posts/:id", (req, res) => {
//   res.send("Detalle del posts");
// });

module.exports = postsRouter;
